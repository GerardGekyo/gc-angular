import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonComponent } from 'garaq-angular-components';
import { ExampleSectionTabsComponent } from '../../shared/example-section-tabs/example-section-tabs.component';

@Component({
  selector: 'block-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExampleSectionTabsComponent, ButtonComponent],
  templateUrl: './navbar-block.component.html',
  styleUrl: './navbar-block.component.css',
})
export class NavbarBlockComponent {
  // Mobile menu state — one signal per navbar preview
  protected readonly menu1Open = signal(false);
  protected readonly menu2Open = signal(false);
  protected readonly menu3Open = signal(false);
  protected readonly menu4Open = signal(false);
  protected readonly searchOpen = signal(false);
  protected readonly menu5Open = signal(false);

  // ─── Navbar 1: Minimal ─────────────────────────────────────────────────────

  readonly navbar1Html = `<nav class="bg-white border-b border-gray-200">
  <div class="max-w-5xl mx-auto px-4 sm:px-6">
    <div class="flex items-center justify-between h-14">

      <!-- Logo -->
      <a href="/" class="flex items-center gap-2 shrink-0">
        <span class="w-7 h-7 rounded-lg bg-zinc-900 flex items-center
                     justify-center text-white font-bold text-sm">G</span>
        <span class="font-semibold text-gray-900 text-sm">Garaq UI</span>
      </a>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-1">
        <a href="#" class="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900
                           hover:bg-gray-100 rounded-md transition-colors">Inicio</a>
        <a href="#" class="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900
                           hover:bg-gray-100 rounded-md transition-colors">Componentes</a>
        <a href="#" class="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900
                           hover:bg-gray-100 rounded-md transition-colors">Ejemplos</a>
        <a href="#" class="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900
                           hover:bg-gray-100 rounded-md transition-colors">Docs</a>
      </div>

      <!-- Desktop actions -->
      <div class="hidden md:flex items-center gap-2">
        <a href="#" class="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900
                           rounded-md transition-colors">Entrar</a>
        <gc-button size="sm">Comenzar</gc-button>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-900
               hover:bg-gray-100 transition-colors"
        [attr.aria-expanded]="menuOpen()"
        aria-label="Abrir menú"
        (click)="menuOpen.set(!menuOpen())"
      >
        @if (menuOpen()) {
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        } @else {
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        }
      </button>
    </div>
  </div>

  <!-- Mobile menu -->
  @if (menuOpen()) {
    <div class="md:hidden border-t border-gray-100">
      <div class="px-4 py-3 space-y-1">
        <a href="#" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Inicio</a>
        <a href="#" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Componentes</a>
        <a href="#" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Ejemplos</a>
        <a href="#" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Docs</a>
        <div class="pt-3 mt-1 border-t border-gray-100 flex flex-col gap-2">
          <a href="#" class="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">Entrar</a>
          <gc-button size="sm">Comenzar</gc-button>
        </div>
      </div>
    </div>
  }
</nav>`;

  readonly navbar1Ts = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonComponent } from 'garaq-angular-components';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  protected readonly menuOpen = signal(false);
}`;

  // ─── Navbar 2: Dark ────────────────────────────────────────────────────────

  readonly navbar2Html = `<nav class="bg-zinc-900">
  <div class="max-w-5xl mx-auto px-4 sm:px-6">
    <div class="flex items-center justify-between h-14">

      <!-- Logo -->
      <a href="/" class="flex items-center gap-2 shrink-0">
        <span class="w-7 h-7 rounded-lg bg-white flex items-center
                     justify-center text-zinc-900 font-bold text-sm">G</span>
        <span class="font-semibold text-white text-sm">Garaq UI</span>
      </a>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-1">
        <a href="#" class="px-3 py-1.5 text-sm text-zinc-400 hover:text-white
                           hover:bg-zinc-800 rounded-md transition-colors">Inicio</a>
        <a href="#" class="px-3 py-1.5 text-sm text-zinc-400 hover:text-white
                           hover:bg-zinc-800 rounded-md transition-colors">Componentes</a>
        <a href="#" class="px-3 py-1.5 text-sm text-zinc-400 hover:text-white
                           hover:bg-zinc-800 rounded-md transition-colors">Ejemplos</a>
        <a href="#" class="px-3 py-1.5 text-sm text-zinc-400 hover:text-white
                           hover:bg-zinc-800 rounded-md transition-colors">Docs</a>
      </div>

      <!-- Desktop actions -->
      <div class="hidden md:flex items-center gap-3">
        <a href="#" class="text-sm text-zinc-400 hover:text-white transition-colors">GitHub</a>
        <gc-button size="sm" variant="ghost">Comenzar gratis</gc-button>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden p-2 rounded-md text-zinc-400 hover:text-white
               hover:bg-zinc-800 transition-colors"
        [attr.aria-expanded]="menuOpen()"
        aria-label="Abrir menú"
        (click)="menuOpen.set(!menuOpen())"
      >
        @if (menuOpen()) {
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        } @else {
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        }
      </button>
    </div>
  </div>

  <!-- Mobile menu — dark -->
  @if (menuOpen()) {
    <div class="md:hidden border-t border-zinc-800">
      <div class="px-4 py-3 space-y-1">
        <a href="#" class="block px-3 py-2 text-sm text-zinc-400 hover:text-white
                           hover:bg-zinc-800 rounded-md transition-colors">Inicio</a>
        <a href="#" class="block px-3 py-2 text-sm text-zinc-400 hover:text-white
                           hover:bg-zinc-800 rounded-md transition-colors">Componentes</a>
        <a href="#" class="block px-3 py-2 text-sm text-zinc-400 hover:text-white
                           hover:bg-zinc-800 rounded-md transition-colors">Ejemplos</a>
        <a href="#" class="block px-3 py-2 text-sm text-zinc-400 hover:text-white
                           hover:bg-zinc-800 rounded-md transition-colors">Docs</a>
        <div class="pt-3 mt-1 border-t border-zinc-800 flex flex-col gap-2">
          <a href="#" class="block px-3 py-2 text-sm text-zinc-400 hover:bg-zinc-800 rounded-md">GitHub</a>
          <gc-button size="sm" variant="ghost">Comenzar gratis</gc-button>
        </div>
      </div>
    </div>
  }
</nav>`;

  readonly navbar2Ts = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonComponent } from 'garaq-angular-components';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  protected readonly menuOpen = signal(false);
}`;

  // ─── Navbar 3: Centered Logo ───────────────────────────────────────────────

  readonly navbar3Html = `<nav class="bg-white border-b border-gray-100 shadow-sm">
  <div class="max-w-5xl mx-auto px-4 sm:px-6">
    <div class="flex items-center h-14">

      <!-- Left zone (flex-1): desktop links / mobile logo -->
      <div class="flex-1 flex items-center gap-1">
        <!-- Mobile logo (shown only on mobile, left aligned) -->
        <a href="/" class="md:hidden flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-zinc-900 flex items-center
                       justify-center text-white font-bold text-sm">G</span>
          <span class="font-semibold text-gray-900 text-sm">Garaq UI</span>
        </a>
        <!-- Desktop left links -->
        <div class="hidden md:flex items-center gap-1">
          <a href="#" class="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900
                             hover:bg-gray-100 rounded-md transition-colors">Inicio</a>
          <a href="#" class="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900
                             hover:bg-gray-100 rounded-md transition-colors">Producto</a>
          <a href="#" class="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900
                             hover:bg-gray-100 rounded-md transition-colors">Precios</a>
        </div>
      </div>

      <!-- Center: Logo (desktop only) -->
      <a href="/" class="hidden md:flex items-center gap-2 shrink-0">
        <span class="w-7 h-7 rounded-lg bg-zinc-900 flex items-center
                     justify-center text-white font-bold text-sm">G</span>
        <span class="font-semibold text-gray-900 text-sm">Garaq UI</span>
      </a>

      <!-- Right zone (flex-1): desktop links + button / hamburger -->
      <div class="flex-1 flex items-center justify-end gap-2">
        <!-- Desktop right links -->
        <div class="hidden md:flex items-center gap-1">
          <a href="#" class="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900
                             hover:bg-gray-100 rounded-md transition-colors">Blog</a>
          <a href="#" class="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900
                             hover:bg-gray-100 rounded-md transition-colors">Docs</a>
        </div>
        <div class="hidden md:block">
          <gc-button size="sm">GitHub</gc-button>
        </div>
        <!-- Mobile hamburger -->
        <button
          class="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-900
                 hover:bg-gray-100 transition-colors"
          [attr.aria-expanded]="menuOpen()"
          aria-label="Abrir menú"
          (click)="menuOpen.set(!menuOpen())"
        >
          @if (menuOpen()) {
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          } @else {
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          }
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  @if (menuOpen()) {
    <div class="md:hidden border-t border-gray-100">
      <div class="px-4 py-3 space-y-1">
        <a href="#" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Inicio</a>
        <a href="#" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Producto</a>
        <a href="#" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Precios</a>
        <a href="#" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Blog</a>
        <a href="#" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Docs</a>
        <div class="pt-3 mt-1 border-t border-gray-100">
          <gc-button size="sm">GitHub</gc-button>
        </div>
      </div>
    </div>
  }
</nav>`;

  readonly navbar3Ts = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonComponent } from 'garaq-angular-components';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  protected readonly menuOpen = signal(false);
}`;

  // ─── Navbar 4: Con Búsqueda ────────────────────────────────────────────────

  readonly navbar4Html = `<nav class="bg-white border-b border-gray-200">
  <div class="max-w-5xl mx-auto px-4 sm:px-6">
    <div class="flex items-center gap-3 h-14">

      <!-- Logo -->
      <a href="/" class="flex items-center gap-2 shrink-0">
        <span class="w-7 h-7 rounded-lg bg-zinc-900 flex items-center
                     justify-center text-white font-bold text-sm">G</span>
        <span class="hidden sm:block font-semibold text-gray-900 text-sm">Garaq UI</span>
      </a>

      <!-- Search bar (desktop) -->
      <div class="hidden md:flex flex-1 max-w-sm relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
             stroke-linejoin="round"
             class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
        </svg>
        <input
          type="search"
          placeholder="Buscar componentes..."
          class="w-full pl-9 pr-3 py-1.5 bg-gray-100 border border-transparent rounded-lg
                 text-sm placeholder:text-gray-400 focus:outline-none focus:border-gray-300
                 focus:bg-white transition-colors"
        />
      </div>

      <!-- Spacer -->
      <div class="flex-1"></div>

      <!-- Desktop actions -->
      <div class="hidden md:flex items-center gap-1">
        <!-- Docs link -->
        <a href="#" class="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900
                           hover:bg-gray-100 rounded-md transition-colors">Docs</a>
        <!-- Bell -->
        <button class="p-2 rounded-md text-gray-400 hover:text-gray-600
                        hover:bg-gray-100 transition-colors" aria-label="Notificaciones">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </button>
        <gc-button size="sm">Iniciar sesión</gc-button>
      </div>

      <!-- Mobile: search icon + hamburger -->
      <div class="md:hidden flex items-center gap-1">
        <button
          class="p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          (click)="searchOpen.set(!searchOpen())"
          aria-label="Buscar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round"><circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
          </svg>
        </button>
        <button
          class="p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          [attr.aria-expanded]="menuOpen()"
          aria-label="Abrir menú"
          (click)="menuOpen.set(!menuOpen())"
        >
          @if (menuOpen()) {
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          } @else {
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          }
        </button>
      </div>
    </div>

    <!-- Mobile search bar -->
    @if (searchOpen()) {
      <div class="md:hidden pb-3">
        <div class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round"
               class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
          <input
            type="search"
            placeholder="Buscar componentes..."
            autofocus
            class="w-full pl-9 pr-3 py-2 bg-gray-100 border border-transparent rounded-lg
                   text-sm placeholder:text-gray-400 focus:outline-none focus:border-gray-300
                   focus:bg-white transition-colors"
          />
        </div>
      </div>
    }
  </div>

  <!-- Mobile menu -->
  @if (menuOpen()) {
    <div class="md:hidden border-t border-gray-100">
      <div class="px-4 py-3 space-y-1">
        <a href="#" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Inicio</a>
        <a href="#" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Componentes</a>
        <a href="#" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Docs</a>
        <div class="pt-3 mt-1 border-t border-gray-100">
          <gc-button size="sm">Iniciar sesión</gc-button>
        </div>
      </div>
    </div>
  }
</nav>`;

  readonly navbar4Ts = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonComponent } from 'garaq-angular-components';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  protected readonly menuOpen = signal(false);
  protected readonly searchOpen = signal(false);
}`;

  // ─── Navbar 5: Con Notificaciones y Avatar ─────────────────────────────────

  readonly navbar5Html = `<nav class="bg-white border-b border-gray-200">
  <div class="max-w-5xl mx-auto px-4 sm:px-6">
    <div class="flex items-center justify-between h-14">

      <!-- Logo -->
      <a href="/" class="flex items-center gap-2 shrink-0">
        <span class="w-7 h-7 rounded-lg bg-zinc-900 flex items-center
                     justify-center text-white font-bold text-sm">G</span>
        <span class="font-semibold text-gray-900 text-sm">Garaq UI</span>
      </a>

      <!-- Desktop links + badge -->
      <div class="hidden md:flex items-center gap-1">
        <a href="#" class="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900
                           hover:bg-gray-100 rounded-md transition-colors">Inicio</a>
        <a href="#" class="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900
                           hover:bg-gray-100 rounded-md transition-colors">Componentes</a>
        <a href="#" class="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900
                           hover:bg-gray-100 rounded-md transition-colors">Ejemplos</a>
        <!-- Version badge -->
        <span class="ml-2 text-xs font-semibold px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded-full">
          v2.0
        </span>
      </div>

      <!-- Desktop right: bell + avatar -->
      <div class="hidden md:flex items-center gap-2">
        <!-- Bell with notification dot -->
        <button
          class="relative p-2 rounded-md text-gray-400 hover:text-gray-600
                 hover:bg-gray-100 transition-colors"
          aria-label="Notificaciones"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full
                        ring-2 ring-white"></span>
        </button>
        <!-- User avatar -->
        <button
          class="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center
                 text-white text-xs font-semibold hover:ring-2 hover:ring-zinc-300
                 hover:ring-offset-1 transition-all"
          aria-label="Perfil de usuario"
        >
          JG
        </button>
      </div>

      <!-- Mobile: bell + hamburger -->
      <div class="md:hidden flex items-center gap-1">
        <button
          class="relative p-2 rounded-md text-gray-400 hover:text-gray-600
                 hover:bg-gray-100 transition-colors"
          aria-label="Notificaciones"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span class="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
        </button>
        <button
          class="p-2 rounded-md text-gray-500 hover:text-gray-900
                 hover:bg-gray-100 transition-colors"
          [attr.aria-expanded]="menuOpen()"
          aria-label="Abrir menú"
          (click)="menuOpen.set(!menuOpen())"
        >
          @if (menuOpen()) {
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          } @else {
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          }
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  @if (menuOpen()) {
    <div class="md:hidden border-t border-gray-100">
      <div class="px-4 py-3 space-y-1">
        <a href="#" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Inicio</a>
        <a href="#" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Componentes</a>
        <a href="#" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Ejemplos</a>
        <!-- Profile section -->
        <div class="pt-3 mt-1 border-t border-gray-100">
          <div class="flex items-center gap-3 px-3 py-2">
            <div class="w-9 h-9 rounded-full bg-zinc-900 flex items-center
                        justify-center text-white text-sm font-semibold shrink-0">
              JG
            </div>
            <div class="min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">Juan García</p>
              <p class="text-xs text-gray-500 truncate">juan@email.com</p>
            </div>
          </div>
          <a href="#" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Perfil</a>
          <a href="#" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Configuración</a>
          <a href="#" class="block px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md">Cerrar sesión</a>
        </div>
      </div>
    </div>
  }
</nav>`;

  readonly navbar5Ts = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  protected readonly menuOpen = signal(false);

  // Replace with real user data from an auth service
  protected readonly user = {
    name: 'Juan García',
    email: 'juan@email.com',
    initials: 'JG',
  };
}`;
}
