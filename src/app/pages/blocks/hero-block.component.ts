import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonComponent } from 'garaq-angular-components';
import { ExampleSectionTabsComponent } from '../../shared/example-section-tabs/example-section-tabs.component';

@Component({
  selector: 'block-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExampleSectionTabsComponent, ButtonComponent],
  templateUrl: './hero-block.component.html',
  styleUrl: './hero-block.component.css',
})
export class HeroBlockComponent {
  // For hero 4 email form preview
  protected readonly heroEmail = signal('');
  protected readonly heroSubscribed = signal(false);
  onSubscribe() {
    if (this.heroEmail().trim()) this.heroSubscribed.set(true);
  }

  // ─── Hero 1: Centrado ──────────────────────────────────────────────────────

  readonly hero1Html = `<section class="bg-white px-4 py-20 sm:py-28 text-center">
  <!-- Badge pill -->
  <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50
              border border-violet-200 text-violet-700 text-xs font-semibold mb-6">
    <span class="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
    Nuevo en Angular v20
  </div>

  <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight
             mb-6 max-w-3xl mx-auto">
    Construye interfaces<br class="hidden sm:block">
    <span class="text-violet-600">más rápido</span>
  </h1>

  <p class="text-gray-500 text-lg max-w-xl mx-auto mb-10">
    Librería de componentes Angular de alto rendimiento, accesibles y listos
    para producción desde el día uno.
  </p>

  <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
    <gc-button size="lg" (click)="goToStart()">Empezar gratis →</gc-button>
    <gc-button size="lg" variant="outline" (click)="goToDocs()">Ver componentes</gc-button>
  </div>

  <!-- Stats -->
  <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
    <div class="text-center">
      <p class="text-2xl sm:text-3xl font-black text-gray-900">50+</p>
      <p class="text-sm text-gray-500 mt-0.5">Componentes</p>
    </div>
    <div class="hidden sm:block w-px h-10 bg-gray-200"></div>
    <div class="text-center">
      <p class="text-2xl sm:text-3xl font-black text-gray-900">4.9★</p>
      <p class="text-sm text-gray-500 mt-0.5">Valoración</p>
    </div>
    <div class="hidden sm:block w-px h-10 bg-gray-200"></div>
    <div class="text-center">
      <p class="text-2xl sm:text-3xl font-black text-gray-900">2K+</p>
      <p class="text-sm text-gray-500 mt-0.5">Usuarios</p>
    </div>
  </div>
</section>`;

  readonly hero1Ts = `import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from 'garaq-angular-components';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  private readonly router = inject(Router);

  goToStart() { this.router.navigate(['/register']); }
  goToDocs() { this.router.navigate(['/docs']); }
}`;

  // ─── Hero 2: Dividido ──────────────────────────────────────────────────────

  readonly hero2Html = `<section class="bg-white px-4 py-16 sm:py-20">
  <div class="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

    <!-- Left: content -->
    <div class="flex-1 text-center lg:text-left">
      <span class="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-4 block">
        Componentes UI para Angular
      </span>
      <h1 class="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-5">
        La forma más rápida de construir UIs modernas
      </h1>
      <p class="text-gray-500 text-base max-w-md mx-auto lg:mx-0 mb-8">
        Componentes accesibles, tipados con TypeScript y optimizados con Angular Signals.
        Listos para producción.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
        <gc-button (click)="getStarted()">Empezar ahora</gc-button>
        <gc-button variant="outline" (click)="viewDemos()">Ver demos</gc-button>
      </div>
      <!-- Social proof -->
      <div class="flex items-center justify-center lg:justify-start gap-3">
        <div class="flex -space-x-2">
          <div class="w-8 h-8 rounded-full bg-violet-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">A</div>
          <div class="w-8 h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">B</div>
          <div class="w-8 h-8 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">C</div>
          <div class="w-8 h-8 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">+</div>
        </div>
        <p class="text-sm text-gray-500">
          Más de <strong class="text-gray-900">2,000</strong> equipos lo usan
        </p>
      </div>
    </div>

    <!-- Right: UI mockup -->
    <div class="flex-1 w-full max-w-md lg:max-w-none">
      <div class="bg-gray-50 rounded-2xl border border-gray-200 p-5 shadow-sm">
        <!-- Fake browser bar -->
        <div class="flex items-center gap-1.5 mb-4 pb-4 border-b border-gray-200">
          <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          <div class="flex-1 mx-3 h-5 bg-gray-200 rounded-md"></div>
        </div>
        <!-- Fake form -->
        <div class="space-y-2.5">
          <div class="h-3 w-10 bg-gray-300 rounded"></div>
          <div class="h-8 bg-white border border-gray-200 rounded-lg"></div>
          <div class="h-3 w-14 bg-gray-300 rounded mt-1"></div>
          <div class="h-8 bg-white border border-gray-200 rounded-lg"></div>
          <div class="grid grid-cols-2 gap-2 pt-1">
            <div class="h-8 bg-violet-600 rounded-lg"></div>
            <div class="h-8 bg-white border border-gray-200 rounded-lg"></div>
          </div>
        </div>
        <!-- Fake stats bar -->
        <div class="mt-4 pt-3 border-t border-gray-200 grid grid-cols-3 gap-2">
          <div class="bg-violet-50 rounded-lg p-2.5">
            <div class="h-2 w-6 bg-violet-200 rounded mb-1.5"></div>
            <div class="h-4 w-10 bg-violet-500 rounded"></div>
          </div>
          <div class="bg-blue-50 rounded-lg p-2.5">
            <div class="h-2 w-6 bg-blue-200 rounded mb-1.5"></div>
            <div class="h-4 w-10 bg-blue-500 rounded"></div>
          </div>
          <div class="bg-emerald-50 rounded-lg p-2.5">
            <div class="h-2 w-6 bg-emerald-200 rounded mb-1.5"></div>
            <div class="h-4 w-10 bg-emerald-500 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;

  readonly hero2Ts = `import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from 'garaq-angular-components';

@Component({
  selector: 'app-hero-split',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
  templateUrl: './hero-split.component.html',
})
export class HeroSplitComponent {
  private readonly router = inject(Router);

  getStarted() { this.router.navigate(['/register']); }
  viewDemos() { this.router.navigate(['/demos']); }
}`;

  // ─── Hero 3: Oscuro ────────────────────────────────────────────────────────

  readonly hero3Html = `<section class="relative bg-zinc-900 px-4 py-20 sm:py-28 text-center overflow-hidden">
  <!-- Dot grid background -->
  <div class="absolute inset-0 opacity-30 pointer-events-none"
       style="background-image: radial-gradient(rgba(139,92,246,0.4) 1px, transparent 1px);
              background-size: 28px 28px;"></div>
  <!-- Top glow -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48
              bg-violet-600/20 blur-3xl rounded-full pointer-events-none"></div>

  <div class="relative z-10">
    <p class="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-6">
      Angular UI Library
    </p>
    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 max-w-3xl mx-auto">
      <span class="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400
                   bg-clip-text text-transparent">El stack definitivo</span>
      <span class="text-white block mt-1">para Angular</span>
    </h1>
    <p class="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
      Componentes de alto rendimiento con Signals, TypeScript strict y soporte para SSR
      y Server Components.
    </p>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <button
        class="px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white
               font-semibold transition-colors focus:outline-none focus:ring-2
               focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
        (click)="getStarted()">
        Empezar gratis →
      </button>
      <button
        class="px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-500
               text-zinc-300 hover:text-white font-medium transition-colors"
        (click)="viewGitHub()">
        Ver en GitHub
      </button>
    </div>
  </div>
</section>`;

  readonly hero3Ts = `import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-dark',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero-dark.component.html',
})
export class HeroDarkComponent {
  private readonly router = inject(Router);

  getStarted() { this.router.navigate(['/register']); }
  viewGitHub() { window.open('https://github.com/garaq-ui', '_blank'); }
}`;

  // ─── Hero 4: Con Suscripción ───────────────────────────────────────────────

  readonly hero4Html = `<section class="bg-gradient-to-br from-violet-50 via-white to-indigo-50
              px-4 py-20 sm:py-28 text-center">
  <p class="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-4">
    Acceso anticipado
  </p>
  <h1 class="text-4xl sm:text-5xl font-black text-gray-900 leading-tight
             mb-4 max-w-2xl mx-auto">
    Sé el primero en descubrirlo
  </h1>
  <p class="text-gray-500 text-base max-w-md mx-auto mb-10">
    Suscríbete para recibir acceso anticipado a los nuevos componentes,
    tutoriales y actualizaciones de Garaq UI.
  </p>

  <!-- Subscription form -->
  @if (!subscribed()) {
    <form class="flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto mb-6"
          (submit)="$event.preventDefault(); onSubscribe()">
      <div class="relative flex-1 min-w-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
             stroke-linejoin="round"
             class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
        <input
          type="email" placeholder="tu@email.com"
          [value]="email()" (input)="email.set($any($event.target).value)"
          class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm
                 bg-white placeholder:text-gray-400 focus:outline-none
                 focus:border-violet-400 focus:ring-2 focus:ring-violet-100
                 transition-colors"
        />
      </div>
      <gc-button class="shrink-0" type="submit" (click)="onSubscribe()">Suscribirme</gc-button>
    </form>
  } @else {
    <div class="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-50 border
                border-emerald-200 text-emerald-700 rounded-lg text-sm font-medium mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
           stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      ¡Suscripción exitosa! Te avisaremos pronto.
    </div>
  }

  <!-- Social proof -->
  <div class="flex items-center justify-center gap-3">
    <div class="flex -space-x-2">
      <div class="w-7 h-7 rounded-full bg-violet-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">A</div>
      <div class="w-7 h-7 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">B</div>
      <div class="w-7 h-7 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">C</div>
      <div class="w-7 h-7 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">D</div>
    </div>
    <p class="text-sm text-gray-500">
      Únete a <strong class="text-gray-900">5,000+</strong> desarrolladores
    </p>
  </div>
</section>`;

  readonly hero4Ts = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonComponent } from 'garaq-angular-components';

@Component({
  selector: 'app-hero-subscription',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
  templateUrl: './hero-subscription.component.html',
})
export class HeroSubscriptionComponent {
  protected readonly email = signal('');
  protected readonly subscribed = signal(false);

  onSubscribe() {
    if (this.email().trim()) {
      // TODO: llamar a tu servicio de newsletter
      this.subscribed.set(true);
    }
  }
}`;

  // ─── Hero 5: Minimalista ───────────────────────────────────────────────────

  readonly hero5Html = `<section class="bg-white px-4 py-24 sm:py-32">
  <div class="max-w-3xl mx-auto">
    <!-- Version badge -->
    <span class="inline-block text-xs font-mono font-semibold text-gray-400
                 border border-gray-200 px-3 py-1 rounded-full mb-10">
      v2.0 · Estable
    </span>

    <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900
               leading-[1.05] mb-8">
      Componentes que simplemente funcionan.
    </h1>

    <p class="text-gray-500 text-xl max-w-xl mb-12 leading-relaxed">
      Una librería UI minimalista para Angular. Cero dependencias externas,
      máximo control, accesibilidad de serie.
    </p>

    <div class="flex flex-col sm:flex-row items-start gap-4">
      <gc-button size="lg" (click)="getStarted()">Comenzar →</gc-button>
      <p class="text-sm text-gray-400 self-center">
        No se requiere tarjeta de crédito
      </p>
    </div>
  </div>
</section>`;

  readonly hero5Ts = `import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from 'garaq-angular-components';

@Component({
  selector: 'app-hero-minimal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
  templateUrl: './hero-minimal.component.html',
})
export class HeroMinimalComponent {
  private readonly router = inject(Router);

  getStarted() { this.router.navigate(['/register']); }
}`;
}
