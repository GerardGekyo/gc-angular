import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CardComponent,
  AvatarComponent,
  InputComponent,
  RadioButtonComponent,
  CheckboxComponent,
  SwitchButtonComponent,
  ButtonComponent,
  AlertComponent,
  TooltipComponent,
  SpinnerComponent,
  DialogComponent,
} from 'garaq-angular-components';
import { ExampleSectionTabsComponent } from '../../shared/example-section-tabs/example-section-tabs.component';

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  accountType: string;
  newsletter: boolean;
}

@Component({
  selector: 'example-register',
  imports: [
    RouterLink,
    CardComponent,
    AvatarComponent,
    InputComponent,
    RadioButtonComponent,
    CheckboxComponent,
    SwitchButtonComponent,
    ButtonComponent,
    AlertComponent,
    TooltipComponent,
    SpinnerComponent,
    DialogComponent,
    ExampleSectionTabsComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register-example.component.html',
  styleUrl: './register-example.component.css',
})
export class RegisterExampleComponent {
  protected readonly step = signal(1);
  protected readonly firstName = signal('');
  protected readonly lastName = signal('');
  protected readonly email = signal('');
  protected readonly accountType = signal<string>('personal');
  protected readonly password = signal('');
  protected readonly confirmPassword = signal('');
  protected readonly acceptTerms = signal(false);
  protected readonly newsletter = signal(true);
  protected readonly loading = signal(false);
  protected readonly validationErrors = signal<string[]>([]);
  protected readonly submittedData = signal<RegisterData | null>(null);

  protected readonly fullName = computed(() => {
    const first = this.firstName().trim();
    const last = this.lastName().trim();
    return [first, last].filter(Boolean).join(' ');
  });

  protected readonly passwordMismatch = computed(() => {
    const confirm = this.confirmPassword();
    return confirm.length > 0 && confirm !== this.password();
  });

  protected nextStep(): void {
    const errors: string[] = [];
    if (!this.firstName().trim()) errors.push('El nombre es obligatorio.');
    if (!this.lastName().trim()) errors.push('El apellido es obligatorio.');
    if (!this.email().trim()) errors.push('El email es obligatorio.');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email()))
      errors.push('El email no es válido.');

    this.validationErrors.set(errors);
    if (errors.length === 0) {
      this.step.set(2);
    }
  }

  protected onRegister(): void {
    if (this.loading()) return;

    const errors: string[] = [];
    if (this.password().length < 6) errors.push('La contraseña debe tener al menos 6 caracteres.');
    if (this.password() !== this.confirmPassword()) errors.push('Las contraseñas no coinciden.');
    if (!this.acceptTerms()) errors.push('Debes aceptar los términos y condiciones.');

    this.validationErrors.set(errors);
    if (errors.length > 0) return;

    this.loading.set(true);
    // Simular llamada al servidor
    setTimeout(() => {
      this.loading.set(false);
      this.submittedData.set({
        firstName: this.firstName(),
        lastName: this.lastName(),
        email: this.email(),
        accountType: this.accountType(),
        newsletter: this.newsletter(),
      });
    }, 2000);
  }

  protected onDialogClose(): void {
    this.submittedData.set(null);
    // Resetear formulario completo
    this.step.set(1);
    this.firstName.set('');
    this.lastName.set('');
    this.email.set('');
    this.accountType.set('personal');
    this.password.set('');
    this.confirmPassword.set('');
    this.acceptTerms.set(false);
    this.newsletter.set(true);
    this.validationErrors.set([]);
  }

  readonly htmlCode = `<gc-card variant="elevated" class="w-full max-w-lg">
  <div gcCardHeader class="text-center space-y-4">
    <gc-avatar size="xl" [name]="fullName()" background="#18181b" />
    <div class="space-y-1">
      <h1 class="text-xl font-bold text-gray-900">Crear cuenta</h1>
      <p class="text-sm text-gray-500">Completa los pasos para registrarte</p>
    </div>
    <!-- Stepper -->
    <div class="gc-stepper">
      <div class="gc-step" [class.gc-step-active]="step() >= 1">
        <span class="gc-step-circle">1</span>
        <span class="gc-step-label">Datos</span>
      </div>
      <div class="gc-step-line" [class.gc-step-line-active]="step() >= 2"></div>
      <div class="gc-step" [class.gc-step-active]="step() >= 2">
        <span class="gc-step-circle">2</span>
        <span class="gc-step-label">Cuenta</span>
      </div>
    </div>
  </div>

  <!-- Errores de validación -->
  @if (validationErrors().length > 0) {
    <gc-alert variant="error" title="Errores de validación" dismissible
      (dismissed)="validationErrors.set([])">
      <ul class="list-disc list-inside text-sm">
        @for (error of validationErrors(); track error) {
          <li>{{ error }}</li>
        }
      </ul>
    </gc-alert>
  }

  <!-- Paso 1 -->
  @if (step() === 1) {
    <div class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <gc-input inputLabel="Nombre" placeholder="Juan"
          [value]="firstName()" (valueChange)="firstName.set($event)" />
        <gc-input inputLabel="Apellido" placeholder="Pérez"
          [value]="lastName()" (valueChange)="lastName.set($event)" />
      </div>
      <gc-input inputLabel="Email" type="email" placeholder="juan@email.com"
        [value]="email()" (valueChange)="email.set($event)" />
      <div class="space-y-2">
        <span class="text-sm font-medium text-gray-700">Tipo de cuenta</span>
        <div class="flex gap-6">
          <gc-radio-button name="accountType" value="personal" label="Personal"
            description="Para uso individual"
            [checked]="accountType() === 'personal'"
            (checkedChange)="accountType.set($event)" />
          <gc-radio-button name="accountType" value="empresa" label="Empresa"
            description="Para equipos y organizaciones"
            [checked]="accountType() === 'empresa'"
            (checkedChange)="accountType.set($event)" />
        </div>
      </div>
      <gc-button class="w-full" (click)="nextStep()">Siguiente</gc-button>
    </div>
  }

  <!-- Paso 2 -->
  @if (step() === 2) {
    <div class="space-y-4">
      <gc-tooltip content="Mínimo 6 caracteres" placement="top" class="w-full">
        <gc-input inputLabel="Contraseña" type="password" placeholder="••••••••"
          [value]="password()" (valueChange)="password.set($event)" />
      </gc-tooltip>
      <gc-input inputLabel="Confirmar contraseña" type="password" placeholder="••••••••"
        [value]="confirmPassword()" [invalid]="passwordMismatch()"
        [inputDescription]="passwordMismatch() ? 'Las contraseñas no coinciden' : ''"
        (valueChange)="confirmPassword.set($event)" />
      <div class="flex flex-col gap-4">
        <gc-checkbox [checked]="acceptTerms()" (checkedChange)="acceptTerms.set($event)">
          Acepto los <a href="#">términos y condiciones</a>
        </gc-checkbox>
        <gc-switch-button label="Newsletter"
          description="Recibir novedades por email"
          [checked]="newsletter()" (checkedChange)="newsletter.set($event)" />
      </div>
      <div class="flex gap-3">
        <gc-button variant="outline" class="flex-1" (click)="step.set(1)">Atrás</gc-button>
        <gc-button class="flex-1" [disabled]="loading()" (click)="onRegister()">
          @if (loading()) {
            <gc-spinner size="xs" color="#fff" /> Creando cuenta...
          } @else {
            Crear cuenta
          }
        </gc-button>
      </div>
    </div>
  }

  <div gcCardFooter class="text-center">
    <p class="text-sm text-gray-500">
      ¿Ya tienes cuenta?
      <a routerLink="/examples/login">Iniciar sesión</a>
    </p>
  </div>
</gc-card>

<!-- Modal de confirmación -->
<gc-dialog title="¡Cuenta creada!" [open]="!!submittedData()" (closed)="onDialogClose()">
  <div class="gc-dialog-data">
    <div class="gc-dialog-row">
      <span class="gc-dialog-label">Nombre</span>
      <span class="gc-dialog-value">{{ submittedData()?.firstName }} {{ submittedData()?.lastName }}</span>
    </div>
    <div class="gc-dialog-row">
      <span class="gc-dialog-label">Email</span>
      <span class="gc-dialog-value">{{ submittedData()?.email }}</span>
    </div>
    <div class="gc-dialog-row">
      <span class="gc-dialog-label">Tipo de cuenta</span>
      <span class="gc-dialog-value">{{ submittedData()?.accountType }}</span>
    </div>
    <div class="gc-dialog-row">
      <span class="gc-dialog-label">Newsletter</span>
      <span class="gc-dialog-value">{{ submittedData()?.newsletter ? 'Sí' : 'No' }}</span>
    </div>
  </div>
  <div gcDialogFooter>
    <gc-button (click)="onDialogClose()">Entendido</gc-button>
  </div>
</gc-dialog>`;

  readonly tsCode = `import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CardComponent, AvatarComponent, InputComponent, RadioButtonComponent,
  CheckboxComponent, SwitchButtonComponent, ButtonComponent,
  AlertComponent, TooltipComponent, SpinnerComponent, DialogComponent,
} from 'garaq-angular-components';

interface RegisterData {
  firstName: string; lastName: string; email: string;
  accountType: string; newsletter: boolean;
}

@Component({ selector: 'example-register', ... })
export class RegisterComponent {
  protected readonly step = signal(1);
  protected readonly firstName = signal('');
  protected readonly lastName = signal('');
  protected readonly email = signal('');
  protected readonly accountType = signal<string>('personal');
  protected readonly password = signal('');
  protected readonly confirmPassword = signal('');
  protected readonly acceptTerms = signal(false);
  protected readonly newsletter = signal(true);
  protected readonly loading = signal(false);
  protected readonly validationErrors = signal<string[]>([]);
  protected readonly submittedData = signal<RegisterData | null>(null);

  protected readonly fullName = computed(() =>
    [this.firstName().trim(), this.lastName().trim()].filter(Boolean).join(' ')
  );
  protected readonly passwordMismatch = computed(() =>
    this.confirmPassword().length > 0 && this.confirmPassword() !== this.password()
  );

  protected nextStep(): void {
    const errors: string[] = [];
    if (!this.firstName().trim()) errors.push('El nombre es obligatorio.');
    if (!this.lastName().trim()) errors.push('El apellido es obligatorio.');
    if (!this.email().trim()) errors.push('El email es obligatorio.');
    else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(this.email()))
      errors.push('El email no es válido.');
    this.validationErrors.set(errors);
    if (errors.length === 0) this.step.set(2);
  }

  protected onRegister(): void {
    if (this.loading()) return;
    const errors: string[] = [];
    if (this.password().length < 6) errors.push('La contraseña debe tener al menos 6 caracteres.');
    if (this.password() !== this.confirmPassword()) errors.push('Las contraseñas no coinciden.');
    if (!this.acceptTerms()) errors.push('Debes aceptar los términos y condiciones.');
    this.validationErrors.set(errors);
    if (errors.length > 0) return;

    this.loading.set(true);
    // Simular llamada al servidor
    setTimeout(() => {
      this.loading.set(false);
      this.submittedData.set({
        firstName: this.firstName(), lastName: this.lastName(),
        email: this.email(), accountType: this.accountType(),
        newsletter: this.newsletter(),
      });
    }, 2000);
  }

  protected onDialogClose(): void {
    this.submittedData.set(null);
    // Resetear formulario completo al paso 1
    this.step.set(1);
    this.firstName.set(''); this.lastName.set('');
    this.email.set(''); this.accountType.set('personal');
    this.password.set(''); this.confirmPassword.set('');
    this.acceptTerms.set(false); this.newsletter.set(true);
    this.validationErrors.set([]);
  }
}`;
}
