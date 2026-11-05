StatusBadge from @tedi-design-system/react. Use via `window.Tedi.StatusBadge` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Sizes, Colors, Status Indicator, With Tooltip.

## Props

```ts
import * as React from 'react';

/**
 * StatusBadge from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/tags/status-badge/status-badge.stories.tsx).
 */
export interface StatusBadgeProps {
  /** The content to be displayed inside the StatusBadge. If not provided and `icon` is set, the badge will display the icon only. */
  children?: React.ReactNode;
  /** Additional classes to apply custom styles to the StatusBadge. */
  className?: string;
  /** Provides the full text or description when the Badge represents an abbreviation. This is typically shown as a tooltip on hover. */
  title?: string;
  /** ID attribute */
  id?: string;
  /** ARIA role attribute for accessibility. */
  role?: React.AriaRole;
  /** Specifies the color scheme of the StatusBadge. */
  color?: StatusBadgeColor;
  /** Determines the style or visual type of the StatusBadge. */
  variant?: StatusBadgeVariant;
  /** Specifies the size of the StatusBadge. */
  size?: StatusBadgeSize;
  /** StatusBadge status indicator */
  status?: StatusBadgeStatus;
  /** The name of the icon to be displayed inside the StatusBadge. The icon is rendered using the `Icon` component. */
  icon?: string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<StatusBadgePropsBreakpointProps>;
  md?: Partial<StatusBadgePropsBreakpointProps>;
  lg?: Partial<StatusBadgePropsBreakpointProps>;
  xl?: Partial<StatusBadgePropsBreakpointProps>;
  xxl?: Partial<StatusBadgePropsBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type StatusBadgeColor = 'neutral' | 'brand' | 'accent' | 'success' | 'danger' | 'warning' | 'transparent';
type StatusBadgeVariant = 'filled' | 'filled-bordered' | 'bordered';
type StatusBadgeSize = 'default' | 'large';
type StatusBadgeStatus = 'danger' | 'success' | 'warning' | 'inactive';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type StatusBadgePropsBreakpointProps = {
    /**
     * Specifies the color scheme of the StatusBadge.
     * @default default
     */
    color?: StatusBadgeColor;
    /**
     * Determines the style or visual type of the StatusBadge.
     * @default filled
     */
    variant?: StatusBadgeVariant;
    /**
     * Specifies the size of the StatusBadge.
     * @default default
     */
    size?: StatusBadgeSize;
    /**
     * StatusBadge status indicator
     */
    status?: StatusBadgeStatus;
    /**
     * The name of the icon to be displayed inside the StatusBadge. The icon is rendered using the `Icon` component.
     */
    icon?: string;
};
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,
  args: {
    color: 'neutral',
    variant: 'filled',
    children: 'Text',
  },
};
```

### Sizes

```tsx
export const Sizes: StoryObj<TemplateMultipleProps> = {
  render: TemplateColumn,
  args: {
    array: sizeArray,
    children: 'Draft',
    color: 'neutral',
  },
};
```

### Colors

```tsx
export const Colors: Story = {
  render: TemplateAllCombos,
};
```

### Status Indicator

```tsx
export const StatusIndicator: Story = {
  render: TemplateStatusGrid,
  args: {
    color: 'neutral',
  },
};
```

### With Tooltip

```tsx
export const WithTooltip: StoryFn<StatusBadgeProps> = () => {
  return (
    <Tooltip placement="top">
      <Tooltip.Trigger>
        <StatusBadge color="warning" icon="warning" />
      </Tooltip.Trigger>
      <Tooltip.Content>
        Icon-only badges should always have a tooltip to provide context and ensure accessibility.
      </Tooltip.Content>
    </Tooltip>
  );
};
```

Full story source: `src/tedi/components/tags/status-badge/status-badge.stories.tsx`.

## Related

`Text`, `Col`, `Row`, `VerticalSpacing`, `Tooltip`
