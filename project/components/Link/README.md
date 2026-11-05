Link from @tedi-design-system/react. Use via `window.Tedi.Link` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Navigational link. Renders an `<a>` by default; polymorphic via `as` for router links
(`<Link as={NextLink} href="/x">`). `linkAs` is not a `Link` prop — it belongs to the
containers that render links for you (`SideNav`, `MobileNav`), which pass it down as
their inner links' `as`.

**Live Storybook:** https://storybook.tedi.ee/react/rc/?path=/docs/tedi-ready-components-navigation-link--docs

Stories (see `Link.html`): `Default`, `Sizes`, `Colors`, `DefaultUnderlined`,
`DefaultNoUnderline`, `InvertedUnderline`, `InvertedNoUnderline`, `AsPrimaryButton`,
`CustomComponent`, `NoStyleLink`, `FullWidth`, `LongTextIconInline`, `LinkIconFlexed`.

## Two independent axes — do not conflate them

`Link` shares `Button`'s visual contract, so the same two props apply:

| Prop | Real values | Meaning |
|---|---|---|
| `visualType` | `link` (default) \| `primary` \| `secondary` \| `neutral` | shape/weight — `link` is plain text, the others render button-shaped |
| `color` | `default` \| `danger` \| `success` \| `inverted` \| `text` | palette |

```jsx
<Link href="/x">Vaata lähemalt</Link>                          // plain text link
<Link href="/x" visualType="primary">Alusta</Link>             // looks like a button
<Link href="/x" color="danger">Kustuta konto</Link>
```

## Gotchas

**1. `color="inverted"` is the dark-surface variant.** On the footer — or any dark
background — the default colour is dark-on-dark and effectively invisible:

```jsx
// ✗ invisible inside <Footer>
<Link href="/privacy">Privaatsus</Link>

// ✓
<Link href="/privacy" color="inverted">Privaatsus</Link>
```

Plain `Text` on the same surface needs `color="white"` (`Text` has its own colour scale
and no `inverted` value).

**2. App-level element resets beat Link's own styles.** Link relies on inherited colour
in places and its class names are hashed, so a bare selector in your stylesheet wins:

```css
/* ✗ overrides Link and SideNav item states app-wide */
a:hover { color: #000; }
```

Scope such rules to your own container, or set colour through the `color` prop.

**3. Icons are props, not children:** `iconLeft` / `iconRight` take a Material Symbols
ligature name or an `IconWithoutBackgroundProps` object.

```jsx
<Link href="/report" iconRight="arrow_forward">Ava raport</Link>
```

**4. An icon-only `Link` still needs `children` — that is its accessible name.** `children` is
required, and `icon` clips the label visually while leaving it in the accessibility tree. Passing
`{null}` to satisfy the prop leaves the link unnamed.

```jsx
<Link href="/edit" icon="edit">Muuda</Link>   // ✓
<Link href="/edit" icon="edit">{null}</Link>  // ✗ no accessible name
```

Variants (see `preview.html`): Default, Sizes, Colors, Default Underlined, Default No Underline, Inverted Underline, Inverted No Underline, As Primary Button, Custom Component, No Style Link, Full Width, Long Text Icon Inline, Link Icon Flexed.

## Props

```ts
import * as React from 'react';

/**
 * Link from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/navigation/link/link.stories.tsx).
 */
export interface LinkProps<C extends React.ElementType = 'a'> {
  /** Button children */
  children: React.ReactNode;
  /** Additional custom class name. */
  className?: string;
  /** Button visual type */
  visualType?: ButtonType;
  /** If button should take all the space it has */
  fullWidth?: boolean;
  /** Color scheme of the button. The 'text' value is only supported when visualType is 'link'. */
  color?: ButtonColor;
  /** Button size */
  size?: 'default' | 'small' | 'large';
  /** Name of the icon when button only has an icon in it. */
  icon?: string | IconWithoutBackgroundProps;
  /** Name of the icon we want to show on the left. */
  iconLeft?: string | IconWithoutBackgroundProps;
  /** Name of the icon we want to show on the right. */
  iconRight?: string | IconWithoutBackgroundProps;
  /** Underline the button text Whether the link should be underlined by default */
  underline?: boolean;
  /** If button is active and should keep its hover state. */
  isHovered?: boolean;
  /** If button is active and should keep it's active state. */
  isActive?: boolean;
  /** If button is in loading state and should show spinner. When isLoading is true, button does not trigger onClick event. */
  isLoading?: boolean;
  /** Skip applying button/link styles Useful when you just want to use Button or Link logic without the styles In this case icon, iconLeft and iconRight are ignored */
  noStyle?: boolean;
  /** Internal use only */
  renderWrapperElement?: unknown;
  /** Automatically show tooltip for icon-only buttons. */
  showTooltip?: boolean;
  /** If true, the icon will be placed in a separate column */
  iconStandalone?: boolean;
  /** Render as custom component */
  as?: C;
  ref?: PolymorphicRef<C>;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<{ children: React.ReactNode; className?: string; visualType?: ButtonType; fullWidth?: boolean; color?: ButtonColor; size?: "default" | "small" | "large"; icon?: string | IconWithoutBackgroundProps; iconLeft?: string | IconWithoutBackgroundProps; iconRight?: string | IconWithoutBackgroundProps; underline?: boolean; isHovered?: boolean; isActive?: boolean; isLoading?: boolean; noStyle?: boolean; renderWrapperElement?: unknown; showTooltip?: boolean; } & InternalLinkProps & { as?: AllowedHTMLTags<C, AllowedTags>; } & Omit<React.PropsWithoutRef<React.ComponentProps<AllowedHTMLTags<C, AllowedTags>>>, "children" | "className" | "color" | "as" | "visualType" | "fullWidth" | "size" | "icon" | "iconLeft" | "iconRight" | "underline" | "isHovered" | "isActive" | "isLoading" | "noStyle" | "renderWrapperElement" | "showTooltip" | "iconStandalone"> & { ref?: PolymorphicRef<AllowedHTMLTags<C, AllowedTags>>; } & { underline?: boolean; }>;
  md?: Partial<{ children: React.ReactNode; className?: string; visualType?: ButtonType; fullWidth?: boolean; color?: ButtonColor; size?: "default" | "small" | "large"; icon?: string | IconWithoutBackgroundProps; iconLeft?: string | IconWithoutBackgroundProps; iconRight?: string | IconWithoutBackgroundProps; underline?: boolean; isHovered?: boolean; isActive?: boolean; isLoading?: boolean; noStyle?: boolean; renderWrapperElement?: unknown; showTooltip?: boolean; } & InternalLinkProps & { as?: AllowedHTMLTags<C, AllowedTags>; } & Omit<React.PropsWithoutRef<React.ComponentProps<AllowedHTMLTags<C, AllowedTags>>>, "children" | "className" | "color" | "as" | "visualType" | "fullWidth" | "size" | "icon" | "iconLeft" | "iconRight" | "underline" | "isHovered" | "isActive" | "isLoading" | "noStyle" | "renderWrapperElement" | "showTooltip" | "iconStandalone"> & { ref?: PolymorphicRef<AllowedHTMLTags<C, AllowedTags>>; } & { underline?: boolean; }>;
  lg?: Partial<{ children: React.ReactNode; className?: string; visualType?: ButtonType; fullWidth?: boolean; color?: ButtonColor; size?: "default" | "small" | "large"; icon?: string | IconWithoutBackgroundProps; iconLeft?: string | IconWithoutBackgroundProps; iconRight?: string | IconWithoutBackgroundProps; underline?: boolean; isHovered?: boolean; isActive?: boolean; isLoading?: boolean; noStyle?: boolean; renderWrapperElement?: unknown; showTooltip?: boolean; } & InternalLinkProps & { as?: AllowedHTMLTags<C, AllowedTags>; } & Omit<React.PropsWithoutRef<React.ComponentProps<AllowedHTMLTags<C, AllowedTags>>>, "children" | "className" | "color" | "as" | "visualType" | "fullWidth" | "size" | "icon" | "iconLeft" | "iconRight" | "underline" | "isHovered" | "isActive" | "isLoading" | "noStyle" | "renderWrapperElement" | "showTooltip" | "iconStandalone"> & { ref?: PolymorphicRef<AllowedHTMLTags<C, AllowedTags>>; } & { underline?: boolean; }>;
  xl?: Partial<{ children: React.ReactNode; className?: string; visualType?: ButtonType; fullWidth?: boolean; color?: ButtonColor; size?: "default" | "small" | "large"; icon?: string | IconWithoutBackgroundProps; iconLeft?: string | IconWithoutBackgroundProps; iconRight?: string | IconWithoutBackgroundProps; underline?: boolean; isHovered?: boolean; isActive?: boolean; isLoading?: boolean; noStyle?: boolean; renderWrapperElement?: unknown; showTooltip?: boolean; } & InternalLinkProps & { as?: AllowedHTMLTags<C, AllowedTags>; } & Omit<React.PropsWithoutRef<React.ComponentProps<AllowedHTMLTags<C, AllowedTags>>>, "children" | "className" | "color" | "as" | "visualType" | "fullWidth" | "size" | "icon" | "iconLeft" | "iconRight" | "underline" | "isHovered" | "isActive" | "isLoading" | "noStyle" | "renderWrapperElement" | "showTooltip" | "iconStandalone"> & { ref?: PolymorphicRef<AllowedHTMLTags<C, AllowedTags>>; } & { underline?: boolean; }>;
  xxl?: Partial<{ children: React.ReactNode; className?: string; visualType?: ButtonType; fullWidth?: boolean; color?: ButtonColor; size?: "default" | "small" | "large"; icon?: string | IconWithoutBackgroundProps; iconLeft?: string | IconWithoutBackgroundProps; iconRight?: string | IconWithoutBackgroundProps; underline?: boolean; isHovered?: boolean; isActive?: boolean; isLoading?: boolean; noStyle?: boolean; renderWrapperElement?: unknown; showTooltip?: boolean; } & InternalLinkProps & { as?: AllowedHTMLTags<C, AllowedTags>; } & Omit<React.PropsWithoutRef<React.ComponentProps<AllowedHTMLTags<C, AllowedTags>>>, "children" | "className" | "color" | "as" | "visualType" | "fullWidth" | "size" | "icon" | "iconLeft" | "iconRight" | "underline" | "isHovered" | "isActive" | "isLoading" | "noStyle" | "renderWrapperElement" | "showTooltip" | "iconStandalone"> & { ref?: PolymorphicRef<AllowedHTMLTags<C, AllowedTags>>; } & { underline?: boolean; }>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type ButtonType = 'primary' | 'secondary' | 'neutral' | 'link';
type ButtonColor = 'default' | 'danger' | 'success' | 'inverted' | 'text';
interface IconWithoutBackgroundProps extends IconSharedProps {
    background?: undefined;
    /**
     * Type of display
     * @default block
     */
    display?: 'block' | 'inline';
}
type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type InternalLinkProps = {
    /**
     * If true, the icon will be placed in a separate column
     */
    iconStandalone?: boolean;
};
type AllowedHTMLTags<C extends React.ElementType, V> = C extends V ? C : never;
type AllowedTags = 'a' | React.ComponentType<UnknownType>;
```

## Examples

### Default

```tsx
export const Default = {
  render: Template,
  argTypes: {
    as: {
      control: false,
      table: {
        type: { summary: 'ElementType' },
      },
    },
  },
  args: {
    children: 'Link',
  },
};
```

### Sizes

```tsx
export const Sizes = {
  render: SizeTemplate,
};
```

### Colors

```tsx
export const Colors = {
  render: ColorTemplate,
};
```

### Default Underlined

```tsx
export const DefaultUnderlined: StoryObj<TemplateMultipleProps> = {
  render: TemplateColumn,
  args: {
    array: linkStateArray,
  },
  parameters: {
    pseudo: {
      hover: '#Hover',
      active: '#Active',
      focusVisible: '#Focus',
    },
  },
};
```

### Default No Underline

```tsx
export const DefaultNoUnderline: StoryObj<TemplateMultipleProps> = {
  render: TemplateColumn,
  args: {
    array: linkStateArray,
    underline: false,
  },
  parameters: {
    pseudo: {
      hover: '#Hover',
      active: '#Active',
      focusVisible: '#Focus',
    },
  },
};
```

### Inverted Underline

```tsx
export const InvertedUnderline: StoryObj<TemplateMultipleProps> = {
  render: TemplateColumn,
  args: {
    array: linkStateArray,
    color: 'inverted',
    titleColor: 'white',
  },
  parameters: {
    pseudo: {
      hover: '#Hover',
      active: '#Active',
      focusVisible: '#Focus',
    },
  },
  globals: { backgrounds: { value: 'brand' } },
};
```

Full story source: `src/tedi/components/navigation/link/link.stories.tsx`.

## Related

`Text`, `Col`, `Row`, `VerticalSpacing`
