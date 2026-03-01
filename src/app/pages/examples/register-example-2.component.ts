import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
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
  terms: boolean;
}

@Component({
  selector: 'example-register-2',
  imports: [
    RouterLink,
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
    SpinnerComponent,
    DialogComponent,
    ExampleSectionTabsComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register-example-2.component.html',
  styleUrl: './register-example-2.component.css',
})
export class RegisterExample2Component {
  protected readonly name = signal('');
  protected readonly email = signal('');
  protected readonly password = signal('');
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
  protected readonly termsInvalid = computed(
    () => this.submitAttempted() && !this.acceptTerms(),
  );

  protected onRegister(): void {
    if (this.loading()) return;
    this.submitAttempted.set(true);
    if (
      !this.name().trim() ||
      !this.email().trim() ||
      this.password().length < 6 ||
      !this.acceptTerms()
    )
      return;

    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      this.submittedData.set({
        name: this.name(),
        email: this.email(),
        terms: this.acceptTerms(),
      });
    }, 1500);
  }

  protected onDialogClose(): void {
    this.submittedData.set(null);
    this.submitAttempted.set(false);
    this.name.set('');
    this.email.set('');
    this.password.set('');
    this.acceptTerms.set(false);
  }

  readonly htmlCode = `<!-- Split empresarial: gradient left panel + one-step form right -->
<div class="flex min-h-screen">

  <!-- Left panel (hidden on mobile) -->
  <div class="hidden lg:flex flex-col justify-between w-96 xl:w-[480px]
              bg-gradient-to-br from-violet-800 to-indigo-900 px-10 py-12 shrink-0">
    <!-- Logo -->
    <div class="flex items-center gap-2">
      <span class="w-8 h-8 rounded-lg bg-white flex items-center justify-center
                   text-violet-900 font-black text-sm">G</span>
      <span class="font-semibold text-white">Garaq UI</span>
    </div>

    <!-- Headline + features -->
    <div class="space-y-6">
      <h2 class="text-3xl font-bold text-white leading-tight">
        Únete a miles de<br />equipos que ya<br />confían en nosotros
      </h2>
      <ul class="space-y-4">
        <li class="flex items-start gap-3">
          <span class="mt-0.5 w-5 h-5 rounded-full bg-violet-500/40 flex items-center
                       justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11"
                 viewBox="0 0 24 24" fill="none" stroke="white"
                 stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
          </span>
          <span class="text-sm text-violet-100">Configuración en menos de 5 minutos</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="mt-0.5 w-5 h-5 rounded-full bg-violet-500/40 flex items-center
                       justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11"
                 viewBox="0 0 24 24" fill="none" stroke="white"
                 stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
          </span>
          <span class="text-sm text-violet-100">50+ componentes listos para producción</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="mt-0.5 w-5 h-5 rounded-full bg-violet-500/40 flex items-center
                       justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11"
                 viewBox="0 0 24 24" fill="none" stroke="white"
                 stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
          </span>
          <span class="text-sm text-violet-100">Soporte dedicado en menos de 24 h</span>
        </li>
      </ul>
    </div>

    <!-- Testimonial -->
    <blockquote class="border-l-2 border-white/30 pl-4">
      <p class="text-sm text-violet-100 italic">
        "Pasamos de un prototipo a producción en una semana gracias a Garaq."
      </p>
      <p class="mt-2 text-xs text-violet-300">Carlos Ruiz · CTO en StartupLab</p>
    </blockquote>
  </div>

  <!-- Right panel: form -->
  <div class="flex-1 flex items-center justify-center px-4 sm:px-8 py-12 bg-white">
    <div class="w-full max-w-sm">
      <!-- Mobile logo -->
      <div class="flex items-center gap-2 mb-8 lg:hidden">
        <span class="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-700 to-indigo-800
                     flex items-center justify-center text-white font-black text-sm">G</span>
        <span class="font-semibold text-gray-900">Garaq UI</span>
      </div>

      <h1 class="text-2xl font-bold text-gray-900 mb-1">Crea tu cuenta</h1>
      <p class="text-sm text-gray-500 mb-7">
        Gratis para siempre · Sin tarjeta de crédito
      </p>

      <div class="space-y-4">
        <gc-input inputLabel="Nombre completo" placeholder="María García"
          [value]="name()" [invalid]="nameInvalid()"
          [inputDescription]="nameInvalid() ? 'El nombre es obligatorio' : ''"
          (valueChange)="name.set($event)" />

        <gc-input inputLabel="Email de trabajo" type="email"
          placeholder="maria@empresa.com"
          [value]="email()" [invalid]="emailInvalid()"
          [inputDescription]="emailInvalid() ? 'El email es obligatorio' : ''"
          (valueChange)="email.set($event)" />

        <gc-input inputLabel="Contraseña" type="password" placeholder="Mín. 6 caracteres"
          [value]="password()" [invalid]="passwordInvalid()"
          [inputDescription]="passwordInvalid() ? 'Mínimo 6 caracteres' : ''"
          (valueChange)="password.set($event)" />

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
            Crear cuenta gratis
          }
        </gc-button>
      </div>

      <p class="text-center text-sm text-gray-500 mt-6">
        ¿Ya tienes cuenta?
        <a routerLink="/examples/login"
           class="font-medium text-violet-700 hover:underline">Iniciar sesión</a>
      </p>
    </div>
  </div>
</div>`;

  readonly tsCode = `import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  InputComponent, CheckboxComponent, ButtonComponent,
  SpinnerComponent, DialogComponent,
} from 'garaq-angular-components';

interface RegisterData { name: string; email: string; terms: boolean; }

@Component({
  selector: 'app-register-split',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, InputComponent, CheckboxComponent, ButtonComponent, SpinnerComponent, DialogComponent],
  templateUrl: './register-split.component.html',
})
export class RegisterSplitComponent {
  protected readonly name = signal('');
  protected readonly email = signal('');
  protected readonly password = signal('');
  protected readonly acceptTerms = signal(false);
  protected readonly loading = signal(false);
  protected readonly submitAttempted = signal(false);
  protected readonly submittedData = signal<RegisterData | null>(null);

  protected readonly nameInvalid = computed(() => this.submitAttempted() && !this.name().trim());
  protected readonly emailInvalid = computed(() => this.submitAttempted() && !this.email().trim());
  protected readonly passwordInvalid = computed(() => this.submitAttempted() && this.password().length < 6);
  protected readonly termsInvalid = computed(() => this.submitAttempted() && !this.acceptTerms());

  protected onRegister(): void {
    if (this.loading()) return;
    this.submitAttempted.set(true);
    if (!this.name().trim() || !this.email().trim() ||
        this.password().length < 6 || !this.acceptTerms()) return;

    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      this.submittedData.set({ name: this.name(), email: this.email(), terms: this.acceptTerms() });
    }, 1500);
  }

  protected onDialogClose(): void {
    this.submittedData.set(null);
    this.submitAttempted.set(false);
    this.name.set(''); this.email.set('');
    this.password.set(''); this.acceptTerms.set(false);
  }
}`;
}
