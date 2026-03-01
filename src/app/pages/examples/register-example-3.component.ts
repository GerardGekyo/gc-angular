import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  AvatarComponent,
  InputComponent,
  CheckboxComponent,
  ButtonComponent,
  SpinnerComponent,
  DialogComponent,
} from 'garaq-angular-components';
import { ExampleSectionTabsComponent } from '../../shared/example-section-tabs/example-section-tabs.component';

interface RegisterData {
  name: string;
  email: string;
}

@Component({
  selector: 'example-register-3',
  imports: [
    RouterLink,
    AvatarComponent,
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
    SpinnerComponent,
    DialogComponent,
    ExampleSectionTabsComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register-example-3.component.html',
  styleUrl: './register-example-3.component.css',
})
export class RegisterExample3Component {
  protected readonly name = signal('');
  protected readonly email = signal('');
  protected readonly password = signal('');
  protected readonly confirmPassword = signal('');
  protected readonly acceptTerms = signal(false);
  protected readonly loading = signal(false);
  protected readonly submitAttempted = signal(false);
  protected readonly submittedData = signal<RegisterData | null>(null);

  protected readonly nameInvalid = computed(
    () => this.submitAttempted() && !this.name().trim(),
  );
  protected readonly emailInvalid = computed(
    () => this.submitAttempted() && !this.email().trim(),
  );
  protected readonly passwordInvalid = computed(
    () => this.submitAttempted() && this.password().length < 6,
  );
  protected readonly confirmInvalid = computed(
    () =>
      this.submitAttempted() &&
      this.confirmPassword() !== this.password(),
  );
  protected readonly termsInvalid = computed(
    () => this.submitAttempted() && !this.acceptTerms(),
  );

  /** 0–4 strength score */
  protected readonly passwordStrength = computed(() => {
    const p = this.password();
    if (!p) return 0;
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    return score;
  });

  protected readonly strengthLabel = computed(() => {
    switch (this.passwordStrength()) {
      case 0:
        return '';
      case 1:
        return 'Muy débil';
      case 2:
        return 'Débil';
      case 3:
        return 'Buena';
      case 4:
        return 'Excelente';
      default:
        return '';
    }
  });

  protected readonly strengthColor = computed(() => {
    switch (this.passwordStrength()) {
      case 1:
        return 'bg-red-500';
      case 2:
        return 'bg-orange-400';
      case 3:
        return 'bg-yellow-400';
      case 4:
        return 'bg-emerald-500';
      default:
        return 'bg-gray-200';
    }
  });

  protected onRegister(): void {
    if (this.loading()) return;
    this.submitAttempted.set(true);
    if (
      !this.name().trim() ||
      !this.email().trim() ||
      this.password().length < 6 ||
      this.confirmPassword() !== this.password() ||
      !this.acceptTerms()
    )
      return;

    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      this.submittedData.set({ name: this.name(), email: this.email() });
    }, 1500);
  }

  protected onDialogClose(): void {
    this.submittedData.set(null);
    this.submitAttempted.set(false);
    this.name.set('');
    this.email.set('');
    this.password.set('');
    this.confirmPassword.set('');
    this.acceptTerms.set(false);
  }

  readonly htmlCode = `<!-- Centered card with avatar preview and password strength indicator -->
<div class="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
  <div class="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-10">

    <!-- Avatar preview -->
    <div class="flex flex-col items-center mb-6">
      <gc-avatar size="xl" [name]="name() || 'U'" background="#18181b" class="mb-3" />
      <h1 class="text-xl font-bold text-gray-900">Crear cuenta</h1>
      <p class="text-sm text-gray-500 mt-1">Tu avatar se actualiza al escribir tu nombre</p>
    </div>

    <div class="space-y-4">
      <gc-input inputLabel="Nombre completo" placeholder="Ana López"
        [value]="name()" [invalid]="nameInvalid()"
        [inputDescription]="nameInvalid() ? 'El nombre es obligatorio' : ''"
        (valueChange)="name.set($event)" />

      <gc-input inputLabel="Email" type="email" placeholder="ana@email.com"
        [value]="email()" [invalid]="emailInvalid()"
        [inputDescription]="emailInvalid() ? 'El email es obligatorio' : ''"
        (valueChange)="email.set($event)" />

      <div>
        <gc-input inputLabel="Contraseña" type="password" placeholder="Mín. 8 caracteres (A-Z, 0-9, símbolo)"
          [value]="password()" [invalid]="passwordInvalid()"
          [inputDescription]="passwordInvalid() ? 'Mínimo 6 caracteres' : ''"
          (valueChange)="password.set($event)" />
        <!-- Strength bar -->
        @if (password().length > 0) {
          <div class="mt-2">
            <div class="flex gap-1">
              @for (seg of [1, 2, 3, 4]; track seg) {
                <div class="h-1 flex-1 rounded-full transition-colors"
                     [class]="seg <= passwordStrength() ? strengthColor() : 'bg-gray-200'"></div>
              }
            </div>
            <p class="text-xs mt-1" [class]="passwordStrength() >= 3 ? 'text-emerald-600' : 'text-gray-500'">
              {{ strengthLabel() }}
            </p>
          </div>
        }
      </div>

      <gc-input inputLabel="Confirmar contraseña" type="password" placeholder="Repite la contraseña"
        [value]="confirmPassword()" [invalid]="confirmInvalid()"
        [inputDescription]="confirmInvalid() ? 'Las contraseñas no coinciden' : ''"
        (valueChange)="confirmPassword.set($event)" />

      <div>
        <gc-checkbox
          label="Acepto los términos y condiciones"
          [checked]="acceptTerms()"
          (checkedChange)="acceptTerms.set($event)" />
        @if (termsInvalid()) {
          <p class="mt-1 text-xs text-red-500">Debes aceptar los términos</p>
        }
      </div>

      <gc-button class="w-full" [disabled]="loading()" (click)="onRegister()">
        @if (loading()) {
          <gc-spinner size="xs" color="#fff" /> Creando cuenta...
        } @else {
          Crear cuenta
        }
      </gc-button>
    </div>

    <p class="text-center text-sm text-gray-500 mt-6">
      ¿Ya tienes cuenta?
      <a routerLink="/examples/login"
         class="font-medium text-gray-900 hover:underline">Iniciar sesión</a>
    </p>
  </div>
</div>`;

  readonly tsCode = `import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  AvatarComponent, InputComponent, CheckboxComponent,
  ButtonComponent, SpinnerComponent, DialogComponent,
} from 'garaq-angular-components';

interface RegisterData { name: string; email: string; }

@Component({
  selector: 'app-register-strength',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, AvatarComponent, InputComponent, CheckboxComponent, ButtonComponent, SpinnerComponent, DialogComponent],
  templateUrl: './register-strength.component.html',
})
export class RegisterStrengthComponent {
  protected readonly name = signal('');
  protected readonly email = signal('');
  protected readonly password = signal('');
  protected readonly confirmPassword = signal('');
  protected readonly acceptTerms = signal(false);
  protected readonly loading = signal(false);
  protected readonly submitAttempted = signal(false);
  protected readonly submittedData = signal<RegisterData | null>(null);

  protected readonly nameInvalid = computed(() => this.submitAttempted() && !this.name().trim());
  protected readonly emailInvalid = computed(() => this.submitAttempted() && !this.email().trim());
  protected readonly passwordInvalid = computed(() => this.submitAttempted() && this.password().length < 6);
  protected readonly confirmInvalid = computed(() => this.submitAttempted() && this.confirmPassword() !== this.password());
  protected readonly termsInvalid = computed(() => this.submitAttempted() && !this.acceptTerms());

  /** 0–4 strength score */
  protected readonly passwordStrength = computed(() => {
    const p = this.password();
    if (!p) return 0;
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    return score;
  });

  protected readonly strengthLabel = computed(() =>
    ['', 'Muy débil', 'Débil', 'Buena', 'Excelente'][this.passwordStrength()]
  );

  protected readonly strengthColor = computed(() => {
    const colors = ['bg-gray-200', 'bg-red-500', 'bg-orange-400', 'bg-yellow-400', 'bg-emerald-500'];
    return colors[this.passwordStrength()];
  });

  protected onRegister(): void {
    if (this.loading()) return;
    this.submitAttempted.set(true);
    if (!this.name().trim() || !this.email().trim() ||
        this.password().length < 6 || this.confirmPassword() !== this.password() ||
        !this.acceptTerms()) return;

    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      this.submittedData.set({ name: this.name(), email: this.email() });
    }, 1500);
  }

  protected onDialogClose(): void {
    this.submittedData.set(null);
    this.submitAttempted.set(false);
    this.name.set(''); this.email.set('');
    this.password.set(''); this.confirmPassword.set('');
    this.acceptTerms.set(false);
  }
}`;
}
