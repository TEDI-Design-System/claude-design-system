import * as React from 'react';

/**
 * InfoButton from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/buttons/info-button/info-button.stories.tsx).
 */
export interface InfoButtonProps {
  /** If true, applies a small size to the InfoButton */
  isSmall?: boolean;
  /** Children elements to be rendered inside the InfoButton */
  children?: React.ReactNode;
  color?: 'default' | 'inverted';
  sm?: Partial<ButtonContentProps<"button", IInternalButtonProps, "button">>;
  md?: Partial<ButtonContentProps<"button", IInternalButtonProps, "button">>;
  lg?: Partial<ButtonContentProps<"button", IInternalButtonProps, "button">>;
  xl?: Partial<ButtonContentProps<"button", IInternalButtonProps, "button">>;
  xxl?: Partial<ButtonContentProps<"button", IInternalButtonProps, "button">>;
  /** Additional custom class name. */
  className?: string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  /** Render as custom component */
  as?: C;
  /** Button visual type */
  visualType?: ButtonType;
  /** If button should take all the space it has */
  fullWidth?: boolean;
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
  ref?: PolymorphicRef<C>;
}
// Also accepts 269 standard React / HTML attributes of its root element.

// Referenced types, resolved one level deep (see the story source for the rest).
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type ButtonType = 'primary' | 'secondary' | 'neutral' | 'link';
interface IconWithoutBackgroundProps extends IconSharedProps {
    background?: undefined;
    /**
     * Type of display
     * @default block
     */
    display?: 'block' | 'inline';
}
type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];
