Footer from @tedi-design-system/react. Use via `window.Tedi.Footer` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Page footer. Composed from `Footer.Side`, `Footer.Body`, `Footer.Section` and
`Footer.Bottom`. The footer surface is **dark** — see gotcha 3.

**Live Storybook:** https://storybook.tedi.ee/react/rc/?path=/docs/tedi-ready-layout-footer--docs

Stories (see `Footer.html`): `Default`, `DeviceSize`, `DeviceFrameSource`,
`DeviceFrameSourceAccordions`, `DeviceFrameSourceAccordionsOpen`, `LogoBreakpointSource`,
`LogoPosition`, `WithBottomSection`, `CustomContent`, `MaxWidthAndColumns`.

## Gotchas

**1. Slots are assigned by child element TYPE — any wrapper breaks the layout.**

Footer walks its direct children and compares `child.type` against `Footer.Side`,
`Footer.Body` and `Footer.Bottom`. A wrapper element is not one of those types, so every
child falls through into the generic centre row and renders **side by side** instead of
in its slots. No error is raised.

```jsx
// ✗ fragment/div wrapper — slot detection fails, everything lands in one row
<Footer>
  <div>
    <Footer.Side placement="start"><img src={logo} /></Footer.Side>
    <Footer.Body columns={3}>…</Footer.Body>
  </div>
</Footer>

// ✗ also broken — conditional wrapped in a fragment
<Footer>
  <>{showLogo && <Footer.Side placement="start">…</Footer.Side>}</>
  <Footer.Body columns={3}>…</Footer.Body>
</Footer>

// ✓ slot components must be DIRECT children
<Footer>
  {showLogo && <Footer.Side placement="start"><img src={logo} /></Footer.Side>}
  <Footer.Body columns={3}>…</Footer.Body>
  <Footer.Side placement="end"><img src={partnerLogo} /></Footer.Side>
  <Footer.Bottom>…</Footer.Bottom>
</Footer>
```

A bare `{cond && <Footer.Body/>}` is fine — it yields the element itself. Only wrapping
*elements* (`<div>`, `<>…</>`) break it.

**2. `Footer.Body` needs `columns={n}`** for the section grid. Without it the columns are
content-sized and spread unevenly. It is breakpoint-aware:
`columns={1} md={{ columns: 2 }} lg={{ columns: 4 }}`.

**3. The surface is dark — set colours explicitly.** Inherited colour does not carry:

```jsx
// ✗ dark-on-dark, effectively invisible
<Link href="/privacy">Privaatsus</Link>
<Text>Kõik õigused kaitstud</Text>

// ✓
<Link href="/privacy" color="inverted">Privaatsus</Link>
<Text color="white">Kõik õigused kaitstud</Text>
```

**4. Footer is not print-hidden.** `Header` and `SideNav` wrap themselves in
`Print visibility="hide"`; `Footer` does not. Wrap it yourself if it should not print.

## Full correct footer

```jsx
<Footer mobileBreakpoint="lg">
  <Footer.Side placement="start">
    <img src={logo} alt="TEHIK" height={48} />
  </Footer.Side>

  <Footer.Body columns={1} md={{ columns: 3 }}>
    <Footer.Section icon="info" heading="Uuri lähemalt" collapsible>
      <Link href="/about" color="inverted">Meist</Link>
      <Link href="/news" color="inverted">Uudised</Link>
    </Footer.Section>
    <Footer.Section icon="call" heading="Kontakt" collapsible>
      <Text color="white">info@tehik.ee</Text>
      <Text color="white">+372 794 3900</Text>
    </Footer.Section>
  </Footer.Body>

  <Footer.Side placement="end">
    <img src={euLogo} alt="" height={48} />
  </Footer.Side>

  <Footer.Bottom>
    <Text color="white">© 2026 TEHIK</Text>
  </Footer.Bottom>
</Footer>
```

`mobileBreakpoint` (default `sm`) sets where the footer collapses to the stacked layout;
`Footer.Section` takes `collapsible` and `defaultOpen`.

Variants (see `preview.html`): Default, Device Frame Source, Device Frame Source Accordions, Device Frame Source Accordions Open, Logo Breakpoint Source, With Bottom Section, Custom Content, Max Width And Columns.

## Props

```ts
import * as React from 'react';

/**
 * Footer from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/layout/footer/footer.stories.tsx).
 */
export interface FooterProps {
  /** `<Footer.Side>`, `<Footer.Body>` (with `<Footer.Section>` children), and `<Footer.Bottom>` slots. Recognised arrangement: 1. Zero or more `<Footer.Side placement="start">` elements (logos on the left). 2. Exactly one `<Footer.Body>`. 3. Zero or more `<Footer.Side placement="end">` elements (logos on the right). 4. Optional `<Footer.Bottom>` rendered below the main row as a strip with separator dots. Other nodes are rendered verbatim where the consumer placed them. */
  children: ReactNode;
  /** Viewport breakpoint at and below which the footer switches to its stacked mobile layout — sections collapse into accordions, sides stack, the bottom strip wraps. Propagated to every Footer subcomponent via context so they agree on the threshold. */
  mobileBreakpoint?: Breakpoint;
  /** Caps the inner content — the column row and the bottom strip's content — to a maximum width and centers it, while the dark backgrounds stay full-bleed. Pass any CSS length (e.g. `1280`, `'1280px'`, `'80rem'`). Omit to let the content fill the full width (with the 40px padding). */
  maxWidth?: number | string;
  /** Additional class name on the `<footer>` root. */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: () => (
    <Footer mobileBreakpoint="lg">
      <Footer.Body>
        <StandardSections />
      </Footer.Body>
      <Footer.Side placement="end">
        <LogoPlaceholder />
      </Footer.Side>
    </Footer>
  ),
};
```

### Device Frame Source

```tsx
export const DeviceFrameSource: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: deviceFrameSourceParams,
  render: () => <DeviceFrameFooter />,
};
```

### Device Frame Source Accordions

```tsx
export const DeviceFrameSourceAccordions: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: deviceFrameSourceParams,
  render: () => <DeviceFrameFooter collapsible />,
};
```

### Device Frame Source Accordions Open

```tsx
export const DeviceFrameSourceAccordionsOpen: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: deviceFrameSourceParams,
  render: () => <DeviceFrameFooter collapsible firstOpen />,
};
```

### Logo Breakpoint Source

```tsx
export const LogoBreakpointSource: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: deviceFrameSourceParams,
  render: () => (
    <Footer mobileBreakpoint="lg">
      <Footer.Side placement="end" lg={{ placement: 'start' }}>
        <LogoPlaceholder />
      </Footer.Side>
      <Footer.Body>
        <StandardSections />
      </Footer.Body>
    </Footer>
  ),
};

/**
 * The logo always drops to the **bottom of the footer from tablet down** and only sits on the
 * side on desktop. Two props make that work together:
 * - `mobileBreakpoint="lg"` collapses the footer to its stacked layout at `md` and below
 *   (tablet + mobile), so the side slot lands below the sections.
 * - `placement="end"` keeps the logo last (the bottom slot) while stacked; a `lg` breakpoint
 *   override flips it to its desktop side — `lg={{ placement: 'start' }}` for a left logo, or no
 *   override at all to keep it on the right.
 *
 * `position` sets the vertical alignment within the side slot on desktop. Both `placement` and
 * `position` accept breakpoint props. The first example is shown in a resizable frame so you can
 * watch the logo move; the rest reflow with the window.
 */
```

### With Bottom Section

```tsx
export const WithBottomSection: Story = {
  render: () => (
    <section aria-label="Footer bottom section examples">
      <VerticalSpacing size={2}>
        <Footer mobileBreakpoint="lg">
          <Footer.Body>
            <StandardSections />
          </Footer.Body>
          <Footer.Side placement="end">
            <LogoPlaceholder />
          </Footer.Side>
          <Footer.Bottom>
            <Link href="#" color="inverted">
              Facebook
            </Link>
            <Link href="#" color="inverted">
              Instagram
            </Link>
            <Link href="#" color="inverted">
              LinkedIn
            </Link>
          </Footer.Bottom>
        </Footer>
        <Footer mobileBreakpoint="lg">
          <Footer.Body>
            <StandardSections />
          </Footer.Body>
          <Footer.Side placement="end">
            <LogoPlaceholder />
          </Footer.Side>
          <Footer.Bottom separator>
            <Link href="#" color="inverted">
              Facebook
            </Link>
            <Link href="#" color="inverted">
              Instagram
            </Link>
            <Link href="#" color="inverted">
              LinkedIn
            </Link>
// …
```

Full story source: `src/tedi/components/layout/footer/footer.stories.tsx`.

## Related

`Text`, `StatusBadge`, `VerticalSpacing`
