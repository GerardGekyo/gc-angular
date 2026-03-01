import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonComponent, InputComponent, SpinnerComponent } from 'garaq-angular-components';
import { ExampleSectionTabsComponent } from '../../shared/example-section-tabs/example-section-tabs.component';

@Component({
  selector: 'block-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExampleSectionTabsComponent, ButtonComponent, InputComponent, SpinnerComponent],
  templateUrl: './footer-block.component.html',
  styleUrl: './footer-block.component.css',
})
export class FooterBlockComponent {
  // Newsletter state (Footer 3)
  protected readonly newsletterEmail = signal('');
  protected readonly subscribing = signal(false);
  protected readonly subscribed = signal(false);

  protected onSubscribe(): void {
    if (this.subscribing() || !this.newsletterEmail().trim()) return;
    this.subscribing.set(true);
    setTimeout(() => {
      this.subscribing.set(false);
      this.subscribed.set(true);
      this.newsletterEmail.set('');
      setTimeout(() => this.subscribed.set(false), 3000);
    }, 1200);
  }

  // ─── Footer 1: Minimal ─────────────────────────────────────────────────

  readonly footer1Html = `<footer class="border-t border-gray-200 bg-white py-8">
  <div class="max-w-5xl mx-auto px-6 flex flex-col items-center gap-5">

    <!-- Logo -->
    <div class="flex items-center gap-2">
      <span class="w-7 h-7 rounded-lg bg-zinc-900 flex items-center
                   justify-center text-white font-bold text-sm">G</span>
      <span class="font-semibold text-gray-900 text-sm">Garaq UI</span>
    </div>

    <!-- Nav links -->
    <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2">
      <a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Inicio</a>
      <a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Componentes</a>
      <a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Ejemplos</a>
      <a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Documentación</a>
      <a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">GitHub</a>
    </nav>

    <!-- Copyright -->
    <p class="text-xs text-gray-400">
      © 2025 Garaq UI. Todos los derechos reservados.
    </p>
  </div>
</footer>`;

  readonly footer1Ts = `import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: \`
    <footer class="border-t border-gray-200 bg-white py-8">
      <div class="max-w-5xl mx-auto px-6 flex flex-col items-center gap-5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-zinc-900 flex items-center
                       justify-center text-white font-bold text-sm">G</span>
          <span class="font-semibold text-gray-900 text-sm">Garaq UI</span>
        </div>
        <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a href="/" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Inicio</a>
          <a href="/components" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Componentes</a>
          <a href="/examples" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Ejemplos</a>
          <a href="/docs" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Documentación</a>
        </nav>
        <p class="text-xs text-gray-400">© 2025 Mi App. Todos los derechos reservados.</p>
      </div>
    </footer>
  \`,
})
export class FooterComponent {}`;

  // ─── Footer 2: Multi-column ───────────────────────────────────────────

  readonly footer2Html = `<footer class="border-t border-gray-200 bg-white">
  <div class="max-w-5xl mx-auto px-6 py-12">

    <!-- Grid: brand + 3 columns -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-8">

      <!-- Brand -->
      <div class="col-span-2 sm:col-span-1">
        <div class="flex items-center gap-2 mb-3">
          <span class="w-7 h-7 rounded-lg bg-zinc-900 flex items-center
                       justify-center text-white font-bold text-sm">G</span>
          <span class="font-semibold text-gray-900 text-sm">Garaq UI</span>
        </div>
        <p class="text-sm text-gray-500 leading-relaxed">
          Componentes Angular modernos con signals, OnPush y Tailwind CSS.
        </p>
      </div>

      <!-- Producto -->
      <div>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
          Producto
        </h4>
        <ul class="space-y-3">
          <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Componentes</a></li>
          <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Ejemplos</a></li>
          <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Bloques</a></li>
          <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Changelog</a></li>
        </ul>
      </div>

      <!-- Recursos -->
      <div>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
          Recursos
        </h4>
        <ul class="space-y-3">
          <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Documentación</a></li>
          <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">GitHub</a></li>
          <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">npm</a></li>
          <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Releases</a></li>
        </ul>
      </div>

      <!-- Legal -->
      <div>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
          Legal
        </h4>
        <ul class="space-y-3">
          <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacidad</a></li>
          <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Términos</a></li>
          <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Cookies</a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row
                items-center justify-between gap-3">
      <p class="text-xs text-gray-400">© 2025 Garaq UI. Todos los derechos reservados.</p>
      <div class="flex items-center gap-4">
        <a href="#" class="text-xs text-gray-400 hover:text-gray-600 transition-colors">Privacidad</a>
        <a href="#" class="text-xs text-gray-400 hover:text-gray-600 transition-colors">Términos</a>
      </div>
    </div>
  </div>
</footer>`;

  readonly footer2Ts = `import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly columns = [
    {
      title: 'Producto',
      links: [
        { label: 'Componentes', href: '/components' },
        { label: 'Ejemplos', href: '/examples' },
        { label: 'Bloques', href: '/blocks' },
        { label: 'Changelog', href: '/changelog' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { label: 'Documentación', href: '/docs' },
        { label: 'GitHub', href: 'https://github.com' },
        { label: 'npm', href: 'https://npmjs.com' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacidad', href: '/privacy' },
        { label: 'Términos', href: '/terms' },
      ],
    },
  ];
}`;

  // ─── Footer 3: Newsletter ─────────────────────────────────────────────

  readonly footer3Html = `<footer class="border-t border-gray-200 bg-gray-50">
  <div class="max-w-5xl mx-auto px-6 py-12">
    <div class="flex flex-col lg:flex-row gap-12 justify-between">

      <!-- Brand + newsletter -->
      <div class="max-w-sm">
        <div class="flex items-center gap-2 mb-3">
          <span class="w-7 h-7 rounded-lg bg-zinc-900 flex items-center
                       justify-center text-white font-bold text-sm">G</span>
          <span class="font-semibold text-gray-900 text-sm">Garaq UI</span>
        </div>
        <p class="text-sm text-gray-500 mb-5 leading-relaxed">
          Componentes Angular modernos. Recibe novedades y actualizaciones en tu email.
        </p>

        <!-- Newsletter form (uses gc-input + gc-button) -->
        <div class="flex gap-2">
          <div class="flex-1 min-w-0">
            <gc-input
              placeholder="tu@email.com"
              type="email"
              [value]="newsletterEmail()"
              (valueChange)="newsletterEmail.set($event)"
            />
          </div>
          <gc-button class="shrink-0" [disabled]="subscribing()" (click)="onSubscribe()">
            @if (subscribing()) {
              <gc-spinner size="xs" color="#fff" />
            } @else if (subscribed()) {
              ✓
            } @else {
              Suscribirse
            }
          </gc-button>
        </div>
        @if (subscribed()) {
          <p class="text-xs text-green-600 mt-2">¡Gracias por suscribirte!</p>
        }
      </div>

      <!-- Link columns -->
      <div class="flex gap-8 sm:gap-16">
        <div>
          <h4 class="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
            Producto
          </h4>
          <ul class="space-y-3">
            <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Componentes</a></li>
            <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Ejemplos</a></li>
            <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Bloques</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
            Empresa
          </h4>
          <ul class="space-y-3">
            <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Nosotros</a></li>
            <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Blog</a></li>
            <li><a href="#" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contacto</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom bar with social icons -->
    <div class="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row
                items-center justify-between gap-4">
      <p class="text-xs text-gray-400">© 2025 Garaq UI. Todos los derechos reservados.</p>
      <div class="flex items-center gap-3">
        <!-- GitHub -->
        <a href="#" class="gc-social-link" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <!-- Twitter/X -->
        <a href="#" class="gc-social-link" aria-label="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <!-- LinkedIn -->
        <a href="#" class="gc-social-link" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
      </div>
    </div>
  </div>
</footer>`;

  readonly footer3Ts = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonComponent, InputComponent, SpinnerComponent } from 'garaq-angular-components';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, InputComponent, SpinnerComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  protected readonly newsletterEmail = signal('');
  protected readonly subscribing = signal(false);
  protected readonly subscribed = signal(false);

  protected onSubscribe(): void {
    if (this.subscribing() || !this.newsletterEmail().trim()) return;
    this.subscribing.set(true);

    // Replace with your real API call
    setTimeout(() => {
      this.subscribing.set(false);
      this.subscribed.set(true);
      this.newsletterEmail.set('');
      setTimeout(() => this.subscribed.set(false), 3000);
    }, 1200);
  }
}`;

  // ─── Footer 4: Dark ───────────────────────────────────────────────────

  readonly footer4Html = `<footer class="bg-zinc-900 text-white">
  <div class="max-w-5xl mx-auto px-6 py-14">

    <!-- Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">

      <!-- Brand -->
      <div class="col-span-2 sm:col-span-1">
        <div class="flex items-center gap-2 mb-4">
          <span class="w-7 h-7 rounded-lg bg-white flex items-center
                       justify-center text-zinc-900 font-bold text-sm">G</span>
          <span class="font-semibold text-white text-sm">Garaq UI</span>
        </div>
        <p class="text-sm text-zinc-400 leading-relaxed mb-5">
          Componentes Angular modernos con signals, OnPush y Tailwind CSS.
        </p>
        <!-- Social icons -->
        <div class="flex gap-3">
          <a href="#" class="gc-social-dark" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="#" class="gc-social-dark" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" class="gc-social-dark" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>

      <!-- Producto -->
      <div>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
          Producto
        </h4>
        <ul class="space-y-3">
          <li><a href="#" class="text-sm text-zinc-400 hover:text-white transition-colors">Componentes</a></li>
          <li><a href="#" class="text-sm text-zinc-400 hover:text-white transition-colors">Ejemplos</a></li>
          <li><a href="#" class="text-sm text-zinc-400 hover:text-white transition-colors">Bloques</a></li>
          <li><a href="#" class="text-sm text-zinc-400 hover:text-white transition-colors">Changelog</a></li>
        </ul>
      </div>

      <!-- Recursos -->
      <div>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
          Recursos
        </h4>
        <ul class="space-y-3">
          <li><a href="#" class="text-sm text-zinc-400 hover:text-white transition-colors">Documentación</a></li>
          <li><a href="#" class="text-sm text-zinc-400 hover:text-white transition-colors">GitHub</a></li>
          <li><a href="#" class="text-sm text-zinc-400 hover:text-white transition-colors">npm</a></li>
        </ul>
      </div>

      <!-- Empresa -->
      <div>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
          Empresa
        </h4>
        <ul class="space-y-3">
          <li><a href="#" class="text-sm text-zinc-400 hover:text-white transition-colors">Nosotros</a></li>
          <li><a href="#" class="text-sm text-zinc-400 hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" class="text-sm text-zinc-400 hover:text-white transition-colors">Privacidad</a></li>
          <li><a href="#" class="text-sm text-zinc-400 hover:text-white transition-colors">Términos</a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="pt-6 border-t border-zinc-800 text-center">
      <p class="text-xs text-zinc-600">
        © 2025 Garaq UI — Construido con Angular 21 · MIT License
      </p>
    </div>
  </div>
</footer>`;

  readonly footer4Ts = `import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly columns = [
    {
      title: 'Producto',
      links: ['Componentes', 'Ejemplos', 'Bloques', 'Changelog'],
    },
    {
      title: 'Recursos',
      links: ['Documentación', 'GitHub', 'npm'],
    },
    {
      title: 'Empresa',
      links: ['Nosotros', 'Blog', 'Privacidad', 'Términos'],
    },
  ];
}`;

  // ─── Footer 5: Social Centrado ────────────────────────────────────────

  readonly footer5Html = `<footer class="bg-white border-t-4 border-zinc-900">
  <div class="max-w-3xl mx-auto px-6 py-12 flex flex-col items-center gap-8">

    <!-- Brand -->
    <div class="flex flex-col items-center gap-2 text-center">
      <div class="flex items-center gap-2">
        <span class="w-9 h-9 rounded-xl bg-zinc-900 flex items-center
                     justify-center text-white font-bold">G</span>
        <span class="font-bold text-gray-900 text-lg">Garaq UI</span>
      </div>
      <p class="text-sm text-gray-500 max-w-xs leading-relaxed">
        Componentes Angular modernos listos para usar en tus proyectos.
      </p>
    </div>

    <!-- Social icons -->
    <div class="flex flex-wrap items-center justify-center gap-2">
      <a href="#" class="gc-social-pill" aria-label="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        GitHub
      </a>
      <a href="#" class="gc-social-pill" aria-label="Twitter">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        Twitter
      </a>
      <a href="#" class="gc-social-pill" aria-label="LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        LinkedIn
      </a>
      <a href="#" class="gc-social-pill" aria-label="npm">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z"/></svg>
        npm
      </a>
    </div>

    <!-- Nav links -->
    <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2">
      <a href="#" class="text-xs text-gray-400 hover:text-gray-700 transition-colors">Componentes</a>
      <a href="#" class="text-xs text-gray-400 hover:text-gray-700 transition-colors">Ejemplos</a>
      <a href="#" class="text-xs text-gray-400 hover:text-gray-700 transition-colors">Documentación</a>
      <a href="#" class="text-xs text-gray-400 hover:text-gray-700 transition-colors">Privacidad</a>
      <a href="#" class="text-xs text-gray-400 hover:text-gray-700 transition-colors">Términos</a>
    </nav>

    <!-- Copyright -->
    <p class="text-xs text-gray-300">
      © 2025 Garaq UI — MIT License
    </p>
  </div>
</footer>`;

  readonly footer5Ts = `import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: \`
    <footer class="bg-white border-t-4 border-zinc-900">
      <div class="max-w-3xl mx-auto px-6 py-12 flex flex-col items-center gap-8">

        <!-- Brand -->
        <div class="flex flex-col items-center gap-2 text-center">
          <div class="flex items-center gap-2">
            <span class="w-9 h-9 rounded-xl bg-zinc-900 flex items-center
                         justify-center text-white font-bold">G</span>
            <span class="font-bold text-gray-900 text-lg">Mi App</span>
          </div>
          <p class="text-sm text-gray-500 max-w-xs leading-relaxed">
            Descripción breve de tu producto o servicio.
          </p>
        </div>

        <!-- Social icons -->
        <div class="flex flex-wrap items-center justify-center gap-2">
          <a href="https://github.com" class="gc-social-pill">GitHub</a>
          <a href="https://twitter.com" class="gc-social-pill">Twitter</a>
        </div>

        <!-- Nav links -->
        <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a href="/" class="text-xs text-gray-400 hover:text-gray-700">Inicio</a>
          <a href="/about" class="text-xs text-gray-400 hover:text-gray-700">Nosotros</a>
          <a href="/privacy" class="text-xs text-gray-400 hover:text-gray-700">Privacidad</a>
        </nav>

        <p class="text-xs text-gray-300">© 2025 Mi App — MIT License</p>
      </div>
    </footer>
  \`,
})
export class FooterComponent {}`;
}
