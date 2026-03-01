import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  InputComponent,
  ButtonComponent,
  SeparatorComponent,
  SpinnerComponent,
  DialogComponent,
} from 'garaq-angular-components';
import { ExampleSectionTabsComponent } from '../../shared/example-section-tabs/example-section-tabs.component';

interface LoginData {
  email: string;
}

@Component({
  selector: 'example-login-3',
  imports: [
    RouterLink,
    InputComponent,
    ButtonComponent,
    SeparatorComponent,
    SpinnerComponent,
    DialogComponent,
    ExampleSectionTabsComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-example-3.component.html',
  styleUrl: './login-example-3.component.css',
})
export class LoginExample3Component {
  protected readonly email = signal('');
  protected readonly password = signal('');
  protected readonly showPassword = signal(false);
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
      this.submittedData.set({ email: this.email() });
    }, 1200);
  }

  protected onDialogClose(): void {
    this.submittedData.set(null);
    this.submitAttempted.set(false);
    this.email.set('');
    this.password.set('');
    this.showPassword.set(false);
  }

  readonly htmlCode = `<!-- Minimal: floating form on gray background, social-first -->
<div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">

  <!-- Logo mark -->
  <div class="flex flex-col items-center mb-8">
    <div class="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center
                text-white font-black text-lg mb-3">G</div>
    <h1 class="text-xl font-bold text-gray-900">Iniciar sesión</h1>
    <p class="text-sm text-gray-500 mt-1">en Garaq UI</p>
  </div>

  <!-- Social buttons first -->
  <div class="w-full max-w-sm space-y-3 mb-6">
    <button class="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-lg
                   border border-gray-200 bg-white text-sm font-medium text-gray-700
                   hover:bg-gray-50 transition-colors shadow-sm">
      <!-- Google SVG icon -->
      <svg ...google-icon.../>
      Continuar con Google
    </button>
    <button class="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-lg
                   border border-gray-200 bg-white text-sm font-medium text-gray-700
                   hover:bg-gray-50 transition-colors shadow-sm">
      <!-- GitHub SVG icon -->
      <svg ...github-icon.../>
      Continuar con GitHub
    </button>
  </div>

  <gc-separator label="o con email" class="w-full max-w-sm mb-6" />

  <!-- Email + Password -->
  <div class="w-full max-w-sm space-y-4">
    <gc-input inputLabel="Email" type="email" placeholder="tu@email.com"
      [value]="email()" [invalid]="emailInvalid()"
      [inputDescription]="emailInvalid() ? 'El email es obligatorio' : ''"
      (valueChange)="email.set($event)" />

    <div class="space-y-1">
      <gc-input inputLabel="Contraseña" [type]="showPassword() ? 'text' : 'password'"
        placeholder="••••••••" [value]="password()" [invalid]="passwordInvalid()"
        [inputDescription]="passwordInvalid() ? 'La contraseña es obligatoria' : ''"
        (valueChange)="password.set($event)" />
      <div class="flex justify-end">
        <a href="#" class="text-xs text-gray-500 hover:text-gray-900">¿Olvidaste tu contraseña?</a>
      </div>
    </div>

    <gc-button class="w-full" [disabled]="loading()" (click)="onLogin()">
      @if (loading()) { <gc-spinner size="xs" color="#fff" /> Verificando... } @else { Iniciar sesión }
    </gc-button>

    <p class="text-center text-sm text-gray-500">
      ¿No tienes cuenta?
      <a routerLink="/examples/register" class="font-medium text-gray-900 hover:underline">Regístrate gratis</a>
    </p>
  </div>
</div>`;

  readonly tsCode = `import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  InputComponent, ButtonComponent, SeparatorComponent, SpinnerComponent, DialogComponent,
} from 'garaq-angular-components';

@Component({
  selector: 'app-login-minimal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, InputComponent, ButtonComponent, SeparatorComponent, SpinnerComponent, DialogComponent],
  templateUrl: './login-minimal.component.html',
})
export class LoginMinimalComponent {
  protected readonly email = signal('');
  protected readonly password = signal('');
  protected readonly showPassword = signal(false);
  protected readonly loading = signal(false);
  protected readonly submitAttempted = signal(false);

  protected readonly emailInvalid = computed(() => this.submitAttempted() && !this.email().trim());
  protected readonly passwordInvalid = computed(() => this.submitAttempted() && !this.password());

  protected onLogin(): void {
    if (this.loading()) return;
    this.submitAttempted.set(true);
    if (!this.email().trim() || !this.password()) return;
    this.loading.set(true);
    // TODO: llamar al servicio de autenticación
    setTimeout(() => { this.loading.set(false); }, 1200);
  }
}`;
}
