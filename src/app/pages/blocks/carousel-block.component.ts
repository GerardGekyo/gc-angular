import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ExampleSectionTabsComponent } from '../../shared/example-section-tabs/example-section-tabs.component';

@Component({
  selector: 'block-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExampleSectionTabsComponent],
  templateUrl: './carousel-block.component.html',
  styleUrl: './carousel-block.component.css',
})
export class CarouselBlockComponent {
  // ─── Live-preview signals (one set per carousel so they're independent) ────
  readonly basicSlide = signal(0);
  readonly basicDots = [0, 1, 2, 3];
  basicPrev() { this.basicSlide.update(i => (i - 1 + 4) % 4); }
  basicNext() { this.basicSlide.update(i => (i + 1) % 4); }

  readonly cardsSlide = signal(0);
  readonly cardsDots = [0, 1, 2, 3];
  cardsPrev() { this.cardsSlide.update(i => (i - 1 + 4) % 4); }
  cardsNext() { this.cardsSlide.update(i => (i + 1) % 4); }

  readonly testSlide = signal(0);
  readonly testDots = [0, 1, 2, 3];
  testPrev() { this.testSlide.update(i => (i - 1 + 4) % 4); }
  testNext() { this.testSlide.update(i => (i + 1) % 4); }

  readonly thumbSlide = signal(0);
  readonly thumbDots = [0, 1, 2, 3];
  thumbPrev() { this.thumbSlide.update(i => (i - 1 + 4) % 4); }
  thumbNext() { this.thumbSlide.update(i => (i + 1) % 4); }

  readonly newsSlide = signal(0);
  newsPrev() { this.newsSlide.update(i => (i - 1 + 3) % 3); }
  newsNext() { this.newsSlide.update(i => (i + 1) % 3); }

  // ─── Carousel 1: Básico ─────────────────────────────────────────────────────

  readonly carousel1Html = `<div class="relative overflow-hidden rounded-2xl"
     role="region" aria-label="Carrusel básico">

  <!-- Slides -->
  <div class="relative h-64 sm:h-80">
    @if (currentIndex() === 0) {
      <div class="absolute inset-0 flex flex-col items-center justify-center
                  bg-gradient-to-br from-violet-600 to-violet-900 text-white text-center px-8">
        <p class="text-xs uppercase tracking-widest text-violet-300 mb-3">01 / 04</p>
        <h3 class="text-2xl sm:text-3xl font-bold mb-2">Diseño Moderno</h3>
        <p class="text-sm text-violet-200 max-w-xs">Componentes hermosos y accesibles, listos para producción.</p>
      </div>
    }
    @if (currentIndex() === 1) {
      <div class="absolute inset-0 flex flex-col items-center justify-center
                  bg-gradient-to-br from-blue-600 to-blue-900 text-white text-center px-8">
        <p class="text-xs uppercase tracking-widest text-blue-300 mb-3">02 / 04</p>
        <h3 class="text-2xl sm:text-3xl font-bold mb-2">Rendimiento Óptimo</h3>
        <p class="text-sm text-blue-200 max-w-xs">Angular Signals y OnPush para una experiencia ultra fluida.</p>
      </div>
    }
    @if (currentIndex() === 2) {
      <div class="absolute inset-0 flex flex-col items-center justify-center
                  bg-gradient-to-br from-emerald-600 to-emerald-900 text-white text-center px-8">
        <p class="text-xs uppercase tracking-widest text-emerald-300 mb-3">03 / 04</p>
        <h3 class="text-2xl sm:text-3xl font-bold mb-2">Totalmente Accesible</h3>
        <p class="text-sm text-emerald-200 max-w-xs">WCAG AA por defecto. Navegación completa por teclado.</p>
      </div>
    }
    @if (currentIndex() === 3) {
      <div class="absolute inset-0 flex flex-col items-center justify-center
                  bg-gradient-to-br from-orange-600 to-orange-900 text-white text-center px-8">
        <p class="text-xs uppercase tracking-widest text-orange-300 mb-3">04 / 04</p>
        <h3 class="text-2xl sm:text-3xl font-bold mb-2">100% Personalizable</h3>
        <p class="text-sm text-orange-200 max-w-xs">Tokens CSS, variantes y tamaños adaptables a tu marca.</p>
      </div>
    }
  </div>

  <!-- Prev -->
  <button
    class="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full
           bg-black/30 hover:bg-black/50 text-white flex items-center justify-center
           transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
    aria-label="Slide anterior" (click)="prev()">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
         stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
  </button>

  <!-- Next -->
  <button
    class="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full
           bg-black/30 hover:bg-black/50 text-white flex items-center justify-center
           transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
    aria-label="Siguiente slide" (click)="next()">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
         stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  </button>

  <!-- Dots (active = pill) -->
  <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
    @for (dot of dots; track dot) {
      <button
        class="h-2 rounded-full transition-all duration-300"
        [class.w-6]="dot === currentIndex()"
        [class.bg-white]="dot === currentIndex()"
        [class.w-2]="dot !== currentIndex()"
        [class.bg-white/40]="dot !== currentIndex()"
        [attr.aria-label]="'Ir al slide ' + (dot + 1)"
        (click)="setSlide(dot)">
      </button>
    }
  </div>
</div>`;

  readonly carousel1Ts = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  protected readonly total = 4;
  protected readonly dots = [0, 1, 2, 3];
  protected readonly currentIndex = signal(0);

  prev() { this.currentIndex.update(i => (i - 1 + this.total) % this.total); }
  next() { this.currentIndex.update(i => (i + 1) % this.total); }
  setSlide(i: number) { this.currentIndex.set(i); }
}`;

  // ─── Carousel 2: Tarjetas ──────────────────────────────────────────────────

  readonly carousel2Html = `<div class="bg-gray-50 rounded-2xl p-6 sm:p-8"
     role="region" aria-label="Carrusel de tarjetas">

  <!-- Card area -->
  <div class="min-h-[280px] flex items-center justify-center">
    @if (currentIndex() === 0) {
      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 w-full max-w-sm">
        <div class="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" class="text-violet-600">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        </div>
        <span class="text-xs font-semibold text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full">TypeScript</span>
        <h3 class="text-lg font-bold text-gray-900 mt-3 mb-2">Rendimiento Excepcional</h3>
        <p class="text-gray-500 text-sm">Construido con Angular Signals y OnPush para máxima velocidad de renderizado.</p>
        <a href="#" class="inline-flex items-center gap-1 text-sm font-medium text-violet-600 mt-4 hover:text-violet-700">Ver más →</a>
      </div>
    }
    @if (currentIndex() === 1) {
      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 w-full max-w-sm">
        <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" class="text-blue-600">
            <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
          </svg>
        </div>
        <span class="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Tailwind v4</span>
        <h3 class="text-lg font-bold text-gray-900 mt-3 mb-2">Diseño Consistente</h3>
        <p class="text-gray-500 text-sm">Sistema de diseño basado en tokens CSS con soporte para modo oscuro nativo.</p>
        <a href="#" class="inline-flex items-center gap-1 text-sm font-medium text-blue-600 mt-4 hover:text-blue-700">Ver más →</a>
      </div>
    }
    @if (currentIndex() === 2) {
      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 w-full max-w-sm">
        <div class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" class="text-emerald-600">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <span class="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">WCAG AA</span>
        <h3 class="text-lg font-bold text-gray-900 mt-3 mb-2">Accesibilidad Primero</h3>
        <p class="text-gray-500 text-sm">ARIA roles, navegación por teclado y contraste de color certificado.</p>
        <a href="#" class="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 mt-4 hover:text-emerald-700">Ver más →</a>
      </div>
    }
    @if (currentIndex() === 3) {
      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 w-full max-w-sm">
        <div class="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" class="text-orange-600">
            <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
          </svg>
        </div>
        <span class="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">Mobile First</span>
        <h3 class="text-lg font-bold text-gray-900 mt-3 mb-2">Responsive por Defecto</h3>
        <p class="text-gray-500 text-sm">Todos los componentes están optimizados para funcionar en cualquier pantalla.</p>
        <a href="#" class="inline-flex items-center gap-1 text-sm font-medium text-orange-600 mt-4 hover:text-orange-700">Ver más →</a>
      </div>
    }
  </div>

  <!-- Controls -->
  <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
    <button
      class="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
      (click)="prev()">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      Anterior
    </button>
    <div class="flex gap-1.5">
      @for (dot of dots; track dot) {
        <button
          class="h-1.5 rounded-full transition-all duration-300"
          [class.w-5]="dot === currentIndex()"
          [class.bg-gray-800]="dot === currentIndex()"
          [class.w-1.5]="dot !== currentIndex()"
          [class.bg-gray-300]="dot !== currentIndex()"
          [attr.aria-label]="'Tarjeta ' + (dot + 1)"
          (click)="setSlide(dot)">
        </button>
      }
    </div>
    <button
      class="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
      (click)="next()">
      Siguiente
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </button>
  </div>
</div>`;

  readonly carousel2Ts = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-carousel-cards',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './carousel-cards.component.html',
})
export class CarouselCardsComponent {
  protected readonly total = 4;
  protected readonly dots = [0, 1, 2, 3];
  protected readonly currentIndex = signal(0);

  prev() { this.currentIndex.update(i => (i - 1 + this.total) % this.total); }
  next() { this.currentIndex.update(i => (i + 1) % this.total); }
  setSlide(i: number) { this.currentIndex.set(i); }
}`;

  // ─── Carousel 3: Testimonios ───────────────────────────────────────────────

  readonly carousel3Html = `<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-12"
     role="region" aria-label="Testimonios">

  <!-- Large quote mark -->
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
       fill="currentColor" class="text-violet-100 mb-6">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
  </svg>

  <!-- Testimonial content -->
  @if (currentIndex() === 0) {
    <div>
      <p class="text-lg sm:text-xl text-gray-700 italic leading-relaxed mb-8">
        "Garaq UI transformó nuestro flujo de trabajo. Redujimos el tiempo de desarrollo UI en un 60%
        y el código es mucho más mantenible."
      </p>
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold shrink-0">AG</div>
        <div>
          <p class="font-semibold text-gray-900">Ana García</p>
          <p class="text-sm text-gray-500">Directora de Producto · TechCorp</p>
        </div>
      </div>
    </div>
  }
  @if (currentIndex() === 1) {
    <div>
      <p class="text-lg sm:text-xl text-gray-700 italic leading-relaxed mb-8">
        "La combinación de Signals y los componentes de Garaq es imbatible. La DX es
        simplemente increíble, mis devs están muy contentos."
      </p>
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0">CL</div>
        <div>
          <p class="font-semibold text-gray-900">Carlos López</p>
          <p class="text-sm text-gray-500">CTO · StartupXYZ</p>
        </div>
      </div>
    </div>
  }
  @if (currentIndex() === 2) {
    <div>
      <p class="text-lg sm:text-xl text-gray-700 italic leading-relaxed mb-8">
        "Finalmente una librería Angular que toma la accesibilidad en serio. WCAG AA
        sin configuración adicional es un lujo que no sabía que necesitaba."
      </p>
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold shrink-0">MT</div>
        <div>
          <p class="font-semibold text-gray-900">María Torres</p>
          <p class="text-sm text-gray-500">Diseñadora UX · DesignAgency</p>
        </div>
      </div>
    </div>
  }
  @if (currentIndex() === 3) {
    <div>
      <p class="text-lg sm:text-xl text-gray-700 italic leading-relaxed mb-8">
        "Migré un proyecto entero a Garaq en dos semanas. La documentación es clara
        y los componentes funcionan exactamente como se espera."
      </p>
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold shrink-0">JM</div>
        <div>
          <p class="font-semibold text-gray-900">Juan Martínez</p>
          <p class="text-sm text-gray-500">Senior Developer · MegaCorp</p>
        </div>
      </div>
    </div>
  }

  <!-- Navigation -->
  <div class="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
    <button
      class="p-2 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
      aria-label="Testimonio anterior" (click)="prev()">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
    </button>
    <div class="flex gap-2">
      @for (dot of dots; track dot) {
        <button
          class="h-2 rounded-full transition-all duration-300"
          [class.w-6]="dot === currentIndex()"
          [class.bg-violet-600]="dot === currentIndex()"
          [class.w-2]="dot !== currentIndex()"
          [class.bg-gray-200]="dot !== currentIndex()"
          [attr.aria-label]="'Testimonio ' + (dot + 1)"
          (click)="setSlide(dot)">
        </button>
      }
    </div>
    <button
      class="p-2 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
      aria-label="Siguiente testimonio" (click)="next()">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </button>
  </div>
</div>`;

  readonly carousel3Ts = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-carousel-testimonials',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './carousel-testimonials.component.html',
})
export class CarouselTestimonialsComponent {
  protected readonly total = 4;
  protected readonly dots = [0, 1, 2, 3];
  protected readonly currentIndex = signal(0);

  prev() { this.currentIndex.update(i => (i - 1 + this.total) % this.total); }
  next() { this.currentIndex.update(i => (i + 1) % this.total); }
  setSlide(i: number) { this.currentIndex.set(i); }
}`;

  // ─── Carousel 4: Con Miniaturas ────────────────────────────────────────────

  readonly carousel4Html = `<div class="bg-zinc-900 rounded-2xl overflow-hidden"
     role="region" aria-label="Carrusel con miniaturas">

  <!-- Main slide -->
  <div class="relative h-48 sm:h-64">
    @if (currentIndex() === 0) {
      <div class="absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-800 flex items-center justify-center text-white text-center px-6">
        <div><h3 class="text-xl font-bold mb-1">Diseño UI</h3><p class="text-sm text-white/70">Componentes modernos y accesibles</p></div>
      </div>
    }
    @if (currentIndex() === 1) {
      <div class="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-800 flex items-center justify-center text-white text-center px-6">
        <div><h3 class="text-xl font-bold mb-1">Formularios</h3><p class="text-sm text-white/70">Inputs, selects, checkboxes y más</p></div>
      </div>
    }
    @if (currentIndex() === 2) {
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white text-center px-6">
        <div><h3 class="text-xl font-bold mb-1">Feedback</h3><p class="text-sm text-white/70">Alerts, toasts, dialogs y spinners</p></div>
      </div>
    }
    @if (currentIndex() === 3) {
      <div class="absolute inset-0 bg-gradient-to-br from-rose-600 to-pink-800 flex items-center justify-center text-white text-center px-6">
        <div><h3 class="text-xl font-bold mb-1">Layout</h3><p class="text-sm text-white/70">Cards, tabs, separators y más</p></div>
      </div>
    }
    <!-- Prev/Next -->
    <button
      class="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
      aria-label="Anterior" (click)="prev()">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
           stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
    </button>
    <button
      class="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
      aria-label="Siguiente" (click)="next()">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
           stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </button>
  </div>

  <!-- Thumbnail strip -->
  <div class="flex border-t border-white/10">
    @for (dot of dots; track dot) {
      <button
        class="flex-1 h-14 transition-opacity focus:outline-none"
        [class.opacity-100]="dot === currentIndex()"
        [class.opacity-35]="dot !== currentIndex()"
        [attr.aria-label]="'Ir al slide ' + (dot + 1)"
        (click)="setSlide(dot)">
        @if (dot === 0) { <div class="w-full h-full bg-gradient-to-br from-violet-600 to-purple-800"></div> }
        @if (dot === 1) { <div class="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-800"></div> }
        @if (dot === 2) { <div class="w-full h-full bg-gradient-to-br from-emerald-600 to-teal-800"></div> }
        @if (dot === 3) { <div class="w-full h-full bg-gradient-to-br from-rose-600 to-pink-800"></div> }
      </button>
    }
  </div>
</div>`;

  readonly carousel4Ts = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-carousel-thumbnails',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './carousel-thumbnails.component.html',
})
export class CarouselThumbnailsComponent {
  protected readonly total = 4;
  protected readonly dots = [0, 1, 2, 3];
  protected readonly currentIndex = signal(0);

  prev() { this.currentIndex.update(i => (i - 1 + this.total) % this.total); }
  next() { this.currentIndex.update(i => (i + 1) % this.total); }
  setSlide(i: number) { this.currentIndex.set(i); }
}`;

  // ─── Carousel 5: Noticias ──────────────────────────────────────────────────

  readonly carousel5Html = `<div class="bg-zinc-900 rounded-2xl overflow-hidden"
     role="region" aria-label="Carrusel de noticias">

  <!-- Content area -->
  <div class="px-6 sm:px-10 pt-8 pb-6 min-h-[280px] flex flex-col justify-between">
    <div>
      @if (currentIndex() === 0) {
        <div>
          <div class="flex items-center gap-3 mb-5">
            <span class="text-xs font-semibold uppercase tracking-wider text-violet-400 bg-violet-400/10 px-2.5 py-1 rounded-md">Framework</span>
            <span class="text-xs text-zinc-500">15 Mar 2025</span>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
            Angular v20: Signals Maduros y Resource API
          </h3>
          <p class="text-zinc-400 text-sm leading-relaxed line-clamp-3">
            La nueva versión trae Signals estables, Resource API para manejo de datos asíncronos
            y mejoras sustanciales en el compilador.
          </p>
        </div>
      }
      @if (currentIndex() === 1) {
        <div>
          <div class="flex items-center gap-3 mb-5">
            <span class="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-400/10 px-2.5 py-1 rounded-md">CSS</span>
            <span class="text-xs text-zinc-500">28 Feb 2025</span>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
            Tailwind v4: CSS-First Configuration
          </h3>
          <p class="text-zinc-400 text-sm leading-relaxed line-clamp-3">
            Tailwind v4 abandona el archivo de configuración JS y pasa a un sistema
            completamente basado en CSS con variables nativas.
          </p>
        </div>
      }
      @if (currentIndex() === 2) {
        <div>
          <div class="flex items-center gap-3 mb-5">
            <span class="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-md">Performance</span>
            <span class="text-xs text-zinc-500">10 Ene 2025</span>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
            Zoneless Angular: Adós a Zone.js
          </h3>
          <p class="text-zinc-400 text-sm leading-relaxed line-clamp-3">
            El modo Zoneless permite eliminar Zone.js del bundle, reduciendo el peso
            y mejorando el tiempo de arranque de las aplicaciones Angular.
          </p>
        </div>
      }
    </div>

    <!-- Navigation -->
    <div class="flex items-center justify-between mt-6 pt-5 border-t border-white/10">
      <button
        class="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
        (click)="prev()">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
             stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Anterior
      </button>
      <span class="text-zinc-500 text-sm font-mono">{{ currentIndex() + 1 }} / 3</span>
      <button
        class="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
        (click)="next()">
        Siguiente
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
             stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>
  </div>

  <!-- Bottom color bar -->
  <div class="h-1 flex">
    <div class="transition-all duration-300"
         [style.width]="((currentIndex() + 1) / 3 * 100) + '%'"
         [class.bg-violet-500]="currentIndex() === 0"
         [class.bg-blue-500]="currentIndex() === 1"
         [class.bg-emerald-500]="currentIndex() === 2"></div>
  </div>
</div>`;

  readonly carousel5Ts = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-carousel-news',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './carousel-news.component.html',
})
export class CarouselNewsComponent {
  protected readonly total = 3;
  protected readonly currentIndex = signal(0);

  prev() { this.currentIndex.update(i => (i - 1 + this.total) % this.total); }
  next() { this.currentIndex.update(i => (i + 1) % this.total); }
}`;
}
