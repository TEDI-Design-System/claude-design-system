Accordion from @tedi-design-system/react. Use via `window.Tedi.Accordion` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `Accordion.Item`.

Variants (see `preview.html`): Default, Variants, Action Types, With Icon Card, Customized, Accordion Behavior, Disabled, Hash Deep Linking, Semantic Headings.

## Props

```ts
import * as React from 'react';

/**
 * Accordion from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/content/accordion/accordion.stories.tsx).
 */
export interface AccordionProps {
  /** Accordion content. Should be one or more `AccordionItem` components. */
  children?: React.ReactNode;
  /** Additional class. */
  className?: string;
  /** Whether the accordion allows multiple items to be expanded at the same time. If false, opening one item will collapse the others automatically. */
  allowMultiple?: boolean;
  /** Group-level default for items' initial expanded state. Sets the initial `defaultExpanded` for every child `Accordion.Item` that doesn't specify its own. Per-item `defaultExpanded` (including an explicit `false`) takes precedence. Typically combined with `allowMultiple` to start with all items open. */
  defaultExpanded?: boolean;
  /** Vertical gap between sibling `Accordion.Item` components in rem Accepts any number, not limited to a fixed scale. Forwarded as the `--tedi-accordion-item-gap` CSS variable, so consumers can also override it from any ancestor class — or set a px value there directly when an exact-pixel override is needed. When omitted, falls back to the design-token default (`var(--layout-grid-gutters-08)` = 0.5rem). */
  itemGap?: number;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<AccordionBreakpointProps>;
  md?: Partial<AccordionBreakpointProps>;
  lg?: Partial<AccordionBreakpointProps>;
  xl?: Partial<AccordionBreakpointProps>;
  xxl?: Partial<AccordionBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type AccordionBreakpointProps = {
    /**
     * Additional class.
     */
    className?: string;
    /**
     * Whether the accordion allows multiple items to be expanded at the same time.
     * If false, opening one item will collapse the others automatically.
     * @default false
     */
    allowMultiple?: boolean;
    /**
     * Group-level default for items' initial expanded state. Sets the initial
     * `defaultExpanded` for every child `Accordion.Item` that doesn't specify
     * its own. Per-item `defaultExpanded` (including an explicit `false`)
     * takes precedence.
     *
     * Typically combined with `allowMultiple` to start with all items open.
     * @default false
     */
    defaultExpanded?: boolean;
    /**
     * Vertical gap between sibling `Accordion.Item` components in rem
     * Accepts any number, not limited to a fixed scale.
     *
     * Forwarded as the `--tedi-accordion-item-gap` CSS variable, so consumers
     * can also override it from any ancestor class — or set a px value there
     * directly when an exact-pixel override is needed.
     *
     * When omitted, falls back to the design-token default
     * (`var(--layout-grid-gutters-08)` = 0.5rem).
     */
    itemGap?: number;
};
```

## Examples

### Default

```tsx
export const Default: StoryObj = {
  render: DefaultTemplate,
  argTypes: {
    ...subcomponentArgTypes(Accordion.Item, {
      category: 'Accordion.Item',
      prefix: 'item',
      // ReactNode slots + deep-link/internal props don't make good knobs; onToggle is wired as an action below.
      exclude: ['children', 'id', 'openOnHashMatch', 'iconCard', 'onToggle'],
    }),
    item__onToggle: {
      action: 'onToggle',
      name: 'onToggle',
      description: 'Called whenever the user toggles the item. Receives the next expanded state.',
      table: { category: 'Accordion.Item' },
    },
    ...subcomponentArgTypes(Accordion.Item.Header, {
      category: 'Accordion.Item.Header',
      prefix: 'header',
      exclude: [
        'children',
        'title',
        'beforeTitle',
        'afterTitle',
        'startAction',
        'endAction',
        'startDescription',
        'endDescription',
      ],
    }),
    ...subcomponentArgTypes(Accordion.Item.Content, {
      category: 'Accordion.Item.Content',
      prefix: 'content',
      exclude: ['children'],
    }),
  },
  args: {
    // Accordion (primary)
    allowMultiple: false,
    defaultExpanded: false,
    // Accordion.Item
// …
```

### Variants

```tsx
export const Variants: StoryObj = {
  render: () => {
    const [selectedA, setSelectedA] = React.useState(false);
    const [selectedB, setSelectedB] = React.useState(true);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--layout-grid-gutters-16)' }}>
        <Accordion>
          <Accordion.Item>
            <Accordion.Item.Header title="Pealkiri" />
            <Accordion.Item.Content>{contentExample}</Accordion.Item.Content>
          </Accordion.Item>
        </Accordion>

        <Accordion>
          <Accordion.Item>
            <Accordion.Item.Header
              title="Pealkiri"
              afterTitle={<StatusBadge color="success">Kinnitatud</StatusBadge>}
            />
            <Accordion.Item.Content>{contentExample}</Accordion.Item.Content>
          </Accordion.Item>
        </Accordion>

        <Accordion>
          <Accordion.Item>
            <Accordion.Item.Header
              title="Pealkiri"
              beforeTitle={<Icon name="description" color="secondary" size={18} />}
            />
            <Accordion.Item.Content>{contentExample}</Accordion.Item.Content>
          </Accordion.Item>
        </Accordion>

        <Accordion>
          <Accordion.Item>
            <Accordion.Item.Header
              title="Pealkiri"
              beforeTitle={<Icon name="account_circle" color="brand" background="brand-secondary" size={16} />}
            />
// …
```

### Action Types

```tsx
export const ActionTypes: StoryObj = {
  render: () => {
    const [selectedA, setSelectedA] = React.useState(false);
    const [selectedB, setSelectedB] = React.useState(false);
    const [selectedC, setSelectedC] = React.useState(true);
    const [selectedD, setSelectedD] = React.useState(true);

    const rowStyle: React.CSSProperties = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'var(--layout-grid-gutters-08)',
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--layout-grid-gutters-16)' }}>
        <div style={rowStyle}>
          <Accordion>
            <Accordion.Item>
              <Accordion.Item.Header title="Pealkiri" />
              <Accordion.Item.Content>{contentExample}</Accordion.Item.Content>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item defaultExpanded>
              <Accordion.Item.Header title="Pealkiri" />
              <Accordion.Item.Content>{contentExample}</Accordion.Item.Content>
            </Accordion.Item>
          </Accordion>
        </div>

        <div style={rowStyle}>
          <Accordion>
            <Accordion.Item>
              <Accordion.Item.Header
                headerClickable={false}
                expandActionPosition="start"
                openText="Pealkiri"
                closeText="Pealkiri"
              />
              <Accordion.Item.Content>{contentExample}</Accordion.Item.Content>
// …
```

### With Icon Card

```tsx
export const WithIconCard: StoryObj = {
  render: () => {
    const [selectedA, setSelectedA] = React.useState(false);
    const [selectedB, setSelectedB] = React.useState(false);
    const [selectedC, setSelectedC] = React.useState(true);
    const [selectedD, setSelectedD] = React.useState(true);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--layout-grid-gutters-16)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--layout-grid-gutters-08)' }}>
          <Accordion>
            <Accordion.Item showIconCard iconCard={iconCardTemplate}>
              <Accordion.Item.Header title="Pealkiri" />
              <Accordion.Item.Content>{contentExample}</Accordion.Item.Content>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item defaultExpanded showIconCard iconCard={iconCardTemplate}>
              <Accordion.Item.Header title="Pealkiri" />
              <Accordion.Item.Content>{contentExample}</Accordion.Item.Content>
            </Accordion.Item>
          </Accordion>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--layout-grid-gutters-08)' }}>
          <Accordion>
            <Accordion.Item showIconCard iconCard={iconCardTemplate}>
              <Accordion.Item.Header title="Pealkiri" showExpandLabel={false} />
              <Accordion.Item.Content>{contentExample}</Accordion.Item.Content>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item defaultExpanded showIconCard iconCard={iconCardTemplate}>
              <Accordion.Item.Header title="Pealkiri" showExpandLabel={false} />
              <Accordion.Item.Content>{contentExample}</Accordion.Item.Content>
            </Accordion.Item>
          </Accordion>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--layout-grid-gutters-08)' }}>
// …
```

### Customized

```tsx
export const Customized: StoryObj = {
  render: () => {
    const [selected, setSelected] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    const { getCurrentBreakpointProps } = useBreakpointProps();
    const responsive = getCurrentBreakpointProps<{
      avatar: React.ReactNode;
      email: React.ReactNode;
      badge: React.ReactNode;
      importantPhoto: React.ReactNode;
      importantDescription: React.ReactNode;
      showMorePhoto: React.ReactNode;
      showMoreDescription: React.ReactNode;
    }>({
      avatar: null,
      email: null,
      badge: null,
      importantPhoto: null,
      importantDescription: null,
      showMorePhoto: null,
      showMoreDescription: null,
      md: {
        avatar: <img src="custom_accordion_1.png" alt="Mari Maasikas" />,
        email: (
          <Text element="span" color="tertiary" modifiers="normal">
            mari.maasikas@gmail.com
          </Text>
        ),
        badge: <StatusBadge color="success">Kontrollitud</StatusBadge>,
        importantPhoto: <img src="custom_accordion_2.png" alt="Accordion example" />,
        importantDescription: (
          <Text element="span" color="tertiary" modifiers="normal" className="custom-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Text>
        ),
        showMorePhoto: <img src="custom_accordion_2.png" alt="Accordion example" />,
        showMoreDescription: (
          <Text element="span" color="primary" modifiers="normal" className="custom-description">
// …
```

### Accordion Behavior

```tsx
export const AccordionBehavior: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--layout-grid-gutters-16)' }}>
      <Heading element="h4" modifiers="h4">
        Single-expand accordion
      </Heading>
      <div style={{ marginBottom: 'var(--layout-grid-gutters-16)' }}>
        <Accordion>
          <Accordion.Item>
            <Accordion.Item.Header title="Pealkiri 1" />
            <Accordion.Item.Content>{contentExample}</Accordion.Item.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Item.Header title="Pealkiri 2" />
            <Accordion.Item.Content>{contentExample}</Accordion.Item.Content>
          </Accordion.Item>
        </Accordion>
      </div>

      <Heading element="h4" modifiers="h4">
        Multi-expand accordion
      </Heading>
      <Accordion allowMultiple>
        <Accordion.Item>
          <Accordion.Item.Header title="Pealkiri 1" />
          <Accordion.Item.Content>{contentExample}</Accordion.Item.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Item.Header title="Pealkiri 2" />
          <Accordion.Item.Content>{contentExample}</Accordion.Item.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};
```

Full story source: `src/tedi/components/content/accordion/accordion.stories.tsx`.

## Related

`Icon`, `Heading`, `Text`, `Button`, `Checkbox`, `Link`, `StatusBadge`
