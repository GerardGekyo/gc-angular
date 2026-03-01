export interface ComponentInfo {
  name: string;
  displayName: string;
  selector: string;
  description: string;
  category: 'General' | 'Forms' | 'Feedback' | 'Layout';
  badge?: 'new' | 'beta';
}

export const COMPONENT_REGISTRY: ComponentInfo[] = [
  // General
  {
    name: 'button',
    displayName: 'Button',
    selector: 'gc-button',
    description: 'Botón interactivo con múltiples variantes, tamaños y colores personalizables.',
    category: 'General',
  },
  {
    name: 'badge',
    displayName: 'Badge',
    selector: 'gc-badge',
    description: 'Etiqueta compacta para estados, categorías o contadores.',
    category: 'General',
  },
  {
    name: 'avatar',
    displayName: 'Avatar',
    selector: 'gc-avatar',
    description: 'Representación visual de un usuario con imagen o iniciales.',
    category: 'General',
  },
  {
    name: 'tooltip',
    displayName: 'Tooltip',
    selector: 'gc-tooltip',
    description: 'Información contextual que aparece al pasar el cursor.',
    category: 'General',
  },
  {
    name: 'spinner',
    displayName: 'Spinner',
    selector: 'gc-spinner',
    description: 'Indicador de carga con animaciones y contenido personalizable.',
    category: 'General',
  },
  {
    name: 'separator',
    displayName: 'Separator',
    selector: 'gc-separator',
    description: 'Línea divisora horizontal o vertical con etiqueta opcional.',
    category: 'General',
    badge: 'new',
  },
  {
    name: 'shimmer',
    displayName: 'Shimmer',
    selector: 'gc-shimmer',
    description: 'Placeholder animado para estados de carga tipo skeleton.',
    category: 'General',
  },

  // Forms
  {
    name: 'input',
    displayName: 'Input',
    selector: 'gc-input',
    description: 'Campo de texto con label, descripción, prefijo/sufijo y validación.',
    category: 'Forms',
  },
  {
    name: 'textarea',
    displayName: 'Textarea',
    selector: 'gc-textarea',
    description: 'Campo de texto multilínea con contador de caracteres.',
    category: 'Forms',
  },
  {
    name: 'select',
    displayName: 'Select',
    selector: 'gc-select',
    description: 'Selector desplegable con opciones simples o con descripción.',
    category: 'Forms',
  },
  {
    name: 'combobox',
    displayName: 'Combobox',
    selector: 'gc-combobox',
    description: 'Selector con búsqueda, modo single o multiple, y tags.',
    category: 'Forms',
  },
  {
    name: 'checkbox',
    displayName: 'Checkbox',
    selector: 'gc-checkbox',
    description: 'Casilla de verificación con label, descripción y contenido rico.',
    category: 'Forms',
  },
  {
    name: 'switch-button',
    displayName: 'Switch',
    selector: 'gc-switch-button',
    description: 'Interruptor toggle para opciones on/off.',
    category: 'Forms',
  },
  {
    name: 'radio-button',
    displayName: 'Radio Button',
    selector: 'gc-radio-button',
    description: 'Botón de opción para selección exclusiva en grupo.',
    category: 'Forms',
  },

  // Feedback
  {
    name: 'alert',
    displayName: 'Alert',
    selector: 'gc-alert',
    description: 'Mensaje destacado para información, éxito, advertencia o error.',
    category: 'Feedback',
  },
  {
    name: 'toast',
    displayName: 'Toast',
    selector: 'gc-toast',
    description: 'Notificación temporal via servicio o inline.',
    category: 'Feedback',
    badge: 'new',
  },
  {
    name: 'dialog',
    displayName: 'Dialog',
    selector: 'gc-dialog',
    description: 'Ventana modal para confirmaciones y contenido focalizado.',
    category: 'Feedback',
  },

  // Layout
  {
    name: 'card',
    displayName: 'Card',
    selector: 'gc-card',
    description: 'Contenedor con variantes, media full-bleed, header y footer.',
    category: 'Layout',
  },
  {
    name: 'tabs',
    displayName: 'Tabs',
    selector: 'gc-tabs',
    description: 'Navegación por pestañas con soporte de teclado completo.',
    category: 'Layout',
  },
];

export const CATEGORIES = ['General', 'Forms', 'Feedback', 'Layout'] as const;

export function getComponentsByCategory(category: string): ComponentInfo[] {
  return COMPONENT_REGISTRY.filter((c) => c.category === category);
}

// ─── Examples ────────────────────────────────────────────────────────────────

export interface ExampleInfo {
  name: string;
  displayName: string;
  description: string;
  badge?: 'new' | 'beta';
}

export const EXAMPLE_REGISTRY: ExampleInfo[] = [
  {
    name: 'login',
    displayName: 'Login Form',
    description:
      'Formulario de inicio de sesión con email, contraseña, social login y modal de confirmación.',
    badge: 'new',
  },
  {
    name: 'login-2',
    displayName: 'Login Split',
    description:
      'Diseño dividido con panel lateral oscuro de marca y formulario en el panel derecho.',
    badge: 'new',
  },
  {
    name: 'login-3',
    displayName: 'Login Minimal',
    description:
      'Diseño flotante sobre fondo gris. Botones sociales primero, seguidos de campos email/contraseña.',
    badge: 'new',
  },
  {
    name: 'register',
    displayName: 'Register Form',
    description:
      'Formulario de registro multi-paso con perfil, tipo de cuenta, newsletter y modal de confirmación.',
    badge: 'new',
  },
  {
    name: 'register-2',
    displayName: 'Register Split',
    description:
      'Panel izquierdo con gradiente violeta de marca y formulario de registro de un solo paso.',
    badge: 'new',
  },
  {
    name: 'register-3',
    displayName: 'Register',
    description: 'Tarjeta centrada con avatar dinámico e indicador de contraseña en tiempo real.',
    badge: 'new',
  },
];

// ─── Blocks ───────────────────────────────────────────────────────────────────
// Bloques son composiciones de componentes base listos para copiar y pegar.
// Añade entradas aquí cuando crees un nuevo bloque en pages/blocks/.

export type BlockCategory = 'Navigation' | 'Marketing' | 'Layout' | 'Forms';

export interface BlockInfo {
  name: string;
  displayName: string;
  description: string;
  category: BlockCategory;
  badge?: 'new' | 'beta';
}

export const BLOCK_CATEGORIES: BlockCategory[] = ['Navigation', 'Marketing', 'Layout', 'Forms'];

export const BLOCK_REGISTRY: BlockInfo[] = [
  {
    name: 'navbar',
    displayName: 'Navbar',
    description:
      'Cinco variantes de navbar responsive: minimal, oscuro, logo centrado, con búsqueda y con notificaciones.',
    category: 'Navigation',
    badge: 'new',
  },
  {
    name: 'footer',
    displayName: 'Footer',
    description:
      'Cinco variantes de footer: minimal, multi-columna, newsletter, oscuro y social centrado.',
    category: 'Layout',
    badge: 'new',
  },
  {
    name: 'not-found',
    displayName: '404 Not Found',
    description:
      'Cinco variantes de página 404: minimal, oscuro elegante, ilustrado con satélite, con buscador y degradado.',
    category: 'Marketing',
    badge: 'new',
  },
  {
    name: 'hero',
    displayName: 'Hero',
    description:
      'Cinco variantes de hero section: centrado con stats, dividido con mockup, oscuro con gradiente, con suscripción y minimalista.',
    category: 'Marketing',
    badge: 'new',
  },
  {
    name: 'carousel',
    displayName: 'Carousel',
    description:
      'Cinco variantes de carousel: básico con slides, tarjetas de características, testimonios, con miniaturas y noticias.',
    category: 'Marketing',
    badge: 'new',
  },
];

export function getBlocksByCategory(category: string): BlockInfo[] {
  return BLOCK_REGISTRY.filter((b) => b.category === category);
}
