SkipLinks from @tedi-design-system/react. Use via `window.Tedi.SkipLinks` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Multiple Links, Usage Example.

## Props

```ts
import * as React from 'react';

/**
 * SkipLinks from @tedi-design-system/react@21.0.0-rc.35 (stories: ./src/tedi/components/layout/skip-links/skip-links.stories.tsx).
 */
export interface SkipLinksProps {
  /** Links to landmarks on the page. Each `href` should point to the `id` of an element that exists on the page. Defaults to a single link to `#main-content` labelled with the `skip-links.main-content` label. */
  links?: SkipLink[];
  /** Additional class name */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type SkipLink = Omit<LinkProps<'a'>, 'as'>;
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: (args) => (
    <div style={{ padding: 'var(--layout-grid-gutters-16)' }}>
      <SkipLinks {...args} />
      <Text>Click the empty area at the bottom, press Tab, choose a skip link, then press Tab again.</Text>
      <main id="main-content">
        <Text>Main content</Text>
        <Link href="#">Link in main content</Link>
      </main>
      <footer id="footer">
        <Text>Footer</Text>
        <Link href="#">Link in footer</Link>
      </footer>
    </div>
  ),
};
```

### Multiple Links

```tsx
export const MultipleLinks: Story = {
  render: (args) => (
    <div style={{ padding: 'var(--layout-grid-gutters-16)' }}>
      <SkipLinks {...args} />
      <Text>Click the empty area at the bottom, press Tab, choose a skip link, then press Tab again.</Text>
      <main id="multiple-links-main">
        <Text>Main content</Text>
        <Link href="#">Link in main content</Link>
      </main>
      <footer id="multiple-links-footer">
        <Text>Footer</Text>
        <Link href="#">Link in footer</Link>
      </footer>
    </div>
  ),
  args: {
    links: [
      { href: '#multiple-links-main', children: 'Liigu edasi põhisisu juurde' },
      { href: '#multiple-links-footer', children: 'Liigu edasi jaluse juurde' },
    ],
  },
};
```

### Usage Example

```tsx
export const UsageExample: Story = {
  render: function UsageExampleRender() {
    const [isOpen, setIsOpen] = useState(false);
    const breakpoint = useBreakpoint();
    const isMobile = isBreakpointBelow(breakpoint, 'lg');

    const navItems = [
      { children: 'Minu töölaud', icon: 'dashboard', href: '#' },
      { children: 'Vastuvõtud ja saatekirjad', icon: 'calendar_today', href: '#' },
      { children: 'Retseptid ja meditsiiniseadmed', icon: 'medication', href: '#' },
      {
        children: 'Minu tervise ajalugu',
        icon: 'history',
        isDefaultOpen: true,
        subItems: [
          { children: 'Eelmised retseptid', href: '#' },
          { children: 'Haiguslugu', href: '#' },
        ],
      },
      { children: 'Hammaste tervis', icon: 'dentistry', href: '#' },
      { children: 'Vaktsineerimine', icon: 'vaccines', href: '#' },
      { children: 'Tervisetõendid ja -⁠deklaratsioonid', icon: 'assignment', href: '#' },
      { children: 'Töövõime', icon: 'business_center', href: '#' },
      { children: 'Raviarved', icon: 'credit_card', href: '#' },
      { children: 'Minu seaded', icon: 'settings', href: '#' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', ...((!isMobile || isOpen) && { height: '100vh' }) }}>
        <SkipLinks links={[{ href: '#usage-example-main', children: 'Liigu edasi põhisisu juurde' }]} />
        <Header toggle={<SideNav.Toggle menuOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />}>
          <Header.Logo
            logo={<img src="header-logo.svg" alt="Logo" />}
            logoDark={<img src="header-logo-white.svg" alt="Logo" />}
          />
          <Header.Actions>
            <ShowAt lg>
              <Header.Role
                label={
                  <Text modifiers={['small', 'bold']} color="secondary">
// …
```

Full story source: `src/tedi/components/layout/skip-links/skip-links.stories.tsx`.

## Related

`LabelProvider`, `Heading`, `Text`, `Card`, `Header`, `ShowAt`, `SideNav`, `VerticalSpacing`
