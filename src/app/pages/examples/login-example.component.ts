import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CardComponent,
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
  selector: 'example-login',
  imports: [
    RouterLink,
    CardComponent,
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
    SeparatorComponent,
    SpinnerComponent,
    DialogComponent,
    ExampleSectionTabsComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-example.component.html',
  styleUrl: './login-example.component.css',
})
export class LoginExampleComponent {
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
    // Simular llamada al servidor
    setTimeout(() => {
      this.loading.set(false);
      this.submittedData.set({ email: this.email(), rememberMe: this.rememberMe() });
    }, 1200);
  }

  protected onDialogClose(): void {
    this.submittedData.set(null);
    // Resetear formulario
    this.submitAttempted.set(false);
    this.email.set('');
    this.password.set('');
    this.rememberMe.set(false);
    this.showPassword.set(false);
  }

  readonly htmlCode = `<gc-card variant="elevated" class="w-full max-w-md">
  <div gcCardHeader class="text-center space-y-1">
    <h1 class="text-xl font-bold text-gray-900">Iniciar sesión</h1>
    <p class="text-sm text-gray-500">Ingresa tus credenciales para acceder</p>
  </div>

  <div class="space-y-4">
    <gc-input
      inputLabel="Email"
      placeholder="tu@email.com"
      type="email"
      [value]="email()"
      [invalid]="emailInvalid()"
      [inputDescription]="emailInvalid() ? 'El email es obligatorio' : ''"
      (valueChange)="email.set($event)"
    >
      <svg gcPrefix ...></svg>
    </gc-input>

    <gc-input
      inputLabel="Contraseña"
      placeholder="••••••••"
      [type]="showPassword() ? 'text' : 'password'"
      [value]="password()"
      [invalid]="passwordInvalid()"
      [inputDescription]="passwordInvalid() ? 'La contraseña es obligatoria' : ''"
      (valueChange)="password.set($event)"
    >
      <svg gcPrefix ...></svg>
      <button gcSuffix type="button" (click)="showPassword.set(!showPassword())">
        <!-- icono ojo toggle -->
      </button>
    </gc-input>

    <gc-checkbox
      label="Recordarme"
      [checked]="rememberMe()"
      (checkedChange)="rememberMe.set($event)"
    />

    <gc-button class="w-full" [disabled]="loading()" (click)="onLogin()">
      @if (loading()) {
        <gc-spinner size="xs" color="#fff" /> Iniciando sesión...
      } @else {
        Iniciar sesión
      }
    </gc-button>
  </div>

  <gc-separator label="o continuar con" />

  <div class="grid grid-cols-2 gap-3">
    <gc-button variant="outline">Google</gc-button>
    <gc-button variant="outline">GitHub</gc-button>
  </div>

  <div gcCardFooter class="text-center">
    <p class="text-sm text-gray-500">
      ¿No tienes cuenta?
      <a routerLink="/examples/register">Regístrate</a>
    </p>
  </div>
</gc-card>

<!-- Modal de confirmación -->
<gc-dialog
  title="¡Inicio de sesión exitoso!"
  [open]="!!submittedData()"
  (closed)="onDialogClose()"
>
  <div class="space-y-2 text-sm text-gray-700">
    <p><strong>Email:</strong> {{ submittedData()?.email }}</p>
    <p>
      <strong>Recordar sesión:</strong>
      {{ submittedData()?.rememberMe ? 'Sí' : 'No' }}
    </p>
    <p class="text-xs text-gray-400 pt-2">
      Al cerrar este modal el formulario se reiniciará.
    </p>
  </div>
  <div gcDialogFooter>
    <gc-button (click)="onDialogClose()">Entendido</gc-button>
  </div>
</gc-dialog>`;

  readonly tsCode = `import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CardComponent, InputComponent, CheckboxComponent,
  ButtonComponent, SeparatorComponent, SpinnerComponent, DialogComponent,
} from 'garaq-angular-components';

interface LoginData {
  email: string;
  rememberMe: boolean;
}

@Component({
  selector: 'example-login',
  imports: [
    RouterLink, CardComponent, InputComponent, CheckboxComponent,
    ButtonComponent, SeparatorComponent, SpinnerComponent, DialogComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    // Simular llamada al servidor
    setTimeout(() => {
      this.loading.set(false);
      this.submittedData.set({ email: this.email(), rememberMe: this.rememberMe() });
    }, 1200);
  }

  protected onDialogClose(): void {
    this.submittedData.set(null);
    // Resetear formulario
    this.submitAttempted.set(false);
    this.email.set('');
    this.password.set('');
    this.rememberMe.set(false);
    this.showPassword.set(false);
  }
}`;
}
