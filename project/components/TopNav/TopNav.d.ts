import * as React from 'react';

/**
 * TopNav from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/layout/top-nav/top-nav.stories.tsx).
 */
export interface TopNavProps {
  /** `TopNav.Item` and `TopNav.Separator` children. Any other React node is ignored. Fragments are flattened, so `<>…</>` wrappers work transparently. */
  children: ReactNode;
  /** Accessible name for the wrapping `<nav>` landmark. */
  ariaLabel: string;
  /** Breakpoint below which the bar collapses into the shared Sidenav mobile drawer. Pass any TEDI breakpoint name (`xs`/`sm`/`md`/`lg`/`xl`/`xxl`). */
  mobileBreakpoint?: Breakpoint;
  /** Controlled open state for the mobile drawer. Pair with `onMenuToggle` to wire it to an external toggle button. */
  isMobileOpen?: boolean;
  /** Fires whenever the mobile drawer opens or closes. */
  onMenuToggle?: (open: boolean) => void;
  /** Dim the rest of the viewport when the mobile drawer is open. */
  showMobileOverlay?: boolean;
  /** Additional class name applied to the desktop `<nav>`. */
  className?: string;
  /** Element id forwarded to the desktop `<nav>`. */
  id?: string;
  /** Controls how the submenu (mega-menu) panel sizes and positions itself when the active item has submenu content. Both options use the same padding — this only affects the panel's width and horizontal position, not its density. - `'full'` (default) — the panel stretches to the full nav width and is centered, suitable for wide multi-column mega-menus. - `'content'` — the panel is only as wide as its content and sits left-aligned directly under the active item (it is *not* a smaller / tighter variant — just not stretched). Good for single- or few-column menus. */
  submenuFit?: 'full' | 'content';
  /** Constrains the inner content (item bar and full-width submenu inner) to a maximum width and centers it inside the blue `<nav>` background. Pass any valid CSS length (e.g. `1440`, `'1440px'`, `'90rem'`), or a TEDI breakpoint name (`'sm' | 'md' | 'lg' | 'xl' | 'xxl'`) — these resolve to the breakpoint's `min-width` (36rem / 48rem / 62rem / 75rem / 87.5rem respectively), useful for aligning the nav inner with a breakpoint-driven content container. The `<nav>` itself still spans 100% of its container. Pass `'none'` (or `0`) to disable the constraint and let the bar fill the full width of the nav. */
  maxWidth?: TopNavMaxWidth | 'none';
}

// Referenced types, resolved one level deep (see the story source for the rest).
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type TopNavMaxWidth = number | BreakpointWidthName | (string & {});
