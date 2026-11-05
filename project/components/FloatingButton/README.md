FloatingButton from @tedi-design-system/react. Use via `window.Tedi.FloatingButton` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Primary Horizontal, Primary Vertical, Secondary Horizontal, Secondary Vertical.

## Props

```ts
import * as React from 'react';

/**
 * FloatingButton from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/buttons/floating-button/floating-button.stories.tsx).
 */
export interface FloatingButtonProps {
  /** Button axis */
  axis?: FloatingButtonAxis;
  /** Button visual type */
  visualType?: FloatingButtonColor;
  /** Button size */
  size?: FloatingButtonSize;
  /** Button position */
  position?: CSSProperties['position'];
  /** Button placement */
  placement?: FloatingButtonPlacement;
  /** Button offset */
  offset?: FloatingButtonOffset;
  /** Button z-index */
  zIndex?: number;
  sm?: Partial<ButtonContentProps<"button", IInternalButtonProps, "button">>;
  md?: Partial<ButtonContentProps<"button", IInternalButtonProps, "button">>;
  lg?: Partial<ButtonContentProps<"button", IInternalButtonProps, "button">>;
  xl?: Partial<ButtonContentProps<"button", IInternalButtonProps, "button">>;
  xxl?: Partial<ButtonContentProps<"button", IInternalButtonProps, "button">>;
  /** Button children */
  children: React.ReactNode;
  /** Additional custom class name. */
  className?: string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  /** Render as custom component */
  as?: C;
  /** Name of the icon when button only has an icon in it. */
  icon?: string | IconWithoutBackgroundProps;
  /** Name of the icon we want to show on the left. */
  iconLeft?: string | IconWithoutBackgroundProps;
  /** Name of the icon we want to show on the right. */
  iconRight?: string | IconWithoutBackgroundProps;
  /** Underline the button text */
  underline?: boolean;
  /** If button is active and should keep its hover state. */
  isHovered?: boolean;
  /** If button is active and should keep it's active state. */
  isActive?: boolean;
  /** Automatically show tooltip for icon-only buttons. */
  showTooltip?: boolean;
  /** Button type */
  type?: 'submit' | 'button' | 'reset';
  /** Skips form's browser validation */
  formNoValidate?: boolean;
  ref?: PolymorphicRef<C>;
}
// Also accepts 269 standard React / HTML attributes of its root element.

// Referenced types, resolved one level deep (see the story source for the rest).
type FloatingButtonAxis = 'horizontal' | 'vertical';
type FloatingButtonColor = 'primary' | 'secondary';
type FloatingButtonSize = 'medium' | 'large';
type FloatingButtonPlacement = {
    vertical: 'top' | 'bottom' | 'center';
    horizontal: 'left' | 'right' | 'center';
};
type FloatingButtonOffset = {
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
};
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface IconWithoutBackgroundProps extends IconSharedProps {
    background?: undefined;
    /**
     * Type of display
     * @default block
     */
    display?: 'block' | 'inline';
}
type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];
```

## Examples

### Default

```tsx
export const Default: Story = {
  args: {
    children: 'Scroll up',
    position: 'static',
  },
};
```

### Primary Horizontal

```tsx
export const PrimaryHorizontal: StoryObj<TemplateMultipleProps> = {
  render: TemplateColumn,
  args: {
    array: buttonStateArray,
    axis: 'horizontal',
    visualType: 'primary',
    position: 'static',
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

### Primary Vertical

```tsx
export const PrimaryVertical: StoryObj<TemplateMultipleProps> = {
  render: TemplateColumn,
  args: {
    array: buttonStateArray,
    axis: 'vertical',
    visualType: 'primary',
    position: 'static',
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

### Secondary Horizontal

```tsx
export const SecondaryHorizontal: StoryObj<TemplateMultipleProps> = {
  render: TemplateColumn,
  args: {
    array: buttonStateArray,
    axis: 'horizontal',
    visualType: 'secondary',
    position: 'static',
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

### Secondary Vertical

```tsx
export const SecondaryVertical: StoryObj<TemplateMultipleProps> = {
  render: TemplateColumn,
  args: {
    array: buttonStateArray,
    axis: 'vertical',
    visualType: 'secondary',
    position: 'static',
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

Full story source: `src/tedi/components/buttons/floating-button/floating-button.stories.tsx`.

## Related

`Text`, `Col`, `Row`
