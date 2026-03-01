import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  InputComponent,
  CheckboxComponent,
  ButtonComponent,
  SeparatorComponent,
  SpinnerComponent,
  DialogComponent,
} from 'garaq-angular-components';
import { ExampleSectionTabsComponent } from '../../shared/example-section-tabs/example-section-tabs.component';

interface LoginData {
  email: string;
  rememberMe: boolean;
}

@Component({
  selector: 'example-login-2',
  imports: [
    RouterLink,
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
    SeparatorComponent,
    SpinnerComponent,
    DialogComponent,
    ExampleSectionTabsComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-example-2.component.html',
  styleUrl: './login-example-2.component.css',
})
export class LoginExample2Component {
  protected readonly email = signal('');
  protected readonly password = signal('');
  protected readonly showPassword = signal(false);
  protected readonly rememberMe = signal(false);
  protected readonly loading = signal(false);
  protected readonly submitAttempted = signal(false);
  protected readonly submittedData = signal<LoginData | null>(null);

  protected readonly emailInvalid = computed(
    () => this.submitAttempted() && !this.email().trim(),
  );
  protected readonly passwordInvalid = computed(
    () => this.submitAttempted() && !this.password(),
  );

  protected onLogin(): void {
    if (this.loading()) return;
    this.submitAttempted.set(true);
    if (!this.email().trim() || !this.password()) return;

    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      this.submittedData.set({ email: this.email(), rememberMe: this.rememberMe() });
    }, 1200);
  }

  protected onDialogClose(): void {
    this.submittedData.set(null);
    this.submitAttempted.set(false);
    this.email.set('');
    this.password.set('');
    this.rememberMe.set(false);
    this.showPassword.set(false);
  }

  readonly htmlCode = `<!-- Split layout: dark left panel + white right panel -->
<div class="flex min-h-screen">

  <!-- Left panel (hidden on mobile) -->
  <div class="hidden lg:flex flex-col justify-between w-96 xl:w-[480px] bg-zinc-900 px-10 py-12 shrink-0">
    <!-- Logo -->
    <div class="flex items-center gap-2">
      <span class="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-zinc-900 font-black text-sm">G</span>
      <span class="font-semibold text-white">Garaq UI</span>
    </div>
    <!-- Features -->
    <div class="space-y-6">
      <h2 class="text-2xl font-bold text-white leading-snug">
        Todo lo que necesitas para construir apps increíbles
      </h2>
      <ul class="space-y-4">
        <li class="flex items-start gap-3">
          <span class="mt-0.5 w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center shrink-0">
            <svg ...check.../></span>
          <span class="text-sm text-zinc-300">50+ componentes accesibles y listos para producción</span>
        </li>
        <li class="flex items-start gap-3">...</li>
        <li class="flex items-start gap-3">...</li>
      </ul>
    </div>
    <!-- Testimonial -->
    <blockquote class="border-l-2 border-violet-500 pl-4">
      <p class="text-sm text-zinc-300 italic">"Redujimos el tiempo de desarrollo UI en un 60%."</p>
      <p class="mt-2 text-xs text-zinc-500">Ana García · Directora de Producto</p>
    </blockquote>
  </div>

  <!-- Right panel: form -->
  <div class="flex-1 flex items-center justify-center px-4 sm:px-8 py-12 bg-white">
    <div class="w-full max-w-sm">
      <!-- Mobile logo -->
      <div class="flex items-center gap-2 mb-8 lg:hidden">
        <span class="w-7 h-7 rounded-lg bg-zinc-900 flex items-center justify-center text-white font-black text-sm">G</span>
        <span class="font-semibold text-gray-900">Garaq UI</span>
      </div>
      <h1 class="text-2xl font-bold text-gray-900 mb-1">Bienvenido de vuelta</h1>
      <p class="text-sm text-gray-500 mb-8">Ingresa tus credenciales para acceder</p>

      <div class="space-y-4">
        <gc-input inputLabel="Email" type="email" placeholder="tu@email.com"
          [value]="email()" [invalid]="emailInvalid()"
          [inputDescription]="emailInvalid() ? 'El email es obligatorio' : ''"
          (valueChange)="email.set($event)" />

        <gc-input inputLabel="Contraseña" [type]="showPassword() ? 'text' : 'password'"
          placeholder="••••••••" [value]="password()" [invalid]="passwordInvalid()"
          [inputDescription]="passwordInvalid() ? 'La contraseña es obligatoria' : ''"
          (valueChange)="password.set($event)" />

        <div class="flex items-center justify-between">
          <gc-checkbox label="Recordarme" [checked]="rememberMe()" (checkedChange)="rememberMe.set($event)" />
          <a href="#" class="text-xs text-gray-500 hover:text-gray-900">¿Olvidaste tu contraseña?</a>
        </div>

        <gc-button class="w-full" [disabled]="loading()" (click)="onLogin()">
          @if (loading()) { <gc-spinner size="xs" color="#fff" /> Entrando... } @else { Iniciar sesión }
        </gc-button>
      </div>

      <gc-separator label="o" class="my-4" />

      <div class="grid grid-cols-2 gap-3">
        <gc-button variant="outline">Google</gc-button>
        <gc-button variant="outline">GitHub</gc-button>
      </div>

      <p class="text-center text-sm text-gray-500 mt-6">
        ¿No tienes cuenta? <a routerLink="/examples/register" class="font-medium text-gray-900 hover:underline">Regístrate</a>
      </p>
    </div>
  </div>
</div>`;

  readonly tsCode = `import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  InputComponent, CheckboxComponent, ButtonComponent,
  SeparatorComponent, SpinnerComponent, DialogComponent,
} from 'garaq-angular-components';

interface LoginData { email: string; rememberMe: boolean; }

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, InputComponent, CheckboxComponent, ButtonComponent, SeparatorComponent, SpinnerComponent, DialogComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  protected readonly email = signal('');
  protected readonly password = signal('');
  protected readonly showPassword = signal(false);
  protected readonly rememberMe = signal(false);
  protected readonly loading = signal(false);
  protected readonly submitAttempted = signal(false);
  protected readonly submittedData = signal<LoginData | null>(null);

  protected readonly emailInvalid = computed(() => this.submitAttempted() && !this.email().trim());
  protected readonly passwordInvalid = computed(() => this.submitAttempted() && !this.password());

  protected onLogin(): void {
    if (this.loading()) return;
    this.submitAttempted.set(true);
    if (!this.email().trim() || !this.password()) return;
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      this.submittedData.set({ email: this.email(), rememberMe: this.rememberMe() });
    }, 1200);
  }

  protected onDialogClose(): void {
    this.submittedData.set(null);
    this.submitAttempted.set(false);
    this.email.set(''); this.password.set('');
    this.rememberMe.set(false); this.showPassword.set(false);
  }
}`;
}
