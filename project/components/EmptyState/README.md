EmptyState from @tedi-design-system/react. Use via `window.Tedi.EmptyState` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, With Primary Action, With Secondary Action, With Link, With Heading, Minimal, Small Padding, Separate, Attached To Component, Inside Component, Custom Icon, Different Icon Color.

## Props

```ts
import * as React from 'react';

/**
 * EmptyState from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/empty-state/empty-state.stories.tsx).
 */
export interface EmptyStateProps {
  /** Container variant — matches the Figma "Types" section. - `'separate'` (default) — full border + radius, stands on its own. - `'attached'` — top border omitted so the block sits flush beneath a preceding card or table (same width + same bottom-radius). - `'inside'` — no border, no radius; intended to be placed inside another container such as a `<Card>` or `<Table>`. */
  type?: EmptyStateType;
  /** Padding scale. `default` = 24px, `small` = 16px. */
  size?: EmptyStateSize;
  /** Icon rendered above the text block. Pass a Material icon name, a full `IconWithoutBackgroundProps` object to configure the underlying `Icon`, or `null` to hide the icon. */
  icon?: string | IconWithoutBackgroundProps | null;
  /** Optional heading rendered above the description — appears as an H3 in brand-primary text color. */
  heading?: React.ReactNode;
  /** Main body text describing why there is nothing to show. */
  children?: React.ReactNode;
  /** Call-to-action slot. Typically a `<Button>` (or two) or a `<Link>`. Rendered below the text block. */
  actions?: React.ReactNode;
  /** Additional class name on the root element. */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type EmptyStateType = 'separate' | 'attached' | 'inside';
type EmptyStateSize = 'default' | 'small';
interface IconWithoutBackgroundProps extends IconSharedProps {
    background?: undefined;
    /**
     * Type of display
     * @default block
     */
    display?: 'block' | 'inline';
}
```

## Examples

### Default

```tsx
export const Default: Story = {
  args: {
    children: 'Andmed puuduvad',
  },
};
```

### With Primary Action

```tsx
export const WithPrimaryAction: Story = {
  args: {
    children: 'Andmed puuduvad',
    actions: (
      <Button type="button" iconLeft="add">
        Loo uus
      </Button>
    ),
  },
};
```

### With Secondary Action

```tsx
export const WithSecondaryAction: Story = {
  args: {
    children: 'Andmed puuduvad',
    actions: (
      <Button type="button" visualType="secondary" iconLeft="add">
        Loo uus
      </Button>
    ),
  },
};
```

### With Link

```tsx
export const WithLink: Story = {
  args: {
    children: 'Andmed puuduvad',
    actions: (
      <Link href="#" iconRight="arrow_forward">
        Loe rohkem
      </Link>
    ),
  },
};
```

### With Heading

```tsx
export const WithHeading: Story = {
  args: {
    icon: 'event_busy',
    heading: 'Broneeri aeg',
    children: 'Andmed puuduvad',
    actions: <Button type="button">Vali aeg</Button>,
  },
};
```

### Minimal

```tsx
export const Minimal: Story = {
  args: {
    icon: null,
    children: 'Andmed puuduvad',
  },
};
```

Full story source: `src/tedi/components/content/empty-state/empty-state.stories.tsx`.

## Related

`Button`, `Card`, `Link`
