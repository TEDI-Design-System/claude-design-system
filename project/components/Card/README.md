Card from @tedi-design-system/react. Use via `window.Tedi.Card` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `Card.Content`, `Card.Header`, `Card.Notification`.

Variants (see `preview.html`): Default, Header Types, Default Card, Card Info, Alternative Cards, Spacing, Backgrounds, Multiple Content, Split Card Body, Borderless, Border Radius, Breakpoint Props, Equal Height, With Notification, Timeline Card, Two Toned Card.

## Props

```ts
import * as React from 'react';

/**
 * Card from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/card/card.stories.tsx).
 */
export interface CardProps {
  children?: React.ReactNode;
  /** Id applied to the root element (forwarded to the underlying `div`). */
  id?: string;
  /** Additional class. */
  className?: string;
  /** Controls card border radius. Accepts `false` to remove all radius or an object to control sides or individual corners. Side values affect two corners while corner values take precedence. Examples: `false` → no radius `{ top:false }` → removes top corners `{ left:false }` → removes left corners `{ topLeft:false }` → removes one corner `{ bottom:false, bottomRight:true }` → corner override */
  borderRadius?: BorderRadius;
  /** Removes the card's border entirely. */
  borderless?: boolean;
  /** Adds a colored accent border to the top or left of the card (e.g. `top-success-primary`, `left-danger-primary`). */
  border?: CardBorderType;
  /** Card content padding Values can be:<br /> - predefined number value in rems<br /> - object of separated horizontal and vertical number values in rems - object of separated top, right, bottom, left number values in rems */
  padding?: CardContentPadding;
  /** Background color. */
  background?: CardBackground;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<CardBreakpointProps>;
  md?: Partial<CardBreakpointProps>;
  lg?: Partial<CardBreakpointProps>;
  xl?: Partial<CardBreakpointProps>;
  xxl?: Partial<CardBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type BorderRadius = false | {
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
    topLeft?: boolean;
    topRight?: boolean;
    bottomRight?: boolean;
    bottomLeft?: boolean;
};
type CardBorderType = `${CardBorderPlacement}-${CardBackground}` | CardBackground;
type CardContentPadding = CardContentPaddingNumber | {
    vertical: CardContentPaddingNumber;
    horizontal: CardContentPaddingNumber;
} | {
    top: CardContentPaddingNumber;
    right: CardContentPaddingNumber;
    bottom: CardContentPaddingNumber;
    left: CardContentPaddingNumber;
};
type CardBackground = 'primary' | 'secondary' | 'tertiary' | 'accent' | 'brand-primary' | 'brand-secondary' | 'brand-tertiary' | 'brand-quaternary' | 'danger-primary' | 'danger-secondary' | 'success-primary' | 'success-secondary' | 'info-primary' | 'info-secondary' | 'warning-primary' | 'warning-secondary' | 'neutral-primary' | 'neutral-secondary';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type CardBreakpointProps = {
    /**
     * Additional class.
     */
    className?: string;
    /**
     * Controls card border radius.
     *
     * Accepts `false` to remove all radius or an object to control sides or individual corners.
     *
     * Side values affect two corners while corner values take precedence.
     *
     * Examples:
     * `false` → no radius
     * `{ top:false }` → removes top corners
     * `{ left:false }` → removes left corners
     * `{ topLeft:false }` → removes one corner
     * `{ bottom:false, bottomRight:true }` → corner override
     */
    borderRadius?: BorderRadius;
    /**
     * Removes the card's border entirely.
     * @default false
     */
    borderless?: boolean;
    /**
     * Adds a colored accent border to the top or left of the card (e.g. `top-success-primary`, `left-danger-primary`).
     */
    border?: CardBorderType;
} & Pick<CardContentProps, 'padding' | 'background'>;
```

## Examples

### Default

```tsx
export const Default: StoryObj = {
  argTypes: {
    ...subcomponentArgTypes(Card.Header, { category: 'Card.Header', prefix: 'header', exclude: ['children'] }),
    ...subcomponentArgTypes(Card.Content, { category: 'Card.Content', prefix: 'content', exclude: ['children'] }),
  },
  render: (args: Record<string, unknown>) => (
    <Card {...getPrimaryComponentProps<CardProps>(args)}>
      <Card.Header {...getSubcomponentProps(args, 'header')}>
        <Heading element="h3">Kaardi pealkiri</Heading>
      </Card.Header>
      <Card.Content {...getSubcomponentProps(args, 'content')}>Kirjeldus</Card.Content>
    </Card>
  ),
};
```

### Header Types

```tsx
export const HeaderTypes: Story = {
  render: HeaderTypesTemplate,
};
```

### Default Card

```tsx
export const DefaultCard: Story = {
  render: DefaultCardTemplates,
};
```

### Card Info

```tsx
export const CardInfo: Story = {
  render: CardInfoTemplate,
};
```

### Alternative Cards

```tsx
export const AlternativeCards: Story = {
  render: AlternativeCardsTemplate,
};
```

### Spacing

```tsx
export const Spacing: Story = {
  render: SpacingTemplate,
};
```

Full story source: `src/tedi/components/content/card/card.stories.tsx`.

## Related

`Icon`, `Heading`, `Col`, `Row`, `Separator`, `StretchContent`
