Button from @tedi-design-system/react. Use via `window.Tedi.Button` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Primary, Primary Inverted, Secondary, Secondary Inverted, Neutral, Neutral Inverted, Success, Danger, Danger Neutral, No Style Template, Full Width, Responsive Button, Long Text Button That Wraps Into Multiple Lines, Visual Type Link.

## Props

```ts
import * as React from 'react';

/**
 * Button from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/buttons/button/button.stories.tsx).
 */
export interface ButtonProps<C extends React.ElementType = 'button'> {
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
  /** Underline the button text */
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
  /** Button type */
  type?: 'submit' | 'button' | 'reset';
  /** Skips form's browser validation */
  formNoValidate?: boolean;
  /** Render as custom component */
  as?: C;
  ref?: PolymorphicRef<C>;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<ButtonContentProps<C, IInternalButtonProps, "button">>;
  md?: Partial<ButtonContentProps<C, IInternalButtonProps, "button">>;
  lg?: Partial<ButtonContentProps<C, IInternalButtonProps, "button">>;
  xl?: Partial<ButtonContentProps<C, IInternalButtonProps, "button">>;
  xxl?: Partial<ButtonContentProps<C, IInternalButtonProps, "button">>;
}
// Also accepts 269 standard React / HTML attributes of its root element.

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
type ButtonContentProps<C extends React.ElementType, P extends Record<string, UnknownType>, A> = PolymorphicComponentPropWithRef<AllowedHTMLTags<C, A>, {
    /**
     * Button children
     */
    children: React.ReactNode;
    /**
     * Additional custom class name.
     */
    className?: string;
    /**
     * Button visual type
     * @default primary
     */
    visualType?: ButtonType;
    /**
     * If button should take all the space it has
     */
    fullWidth?: boolean;
    /**
     * Color scheme of the button. The 'text' value is only supported when visualType is 'link'.
     * @default default
     */
    color?: ButtonColor;
    /**
     * Button size
     */
    size?: 'default' | 'small' | 'large';
    /**
     * Name of the icon when button only has an icon in it.
     */
    icon?: string | IconWithoutBackgroundProps;
    /**
     * Name of the icon we want to show on the left.
     */
    iconLeft?: string | IconWithoutBackgroundProps;
    /**
     * Name of the icon we want to show on the right.
     */
    iconRight?: string | IconWithoutBackgroundProps;
    /**
     * Underline the button text
     */
    underline?: boolean;
    /**
     * If button is active and should keep its hover state.
     */
    isHovered?: boolean;
    /**
     * If button is active and should keep it's active state.
     */
    isActive?: boolean;
    /**
     * If button is in loading state and should show spinner.
     * When isLoading is true, button does not trigger onClick event.
     * @default false
     */
    isLoading?: boolean;
    /**
     * Skip applying button/link styles
     * Useful when you just want to use Button or Link logic without the styles
     * In this case icon, iconLeft and iconRight are ignored
     */
    noStyle?: boolean;
    /**
     * Internal use only
     */
    renderWrapperElement?: unknown;
    /**
     * Automatically show tooltip for icon-only buttons.
     * @default true
     */
    showTooltip?: boolean;
} & P>;
interface IInternalButtonProps {
    /**
     * Button type
     * @default button
     */
    type?: 'submit' | 'button' | 'reset';
    /**
     * Skips form's browser validation
     * @default true when type="submit"
     */
    formNoValidate?: boolean;
}
```

## Examples

### Default

```tsx
export const Default: Story = {
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
    children: 'Button',
  },
};
```

### Primary

```tsx
export const Primary: StoryObj<TemplateMultipleProps> = {
  render: TemplateColumn,
  args: {
    array: buttonStateArray,
    visualType: 'primary',
  },
  parameters: {
    pseudo: {
      hover: '#Hover',
      active: '#Active',
      focus: '#Focus',
    },
  },
};
```

### Primary Inverted

```tsx
export const PrimaryInverted: StoryObj<TemplateMultipleProps> = {
  render: TemplateColumn,
  args: {
    array: buttonStateArray,
    visualType: 'primary',
    color: 'inverted',
    titleColor: 'white',
  },
  parameters: {
    pseudo: {
      hover: '#Hover',
      active: '#Active',
      focus: '#Focus',
    },
  },
  globals: { backgrounds: { value: 'brand' } },
};
```

### Secondary

```tsx
export const Secondary: StoryObj<TemplateMultipleProps> = {
  render: TemplateColumn,
  args: {
    array: buttonStateArray,
    visualType: 'secondary',
  },
  parameters: {
    pseudo: {
      hover: '#Hover',
      active: '#Active',
      focus: '#Focus',
    },
  },
};
```

### Secondary Inverted

```tsx
export const SecondaryInverted: StoryObj<TemplateMultipleProps> = {
  render: TemplateColumn,
  args: {
    array: buttonStateArray,
    visualType: 'secondary',
    color: 'inverted',
    titleColor: 'white',
  },
  parameters: {
    pseudo: {
      hover: '#Hover',
      active: '#Active',
      focus: '#Focus',
    },
  },
  globals: { backgrounds: { value: 'brand' } },
};
```

### Neutral

```tsx
export const Neutral: StoryObj<TemplateMultipleProps> = {
  render: TemplateColumn,
  args: {
    array: buttonStateArray,
    visualType: 'neutral',
  },
  parameters: {
    pseudo: {
      hover: '#Hover',
      active: '#Active',
      focus: '#Focus',
    },
  },
};
```

Full story source: `src/tedi/components/buttons/button/button.stories.tsx`.

## Related

`Text`, `Col`, `Row`, `VerticalSpacing`
