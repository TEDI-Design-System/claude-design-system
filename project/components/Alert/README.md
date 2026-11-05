Alert from @tedi-design-system/react. Use via `window.Tedi.Alert` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Sizes, Headless, Global, Without Side Borders, With Icon, With Close Button, Alert Types, Without Title Long Text, Without Title Long Text And Closing Button, With Title Long Text And Closing Button, With Action Button.

## Props

```ts
import * as React from 'react';

/**
 * Alert from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/notifications/alert/alert.stories.tsx).
 */
export interface AlertProps {
  /** The primary content displayed within the alert. This can include text, links, or other elements. */
  children?: React.ReactNode;
  /** An optional title for the alert, typically used to summarize the message's purpose. If provided, it appears prominently at the top of the alert. */
  title?: React.ReactNode;
  /** Defines the visual and contextual type of the alert. This determines the icon, color, and overall style, making it clear whether the alert is informational, a success message, a warning, or an error. */
  type?: AlertType;
  /** Specifies an optional icon to display in the alert, providing quick visual context. Can be a string (icon name) or an object with additional `IconProps` to further customize the icon. */
  icon?: string | IconWithoutBackgroundProps;
  /** Callback function triggered when the close button is clicked. Adding this handler renders a close button in the alert. Useful for dismissible alerts. Ignored when `action` is also set — the consumer's slot wins, and is responsible for any close affordance it wants to expose. */
  onClose?: () => void;
  /** Custom content for the right-side slot of the alert (e.g. a CTA button, a link, or a small icon stack). Replaces the default close button when provided. Use this instead of squeezing buttons into `children` so the layout slot is reserved and aligned consistently. */
  action?: React.ReactNode;
  /** The ARIA role of the alert, informing screen readers about the alert's purpose. Options: - 'alert': For high-priority messages that demand immediate attention. - 'status': For less urgent messages providing feedback or updates. - 'none': Used when no ARIA role is needed. */
  role?: 'alert' | 'status' | 'none';
  /** Semantic heading level for alert titles to ensure WCAG compliance. */
  titleElement?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Additional CSS class names to apply to the alert for custom styling. Allows combining multiple styles or adding external CSS classes. */
  className?: string;
  /** Indicates that the alert is intended to span the full width of the page, typically for critical or prominent messages. */
  isGlobal?: boolean;
  /** Removes the side borders from the alert for a cleaner appearance. This also sets the border radius to 0. */
  noSideBorders?: boolean;
  /** Alert size variant. - 'default': Standard alert size with padding and border radius. - 'small': More compact alert size with reduced padding. */
  size?: 'default' | 'small';
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<AlertBreakpointProps>;
  md?: Partial<AlertBreakpointProps>;
  lg?: Partial<AlertBreakpointProps>;
  xl?: Partial<AlertBreakpointProps>;
  xxl?: Partial<AlertBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type AlertType = 'info' | 'success' | 'warning' | 'danger';
interface IconWithoutBackgroundProps extends IconSharedProps {
    background?: undefined;
    /**
     * Type of display
     * @default block
     */
    display?: 'block' | 'inline';
}
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type AlertBreakpointProps = {
    /**
     * Additional CSS class names to apply to the alert for custom styling.
     * Allows combining multiple styles or adding external CSS classes.
     */
    className?: string;
    /**
     * Indicates that the alert is intended to span the full width of the page,
     * typically for critical or prominent messages.
     * @default false
     */
    isGlobal?: boolean;
    /**
     * Removes the side borders from the alert for a cleaner appearance.
     * This also sets the border radius to 0.
     * @default false
     */
    noSideBorders?: boolean;
    /**
     * Alert size variant.
     * - 'default': Standard alert size with padding and border radius.
     * - 'small': More compact alert size with reduced padding.
     * @default default
     */
    size?: 'default' | 'small';
};
```

## Examples

### Default

```tsx
export const Default: Story = {
  args: {
    title: 'Title',
    children: (
      <>
        Content description. <Link href="#">Inline link example</Link>
      </>
    ),
  },
};
```

### Sizes

```tsx
export const Sizes: StoryObj<TemplateMultipleProps> = {
  render: TemplateColumn,
  args: {
    array: sizeArray,
    type: 'info',
    children: 'Content description',
    onClose: () => null,
  },
};
```

### Headless

```tsx
export const Headless: Story = {
  render: Template,
  args: {
    children: 'Content description',
  },
};
```

### Global

```tsx
export const Global: Story = {
  render: WithAndWithoutHeading,
  args: {
    children: 'Content description',
    isGlobal: true,
  },
};
```

### Without Side Borders

```tsx
export const WithoutSideBorders: Story = {
  render: WithAndWithoutHeading,
  args: {
    children: 'Content description',
    noSideBorders: true,
  },
};
```

### With Icon

```tsx
export const WithIcon: Story = {
  render: WithAndWithoutHeading,
  args: {
    children: 'Content description',
    icon: 'check_circle',
  },
};
```

Full story source: `src/tedi/components/notifications/alert/alert.stories.tsx`.

## Related

`Text`, `Col`, `Row`, `VerticalSpacing`
