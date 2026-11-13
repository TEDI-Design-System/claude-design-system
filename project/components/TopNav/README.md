TopNav from @tedi-design-system/react. Use via `window.Tedi.TopNav` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `TopNav.Item`, `TopNav.Group`, `TopNav.SubItem`, `TopNav.Separator`.

Variants (see `preview.html`): Default, With Icons, With Separator, Custom Item Content, Menu Open, Constrained Inner Width, Content Width Mega Menu, Submenu Group Without Title, Item States, Sub Item States, Group Variants, Controlled Mobile, Sticky, Sticky On Scroll.

## Props

```ts
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
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,
  args: {
    ariaLabel: 'Primary navigation',
    children: (
      <>
        <TopNav.Item href="#">Avaleht</TopNav.Item>
        <TopNav.Item href="#" isActive>
          Perekond
        </TopNav.Item>
        <TopNav.Item href="#">Hüvitised ja toetused</TopNav.Item>
        <TopNav.Item href="#">Töö ja töösuhted</TopNav.Item>
        <TopNav.Item href="#">Liiklus ja sõidukid</TopNav.Item>
        <TopNav.Item href="#">Minu andmed</TopNav.Item>
      </>
    ),
  },
};
```

### With Icons

```tsx
export const WithIcons: Story = {
  render: Template,
  args: {
    ariaLabel: 'Primary navigation',
    children: (
      <>
        <TopNav.Item href="#" icon="home" isActive>
          Avaleht
        </TopNav.Item>
        <TopNav.Item href="#" icon="family_restroom">
          Perekond
        </TopNav.Item>
        <TopNav.Item href="#" icon="payments">
          Hüvitised
        </TopNav.Item>
        <TopNav.Item href="#" icon="work">
          Töö
        </TopNav.Item>
        <TopNav.Item href="#" icon="folder_shared">
          Minu andmed
        </TopNav.Item>
      </>
    ),
  },
};
```

### With Separator

```tsx
export const WithSeparator: Story = {
  render: Template,
  args: {
    ariaLabel: 'Primary navigation',
    children: (
      <>
        <TopNav.Item href="#" isActive>
          Töölaud
        </TopNav.Item>
        <TopNav.Item href="#">Minu taotlused</TopNav.Item>
        <TopNav.Item href="#">Minu dokumendid</TopNav.Item>
        <TopNav.Item href="#">Koolitused</TopNav.Item>
        <TopNav.Separator />
        <TopNav.Item href="#" icon="settings">
          Seaded
        </TopNav.Item>
      </>
    ),
  },
};
```

### Custom Item Content

```tsx
export const CustomItemContent: Story = {
  render: Template,
  args: {
    ariaLabel: 'Primary navigation',
    children: (
      <>
        <TopNav.Item href="#" isActive>
          Töölaud
        </TopNav.Item>
        <TopNav.Item href="#" icon="mail">
          Sõnumid <StatusBadge color="accent">3</StatusBadge>
        </TopNav.Item>
        <TopNav.Item href="#">
          Taotlused <StatusBadge color="brand">Uus</StatusBadge>
        </TopNav.Item>
        <TopNav.Item href="#">Minu andmed</TopNav.Item>
      </>
    ),
  },
};
```

### Menu Open

```tsx
export const MenuOpen: Story = {
  render: Template,
  args: {
    ariaLabel: 'Primary navigation',
    children: (
      <>
        <TopNav.Item href="#">Avaleht</TopNav.Item>
        <TopNav.Item
          isActive
          submenu={
            <>
              <TopNav.Group title="Abielu">
                <TopNav.SubItem href="#">Abiellumine</TopNav.SubItem>
                <TopNav.SubItem href="#">Abielu lahutamine</TopNav.SubItem>
                <TopNav.SubItem href="#">Kooselu registreerimine</TopNav.SubItem>
              </TopNav.Group>
              <TopNav.Group title="Dokumendid">
                <TopNav.SubItem href="#">Perekonnasündmuse tõend ja abieluvõimetõend</TopNav.SubItem>
                <TopNav.SubItem href="#">Rahvastikuregistri väljavõte</TopNav.SubItem>
                <TopNav.SubItem href="#">Teatis ja perekonnaseisundi kinnitatud koopia</TopNav.SubItem>
              </TopNav.Group>
              <TopNav.Group title="Lapse saamine">
                <TopNav.SubItem href="#">Lapsendamine</TopNav.SubItem>
                <TopNav.SubItem href="#">Raseduse planeerimine</TopNav.SubItem>
                <TopNav.SubItem href="#">Viljatus ja kunstlik viljastamine</TopNav.SubItem>
              </TopNav.Group>
              <TopNav.Group title="Sünnitus">
                <TopNav.SubItem href="#">Ennetähtaegse lapse sünd ja toetused</TopNav.SubItem>
                <TopNav.SubItem href="#">Erivajadusega lapse sünd</TopNav.SubItem>
                <TopNav.SubItem href="#">Kodusünnitus</TopNav.SubItem>
                <TopNav.SubItem href="#">Lapsest loobumine</TopNav.SubItem>
              </TopNav.Group>
              <TopNav.Group title="Abi">
                <TopNav.SubItem href="#">Kohaliku omavalitsuse sotsiaalabi</TopNav.SubItem>
                <TopNav.SubItem href="#">Kohaliku omavalitsuse sünnitoetus</TopNav.SubItem>
                <TopNav.SubItem href="#">Lasteaiakoht ja selle taotlemine</TopNav.SubItem>
              </TopNav.Group>
            </>
          }
        >
// …
```

### Constrained Inner Width

```tsx
export const ConstrainedInnerWidth: Story = {
  render: Template,
  args: {
    ariaLabel: 'Primary navigation',
    maxWidth: 'lg',
    children: (
      <>
        <TopNav.Item href="#">Avaleht</TopNav.Item>
        <TopNav.Item
          isActive
          submenu={
            <>
              <TopNav.Group title="Abielu">
                <TopNav.SubItem href="#">Abiellumine</TopNav.SubItem>
                <TopNav.SubItem href="#">Abielu lahutamine</TopNav.SubItem>
              </TopNav.Group>
              <TopNav.Group title="Dokumendid">
                <TopNav.SubItem href="#">Lastega perede nõustamine</TopNav.SubItem>
                <TopNav.SubItem href="#">Lapsendamine</TopNav.SubItem>
              </TopNav.Group>
            </>
          }
        >
          Perekond
        </TopNav.Item>
        <TopNav.Item href="#">Hüvitised ja toetused</TopNav.Item>
        <TopNav.Item href="#">Töö ja töösuhted</TopNav.Item>
        <TopNav.Item href="#">Minu andmed</TopNav.Item>
      </>
    ),
  },
};

/**
 * `submenuFit="content"` makes the panel only as wide as its content and aligns it directly under
 * the active item, instead of stretching to the full nav width. It is **not** a smaller / tighter
 * variant — the padding is identical to the default; only the width and horizontal position differ.
 */
```

Full story source: `src/tedi/components/layout/top-nav/top-nav.stories.tsx`.

## Related

`Text`, `Affix`, `StatusBadge`, `Col`, `Row`, `Header`, `HideAt`, `ShowAt`, `SideNav`, `VerticalSpacing`
