// Tedi (@tedi-design-system/react@21.0.0-rc.1): component prop types, one section per component.

// ---- Icon (components/Icon/Icon.d.ts) ----
import * as React from 'react';

/**
 * Icon from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/base/icon/icon.stories.tsx).
 */
export interface IconProps {
  /** Name of material icon https://fonts.google.com/icons */
  name: string;
  /** Additional classes to style the icon or its wrapper. - If `background` is provided, the `className` will be applied to the wrapper element. - If `background` is not provided, the `className` will be applied directly to the icon element. */
  className?: string;
  /** Type of icon It is recommended to only use one type throughout your app, and to load only that type's font (`icons/<type>.css` with `index-without-icons.css`) instead of all three via `index.css`. */
  type?: IconType;
  /** Size of the icon */
  size?: IconSize;
  /** Render a filled variant of the icon */
  filled?: boolean;
  /** Which color Icon should be Use 'positive', 'important' or 'warning' with caution, usually they should not be in application UI */
  color?: IconColor;
  /** Icons label for screen-readers. If omitted then the icon is hidden for screen-readers. */
  label?: string;
  /** Add round background */
  background?: IconBackgroundColor;
  /** Type of display */
  display?: 'block';
}

// Referenced types, resolved one level deep (see the story source for the rest).
type IconType = 'outlined' | 'sharp' | 'rounded';
type IconSize = 8 | 12 | 16 | 18 | 24 | 36 | 48;
type IconColor = 'primary' | 'secondary' | 'tertiary' | 'brand' | 'brand-dark' | 'success' | 'warning' | 'warning-dark' | 'danger' | 'white' | 'inherit';
type IconBackgroundColor = 'primary' | 'secondary' | 'brand-primary' | 'brand-secondary';

// ---- Heading (components/Heading/Heading.d.ts) ----
import * as React from 'react';

/**
 * Heading from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/base/typography/heading/heading.stories.tsx).
 */
export interface HeadingProps {
  sm?: Partial<{ className?: string; element?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextElement; modifiers?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextModifiers[] | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextModifiers; color?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextColor; }>;
  md?: Partial<{ className?: string; element?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextElement; modifiers?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextModifiers[] | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextModifiers; color?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextColor; }>;
  lg?: Partial<{ className?: string; element?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextElement; modifiers?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextModifiers[] | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextModifiers; color?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextColor; }>;
  xl?: Partial<{ className?: string; element?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextElement; modifiers?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextModifiers[] | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextModifiers; color?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextColor; }>;
  xxl?: Partial<{ className?: string; element?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextElement; modifiers?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextModifiers[] | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextModifiers; color?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextColor; }>;
  /** Children of the text */
  children: React.ReactNode;
  /** ID attribute */
  id?: string;
  /** Allows to focus the element */
  tabIndex?: number;
  /** Additional class */
  className?: string;
  /** Single or multiple modifiers to change the text behavior */
  modifiers?: TextModifiers[] | TextModifiers;
  /** Color of the text Use 'success', 'important' or 'warning' with caution, usually they should not be in application UI */
  color?: TextColor;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  /** Semantic heading tag h1-h6 are allowed values */
  element?: Extract<TextProps['element'], HeadingModifiers>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type TextElement = 'div' | 'p' | 'span' | 'li' | 'label' | HeadingModifiers;
type TextModifiers = HeadingModifiers | 'normal' | 'small' | 'extra-small' | 'bold' | 'thin' | 'italic' | 'center' | 'left' | 'right' | 'nowrap' | 'break-all' | 'break-word' | 'break-spaces' | 'uppercase' | 'lowercase' | 'capitalize' | 'capitalize-first' | 'inline-block' | 'inline' | 'line-normal' | 'line-condensed' | 'subtitle';
type TextColor = 'primary' | 'secondary' | 'tertiary' | 'white' | 'disabled' | 'brand' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface TextProps extends BreakpointSupport<TextBreakpointProps> {
    /**
     * Children of the text
     */
    children: React.ReactNode;
    /**
     * ID attribute
     */
    id?: string;
    /**
     * Allows to focus the element
     */
    tabIndex?: number;
}
type HeadingModifiers = `h${HeadingLevel}`;

// ---- Text (components/Text/Text.d.ts) ----
import * as React from 'react';

/**
 * Text from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/base/typography/text/text.stories.tsx).
 */
export interface TextProps {
  /** Children of the text */
  children: React.ReactNode;
  /** ID attribute */
  id?: string;
  /** Allows to focus the element */
  tabIndex?: number;
  /** Additional class */
  className?: string;
  /** Base element */
  element?: TextElement;
  /** Single or multiple modifiers to change the text behavior */
  modifiers?: TextModifiers[] | TextModifiers;
  /** Color of the text Use 'success', 'important' or 'warning' with caution, usually they should not be in application UI */
  color?: TextColor;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<TextBreakpointProps>;
  md?: Partial<TextBreakpointProps>;
  lg?: Partial<TextBreakpointProps>;
  xl?: Partial<TextBreakpointProps>;
  xxl?: Partial<TextBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type TextElement = 'div' | 'p' | 'span' | 'li' | 'label' | HeadingModifiers;
type TextModifiers = HeadingModifiers | 'normal' | 'small' | 'extra-small' | 'bold' | 'thin' | 'italic' | 'center' | 'left' | 'right' | 'nowrap' | 'break-all' | 'break-word' | 'break-spaces' | 'uppercase' | 'lowercase' | 'capitalize' | 'capitalize-first' | 'inline-block' | 'inline' | 'line-normal' | 'line-condensed' | 'subtitle';
type TextColor = 'primary' | 'secondary' | 'tertiary' | 'white' | 'disabled' | 'brand' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type TextBreakpointProps = {
    /**
     * Additional class
     */
    className?: string;
    /**
     * Base element
     * @default p
     */
    element?: TextElement;
    /**
     * Single or multiple modifiers to change the text behavior
     */
    modifiers?: TextModifiers[] | TextModifiers;
    /**
     * Color of the text
     * Use 'success', 'important' or 'warning' with caution, usually they should not be in application UI
     * @default primary
     */
    color?: TextColor;
};

// ---- ButtonGroup (components/ButtonGroup/ButtonGroup.d.ts) ----
import * as React from 'react';

/**
 * ButtonGroup from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/buttons/button-group/button-group.stories.tsx).
 */
export interface ButtonGroupProps {
  /** The child components to render inside the ButtonGroup. Typically, these should be `<Button>` components. */
  children: ReactNode;
  /** The visual style of the ButtonGroup, determining its color and appearance. */
  type?: 'primary' | 'secondary';
  /** Callback function triggered when the selected button changes. Receives the `id` of the selected button as an argument. */
  onSelectionChange?: (id: string) => void;
  /** Whether all buttons in the group should have equal width and stretched inside their parent element. If `true`, all buttons will take up equal space. If `false`, the button widths will be determined by their content. */
  stretch?: boolean;
  /** A label for the button group, used for accessibility. Required if the group does not have a visible label. */
  ariaLabel?: string;
  /** Additional custom CSS classes to apply to the ButtonGroup container */
  className?: string;
  /** Size of the buttons in ButtonGroup */
  size?: 'default' | 'small';
  /** Whether the button group should collapse into a dropdown on mobile */
  enableMobileDropdown?: boolean;
  /** Breakpoint at which to switch to dropdown */
  mobileBreakpoint?: Breakpoint;
  /** Label to display on the dropdown trigger button when the button group collapses on mobile. If not provided, the label provider value for `sidenav.submenu` will be used as fallback. */
  dropdownLabel?: string;
  dropdownLabelMode?: 'active' | 'static';
}

// Referenced types, resolved one level deep (see the story source for the rest).
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

// ---- Button (components/Button/Button.d.ts) ----
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

// ---- CardButton (components/CardButton/CardButton.d.ts) ----
import * as React from 'react';

/**
 * CardButton from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/buttons/card-button/card-button.stories.tsx).
 */
export interface CardButtonProps<C extends React.ElementType = 'button'> {
  /** A single `<Card>` to render as the interactive surface. The host element provides the interaction semantics and applies the hover / active / focus / disabled states to the card and its blocks. Keep it to one card and avoid nested interactive elements. */
  children?: React.ReactNode;
  /** Additional class name on the host element. */
  className?: string;
  /** Render as custom component */
  as?: C;
  ref?: PolymorphicRef<C>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

// ---- ClosingButton (components/ClosingButton/ClosingButton.d.ts) ----
import * as React from 'react';

/**
 * ClosingButton from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/buttons/closing-button/closing-button.stories.tsx).
 */
export interface ClosingButtonProps {
  /** Additional classes to apply custom styles to the ClosingButton. */
  className?: string;
  /** Size of the ClosingButton */
  size?: ClosingButtonSize;
  /** Event handler for the button click event. Triggered when the user clicks on the close button. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  color?: ClosingButtonColor;
  iconSize?: ClosingButtonIconSize;
}
// Also accepts 269 standard React / HTML attributes of its root element.

// Referenced types, resolved one level deep (see the story source for the rest).
type ClosingButtonSize = 'default' | 'small';
type ClosingButtonColor = 'primary' | 'brand' | 'white';
type ClosingButtonIconSize = 18 | 24;

// ---- CollapseButton (components/CollapseButton/CollapseButton.d.ts) ----
import * as React from 'react';

/**
 * CollapseButton from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/buttons/collapse-button/collapse-button.stories.tsx).
 */
export interface CollapseButtonProps {
  /** Current open state. Bind alongside `onOpenChange` to keep in sync. */
  open: boolean;
  /** Called when the user toggles the button. Receives the next open state. Standard native `onClick` still fires too; if it calls `preventDefault` the toggle is suppressed. */
  onOpenChange?: (next: boolean) => void;
  /** Label shown when collapsed. Rendered literally — translate at the call site if needed. When omitted, falls back to the `LabelProvider`'s translated `'open'` label. */
  openText?: string;
  /** Label shown when expanded. Rendered literally — translate at the call site if needed. When omitted, falls back to the `LabelProvider`'s translated `'close'` label. */
  closeText?: string;
  /** Hide the label and render the chevron only. */
  hideText?: boolean;
  /** Chevron style. Only takes effect with `hideText` (icon-only mode). */
  arrowType?: CollapseButtonArrowType;
  /** Visual size. */
  size?: CollapseButtonSize;
  /** Light text and icon for placement on a dark / brand background. Ignored when `arrowType` is `secondary` (no inverted form in the design). */
  inverted?: boolean;
  /** Underline the text label. Set `false` in contexts where the chevron is the sole affordance (e.g. inside an accordion header). Has no effect in icon-only mode. */
  underline?: boolean;
  /** Accessible label. Required when `hideText` is `true`. */
  "aria-label"?: string;
}
// Also accepts 269 standard React / HTML attributes of its root element.

// Referenced types, resolved one level deep (see the story source for the rest).
type CollapseButtonArrowType = 'default' | 'secondary';
type CollapseButtonSize = 'default' | 'small';

// ---- FloatingButton (components/FloatingButton/FloatingButton.d.ts) ----
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
  sm?: Partial<import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/components/buttons/button-content/button-content").ButtonContentProps<"button", IInternalButtonProps, "button">>;
  md?: Partial<import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/components/buttons/button-content/button-content").ButtonContentProps<"button", IInternalButtonProps, "button">>;
  lg?: Partial<import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/components/buttons/button-content/button-content").ButtonContentProps<"button", IInternalButtonProps, "button">>;
  xl?: Partial<import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/components/buttons/button-content/button-content").ButtonContentProps<"button", IInternalButtonProps, "button">>;
  xxl?: Partial<import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/components/buttons/button-content/button-content").ButtonContentProps<"button", IInternalButtonProps, "button">>;
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

// ---- InfoButton (components/InfoButton/InfoButton.d.ts) ----
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
  sm?: Partial<import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/components/buttons/button-content/button-content").ButtonContentProps<"button", IInternalButtonProps, "button">>;
  md?: Partial<import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/components/buttons/button-content/button-content").ButtonContentProps<"button", IInternalButtonProps, "button">>;
  lg?: Partial<import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/components/buttons/button-content/button-content").ButtonContentProps<"button", IInternalButtonProps, "button">>;
  xl?: Partial<import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/components/buttons/button-content/button-content").ButtonContentProps<"button", IInternalButtonProps, "button">>;
  xxl?: Partial<import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/components/buttons/button-content/button-content").ButtonContentProps<"button", IInternalButtonProps, "button">>;
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

// ---- Accordion (components/Accordion/Accordion.d.ts) ----
import * as React from 'react';

/**
 * Accordion from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/accordion/accordion.stories.tsx).
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

// ---- Calendar (components/Calendar/Calendar.d.ts) ----
import * as React from 'react';

/**
 * Calendar from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/calendar/calendar.stories.tsx).
 */
export interface CalendarProps {
  /** Current view of the calendar. Can be `'days'`, `'months'`, or `'years'`. Controls which calendar grid is displayed. */
  view?: CalendarView;
  /** **Selection granularity** — controls the level at which a click finalises the selection rather than drilling down to the next sub-grid: - `'years'` — clicking a year selects Jan 1 of that year and closes; the calendar starts on the year grid. - `'months'` — clicking a month selects the first day of that month; the calendar starts on the month grid. - `'days'` (default) — full day-level selection; the calendar starts on the day grid. Distinct from `view` / `setView`, which control the *currently visible* grid — those flip as the user navigates between year / month / day. `selectionLevel` is the lowest level the user can drill down to before a click commits the selection. */
  selectionLevel?: CalendarView;
  /** The month currently displayed in the calendar. Used to render the correct month grid. */
  currentMonth: Date;
  /** Callback to update the `currentMonth` when navigating months/years. */
  setCurrentMonth: (date: Date) => void;
  /** Callback to update the current `view` (days, months, years) when the user switches calendar levels. */
  setView?: (view: CalendarView) => void;
  /** Selection mode of the calendar. Can be `'single'`, `'multiple'`, or `'range'`. */
  mode?: DateFieldMode;
  /** The currently selected value(s). - Single mode: `Date | undefined` - Multiple mode: `Date[]` - Range mode: `DateRange` (object with `from` and optional `to`) */
  value: Date | Date[] | DateRange | undefined;
  /** Locale object for formatting and translating calendar labels (from `react-day-picker`). */
  locale?: Locale;
  /** The locale code string used for date formatting. Defaults to 'et-EE'. */
  localeCode?: string;
  /** Whether to display days from the previous and next months in the current month grid. Default is `true`. */
  showOutsideDays?: boolean;
  /** Array of `Matcher`s or functions to disable specific dates. Used to prevent selection of certain days. */
  disabledMatchers?: Matcher[];
  /** If `true`, a value must be selected before the calendar allows closing. */
  required?: boolean;
  /** Array of available dates or a function to dynamically mark dates as available. Highlights selectable days without disabling other days. */
  availableDays?: Date[] | ((date: Date) => boolean);
  /** Array of unavailable dates or a function to dynamically mark dates as unavailable. Used for styling and optionally disabling specific days. */
  unavailableDays?: Date[] | ((date: Date) => boolean);
  /** Optional footer element to render below the calendar grid, e.g., for action buttons. */
  footer?: React.ReactNode;
  /** How the month/year selector in the calendar header is rendered. Forwarded to the internal `CalendarHeader`. - `'dropdown'` (default) — each picker is a `<Select>` dropdown. - `'grid'` — each picker opens a full grid of options. - `'static'` — the month/year is a plain, non-clickable label; only the prev/next navigation buttons can change the month. Use to disable month/year selection. */
  monthYearSelectType?: 'dropdown' | 'grid' | 'static';
  /** Optional per-day status. Called for each rendered day; return a `{ type, label }` to overlay a `StatusIndicator` dot on that day (the `label` is folded into the day's `aria-label`), or `null` / `undefined` for no status. */
  dayStatus?: DayStatusFn;
  /** Earliest year offered in the calendar header's year dropdown. Forwarded to the internal `CalendarHeader`. */
  minYear?: number;
  /** Latest year offered in the calendar header's year dropdown. Forwarded to the internal `CalendarHeader`. */
  maxYear?: number;
  /** Callback fired when a date or date range is selected. Receives the selected value, day, modifiers, and event. */
  handleSelect: OnSelectHandler<Date | Date[] | DateRange | undefined>;
  /** Callback to apply a selected date from month/year selection or programmatically. */
  applyValue: (date: Date) => void;
  /** Show or hide previous/next navigation buttons in calendar header. Default is `true`. */
  showNavigation?: boolean;
  /** Optional additional CSS class for the calendar container. */
  className?: string;
  /** Whether to render the surrounding card (border, background, radius). Set to `false` when embedding inside a parent that already provides its own surface — e.g. inside `DatePickerModal`, or alongside a calendar in `DateTimeField`. The inner gradient masks and column separators are preserved either way. */
  bordered?: boolean;
  /** Grow to fill the container's width instead of a fixed width; cells keep a square aspect ratio. Wrap in a sized container to control the scale. */
  fullWidth?: boolean;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<CalendarBreakpointProps>;
  md?: Partial<CalendarBreakpointProps>;
  lg?: Partial<CalendarBreakpointProps>;
  xl?: Partial<CalendarBreakpointProps>;
  xxl?: Partial<CalendarBreakpointProps>;
}
// Also accepts 72 standard React / HTML attributes of its root element.

// Referenced types, resolved one level deep (see the story source for the rest).
type CalendarView = 'days' | 'months' | 'years';
type DateFieldMode = 'single' | 'multiple' | 'range';
type DayStatusFn = (date: Date) => DayStatus | null | undefined;
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface CalendarBreakpointProps extends Omit<DayPickerProps, 'mode' | 'selected' | 'onSelect'> {
    /**
     * Current view of the calendar. Can be `'days'`, `'months'`, or `'years'`.
     * Controls which calendar grid is displayed.
     */
    view?: CalendarView;
    /**
     * **Selection granularity** — controls the level at which a click finalises
     * the selection rather than drilling down to the next sub-grid:
     * - `'years'` — clicking a year selects Jan 1 of that year and closes; the
     *   calendar starts on the year grid.
     * - `'months'` — clicking a month selects the first day of that month; the
     *   calendar starts on the month grid.
     * - `'days'` (default) — full day-level selection; the calendar starts on
     *   the day grid.
     *
     * Distinct from `view` / `setView`, which control the *currently visible*
     * grid — those flip as the user navigates between year / month / day.
     * `selectionLevel` is the lowest level the user can drill down to before
     * a click commits the selection.
     * @default days
     */
    selectionLevel?: CalendarView;
    /**
     * The month currently displayed in the calendar. Used to render the correct month grid.
     */
    currentMonth: Date;
    /**
     * Callback to update the `currentMonth` when navigating months/years.
     */
    setCurrentMonth: (date: Date) => void;
    /**
     * Callback to update the current `view` (days, months, years) when the user switches calendar levels.
     */
    setView?: (view: CalendarView) => void;
    /**
     * Selection mode of the calendar. Can be `'single'`, `'multiple'`, or `'range'`.
     */
    mode?: DateFieldMode;
    /**
     * The currently selected value(s).
     * - Single mode: `Date | undefined`
     * - Multiple mode: `Date[]`
     * - Range mode: `DateRange` (object with `from` and optional `to`)
     */
    value: Date | Date[] | DateRange | undefined;
    /**
     * Locale object for formatting and translating calendar labels (from `react-day-picker`).
     */
    locale?: Locale;
    /**
     * The locale code string used for date formatting. Defaults to 'et-EE'.
     */
    localeCode?: string;
    /**
     * Whether to display days from the previous and next months in the current month grid.
     * Default is `true`.
     */
    showOutsideDays?: boolean;
    /**
     * Array of `Matcher`s or functions to disable specific dates. Used to prevent selection of certain days.
     */
    disabledMatchers?: Matcher[];
    /**
     * If `true`, a value must be selected before the calendar allows closing.
     */
    required?: boolean;
    /**
     * Array of available dates or a function to dynamically mark dates as available.
     * Highlights selectable days without disabling other days.
     */
    availableDays?: Date[] | ((date: Date) => boolean);
    /**
     * Array of unavailable dates or a function to dynamically mark dates as unavailable.
     * Used for styling and optionally disabling specific days.
     */
    unavailableDays?: Date[] | ((date: Date) => boolean);
    /**
     * Optional footer element to render below the calendar grid, e.g., for action buttons.
     */
    footer?: React.ReactNode;
    /**
     * How the month/year selector in the calendar header is rendered.
     * Forwarded to the internal `CalendarHeader`.
     * - `'dropdown'` (default) — each picker is a `<Select>` dropdown.
     * - `'grid'` — each picker opens a full grid of options.
     * - `'static'` — the month/year is a plain, non-clickable label; only the
     *   prev/next navigation buttons can change the month. Use to disable
     *   month/year selection.
     * @default dropdown
     */
    monthYearSelectType?: 'dropdown' | 'grid' | 'static';
    /**
     * Optional per-day status. Called for each rendered day; return a
     * `{ type, label }` to overlay a `StatusIndicator` dot on that day (the
     * `label` is folded into the day's `aria-label`), or `null` / `undefined` for
     * no status.
     */
    dayStatus?: DayStatusFn;
    /**
     * Earliest year offered in the calendar header's year dropdown.
     * Forwarded to the internal `CalendarHeader`.
     * @default currentYear - 100
     */
    minYear?: number;
    /**
     * Latest year offered in the calendar header's year dropdown.
     * Forwarded to the internal `CalendarHeader`.
     * @default currentYear + 20
     */
    maxYear?: number;
    /**
     * Callback fired when a date or date range is selected. Receives the selected value, day, modifiers, and event.
     */
    handleSelect: OnSelectHandler<Date | Date[] | DateRange | undefined>;
    /**
     * Callback to apply a selected date from month/year selection or programmatically.
     */
    applyValue: (date: Date) => void;
    /**
     * Show or hide previous/next navigation buttons in calendar header.
     * Default is `true`.
     */
    showNavigation?: boolean;
    /**
     * Optional additional CSS class for the calendar container.
     */
    className?: string;
    /**
     * Whether to render the surrounding card (border, background, radius).
     * Set to `false` when embedding inside a parent that already provides its
     * own surface — e.g. inside `DatePickerModal`, or alongside a calendar in
     * `DateTimeField`. The inner gradient masks and column separators are
     * preserved either way.
     * @default true
     */
    bordered?: boolean;
    /**
     * Grow to fill the container's width instead of a fixed width; cells keep a
     * square aspect ratio. Wrap in a sized container to control the scale.
     * @default false
     */
    fullWidth?: boolean;
}

// ---- Card (components/Card/Card.d.ts) ----
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

// ---- Carousel (components/Carousel/Carousel.d.ts) ----
import * as React from 'react';

/**
 * Carousel from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/carousel/carousel.stories.tsx).
 */
export interface CarouselProps {
  /** Carousel composition — `Carousel.Header`, `Carousel.Content` and `Carousel.Footer`. */
  children?: React.ReactNode;
  /** Additional class name applied to the carousel root. */
  className?: string;
  /** Accessible name for the carousel region. Set a distinct label per carousel when a page has several. Defaults to the localized `carousel` label. */
  ariaLabel?: string;
}

// ---- Collapse (components/Collapse/Collapse.d.ts) ----
import * as React from 'react';

/**
 * Collapse from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/collapse/collapse.stories.tsx).
 */
export interface CollapseProps {
  /** Unique identifier for the collapse content. Used for ARIA attributes like `aria-controls`. */
  id: string;
  /** Content to be displayed inside the collapsible area. */
  children: React.ReactNode;
  /** Callback triggered when the collapse is toggled. Use this to update the `open` prop in controlled mode. */
  onToggle?: (open: boolean) => void;
  /** The title/header element for the collapsible section. Rendered inside the toggle button. */
  title?: JSX.Element;
  /** Text shown on the toggle button when the content is collapsed. Defaults to the result of `getLabel('open')`. */
  openText?: string;
  /** Text shown on the toggle button when the content is expanded. Defaults to the result of `getLabel('close')`. */
  closeText?: string;
  /** Descriptive label for screen readers (e.g. "Toggle Products submenu") If provided, overrides the default open/close text for the accessible name. */
  toggleLabel?: string;
  /** Use Collapse purely as a toggle trigger for content rendered elsewhere. When set, the toggle button's `aria-controls` points at the supplied id instead of Collapse's internal content panel, and the internal panel is **not rendered**. Useful when the disclosed region must live outside Collapse's DOM subtree (e.g. a table row whose details live in a sibling `<tr>`). The consumer is responsible for rendering the target element with the matching `id` and an appropriate `role` (typically `region`). When omitted (default), Collapse renders its own `children` inside a built-in `role="region"` panel. */
  controlsId?: string;
  /** Whether the disclosed content panel is exposed as a `region` landmark (`role="region"` + `aria-labelledby`). Turn this **off** for repeated or nested disclosures such as navigation sub-menus, where many labelled regions pollute the landmark map and collide (axe `landmark-unique`); the `aria-expanded` toggle already conveys the relationship. */
  contentAsRegion?: boolean;
  /** Whether the collapse should be initially open (uncontrolled mode) This is ignored when `open` and `onToggle` are provided */
  defaultOpen?: boolean;
  /** Controls the open/closed state of the collapse (controlled mode) Should be used together with `onToggle` */
  open?: boolean;
  /** Whether to visually hide the open/close text on the toggle button Useful for icon-only toggles */
  hideCollapseText?: boolean;
  /** Additional props to pass to the `Row` component used in the title area */
  titleRowProps?: RowProps;
  /** Custom class name for the root element */
  className?: string;
  /** Visual style of the toggle chevron, intended for icon-only toggles: `secondary` wraps the chevron in a bordered secondary button, `default` renders a plain arrow. */
  arrowType?: 'default' | 'secondary';
  /** Collapse text & icon size */
  size?: 'default' | 'small';
  /** Display underline below the title */
  underline?: boolean;
  /** Render collapse as icon-only toggle. Icon-only styles are applied ONLY when no title is provided. */
  iconOnly?: boolean;
  /** Inverted color palette — flips the link / icon colors to their inverted-surface equivalents (white text + icon), for use on top of dark backgrounds. Pairs with both the with-text and icon-only variants; the secondary-arrow style has no inverted form in the design. */
  inverted?: boolean;
  /** Make the whole header row (title included) toggle on click, not just the chevron button. The chevron button stays the keyboard / screen-reader control; this only adds a mouse click target across the row. Clicks on interactive elements inside the title (links, buttons) are ignored, so they keep working. */
  fullRowToggle?: boolean;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<CollapseBreakpointProps>;
  md?: Partial<CollapseBreakpointProps>;
  lg?: Partial<CollapseBreakpointProps>;
  xl?: Partial<CollapseBreakpointProps>;
  xxl?: Partial<CollapseBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface RowProps extends RowSpec, React.HTMLAttributes<HTMLElement> {
    /**
     * Row children. Row direct children should always be Col components
     */
    children?: React.ReactElement<ColProps> | React.ReactElement<ColProps>[] | React.ReactNode;
    /**
     * Additional class.
     */
    className?: string;
    /**
     * Base element.
     * @default div
     */
    element?: RowElement;
    /**
     * RowSpec object to change Row behavior on xs devices (<576px).
     * Or number of columns that will fit next to each other.
     */
    xs?: RowSpec | Cols;
    /**
     * RowSpec object to change Row behavior on sm devices (≥576px).
     * Or number of columns that will fit next to each other.
     */
    sm?: RowSpec | Cols;
    /**
     * RowSpec object to change Row behavior on md devices (≥768px).
     * Or number of columns that will fit next to each other.
     */
    md?: RowSpec | Cols;
    /**
     * RowSpec object to change Row behavior on lg devices (≥992px).
     * Or number of columns that will fit next to each other.
     */
    lg?: RowSpec | Cols;
    /**
     * RowSpec object to change Row behavior on xl devices (≥1200px).
     * Or number of columns that will fit next to each other.
     */
    xl?: RowSpec | Cols;
    /**
     * RowSpec object to change Row behavior on xxl devices (≥1400px).
     * Or number of columns that will fit next to each other.
     */
    xxl?: RowSpec | Cols;
}
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type CollapseBreakpointProps = {
    /**
     * Whether the collapse should be initially open (uncontrolled mode)
     * This is ignored when `open` and `onToggle` are provided
     * @default false
     */
    defaultOpen?: boolean;
    /**
     * Controls the open/closed state of the collapse (controlled mode)
     * Should be used together with `onToggle`
     */
    open?: boolean;
    /**
     * Whether to visually hide the open/close text on the toggle button
     * Useful for icon-only toggles
     * @default false
     */
    hideCollapseText?: boolean;
    /**
     * Additional props to pass to the `Row` component used in the title area
     */
    titleRowProps?: RowProps;
    /**
     * Custom class name for the root element
     */
    className?: string;
    /**
     * Visual style of the toggle chevron, intended for icon-only toggles:
     * `secondary` wraps the chevron in a bordered secondary button, `default` renders a plain arrow.
     * @default default
     */
    arrowType?: 'default' | 'secondary';
    /**
     * Collapse text & icon size
     * @default default
     */
    size?: 'default' | 'small';
    /**
     * Display underline below the title
     * @default true
     */
    underline?: boolean;
    /**
     * Render collapse as icon-only toggle.
     * Icon-only styles are applied ONLY when no title is provided.
     * @default false
     */
    iconOnly?: boolean;
    /**
     * Inverted color palette — flips the link / icon colors to their
     * inverted-surface equivalents (white text + icon), for use on top of dark
     * backgrounds. Pairs with both the with-text and icon-only variants; the
     * secondary-arrow style has no inverted form in the design.
     * @default false
     */
    inverted?: boolean;
    /**
     * Make the whole header row (title included) toggle on click, not just the chevron button.
     * The chevron button stays the keyboard / screen-reader control; this only adds a mouse click
     * target across the row. Clicks on interactive elements inside the title (links, buttons) are
     * ignored, so they keep working.
     * @default false
     */
    fullRowToggle?: boolean;
};

// ---- EmptyState (components/EmptyState/EmptyState.d.ts) ----
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

// ---- HeadingWithIcon (components/HeadingWithIcon/HeadingWithIcon.d.ts) ----
import * as React from 'react';

/**
 * HeadingWithIcon from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/heading-with-icon/heading-with-icon.stories.tsx).
 */
export interface HeadingWithIconProps {
  /** Heading text */
  children: React.ReactNode;
  /** Additional class */
  className?: string;
  /** Heading text color */
  headingColor?: TextColor;
  /** Icon color */
  iconColor?: IconColor;
  /** Semantic heading tag h1-h6 are allowed values */
  element?: Extract<TextProps['element'], HeadingModifiers>;
  sm?: Partial<{ className?: string; element?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextElement; modifiers?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextModifiers[] | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextModifiers; color?: TextColor; }>;
  md?: Partial<{ className?: string; element?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextElement; modifiers?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextModifiers[] | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextModifiers; color?: TextColor; }>;
  lg?: Partial<{ className?: string; element?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextElement; modifiers?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextModifiers[] | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextModifiers; color?: TextColor; }>;
  xl?: Partial<{ className?: string; element?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextElement; modifiers?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextModifiers[] | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextModifiers; color?: TextColor; }>;
  xxl?: Partial<{ className?: string; element?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextElement; modifiers?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextModifiers[] | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").TextModifiers; color?: TextColor; }>;
  /** ID attribute */
  id?: string;
  /** Allows to focus the element */
  tabIndex?: number;
  /** Single or multiple modifiers to change the text behavior */
  modifiers?: TextModifiers[] | TextModifiers;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  /** Icons label for screen-readers. If omitted then the icon is hidden for screen-readers. */
  label?: string;
  /** Size of the icon */
  size?: IconSize;
  /** Type of icon It is recommended to only use one type throughout your app, and to load only that type's font (`icons/<type>.css` with `index-without-icons.css`) instead of all three via `index.css`. */
  type?: IconType;
  /** Name of material icon https://fonts.google.com/icons */
  name: string;
  background?: undefined;
  /** Type of display */
  display?: 'block' | 'inline';
  /** Render a filled variant of the icon */
  filled?: boolean;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type TextColor = 'primary' | 'secondary' | 'tertiary' | 'white' | 'disabled' | 'brand' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
type IconColor = 'primary' | 'secondary' | 'tertiary' | 'brand' | 'brand-dark' | 'success' | 'warning' | 'warning-dark' | 'danger' | 'white' | 'inherit';
interface TextProps extends BreakpointSupport<TextBreakpointProps> {
    /**
     * Children of the text
     */
    children: React.ReactNode;
    /**
     * ID attribute
     */
    id?: string;
    /**
     * Allows to focus the element
     */
    tabIndex?: number;
}
type HeadingModifiers = `h${HeadingLevel}`;
type TextElement = 'div' | 'p' | 'span' | 'li' | 'label' | HeadingModifiers;
type TextModifiers = HeadingModifiers | 'normal' | 'small' | 'extra-small' | 'bold' | 'thin' | 'italic' | 'center' | 'left' | 'right' | 'nowrap' | 'break-all' | 'break-word' | 'break-spaces' | 'uppercase' | 'lowercase' | 'capitalize' | 'capitalize-first' | 'inline-block' | 'inline' | 'line-normal' | 'line-condensed' | 'subtitle';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type IconSize = 8 | 12 | 16 | 18 | 24 | 36 | 48;
type IconType = 'outlined' | 'sharp' | 'rounded';

// ---- Label (components/Label/Label.d.ts) ----
import * as React from 'react';

/**
 * Label from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/label/label.stories.tsx).
 */
export interface LabelProps {
  /** The element type to render. This can be any valid HTML element, allowing flexibility in how the label is used. Defaults to 'label'. */
  as?: ElementType;
  /** If true, displays a required symbol (*) after the label text, indicating that the associated input is mandatory. */
  required?: boolean;
  /** Tooltip content to display when hovering over the info button. Accepts rich content (e.g. bold text, links), not just a plain string. If provided, an info button with a tooltip will be rendered. */
  tooltip?: ReactNode;
  /** If true, applies a bold font weight to the label text. */
  isBold?: boolean;
  /** If true, applies a small font size to the label text. */
  isSmall?: boolean;
  /** Text modifiers that control how the label text is rendered, e.g. wrapping and line-breaking behavior (`'nowrap'`, `'break-word'`, `'break-all'`, `'break-spaces'`). Reuses the same modifiers as the `Text` component. Useful to prevent long labels from breaking across multiple lines and distorting form layouts. */
  modifiers?: LabelModifiers[] | LabelModifiers;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<LabelBreakpointProps>;
  md?: Partial<LabelBreakpointProps>;
  lg?: Partial<LabelBreakpointProps>;
  xl?: Partial<LabelBreakpointProps>;
  xxl?: Partial<LabelBreakpointProps>;
}
// Also accepts 265 standard React / HTML attributes of its root element.

// Referenced types, resolved one level deep (see the story source for the rest).
type LabelModifiers = Extract<TextModifiers, 'nowrap' | 'break-all' | 'break-word' | 'break-spaces' | 'italic' | 'uppercase' | 'lowercase' | 'capitalize'>;
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type LabelBreakpointProps = {
    /**
     * If true, applies a bold font weight to the label text.
     * @default false
     */
    isBold?: boolean;
    /**
     * If true, applies a small font size to the label text.
     * @default false
     */
    isSmall?: boolean;
    /**
     * Text modifiers that control how the label text is rendered, e.g. wrapping and
     * line-breaking behavior (`'nowrap'`, `'break-word'`, `'break-all'`, `'break-spaces'`).
     * Reuses the same modifiers as the `Text` component. Useful to prevent long labels
     * from breaking across multiple lines and distorting form layouts.
     */
    modifiers?: LabelModifiers[] | LabelModifiers;
};

// ---- List (components/List/List.d.ts) ----
import * as React from 'react';

/**
 * List from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/list/list.stories.tsx).
 */
export interface ListProps {
  /** List children should be ListItem components */
  children: React.ReactElement<ListItemProps> | React.ReactElement<ListItemProps>[] | React.ReactNode;
  /** The HTML element to use for rendering the list. Can either be 'ul' for an unordered list or 'ol' for an ordered list. */
  element?: ListElement;
  /** Adds a custom CSS class to the List element for additional styling or theming purposes */
  className?: string;
  /** This prop is used to set the color of the bullet points in the list. Uses same color values as TEDI Icon */
  color?: BulletColor;
  /** Props for controlling vertical spacing between list items. If provided, the List will be wrapped inside a VerticalSpacing component. */
  verticalSpacing?: Omit<VerticalSpacingProps, 'element' | 'children'>;
  /** Determines whether the list should have default styling (with bullets or numbers). */
  style?: 'styled' | 'none';
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<ListBreakpointProps>;
  md?: Partial<ListBreakpointProps>;
  lg?: Partial<ListBreakpointProps>;
  xl?: Partial<ListBreakpointProps>;
  xxl?: Partial<ListBreakpointProps>;
}
// Also accepts 262 standard React / HTML attributes of its root element.

// Referenced types, resolved one level deep (see the story source for the rest).
interface ListItemProps extends BreakpointSupport<ListItemBreakpointProps>, Omit<React.LiHTMLAttributes<HTMLLIElement>, 'style' | 'children'> {
    /**
     * List children should be ListItem components
     */
    children: React.ReactNode;
    /**
     * Adds a custom CSS class to the ListItem element for additional styling or theming purposes
     */
    className?: string;
}
type ListElement = 'ul' | 'ol';
type BulletColor = IconColor;
interface VerticalSpacingProps extends BreakpointSupport<VerticalSpacingBreakpointProps> {
    /**
     * Any content to be rendered within the spacing component
     */
    children: React.ReactNode | React.ReactNode[];
    /**
     * The HTML element to render, such as `div`, `section`, `article`, etc
     * @default div
     */
    element?: keyof JSX.IntrinsicElements;
    /**
     * Additional class name(s) to apply to the element
     */
    className?: string;
    /**
     * Additional inline styles, merged with the internal spacing custom property
     * (rather than replacing it).
     */
    style?: React.CSSProperties;
}
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type ListBreakpointProps = {
    /**
     * Props for controlling vertical spacing between list items. If provided,
     * the List will be wrapped inside a VerticalSpacing component.
     */
    verticalSpacing?: Omit<VerticalSpacingProps, 'element' | 'children'>;
    /**
     * Determines whether the list should have default styling (with bullets or numbers).
     * @default 'none'
     */
    style?: 'styled' | 'none';
};

// ---- Section (components/Section/Section.d.ts) ----
import * as React from 'react';

/**
 * Section from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/section/section.stories.tsx).
 */
export interface SectionProps {
  /** Section content */
  children?: React.ReactNode;
  /** Additional class names */
  className?: string;
  /** Defines the HTML element to render (e.g., section, article, aside, etc.) */
  as?: 'section' | 'article' | 'aside' | 'div';
  /** ARIA role for accessibility */
  role?: string;
  /** Unique identifier for the section */
  id?: string;
}

// ---- TableCard (components/TableCard/TableCard.d.ts) ----
import * as React from 'react';

/**
 * TableCard from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/table-card/table-card.stories.tsx).
 */
export interface TableCardProps {
  /** Label / value pairs (one per column) rendered as the card body - a single `<dl>`. */
  rows: TableCardRow[];
  /** Header title. Required for `collapsible`. */
  title?: React.ReactNode;
  /** Secondary line under the title. */
  subtitle?: React.ReactNode;
  /** Content rendered at the end of the header — a `StatusBadge`, a link, etc. */
  endSlot?: React.ReactNode;
  /** Heading tag for `title` (for the document outline). The title stays body-sized unless `titleModifiers` is set. */
  titleElement?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Visual size / weight of the title (`Text` modifiers), independent of `titleElement`. */
  titleModifiers?: TextModifiers;
  /** Make the header a toggle that shows / hides the body. Provide a `title` (or, failing that, `ariaLabel`) so the toggle has an accessible name. */
  collapsible?: boolean;
  /** Initial open state (uncontrolled). Ignored when `open` is set. */
  defaultOpen?: boolean;
  /** Controlled open state. Pair with `onOpenChange`. */
  open?: boolean;
  /** Called with the next open state when the header toggles. */
  onOpenChange?: (open: boolean) => void;
  /** Style of the collapse indicator (only applies when `collapsible`), mirroring `CollapseButton`'s `arrowType`: - `default` — a plain chevron. - `secondary` — a circular, outlined arrow. */
  arrowType?: 'default' | 'secondary';
  /** Footer content (e.g. `Button`s), divided from the body. */
  actions?: React.ReactNode;
  /** Emphasised summary / total row after the body, on a muted background. */
  summary?: { label: React.ReactNode; value: React.ReactNode; };
  /** Show a leading checkbox to select the row. */
  selectable?: boolean;
  /** Controlled selected state. Pair with `onSelectedChange`. */
  selected?: boolean;
  /** Initial selected state in uncontrolled mode. Ignored when `selected` is provided. */
  defaultSelected?: boolean;
  /** Called with the next selected state when the checkbox toggles. */
  onSelectedChange?: (selected: boolean) => void;
  /** Label text size — `small` uses the 14px label style, `default` the 16px body style. */
  labelSize?: 'small' | 'default';
  /** Accessible name for the selection checkbox. Defaults to the `table-card.select-row` label. */
  selectionLabel?: string;
  /** Accessible name for the card region. */
  ariaLabel?: string;
  /** Root element id (also wires the collapsible ARIA). Auto-generated when omitted. */
  id?: string;
  /** Extra full-width body content after `rows` (e.g. child row-groups). Collapses with the body. */
  children?: React.ReactNode;
  /** Row layout: `horizontal` (label beside value) or `vertical` (label above value). */
  layout?: 'horizontal' | 'vertical';
  /** Number of equal-width columns. Best with `layout="vertical"`. */
  columns?: number;
  /** Label column width (horizontal layout); a `number` is pixels. */
  labelWidth?: string | number;
  /** Label text alignment. Defaults to `right` in horizontal layout, `left` otherwise. */
  labelAlign?: TableCardAlign;
  /** Value text alignment. Defaults to `right` in horizontal layout, `left` otherwise. */
  valueAlign?: TableCardAlign;
  /** Vertical alignment of each label against its value (horizontal layout only). `'center'` keeps the label centred when a value is taller, e.g. a `StatusBadge`. */
  rowAlign?: 'start' | 'center';
  /** Padding of the card body (the rows section). Accepts the same values as `Card.Content`: a number in rems, `{ vertical, horizontal }`, or `{ top, right, bottom, left }`. */
  padding?: CardContentPadding;
  /** Vertical gap between rows in the body. A `number` is rems (matching `padding`); pass a string for any other CSS length. Defaults to the layout gutter in `vertical` layout and the list's compact spacing otherwise. */
  rowGap?: string | number;
  /** Class name for the root element. */
  className?: string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<TableCardBreakpointProps>;
  md?: Partial<TableCardBreakpointProps>;
  lg?: Partial<TableCardBreakpointProps>;
  xl?: Partial<TableCardBreakpointProps>;
  xxl?: Partial<TableCardBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface TableCardRow {
    /** Row label (usually the column header). Strings are wrapped in a `<Label>`; nodes render as-is. */
    label: React.ReactNode;
    /** Row value — text, a `StatusBadge`, a link, etc. */
    value: React.ReactNode;
    /**
     * Show the value in bold.
     * @default false
     */
    bold?: boolean;
    /** In a multi-column body, span this row across N columns. Ignored when `columns` is 1. */
    colSpan?: number;
}
type TextModifiers = HeadingModifiers | 'normal' | 'small' | 'extra-small' | 'bold' | 'thin' | 'italic' | 'center' | 'left' | 'right' | 'nowrap' | 'break-all' | 'break-word' | 'break-spaces' | 'uppercase' | 'lowercase' | 'capitalize' | 'capitalize-first' | 'inline-block' | 'inline' | 'line-normal' | 'line-condensed' | 'subtitle';
type TableCardAlign = 'left' | 'right';
type CardContentPadding = CardContentPaddingNumber | {
    vertical: CardContentPaddingNumber;
    horizontal: CardContentPaddingNumber;
} | {
    top: CardContentPaddingNumber;
    right: CardContentPaddingNumber;
    bottom: CardContentPaddingNumber;
    left: CardContentPaddingNumber;
};
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type TableCardBreakpointProps = {
    /**
     * Row layout: `horizontal` (label beside value) or `vertical` (label above value).
     * @default horizontal
     */
    layout?: 'horizontal' | 'vertical';
    /**
     * Number of equal-width columns. Best with `layout="vertical"`.
     * @default 1
     */
    columns?: number;
    /**
     * Label column width (horizontal layout); a `number` is pixels.
     * @default 8.25rem horizontal, auto vertical
     */
    labelWidth?: string | number;
    /** Label text alignment. Defaults to `right` in horizontal layout, `left` otherwise. */
    labelAlign?: TableCardAlign;
    /** Value text alignment. Defaults to `right` in horizontal layout, `left` otherwise. */
    valueAlign?: TableCardAlign;
    /**
     * Vertical alignment of each label against its value (horizontal layout only).
     * `'center'` keeps the label centred when a value is taller, e.g. a `StatusBadge`.
     * @default start
     */
    rowAlign?: 'start' | 'center';
    /**
     * Padding of the card body (the rows section). Accepts the same values as `Card.Content`:
     * a number in rems, `{ vertical, horizontal }`, or `{ top, right, bottom, left }`.
     * @default 1
     */
    padding?: CardContentPadding;
    /**
     * Vertical gap between rows in the body. A `number` is rems (matching `padding`); pass a
     * string for any other CSS length.
     * Defaults to the layout gutter in `vertical` layout and the list's compact spacing otherwise.
     */
    rowGap?: string | number;
    /** Class name for the root element. */
    className?: string;
};

// ---- Table (components/Table/Table.d.ts) ----
import * as React from 'react';

/**
 * Table from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/table/table.stories.tsx).
 */
export interface TableProps<TData> {
  /** Unique identifier for the table. Used for accessibility and as the default persistence key namespace. */
  id?: string;
  /** Row data. Render order mirrors the array order; reorder the array yourself (e.g. in `onRowDrop`) to change it. */
  data: TData[];
  /** Returns a stable id for each row. Without it, TanStack falls back to the row index — so identifiers shift when rows sort / paginate / reorder, which breaks record stability for `rowSelection`, `activeRowId`, and the `onRowDrop` `fromId`/`toId`. Set this whenever your data has a stable key. */
  getRowId?: (originalRow: TData, index: number, parent?: Row<TData>) => string;
  /** Column definitions. Must include a stable `id` on every column when column visibility / reorder / persistence are used. */
  columns: ColumnDef<TData>[];
  /** Visual size of the table. Matches Figma: `medium` = 49px rows, `small` = 41px rows. */
  size?: TableSize;
  /** Caption rendered above the table. Announced to assistive technology. */
  caption?: ReactNode;
  /** Alternating row backgrounds. */
  striped?: boolean;
  /** Renders vertical separators between columns. */
  verticalBorders?: boolean;
  /** Removes the outer border + radius around the table, keeping only internal row dividers. */
  borderless?: boolean;
  /** Freezes the first column during horizontal scroll. */
  stickyFirstColumn?: boolean;
  /** Freezes the last column during horizontal scroll — typically a trailing actions column that should stay reachable while a wide table scrolls. */
  stickyLastColumn?: boolean;
  /** Pins the `<thead>` row(s) to the top during vertical scroll. Requires `maxHeight` so the table's internal scroll container becomes the sticky anchor — wrapping the Table in an external scrollable div will NOT work, because the `<thead>` sticks to its nearest scrolling ancestor (which is always the internal `.tedi-table__scroll` div). Combines safely with `stickyFirstColumn`. */
  stickyHeader?: boolean;
  /** Constrains the height of the table's internal scroll container. Accepts any CSS length value (`number` is treated as pixels). Pair with `stickyHeader` for a fixed-height table whose header stays pinned during vertical scroll. */
  maxHeight?: number | string;
  /** Fires when a data row is clicked. Adds `role="button"`, a pointer cursor and Enter/Space keyboard activation to every row. */
  onRowClick?: (row: Row<TData>) => void;
  /** Highlights the row whose `id` matches as the currently-active row. Useful in master-detail layouts where the click handler navigates or opens a side panel and the table should stay visibly anchored to that row. Distinct from row selection (which is checkbox-driven via `enableRowSelection`) and from the transient `:hover` state. Renders with `aria-current="true"` for screen readers. */
  activeRowId?: string;
  /** Paint a hover background on data rows when the cursor is over them. Off by default — a hover highlight implies the row is interactive, which is misleading when there's nothing to click. Pass `true` for read-only tables that still want the affordance, or omit and the table will turn hover on automatically whenever `onRowClick` is set. */
  rowHover?: boolean;
  /** Enables row selection. When true, Table prepends a selection column with a checkbox (or radio, when `selectionMode === 'single'`) bound to `rowSelection` state. */
  enableRowSelection?: boolean | ((row: Row<TData>) => boolean);
  /** How rows are selected when `enableRowSelection` is on: - `'multiple'` (default) — checkbox per row + select-all in the header. `rowSelection` can hold any number of row ids. - `'single'` — radio per row, no select-all. Selecting a row clears any previous selection, so `rowSelection` holds at most one row id. In both modes the controlled `state.rowSelection` / `onStateChange` API is unchanged — only the indicator and TanStack's underlying multi-select behavior change. */
  selectionMode?: TableSelectionMode;
  /** Paints the `--table-active` background tint on every selected row. Turn off when checkboxes are used purely for "pick some rows for a bulk action" and the row-level highlight would be visually noisy. The checkbox itself still reflects the selected state. */
  highlightSelectedRows?: boolean;
  /** Enables per-column filter inputs rendered below the header row. Only columns whose `columnDef.enableColumnFilter !== false` render an input. */
  enableColumnFilters?: boolean;
  /** Render function for the expanded content of a row. When provided, Table prepends an expand/collapse toggle column and renders this node in a full- width row below every expanded parent row. */
  renderSubComponent?: (row: Row<TData>) => ReactNode;
  /** Predicate controlling which rows can be expanded. Defaults to "all rows" when `renderSubComponent` is provided, otherwise "none". */
  getRowCanExpand?: (row: Row<TData>) => boolean;
  /** Returns the sub-rows of a data row. Enables nested hierarchical data. */
  getSubRows?: (row: TData) => TData[] | undefined;
  /** How an expandable row is toggled: - `'button'` (default) — only the chevron button toggles expansion, and it renders in the bordered `secondary` arrow style. - `'row'` — a click anywhere on an expandable row toggles it (Enter/Space too), and the chevron renders in the neutral `default` arrow style as a plain indicator. Only rows that can expand become clickable. Has no effect unless the table is expandable (`getSubRows` or `renderSubComponent` is set). */
  expandTrigger?: 'button' | 'row';
  /** Whether expanded sub-rows count toward pagination (TanStack's `paginateExpandedRows`). Defaults to `false` so expanding a parent keeps its children on the same page and only top-level rows fill `pageSize` — opening a row never pushes siblings to the next page or splits a parent's children across pages. Set to `true` for TanStack's default, where sub-rows occupy page slots like any other row. Has no effect unless the table is both expandable and paginated. */
  paginateExpandedRows?: boolean;
  /** Enables client-side pagination and renders a built-in page-switcher footer. Pass `true` for default settings or an options object to customise. Page state lives on `TableState.pagination` so it is fully controllable and persistable. */
  pagination?: boolean | TablePaginationOptions;
  /** Whether the current page resets to the first page whenever `data` changes (TanStack's `autoResetPageIndex`). Defaults to `true` for client-side pagination (keeps the user on a valid page after filtering or sorting) and to `false` when `manualPagination` is set — in server-side mode `data` is replaced on every page/sort change, so auto-resetting would bounce the user back to page 1 and trigger an update loop. Set to `false` for client-side tables that mutate `data` in place (e.g. inline row editing), or override explicitly in either mode. */
  autoResetPageIndex?: boolean;
  /** Switches pagination to server-side mode. When `true`, Table stops slicing `data` locally — `data` is treated as the rows for the current page only. Pair with `pageCount` (or `rowCount`) and a controlled `state.pagination` + `onStateChange` to fetch the right page from the server on each change. */
  manualPagination?: boolean;
  /** Switches sorting to server-side mode. When `true`, Table no longer sorts `data` locally — sort state still updates and fires `onStateChange` so the parent can refetch in the new order, but the rows are rendered in the order they arrive in `data`. */
  manualSorting?: boolean;
  /** Switches filtering to server-side mode. When `true`, Table stops applying `columnFilters` locally; the parent is expected to translate filter state (visible via `onStateChange`) into a server query. */
  manualFiltering?: boolean;
  /** Total number of pages on the server. Required when `manualPagination` is `true` so the pagination footer can render the right page count — local row-count math is otherwise wrong, since `data` only holds the current page's rows. */
  pageCount?: number;
  /** Total number of rows on the server (across all pages). Used as the "X tulemust" / "X results" counter in the pagination footer when `manualPagination` is on. Falls back to the locally filtered row count when omitted. */
  rowCount?: number;
  /** Controlled state. Pair with `onStateChange`. Any key left undefined falls back to the corresponding default or internal state. */
  state?: Partial<TableState>;
  /** Initial state for uncontrolled usage. Ignored when `state` is provided. */
  defaultState?: Partial<TableState>;
  /** Callback fired whenever any state slice changes. */
  onStateChange?: (state: TableState) => void;
  /** When set, Table wires a localStorage adapter for the named key. Acts as a default state provider and persists subsequent changes. Consumers can still supply `state`/`onStateChange` to layer extra behavior on top. */
  persist?: TablePersistOptions;
  /** Rendered inside `<tbody>` when `data` is empty — typically an `EmptyState` node, or any string / node. */
  emptyState?: ReactNode;
  /** ARIA live-region role wrapping the empty state. Use `'status'` for polite announcements (recommended for "no results" feedback when the user changes a filter) or `'alert'` for assertive announcements that interrupt the current SR utterance. Omit when the empty state should not announce changes — e.g. when the table is empty on first render and the content never changes. */
  emptyStateRole?: 'alert' | 'status';
  /** Additional class name on the root element. */
  className?: string;
  /** Props forwarded to the row-selection checkboxes (the header select-all checkbox and every per-row cell checkbox). Use this to e.g. switch the checkboxes to `size: 'large'`. Wiring props (id, name, label, value, checked, indeterminate, disabled, onChange, hideLabel) are owned by Table and cannot be overridden. Ignored when `selectionMode === 'single'`. */
  checkboxProps?: TableSelectionCheckboxProps;
  /** Props forwarded to the row-selection radios when `selectionMode === 'single'`. Use this to e.g. switch the radios to `size: 'large'`. Wiring props (id, name, label, value, checked, disabled, onChange, hideLabel) are owned by Table and cannot be overridden. */
  radioProps?: TableSelectionRadioProps;
  /** Props forwarded to the row-expand `CollapseButton` toggle. Use this to e.g. switch to `arrowType: 'default'` or change the `size`. Wiring props (id, open, onOpenChange, openText, closeText, aria-controls, hideText) are owned by Table and cannot be overridden. */
  collapseProps?: TableExpandCollapseProps;
  /** Per-row className / inline style hook. Called once for every data row and the returned `className` is merged with Table's own row classes; the returned `style` is applied to the `<tr>`. Useful for drag-and-drop drop indicators, conditional row tinting, etc. Row event handlers are NOT accepted here — Table owns row click / keyboard behavior. */
  rowProps?: (row: Row<TData>) => { className?: string; style?: CSSProperties; } | undefined;
  /** Per-column className / inline style hook. Called for every header cell and every body cell; whatever is returned is applied to *both* the `<th>` (including the column-filter row) and every `<td>` belonging to the column. Useful for drag-and-drop drop indicators that should span the full column height, or for column-level theming. Identify the column via the `columnId` argument. */
  columnProps?: (columnId: string) => { className?: string; style?: CSSProperties; } | undefined;
  /** Toolbar + Table subcomponents such as `<Table.ColumnsMenu />`. */
  children?: ReactNode;
  /** Enables row reordering by **mouse and keyboard**. The Table auto-injects a leading drag-handle column. Mouse: drag a row by its handle. Keyboard: focus a handle, `Space`/`Enter` to pick the row up, `↑`/`↓` to move it (clamped to the rendered rows), `Space`/`Enter` to drop, `Escape` to cancel — every move (and the drop/cancel) is announced via a live region. Both paths emit `onRowDrop`; the consumer applies the new order to the source `data` array. Each `row.id` returned by TanStack is used as the drag identifier, so the data must have a stable `id` (or supply `getRowId`). */
  reorderableRows?: boolean;
  /** Enables column reordering by **mouse and keyboard**. Each (non-built-in, non-grouped) leaf header gets a grip button next to its label. Mouse: drag the header by its grip. Keyboard: focus the grip, `Space`/`Enter` to pick the column up, `←`/`→` to move it, `Space`/`Enter` to drop, `Escape` to cancel (announced via a live region). Reordering pushes the new order into TanStack's `columnOrder` state — flows through `onStateChange` and the `persist` adapter automatically; no `onRowDrop`-style wiring needed. Grouped header parents are never draggable; only flat / leaf columns are. Built-in slots (`__drag__`, `__select__`, `__expand__`) are skipped. */
  reorderableColumns?: boolean;
  /** Fires when a draggable row is dropped to a new position. Receives the before/after `row.id`s and the convenience indexes. Apply the move to your data with `arrayMove(data, fromIndex, toIndex)` and pass the result back via `data`. Only invoked when `reorderableRows` is enabled and the drop actually changes the row order. */
  onRowDrop?: (event: TableRowDropEvent) => void;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type TableSize = 'medium' | 'small';
type TableSelectionMode = 'multiple' | 'single';
interface TablePaginationOptions {
    /**
     * Rows per page.
     * @default 10
     */
    pageSize?: number;
    /**
     * Options rendered in the built-in page-size selector. Pass `false` to hide
     * the selector entirely.
     * @default [10, 25, 50]
     */
    pageSizeOptions?: number[] | false;
    /**
     * Props forwarded to the built-in `Pagination` to customise its appearance
     * and behaviour — e.g. `background`, `borders`, `hideResults`,
     * `showPrevNextButtons`, `arrowVariant`, `labels`. The data / state props the
     * Table owns (`pageCount`, `page`, `totalItems`, `pageSize`, `pageSizeOptions`
     * and the change handlers) are managed internally and cannot be overridden.
     */
    paginationProps?: Omit<PaginationProps, 'pageCount' | 'page' | 'onPageChange' | 'totalItems' | 'pageSize' | 'pageSizeOptions' | 'onPageSizeChange'>;
}
interface TableState {
    columnVisibility?: VisibilityState;
    columnOrder?: ColumnOrderState;
    rowSelection?: RowSelectionState;
    expanded?: ExpandedState;
    columnFilters?: ColumnFiltersState;
    sorting?: SortingState;
    pagination?: PaginationState;
}
interface TablePersistOptions {
    /**
     * Storage key used to read/write persisted state. Must be stable per table.
     */
    key: string;
    /**
     * Storage backend. Defaults to `window.localStorage` when available.
     */
    storage?: Storage;
    /**
     * Subset of state slices to persist. Defaults to user-preference slices
     * only: `columnVisibility`, `columnOrder`.
     * Task-scoped slices (`rowSelection`, `expanded`, `columnFilters`, `sorting`,
     * `pagination`) are deliberately excluded by default — pass them explicitly
     * via `include` if you want them to survive across sessions.
     */
    include?: (keyof TableState)[];
}
type TableSelectionCheckboxProps = Omit<CheckboxProps, 'id' | 'name' | 'label' | 'hideLabel' | 'value' | 'checked' | 'defaultChecked' | 'indeterminate' | 'disabled' | 'onChange'>;
type TableSelectionRadioProps = Omit<RadioProps, 'id' | 'name' | 'label' | 'hideLabel' | 'value' | 'checked' | 'defaultChecked' | 'disabled' | 'onChange'>;
type TableExpandCollapseProps = Omit<CollapseButtonProps, 'id' | 'open' | 'onOpenChange' | 'openText' | 'closeText' | 'aria-controls' | 'hideText'>;
interface TableRowDropEvent {
    fromId: string;
    toId: string;
    fromIndex: number;
    toIndex: number;
}

// ---- TextGroup (components/TextGroup/TextGroup.d.ts) ----
import * as React from 'react';

/**
 * TextGroup from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/text-group/text-group.stories.tsx).
 */
export interface TextGroupProps {
  /** Type of text group layout */
  type?: 'horizontal';
  /** Alignment for the label text */
  labelAlign?: TextAlign;
  /** Alignment for the value text. `'right'` grows the value so it sits flush against the trailing edge. Horizontal only. Value alignment is horizontal-only; not available in vertical layout. */
  valueAlign?: TextAlign;
  /** Width for the label (e.g., '200px', '30%', etc.) */
  labelWidth?: string | number;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<TextGroupBreakpointProps>;
  md?: Partial<TextGroupBreakpointProps>;
  lg?: Partial<TextGroupBreakpointProps>;
  xl?: Partial<TextGroupBreakpointProps>;
  xxl?: Partial<TextGroupBreakpointProps>;
  /** Label for the text group */
  label: React.ReactNode;
  /** Value displayed alongside the label. Accepts multiple nodes — a trailing `StatusBadge`, `Tag`, or info tooltip renders inline beside the text (the value row is a flex container with a small gap). */
  value: React.ReactNode | React.ReactNode[];
  /** Additional class name(s) to apply to the element */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type TextAlign = 'left' | 'right';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type TextGroupBreakpointProps = {
    /**
     * Type of text group layout
     */
    type?: 'horizontal';
    /**
     * Alignment for the label text
     *  @default left
     */
    labelAlign?: TextAlign;
    /**
     * Alignment for the value text. `'right'` grows the value so it sits flush
     * against the trailing edge. Horizontal only.
     * @default 'left'
     */
    valueAlign?: TextAlign;
    /**
     * Width for the label (e.g., '200px', '30%', etc.)
     * @default auto
     */
    labelWidth?: string | number;
} | {
    /**
     * Type of text group layout
     */
    type: 'vertical';
    /**
     * Alignment for the label text
     *  @default left
     */
    labelAlign?: 'left';
    /**
     * Value alignment is horizontal-only; not available in vertical layout.
     */
    valueAlign?: never;
    /**
     * Width for the label (e.g., '200px', '30%', etc.)
     * @default auto
     */
    labelWidth?: string | number;
};

// ---- Truncate (components/Truncate/Truncate.d.ts) ----
import * as React from 'react';

/**
 * Truncate from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/truncate/truncate.stories.tsx).
 */
export interface TruncateProps {
  /** Text that will be truncated */
  children: string;
  /** Custom content to display at the end of truncated text */
  ellipsis?: ReactNode;
  /** Whether the truncated text should be expandable */
  expandable?: boolean;
  /** Override default button properties */
  button?: Partial<Omit<ButtonProps, 'onClick'> & { onClick: (e: React.MouseEvent<HTMLButtonElement>, isTruncated: boolean) => void; }>;
  /** Additional class name */
  className?: string;
  /** Maximum number of characters to display */
  maxLength?: number;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<TruncateBreakpointProps>;
  md?: Partial<TruncateBreakpointProps>;
  lg?: Partial<TruncateBreakpointProps>;
  xl?: Partial<TruncateBreakpointProps>;
  xxl?: Partial<TruncateBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type ButtonProps<C extends React.ElementType = 'button'> = BreakpointSupport<ButtonContentProps<C, IInternalButtonProps, AllowedTags>>;
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type TruncateBreakpointProps = {
    /**
     * Additional class name
     */
    className?: string;
    /**
     * Maximum number of characters to display
     * @default 200
     */
    maxLength?: number;
};

// ---- Filter (components/Filter/Filter.d.ts) ----
import * as React from 'react';

/**
 * Filter from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/filter/filter/filter.stories.tsx).
 */
export interface FilterProps {
  /** Trigger label. In single-select mode it's replaced by the picked option (or prefixed when `preserveLabel`). */
  text: string;
  /** Identifier for participating in a managed `<FilterGroup>`. Unused outside a group. */
  value?: string;
  disabled?: boolean;
  /** Class on the root wrapper `<div>` (not the inner `<button>`). */
  className?: string;
  /** Trigger `<button>` id. Auto-generated when omitted; also used as a prefix for sub-element ids. */
  id?: string;
  /** Selected appearance. - Toggle mode (no `options`, no `children`): controlled or uncontrolled (`defaultSelected`). - Custom-content mode (`children`): controlled-only — derive it from your own state. - Dropdown mode (`options`): ignored; derived from `selectedValue` / `selectedValues`. */
  selected?: boolean;
  /** Toggle-mode initial state. Ignored when `selected` is set. */
  defaultSelected?: boolean;
  /** Toggle-mode change callback. Not fired in custom-content or dropdown modes. */
  onSelectedChange?: (selected: boolean) => void;
  /** Single-select controlled value (`''` = nothing selected). Pair with `options`. */
  selectedValue?: string;
  /** Single-select initial value. Ignored when `selectedValue` is set. */
  defaultSelectedValue?: string;
  /** Single-select change callback — fires on commit or clear (`''`). */
  onSelectedValueChange?: (value: string) => void;
  /** Switch the dropdown to multi-select (checkboxes). Requires `options`. */
  multiselect?: boolean;
  /** Multi-select controlled values. */
  selectedValues?: string[];
  /** Multi-select initial values. Ignored when `selectedValues` is set. */
  defaultSelectedValues?: string[];
  /** Multi-select change callback — fires on toggle, "Select all", or clear. */
  onSelectedValuesChange?: (values: string[]) => void;
  /** Dropdown options. Mutually exclusive with `children` (children wins if both). */
  options?: FilterOption[];
  /** Search input that filters `options` by label (case-insensitive substring). */
  searchable?: boolean;
  /** Multi-select "Select all" toggle; targets enabled + visible options. */
  showSelectAll?: boolean;
  /** Override the `filter.select-all` i18n label. */
  selectAllLabel?: string;
  /** "Clear selection" button below the panel. Dropdown modes clear automatically; custom-content mode delegates to `onClear`. */
  showClear?: boolean;
  /** Override the `filter.clear-selection` i18n label. */
  clearLabel?: string;
  /** Single-select: keep `text` as a prefix once a value is picked ("Teenus: …"). */
  preserveLabel?: boolean;
  /** Custom dropdown content. Switches the filter into controlled custom-content mode. */
  children?: React.ReactNode;
  /** Fires when "Clear" is clicked in custom-content mode — reset your own state here. */
  onClear?: () => void;
  /** Slot before `text` (icon, status). Auto-replaced by a check icon when toggle-mode selected — disable via `hidePrependWhenSelected={false}`. */
  prepend?: React.ReactNode;
  /** Hide `prepend` while selected so the check icon can take its place. */
  hidePrependWhenSelected?: boolean;
  /** Slot after `text`. In multi-select sits alongside the built-in count badge. */
  append?: React.ReactNode;
  /** Floating UI placement; flips when room is tight. */
  placement?: React.ComponentProps<typeof Dropdown>['placement'];
  /** Accessible label for the search input. Falls back to `text`. */
  searchLabel?: string;
  /** Caps the height of the dropdown's option list. The list scrolls when it's taller, while the search and "Clear selection" stay pinned. `number` = px, `string` = any CSS length. */
  maxHeight?: React.ComponentProps<typeof Dropdown>['maxHeight'];
  /** Visual variant of the filter. */
  variant?: FilterVariant;
  /** Visual size of the filter. */
  size?: FilterSize;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<FilterBreakpointProps>;
  md?: Partial<FilterBreakpointProps>;
  lg?: Partial<FilterBreakpointProps>;
  xl?: Partial<FilterBreakpointProps>;
  xxl?: Partial<FilterBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface FilterOption {
    /** Display label of the option. */
    label: string;
    /** Stable identifier returned via selection callbacks. */
    value: string;
    /** Whether the option cannot be selected. */
    disabled?: boolean;
}
type FilterVariant = 'primary' | 'secondary';
type FilterSize = 'default' | 'large';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type FilterBreakpointProps = {
    /**
     * Visual variant of the filter.
     * @default primary
     */
    variant?: FilterVariant;
    /**
     * Visual size of the filter.
     * @default default
     */
    size?: FilterSize;
};

// ---- Checkbox (components/Checkbox/Checkbox.d.ts) ----
import * as React from 'react';

/**
 * Checkbox from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/checkbox/checkbox.stories.tsx).
 */
export interface CheckboxProps {
  /** Visual variant. - `default` — standard indicator + label. - `card` — the whole control renders as a selectable card (indicator, label, optional icon/description). */
  variant?: ChoiceInputVariant;
  /** Provide content for tooltip. Accepts rich content (e.g. bold text, links), not just a plain string. Mutually exclusive with `variant="card"` — the card carries supplementary content through its `description` slot instead. Passing both logs a dev-time warning and the tooltip is ignored. (This is enforced at runtime rather than in the types: a discriminated union would reject the dynamic prop-spreading that `Checkbox.Group` / `Radio.Group` / `Table` rely on.) */
  tooltip?: React.ReactNode;
  /** ID property. When omitted a stable id is generated (useful inside `Radio.Group` / `Checkbox.Group`). */
  id?: string;
  /** Label text */
  label: React.ReactNode;
  /** Additional classes. */
  className?: string;
  /** Value property */
  value: string;
  /** name of the input. Provided automatically when rendered inside `Radio.Group` / `Checkbox.Group`. */
  name?: string;
  /** Card colour variant. Only applies when `variant="card"`. */
  cardVariant?: ChoiceInputCardVariant;
  /** Secondary description text shown under the label. Primarily used with `variant="card"`. */
  description?: React.ReactNode;
  /** Leading icon (Material icon name) shown before the label. Primarily used with `variant="card"`. */
  icon?: string;
  /** is the label hidden */
  hideLabel?: boolean;
  /** If the option is disabled */
  disabled?: boolean;
  /** onChange handler */
  onChange?: (value: string, checked: boolean) => void;
  /** Helper text displayed below the input. */
  helper?: FeedbackTextProps;
  /** If the check is controlled from outside the components */
  checked?: boolean;
  /** If the check is checked by default */
  defaultChecked?: boolean;
  /** If the item should be in hover state */
  hover?: boolean;
  /** Additional props forwarded to the underlying `Label` component. Use `modifiers` to control how the label text wraps or breaks (e.g. `{ modifiers: 'nowrap' }`). */
  labelProps?: FormLabelProps['labelProps'];
  /** Input size */
  size?: 'default' | 'large';
  /** Whether the input is marked as invalid. */
  invalid?: boolean;
  /** Whether the input is marked as required. */
  required?: boolean;
  /** If the check is in indeterminate state. (Not checked or unchecked) When this is true then the checked prop is ignored */
  indeterminate?: boolean;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<CheckboxBaseProps>;
  md?: Partial<CheckboxBaseProps>;
  lg?: Partial<CheckboxBaseProps>;
  xl?: Partial<CheckboxBaseProps>;
  xxl?: Partial<CheckboxBaseProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface FeedbackTextProps {
    /**
     * Helper text
     */
    text: React.ReactNode | React.ReactNode[];
    /**
     * ID to reference the helper from aria-describedby attributes.
     * If omitted, then the id might be set through a parent component.
     */
    id?: string;
    /**
     * Additional custom class.
     */
    className?: string;
    /**
     * Type of form-helper.
     * @default hint
     */
    type?: FeedbackTextType;
    /**
     * Position of the helper.
     * @default left
     */
    position?: FeedbackTextPosition;
}
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type CheckboxBaseProps = ChoiceInputProps & {
    /**
     * If the check is in indeterminate state. (Not checked or unchecked)
     * When this is true then the checked prop is ignored
     */
    indeterminate?: boolean;
};

// ---- ChoiceGroup (components/ChoiceGroup/ChoiceGroup.d.ts) ----
import * as React from 'react';

/**
 * ChoiceGroup from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/choice-group/choice-group.stories.tsx).
 */
export interface ChoiceGroupProps {
  id: string;
  items: ExtendedChoiceGroupItemProps[];
  name: string;
  label: React.ReactNode | string;
  inputType?: ChoiceGroupItemType;
  helper?: FeedbackTextProps;
  /** Additional className. */
  className?: string;
  defaultValue?: ChoiceGroupValue;
  value?: ChoiceGroupValue;
  onChange?: (value: ChoiceGroupValue) => void;
  variant?: ChoiceGroupItemVariant;
  color?: ChoiceGroupItemColor;
  direction?: Direction;
  layout?: ChoiceGroupItemLayout;
  rowProps?: RowProps;
  showIndicator?: boolean;
  indeterminateCheck?: boolean | string | ((state: ChoiceGroupIndeterminateState) => string);
  indeterminateCheckProps?: { indented?: boolean; } & Partial<Omit<CheckboxProps, 'indeterminate' | 'checked' | 'onChange' | 'defaultChecked' | 'label'>>;
  /** Specifies the size of the label text. Options include 'small' for a smaller label size or 'default' for the standard size. */
  size?: 'small' | 'default';
  /** Indicates whether the input field is required. If set to `true`, the required indicator (if provided) will be displayed next to the label. */
  required?: boolean;
  /** Controls the visibility of the label. Use `true` to hide the label visually while maintaining its space in the layout, or use 'keep-space' to hide it without collapsing the space it occupies. */
  hideLabel?: boolean | 'keep-space';
  /** Renders the label as a `<span>` instead of a `<label>` element. This is useful when the `Form` component already handles labels internally. */
  renderWithoutLabel?: boolean;
  /** Tooltip content to display when hovering over the info button. If provided, an info button with a tooltip will be rendered. */
  tooltip?: React.ReactNode;
  /** Additional props forwarded to the underlying `Label` component. Use `modifiers` to control how the label text wraps or breaks (e.g. `{ modifiers: 'nowrap' }`) so long labels don't distort the form layout. Breakpoint keys are supported for responsive wrapping (e.g. `{ modifiers: 'nowrap', sm: { modifiers: 'break-word' } }`). */
  labelProps?: LabelModifierProps;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<ChoiceGroupAllProps>;
  md?: Partial<ChoiceGroupAllProps>;
  lg?: Partial<ChoiceGroupAllProps>;
  xl?: Partial<ChoiceGroupAllProps>;
  xxl?: Partial<ChoiceGroupAllProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface ExtendedChoiceGroupItemProps extends BreakpointSupport<ChoiceGroupItemBreakpointProps> {
    id: string;
    label: string | React.ReactNode;
    value: string;
}
type ChoiceGroupItemType = 'radio' | 'checkbox';
interface FeedbackTextProps {
    /**
     * Helper text
     */
    text: React.ReactNode | React.ReactNode[];
    /**
     * ID to reference the helper from aria-describedby attributes.
     * If omitted, then the id might be set through a parent component.
     */
    id?: string;
    /**
     * Additional custom class.
     */
    className?: string;
    /**
     * Type of form-helper.
     * @default hint
     */
    type?: FeedbackTextType;
    /**
     * Position of the helper.
     * @default left
     */
    position?: FeedbackTextPosition;
}
type ChoiceGroupValue = string | string[] | null;
type ChoiceGroupItemVariant = 'default' | 'card';
type ChoiceGroupItemColor = 'primary' | 'secondary';
type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type ChoiceGroupItemLayout = 'segmented' | 'separated';
interface RowProps extends RowSpec, React.HTMLAttributes<HTMLElement> {
    /**
     * Row children. Row direct children should always be Col components
     */
    children?: React.ReactElement<ColProps> | React.ReactElement<ColProps>[] | React.ReactNode;
    /**
     * Additional class.
     */
    className?: string;
    /**
     * Base element.
     * @default div
     */
    element?: RowElement;
    /**
     * RowSpec object to change Row behavior on xs devices (<576px).
     * Or number of columns that will fit next to each other.
     */
    xs?: RowSpec | Cols;
    /**
     * RowSpec object to change Row behavior on sm devices (≥576px).
     * Or number of columns that will fit next to each other.
     */
    sm?: RowSpec | Cols;
    /**
     * RowSpec object to change Row behavior on md devices (≥768px).
     * Or number of columns that will fit next to each other.
     */
    md?: RowSpec | Cols;
    /**
     * RowSpec object to change Row behavior on lg devices (≥992px).
     * Or number of columns that will fit next to each other.
     */
    lg?: RowSpec | Cols;
    /**
     * RowSpec object to change Row behavior on xl devices (≥1200px).
     * Or number of columns that will fit next to each other.
     */
    xl?: RowSpec | Cols;
    /**
     * RowSpec object to change Row behavior on xxl devices (≥1400px).
     * Or number of columns that will fit next to each other.
     */
    xxl?: RowSpec | Cols;
}
type ChoiceGroupIndeterminateState = 'none' | 'some' | 'all';
type CheckboxProps = BreakpointSupport<CheckboxBaseProps>;
type LabelModifierProps = BreakpointSupport<{
    modifiers?: LabelModifiers[] | LabelModifiers;
}>;
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface ChoiceGroupAllProps extends Omit<FormLabelProps, 'id' | 'label'> {
    id: string;
    items: ExtendedChoiceGroupItemProps[];
    name: string;
    label: React.ReactNode | string;
    inputType?: ChoiceGroupItemType;
    helper?: FeedbackTextProps;
    className?: string;
    defaultValue?: ChoiceGroupValue;
    value?: ChoiceGroupValue;
    onChange?: (value: ChoiceGroupValue) => void;
    variant?: ChoiceGroupItemVariant;
    color?: ChoiceGroupItemColor;
    direction?: Direction;
    layout?: ChoiceGroupItemLayout;
    rowProps?: RowProps;
    showIndicator?: boolean;
    indeterminateCheck?: boolean | string | ((state: ChoiceGroupIndeterminateState) => string);
    indeterminateCheckProps?: {
        indented?: boolean;
    } & Partial<Omit<CheckboxProps, 'indeterminate' | 'checked' | 'onChange' | 'defaultChecked' | 'label'>>;
}

// ---- DateField (components/DateField/DateField.d.ts) ----
import * as React from 'react';

/**
 * DateField from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/date-field/date-field.stories.tsx).
 */
export interface DateFieldProps {
  /** Unique identifier for the date field. */
  id: string;
  /** Field label. Required for accessibility. */
  label: string;
  /** Props forwarded to the field's label (e.g. `{ modifiers: 'nowrap' }` to control how a long label wraps). Breakpoint keys are supported for responsive wrapping. */
  labelProps?: TextFieldProps['labelProps'];
  /** Determines the selection mode of the calendar. - `'single'` (default) – only one date can be selected. The `selected` prop should be a `Date` object or `undefined`. - `'multiple'` – multiple individual dates can be selected. The `selected` prop should be an array of `Date` objects. - `'range'` – a continuous date range can be selected. The `selected` prop should be an object with `from` and optional `to` properties, both being `Date` objects. */
  mode?: DateFieldMode;
  /** The currently selected date(s). The expected type depends on the `mode`: - For `mode="single"`, this should be a `Date` object or `undefined`. - For `mode="multiple"`, this should be an array of `Date` objects. - For `mode="range"`, this should be an object with a `from` property (a `Date` object) and an optional `to` property (also a `Date` object). */
  selected?: Date | Date[] | DateRange | undefined;
  /** Callback fired when the user selects a date or date range. The exact parameters depend on the `mode`: - For `mode="single"`, the callback receives the selected `Date` object (or `undefined` if cleared). - For `mode="multiple"`, the callback receives an array of selected `Date` objects. - For `mode="range"`, the callback receives an object with `from` and optional `to` properties, both being `Date` objects (or `undefined` if cleared). */
  onSelect?: OnSelectHandler<Date | Date[] | DateRange | undefined>;
  /** Disable specific dates. Accepts the same matchers as React DayPicker's `disabled` prop. */
  disabled?: Matcher | Matcher[];
  /** Disable specific dates via react-day-picker matchers. Mirrors the `disabledMatchers` prop on `DateTimeField` so the API is consistent across the date-field family. Merges with the (deprecated) `disabled` overload — if both are supplied, the union of both matcher sets is applied. */
  disabledMatchers?: Matcher | Matcher[];
  /** Input placeholder text when no date is selected. */
  placeholder?: string;
  /** Additional class name(s) to apply to the component container. */
  className?: string;
  /** Custom date formatting function. Receives the selected date(s) and should return a string for display in the input field. If not provided, a default formatter will be used that formats dates as "dd.MM.yyyy" in the "et-EE" locale. */
  formatDate?: (date: Date | Date[] | DateRange | undefined) => string;
  /** Show days from adjacent months in the calendar view. Default is `true`. */
  showOutsideDays?: boolean;
  /** Custom date parsing function for user input. Receives the input string and should return a `Date`, an array of `Date`s, a `DateRange`, or `undefined` if the input is invalid or cleared. If not provided, `mode="single"` falls back to a built-in `dd.MM.yyyy` parser and stays typeable. `mode="multiple"` and `mode="range"` cannot be parsed automatically, so their input is read-only and dates are selected via the calendar only. */
  parseDate?: (value: string) => Date | Date[] | DateRange | undefined;
  /** Initial month to display when the calendar is opened. If not provided, defaults to the month of the currently selected date or the current month if no date is selected. */
  initialMonth?: Date;
  /** When `true`, the date field is marked as required, and the calendar will enforce that a date is selected before allowing the user to close it. Default is `false`. */
  required?: boolean;
  /** How the month/year selector in the calendar header is rendered. Forwarded to the internal `Calendar` / `CalendarHeader`. - `'dropdown'` (default) — each picker is a `<Select>` dropdown. - `'grid'` — each picker opens a full grid of options. - `'static'` — the month/year is a plain, non-clickable label; only the prev/next navigation buttons can change the month (disables month/year selection). */
  monthYearSelectType?: 'dropdown' | 'grid' | 'static';
  /** Optional per-day status forwarded to the calendar. Return a `{ type, label }` to overlay a `StatusIndicator` dot on that day (the `label` is folded into the day's `aria-label`), or `null` / `undefined` for no status. */
  dayStatus?: DayStatusFn;
  /** Earliest year offered in the calendar header's year dropdown. */
  minYear?: number;
  /** Latest year offered in the calendar header's year dropdown. */
  maxYear?: number;
  /** Show or hide the calendar header's previous/next navigation. When hidden, the month/year header also becomes a static, non-interactive label (no dropdown / grid jumping) — so the calendar is locked to the visible month(s): a clean "pick from these" view for a fixed month or range. */
  showNavigation?: boolean;
  /** **Selection granularity** — controls the level at which a click finalises the date selection rather than drilling further into days. Use a coarser level when the consumer only needs to pick a year or a month. - `'years'` — clicking a year selects Jan 1 of that year and closes; the calendar opens on the year grid. - `'months'` — clicking a month selects the first day of that month; the calendar opens on the month grid. - `'days'` (default) — full day-level selection; the calendar opens on the day grid as usual. Distinct from the *currently visible* grid — that's managed internally and flips as the user navigates between year / month / day. This prop is the lowest level the user can drill down to before a click commits. */
  selectionLevel?: CalendarView;
  /** **Initial grid** the calendar opens on, independent of `selectionLevel`. Use it to start the user on the year / month grid for fast year-first navigation while still letting them drill down and commit at the `selectionLevel` (e.g. `initialView="years"` with the default `selectionLevel="days"` opens the year grid → month grid → day grid). Pair with `monthYearSelectType="grid"` so the navigation stays grid-based. */
  initialView?: CalendarView;
  /** The locale object for the calendar, used by React DayPicker. Defaults to Estonian locale. */
  locale?: Locale;
  /** The locale code string used for date formatting. Defaults to 'et-EE'. */
  localeCode?: string;
  /** When `true`, the calendar popover will automatically close after a date is selected. Default behavior is to close on select only in 'single' mode. You can override this behavior by explicitly setting this prop to `true` or `false`. */
  closeOnSelect?: boolean;
  /** Custom footer content to display at the bottom of the calendar popover. Can be used to add action buttons or additional information. The footer will be rendered inside the calendar popover, below the calendar grid. */
  footer?: React.ReactNode;
  /** Initial value for uncontrolled usage */
  defaultValue?: Date | Date[] | DateRange;
  /** Minimum selectable date. Dates before this will be disabled. If you want to disable past dates, you can also use the `disablePast` boolean prop. */
  minDate?: Date;
  /** Maximum selectable date. Dates after this will be disabled. If you want to disable future dates, you can also use the `disableFuture` boolean prop. */
  maxDate?: Date;
  /** Disable all past dates. Dates before the current date will be disabled. */
  disablePast?: boolean;
  /** Disable all future dates. Dates after the current date will be disabled. */
  disableFuture?: boolean;
  /** Disable specific months dynamically. Receives a month `Date` object and should return `true` if that month should be disabled. */
  shouldDisableMonth?: (month: Date) => boolean;
  /** Disable specific years dynamically. Receives a year `Date` object and should return `true` if that year should be disabled. */
  shouldDisableYear?: (year: Date) => boolean;
  /** When `true`, the input field will be read-only, preventing manual text input. The calendar can still be opened and used for date selection. This is useful when you want to allow date selection only through the calendar picker and not allow users to type in dates manually. */
  readOnly?: boolean;
  /** Specify available days. Can be an array of `Date` objects or a function that receives a date and returns `true` if that date is available. This is useful for highlighting specific dates as available while keeping other dates enabled. */
  availableDays?: Date[] | ((date: Date) => boolean);
  /** Props to pass down to the underlying TextField (in 'single' mode) or MultiValueField (in 'multiple' mode). This allows for additional customization of the input field, such as adding custom styles, attributes, or event handlers. */
  inputProps?: DateTextFieldProps | DateMultiValueFieldProps;
  /** Layout for the selected-date tags in `'multiple'` mode. - `'stack'` (default) — tags wrap onto multiple rows; the field grows in height. - `'row'` — tags stay on a single row; any that don't fit collapse into a `+N` counter (measured from the available width). */
  tagsDirection?: 'stack' | 'row';
  /** Open the calendar inside a modal instead of a floating popover. Useful on narrow viewports where a popover overlaps the input itself. Mirrors `TimeField`'s `modal` prop. - `true` always opens in a modal - `false` (default) always uses the popover - A breakpoint name (e.g. `'md'`) opens in a modal *below* that breakpoint and falls back to the popover from that breakpoint up Ignored when `useNativePicker` resolves to `true` (the native picker is already handled by the OS). */
  modal?: DateFieldModal;
  /** Extra props forwarded to the calendar modal's `Modal.Content` — e.g. `size`, `width`, `maxWidth`, `position`, `fullscreen`, and per-breakpoint overrides. Lets the consumer tune the modal beyond its responsive-width defaults. `className` is merged with the component's own (so the internal layout is preserved). Only applies when the calendar opens as a modal. */
  modalProps?: Omit<ModalContentProps, 'children'>;
  /** Heading shown at the top of the calendar modal. Falls back to the `date-field.modal-title` label. Handy for month/year-only pickers (e.g. `"Vali kuu"` / `"Vali aasta"`). Only applies when the calendar opens as a modal. */
  modalTitle?: string;
  /** Error message rendered below the input when the user types a date that matches one of the disable matchers (`disablePast`, `disableFuture`, `minDate`, `maxDate`, `disabledMatchers`, or the deprecated `disabled` overload). Falls back to the localised `dateField.disabledDateError` label. */
  disabledDateErrorMessage?: string;
  /** Error message rendered below the input when the typed text cannot be parsed into a valid date for the current `mode`. Validation runs on blur so partially-typed input isn't flagged mid-typing. Falls back to the localised `dateField.invalidDateError` label. */
  invalidDateErrorMessage?: string;
  /** Whether the calendar popover is interactive. */
  enableCalendar?: boolean;
  /** What opens the calendar — only the icon (`'button'`) or anywhere in the input (`'input'`). */
  calendarTrigger?: DateFieldCalendarTrigger;
  /** Swap the custom calendar for the browser's native `<input type="date">`. Only applies to `mode='single'`. */
  useNativePicker?: boolean;
  /** Number of months shown side-by-side. In the **popover** on mobile (`< md`) values > 1 are clamped to 1 — a multi-month popover gets unscrollable on a phone viewport. In a **modal** the count is kept: the months wrap to a vertical stack and the modal body scrolls. */
  numberOfMonths?: number;
  /** Whether the field shows a clear button to reset the value. Disable it when the field is required or the value should not be cleared. */
  clearable?: boolean;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<DateFieldBreakpointProps>;
  md?: Partial<DateFieldBreakpointProps>;
  lg?: Partial<DateFieldBreakpointProps>;
  xl?: Partial<DateFieldBreakpointProps>;
  xxl?: Partial<DateFieldBreakpointProps>;
}
// Also accepts 69 standard React / HTML attributes of its root element.

// Referenced types, resolved one level deep (see the story source for the rest).
interface TextFieldProps extends BreakpointSupport<TextFieldBreakpointProps>, Omit<FormLabelProps, 'size' | 'id' | 'label'> {
    /**
     * Unique identifier for the text field.
     *
     * Required for accessibility (associates label, helper text, and input).
     * Also used to generate `aria-describedby` and helper IDs automatically.
     */
    id?: string;
    /**
     * The text or React node that serves as the label for the text field.
     * If `hideLabel` is `true`, the label will be visually hidden but still accessible to screen readers.
     * If `hideLabel` is `'keep-space'`, the label will be hidden but the space it occupies will be preserved.
     */
    label?: React.ReactNode;
    /**
     * Name attribute for the underlying input/textarea element.
     *
     * Important for form submission and integration with form libraries (React Hook Form, Formik, etc.).
     */
    name?: string;
    /**
     * Custom CSS class applied directly to the `<input>` or `<textarea>` element (via the internal `Field` component).
     *
     * Use this when you need to style the input itself (e.g. text alignment, font, custom focus styles).
     *
     * Note: The root container uses `className`.
     */
    inputClassName?: string;
    /**
     * Callback fired when the value changes. Receives the new value as a plain string.
     *
     * Preferred for most use cases (simpler than `onChangeEvent`).
     *
     * @param value - The current value of the field after change
     */
    onChange?: (value: string) => void;
    /**
     * Native `onChange` event handler.
     *
     * Gives you access to the full `ChangeEvent` object (useful if you need `event.target`, `event.preventDefault()`, etc.).
     *
     * Note: Both `onChange` and `onChangeEvent` are called when the value changes.
     */
    onChangeEvent?: React.ChangeEventHandler<FieldElement>;
    /**
     * Keyboard event handlers attached to the inner wrapper `<div>`.
     *
     * Useful for handling Enter key submission, arrow key navigation, or custom keyboard shortcuts.
     *
     * Note: These are **not** attached to the input/textarea directly, but to the surrounding container.
     */
    onKeyPress?: React.KeyboardEventHandler<HTMLDivElement>;
    /**
     * Key-down handler attached to the field's surrounding container (not the input directly).
     */
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
    /**
     * Key-up handler attached to the field's surrounding container (not the input directly).
     */
    onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
    /**
     * Default value for **uncontrolled** usage.
     *
     * Use this when you don't want to manage state yourself.
     * The component will manage its internal state.
     */
    defaultValue?: string;
    /**
     * Controlled value of the text field.
     *
     * When provided, the component becomes **fully controlled**.
     * You must update this value via `onChange` to reflect user input.
     */
    value?: string;
    /**
     * Called when the user clicks on the icon (only works if `icon` is provided).
     *
     * The icon is automatically wrapped in a `<button>` when this prop is present.
     *
     * @param event - Mouse event from the icon wrapper
     */
    onIconClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
    /**
     * Extra HTML attributes spread on the icon `<button>` element.
     *
     * Use this to wire ARIA state (e.g. `aria-expanded`, `aria-controls`,
     * `aria-haspopup`) directly to the icon trigger, so screen readers announce
     * disclosure state correctly when the icon opens a popover / dialog.
     *
     * Only applied when `onIconClick` is set (i.e. the icon is rendered as a
     * `<button>`).
     */
    iconButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    /**
     * Click handler for the entire inner container (the area around the input).
     *
     * Can be used to focus the input when clicking anywhere in the field area,
     * or to trigger custom behavior.
     */
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    /**
     * Disables the entire text field.
     *
     * When `true`:
     * - Input becomes non-editable and non-focusable
     * - Clear button is hidden and icon is disabled
     * - Visual disabled styles are applied
     */
    disabled?: boolean;
    /**
     * Marks the field as invalid and triggers error styling.
     *
     * Also affects `aria-invalid` attribute.
     *
     * Note: The `helper` prop can override this if it contains items with `type: 'error'`.
     */
    invalid?: boolean;
    /**
     * Makes the field read-only.
     *
     * User can focus and select text, but cannot modify the value.
     * Useful for pre-filled data that should not be changed. Hides the clear button.
     */
    readOnly?: boolean;
    /**
     * Helper text, success message, or error message displayed below the field.
     *
     * Accepts either:
     * - A single `FeedbackTextProps` object
     * - An array of `FeedbackTextProps` (useful for multiple messages or mixed error/success states)
     *
     * The component automatically detects error states from helper items.
     */
    helper?: FeedbackTextProps | FeedbackTextProps[];
    /**
     * Fired when the input/textarea receives focus.
     */
    onFocus?: React.FocusEventHandler<FieldElement>;
    /**
     * Fired when the input/textarea loses focus.
     */
    onBlur?: React.FocusEventHandler<FieldElement>;
    /**
     * Hides the spinner/arrows for number inputs (`type="number"`).
     *
     * Only has effect when the underlying input has `type="number"`.
     *
     * @default true
     */
    isArrowsHidden?: boolean;
    /**
     * Callback fired when the clear button (×) is clicked.
     *
     * Useful if you need to perform additional actions besides clearing the value
     * (e.g. analytics, resetting related fields, etc.).
     *
     * Note: The field value is automatically cleared regardless of this callback.
     */
    onClear?: () => void;
    /**
     * Additional attributes for the input element.
     */
    input?: React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    /**
     * Optional start slot element to render inside the input container, before the input field.
     */
    startSlot?: React.ReactNode;
    /**
     * Optional end slot element to render inside the input container, after the input field.
     */
    endSlot?: React.ReactNode;
}
type DateFieldMode = 'single' | 'multiple' | 'range';
type DayStatusFn = (date: Date) => DayStatus | null | undefined;
type CalendarView = 'days' | 'months' | 'years';
type DateTextFieldProps = Omit<TextFieldProps, 'label' | 'id'>;
type DateMultiValueFieldProps = Omit<MultiValueFieldProps, 'label' | 'id'>;
type DateFieldModal = boolean | Exclude<Breakpoint, 'xs'>;
interface ModalContentProps extends BreakpointSupport<ModalContentBreakpointProps> {
    /**
     * `<Modal.Header>`, `<Modal.Body>`, `<Modal.Footer>` and any other content.
     */
    children: ReactNode;
    /**
     * Size density — controls header/body/footer padding.
     * @default default
     */
    size?: ModalSize;
    /**
     * Where overflow scrolls. `'content'` keeps the modal frame fixed and scrolls the body;
     * `'page'` lets the modal grow with content and scrolls the overlay around it.
     * @default content
     */
    scrollBehavior?: ModalScrollBehavior;
    /**
     * Trap focus inside the modal while open.
     * @default true
     */
    trapFocus?: boolean;
    /**
     * Restore focus to the trigger after closing.
     * @default true
     */
    returnFocus?: boolean;
    /**
     * Render the dimmed backdrop. `false` keeps portal + focus management but no overlay.
     * @default true
     */
    showOverlay?: boolean;
    /**
     * Lock background scroll while open.
     * @default true
     */
    lockScroll?: boolean;
    /**
     * Render visually-hidden dismiss buttons at the start and end of the dialog
     * so touch screen-readers can escape without an Escape key.
     * @default false
     */
    visuallyHiddenDismiss?: boolean;
    /**
     * Override the dialog's labelling element. Only needed when the label lives
     * outside `<Modal.Header>` — the header wires this automatically.
     */
    'aria-labelledby'?: string;
    /**
     * Override the dialog's describing element. Only needed when the description
     * lives outside `<Modal.Header>` — the header wires this automatically.
     */
    'aria-describedby'?: string;
    /**
     * Plain-text accessible name. Use when there's no visible title (icon-only
     * confirmation, etc.). Ignored when `aria-labelledby` is set.
     */
    'aria-label'?: string;
    /**
     * Element to focus on open. Tabbable index (`0` = first tabbable, `-1` = dialog
     * container) or a ref. Override the default to focus a "Cancel" button on
     * destructive prompts, or the first input on form-heavy modals.
     */
    initialFocus?: ComponentProps<typeof FloatingFocusManager>['initialFocus'];
    /**
     * Additional class name on the modal container.
     */
    className?: string;
}
type DateFieldCalendarTrigger = 'input' | 'button';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type DateFieldBreakpointProps = {
    /**
     * Whether the calendar popover is interactive.
     * @default true
     */
    enableCalendar?: boolean;
    /**
     * What opens the calendar — only the icon (`'button'`) or anywhere in the input (`'input'`).
     * @default button
     */
    calendarTrigger?: DateFieldCalendarTrigger;
    /**
     * Swap the custom calendar for the browser's native `<input type="date">`.
     * Only applies to `mode='single'`.
     * @default false
     */
    useNativePicker?: boolean;
    /**
     * Number of months shown side-by-side. In the **popover** on mobile (`< md`) values > 1 are
     * clamped to 1 — a multi-month popover gets unscrollable on a phone viewport. In a **modal** the
     * count is kept: the months wrap to a vertical stack and the modal body scrolls.
     */
    numberOfMonths?: number;
    /**
     * Whether the field shows a clear button to reset the value. Disable it
     * when the field is required or the value should not be cleared.
     * @default true
     */
    clearable?: boolean;
};

// ---- DateTimeField (components/DateTimeField/DateTimeField.d.ts) ----
import * as React from 'react';

/**
 * DateTimeField from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/date-time-field/date-time-field.stories.tsx).
 */
export interface DateTimeFieldProps {
  /** Unique identifier for the input field. */
  id: string;
  /** Field label. Required for accessibility. */
  label: string;
  /** Props forwarded to the field's label (e.g. `{ modifiers: 'nowrap' }` to control how a long label wraps). Breakpoint keys are supported for responsive wrapping. */
  labelProps?: TextFieldProps['labelProps'];
  /** Placeholder shown in the input when no value is selected. */
  placeholder?: string;
  /** Additional class on the container. */
  className?: string;
  /** Selection mode. - `'single'` (default) — one combined `Date` value. - `'range'` — pair of `from` / `to` `Date` values, each carrying their own time. Renders a 2-month calendar and two time pickers (one for `from`, one for `to`) stacked underneath. */
  mode?: DateTimeFieldMode;
  /** Controlled value. Type depends on `mode`: - `mode='single'` → `Date | undefined` - `mode='range'` → `DateTimeRange | undefined` (`{ from, to }`) */
  value?: DateTimeFieldValue;
  /** Initial value for uncontrolled usage. Ignored when `value` is provided. */
  defaultValue?: DateTimeFieldValue;
  /** Fires whenever the user picks a date or a time. The argument shape matches `mode`: `Date | undefined` for `'single'`, `DateTimeRange | undefined` for `'range'`. */
  onChange?: (value: DateTimeFieldValue | undefined) => void;
  /** Marks the field as required. */
  required?: boolean;
  /** When `true`, the input is read-only — typing is disabled, but the picker can still be opened. */
  readOnly?: boolean;
  /** Disables the input and the picker. */
  disabled?: boolean;
  /** Minimum selectable date. Dates before this are disabled in the calendar. */
  minDate?: Date;
  /** Maximum selectable date. Dates after this are disabled in the calendar. */
  maxDate?: Date;
  /** Disables every date strictly before today. */
  disablePast?: boolean;
  /** Disables every date strictly after today. */
  disableFuture?: boolean;
  /** Disable specific dates via react-day-picker matchers. Layered on top of the `minDate` / `maxDate` / `disablePast` / `disableFuture` shortcuts — use this for free-form matchers like "every Sunday" or "specific blacklisted dates". Mirrors the `disabledMatchers` prop on `DateField`. */
  disabledMatchers?: Matcher | Matcher[];
  /** Step interval (minutes) for the time-wheel picker. Ignored when `availableTimes` is set. */
  stepMinutes?: number;
  /** Initial month displayed when the calendar opens. Defaults to the month of the current value, or the current month if no value. */
  initialMonth?: Date;
  /** Locale object used by react-day-picker for the calendar grid. */
  locale?: Locale;
  /** Locale code used for the displayed date format. */
  localeCode?: string;
  /** Label of the "Select time" footer button under the calendar in the multi-step layout. Falls back to the localised `dateTimeField.selectTime` label. */
  selectTimeLabel?: string;
  /** Label of the "Back" link shown above the time picker in the multi-step layout. Falls back to the localised `dateTimeField.back` label. */
  backLabel?: string;
  /** Lowest calendar drill-down level the user can pick from before the value commits. `'days'` (default) requires drilling all the way down to a day; `'months'` commits as soon as a month is picked; `'years'` commits on year selection. Only meaningful when `monthYearSelectType='grid'`. */
  selectionLevel?: CalendarView;
  /** Earliest year offered in the calendar header's year dropdown. */
  minYear?: number;
  /** Latest year offered in the calendar header's year dropdown. */
  maxYear?: number;
  /** Forwarded to the underlying `TextField`. `id`, `label`, `value`, and `onChange` are owned by `DateTimeField`. */
  inputProps?: Omit<TextFieldProps, 'id' | 'label' | 'value' | 'onChange'>;
  /** Error message rendered below the input when the user types a date that fails the disable matchers (`disablePast`, `disableFuture`, `minDate`, `maxDate`, `disabledMatchers`). Falls back to the localised `dateField.disabledDateError` label. */
  disabledDateErrorMessage?: string;
  /** When `true`, renders an `<input type="datetime-local">` and skips the custom popover entirely — the browser's built-in date/time picker is shown when the calendar icon is clicked. Has no effect when `mode='range'` (native datetime-local has no range counterpart). */
  useNativePicker?: boolean;
  /** Whether the field shows a clear button to reset the value. Disable it when the field is required or the value should not be cleared. */
  clearable?: boolean;
  /** Layout of the date-and-time popover. `mode='range'` always uses `'side-by-side'` regardless of this value — the range UI needs the calendar and both `from` / `to` time pickers visible at once. */
  layout?: DateTimeFieldLayout;
  /** Predefined time slots, each in `"HH:mm"` format. When provided, the time step renders a grid of slots instead of the scroll-wheel picker. Accepts either: - a static array — the same slot list for every date, - or a function `(date: Date) => string[]` evaluated per render with the currently-selected date. Use the function form when slots depend on the picked date (e.g. clinic appointments where Tuesdays differ from Wednesdays). In `mode='range'` the function is called twice: once with `rangeValue.from` for the `from` time picker, once with `rangeValue.to` for the `to` time picker. When no date is picked yet the function is called with today's date as a fallback. Returning an empty array currently falls back to the wheel picker — if you need a dedicated "no times available" UX, render it from the consumer side via `onChange` / `value` state for now. */
  availableTimes?: string[] | ((date: Date) => string[]);
  /** Layout variant for the time grid when `availableTimes` is set. Defaults differ per layout: `'button'` for `side-by-side`, `'radio'` for `multi-step`. */
  timeGridVariant?: 'button' | 'radio';
  /** How the month/year selector in the calendar header is rendered. */
  monthYearSelectType?: 'dropdown' | 'grid';
  /** Show days from adjacent months in the calendar grid. */
  showOutsideDays?: boolean;
  /** Heading rendered above the time picker in the side-by-side layout. Falls back to the localised `dateTimeField.timeHeading` label. */
  timeHeading?: React.ReactNode;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<DateTimeFieldBreakpointProps>;
  md?: Partial<DateTimeFieldBreakpointProps>;
  lg?: Partial<DateTimeFieldBreakpointProps>;
  xl?: Partial<DateTimeFieldBreakpointProps>;
  xxl?: Partial<DateTimeFieldBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface TextFieldProps extends BreakpointSupport<TextFieldBreakpointProps>, Omit<FormLabelProps, 'size' | 'id' | 'label'> {
    /**
     * Unique identifier for the text field.
     *
     * Required for accessibility (associates label, helper text, and input).
     * Also used to generate `aria-describedby` and helper IDs automatically.
     */
    id?: string;
    /**
     * The text or React node that serves as the label for the text field.
     * If `hideLabel` is `true`, the label will be visually hidden but still accessible to screen readers.
     * If `hideLabel` is `'keep-space'`, the label will be hidden but the space it occupies will be preserved.
     */
    label?: React.ReactNode;
    /**
     * Name attribute for the underlying input/textarea element.
     *
     * Important for form submission and integration with form libraries (React Hook Form, Formik, etc.).
     */
    name?: string;
    /**
     * Custom CSS class applied directly to the `<input>` or `<textarea>` element (via the internal `Field` component).
     *
     * Use this when you need to style the input itself (e.g. text alignment, font, custom focus styles).
     *
     * Note: The root container uses `className`.
     */
    inputClassName?: string;
    /**
     * Callback fired when the value changes. Receives the new value as a plain string.
     *
     * Preferred for most use cases (simpler than `onChangeEvent`).
     *
     * @param value - The current value of the field after change
     */
    onChange?: (value: string) => void;
    /**
     * Native `onChange` event handler.
     *
     * Gives you access to the full `ChangeEvent` object (useful if you need `event.target`, `event.preventDefault()`, etc.).
     *
     * Note: Both `onChange` and `onChangeEvent` are called when the value changes.
     */
    onChangeEvent?: React.ChangeEventHandler<FieldElement>;
    /**
     * Keyboard event handlers attached to the inner wrapper `<div>`.
     *
     * Useful for handling Enter key submission, arrow key navigation, or custom keyboard shortcuts.
     *
     * Note: These are **not** attached to the input/textarea directly, but to the surrounding container.
     */
    onKeyPress?: React.KeyboardEventHandler<HTMLDivElement>;
    /**
     * Key-down handler attached to the field's surrounding container (not the input directly).
     */
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
    /**
     * Key-up handler attached to the field's surrounding container (not the input directly).
     */
    onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
    /**
     * Default value for **uncontrolled** usage.
     *
     * Use this when you don't want to manage state yourself.
     * The component will manage its internal state.
     */
    defaultValue?: string;
    /**
     * Controlled value of the text field.
     *
     * When provided, the component becomes **fully controlled**.
     * You must update this value via `onChange` to reflect user input.
     */
    value?: string;
    /**
     * Called when the user clicks on the icon (only works if `icon` is provided).
     *
     * The icon is automatically wrapped in a `<button>` when this prop is present.
     *
     * @param event - Mouse event from the icon wrapper
     */
    onIconClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
    /**
     * Extra HTML attributes spread on the icon `<button>` element.
     *
     * Use this to wire ARIA state (e.g. `aria-expanded`, `aria-controls`,
     * `aria-haspopup`) directly to the icon trigger, so screen readers announce
     * disclosure state correctly when the icon opens a popover / dialog.
     *
     * Only applied when `onIconClick` is set (i.e. the icon is rendered as a
     * `<button>`).
     */
    iconButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    /**
     * Click handler for the entire inner container (the area around the input).
     *
     * Can be used to focus the input when clicking anywhere in the field area,
     * or to trigger custom behavior.
     */
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    /**
     * Disables the entire text field.
     *
     * When `true`:
     * - Input becomes non-editable and non-focusable
     * - Clear button is hidden and icon is disabled
     * - Visual disabled styles are applied
     */
    disabled?: boolean;
    /**
     * Marks the field as invalid and triggers error styling.
     *
     * Also affects `aria-invalid` attribute.
     *
     * Note: The `helper` prop can override this if it contains items with `type: 'error'`.
     */
    invalid?: boolean;
    /**
     * Makes the field read-only.
     *
     * User can focus and select text, but cannot modify the value.
     * Useful for pre-filled data that should not be changed. Hides the clear button.
     */
    readOnly?: boolean;
    /**
     * Helper text, success message, or error message displayed below the field.
     *
     * Accepts either:
     * - A single `FeedbackTextProps` object
     * - An array of `FeedbackTextProps` (useful for multiple messages or mixed error/success states)
     *
     * The component automatically detects error states from helper items.
     */
    helper?: FeedbackTextProps | FeedbackTextProps[];
    /**
     * Fired when the input/textarea receives focus.
     */
    onFocus?: React.FocusEventHandler<FieldElement>;
    /**
     * Fired when the input/textarea loses focus.
     */
    onBlur?: React.FocusEventHandler<FieldElement>;
    /**
     * Hides the spinner/arrows for number inputs (`type="number"`).
     *
     * Only has effect when the underlying input has `type="number"`.
     *
     * @default true
     */
    isArrowsHidden?: boolean;
    /**
     * Callback fired when the clear button (×) is clicked.
     *
     * Useful if you need to perform additional actions besides clearing the value
     * (e.g. analytics, resetting related fields, etc.).
     *
     * Note: The field value is automatically cleared regardless of this callback.
     */
    onClear?: () => void;
    /**
     * Additional attributes for the input element.
     */
    input?: React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    /**
     * Optional start slot element to render inside the input container, before the input field.
     */
    startSlot?: React.ReactNode;
    /**
     * Optional end slot element to render inside the input container, after the input field.
     */
    endSlot?: React.ReactNode;
}
type DateTimeFieldMode = 'single' | 'range';
type DateTimeFieldValue = Date | DateTimeRange;
type CalendarView = 'days' | 'months' | 'years';
type DateTimeFieldLayout = 'side-by-side' | 'multi-step';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type DateTimeFieldBreakpointProps = {
    /**
     * When `true`, renders an `<input type="datetime-local">` and skips the
     * custom popover entirely — the browser's built-in date/time picker is
     * shown when the calendar icon is clicked. Has no effect when
     * `mode='range'` (native datetime-local has no range counterpart).
     * @default false
     */
    useNativePicker?: boolean;
    /**
     * Whether the field shows a clear button to reset the value. Disable it
     * when the field is required or the value should not be cleared.
     * @default true
     */
    clearable?: boolean;
    /**
     * Layout of the date-and-time popover. `mode='range'` always uses
     * `'side-by-side'` regardless of this value — the range UI needs the
     * calendar and both `from` / `to` time pickers visible at once.
     * @default side-by-side
     */
    layout?: DateTimeFieldLayout;
    /**
     * Predefined time slots, each in `"HH:mm"` format. When provided, the
     * time step renders a grid of slots instead of the scroll-wheel picker.
     *
     * Accepts either:
     * - a static array — the same slot list for every date,
     * - or a function `(date: Date) => string[]` evaluated per render with the
     *   currently-selected date. Use the function form when slots depend on
     *   the picked date (e.g. clinic appointments where Tuesdays differ from
     *   Wednesdays). In `mode='range'` the function is called twice: once
     *   with `rangeValue.from` for the `from` time picker, once with
     *   `rangeValue.to` for the `to` time picker. When no date is picked yet
     *   the function is called with today's date as a fallback.
     *
     * Returning an empty array currently falls back to the wheel picker —
     * if you need a dedicated "no times available" UX, render it from the
     * consumer side via `onChange` / `value` state for now.
     */
    availableTimes?: string[] | ((date: Date) => string[]);
    /**
     * Layout variant for the time grid when `availableTimes` is set.
     * Defaults differ per layout: `'button'` for `side-by-side`, `'radio'`
     * for `multi-step`.
     */
    timeGridVariant?: 'button' | 'radio';
    /**
     * How the month/year selector in the calendar header is rendered.
     * @default dropdown
     */
    monthYearSelectType?: 'dropdown' | 'grid';
    /**
     * Show days from adjacent months in the calendar grid.
     * @default true
     */
    showOutsideDays?: boolean;
    /**
     * Heading rendered above the time picker in the side-by-side layout.
     * Falls back to the localised `dateTimeField.timeHeading` label.
     */
    timeHeading?: React.ReactNode;
};

// ---- FeedbackText (components/FeedbackText/FeedbackText.d.ts) ----
import * as React from 'react';

/**
 * FeedbackText from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/feedback-text/feedback-text.stories.tsx).
 */
export interface FeedbackTextProps {
  /** Helper text */
  text: React.ReactNode | React.ReactNode[];
  /** ID to reference the helper from aria-describedby attributes. If omitted, then the id might be set through a parent component. */
  id?: string;
  /** Additional custom class. */
  className?: string;
  /** Type of form-helper. */
  type?: FeedbackTextType;
  /** Position of the helper. */
  position?: FeedbackTextPosition;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type FeedbackTextType = 'hint' | 'valid' | 'error';
type FeedbackTextPosition = 'left' | 'right';

// ---- Field (components/Field/Field.d.ts) ----
import * as React from 'react';

/**
 * Field from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/field/field.stories.tsx).
 */
export interface FieldProps {
  /** Unique identifier for the field element. */
  id?: string;
  /** Name attribute used in forms and form submissions. */
  name?: string;
  /** Controlled value of the field. */
  value?: string;
  /** The type of the input element (e.g. 'text', 'email', 'password', 'number', 'tel', 'url', etc.). **Note**: This prop is ignored when `isTextArea={true}`. */
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  /** Default value for uncontrolled usage. */
  defaultValue?: string;
  /** Callback fired when value changes (returns string value only). */
  onChange?: (value: string) => void;
  /** Native change event callback (full event access). */
  onChangeEvent?: React.ChangeEventHandler<FieldElement>;
  /** Disables the field and prevents user interaction. */
  disabled?: boolean;
  /** Makes the field read-only (user cannot edit but can focus/select). */
  readOnly?: boolean;
  /** Marks the field as required in form validation. */
  required?: boolean;
  /** Marks the field visually and semantically as invalid. */
  invalid?: boolean;
  /** Placeholder text displayed when the field is empty. */
  placeholder?: string;
  /** Custom CSS class for the input/textarea element. */
  className?: string;
  /** ARIA description reference (used for helper/error text association). */
  "aria-describedby"?: string;
  /** Accessible label for screen readers when no visible label exists. */
  "aria-label"?: string;
  /** Focus event handler. */
  onFocus?: React.FocusEventHandler<FieldElement>;
  /** Blur event handler. */
  onBlur?: React.FocusEventHandler<FieldElement>;
  /** Renders a textarea instead of an input element. */
  isTextArea?: boolean;
  /** Native input element props override (input only). */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  /** Native textarea element props override (textarea only). */
  textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type FieldElement = HTMLInputElement | HTMLTextAreaElement;

// ---- FileDropzone (components/FileDropzone/FileDropzone.d.ts) ----
import * as React from 'react';

/**
 * FileDropzone from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/file-dropzone/file-dropzone.stories.tsx).
 */
export interface FileDropzoneProps {
  /** Unique identifier for the underlying file input. Auto-generated when omitted. */
  id?: string;
  /** Additional CSS class names to apply to the dropzone for custom styling */
  className?: string;
  /** The name attribute for the file input, used for form submission and identifying the field. */
  name: string;
  /** Marks the field as required — adds the required indicator to the label. */
  required?: boolean;
  /** The text label displayed for the file dropzone, providing context for users. Defaults to the `LabelProvider`'s localised `file-dropzone.label` (e.g. "Lohista failid siia või klõpsa failide valimiseks" in Estonian). */
  label?: string;
  /** Provides helper text or feedback (such as an error or instruction message) to guide the user. */
  helper?: FeedbackTextProps;
  /** Disables the file dropzone, preventing user interaction. */
  disabled?: boolean;
  /** Overrides forwarded to each rendered `Attachment` (e.g. `icon`, `fileSize`, `progress`, `feedback`). Pass a function to vary per file. `FileDropzone` sets `name`, `isValid` and `isLoading` itself, and always appends a remove button to the `actions` slot (after any `actions` you provide here). */
  attachmentProps?: FileDropzoneAttachmentProps;
  /** Specifies the allowed file types (e.g., "image/png, image/jpeg"). */
  accept?: string;
  /** The maximum file size allowed for upload, in bytes (e.g. `5 * 1024 ** 2` for 5 MB). */
  maxSize?: number;
  /** Determines if multiple files can be uploaded at once. */
  multiple?: boolean;
  /** When `true`, files that fail validation (wrong type or over `maxSize`) stay in the list marked invalid instead of being discarded, so the failing file is shown under the dropzone; when `false`, only valid files are added. Applies to both single and multiple uploads; files are validated individually either way. */
  keepRejectedFiles?: boolean;
  /** An array of default files that are preloaded in the upload list. */
  defaultFiles?: FileUploadFile[];
  /** Callback function triggered when files are added or changed. */
  onChange?: (files: FileUploadFile[]) => void;
  /** Callback function triggered when a file is removed. */
  onDelete?: (file: FileUploadFile) => void;
  /** An optional array of files to be used in controlled mode. When provided, the hook uses this array as the source of truth for the file list instead of its internal state. The parent component is responsible for updating this prop in response to the `onChange` callback. If not provided, the hook operates in uncontrolled mode, managing its own internal file state via `defaultFiles` and user interactions. */
  files?: FileUploadFile[];
  /** How long (ms) the announcement message should be visible. */
  announcementTimeout?: number;
  /** Whether to show the auto-generated restrictions hint (allowed types / max size) below the field. Turn it off when the same information is presented elsewhere (e.g. a `tooltip`) to avoid a visible duplicate — rejection error messages are unaffected and still render. */
  showRestrictions?: boolean;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface FeedbackTextProps {
    /**
     * Helper text
     */
    text: React.ReactNode | React.ReactNode[];
    /**
     * ID to reference the helper from aria-describedby attributes.
     * If omitted, then the id might be set through a parent component.
     */
    id?: string;
    /**
     * Additional custom class.
     */
    className?: string;
    /**
     * Type of form-helper.
     * @default hint
     */
    type?: FeedbackTextType;
    /**
     * Position of the helper.
     * @default left
     */
    position?: FeedbackTextPosition;
}
type FileDropzoneAttachmentProps = Partial<Omit<AttachmentProps, 'name'>> | ((file: FileUploadFile) => Partial<Omit<AttachmentProps, 'name'>>);
interface FileUploadFile extends Partial<File> {
    /**
     * A unique identifier for the file, useful for tracking files in a list.
     */
    id?: string;
    /**
     * Indicates if the file is currently being uploaded.
     */
    isLoading?: boolean;
    /**
     * Specifies whether the file passed validation checks (e.g., size, extension).
     */
    isValid?: boolean;
}

// ---- FileUpload (components/FileUpload/FileUpload.d.ts) ----
import * as React from 'react';

/**
 * FileUpload from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/file-upload/file-upload.stories.tsx).
 */
export interface FileUploadProps {
  /** Unique HTML id for the file input, also used to associate the label and helper/error text for accessibility. When omitted, falls back to the surrounding `InputGroup`'s id or a generated one. */
  id?: string;
  /** Visible label for the field. May be omitted when the surrounding `InputGroup` provides its own label. */
  label?: string;
  /** Additional class names appended to the inner dropzone element (`tedi-file-upload`) — the content area that holds the file list and the upload button. Use this to tweak the dropzone itself (border, padding, background) without affecting the surrounding container. */
  className?: string;
  /** Additional class names appended to the outer container element (`tedi-file-upload__container`) that wraps the dropzone, file list, and helper/error states. Use this to tweak the component's outer shell (radius, outline, max-width) or to override size/state modifiers. */
  wrapperClassName?: string;
  /** The name of the file input field, used for form submission and accessibility. */
  name: string;
  /** A helper text or error message to display below the file upload field. */
  helper?: FeedbackTextProps;
  /** Specifies the allowed file types (e.g., "image/png, image/jpeg"). */
  accept?: string;
  /** Allows multiple file selection if `true`. Defaults to `false`. */
  multiple?: boolean;
  /** Callback function triggered when files are added or changed. */
  onChange?: (files: FileUploadFile[]) => void;
  /** An array of preloaded files that appear in the upload field by default. */
  defaultFiles?: FileUploadFile[];
  /** Callback function triggered when a file is removed. */
  onDelete?: (file: FileUploadFile) => void;
  /** Determines whether a "Clear" button is shown to remove all files. */
  hasClearButton?: boolean;
  /** A controlled list of uploaded files. If provided, `onChange` should be used to update them. */
  files?: FileUploadFile[];
  /** If `true`, prevents file selection and removal, making the field read-only. */
  readOnly?: boolean;
  /** Disables the file upload field, preventing interactions. */
  disabled?: boolean;
  /** Maximum allowed file size in bytes (e.g. `5 * 1024 ** 2` for 5 MB). */
  maxSize?: number;
  /** When `true`, files that fail validation stay in the list marked invalid instead of being discarded, so the failing file is shown; when `false`, only valid files are added. Applies to both single and multiple uploads. */
  keepRejectedFiles?: boolean;
  /** Whether to show the auto-generated restrictions hint (allowed types / max size) below the field. Turn it off when the same info is shown elsewhere to avoid a duplicate — rejection error messages still render. */
  showRestrictions?: boolean;
  /** Determines the visual size of the file upload field. Defaults to `"default"`. */
  size?: 'small' | 'default';
  /** Indicates whether the input field is required. If set to `true`, the required indicator (if provided) will be displayed next to the label. */
  required?: boolean;
  /** Controls the visibility of the label. Use `true` to hide the label visually while maintaining its space in the layout, or use 'keep-space' to hide it without collapsing the space it occupies. */
  hideLabel?: boolean | 'keep-space';
  /** Renders the label as a `<span>` instead of a `<label>` element. This is useful when the `Form` component already handles labels internally. */
  renderWithoutLabel?: boolean;
  /** Tooltip content to display when hovering over the info button. If provided, an info button with a tooltip will be rendered. */
  tooltip?: React.ReactNode;
  /** Additional props forwarded to the underlying `Label` component. Use `modifiers` to control how the label text wraps or breaks (e.g. `{ modifiers: 'nowrap' }`) so long labels don't distort the form layout. Breakpoint keys are supported for responsive wrapping (e.g. `{ modifiers: 'nowrap', sm: { modifiers: 'break-word' } }`). */
  labelProps?: LabelModifierProps;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface FeedbackTextProps {
    /**
     * Helper text
     */
    text: React.ReactNode | React.ReactNode[];
    /**
     * ID to reference the helper from aria-describedby attributes.
     * If omitted, then the id might be set through a parent component.
     */
    id?: string;
    /**
     * Additional custom class.
     */
    className?: string;
    /**
     * Type of form-helper.
     * @default hint
     */
    type?: FeedbackTextType;
    /**
     * Position of the helper.
     * @default left
     */
    position?: FeedbackTextPosition;
}
interface FileUploadFile extends Partial<File> {
    /**
     * A unique identifier for the file, useful for tracking files in a list.
     */
    id?: string;
    /**
     * Indicates if the file is currently being uploaded.
     */
    isLoading?: boolean;
    /**
     * Specifies whether the file passed validation checks (e.g., size, extension).
     */
    isValid?: boolean;
}
type LabelModifierProps = BreakpointSupport<{
    modifiers?: LabelModifiers[] | LabelModifiers;
}>;

// ---- InputGroup (components/InputGroup/InputGroup.d.ts) ----
import * as React from 'react';

/**
 * InputGroup from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/input-group/input-group.stories.tsx).
 */
export interface InputGroupProps {
  /** Additional class name(s) applied to the root element of the InputGroup. Useful for custom styling or layout overrides. */
  className?: string;
  /** Enables merged styling between input and its prefix/suffix elements. When `true`, borders and radius are visually combined into a single control. Disable this when using non-standard addons (e.g. buttons) that should not visually merge. */
  addons?: boolean;
  /** Helper or feedback text displayed below the input group. Can be a single item or multiple messages (e.g. error + hint). Accepts the same props as `FeedbackText`. */
  helper?: FeedbackTextProps | FeedbackTextProps[];
  /** InputGroup composition slots. Typically includes `InputGroup.Input` and optionally `InputGroup.Prefix` and/or `InputGroup.Suffix`. */
  children: ReactNode;
  /** Disables the entire input group. Applies disabled styles to the group and propagates the disabled state to the input and any interactive prefix/suffix elements. */
  disabled?: boolean;
  /** Marks the whole group as invalid. Applies the error border to the prefix/suffix addons and propagates `invalid` down to the inner form control, so you don't have to set it on the child as well. Pair with an error `helper` message. */
  invalid?: boolean;
  /** The unique identifier for the input element that this label is associated with. This ID should match the input element's `id` attribute to ensure accessibility. */
  id: string;
  /** The text content of the label that describes the input field. */
  label: React.ReactNode;
  /** Controls the visibility of the label. Use `true` to hide the label visually while maintaining its space in the layout, or use 'keep-space' to hide it without collapsing the space it occupies. */
  hideLabel?: boolean | 'keep-space';
  /** Indicates whether the input field is required. If set to `true`, the required indicator (if provided) will be displayed next to the label. */
  required?: boolean;
  /** Renders the label as a `<span>` instead of a `<label>` element. This is useful when the `Form` component already handles labels internally. */
  renderWithoutLabel?: boolean;
  /** Specifies the size of the label text. Options include 'small' for a smaller label size or 'default' for the standard size. */
  size?: 'small' | 'default';
  /** Tooltip content to display when hovering over the info button. If provided, an info button with a tooltip will be rendered. */
  tooltip?: React.ReactNode;
  /** Additional props forwarded to the underlying `Label` component. Use `modifiers` to control how the label text wraps or breaks (e.g. `{ modifiers: 'nowrap' }`) so long labels don't distort the form layout. Breakpoint keys are supported for responsive wrapping (e.g. `{ modifiers: 'nowrap', sm: { modifiers: 'break-word' } }`). */
  labelProps?: LabelModifierProps;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface FeedbackTextProps {
    /**
     * Helper text
     */
    text: React.ReactNode | React.ReactNode[];
    /**
     * ID to reference the helper from aria-describedby attributes.
     * If omitted, then the id might be set through a parent component.
     */
    id?: string;
    /**
     * Additional custom class.
     */
    className?: string;
    /**
     * Type of form-helper.
     * @default hint
     */
    type?: FeedbackTextType;
    /**
     * Position of the helper.
     * @default left
     */
    position?: FeedbackTextPosition;
}
type LabelModifierProps = BreakpointSupport<{
    modifiers?: LabelModifiers[] | LabelModifiers;
}>;

// ---- NumberField (components/NumberField/NumberField.d.ts) ----
import * as React from 'react';

/**
 * NumberField from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/number-field/number-field.stories.tsx).
 */
export interface NumberFieldProps {
  /** Initial value of the input field. */
  defaultValue?: number;
  /** Controlled value of the input field. Overrides defaultValue. */
  value?: number;
  /** Callback fired when the input value changes. Emits `undefined` when the field is cleared so consumers can distinguish *"user explicitly entered zero"* from *"field is empty"* — important for required-field validation and for fields where `0` is a meaningful selection. */
  onChange?: (value: number | undefined) => void;
  /** Specifies the input mode for the field (e.g., numeric or decimal). Defaults to `'decimal'` when `decimalPlaces > 0` or `decimalSeparator === ','`, otherwise numeric. */
  inputMode?: 'numeric' | 'decimal';
  /** Number of decimal places for rounding calculations. */
  decimalPlaces?: number;
  /** Character used as the decimal separator when displaying the value. Both `.` and `,` are always accepted as input regardless of this setting. Defaults are derived from `<LabelProvider locale>`: `en` → `.`, `et` / `ru` → `,`. Pass the prop explicitly to override the locale-derived default for a single field. */
  decimalSeparator?: '.' | ',';
  /** Minimum allowed value. Disables decrementing below this value and restricts manual input. */
  min?: number;
  /** Maximum allowed value. Disables incrementing above this value and restricts manual input. */
  max?: number;
  /** Disables the input field. */
  disabled?: boolean;
  /** Marks the field as invalid for validation purposes. */
  invalid?: boolean;
  /** Text displayed after the input value, typically a unit. */
  suffix?: string;
  /** Whether the number field occupies the full width of its container. */
  fullWidth?: boolean;
  /** Helper text displayed below the input. */
  helper?: FeedbackTextProps;
  /** Step size for incrementing or decrementing the value. */
  step?: number;
  /** Additional attributes for the underlying input element. */
  input?: React.InputHTMLAttributes<HTMLInputElement>;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<NumberFieldBreakpointProps>;
  md?: Partial<NumberFieldBreakpointProps>;
  lg?: Partial<NumberFieldBreakpointProps>;
  xl?: Partial<NumberFieldBreakpointProps>;
  xxl?: Partial<NumberFieldBreakpointProps>;
  /** The unique identifier for the input element that this label is associated with. This ID should match the input element's `id` attribute to ensure accessibility. */
  id: string;
  /** The text content of the label that describes the input field. */
  label: React.ReactNode;
  /** Controls the visibility of the label. Use `true` to hide the label visually while maintaining its space in the layout, or use 'keep-space' to hide it without collapsing the space it occupies. */
  hideLabel?: boolean | 'keep-space';
  /** Indicates whether the input field is required. If set to `true`, the required indicator (if provided) will be displayed next to the label. */
  required?: boolean;
  /** Additional className. */
  className?: string;
  /** Renders the label as a `<span>` instead of a `<label>` element. This is useful when the `Form` component already handles labels internally. */
  renderWithoutLabel?: boolean;
  /** Specifies the size of the label text. Options include 'small' for a smaller label size or 'default' for the standard size. */
  size?: 'small' | 'default';
  /** Tooltip content to display when hovering over the info button. If provided, an info button with a tooltip will be rendered. */
  tooltip?: React.ReactNode;
  /** Additional props forwarded to the underlying `Label` component. Use `modifiers` to control how the label text wraps or breaks (e.g. `{ modifiers: 'nowrap' }`) so long labels don't distort the form layout. Breakpoint keys are supported for responsive wrapping (e.g. `{ modifiers: 'nowrap', sm: { modifiers: 'break-word' } }`). */
  labelProps?: LabelModifierProps;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface FeedbackTextProps {
    /**
     * Helper text
     */
    text: React.ReactNode | React.ReactNode[];
    /**
     * ID to reference the helper from aria-describedby attributes.
     * If omitted, then the id might be set through a parent component.
     */
    id?: string;
    /**
     * Additional custom class.
     */
    className?: string;
    /**
     * Type of form-helper.
     * @default hint
     */
    type?: FeedbackTextType;
    /**
     * Position of the helper.
     * @default left
     */
    position?: FeedbackTextPosition;
}
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type NumberFieldBreakpointProps = {
    /**
     * Text displayed after the input value, typically a unit.
     */
    suffix?: string;
    /**
     * Whether the number field occupies the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Helper text displayed below the input.
     */
    helper?: FeedbackTextProps;
    /**
     * Step size for incrementing or decrementing the value.
     * @default 1
     */
    step?: number;
    /**
     * Additional attributes for the underlying input element.
     */
    input?: React.InputHTMLAttributes<HTMLInputElement>;
};
type LabelModifierProps = BreakpointSupport<{
    modifiers?: LabelModifiers[] | LabelModifiers;
}>;

// ---- Radio (components/Radio/Radio.d.ts) ----
import * as React from 'react';

/**
 * Radio from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/radio/radio.stories.tsx).
 */
export interface RadioProps {
  /** Visual variant. - `default` — standard indicator + label. - `card` — the whole control renders as a selectable card (indicator, label, optional icon/description). */
  variant?: ChoiceInputVariant;
  /** Provide content for tooltip. Accepts rich content (e.g. bold text, links), not just a plain string. Mutually exclusive with `variant="card"` — the card carries supplementary content through its `description` slot instead. Passing both logs a dev-time warning and the tooltip is ignored. (This is enforced at runtime rather than in the types: a discriminated union would reject the dynamic prop-spreading that `Checkbox.Group` / `Radio.Group` / `Table` rely on.) */
  tooltip?: React.ReactNode;
  /** ID property. When omitted a stable id is generated (useful inside `Radio.Group` / `Checkbox.Group`). */
  id?: string;
  /** Label text */
  label: React.ReactNode;
  /** Additional classes. */
  className?: string;
  /** Value property */
  value: string;
  /** name of the input. Provided automatically when rendered inside `Radio.Group` / `Checkbox.Group`. */
  name?: string;
  /** Card colour variant. Only applies when `variant="card"`. */
  cardVariant?: ChoiceInputCardVariant;
  /** Secondary description text shown under the label. Primarily used with `variant="card"`. */
  description?: React.ReactNode;
  /** Leading icon (Material icon name) shown before the label. Primarily used with `variant="card"`. */
  icon?: string;
  /** is the label hidden */
  hideLabel?: boolean;
  /** If the option is disabled */
  disabled?: boolean;
  /** onChange handler */
  onChange?: (value: string, checked: boolean) => void;
  /** Helper text displayed below the input. */
  helper?: FeedbackTextProps;
  /** If the check is controlled from outside the components */
  checked?: boolean;
  /** If the check is checked by default */
  defaultChecked?: boolean;
  /** If the item should be in hover state */
  hover?: boolean;
  /** Additional props forwarded to the underlying `Label` component. Use `modifiers` to control how the label text wraps or breaks (e.g. `{ modifiers: 'nowrap' }`). */
  labelProps?: FormLabelProps['labelProps'];
  /** Input size */
  size?: 'default' | 'large';
  /** Whether the input is marked as invalid. */
  invalid?: boolean;
  /** Whether the input is marked as required. */
  required?: boolean;
  /** Gives a primary card a border in the unselected state. Only applies to `variant="card"` with `cardVariant="primary"`; has no effect inside a `layout="segmented"` group, where cards always have a border. */
  bordered?: boolean;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<RadioBreakpointProps>;
  md?: Partial<RadioBreakpointProps>;
  lg?: Partial<RadioBreakpointProps>;
  xl?: Partial<RadioBreakpointProps>;
  xxl?: Partial<RadioBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface FeedbackTextProps {
    /**
     * Helper text
     */
    text: React.ReactNode | React.ReactNode[];
    /**
     * ID to reference the helper from aria-describedby attributes.
     * If omitted, then the id might be set through a parent component.
     */
    id?: string;
    /**
     * Additional custom class.
     */
    className?: string;
    /**
     * Type of form-helper.
     * @default hint
     */
    type?: FeedbackTextType;
    /**
     * Position of the helper.
     * @default left
     */
    position?: FeedbackTextPosition;
}
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type RadioBreakpointProps = ChoiceInputProps & {
    /**
     * Gives a primary card a border in the unselected state.
     * Only applies to `variant="card"` with `cardVariant="primary"`; has no effect inside a
     * `layout="segmented"` group, where cards always have a border.
     * @default false
     */
    bordered?: boolean;
};

// ---- Search (components/Search/Search.d.ts) ----
import * as React from 'react';

/**
 * Search from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/search/search.stories.tsx).
 */
export interface SearchProps {
  /** Callback triggered when the search is executed (Enter key pressed or button clicked). In autocomplete mode it fires on Enter only when no suggestion is active — a free-text submit. */
  onSearch?: (value: string) => void;
  /** Custom icon for the search input. */
  searchIcon?: string | IconWithoutBackgroundProps;
  /** Optional button properties. */
  button?: Partial<ButtonProps>;
  /** For accessibility: search field name (accessible name). Recommended to always set. E.g., "Search products" or "Search site". */
  ariaLabel?: string;
  /** Suggestions rendered in the popup. Providing this array (even empty) turns the field into an accessible combobox; leave it `undefined` for a plain search field. Filter / fetch these yourself in response to `onChange`; the component renders exactly what it is given. */
  suggestions?: SearchSuggestion[];
  /** Fired when a suggestion is chosen (Enter on the active suggestion, or click). In controlled mode update `value` from here to reflect the picked label. */
  onSuggestionSelect?: (suggestion: SearchSuggestion) => void;
  /** Shows a loading row in the popup instead of suggestions — use while an async request is in flight. */
  loading?: boolean;
  /** Minimum query length (after trimming) before the popup opens. */
  minQueryLength?: number;
  /** Closes the suggestion popup when the page (or a scrollable ancestor) scrolls. Scrolling the suggestion list itself keeps the popup open. */
  hideOnScroll?: boolean;
  /** Custom suggestion renderer. Receives the suggestion plus its active state and the current query (handy for match highlighting). */
  renderSuggestionContent?: (suggestion: SearchSuggestion, state: { active: boolean; query: string; }) => React.ReactNode;
  /** Derives the input text to show after a suggestion is picked (uncontrolled mode). Defaults to the suggestion's string label, falling back to its `value`. */
  getSuggestionText?: (suggestion: SearchSuggestion) => string;
  /** Text shown when there are no suggestions and it is not loading. Defaults to the localized `search.no-results` label. */
  noResultsText?: React.ReactNode;
  /** Text shown in the loading row. Defaults to the localized `search.loading` label. */
  loadingText?: React.ReactNode;
  /** Builds the politely announced live-region message stating how many suggestions are available. Defaults to the localized `search.results-count` label. */
  resultsCountText?: (count: number) => string;
  /** Extra content pinned below the suggestions — fallback actions or a hint, for example. It shows whenever the popup is open, including the no-results state. `Tab` from the field moves focus into the footer's controls. */
  footer?: React.ReactNode;
  /** Additional native attributes for the input element (e.g. `autoComplete`, `maxLength`). Narrowed to input attributes — a search field is always a single-line `<input>`. */
  input?: React.InputHTMLAttributes<HTMLInputElement>;
  sm?: Partial<{ size?: "default" | "small" | "large"; icon?: string | IconWithoutBackgroundProps; isTextArea?: boolean; placeholder?: string; isClearable?: boolean; showClearOnInteraction?: boolean; className?: string; }>;
  md?: Partial<{ size?: "default" | "small" | "large"; icon?: string | IconWithoutBackgroundProps; isTextArea?: boolean; placeholder?: string; isClearable?: boolean; showClearOnInteraction?: boolean; className?: string; }>;
  lg?: Partial<{ size?: "default" | "small" | "large"; icon?: string | IconWithoutBackgroundProps; isTextArea?: boolean; placeholder?: string; isClearable?: boolean; showClearOnInteraction?: boolean; className?: string; }>;
  xl?: Partial<{ size?: "default" | "small" | "large"; icon?: string | IconWithoutBackgroundProps; isTextArea?: boolean; placeholder?: string; isClearable?: boolean; showClearOnInteraction?: boolean; className?: string; }>;
  xxl?: Partial<{ size?: "default" | "small" | "large"; icon?: string | IconWithoutBackgroundProps; isTextArea?: boolean; placeholder?: string; isClearable?: boolean; showClearOnInteraction?: boolean; className?: string; }>;
  /** Unique identifier for the text field. Required for accessibility (associates label, helper text, and input). Also used to generate `aria-describedby` and helper IDs automatically. */
  id?: string;
  /** Additional CSS class name applied to the root container (`<div>`). Use this for layout adjustments, custom spacing, or theming the entire text field wrapper. */
  className?: string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  /** The text or React node that serves as the label for the text field. If `hideLabel` is `true`, the label will be visually hidden but still accessible to screen readers. If `hideLabel` is `'keep-space'`, the label will be hidden but the space it occupies will be preserved. */
  label?: React.ReactNode;
  /** Disables the entire text field. When `true`: - Input becomes non-editable and non-focusable - Clear button is hidden and icon is disabled - Visual disabled styles are applied */
  disabled?: boolean;
  /** Controls the visual size of the text field. - `'small'` → Compact version (smaller height, padding, and font size) - `'default'` → Standard size (most commonly used) - `'large'` → Larger touch target, bigger text and padding */
  size?: 'default' | 'small' | 'large';
  /** Name attribute for the underlying input/textarea element. Important for form submission and integration with form libraries (React Hook Form, Formik, etc.). */
  name?: string;
  /** Controlled value of the text field. When provided, the component becomes **fully controlled**. You must update this value via `onChange` to reflect user input. */
  value?: string;
  /** Default value for **uncontrolled** usage. Use this when you don't want to manage state yourself. The component will manage its internal state. */
  defaultValue?: string;
  /** Fired when the input/textarea receives focus. */
  onFocus?: React.FocusEventHandler<FieldElement>;
  /** Fired when the input/textarea loses focus. */
  onBlur?: React.FocusEventHandler<FieldElement>;
  /** Callback fired when the value changes. Receives the new value as a plain string. Preferred for most use cases (simpler than `onChangeEvent`). */
  onChange?: (value: string) => void;
  /** Key-down handler attached to the field's surrounding container (not the input directly). */
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  /** Key-up handler attached to the field's surrounding container (not the input directly). */
  onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
  /** Click handler for the entire inner container (the area around the input). Can be used to focus the input when clicking anywhere in the field area, or to trigger custom behavior. */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /** Indicates whether the input field is required. If set to `true`, the required indicator (if provided) will be displayed next to the label. */
  required?: boolean;
  /** Controls the visibility of the label. Use `true` to hide the label visually while maintaining its space in the layout, or use 'keep-space' to hide it without collapsing the space it occupies. */
  hideLabel?: boolean | 'keep-space';
  /** Renders the label as a `<span>` instead of a `<label>` element. This is useful when the `Form` component already handles labels internally. */
  renderWithoutLabel?: boolean;
  /** Tooltip content to display when hovering over the info button. If provided, an info button with a tooltip will be rendered. */
  tooltip?: React.ReactNode;
  /** Additional props forwarded to the underlying `Label` component. Use `modifiers` to control how the label text wraps or breaks (e.g. `{ modifiers: 'nowrap' }`) so long labels don't distort the form layout. Breakpoint keys are supported for responsive wrapping (e.g. `{ modifiers: 'nowrap', sm: { modifiers: 'break-word' } }`). */
  labelProps?: LabelModifierProps;
  /** Native `onChange` event handler. Gives you access to the full `ChangeEvent` object (useful if you need `event.target`, `event.preventDefault()`, etc.). Note: Both `onChange` and `onChangeEvent` are called when the value changes. */
  onChangeEvent?: React.ChangeEventHandler<FieldElement>;
  /** Marks the field as invalid and triggers error styling. Also affects `aria-invalid` attribute. Note: The `helper` prop can override this if it contains items with `type: 'error'`. */
  invalid?: boolean;
  /** Makes the field read-only. User can focus and select text, but cannot modify the value. Useful for pre-filled data that should not be changed. Hides the clear button. */
  readOnly?: boolean;
  /** Helper text, success message, or error message displayed below the field. Accepts either: - A single `FeedbackTextProps` object - An array of `FeedbackTextProps` (useful for multiple messages or mixed error/success states) The component automatically detects error states from helper items. */
  helper?: FeedbackTextProps | FeedbackTextProps[];
  /** Callback fired when the clear button (×) is clicked. Useful if you need to perform additional actions besides clearing the value (e.g. analytics, resetting related fields, etc.). Note: The field value is automatically cleared regardless of this callback. */
  onClear?: () => void;
  /** Placeholder text shown when the field is empty. Recommended to be short and descriptive. Avoid using placeholder as a label. */
  placeholder?: string;
  /** When `true`, displays a clear (×) button on the right side when the field has a value. Clicking the button clears the input and calls `onClear` (if provided). Hidden while the field is `readOnly` or disabled. `input.readOnly` only blocks typing, so the button stays for fields whose value changes another way, like a calendar-only DateField range. */
  isClearable?: boolean;
  /** Show the clear (×) button only while the field is hovered or focused, instead of whenever it has a value. Requires `isClearable`. */
  showClearOnInteraction?: boolean;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface IconWithoutBackgroundProps extends IconSharedProps {
    background?: undefined;
    /**
     * Type of display
     * @default block
     */
    display?: 'block' | 'inline';
}
type ButtonProps<C extends React.ElementType = 'button'> = BreakpointSupport<ButtonContentProps<C, IInternalButtonProps, AllowedTags>>;
interface SearchSuggestion {
    /**
     * Stable value returned to `onSuggestionSelect` and used as the React key. For
     * richer payloads keep a lookup keyed by this value on the consumer side.
     */
    value: string;
    /**
     * Visible label. Falls back to `value` when omitted.
     */
    label?: React.ReactNode;
    /**
     * Optional secondary line shown beneath the label (e.g. a code, category, or
     * hint). Rendered as `OptionContent.Meta` in the default row layout; ignored
     * when a custom `renderSuggestionContent` is supplied.
     */
    description?: React.ReactNode;
    /**
     * Renders the suggestion greyed out and skips it during keyboard navigation.
     * @default false
     */
    disabled?: boolean;
}
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type FieldElement = HTMLInputElement | HTMLTextAreaElement;
type LabelModifierProps = BreakpointSupport<{
    modifiers?: LabelModifiers[] | LabelModifiers;
}>;
interface FeedbackTextProps {
    /**
     * Helper text
     */
    text: React.ReactNode | React.ReactNode[];
    /**
     * ID to reference the helper from aria-describedby attributes.
     * If omitted, then the id might be set through a parent component.
     */
    id?: string;
    /**
     * Additional custom class.
     */
    className?: string;
    /**
     * Type of form-helper.
     * @default hint
     */
    type?: FeedbackTextType;
    /**
     * Position of the helper.
     * @default left
     */
    position?: FeedbackTextPosition;
}

// ---- Select (components/Select/Select.d.ts) ----
import * as React from 'react';

/**
 * Select from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/select/select.stories.tsx).
 */
export interface SelectProps {
  /** Unique HTML id for the input. Also used as react-select's `instanceId` for SSR-stable internal IDs. When omitted, falls back to the surrounding `InputGroup`'s id or a generated `useId()`. */
  id?: string;
  /** Visible label. May be omitted when the surrounding `InputGroup` provides its own label. */
  label?: string;
  /** The list of selectable options. Pass a flat `ISelectOption[]` for a simple list, or an array of `IGroupedOptions` (each with its own `options` array) for a grouped menu. */
  options?: OptionsOrGroups<ISelectOption, IGroupedOptions<ISelectOption>>;
  /** Used in async mode (`async: true`). - `true` — call `loadOptions` once on mount with an empty input string and use the result as the initial option list. - An array — show these options before the user types anything. - Omit — start with no options until the user types. */
  defaultOptions?: OptionsOrGroups<ISelectOption, IGroupedOptions<ISelectOption>> | boolean;
  /** Text shown in the field when no value is selected. */
  placeholder?: string;
  /** Extra class on the root wrapper. Use `classNames` for per-subcomponent overrides. */
  className?: string;
  /** Icon shown on the right of the field as the dropdown indicator. - `"arrow_drop_down"` (default) — standard select chevron. - `"search"` — magnifier; useful for combobox-style search fields. */
  iconName?: 'arrow_drop_down' | 'search';
  /** Fires whenever the selection changes. Receives the new value: a single `ISelectOption` (single-select), an array (multi-select), or `null` when cleared. */
  onChange?: (value: TSelectValue) => void;
  /** Fires whenever the user types in the search input. Receives the new input string and a `react-select` action descriptor (e.g. `'input-change'`, `'menu-close'`). Use this to drive controlled search. */
  onInputChange?: (value: string, actionMeta: InputActionMeta) => void;
  /** Controlled search input string. Pair with `onInputChange` to manage it from the parent. */
  inputValue?: string;
  /** Async option loader. Called with the current search string; resolve the `callback` with the matching options. Only invoked when `async: true`. */
  loadOptions?: (inputValue: string, callback: (options: OptionsOrGroups<ISelectOption, IGroupedOptions<ISelectOption>>) => void) => void;
  /** When `true`, shows a loading spinner in the indicator area. Useful while async results are pending. */
  isLoading?: boolean;
  /** Uncontrolled initial selection. Ignored when `value` is provided. */
  defaultValue?: TSelectValue;
  /** Controlled selection. When set, the parent owns the value and must update it via `onChange`. Use `defaultValue` for uncontrolled usage. */
  value?: TSelectValue;
  /** Disables interaction and applies disabled styling. */
  disabled?: boolean;
  /** Form field name; rendered onto the underlying hidden input for form submission. */
  name?: string;
  /** Forces error styling. Also set automatically when `helper.type === 'error'`. */
  invalid?: boolean;
  /** Forces valid (success) styling. Also set automatically when `helper.type === 'valid'`. */
  valid?: boolean;
  /** Helper / feedback text rendered below the field. Set `type` to `'hint'`, `'error'`, or `'valid'` — the latter two also drive the field's invalid / valid visual state. */
  helper?: FeedbackTextProps;
  /** Visual size variant. - omit — default (40px tall). - `"small"` — compact (32px tall) for dense layouts. */
  size?: 'small';
  /** Switches the underlying component to `react-select`'s `AsyncSelect`. Pair with `loadOptions` (and optionally `defaultOptions`) to fetch options on the fly. */
  async?: boolean;
  /** Custom renderer for the content of each option in the dropdown. Receives the full option props from `react-select`; return any React node. Use `renderValue` if you also want to customise how the selected value appears in the trigger. */
  renderOption?: (props: OptionProps<ISelectOption, boolean>) => JSX.Element;
  /** Message shown when the option list is empty (no matches for the search, or no options at all). Defaults to the localised `select.no-options` label from `LabelProvider`. */
  noOptionsMessage?: (obj: { inputValue: string; }) => React.ReactNode;
  /** Message shown while async options are loading. Defaults to the localised `select.loading` label from `LabelProvider`. */
  loadingMessage?: (obj: { inputValue: string; }) => React.ReactNode;
  /** Renders custom content underneath the option list, inside the dropdown (e.g. a "Show more" button or a "powered by" footer). */
  renderMessageListFooter?: (props: MenuListProps<ISelectOption, boolean>) => JSX.Element;
  /** Enables multi-select mode: the field renders selections as removable tags and `onChange` receives an array. */
  multiple?: boolean;
  /** Layout for selected tags in multi-select mode. - `"stack"` (default) — tags wrap onto multiple rows. - `"row"` — tags stay on one row; overflow tags collapse into a `+N` counter, just like the Angular `multiRow=false` mode. */
  tagsDirection?: 'stack' | 'row';
  /** Truncate each selected tag's label when it is width-constrained, revealing the full text in a popover on hover/focus. `end` shows a trailing ellipsis (`Long label…`); `start` a leading one (`…label`). `false` never truncates — long labels wrap. Forwarded to each tag's `ellipsis` prop. */
  tagsEllipsis?: TagEllipsis;
  /** Layout for the dropdown menu. - `"menu"` (default): vertical list of options. - `"grid"`: swatch grid for color / icon pickers and similar compact pickers. Grid sizing is customizable via the `--tedi-swatch-size`, `--tedi-swatch-gap`, and `--tedi-swatch-columns` CSS variables on the menu list element. */
  dropdownType?: 'menu' | 'grid';
  /** Custom renderer for the trigger value (single-select). Receives the currently selected option and may return any React node — useful for color swatches, icons, or any non-text representation in the field. Ignored in multi-select mode (use `renderOption` for tag rendering). */
  renderValue?: (option: ISelectOption) => React.ReactNode;
  /** In multi-select mode, prepends a "Select all" toggle to the menu list. Toggles every enabled option (or, when filtering, every visible enabled option) on/off. Indeterminate when only some are selected. Ignored when `multiple` is false. */
  showSelectAll?: boolean;
  /** In multi-select mode with grouped options, makes each group heading a checkbox that toggles the whole group. Indeterminate when only some options in the group are selected. Ignored when `multiple` is false or `options` is not grouped. */
  selectableGroups?: boolean;
  /** Open the menu automatically when the input first receives focus. */
  openMenuOnFocus?: boolean;
  /** Open the menu when the trigger area is clicked. */
  openMenuOnClick?: boolean;
  /** Treat the Tab key as a confirm-and-move-on for the currently focused option (otherwise Tab simply moves focus out of the menu without selecting). */
  tabSelectsValue?: boolean;
  /** Close the menu after each successful selection. Default depends on `multiple`: `true` for single-select, `false` for multi-select so the user can pick several options without re-opening. */
  closeMenuOnSelect?: boolean;
  /** Blur the search input after each selection. Useful if you want to collapse the cursor immediately on pick. */
  blurInputOnSelect?: boolean;
  /** Focus the input on initial mount. */
  autoFocus?: boolean;
  /** Whether the value can be cleared via the "×" indicator. The visible "×" button only appears if `isClearIndicatorVisible` is also `true` (that prop is now deprecated; see its docstring for migration plans). Backspace deletion is controlled separately by `backspaceRemovesValue` (default `false`). */
  isClearable?: boolean;
  isClearIndicatorVisible?: boolean;
  /** Show the clear (×) button only while the control is hovered or focused, instead of whenever a value is selected. Requires `isClearIndicatorVisible`. */
  showClearOnInteraction?: boolean;
  /** Allow filtering the option list by typing. Set to `false` for a pure dropdown with no search input (e.g. color/icon pickers). */
  isSearchable?: boolean;
  /** Touch-only UX for searchable selects. When `false`, tapping the field on a touch or pen device opens the menu for browsing **without** raising the on-screen keyboard (the input is marked `inputMode="none"`). The keyboard appears only once the user explicitly taps the search input — so a quick-pick dropdown doesn't immediately cover the screen with a keyboard. Has no effect for mouse/keyboard users and never blocks hardware-keyboard typing, so the combobox stays fully operable (WCAG 2.1.1 Keyboard). */
  openKeyboardOnTouch?: boolean;
  /** In multi-select mode, render an "×" remove button on each selected tag so the user can deselect single options without re-opening the menu. */
  isTagRemovable?: boolean;
  /** If `true`, pressing Backspace while the input is empty removes the last selected value (single-mode: clears it; multi-mode: pops the last tag). Disabled by default because react-select's upstream default (`true`) leads to accidental deletions, especially in multi-select with no visual cue for the affected tag. */
  backspaceRemovesValue?: boolean;
  /** Controlled menu open state. When set, the parent owns whether the menu is showing — pair with `onMenuOpen` / `onMenuClose`. */
  menuIsOpen?: boolean;
  /** Fires when the menu opens (uncontrolled or controlled). */
  onMenuOpen?: () => void;
  /** Fires when the menu closes (uncontrolled or controlled). */
  onMenuClose?: () => void;
  /** Fires when the input loses focus. */
  onBlur?: () => void;
  /** Hide the underlying text input (its width collapses to 0). Useful when the field is a pure picker with no typing — the value display still shows, but the cursor caret area is removed. */
  inputIsHidden?: boolean;
  /** Typography overrides applied to group headings (when `options` is grouped). `text` on an individual `IGroupedOptions` entry takes precedence over this default. */
  optionGroupHeadingText?: Pick<TextProps, 'modifiers' | 'color'>;
  /** In async mode, cache the result of each `loadOptions` call by input string so the same query isn't re-fetched. */
  cacheOptions?: boolean;
  /** In single-select mode, render each option with a leading radio button for a more explicit "pick one" UI. Has no effect in multi-select mode. */
  showRadioButtons?: boolean;
  /** Per-subcomponent class overrides forwarded to react-select's `classNames` map. Each entry adds an extra class onto the corresponding internal subcomponent; use this for one-off styling without losing the default `tedi-select__*` BEM classes. */
  classNames?: { clearIndicator?: string; container?: string; control?: string; dropdownIndicator?: string; group?: string; groupHeading?: string; indicatorsContainer?: string; indicatorSeparator?: string; input?: string; loadingIndicator?: string; loadingMessage?: string; menu?: string; menuList?: string; menuPortal?: string; multiValue?: string; multiValueLabel?: string; multiValueRemove?: string; noOptionsMessage?: string; option?: string; placeholder?: string; singleValue?: string; valueContainer?: string; };
  /** Indicates whether the input field is required. If set to `true`, the required indicator (if provided) will be displayed next to the label. */
  required?: boolean;
  /** Controls the visibility of the label. Use `true` to hide the label visually while maintaining its space in the layout, or use 'keep-space' to hide it without collapsing the space it occupies. */
  hideLabel?: boolean | 'keep-space';
  /** Renders the label as a `<span>` instead of a `<label>` element. This is useful when the `Form` component already handles labels internally. */
  renderWithoutLabel?: boolean;
  /** Tooltip content to display when hovering over the info button. If provided, an info button with a tooltip will be rendered. */
  tooltip?: React.ReactNode;
  /** Additional props forwarded to the underlying `Label` component. Use `modifiers` to control how the label text wraps or breaks (e.g. `{ modifiers: 'nowrap' }`) so long labels don't distort the form layout. Breakpoint keys are supported for responsive wrapping (e.g. `{ modifiers: 'nowrap', sm: { modifiers: 'break-word' } }`). */
  labelProps?: LabelModifierProps;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface ISelectOption<CustomData = unknown> {
    /** The string written into the form value when this option is picked. */
    value: string;
    /** Display label. Strings are searchable; React nodes render as-is and aren't filtered by search. */
    label: string | React.ReactNode | React.ReactNode[];
    /** When `true`, the option appears greyed out and can't be picked. */
    isDisabled?: boolean;
    /** Arbitrary data attached to the option, accessible inside custom renderers. */
    customData?: CustomData;
}
interface IGroupedOptions<CustomOption = unknown> extends GroupBase<CustomOption> {
    /** Typography override for this group heading. Falls back to `optionGroupHeadingText`. */
    text?: Pick<TextProps, 'modifiers' | 'color'>;
}
type TSelectValue<CustomData = unknown> = ISelectOption<CustomData> | ReadonlyArray<ISelectOption<CustomData>> | null;
interface FeedbackTextProps {
    /**
     * Helper text
     */
    text: React.ReactNode | React.ReactNode[];
    /**
     * ID to reference the helper from aria-describedby attributes.
     * If omitted, then the id might be set through a parent component.
     */
    id?: string;
    /**
     * Additional custom class.
     */
    className?: string;
    /**
     * Type of form-helper.
     * @default hint
     */
    type?: FeedbackTextType;
    /**
     * Position of the helper.
     * @default left
     */
    position?: FeedbackTextPosition;
}
type TagEllipsis = 'start' | 'end' | false;
interface TextProps extends BreakpointSupport<TextBreakpointProps> {
    /**
     * Children of the text
     */
    children: React.ReactNode;
    /**
     * ID attribute
     */
    id?: string;
    /**
     * Allows to focus the element
     */
    tabIndex?: number;
}
type LabelModifierProps = BreakpointSupport<{
    modifiers?: LabelModifiers[] | LabelModifiers;
}>;

// ---- Slider (components/Slider/Slider.d.ts) ----
import * as React from 'react';

/**
 * Slider from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/slider/slider.stories.tsx).
 */
export interface SliderProps {
  /** Unique identifier for the underlying input element. Generated automatically if not provided. */
  id?: string;
  /** Name attribute of the underlying input element. */
  name?: string;
  /** Label text rendered above the slider. */
  label?: React.ReactNode;
  /** Controls the visibility of the label. Pass `true` to hide it visually while keeping it available to assistive technology, or `'keep-space'` to reserve the vertical space. */
  hideLabel?: boolean | 'keep-space';
  /** Additional props forwarded to the underlying `Label` component. Use `modifiers` to control how the label text wraps or breaks (e.g. `{ modifiers: 'nowrap' }`). */
  labelProps?: FormLabelProps['labelProps'];
  /** Marks the field as required. */
  required?: boolean;
  /** Minimum allowed value. */
  min?: number;
  /** Maximum allowed value. */
  max?: number;
  /** Step size. */
  step?: number;
  /** Controlled value. Use together with `onChange`. */
  value?: number;
  /** Default value for uncontrolled usage. */
  defaultValue?: number;
  /** Callback fired when the value changes. */
  onChange?: (value: number) => void;
  /** Disables the slider. */
  disabled?: boolean;
  /** Marks the slider as invalid for validation purposes. */
  invalid?: boolean;
  /** Accessible label used when no visible `label` is provided. */
  "aria-label"?: string;
  /** ID of an element that labels the slider, used when no visible `label` is provided. */
  "aria-labelledby"?: string;
  /** Human-readable text alternative of the current value. */
  "aria-valuetext"?: string;
  /** Text/element rendered to the left of the track (e.g. the minimum value). */
  minLabel?: React.ReactNode;
  /** Text/element rendered to the right of the track (e.g. the maximum value). Ignored when `showCurrentValue` is `true`. */
  maxLabel?: React.ReactNode;
  /** When `true`, renders the current value to the right of the track instead of `maxLabel`. */
  showCurrentValue?: boolean;
  /** Formats the current value, used by both the thumb tooltip and the `showCurrentValue` label. */
  valueFormatter?: (value: number) => React.ReactNode;
  /** Renders a tooltip above the thumb showing the current value. Shown only while the slider is hovered, focused, or being dragged. Value is formatted via `valueFormatter`. */
  tooltip?: boolean;
  /** Node rendered to the right of the slider, typically a NumberField used to edit the same value. */
  addonRight?: React.ReactNode;
  /** Helper text rendered below the slider. */
  helper?: FeedbackTextProps;
  /** Additional class name(s) applied to the root element. */
  className?: string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<SliderBreakpointProps>;
  md?: Partial<SliderBreakpointProps>;
  lg?: Partial<SliderBreakpointProps>;
  xl?: Partial<SliderBreakpointProps>;
  xxl?: Partial<SliderBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface FormLabelProps {
    /**
     * The unique identifier for the input element that this label is associated with.
     * This ID should match the input element's `id` attribute to ensure accessibility.
     */
    id: string;
    /**
     * The text content of the label that describes the input field.
     */
    label: React.ReactNode;
    /**
     * Controls the visibility of the label.
     * Use `true` to hide the label visually while maintaining its space in the layout,
     * or use 'keep-space' to hide it without collapsing the space it occupies.
     */
    hideLabel?: boolean | 'keep-space';
    /**
     * Indicates whether the input field is required.
     * If set to `true`, the required indicator (if provided) will be displayed next to the label.
     */
    required?: boolean;
    /**
     * Additional className.
     */
    className?: string;
    /**
     * Renders the label as a `<span>` instead of a `<label>` element.
     * This is useful when the `Form` component already handles labels internally.
     */
    renderWithoutLabel?: boolean;
    /**
     * Specifies the size of the label text.
     * Options include 'small' for a smaller label size or 'default' for the standard size.
     * @default default
     */
    size?: 'small' | 'default';
    /**
     * Tooltip content to display when hovering over the info button.
     * If provided, an info button with a tooltip will be rendered.
     */
    tooltip?: React.ReactNode;
    /**
     * Additional props forwarded to the underlying `Label` component.
     * Use `modifiers` to control how the label text wraps or breaks
     * (e.g. `{ modifiers: 'nowrap' }`) so long labels don't distort the form layout.
     * Breakpoint keys are supported for responsive wrapping
     * (e.g. `{ modifiers: 'nowrap', sm: { modifiers: 'break-word' } }`).
     */
    labelProps?: LabelModifierProps;
}
interface FeedbackTextProps {
    /**
     * Helper text
     */
    text: React.ReactNode | React.ReactNode[];
    /**
     * ID to reference the helper from aria-describedby attributes.
     * If omitted, then the id might be set through a parent component.
     */
    id?: string;
    /**
     * Additional custom class.
     */
    className?: string;
    /**
     * Type of form-helper.
     * @default hint
     */
    type?: FeedbackTextType;
    /**
     * Position of the helper.
     * @default left
     */
    position?: FeedbackTextPosition;
}
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type SliderBreakpointProps = {
    /**
     * Text/element rendered to the left of the track (e.g. the minimum value).
     */
    minLabel?: React.ReactNode;
    /**
     * Text/element rendered to the right of the track (e.g. the maximum value).
     * Ignored when `showCurrentValue` is `true`.
     */
    maxLabel?: React.ReactNode;
    /**
     * When `true`, renders the current value to the right of the track instead of `maxLabel`.
     * @default false
     */
    showCurrentValue?: boolean;
    /**
     * Formats the current value, used by both the thumb tooltip and the `showCurrentValue` label.
     * @default (value) => value
     */
    valueFormatter?: (value: number) => React.ReactNode;
    /**
     * Renders a tooltip above the thumb showing the current value. Shown only while the slider is
     * hovered, focused, or being dragged. Value is formatted via `valueFormatter`.
     * @default true
     */
    tooltip?: boolean;
    /**
     * Node rendered to the right of the slider, typically a NumberField used to edit the same value.
     */
    addonRight?: React.ReactNode;
    /**
     * Helper text rendered below the slider.
     */
    helper?: FeedbackTextProps;
    /**
     * Additional class name(s) applied to the root element.
     */
    className?: string;
};

// ---- Textarea (components/Textarea/Textarea.d.ts) ----
import * as React from 'react';

/**
 * Textarea from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/textarea/textarea.stories.tsx).
 */
export interface TextareaProps {
  /** Maximum number of characters allowed in the textarea. */
  characterLimit?: number;
  /** Enable automatic height adjustment based on content. */
  autoGrow?: boolean;
  /** Minimum number of rows (only used when autoGrow = true). Values below 1 are treated as 1. */
  minRows?: number;
  /** Maximum number of rows before scrolling (only used when autoGrow = true). Unset, the textarea grows without a row limit. */
  maxRows?: number;
  /** Fixed height for the textarea (e.g. '200px', '12rem', 240). Ignored when autoGrow = true. */
  height?: string | number;
  /** Maximum height of the textarea. - When `autoGrow` is enabled, this limits how tall the textarea can grow. - When `autoGrow` is disabled, this limits the fixed height. */
  maxHeight?: string | number;
  sm?: Partial<{ size?: "default" | "small" | "large"; icon?: string | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").IconWithoutBackgroundProps; isTextArea?: boolean; placeholder?: string; isClearable?: boolean; showClearOnInteraction?: boolean; className?: string; }>;
  md?: Partial<{ size?: "default" | "small" | "large"; icon?: string | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").IconWithoutBackgroundProps; isTextArea?: boolean; placeholder?: string; isClearable?: boolean; showClearOnInteraction?: boolean; className?: string; }>;
  lg?: Partial<{ size?: "default" | "small" | "large"; icon?: string | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").IconWithoutBackgroundProps; isTextArea?: boolean; placeholder?: string; isClearable?: boolean; showClearOnInteraction?: boolean; className?: string; }>;
  xl?: Partial<{ size?: "default" | "small" | "large"; icon?: string | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").IconWithoutBackgroundProps; isTextArea?: boolean; placeholder?: string; isClearable?: boolean; showClearOnInteraction?: boolean; className?: string; }>;
  xxl?: Partial<{ size?: "default" | "small" | "large"; icon?: string | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").IconWithoutBackgroundProps; isTextArea?: boolean; placeholder?: string; isClearable?: boolean; showClearOnInteraction?: boolean; className?: string; }>;
  /** Unique identifier for the text field. Required for accessibility (associates label, helper text, and input). Also used to generate `aria-describedby` and helper IDs automatically. */
  id?: string;
  /** Additional CSS class name applied to the root container (`<div>`). Use this for layout adjustments, custom spacing, or theming the entire text field wrapper. */
  className?: string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  /** The text or React node that serves as the label for the text field. If `hideLabel` is `true`, the label will be visually hidden but still accessible to screen readers. If `hideLabel` is `'keep-space'`, the label will be hidden but the space it occupies will be preserved. */
  label?: React.ReactNode;
  /** Disables the entire text field. When `true`: - Input becomes non-editable and non-focusable - Clear button is hidden and icon is disabled - Visual disabled styles are applied */
  disabled?: boolean;
  /** Controls the visual size of the text field. - `'small'` → Compact version (smaller height, padding, and font size) - `'default'` → Standard size (most commonly used) - `'large'` → Larger touch target, bigger text and padding */
  size?: 'default' | 'small' | 'large';
  /** Additional attributes for the input element. */
  input?: React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  /** Name attribute for the underlying input/textarea element. Important for form submission and integration with form libraries (React Hook Form, Formik, etc.). */
  name?: string;
  /** Controlled value of the text field. When provided, the component becomes **fully controlled**. You must update this value via `onChange` to reflect user input. */
  value?: string;
  /** Default value for **uncontrolled** usage. Use this when you don't want to manage state yourself. The component will manage its internal state. */
  defaultValue?: string;
  /** Fired when the input/textarea receives focus. */
  onFocus?: React.FocusEventHandler<FieldElement>;
  /** Fired when the input/textarea loses focus. */
  onBlur?: React.FocusEventHandler<FieldElement>;
  /** Callback fired when the value changes. Receives the new value as a plain string. Preferred for most use cases (simpler than `onChangeEvent`). */
  onChange?: (value: string) => void;
  /** Key-down handler attached to the field's surrounding container (not the input directly). */
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  /** Keyboard event handlers attached to the inner wrapper `<div>`. Useful for handling Enter key submission, arrow key navigation, or custom keyboard shortcuts. Note: These are **not** attached to the input/textarea directly, but to the surrounding container. */
  onKeyPress?: React.KeyboardEventHandler<HTMLDivElement>;
  /** Key-up handler attached to the field's surrounding container (not the input directly). */
  onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
  /** Click handler for the entire inner container (the area around the input). Can be used to focus the input when clicking anywhere in the field area, or to trigger custom behavior. */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /** Indicates whether the input field is required. If set to `true`, the required indicator (if provided) will be displayed next to the label. */
  required?: boolean;
  /** Controls the visibility of the label. Use `true` to hide the label visually while maintaining its space in the layout, or use 'keep-space' to hide it without collapsing the space it occupies. */
  hideLabel?: boolean | 'keep-space';
  /** Renders the label as a `<span>` instead of a `<label>` element. This is useful when the `Form` component already handles labels internally. */
  renderWithoutLabel?: boolean;
  /** Tooltip content to display when hovering over the info button. If provided, an info button with a tooltip will be rendered. */
  tooltip?: React.ReactNode;
  /** Additional props forwarded to the underlying `Label` component. Use `modifiers` to control how the label text wraps or breaks (e.g. `{ modifiers: 'nowrap' }`) so long labels don't distort the form layout. Breakpoint keys are supported for responsive wrapping (e.g. `{ modifiers: 'nowrap', sm: { modifiers: 'break-word' } }`). */
  labelProps?: LabelModifierProps;
  /** If `true`, renders a `<textarea>` instead of a regular `<input>`. Useful for multi-line text input (comments, descriptions, addresses, etc.). Note: When using `isTextArea`, the component still behaves like a text field (same styling, clear button, icon support, validation, etc.). */
  isTextArea?: boolean;
  /** Called when the user clicks on the icon (only works if `icon` is provided). The icon is automatically wrapped in a `<button>` when this prop is present. */
  onIconClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
  /** Extra HTML attributes spread on the icon `<button>` element. Use this to wire ARIA state (e.g. `aria-expanded`, `aria-controls`, `aria-haspopup`) directly to the icon trigger, so screen readers announce disclosure state correctly when the icon opens a popover / dialog. Only applied when `onIconClick` is set (i.e. the icon is rendered as a `<button>`). */
  iconButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  /** Hides the spinner/arrows for number inputs (`type="number"`). Only has effect when the underlying input has `type="number"`. */
  isArrowsHidden?: boolean;
  /** Optional start slot element to render inside the input container, before the input field. */
  startSlot?: React.ReactNode;
  /** Optional end slot element to render inside the input container, after the input field. */
  endSlot?: React.ReactNode;
  /** Custom CSS class applied directly to the `<input>` or `<textarea>` element (via the internal `Field` component). Use this when you need to style the input itself (e.g. text alignment, font, custom focus styles). Note: The root container uses `className`. */
  inputClassName?: string;
  /** Native `onChange` event handler. Gives you access to the full `ChangeEvent` object (useful if you need `event.target`, `event.preventDefault()`, etc.). Note: Both `onChange` and `onChangeEvent` are called when the value changes. */
  onChangeEvent?: React.ChangeEventHandler<FieldElement>;
  /** Marks the field as invalid and triggers error styling. Also affects `aria-invalid` attribute. Note: The `helper` prop can override this if it contains items with `type: 'error'`. */
  invalid?: boolean;
  /** Makes the field read-only. User can focus and select text, but cannot modify the value. Useful for pre-filled data that should not be changed. Hides the clear button. */
  readOnly?: boolean;
  /** Helper text, success message, or error message displayed below the field. Accepts either: - A single `FeedbackTextProps` object - An array of `FeedbackTextProps` (useful for multiple messages or mixed error/success states) The component automatically detects error states from helper items. */
  helper?: FeedbackTextProps | FeedbackTextProps[];
  /** Callback fired when the clear button (×) is clicked. Useful if you need to perform additional actions besides clearing the value (e.g. analytics, resetting related fields, etc.). Note: The field value is automatically cleared regardless of this callback. */
  onClear?: () => void;
  /** Placeholder text shown when the field is empty. Recommended to be short and descriptive. Avoid using placeholder as a label. */
  placeholder?: string;
  /** When `true`, displays a clear (×) button on the right side when the field has a value. Clicking the button clears the input and calls `onClear` (if provided). Hidden while the field is `readOnly` or disabled. `input.readOnly` only blocks typing, so the button stays for fields whose value changes another way, like a calendar-only DateField range. */
  isClearable?: boolean;
  /** Show the clear (×) button only while the field is hovered or focused, instead of whenever it has a value. Requires `isClearable`. */
  showClearOnInteraction?: boolean;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface IconWithoutBackgroundProps extends IconSharedProps {
    background?: undefined;
    /**
     * Type of display
     * @default block
     */
    display?: 'block' | 'inline';
}
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type FieldElement = HTMLInputElement | HTMLTextAreaElement;
type LabelModifierProps = BreakpointSupport<{
    modifiers?: LabelModifiers[] | LabelModifiers;
}>;
interface FeedbackTextProps {
    /**
     * Helper text
     */
    text: React.ReactNode | React.ReactNode[];
    /**
     * ID to reference the helper from aria-describedby attributes.
     * If omitted, then the id might be set through a parent component.
     */
    id?: string;
    /**
     * Additional custom class.
     */
    className?: string;
    /**
     * Type of form-helper.
     * @default hint
     */
    type?: FeedbackTextType;
    /**
     * Position of the helper.
     * @default left
     */
    position?: FeedbackTextPosition;
}

// ---- TextField (components/TextField/TextField.d.ts) ----
import * as React from 'react';

/**
 * TextField from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/textfield/textfield.stories.tsx).
 */
export interface TextFieldProps {
  /** Unique identifier for the text field. Required for accessibility (associates label, helper text, and input). Also used to generate `aria-describedby` and helper IDs automatically. */
  id?: string;
  /** The text or React node that serves as the label for the text field. If `hideLabel` is `true`, the label will be visually hidden but still accessible to screen readers. If `hideLabel` is `'keep-space'`, the label will be hidden but the space it occupies will be preserved. */
  label?: React.ReactNode;
  /** Name attribute for the underlying input/textarea element. Important for form submission and integration with form libraries (React Hook Form, Formik, etc.). */
  name?: string;
  /** Custom CSS class applied directly to the `<input>` or `<textarea>` element (via the internal `Field` component). Use this when you need to style the input itself (e.g. text alignment, font, custom focus styles). Note: The root container uses `className`. */
  inputClassName?: string;
  /** Callback fired when the value changes. Receives the new value as a plain string. Preferred for most use cases (simpler than `onChangeEvent`). */
  onChange?: (value: string) => void;
  /** Native `onChange` event handler. Gives you access to the full `ChangeEvent` object (useful if you need `event.target`, `event.preventDefault()`, etc.). Note: Both `onChange` and `onChangeEvent` are called when the value changes. */
  onChangeEvent?: React.ChangeEventHandler<FieldElement>;
  /** Keyboard event handlers attached to the inner wrapper `<div>`. Useful for handling Enter key submission, arrow key navigation, or custom keyboard shortcuts. Note: These are **not** attached to the input/textarea directly, but to the surrounding container. */
  onKeyPress?: React.KeyboardEventHandler<HTMLDivElement>;
  /** Key-down handler attached to the field's surrounding container (not the input directly). */
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  /** Key-up handler attached to the field's surrounding container (not the input directly). */
  onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
  /** Default value for **uncontrolled** usage. Use this when you don't want to manage state yourself. The component will manage its internal state. */
  defaultValue?: string;
  /** Controlled value of the text field. When provided, the component becomes **fully controlled**. You must update this value via `onChange` to reflect user input. */
  value?: string;
  /** Called when the user clicks on the icon (only works if `icon` is provided). The icon is automatically wrapped in a `<button>` when this prop is present. */
  onIconClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
  /** Extra HTML attributes spread on the icon `<button>` element. Use this to wire ARIA state (e.g. `aria-expanded`, `aria-controls`, `aria-haspopup`) directly to the icon trigger, so screen readers announce disclosure state correctly when the icon opens a popover / dialog. Only applied when `onIconClick` is set (i.e. the icon is rendered as a `<button>`). */
  iconButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  /** Click handler for the entire inner container (the area around the input). Can be used to focus the input when clicking anywhere in the field area, or to trigger custom behavior. */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /** Disables the entire text field. When `true`: - Input becomes non-editable and non-focusable - Clear button is hidden and icon is disabled - Visual disabled styles are applied */
  disabled?: boolean;
  /** Marks the field as invalid and triggers error styling. Also affects `aria-invalid` attribute. Note: The `helper` prop can override this if it contains items with `type: 'error'`. */
  invalid?: boolean;
  /** Makes the field read-only. User can focus and select text, but cannot modify the value. Useful for pre-filled data that should not be changed. Hides the clear button. */
  readOnly?: boolean;
  /** Helper text, success message, or error message displayed below the field. Accepts either: - A single `FeedbackTextProps` object - An array of `FeedbackTextProps` (useful for multiple messages or mixed error/success states) The component automatically detects error states from helper items. */
  helper?: FeedbackTextProps | FeedbackTextProps[];
  /** Fired when the input/textarea receives focus. */
  onFocus?: React.FocusEventHandler<FieldElement>;
  /** Fired when the input/textarea loses focus. */
  onBlur?: React.FocusEventHandler<FieldElement>;
  /** Hides the spinner/arrows for number inputs (`type="number"`). Only has effect when the underlying input has `type="number"`. */
  isArrowsHidden?: boolean;
  /** Callback fired when the clear button (×) is clicked. Useful if you need to perform additional actions besides clearing the value (e.g. analytics, resetting related fields, etc.). Note: The field value is automatically cleared regardless of this callback. */
  onClear?: () => void;
  /** Additional attributes for the input element. */
  input?: React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  /** Optional start slot element to render inside the input container, before the input field. */
  startSlot?: React.ReactNode;
  /** Optional end slot element to render inside the input container, after the input field. */
  endSlot?: React.ReactNode;
  /** Controls the visual size of the text field. - `'small'` → Compact version (smaller height, padding, and font size) - `'default'` → Standard size (most commonly used) - `'large'` → Larger touch target, bigger text and padding */
  size?: 'default' | 'small' | 'large';
  /** Icon displayed inside the text field on the right side. Accepts either: - A simple string (icon name) → e.g. `'search'`, `'user'`, `'calendar'` - A full `IconWithoutBackgroundProps` object for advanced configuration (size, color, className, etc.) When `onIconClick` is provided, the icon becomes a clickable button. Otherwise, it is rendered as a non-interactive decorative element. */
  icon?: string | IconWithoutBackgroundProps;
  /** If `true`, renders a `<textarea>` instead of a regular `<input>`. Useful for multi-line text input (comments, descriptions, addresses, etc.). Note: When using `isTextArea`, the component still behaves like a text field (same styling, clear button, icon support, validation, etc.). */
  isTextArea?: boolean;
  /** Placeholder text shown when the field is empty. Recommended to be short and descriptive. Avoid using placeholder as a label. */
  placeholder?: string;
  /** When `true`, displays a clear (×) button on the right side when the field has a value. Clicking the button clears the input and calls `onClear` (if provided). Hidden while the field is `readOnly` or disabled. `input.readOnly` only blocks typing, so the button stays for fields whose value changes another way, like a calendar-only DateField range. */
  isClearable?: boolean;
  /** Show the clear (×) button only while the field is hovered or focused, instead of whenever it has a value. Requires `isClearable`. */
  showClearOnInteraction?: boolean;
  /** Additional CSS class name applied to the root container (`<div>`). Use this for layout adjustments, custom spacing, or theming the entire text field wrapper. */
  className?: string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<TextFieldBreakpointProps>;
  md?: Partial<TextFieldBreakpointProps>;
  lg?: Partial<TextFieldBreakpointProps>;
  xl?: Partial<TextFieldBreakpointProps>;
  xxl?: Partial<TextFieldBreakpointProps>;
  /** Indicates whether the input field is required. If set to `true`, the required indicator (if provided) will be displayed next to the label. */
  required?: boolean;
  /** Controls the visibility of the label. Use `true` to hide the label visually while maintaining its space in the layout, or use 'keep-space' to hide it without collapsing the space it occupies. */
  hideLabel?: boolean | 'keep-space';
  /** Renders the label as a `<span>` instead of a `<label>` element. This is useful when the `Form` component already handles labels internally. */
  renderWithoutLabel?: boolean;
  /** Tooltip content to display when hovering over the info button. If provided, an info button with a tooltip will be rendered. */
  tooltip?: React.ReactNode;
  /** Additional props forwarded to the underlying `Label` component. Use `modifiers` to control how the label text wraps or breaks (e.g. `{ modifiers: 'nowrap' }`) so long labels don't distort the form layout. Breakpoint keys are supported for responsive wrapping (e.g. `{ modifiers: 'nowrap', sm: { modifiers: 'break-word' } }`). */
  labelProps?: LabelModifierProps;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type FieldElement = HTMLInputElement | HTMLTextAreaElement;
interface FeedbackTextProps {
    /**
     * Helper text
     */
    text: React.ReactNode | React.ReactNode[];
    /**
     * ID to reference the helper from aria-describedby attributes.
     * If omitted, then the id might be set through a parent component.
     */
    id?: string;
    /**
     * Additional custom class.
     */
    className?: string;
    /**
     * Type of form-helper.
     * @default hint
     */
    type?: FeedbackTextType;
    /**
     * Position of the helper.
     * @default left
     */
    position?: FeedbackTextPosition;
}
interface IconWithoutBackgroundProps extends IconSharedProps {
    background?: undefined;
    /**
     * Type of display
     * @default block
     */
    display?: 'block' | 'inline';
}
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type TextFieldBreakpointProps = {
    /**
     * Controls the visual size of the text field.
     *
     * - `'small'`  → Compact version (smaller height, padding, and font size)
     * - `'default'` → Standard size (most commonly used)
     * - `'large'`   → Larger touch target, bigger text and padding
     *
     * @default 'default'
     */
    size?: 'default' | 'small' | 'large';
    /**
     * Icon displayed inside the text field on the right side.
     *
     * Accepts either:
     * - A simple string (icon name) → e.g. `'search'`, `'user'`, `'calendar'`
     * - A full `IconWithoutBackgroundProps` object for advanced configuration (size, color, className, etc.)
     *
     * When `onIconClick` is provided, the icon becomes a clickable button.
     * Otherwise, it is rendered as a non-interactive decorative element.
     */
    icon?: string | IconWithoutBackgroundProps;
    /**
     * If `true`, renders a `<textarea>` instead of a regular `<input>`.
     * Useful for multi-line text input (comments, descriptions, addresses, etc.).
     *
     * Note: When using `isTextArea`, the component still behaves like a text field
     * (same styling, clear button, icon support, validation, etc.).
     *
     * @default false
     */
    isTextArea?: boolean;
    /**
     * Placeholder text shown when the field is empty.
     *
     * Recommended to be short and descriptive. Avoid using placeholder as a label.
     */
    placeholder?: string;
    /**
     * When `true`, displays a clear (×) button on the right side when the field has a value.
     *
     * Clicking the button clears the input and calls `onClear` (if provided).
     * Hidden while the field is `readOnly` or disabled. `input.readOnly` only blocks typing, so the button
     * stays for fields whose value changes another way, like a calendar-only DateField range.
     *
     * @default true
     */
    isClearable?: boolean;
    /**
     * Show the clear (×) button only while the field is hovered or focused, instead of whenever it has
     * a value. Requires `isClearable`.
     * @default false
     */
    showClearOnInteraction?: boolean;
    /**
     * Additional CSS class name applied to the root container (`<div>`).
     *
     * Use this for layout adjustments, custom spacing, or theming the entire text field wrapper.
     */
    className?: string;
};
type LabelModifierProps = BreakpointSupport<{
    modifiers?: LabelModifiers[] | LabelModifiers;
}>;

// ---- TimeField (components/TimeField/TimeField.d.ts) ----
import * as React from 'react';

/**
 * TimeField from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/time-field/time-field.stories.tsx).
 */
export interface TimeFieldProps {
  /** Unique identifier for the input field. */
  id: string;
  /** Label for the input field. Used for accessibility. */
  label: string;
  /** Props forwarded to the field's label (e.g. `{ modifiers: 'nowrap' }` to control how a long label wraps). Breakpoint keys are supported for responsive wrapping. */
  labelProps?: TextFieldProps['labelProps'];
  /** Current value of the time field (controlled). */
  value?: string;
  /** Initial value of the time field (uncontrolled). */
  defaultValue?: string;
  /** Callback fired when the time value changes. */
  onChange?: (time: string) => void;
  /** Makes the input read-only. Picker can still be opened if showPicker is true. */
  readOnly?: boolean;
  /** Disables the input and the picker. Equivalent of `<DateTimeField disabled>` — added so all three field siblings (`DateField`, `TimeField`, `DateTimeField`) share the same form-control idiom for "this field is fully unavailable". Forwards to the underlying `TextField`'s `disabled` attribute and short-circuits the picker open path. */
  disabled?: boolean;
  /** Marks the input as required. */
  required?: boolean;
  /** Placeholder text for the input field. */
  placeholder?: string;
  /** Additional props to pass to the underlying TextField component, excluding `id`, `label`, `value`, and `onChange`. */
  inputProps?: Omit<TextFieldProps, 'id' | 'label' | 'value' | 'onChange'>;
  /** Step interval in minutes for the time picker. */
  stepMinutes?: number;
  /** Additional CSS class for the container. */
  className?: string;
  /** Array of available times to show in the picker or dropdown. */
  availableTimes?: string[];
  /** Open the picker inside a modal instead of a floating popover. Useful on narrow viewports where a popover overlaps the input itself. - `true` always opens in a modal - `false` (default) always uses the popover - A breakpoint name (e.g. `'md'`) opens in a modal *below* that breakpoint and falls back to the popover from that breakpoint up Ignored when `useNativePicker` resolves to `true`. */
  modal?: TimeFieldModal;
  /** Extra props forwarded to the picker modal's `Modal.Content` — e.g. `size`, `width`, `maxWidth`, `position`, `fullscreen`, and per-breakpoint overrides. Lets the consumer tune the modal beyond its `size="small"` / `width="xs"` (capped to 312px) defaults. `className` is merged with the component's own (so the internal padding reset is preserved). Only applies when the picker opens as a modal. */
  modalProps?: Omit<ModalContentProps, 'children'>;
  /** If `true`, the field swaps the custom time-picker popover for the browser's native time picker (`<input type="time">`). Works on both mobile and desktop — useful when the consumer wants to skip the custom UI entirely. Note: When using the native picker, the `availableTimes` prop is ignored. */
  useNativePicker?: boolean;
  /** Determines how the time picker is triggered: - 'button' (default) – only clicking the icon opens the picker - 'input' – clicking anywhere in the input opens the picker */
  timePickerTrigger?: 'input' | 'button';
  /** Enables or disables the time picker popover. */
  showPicker?: boolean;
  /** Variant of the available times: - 'grid-buttons' – buttons grid - 'grid-radio' – radio buttons grid - 'dropdown' – dropdown list */
  availableTimesVariant?: 'grid-buttons' | 'grid-radio' | 'dropdown';
  /** Whether the field shows a clear button to reset the value. Disable it when the field is required or the value should not be cleared. */
  clearable?: boolean;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<TimeFieldBreakpointProps>;
  md?: Partial<TimeFieldBreakpointProps>;
  lg?: Partial<TimeFieldBreakpointProps>;
  xl?: Partial<TimeFieldBreakpointProps>;
  xxl?: Partial<TimeFieldBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface TextFieldProps extends BreakpointSupport<TextFieldBreakpointProps>, Omit<FormLabelProps, 'size' | 'id' | 'label'> {
    /**
     * Unique identifier for the text field.
     *
     * Required for accessibility (associates label, helper text, and input).
     * Also used to generate `aria-describedby` and helper IDs automatically.
     */
    id?: string;
    /**
     * The text or React node that serves as the label for the text field.
     * If `hideLabel` is `true`, the label will be visually hidden but still accessible to screen readers.
     * If `hideLabel` is `'keep-space'`, the label will be hidden but the space it occupies will be preserved.
     */
    label?: React.ReactNode;
    /**
     * Name attribute for the underlying input/textarea element.
     *
     * Important for form submission and integration with form libraries (React Hook Form, Formik, etc.).
     */
    name?: string;
    /**
     * Custom CSS class applied directly to the `<input>` or `<textarea>` element (via the internal `Field` component).
     *
     * Use this when you need to style the input itself (e.g. text alignment, font, custom focus styles).
     *
     * Note: The root container uses `className`.
     */
    inputClassName?: string;
    /**
     * Callback fired when the value changes. Receives the new value as a plain string.
     *
     * Preferred for most use cases (simpler than `onChangeEvent`).
     *
     * @param value - The current value of the field after change
     */
    onChange?: (value: string) => void;
    /**
     * Native `onChange` event handler.
     *
     * Gives you access to the full `ChangeEvent` object (useful if you need `event.target`, `event.preventDefault()`, etc.).
     *
     * Note: Both `onChange` and `onChangeEvent` are called when the value changes.
     */
    onChangeEvent?: React.ChangeEventHandler<FieldElement>;
    /**
     * Keyboard event handlers attached to the inner wrapper `<div>`.
     *
     * Useful for handling Enter key submission, arrow key navigation, or custom keyboard shortcuts.
     *
     * Note: These are **not** attached to the input/textarea directly, but to the surrounding container.
     */
    onKeyPress?: React.KeyboardEventHandler<HTMLDivElement>;
    /**
     * Key-down handler attached to the field's surrounding container (not the input directly).
     */
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
    /**
     * Key-up handler attached to the field's surrounding container (not the input directly).
     */
    onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
    /**
     * Default value for **uncontrolled** usage.
     *
     * Use this when you don't want to manage state yourself.
     * The component will manage its internal state.
     */
    defaultValue?: string;
    /**
     * Controlled value of the text field.
     *
     * When provided, the component becomes **fully controlled**.
     * You must update this value via `onChange` to reflect user input.
     */
    value?: string;
    /**
     * Called when the user clicks on the icon (only works if `icon` is provided).
     *
     * The icon is automatically wrapped in a `<button>` when this prop is present.
     *
     * @param event - Mouse event from the icon wrapper
     */
    onIconClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
    /**
     * Extra HTML attributes spread on the icon `<button>` element.
     *
     * Use this to wire ARIA state (e.g. `aria-expanded`, `aria-controls`,
     * `aria-haspopup`) directly to the icon trigger, so screen readers announce
     * disclosure state correctly when the icon opens a popover / dialog.
     *
     * Only applied when `onIconClick` is set (i.e. the icon is rendered as a
     * `<button>`).
     */
    iconButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    /**
     * Click handler for the entire inner container (the area around the input).
     *
     * Can be used to focus the input when clicking anywhere in the field area,
     * or to trigger custom behavior.
     */
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    /**
     * Disables the entire text field.
     *
     * When `true`:
     * - Input becomes non-editable and non-focusable
     * - Clear button is hidden and icon is disabled
     * - Visual disabled styles are applied
     */
    disabled?: boolean;
    /**
     * Marks the field as invalid and triggers error styling.
     *
     * Also affects `aria-invalid` attribute.
     *
     * Note: The `helper` prop can override this if it contains items with `type: 'error'`.
     */
    invalid?: boolean;
    /**
     * Makes the field read-only.
     *
     * User can focus and select text, but cannot modify the value.
     * Useful for pre-filled data that should not be changed. Hides the clear button.
     */
    readOnly?: boolean;
    /**
     * Helper text, success message, or error message displayed below the field.
     *
     * Accepts either:
     * - A single `FeedbackTextProps` object
     * - An array of `FeedbackTextProps` (useful for multiple messages or mixed error/success states)
     *
     * The component automatically detects error states from helper items.
     */
    helper?: FeedbackTextProps | FeedbackTextProps[];
    /**
     * Fired when the input/textarea receives focus.
     */
    onFocus?: React.FocusEventHandler<FieldElement>;
    /**
     * Fired when the input/textarea loses focus.
     */
    onBlur?: React.FocusEventHandler<FieldElement>;
    /**
     * Hides the spinner/arrows for number inputs (`type="number"`).
     *
     * Only has effect when the underlying input has `type="number"`.
     *
     * @default true
     */
    isArrowsHidden?: boolean;
    /**
     * Callback fired when the clear button (×) is clicked.
     *
     * Useful if you need to perform additional actions besides clearing the value
     * (e.g. analytics, resetting related fields, etc.).
     *
     * Note: The field value is automatically cleared regardless of this callback.
     */
    onClear?: () => void;
    /**
     * Additional attributes for the input element.
     */
    input?: React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    /**
     * Optional start slot element to render inside the input container, before the input field.
     */
    startSlot?: React.ReactNode;
    /**
     * Optional end slot element to render inside the input container, after the input field.
     */
    endSlot?: React.ReactNode;
}
type TimeFieldModal = boolean | Exclude<Breakpoint, 'xs'>;
interface ModalContentProps extends BreakpointSupport<ModalContentBreakpointProps> {
    /**
     * `<Modal.Header>`, `<Modal.Body>`, `<Modal.Footer>` and any other content.
     */
    children: ReactNode;
    /**
     * Size density — controls header/body/footer padding.
     * @default default
     */
    size?: ModalSize;
    /**
     * Where overflow scrolls. `'content'` keeps the modal frame fixed and scrolls the body;
     * `'page'` lets the modal grow with content and scrolls the overlay around it.
     * @default content
     */
    scrollBehavior?: ModalScrollBehavior;
    /**
     * Trap focus inside the modal while open.
     * @default true
     */
    trapFocus?: boolean;
    /**
     * Restore focus to the trigger after closing.
     * @default true
     */
    returnFocus?: boolean;
    /**
     * Render the dimmed backdrop. `false` keeps portal + focus management but no overlay.
     * @default true
     */
    showOverlay?: boolean;
    /**
     * Lock background scroll while open.
     * @default true
     */
    lockScroll?: boolean;
    /**
     * Render visually-hidden dismiss buttons at the start and end of the dialog
     * so touch screen-readers can escape without an Escape key.
     * @default false
     */
    visuallyHiddenDismiss?: boolean;
    /**
     * Override the dialog's labelling element. Only needed when the label lives
     * outside `<Modal.Header>` — the header wires this automatically.
     */
    'aria-labelledby'?: string;
    /**
     * Override the dialog's describing element. Only needed when the description
     * lives outside `<Modal.Header>` — the header wires this automatically.
     */
    'aria-describedby'?: string;
    /**
     * Plain-text accessible name. Use when there's no visible title (icon-only
     * confirmation, etc.). Ignored when `aria-labelledby` is set.
     */
    'aria-label'?: string;
    /**
     * Element to focus on open. Tabbable index (`0` = first tabbable, `-1` = dialog
     * container) or a ref. Override the default to focus a "Cancel" button on
     * destructive prompts, or the first input on form-heavy modals.
     */
    initialFocus?: ComponentProps<typeof FloatingFocusManager>['initialFocus'];
    /**
     * Additional class name on the modal container.
     */
    className?: string;
}
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type TimeFieldBreakpointProps = {
    /**
     * If `true`, the field swaps the custom time-picker popover for the
     * browser's native time picker (`<input type="time">`). Works on both
     * mobile and desktop — useful when the consumer wants to skip the custom
     * UI entirely.
     * Note: When using the native picker, the `availableTimes` prop is ignored.
     * @default false
     */
    useNativePicker?: boolean;
    /**
     * Determines how the time picker is triggered:
     * - 'button' (default) – only clicking the icon opens the picker
     * - 'input' – clicking anywhere in the input opens the picker
     */
    timePickerTrigger?: 'input' | 'button';
    /**
     * Enables or disables the time picker popover.
     * @default true
     */
    showPicker?: boolean;
    /**
     * Variant of the available times:
     * - 'grid-buttons' – buttons grid
     * - 'grid-radio' – radio buttons grid
     * - 'dropdown' – dropdown list
     */
    availableTimesVariant?: 'grid-buttons' | 'grid-radio' | 'dropdown';
    /**
     * Whether the field shows a clear button to reset the value. Disable it
     * when the field is required or the value should not be cleared.
     * @default true
     */
    clearable?: boolean;
};

// ---- TimePicker (components/TimePicker/TimePicker.d.ts) ----
import * as React from 'react';

/**
 * TimePicker from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/time-picker/time-picker.stories.tsx).
 */
export interface TimePickerProps {
  /** Currently selected time in "HH:mm" format (24-hour). */
  value?: string;
  /** Initial time value for uncontrolled mode. Should be in "HH:mm" format. */
  defaultValue?: string;
  /** Callback fired when the user selects a new time. Returns the selected time in "HH:mm" format. */
  onChange?: (time: string) => void;
  /** Minute step interval for the minute wheel. Determines which minute values are shown (e.g. 00, 05, 10, ..., 55). */
  stepMinutes?: number;
  /** When provided, the component switches from wheel mode to grid mode. Displays a list/grid of predefined time slots instead of scrollable wheels. Each string must be in "HH:mm" format. */
  availableTimes?: string[];
  /** Variant of the grid rendered when `availableTimes` is provided: - 'buttons' – buttons grid - 'radio' – radio buttons grid */
  gridVariant?: 'button' | 'radio';
  /** Additional CSS class name to apply to the root element. Useful for custom styling and layout overrides. */
  className?: string;
  /** Whether to render the surrounding card (border, background, radius). Set to `false` when embedding inside a parent that already provides its own surface — e.g. alongside a calendar inside `DateTimeField`. The inner gradient masks and column separators are preserved either way. */
  bordered?: boolean;
}

// ---- Toggle (components/Toggle/Toggle.d.ts) ----
import * as React from 'react';

/**
 * Toggle from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/toggle/toggle.stories.tsx).
 */
export interface ToggleProps {
  /** Unique identifier for the toggle input. Required for accessibility and to link the label with the input. */
  id: string;
  /** Label text or element displayed next to the toggle. This is shown to users and should clearly describe what the toggle does. */
  label: React.ReactNode;
  /** Visually hides the label while keeping it accessible to screen readers. Useful when the toggle's purpose is clear from context (e.g., in a settings row). */
  hideLabel?: boolean;
  /** Position of the label relative to the toggle switch. */
  labelPosition?: 'left' | 'right';
  /** Optional helper text displayed below the toggle. Can be used to provide additional context or validation messages. */
  helper?: FeedbackTextProps;
  /** Additional CSS class name(s) to apply to the toggle wrapper. Useful for custom styling or theming from parent components. */
  className?: string;
  /** Controlled state of the toggle. Use this together with `onChange` for full control over the checked state. */
  checked?: boolean;
  /** Initial checked state for uncontrolled usage. Ignored if `checked` prop is provided. */
  defaultChecked?: boolean;
  /** Callback fired when the toggle state changes. */
  onChange?: void;
  /** Size of the toggle switch. */
  size?: 'default' | 'large';
  /** Color variant of the toggle. - `primary`: Standard toggle (usually blue/brand color) - `colored`: Alternative accent color (e.g. for special settings) */
  color?: 'primary' | 'colored';
  /** Visual style variant of the toggle. */
  type?: 'filled' | 'outlined';
  /** Shows a lock icon inside the toggle knob. Typically used with `size="large"` to indicate secure/private settings. */
  icon?: boolean;
  /** Disables the toggle, preventing user interaction. */
  disabled?: boolean;
  /** Shows a loading spinner inside the toggle instead of the icon or dot. Useful for async operations (e.g. saving settings). When `true`, `onChange` will not be triggered. */
  isLoading?: boolean;
  /** Tooltip content shown when hovering over the label. Useful for providing extra explanation without cluttering the UI. */
  tooltip?: string;
  /** Additional props forwarded to the underlying `Label` component. Use `modifiers` to control how the label text wraps or breaks (e.g. `{ modifiers: 'nowrap' }`). */
  labelProps?: FormLabelProps['labelProps'];
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface FeedbackTextProps {
    /**
     * Helper text
     */
    text: React.ReactNode | React.ReactNode[];
    /**
     * ID to reference the helper from aria-describedby attributes.
     * If omitted, then the id might be set through a parent component.
     */
    id?: string;
    /**
     * Additional custom class.
     */
    className?: string;
    /**
     * Type of form-helper.
     * @default hint
     */
    type?: FeedbackTextType;
    /**
     * Position of the helper.
     * @default left
     */
    position?: FeedbackTextPosition;
}
interface FormLabelProps {
    /**
     * The unique identifier for the input element that this label is associated with.
     * This ID should match the input element's `id` attribute to ensure accessibility.
     */
    id: string;
    /**
     * The text content of the label that describes the input field.
     */
    label: React.ReactNode;
    /**
     * Controls the visibility of the label.
     * Use `true` to hide the label visually while maintaining its space in the layout,
     * or use 'keep-space' to hide it without collapsing the space it occupies.
     */
    hideLabel?: boolean | 'keep-space';
    /**
     * Indicates whether the input field is required.
     * If set to `true`, the required indicator (if provided) will be displayed next to the label.
     */
    required?: boolean;
    /**
     * Additional className.
     */
    className?: string;
    /**
     * Renders the label as a `<span>` instead of a `<label>` element.
     * This is useful when the `Form` component already handles labels internally.
     */
    renderWithoutLabel?: boolean;
    /**
     * Specifies the size of the label text.
     * Options include 'small' for a smaller label size or 'default' for the standard size.
     * @default default
     */
    size?: 'small' | 'default';
    /**
     * Tooltip content to display when hovering over the info button.
     * If provided, an info button with a tooltip will be rendered.
     */
    tooltip?: React.ReactNode;
    /**
     * Additional props forwarded to the underlying `Label` component.
     * Use `modifiers` to control how the label text wraps or breaks
     * (e.g. `{ modifiers: 'nowrap' }`) so long labels don't distort the form layout.
     * Breakpoint keys are supported for responsive wrapping
     * (e.g. `{ modifiers: 'nowrap', sm: { modifiers: 'break-word' } }`).
     */
    labelProps?: LabelModifierProps;
}

// ---- Footer (components/Footer/Footer.d.ts) ----
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

// ---- Col (components/Col/Col.d.ts) ----
import * as React from 'react';

/**
 * Col from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/layout/grid/col.stories.tsx).
 */
export interface ColProps {
  /** Col children. */
  children?: React.ReactNode;
  /** Base element. */
  element?: ColElement;
  /** Additional class. */
  className?: string;
  /** ColSpec object to change Row behavior on xs devices (<576px). Or number of column width. */
  xs?: ColSpec | ColSize;
  /** ColSpec object to change Row behavior on sm devices (≥576px). Or number of column width. */
  sm?: ColSpec | ColSize;
  /** ColSpec object to change Row behavior on md devices (≥768px). Or number of column width. */
  md?: ColSpec | ColSize;
  /** ColSpec object to change Row behavior on lg devices (≥992px). Or number of column width. */
  lg?: ColSpec | ColSize;
  /** ColSpec object to change Row behavior on xl devices (≥1200px). Or number of column width. */
  xl?: ColSpec | ColSize;
  /** ColSpec object to change Row behavior on xxl devices (≥1400px). Or number of column width. */
  xxl?: ColSpec | ColSize;
  /** Onclick function handler */
  onClick?: (e: React.MouseEvent<HTMLDivElement | HTMLSpanElement | HTMLLinkElement>) => void;
  /** Number of column width. Use `auto` to give columns their natural widths. */
  width?: ColSize;
  /** Move columns to the right 1-11 columns. https://getbootstrap.com/docs/5.1/layout/columns/#offsetting-columns */
  offset?: NumberAttr;
  /** Use for controlling the visual order of your Cols. https://getbootstrap.com/docs/5.1/layout/columns/#order-classes */
  order?: ColOrder;
  /** Use to vertically align columns individually. https://getbootstrap.com/docs/5.1/layout/columns/#alignment */
  align?: ColAlign;
  /** Use to toggle a flex item’s ability to grow to fill available space. https://getbootstrap.com/docs/5.1/utilities/flex/#grow-and-shrink */
  grow?: 0 | 1;
  /** Use to toggle a flex item’s ability to shrink if necessary. https://getbootstrap.com/docs/5.1/utilities/flex/#grow-and-shrink */
  shrink?: 0 | 1;
}
// Also accepts 260 standard React / HTML attributes of its root element.

// Referenced types, resolved one level deep (see the story source for the rest).
type ColElement = 'dt' | 'dd';
interface ColSpec {
    /**
     * Number of column width.
     * Use `auto` to give columns their natural widths.
     */
    width?: ColSize;
    /**
     * Move columns to the right 1-11 columns.
     * https://getbootstrap.com/docs/5.1/layout/columns/#offsetting-columns
     */
    offset?: NumberAttr;
    /**
     * Use for controlling the visual order of your Cols.
     * https://getbootstrap.com/docs/5.1/layout/columns/#order-classes
     */
    order?: ColOrder;
    /**
     * Use to vertically align columns individually.
     * https://getbootstrap.com/docs/5.1/layout/columns/#alignment
     */
    align?: ColAlign;
    /**
     * Use to toggle a flex item’s ability to grow to fill available space.
     * https://getbootstrap.com/docs/5.1/utilities/flex/#grow-and-shrink
     */
    grow?: 0 | 1;
    /**
     * Use to toggle a flex item’s ability to shrink if necessary.
     * https://getbootstrap.com/docs/5.1/utilities/flex/#grow-and-shrink
     */
    shrink?: 0 | 1;
}
type ColSize = 'auto' | NumberAttr;
type NumberAttr = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ColOrder = ColOrderNumber | 'first' | 'last';
type ColAlign = 'start' | 'center' | 'end';

// ---- Row (components/Row/Row.d.ts) ----
import * as React from 'react';

/**
 * Row from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/layout/grid/row.stories.tsx).
 */
export interface RowProps {
  /** Row children. Row direct children should always be Col components */
  children?: React.ReactElement<ColProps> | React.ReactElement<ColProps>[] | React.ReactNode;
  /** Additional class. */
  className?: string;
  /** Base element. */
  element?: RowElement;
  /** RowSpec object to change Row behavior on xs devices (<576px). Or number of columns that will fit next to each other. */
  xs?: RowSpec | Cols;
  /** RowSpec object to change Row behavior on sm devices (≥576px). Or number of columns that will fit next to each other. */
  sm?: RowSpec | Cols;
  /** RowSpec object to change Row behavior on md devices (≥768px). Or number of columns that will fit next to each other. */
  md?: RowSpec | Cols;
  /** RowSpec object to change Row behavior on lg devices (≥992px). Or number of columns that will fit next to each other. */
  lg?: RowSpec | Cols;
  /** RowSpec object to change Row behavior on xl devices (≥1200px). Or number of columns that will fit next to each other. */
  xl?: RowSpec | Cols;
  /** RowSpec object to change Row behavior on xxl devices (≥1400px). Or number of columns that will fit next to each other. */
  xxl?: RowSpec | Cols;
  /** The number of columns that will fit next to each other. Use `auto` to give columns their natural widths. */
  cols?: Cols;
  /** Use justify-content utilities to change the alignment of items on the main axis. https://getbootstrap.com/docs/5.1/utilities/flex/#justify-content */
  justifyContent?: JustifyContent;
  /** Use align-items utilities to change the alignment of items on the cross axis. https://getbootstrap.com/docs/5.1/utilities/flex/#align-items */
  alignItems?: AlignItems;
  /** Add gap between items. https://getbootstrap.com/docs/5.1/utilities/spacing/#gap */
  gap?: Spacer;
  /** Change gutter between items. https://getbootstrap.com/docs/5.0/layout/gutters/ */
  gutter?: Gutter;
  gutterX?: Gutter;
  gutterY?: Gutter;
  /** Set the direction of flex items in a flex container with direction utilities. https://getbootstrap.com/docs/5.1/utilities/flex/#direction */
  direction?: Direction;
  /** Change how flex items wrap in a flex container. https://getbootstrap.com/docs/5.1/utilities/flex/#wrap */
  wrap?: Wrap;
}
// Also accepts 261 standard React / HTML attributes of its root element.

// Referenced types, resolved one level deep (see the story source for the rest).
interface ColProps extends ColSpec, React.HTMLAttributes<HTMLElement> {
    /**
     * Col children.
     */
    children?: React.ReactNode;
    /**
     * Base element.
     * @default div
     */
    element?: ColElement;
    /**
     * Additional class.
     */
    className?: string;
    /**
     * ColSpec object to change Row behavior on xs devices (<576px).
     * Or number of column width.
     */
    xs?: ColSpec | ColSize;
    /**
     * ColSpec object to change Row behavior on sm devices (≥576px).
     * Or number of column width.
     */
    sm?: ColSpec | ColSize;
    /**
     * ColSpec object to change Row behavior on md devices (≥768px).
     * Or number of column width.
     */
    md?: ColSpec | ColSize;
    /**
     * ColSpec object to change Row behavior on lg devices (≥992px).
     * Or number of column width.
     */
    lg?: ColSpec | ColSize;
    /**
     * ColSpec object to change Row behavior on xl devices (≥1200px).
     * Or number of column width.
     */
    xl?: ColSpec | ColSize;
    /**
     * ColSpec object to change Row behavior on xxl devices (≥1400px).
     * Or number of column width.
     */
    xxl?: ColSpec | ColSize;
    /**
     * Onclick function handler
     */
    onClick?: (e: React.MouseEvent<HTMLDivElement | HTMLSpanElement | HTMLLinkElement>) => void;
}
type RowElement = 'div' | 'ul' | 'ol' | 'span' | 'dl';
interface RowSpec {
    /**
     * The number of columns that will fit next to each other.
     * Use `auto` to give columns their natural widths.
     */
    cols?: Cols;
    /**
     * Use justify-content utilities to change the alignment of items on the main axis.
     * https://getbootstrap.com/docs/5.1/utilities/flex/#justify-content
     */
    justifyContent?: JustifyContent;
    /**
     * Use align-items utilities to change the alignment of items on the cross axis.
     * https://getbootstrap.com/docs/5.1/utilities/flex/#align-items
     */
    alignItems?: AlignItems;
    /**
     * Add gap between items.
     * https://getbootstrap.com/docs/5.1/utilities/spacing/#gap
     */
    gap?: Spacer;
    /**
     * Change gutter between items.
     * https://getbootstrap.com/docs/5.0/layout/gutters/
     */
    gutter?: Gutter;
    gutterX?: Gutter;
    gutterY?: Gutter;
    /**
     * Set the direction of flex items in a flex container with direction utilities.
     * https://getbootstrap.com/docs/5.1/utilities/flex/#direction
     */
    direction?: Direction;
    /**
     * Change how flex items wrap in a flex container.
     * https://getbootstrap.com/docs/5.1/utilities/flex/#wrap
     */
    wrap?: Wrap;
}
type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
type JustifyContent = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
type AlignItems = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
type Spacer = 0 | 1 | 2 | 3 | 4 | 5;
type Gutter = 0 | 1 | 2 | 3 | 4 | 5;
type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type Wrap = 'wrap' | 'nowrap' | 'wrap-reverse';

// ---- Header (components/Header/Header.d.ts) ----
import * as React from 'react';

/**
 * Header from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/layout/header/header.stories.tsx).
 */
export interface HeaderProps {
  /** Content rendered inside the header, typically Header.Logo, Header.Center, and Header.Actions subcomponents. */
  children: React.ReactNode;
  /** Toggle element for the mobile side navigation menu. Typically a SideNav.Toggle component. */
  toggle?: React.ReactNode;
  /** Content rendered in the top bar above the main header. */
  top?: React.ReactNode;
  /** Content rendered below the main header bar on mobile viewports (below `md` breakpoint). Commonly used for a mobile-specific search bar or other compact navigation elements. */
  bottom?: React.ReactNode;
  /** Additional CSS class name applied to the header wrapper. */
  className?: string;
  /** Horizontal alignment (`justify-content`) of the top bar content. Supports per-breakpoint overrides, e.g. `topAlignment="center"` with `lg={{ topAlignment: 'space-between' }}`. */
  topAlignment?: HeaderAlignment;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<HeaderBreakpointProps>;
  md?: Partial<HeaderBreakpointProps>;
  lg?: Partial<HeaderBreakpointProps>;
  xl?: Partial<HeaderBreakpointProps>;
  xxl?: Partial<HeaderBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type HeaderAlignment = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface HeaderBreakpointProps {
    /**
     * Horizontal alignment (`justify-content`) of the top bar content.
     * Supports per-breakpoint overrides, e.g. `topAlignment="center"` with `lg={{ topAlignment: 'space-between' }}`.
     * @default space-between
     */
    topAlignment?: HeaderAlignment;
}

// ---- HideAt (components/HideAt/HideAt.d.ts) ----
import * as React from 'react';

/**
 * HideAt from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/layout/hide-at/hide-at.stories.tsx).
 */
export interface HideAtProps {
  children: React.ReactNode;
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;
}

// ---- ShowAt (components/ShowAt/ShowAt.d.ts) ----
import * as React from 'react';

/**
 * ShowAt from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/layout/show-at/show-at.stories.tsx).
 */
export interface ShowAtProps {
  children: React.ReactNode;
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;
}

// ---- SideNav (components/SideNav/SideNav.d.ts) ----
import * as React from 'react';

/**
 * SideNav from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/layout/sidenav/sidenav.stories.tsx).
 */
export interface SideNavProps<C extends React.ElementType = 'a'> {
  /** Render all anchors (except logoLink and skipLink) as this component */
  linkAs?: never;
  /** Level 1 menu links */
  navItems: SideNavItemProps<UnknownType>[];
  /** SideNav menu aria-label */
  ariaLabel: string;
  /** Id of the navigation */
  id?: string;
  /** Show dividers between navigation items */
  showDividers?: boolean;
  /** Additional class names for the sidenav component */
  className?: string;
  /** Breakpoint at which to switch to mobile view */
  mobileBreakpoint?: 'mobile' | 'tablet';
  /** Whether to show the mobile overlay when in mobile view */
  showMobileOverlay?: boolean;
  /** Callback when the mobile menu is toggled */
  onMenuToggle?: (isOpen: boolean) => void;
  /** Controls the open state of the mobile sidenav. When provided, the mobile menu becomes a controlled component. To control the menu externally (e.g. from a toggle button), pair this prop with `SideNav.Toggle`: ```tsx const [isOpen, setIsOpen] = useState(true); <SideNav.Toggle menuOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} /> <SideNav isMobileOpen={isOpen} ariaLabel="Mobile menu" navItems={...} /> ``` If not provided, the mobile menu manages its open state internally based on viewport size. */
  isMobileOpen?: boolean;
  /** Whether the sidenav is collapsed (showing only icons/shortened text) */
  isCollapsed?: boolean;
  /** Callback when the sidenav is toggled between collapsed/expanded */
  onCollapseToggle?: (isCollapsed: boolean) => void;
  /** Height of the SideNavIem <br/> Medium/small better for dashboards */
  sideNavItemSize?: SideNavItemSize;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type SideNavItemProps<C extends React.ElementType = 'a'> = LinkProps<C> & {
    /**
     * Icon of the item
     */
    icon?: string | IconWithoutBackgroundProps;
    /**
     * Submenu items (legacy)
     */
    subItems?: SideNavItemProps<C>[];
    /**
     * Grouped submenu items (preferred for headings)
     */
    subItemGroups?: {
        subHeading?: React.ReactNode;
        subItems: SideNavItemProps<C>[];
    }[];
    /**
     * Whether the sidenav is currently collapsed
     */
    isCollapsed?: boolean;
    /**
     * Whether this item with children should be open initially
     */
    isDefaultOpen?: boolean;
    /**
     * Height of the SideNavIem
     * <br/> Medium/small better for dashboards
     * @default default
     */
    sideNavItemSize?: SideNavItemSize;
};
type UnknownType = any;
type SideNavItemSize = 'default' | 'medium' | 'small';

// ---- TopNav (components/TopNav/TopNav.d.ts) ----
import * as React from 'react';

/**
 * TopNav from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/layout/top-nav/top-nav.stories.tsx).
 */
export interface TopNavProps {
  /** `TopNav.Item` and `TopNav.Separator` children. Any other React node is ignored. Fragments are flattened, so `<>…</>` wrappers work transparently. */
  children: ReactNode;
  /** Accessible name for the wrapping `<nav>` landmark. */
  ariaLabel: string;
  /** Breakpoint below which the bar collapses into the shared Sidenav mobile drawer. Pass any TEDI breakpoint name (`xs`/`sm`/`md`/`lg`/`xl`/`xxl`). */
  mobileBreakpoint?: Breakpoint;
  /** Controlled open state for the mobile drawer. Pair with `onMenuToggle` to wire it to an external toggle button. */
  isMobileOpen?: boolean;
  /** Fires whenever the mobile drawer opens or closes. */
  onMenuToggle?: (open: boolean) => void;
  /** Dim the rest of the viewport when the mobile drawer is open. */
  showMobileOverlay?: boolean;
  /** Additional class name applied to the desktop `<nav>`. */
  className?: string;
  /** Element id forwarded to the desktop `<nav>`. */
  id?: string;
  /** Controls how the submenu (mega-menu) panel sizes and positions itself when the active item has submenu content. Both options use the same padding — this only affects the panel's width and horizontal position, not its density. - `'full'` (default) — the panel stretches to the full nav width and is centered, suitable for wide multi-column mega-menus. - `'content'` — the panel is only as wide as its content and sits left-aligned directly under the active item (it is *not* a smaller / tighter variant — just not stretched). Good for single- or few-column menus. */
  submenuFit?: 'full' | 'content';
  /** Constrains the inner content (item bar and full-width submenu inner) to a maximum width and centers it inside the blue `<nav>` background. Pass any valid CSS length (e.g. `1440`, `'1440px'`, `'90rem'`), or a TEDI breakpoint name (`'sm' | 'md' | 'lg' | 'xl' | 'xxl'`) — these resolve to the breakpoint's `min-width` (36rem / 48rem / 62rem / 75rem / 87.5rem respectively), useful for aligning the nav inner with a breakpoint-driven content container. The `<nav>` itself still spans 100% of its container. Pass `'none'` (or `0`) to disable the constraint and let the bar fill the full width of the nav. */
  maxWidth?: TopNavMaxWidth | 'none';
}

// Referenced types, resolved one level deep (see the story source for the rest).
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type TopNavMaxWidth = number | BreakpointWidthName | (string & {});

// ---- VerticalSpacing (components/VerticalSpacing/VerticalSpacing.d.ts) ----
import * as React from 'react';

/**
 * VerticalSpacing from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/layout/vertical-spacing/vertical-spacing.stories.tsx).
 */
export interface VerticalSpacingProps {
  /** Any content to be rendered within the spacing component */
  children: React.ReactNode | React.ReactNode[];
  /** The HTML element to render, such as `div`, `section`, `article`, etc */
  element?: keyof JSX.IntrinsicElements;
  /** Additional class name(s) to apply to the element */
  className?: string;
  /** Additional inline styles, merged with the internal spacing custom property (rather than replacing it). */
  style?: React.CSSProperties;
  /** The size of the vertical spacing, applied as `margin-bottom` The value corresponds to `em` units */
  size?: VerticalSpacingSize;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<VerticalSpacingBreakpointProps>;
  md?: Partial<VerticalSpacingBreakpointProps>;
  lg?: Partial<VerticalSpacingBreakpointProps>;
  xl?: Partial<VerticalSpacingBreakpointProps>;
  xxl?: Partial<VerticalSpacingBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type VerticalSpacingSize = 0 | 0.25 | 0.5 | 0.75 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2.5 | 3 | 4 | 5;
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type VerticalSpacingBreakpointProps = {
    /**
     * The size of the vertical spacing, applied as `margin-bottom`
     * The value corresponds to `em` units
     * @default 1
     */
    size?: VerticalSpacingSize;
};

// ---- ProgressBar (components/ProgressBar/ProgressBar.d.ts) ----
import * as React from 'react';

/**
 * ProgressBar from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/loaders/progress-bar/progress-bar.stories.tsx).
 */
export interface ProgressBarProps {
  /** Id forwarded to the bar element so external `<label htmlFor>` can target it. */
  id?: string;
  /** Progress value, clamped to `0..100`. `NaN` is treated as `0`. */
  value?: number;
  /** Label rendered above or inline with the bar. */
  label?: string;
  /** Renders a required indicator on the label. Ignored without `label`. */
  required?: boolean;
  /** Accessible name. Falls back to `label`. */
  ariaLabel?: string;
  /** Use the 4px bar height instead of the 8px default. */
  small?: boolean;
  /** Label placement. Ignored without `label`. */
  labelPosition?: ProgressBarLabelPosition;
  /** Show the percentage value. */
  showValue?: boolean;
  /** Where the percentage sits relative to the bar / hint row. */
  valuePosition?: ProgressBarValuePosition;
  /** Override the rendered value text (e.g. `"1 / 5"`) without affecting the fill. */
  valueLabel?: string;
  /** Hint or error text rendered below the bar via `FeedbackText`. */
  helper?: FeedbackTextProps;
  /** Class on the root wrapper. */
  className?: string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<ProgressBarBreakpointProps>;
  md?: Partial<ProgressBarBreakpointProps>;
  lg?: Partial<ProgressBarBreakpointProps>;
  xl?: Partial<ProgressBarBreakpointProps>;
  xxl?: Partial<ProgressBarBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type ProgressBarLabelPosition = 'top' | 'horizontal';
type ProgressBarValuePosition = 'horizontal' | 'bottom';
interface FeedbackTextProps {
    /**
     * Helper text
     */
    text: React.ReactNode | React.ReactNode[];
    /**
     * ID to reference the helper from aria-describedby attributes.
     * If omitted, then the id might be set through a parent component.
     */
    id?: string;
    /**
     * Additional custom class.
     */
    className?: string;
    /**
     * Type of form-helper.
     * @default hint
     */
    type?: FeedbackTextType;
    /**
     * Position of the helper.
     * @default left
     */
    position?: FeedbackTextPosition;
}
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type ProgressBarBreakpointProps = {
    /**
     * Use the 4px bar height instead of the 8px default.
     * @default false
     */
    small?: boolean;
    /**
     * Label placement. Ignored without `label`.
     * @default top
     */
    labelPosition?: ProgressBarLabelPosition;
    /**
     * Show the percentage value.
     * @default true
     */
    showValue?: boolean;
    /**
     * Where the percentage sits relative to the bar / hint row.
     * @default horizontal
     */
    valuePosition?: ProgressBarValuePosition;
    /**
     * Override the rendered value text (e.g. `"1 / 5"`) without affecting the fill.
     */
    valueLabel?: string;
    /**
     * Hint or error text rendered below the bar via `FeedbackText`.
     */
    helper?: FeedbackTextProps;
    /** Class on the root wrapper. */
    className?: string;
};

// ---- Skeleton (components/Skeleton/Skeleton.d.ts) ----
import * as React from 'react';

/**
 * Skeleton from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/loaders/skeleton/skeleton.stories.tsx).
 */
export interface SkeletonProps {
  /** The content to be rendered inside the skeleton placeholder. */
  children?: React.ReactNode | React.ReactNode[];
  /** Custom class names to apply to the skeleton component for styling purposes. */
  className?: string;
  /** The accessibility label announced by screen readers when the skeleton component mounts. This message informs users that content is loading. If omitted, all skeletons on the page are combined into a single status message. */
  label?: string;
  /** The accessibility label announced by screen readers when the skeleton component unmounts. This message informs users that content has finished loading. This label is only announced if the delay specified by `labelDelay` is met. */
  completedLabel?: string;
  /** The delay, in milliseconds, before the screen reader announces the `label` when the component mounts. If the content loads faster than this delay, the label may not be announced to avoid unnecessary interruptions. */
  labelDelay?: number;
}

// ---- Spinner (components/Spinner/Spinner.d.ts) ----
import * as React from 'react';

/**
 * Spinner from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/loaders/spinner/spinner.stories.tsx).
 */
export interface SpinnerProps {
  /** Adds a custom CSS class to the spinner element for additional styling or theming purposes. */
  className?: string;
  /** Provides a text label for screen readers to announce the spinner's purpose or status. */
  label?: string;
  /** Renders the spinner as purely decorative — no `role="status"` live region and no screen-reader label. Use when the loading state is already announced by an ancestor (e.g. a button's `aria-busy`), so it isn't announced twice. */
  decorative?: boolean;
  /** Defines the size of the spinner. Accepted values: 8, 10 (small), 12, 16 (default), 18, 24, 36, 48 (large). */
  size?: SpinnerSize;
  /** Specifies the color theme of the spinner. The color should meet accessibility standards for color contrast. */
  color?: SpinnerColor;
  /** Sets the spinner's positioning behavior. This is useful when you want to position the spinner over other elements. */
  position?: SpinnerPosition;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<SpinnerBreakpointProps>;
  md?: Partial<SpinnerBreakpointProps>;
  lg?: Partial<SpinnerBreakpointProps>;
  xl?: Partial<SpinnerBreakpointProps>;
  xxl?: Partial<SpinnerBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type SpinnerSize = IconSize | 10;
type SpinnerColor = 'primary' | 'secondary';
type SpinnerPosition = 'absolute';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type SpinnerBreakpointProps = {
    /**
     * Defines the size of the spinner.
     * Accepted values: 8, 10 (small), 12, 16 (default), 18, 24, 36, 48 (large).
     *
     * @default 16
     */
    size?: SpinnerSize;
    /**
     * Specifies the color theme of the spinner.
     * The color should meet accessibility standards for color contrast.
     *
     * @default 'primary'
     */
    color?: SpinnerColor;
    /**
     * Sets the spinner's positioning behavior.
     * This is useful when you want to position the spinner over other elements.
     */
    position?: SpinnerPosition;
};

// ---- Affix (components/Affix/Affix.d.ts) ----
import * as React from 'react';

/**
 * Affix from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/misc/affix/affix.stories.tsx).
 */
export interface AffixProps {
  /** Affix children */
  children?: ReactNode;
  /** Additional class. */
  className?: string;
  /** Position of Affix. */
  position?: 'sticky' | 'fixed';
  /** Spacing from the top of the Container. */
  top?: AffixPosition;
  /** Spacing from the bottom of the Container. */
  bottom?: AffixPosition;
  /** Spacing from the left of the Container. */
  left?: AffixPosition;
  /** Spacing from the right of the Container. */
  right?: AffixPosition;
  /** Determine what element(s) the top/bottom values should be relative to */
  relative?: Array<'header'> | 'window';
}

// Referenced types, resolved one level deep (see the story source for the rest).
type AffixPosition = 0 | 0.5 | 1 | 1.5 | 2 | 'unset';

// ---- Attachment (components/Attachment/Attachment.d.ts) ----
import * as React from 'react';

/**
 * Attachment from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/misc/attachment/attachment.stories.tsx).
 */
export interface AttachmentProps {
  /** File name (required). */
  name: string;
  /** Hint / error message shown below the card, wired via `aria-describedby`. */
  feedback?: FeedbackTextProps;
  /** Pre-formatted file size (e.g. `'1.2 MB'`), shown after the name. Format it yourself. */
  fileSize?: string;
  /** Material icon name for a leading file-type glyph. */
  icon?: string | null;
  /** Action buttons (download, delete, …) shown on the right. `Button`s default to `visualType="neutral"`. */
  actions?: React.ReactNode;
  /** Show an upload progress bar. */
  isLoading?: boolean;
  /** Upload progress (0..100); only shown while `isLoading`. */
  progress?: number;
  /** Hint text under the progress bar (e.g. `'Üleslaadimine'`); only shown while `isLoading`. */
  progressLabel?: string;
  /** `false` switches the card to the error state (danger surface + warning glyph). */
  isValid?: boolean;
  /** Force the layout: `'vertical'` stacks the content, `'horizontal'` keeps one row. When omitted, derived from the viewport via `verticalBelow`. */
  direction?: AttachmentDirection;
  /** Breakpoint below which the layout auto-switches to vertical (when `direction` is unset). */
  verticalBelow?: Breakpoint;
  /** Additional class name on the root element. */
  className?: string;
}
// Also accepts 260 standard React / HTML attributes of its root element.

// Referenced types, resolved one level deep (see the story source for the rest).
interface FeedbackTextProps {
    /**
     * Helper text
     */
    text: React.ReactNode | React.ReactNode[];
    /**
     * ID to reference the helper from aria-describedby attributes.
     * If omitted, then the id might be set through a parent component.
     */
    id?: string;
    /**
     * Additional custom class.
     */
    className?: string;
    /**
     * Type of form-helper.
     * @default hint
     */
    type?: FeedbackTextType;
    /**
     * Position of the helper.
     * @default left
     */
    position?: FeedbackTextPosition;
}
type AttachmentDirection = 'horizontal' | 'vertical';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

// ---- Ellipsis (components/Ellipsis/Ellipsis.d.ts) ----
import * as React from 'react';

/**
 * Ellipsis from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/misc/ellipsis/ellipsis.stories.tsx).
 */
export interface EllipsisProps {
  /** The content to be displayed inside the ellipsis container. */
  children: React.ReactNode;
  /** The maximum number of lines before truncating the text with an ellipsis. If the content exceeds this limit, it will be truncated. Applies to the `end` (multi-line) position only. */
  lineClamp?: number;
  /** Where the ellipsis is placed. - `end` — trailing ellipsis, multi-line (clamped by `lineClamp`). - `start` — leading ellipsis, single-line (keeps the end of the text visible, e.g. for file paths or IDs). */
  position?: EllipsisPosition;
  /** Determines whether a popover should be displayed when the text is truncated. If `true`, hovering over the truncated text will show the full content in a popover. */
  popover?: boolean;
  /** Adds a custom CSS class to the Ellipsis element for additional styling or theming purposes */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type EllipsisPosition = 'start' | 'end';

// ---- OptionContent (components/OptionContent/OptionContent.d.ts) ----
import * as React from 'react';

/**
 * OptionContent from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/misc/option-content/option-content.stories.tsx).
 */
export interface OptionContentProps {
  /** Content of the value row — typically `OptionContent.Label` and optionally `OptionContent.Meta`, but any node is allowed. */
  children?: React.ReactNode;
  /** Selection-indicator type: - `default` — no indicator - `checkbox` — checkbox indicator (multi-select) - `radio` — radio indicator (single-select listbox) */
  type?: OptionContentType;
  /** Arrange the label and meta side-by-side (`horizontal`) or stacked (`vertical`, e.g. a title with a description below). */
  layout?: OptionContentLayout;
  /** Whether the indicator renders as selected (checked). */
  selected?: boolean;
  /** Whether the checkbox indicator renders as indeterminate. Ignored for other types. */
  indeterminate?: boolean;
  /** Whether the row renders as disabled (dims the indicator and text). */
  disabled?: boolean;
  /** Leading icon, rendered before the content. Accepts an icon name or full `IconProps`. */
  icon?: string | IconProps;
  /** How the selection indicator is exposed to assistive tech: - `presentation` (default) — the indicator is `aria-hidden`; the interactive parent owns selection (menu pattern: `aria-checked` on the `DropdownItem`). - `control` — the indicator itself carries `role="checkbox"`/`"radio"`, `aria-checked` and is named via `aria-labelledby` from `OptionContent.Label` (listbox pattern, e.g. inside a `Select` option). Requires a `Label` child. */
  indicatorSemantics?: 'presentation' | 'control';
  /** Additional class name. */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type OptionContentType = 'default' | 'checkbox' | 'radio';
type OptionContentLayout = 'horizontal' | 'vertical';
type IconProps = IconSharedProps & (IconWithBackgroundProps | IconWithoutBackgroundProps);

// ---- Print (components/Print/Print.d.ts) ----
import * as React from 'react';

/**
 * Print from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/misc/print/print.stories.tsx).
 */
export interface PrintProps {
  /** The content to be rendered within the `Print` component. This can be a single element or an array of elements. */
  children: JSX.Element | Array<JSX.Element | null | undefined | false | ''>;
  /** Controls the visibility of the content when printing. - 'show': The content will be visible during printing. - 'hide': The content will be hidden during printing. */
  visibility?: 'show' | 'hide';
  /** Determines how page, column, or region breaks behave before the element. Uses CSS `break-before` property values. */
  breakBefore?: BreakTypes;
  /** Determines how page, column, or region breaks behave after the element. Uses CSS `break-after` property values. */
  breakAfter?: BreakTypes;
  /** Determines how page, column, or region breaks behave inside the element. Uses CSS `break-inside` property values. */
  breakInside?: BreakTypes;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type BreakTypes = 'auto' | 'avoid' | 'avoid-column' | 'avoid-page' | 'avoid-region';

// ---- ScrollFade (components/ScrollFade/ScrollFade.d.ts) ----
import * as React from 'react';

/**
 * ScrollFade from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/misc/scroll-fade/scroll-fade.stories.tsx).
 */
export interface ScrollFadeProps {
  /** ScrollFade content */
  children: React.ReactNode;
  /** Additional class name. */
  className?: string;
  /** Scrollbar type */
  scrollBar?: 'default' | 'custom';
  /** Size of fade in percentages. */
  fadeSize?: 0 | 10 | 20;
  /** Fade position */
  fadePosition?: 'top' | 'bottom' | 'both';
  /** Called when element is scrolled to top */
  onScrollToTop?: () => void;
  /** Called when element is scrolled to bottom */
  onScrollToBottom?: () => void;
}

// ---- ScrollVisibility (components/ScrollVisibility/ScrollVisibility.d.ts) ----
import * as React from 'react';

/**
 * ScrollVisibility from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/misc/scroll-visibility/scroll-visibility.stories.tsx).
 */
export interface ScrollVisibilityProps {
  /** Content to hide/show */
  children: ReactNode;
  /** Additional class name which applies to first child element */
  className?: string;
  /** Conditionally enable the functionality */
  enabled?: boolean;
  /** Determines wheter to hide or show when scrolled past scrollDistance */
  visibility?: 'hide' | 'show';
  /** Determines if the component's visibility toggles when scrolling opposite direction after crossing scrollDistance */
  toggleVisibility?: boolean;
  /** Distance in px user has to scroll for the component to show/hide */
  scrollDistance?: number;
  /** Direction used to calculate `scrollDistance`: - down: Measured from the top of the page. - up: Measured from the bottom of the page. */
  scrollDirection?: 'up' | 'down';
  /** Detect scroll based on this element */
  scrollContainer?: HTMLElement;
  /** Direction the component animates to */
  animationDirection?: AnimationDirection;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type AnimationDirection = 'left' | 'right' | 'down' | 'up' | 'center';

// ---- Separator (components/Separator/Separator.d.ts) ----
import * as React from 'react';

/**
 * Separator from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/misc/separator/separator.stories.tsx).
 */
export interface SeparatorProps {
  /** Must be set to 'horizontal' or left undefined (defaults to horizontal) Must be set to 'vertical' */
  axis?: 'horizontal';
  /** Vertical height is not used in horizontal mode Height of the vertical separator in rem units */
  height?: undefined;
  /** Display is forced to 'block' in horizontal mode CSS display value — usually 'block' or 'inline-block' */
  display?: 'block';
  /** Additional class names */
  className?: string;
  /** HTML element to render — most common are 'hr', 'div', 'span' */
  element?: 'hr' | 'div' | 'span';
  /** When true, the separator stretches to fill available space (100%) */
  isStretched?: boolean;
  /** Semantic color token */
  color?: 'primary' | 'secondary' | 'accent';
  /** Visual style — line with dots vs standalone centered dot(s) */
  variant?: SeparatorVariant;
  /** Line thickness in pixels (1 or 2) — affects outlined & solid lines */
  thickness?: 1 | 2;
  /** Spacing (margin) around the separator */
  spacing?: SeparatorSpacing;
  dotSize?: DotSize;
  dotStyle?: DotStyle;
  /** Position of the single dot */
  dotPosition?: DotPosition;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<(SeparatorHorizontalProps & (DottedSeparatorProps | DotOnlySeparatorProps)) | (SeparatorVerticalProps & (DottedSeparatorProps | DotOnlySeparatorProps))>;
  md?: Partial<(SeparatorHorizontalProps & (DottedSeparatorProps | DotOnlySeparatorProps)) | (SeparatorVerticalProps & (DottedSeparatorProps | DotOnlySeparatorProps))>;
  lg?: Partial<(SeparatorHorizontalProps & (DottedSeparatorProps | DotOnlySeparatorProps)) | (SeparatorVerticalProps & (DottedSeparatorProps | DotOnlySeparatorProps))>;
  xl?: Partial<(SeparatorHorizontalProps & (DottedSeparatorProps | DotOnlySeparatorProps)) | (SeparatorVerticalProps & (DottedSeparatorProps | DotOnlySeparatorProps))>;
  xxl?: Partial<(SeparatorHorizontalProps & (DottedSeparatorProps | DotOnlySeparatorProps)) | (SeparatorVerticalProps & (DottedSeparatorProps | DotOnlySeparatorProps))>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type SeparatorVariant = 'dotted' | 'dot-only';
type SeparatorSpacing = number | {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
};
type DotSize = 'large' | 'medium' | 'small' | 'extra-small';
type DotStyle = 'filled' | 'outlined';
type DotPosition = 'start' | 'center' | 'end' | number;
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface SeparatorHorizontalProps extends SeparatorSharedProps {
    /**
     * Must be set to 'horizontal' or left undefined (defaults to horizontal)
     */
    axis?: 'horizontal';
    /**
    Vertical height is not used in horizontal mode
    */
    height?: undefined;
    /**
     * Display is forced to 'block' in horizontal mode
     */
    display?: 'block';
}
type DottedSeparatorProps = {
    variant?: 'dotted';
    dotSize?: DotSize;
    dotStyle?: DotStyle;
    /**
     * Position of the single dot
     * @example
     * 'center' | 'start' | 'end' | 2.5  // 2.5rem from start
     */
    dotPosition?: DotPosition;
};
type DotOnlySeparatorProps = {
    variant: 'dot-only';
    dotSize: DotSize;
    dotStyle?: DotStyle;
    dotPosition?: never;
};
interface SeparatorVerticalProps extends SeparatorSharedProps {
    /**
     * Must be set to 'vertical'
     */
    axis: 'vertical';
    /**
     * Height of the vertical separator in rem units
     */
    height?: number;
    /**
     * CSS display value — usually 'block' or 'inline-block'
     */
    display?: 'block' | 'inline' | 'inline-block';
}

// ---- StretchContent (components/StretchContent/StretchContent.d.ts) ----
import * as React from 'react';

/**
 * StretchContent from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/misc/stretch-content/stretch-content.stories.tsx).
 */
export interface StretchContentProps {
  /** Element that will be stretched within the container. */
  children: React.ReactElement;
  /** Accessibility role for the container. */
  role?: React.AriaRole;
  /** An optional additional CSS class name to customize the styling of the container. This will be appended to the default BEM class generated for the component. */
  className?: string;
  /** Specifies the axis along which the child element should be stretched. - `both` (default): Stretches the child element both horizontally and vertically. - `horizontal`: Stretches the child element only horizontally (width). - `vertical`: Stretches the child element only vertically (height). */
  direction?: StretchContentDirection;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<StretchContentBreakpointProps>;
  md?: Partial<StretchContentBreakpointProps>;
  lg?: Partial<StretchContentBreakpointProps>;
  xl?: Partial<StretchContentBreakpointProps>;
  xxl?: Partial<StretchContentBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type StretchContentDirection = 'both' | 'horizontal' | 'vertical';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface StretchContentBreakpointProps {
    /**
     * An optional additional CSS class name to customize the styling of the container.
     * This will be appended to the default BEM class generated for the component.
     */
    className?: string;
    /**
     * Specifies the axis along which the child element should be stretched.
     * - `both` (default): Stretches the child element both horizontally and vertically.
     * - `horizontal`: Stretches the child element only horizontally (width).
     * - `vertical`: Stretches the child element only vertically (height).
     * @default 'both'
     */
    direction?: StretchContentDirection;
}

// ---- Timeline (components/Timeline/Timeline.d.ts) ----
import * as React from 'react';

/**
 * Timeline from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/misc/timeline/timeline.stories.tsx).
 */
export interface TimelineProps {
  /** `Timeline.Item` elements. */
  children: ReactNode;
  /** Index of the active (current) item. Items before it render as completed (past), items after it as upcoming (future). When omitted, all items are future. */
  activeIndex?: number;
  /** Visual variant. `card` wraps the timeline in card borders and padding. */
  variant?: TimelineVariant;
  /** Vertical padding of each item in the `card` variant, in rem (same scale as `Card`). Both the gaps between items and the card's top/bottom edges resolve to twice this value. Horizontal item padding is fixed at the card default. */
  cardPadding?: number;
  /** Additional class name. */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type TimelineVariant = 'default' | 'card';

// ---- Breadcrumbs (components/Breadcrumbs/Breadcrumbs.d.ts) ----
import * as React from 'react';

/**
 * Breadcrumbs from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/navigation/breadcrumbs/breadcrumbs.stories.tsx).
 */
export interface BreadcrumbsProps {
  /** Crumbs in order from the root page to the current page. Each child becomes one crumb; chevron separators are inserted between them. Use a `Link` (or any anchor) for navigable crumbs and a plain element (e.g. `<span>`) for the current page — add `aria-current="page"` to it yourself. */
  children: React.ReactNode;
  /** Accessible label for the wrapping `<nav>` landmark. Falls back to the `breadcrumbs` entry from `LabelProvider`. */
  ariaLabel?: string;
  /** Accessible label for the ellipsis button that opens the collapsed-crumbs dropdown. Only used when `maxItems` causes a collapse. Falls back to the `breadcrumbs.show-more` entry from `LabelProvider`. */
  showMoreLabel?: string;
  /** Node rendered between crumbs. Pass a string (e.g. `'/'`, `'›'`) for text separators or any React node for custom markup. Hidden from assistive technology — screen readers announce only the crumbs themselves. */
  separator?: ReactNode;
  /** Additional class name applied to the `<nav>` element. */
  className?: string;
  /** - `'long'` — full trail of crumbs separated by chevrons. - `'short'` — only the second-to-last child rendered as a back-link with a left-pointing arrow. Useful on narrow viewports. Renders nothing when fewer than two crumbs are supplied. */
  variant?: 'long' | 'short';
  /** Maximum number of crumbs to render before collapsing the middle into an ellipsis button. Clicking the button opens a dropdown listing the hidden crumbs. Only applies in the `'long'` variant. When omitted, all crumbs are rendered. */
  maxItems?: number;
  /** Number of crumbs to keep visible at the start of the trail when collapsed. */
  itemsBeforeCollapse?: number;
  /** Number of crumbs to keep visible at the end of the trail when collapsed. The current page (last crumb) should normally stay visible — keep this ≥ 1. */
  itemsAfterCollapse?: number;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<BreadcrumbsBreakpointProps>;
  md?: Partial<BreadcrumbsBreakpointProps>;
  lg?: Partial<BreadcrumbsBreakpointProps>;
  xl?: Partial<BreadcrumbsBreakpointProps>;
  xxl?: Partial<BreadcrumbsBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type BreadcrumbsBreakpointProps = {
    /**
     * - `'long'` — full trail of crumbs separated by chevrons.
     * - `'short'` — only the second-to-last child rendered as a back-link with
     *   a left-pointing arrow. Useful on narrow viewports. Renders nothing when
     *   fewer than two crumbs are supplied.
     * @default long
     */
    variant?: 'long' | 'short';
    /**
     * Maximum number of crumbs to render before collapsing the middle into an
     * ellipsis button. Clicking the button opens a dropdown listing the hidden
     * crumbs. Only applies in the `'long'` variant. When omitted, all crumbs are
     * rendered.
     */
    maxItems?: number;
    /**
     * Number of crumbs to keep visible at the start of the trail when collapsed.
     * @default 1
     */
    itemsBeforeCollapse?: number;
    /**
     * Number of crumbs to keep visible at the end of the trail when collapsed.
     * The current page (last crumb) should normally stay visible — keep this ≥ 1.
     * @default 1
     */
    itemsAfterCollapse?: number;
};

// ---- CardStepper (components/CardStepper/CardStepper.d.ts) ----
import * as React from 'react';

/**
 * CardStepper from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/navigation/card-stepper/card-stepper.stories.tsx).
 */
export interface CardStepperProps {
  /** `CardStepper.Step` elements (compound API) — the active step shows on the card, all steps in the modal. Alternative to the `steps` data prop. */
  children?: React.ReactNode;
  /** Steps as data (alternative to `CardStepper.Step` children). Ignored when `children` contains `CardStepper.Step` elements. */
  steps?: CardStepperStepProps[];
  /** Active step index (0-based), controlled. Pair with `onStepChange`. */
  activeStep?: number;
  /** Initial active step index for uncontrolled usage. */
  defaultActiveStep?: number;
  /** Fired with the new index when the user navigates (arrows) or picks a step in the modal. */
  onStepChange?: (index: number) => void;
  /** Show the active step's number in a ring indicator on the left. Ignored when `showNavigation` is set — the back arrow occupies the left slot instead. */
  showStepNumber?: boolean;
  /** Show a status icon next to the active step's title — a success check when the step's `state` is `'completed'`, a danger icon when it's `'error'`. Nothing is shown for other states. */
  showStatusIcon?: boolean;
  /** Where the active step's `description` sits relative to its title: - `'bottom'` (default) — below the title. - `'top'` — above the title, as a small secondary line. */
  descriptionPosition?: 'top' | 'bottom';
  /** Where the `N / M` step counter sits: - `'inline'` (default) — in the trailing controls, next to the list / next button. - `'top'` — above the title (and removed from the trailing controls). */
  counterPosition?: 'inline' | 'top';
  /** Show the segmented progress bar below the row. */
  showProgress?: boolean;
  /** Show previous / next arrow buttons on the edges. They move sequentially and skip `disabled` steps. */
  showNavigation?: boolean;
  /** Show the list button and the step-list modal. Turn off for a read-only progress tracker or an arrows-only flow. */
  showStepList?: boolean;
  /** Which steps can be jumped to from the step-list modal: - `true` — any step - `false` — none (the list is read-only) - `'completed'` — only completed steps - `'completed-or-next'` — completed steps and the one immediately after the active step A per-step `disabled` always wins. The prev/next arrows are sequential and are **not** gated by this. */
  allowJump?: boolean | 'completed' | 'completed-or-next';
  /** Heading element for the active step's title — set it to fit the surrounding page's heading hierarchy. The visual size is unchanged. */
  headingElement?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Accessible label overrides. Otherwise sourced from the `LabelProvider`. */
  labels?: CardStepperLabels;
  /** Accessible name for the card region. */
  "aria-label"?: string;
  /** Additional class name applied to the card root. */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface CardStepperStepProps {
    /**
     * Step title.
     */
    title: React.ReactNode;
    /**
     * Optional secondary line shown under the title (on the card for the active
     * step, and always in the step-list modal).
     */
    description?: React.ReactNode;
    /**
     * Visual / semantic state used in the progress bar and the step-list modal.
     * @default default
     */
    state?: VerticalStepperItemState;
    /**
     * Stable key for the step. Falls back to the array index.
     */
    id?: string;
    /**
     * Excludes the step from navigation — not reachable via the arrows or the step
     * list, and rendered as disabled in the modal.
     */
    disabled?: boolean;
    /**
     * Custom content rendered at the bottom of the card when this step is active —
     * e.g. an inline `Alert`, a "read more" link or an action button. Only shown for
     * the active step. Matches the Figma "with bottom slot" variant.
     */
    bottomSlot?: React.ReactNode;
    /**
     * Sub-steps shown under this step in the step-list modal. When present the step
     * becomes a collapsible parent — the title navigates and a chevron expands the
     * sub-step list.
     */
    subSteps?: CardStepperSubStepProps[];
    /**
     * Whether the sub-step list starts expanded in the modal. Defaults to expanded
     * for the active step. Only relevant with `subSteps`.
     */
    defaultExpanded?: boolean;
}
interface CardStepperLabels {
    /** Accessible label for the previous-step button. Defaults to the `stepper.previous` label. */
    previous?: string;
    /** Accessible label for the next-step button. Defaults to the `stepper.next` label. */
    next?: string;
    /** Accessible label for the button that opens the step list. Defaults to the `stepper.open-steps` label. */
    openSteps?: string;
    /** Heading of the step-list modal. Defaults to the `stepper.steps` label. */
    modalHeading?: string;
    /**
     * Screen-reader phrasing for the `N / M` counter (the visible "N / M" is hidden
     * from assistive tech, since "N slash M" reads poorly). Defaults to the
     * `stepper.status` label.
     */
    status?: (current: number, total: number) => string;
}

// ---- HashTrigger (components/HashTrigger/HashTrigger.d.ts) ----
import * as React from 'react';

/**
 * HashTrigger from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/navigation/hash-trigger/hash-trigger.stories.tsx).
 */
export interface HashTriggerProps {
  /** HashTrigger content. */
  children: ReactNode;
  /** Id, which is passed to first child element/component.<br /> Child component has to inject id to DOM itself.<br /> It's used to detect element on page where to scroll. */
  id: string;
  /** Callback called when hash matches. */
  onMatch?: (id: string) => void;
  /** Scroll to element on match. */
  scrollOnMatch?: boolean;
}

// ---- HorizontalStepper (components/HorizontalStepper/HorizontalStepper.d.ts) ----
import * as React from 'react';

/**
 * HorizontalStepper from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/navigation/horizontal-stepper/horizontal-stepper.stories.tsx).
 */
export interface HorizontalStepperProps {
  /** `HorizontalStepper.Item` elements, one per step. */
  children: ReactNode;
  /** Accessible name for the navigation landmark. */
  "aria-label"?: string;
  /** Background style of the stepper track. */
  background?: HorizontalStepperBackground;
  /** Collapse labels so only the indicators plus the selected step's label are visible. `true` collapses at every width; a breakpoint (`'sm'`, `'md'`, `'lg'`, `'xl'`, `'xxl'`) collapses only below that breakpoint. */
  compact?: HorizontalStepperCompact;
  /** Additional class name on the root element. */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type HorizontalStepperBackground = 'default' | 'transparent';
type HorizontalStepperCompact = boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

// ---- Link (components/Link/Link.d.ts) ----
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
  sm?: Partial<{ children: React.ReactNode; className?: string; visualType?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").ButtonType; fullWidth?: boolean; color?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").ButtonColor; size?: "default" | "small" | "large"; icon?: string | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").IconWithoutBackgroundProps; iconLeft?: string | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").IconWithoutBackgroundProps; iconRight?: string | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").IconWithoutBackgroundProps; underline?: boolean; isHovered?: boolean; isActive?: boolean; isLoading?: boolean; noStyle?: boolean; renderWrapperElement?: unknown; showTooltip?: boolean; } & InternalLinkProps & { as?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>; } & Omit<React.PropsWithoutRef<React.ComponentProps<import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>>>, "children" | "className" | "color" | "as" | "visualType" | "fullWidth" | "size" | "icon" | "iconLeft" | "iconRight" | "underline" | "isHovered" | "isActive" | "isLoading" | "noStyle" | "renderWrapperElement" | "showTooltip" | "iconStandalone"> & { ref?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").PolymorphicRef<import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>>; } & { underline?: boolean; }>;
  md?: Partial<{ children: React.ReactNode; className?: string; visualType?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").ButtonType; fullWidth?: boolean; color?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").ButtonColor; size?: "default" | "small" | "large"; icon?: string | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").IconWithoutBackgroundProps; iconLeft?: string | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").IconWithoutBackgroundProps; iconRight?: string | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").IconWithoutBackgroundProps; underline?: boolean; isHovered?: boolean; isActive?: boolean; isLoading?: boolean; noStyle?: boolean; renderWrapperElement?: unknown; showTooltip?: boolean; } & InternalLinkProps & { as?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>; } & Omit<React.PropsWithoutRef<React.ComponentProps<import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>>>, "children" | "className" | "color" | "as" | "visualType" | "fullWidth" | "size" | "icon" | "iconLeft" | "iconRight" | "underline" | "isHovered" | "isActive" | "isLoading" | "noStyle" | "renderWrapperElement" | "showTooltip" | "iconStandalone"> & { ref?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").PolymorphicRef<import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>>; } & { underline?: boolean; }>;
  lg?: Partial<{ children: React.ReactNode; className?: string; visualType?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").ButtonType; fullWidth?: boolean; color?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").ButtonColor; size?: "default" | "small" | "large"; icon?: string | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").IconWithoutBackgroundProps; iconLeft?: string | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").IconWithoutBackgroundProps; iconRight?: string | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").IconWithoutBackgroundProps; underline?: boolean; isHovered?: boolean; isActive?: boolean; isLoading?: boolean; noStyle?: boolean; renderWrapperElement?: unknown; showTooltip?: boolean; } & InternalLinkProps & { as?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>; } & Omit<React.PropsWithoutRef<React.ComponentProps<import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>>>, "children" | "className" | "color" | "as" | "visualType" | "fullWidth" | "size" | "icon" | "iconLeft" | "iconRight" | "underline" | "isHovered" | "isActive" | "isLoading" | "noStyle" | "renderWrapperElement" | "showTooltip" | "iconStandalone"> & { ref?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").PolymorphicRef<import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>>; } & { underline?: boolean; }>;
  xl?: Partial<{ children: React.ReactNode; className?: string; visualType?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").ButtonType; fullWidth?: boolean; color?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").ButtonColor; size?: "default" | "small" | "large"; icon?: string | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").IconWithoutBackgroundProps; iconLeft?: string | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").IconWithoutBackgroundProps; iconRight?: string | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").IconWithoutBackgroundProps; underline?: boolean; isHovered?: boolean; isActive?: boolean; isLoading?: boolean; noStyle?: boolean; renderWrapperElement?: unknown; showTooltip?: boolean; } & InternalLinkProps & { as?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>; } & Omit<React.PropsWithoutRef<React.ComponentProps<import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>>>, "children" | "className" | "color" | "as" | "visualType" | "fullWidth" | "size" | "icon" | "iconLeft" | "iconRight" | "underline" | "isHovered" | "isActive" | "isLoading" | "noStyle" | "renderWrapperElement" | "showTooltip" | "iconStandalone"> & { ref?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").PolymorphicRef<import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>>; } & { underline?: boolean; }>;
  xxl?: Partial<{ children: React.ReactNode; className?: string; visualType?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").ButtonType; fullWidth?: boolean; color?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").ButtonColor; size?: "default" | "small" | "large"; icon?: string | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").IconWithoutBackgroundProps; iconLeft?: string | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").IconWithoutBackgroundProps; iconRight?: string | import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").IconWithoutBackgroundProps; underline?: boolean; isHovered?: boolean; isActive?: boolean; isLoading?: boolean; noStyle?: boolean; renderWrapperElement?: unknown; showTooltip?: boolean; } & InternalLinkProps & { as?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>; } & Omit<React.PropsWithoutRef<React.ComponentProps<import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>>>, "children" | "className" | "color" | "as" | "visualType" | "fullWidth" | "size" | "icon" | "iconLeft" | "iconRight" | "underline" | "isHovered" | "isActive" | "isLoading" | "noStyle" | "renderWrapperElement" | "showTooltip" | "iconStandalone"> & { ref?: import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").PolymorphicRef<import("/Users/m2rt/Bitweb/TEHIK/TEDI/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>>; } & { underline?: boolean; }>;
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

// ---- Pagination (components/Pagination/Pagination.d.ts) ----
import * as React from 'react';

/**
 * Pagination from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/navigation/pagination/pagination.stories.tsx).
 */
export interface PaginationProps {
  /** Total number of pages. */
  pageCount: number;
  /** Controlled current page (1-based). Pair with `onPageChange`. */
  page?: number;
  /** Initial page for uncontrolled mode (1-based). */
  defaultPage?: number;
  /** Fires whenever the user navigates to a different page. */
  onPageChange?: (page: number) => void;
  /** Total number of items across all pages. Renders a "{count} results" label to the left of the nav when set. */
  totalItems?: number;
  /** Current page size. Shown in the page-size select when `pageSizeOptions` is provided. */
  pageSize?: number;
  /** Options for the page-size select. Omit to hide the select. Accepts plain numbers, or `{ value, label }` objects when the visible text should differ from the value — e.g. a "Show all" entry `{ value: totalItems, label: 'Show all' }`. Selecting an option emits its `value` via `onPageSizeChange`; the pager collapses once the consumer recomputes `pageCount` to 1. */
  pageSizeOptions?: (number | PaginationPageSizeOption)[];
  /** Fires when the user picks a different page size. */
  onPageSizeChange?: (pageSize: number) => void;
  /** Override any of the default text labels / aria labels. */
  labels?: Partial<PaginationLabels>;
  /** Hide the "X results" label even when `totalItems` is set. Pass a breakpoint name (e.g. `"md"`) to hide only below that breakpoint. */
  hideResults?: PaginationVisibility;
  /** Hide the page-size dropdown even when `pageSizeOptions` is non-empty. Pass a breakpoint name to hide only below that breakpoint. */
  hidePageSize?: PaginationVisibility;
  /** Hide the pager (prev/next + page list). Pass a breakpoint name to hide only below that breakpoint. */
  hidePager?: PaginationVisibility;
  /** Additional class name on the root element. */
  className?: string;
  /** Number of pages always shown at the start and end of the range before ellipsis kicks in. */
  boundaryCount?: number;
  /** Number of sibling pages shown on either side of the current page. */
  siblingCount?: number;
  /** Background variant. `transparent` removes the surface fill — use it when pagination sits on a non-white container. Border behaviour is controlled separately via `borders`. */
  background?: PaginationBackground;
  /** Where the separator border is drawn around the pagination strip: - `'top'` (default) — separator above only (typical "table then pager" layout). - `'both'` — separator above and below (split layout where the pager is sandwiched between content rows, e.g. a fixed header table + a footer beneath the pager). - `'none'` — borderless, for embedded contexts where the outer container already provides framing. Ignored when `background='transparent'` — that variant is always borderless. */
  borders?: PaginationBorders;
  /** Keep the Previous / Next buttons visible even when they would be disabled (Previous on the first page, Next on the last). Default `false` drops the disabled edge button entirely — compact layout. Set `true` to keep both buttons rendered (disabled) at the edges so the pager width stays stable. */
  showPrevNextButtons?: boolean;
  /** Show the textual `previous` / `next` labels alongside the arrow icons on the edge nav buttons. The labels are sourced from `labels.previous` / `labels.next` (or the corresponding i18n keys). Default keeps the icon-only Figma variant. When set, the arrows render as small text links (label + icon, link colour, underline on hover) rather than circular icon buttons — `arrowVariant` is ignored in this mode. */
  showEdgeNavLabels?: boolean;
  /** Material icon name for the Previous arrow. Override to swap the default chevron (e.g. `'first_page'`, `'chevron_left'`). */
  previousIcon?: string;
  /** Material icon name for the Next arrow. */
  nextIcon?: string;
  /** Visual treatment of the prev/next arrow buttons: - `'default'` — brand-coloured icon on a transparent circle (light tint on hover); pair with `showEdgeNavLabels` for the small-link style. - `'primary'` — a primary small `Button` with the label text and a leading (previous) / trailing (next) arrow icon, for prominent navigation. The text label is always shown, so `showEdgeNavLabels` has no effect here. */
  arrowVariant?: 'default' | 'primary';
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<PaginationBreakpointProps>;
  md?: Partial<PaginationBreakpointProps>;
  lg?: Partial<PaginationBreakpointProps>;
  xl?: Partial<PaginationBreakpointProps>;
  xxl?: Partial<PaginationBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface PaginationPageSizeOption {
    value: number;
    label: string;
}
interface PaginationLabels {
    /**
     * Accessible label for the nav wrapper.
     * @default 'Pagination'
     */
    ariaLabel: string;
    /**
     * Previous button label (icon-only, used as aria-label).
     * @default 'Previous page'
     */
    previous: string;
    /**
     * Next button label (icon-only, used as aria-label).
     * @default 'Next page'
     */
    next: string;
    /**
     * Function that builds the aria-label for a numeric page button.
     * @default (page) => `Go to page ${page}`
     */
    pageAriaLabel: (page: number) => string;
    /**
     * Function that builds the aria-label for the currently active page.
     * @default (page) => `Current page, page ${page}`
     */
    currentPageAriaLabel: (page: number) => string;
    /**
     * Rendered to the left of the pagination nav when `totalItems` is set.
     * Returns any React node, so consumers can mix copy with formatting markup
     * (e.g. a bold count or a status badge) — not just a plain string.
     * @default (count) => `${count} results`
     */
    results: (count: number) => ReactNode;
    /**
     * Prefix label for the page-size select.
     * @default 'Show per page'
     */
    pageSize: string;
    /**
     * Announcement for the polite aria-live region when the page changes.
     * Lets screen reader users know they moved without stealing focus.
     * @default (page, total) => `Page ${page} of ${total}`
     */
    pageStatus: (page: number, pageCount: number) => string;
}
type PaginationVisibility = boolean | Exclude<Breakpoint, 'xs'>;
type PaginationBackground = 'white' | 'transparent';
type PaginationBorders = 'top' | 'bottom' | 'both' | 'none';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type PaginationBreakpointProps = {
    /**
     * Number of pages always shown at the start and end of the range before
     * ellipsis kicks in.
     * @default 1
     */
    boundaryCount?: number;
    /**
     * Number of sibling pages shown on either side of the current page.
     * @default 1
     */
    siblingCount?: number;
    /**
     * Background variant. `transparent` removes the surface fill — use it when
     * pagination sits on a non-white container. Border behaviour is controlled
     * separately via `borders`.
     * @default white
     */
    background?: PaginationBackground;
    /**
     * Where the separator border is drawn around the pagination strip:
     * - `'top'` (default) — separator above only (typical "table then pager"
     *   layout).
     * - `'both'` — separator above and below (split layout where the pager is
     *   sandwiched between content rows, e.g. a fixed header table + a footer
     *   beneath the pager).
     * - `'none'` — borderless, for embedded contexts where the outer container
     *   already provides framing.
     *
     * Ignored when `background='transparent'` — that variant is always borderless.
     * @default top
     */
    borders?: PaginationBorders;
    /**
     * Keep the Previous / Next buttons visible even when they would be disabled
     * (Previous on the first page, Next on the last). Default `false` drops the
     * disabled edge button entirely — compact layout. Set `true` to keep both
     * buttons rendered (disabled) at the edges so the pager width stays stable.
     * @default false
     */
    showPrevNextButtons?: boolean;
    /**
     * Show the textual `previous` / `next` labels alongside the arrow icons on
     * the edge nav buttons. The labels are sourced from `labels.previous` /
     * `labels.next` (or the corresponding i18n keys). Default keeps the
     * icon-only Figma variant.
     *
     * When set, the arrows render as small text links (label + icon, link
     * colour, underline on hover) rather than circular icon buttons —
     * `arrowVariant` is ignored in this mode.
     * @default false
     */
    showEdgeNavLabels?: boolean;
    /**
     * Material icon name for the Previous arrow. Override to swap the default
     * chevron (e.g. `'first_page'`, `'chevron_left'`).
     * @default 'arrow_back'
     */
    previousIcon?: string;
    /**
     * Material icon name for the Next arrow.
     * @default 'arrow_forward'
     */
    nextIcon?: string;
    /**
     * Visual treatment of the prev/next arrow buttons:
     * - `'default'` — brand-coloured icon on a transparent circle (light tint on
     *   hover); pair with `showEdgeNavLabels` for the small-link style.
     * - `'primary'` — a primary small `Button` with the label text and a leading
     *   (previous) / trailing (next) arrow icon, for prominent navigation. The
     *   text label is always shown, so `showEdgeNavLabels` has no effect here.
     * @default default
     */
    arrowVariant?: 'default' | 'primary';
};

// ---- TableOfContents (components/TableOfContents/TableOfContents.d.ts) ----
import * as React from 'react';

/**
 * TableOfContents from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/navigation/table-of-contents/table-of-contents.stories.tsx).
 */
export interface TableOfContentsProps {
  /** `TableOfContents.Item` elements. An item's non-`Item` children are its link / label; nested `TableOfContents.Item` children become its sub-items. */
  children: ReactNode;
  /** Heading rendered above the list. Defaults to the localised "Table of contents" label; pass `null` to render it headless (no visible heading — the navigation keeps an accessible name via `aria-label`). */
  heading?: string | null;
  /** Configurable semantic heading level (`h1`–`h6`); the visual style stays H4 regardless. Set it to match the surrounding page's heading outline and avoid skipped heading levels (WCAG 1.3.1). Ignored when the list is headless. */
  headingLevel?: TableOfContentsHeadingLevel;
  /** Override the navigation landmark's accessible name. When empty, the `<nav>` falls back to the heading (via `aria-labelledby`), or the localised title when headless. Use it to disambiguate multiple tables of contents on the same page. */
  ariaLabel?: string;
  /** Id of the currently active item. The active item gets the left accent bar and active link colour. When `defaultOpen` is `false`, the branch leading to it is the only one kept expanded. */
  activeId?: string;
  /** Draws a divider between items so the list reads as a set of separated rows. The last item has no divider — the card border closes the list. */
  bordered?: boolean;
  /** Whether every item's sub-items are expanded by default. Set `false` to make the list behave like an accordion: only the branch leading to `activeId` keeps its nested children visible. */
  defaultOpen?: boolean;
  /** Render the list as an ordered list with auto-generated hierarchical numbers (`1.`, `2.`, `2.1`, …) shown before each item. */
  numbered?: boolean;
  /** Additional class name on the root element. */
  className?: string;
  /** Visual variant: - `default` — rendered inside a bordered `Card`. - `transparent` — no card chrome (border / background); the list sits directly on the page, with a continuous grey left rail (the active item's segment turns blue). */
  variant?: 'default' | 'transparent';
  /** Stick the card to the viewport while scrolling. */
  sticky?: boolean;
  /** Keep the active item visible inside a scrollable table of contents. When the `activeId` changes, the active item's row is scrolled into view within the nearest scroll container (the sticky card, or a scrollable wrapper you provide) using "nearest" semantics — it only scrolls when the row is out of view, leaving ~8px of margin. Positions on the row itself, not its expanded children. Has no effect in non-scrollable layouts and respects `prefers-reduced-motion`. */
  scrollActiveIntoView?: boolean;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<TableOfContentsBreakpointProps>;
  md?: Partial<TableOfContentsBreakpointProps>;
  lg?: Partial<TableOfContentsBreakpointProps>;
  xl?: Partial<TableOfContentsBreakpointProps>;
  xxl?: Partial<TableOfContentsBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type TableOfContentsHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type TableOfContentsBreakpointProps = {
    /**
     * Visual variant:
     * - `default` — rendered inside a bordered `Card`.
     * - `transparent` — no card chrome (border / background); the list sits
     *   directly on the page, with a continuous grey left rail (the active item's
     *   segment turns blue).
     * @default default
     */
    variant?: 'default' | 'transparent';
    /**
     * Stick the card to the viewport while scrolling.
     * @default true
     */
    sticky?: boolean;
    /**
     * Keep the active item visible inside a scrollable table of contents. When the `activeId`
     * changes, the active item's row is scrolled into view within the nearest scroll container
     * (the sticky card, or a scrollable wrapper you provide) using "nearest" semantics — it only
     * scrolls when the row is out of view, leaving ~8px of margin. Positions on the row itself,
     * not its expanded children. Has no effect in non-scrollable layouts and respects
     * `prefers-reduced-motion`.
     * @default false
     */
    scrollActiveIntoView?: boolean;
};

// ---- Tabs (components/Tabs/Tabs.d.ts) ----
import * as React from 'react';

/**
 * Tabs from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/navigation/tabs/tabs.stories.tsx).
 */
export interface TabsProps {
  /** Tabs content — should include Tabs.List and Tabs.Content elements */
  children: React.ReactNode;
  /** Controlled active tab id. Use together with onChange. */
  value?: string;
  /** Default active tab id for uncontrolled usage. */
  defaultValue?: string;
  /** Callback fired when the active tab changes */
  onChange?: (tabId: string) => void;
  /** Additional class name(s) */
  className?: string;
}

// ---- VerticalStepper (components/VerticalStepper/VerticalStepper.d.ts) ----
import * as React from 'react';

/**
 * VerticalStepper from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/navigation/vertical-stepper/vertical-stepper.stories.tsx).
 */
export interface VerticalStepperProps {
  /** `VerticalStepper.Item` elements (and optional `Separator`s between them). Items are auto-numbered in source order. */
  children: React.ReactNode;
  /** Compact density — smaller indicators and tighter rows. Completed / error steps show their state icon inside the indicator instead of the number. */
  compact?: boolean;
  /** Accessible name for the `<nav>` landmark. */
  "aria-label"?: string;
  /** Additional class name applied to the `<ol>`. */
  className?: string;
}

// ---- Alert (components/Alert/Alert.d.ts) ----
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

// ---- Dropdown (components/Dropdown/Dropdown.d.ts) ----
import * as React from 'react';

/**
 * Dropdown from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/overlays/dropdown/dropdown.stories.tsx).
 */
export interface DropdownProps {
  /** Child elements — must include exactly one `Dropdown.Trigger` and one `Dropdown.Content` */
  children: React.ReactNode;
  /** When `true`, the dropdown behaves like a modal: - Traps focus inside the dropdown - Shows a visually hidden "Close" button for screen readers - Usually used for menus that require explicit dismissal */
  modal?: boolean;
  /** Controlled open state */
  open?: boolean;
  /** Uncontrolled default state */
  defaultOpen?: boolean;
  /** Change handler (fires for both modes) */
  onOpenChange?: (open: boolean) => void;
  /** Index of the item that should be focused when the dropdown opens. Pass the index of the "current selection" so the user can arrow-key or Enter/Space to reconfirm without first pressing an arrow. Omit (or pass `undefined`) to keep the default behaviour — no item is pre-focused and the user has to press an arrow key to start navigating. */
  defaultActiveIndex?: number;
  /** Navigation mode — use when the dropdown lists **links** (e.g. collapsed breadcrumbs) rather than menu commands. Drops the `menu` / `menuitem` roles, `aria-haspopup="menu"` and roving tabindex, so screen readers announce the items as links and each is a normal Tab stop. Keep it `false` (default) for action menus. */
  navigation?: boolean;
  className?: string;
  /** When `true` there is a border between the dropdown items */
  divided?: boolean;
  /** Controls the width of the dropdown menu. - `'auto'` – width is determined by content (default) - `'trigger'` – matches the width of the trigger element - `'full'` – spans the full width of the containing block - `number` – fixed width in pixels - `string` – any valid CSS width value (e.g. `'16rem'`, `'100%'`) */
  width?: 'auto' | 'trigger' | 'full' | number | string;
  /** Controls where the dropdown is positioned relative to its trigger. Accepts any Floating UI placement value, such as: `'bottom-start'`, `'bottom-end'`, `'top-start'`, `'right-end'`, etc. */
  placement?: Placement;
  /** Controls the visual and structural variant of the dropdown. - `'default'` – standard flat list of items - `'tree'` – hierarchical (tree-style) list with indented items and connector lines Tree visuals are only applied when this prop is set to `'tree'`. Ignored by default. */
  variant?: 'default' | 'tree';
  /** Restricts the height of the dropdown's scrollable body. When the content is taller, the body scrolls vertically while any sticky regions (e.g. a Filter search / clear) stay pinned. - `number` – fixed max height in pixels - `string` – any valid CSS length (e.g. `'20rem'`, `'50vh'`) */
  maxHeight?: number | string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<DropdownBreakpointProps>;
  md?: Partial<DropdownBreakpointProps>;
  lg?: Partial<DropdownBreakpointProps>;
  xl?: Partial<DropdownBreakpointProps>;
  xxl?: Partial<DropdownBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type DropdownBreakpointProps = {
    /**
     * When `true` there is a border between the dropdown items
     *  @default false
     */
    divided?: boolean;
    /**
     * Controls the width of the dropdown menu.
     * - `'auto'` – width is determined by content (default)
     * - `'trigger'` – matches the width of the trigger element
     * - `'full'` – spans the full width of the containing block
     * - `number` – fixed width in pixels
     * - `string` – any valid CSS width value (e.g. `'16rem'`, `'100%'`)
     * @default auto
     */
    width?: 'auto' | 'trigger' | 'full' | number | string;
    /**
     * Controls where the dropdown is positioned relative to its trigger.
     * Accepts any Floating UI placement value, such as:
     * `'bottom-start'`, `'bottom-end'`, `'top-start'`, `'right-end'`, etc.
     *
     * @default bottom-start
     */
    placement?: Placement;
    /**
     * Controls the visual and structural variant of the dropdown.
     * - `'default'` – standard flat list of items
     * - `'tree'` – hierarchical (tree-style) list with indented items and connector lines
     * Tree visuals are only applied when this prop is set to `'tree'`.
     * Ignored by default.
     * @default 'default'
     */
    variant?: 'default' | 'tree';
    /**
     * Restricts the height of the dropdown's scrollable body. When the content is taller,
     * the body scrolls vertically while any sticky regions (e.g. a Filter search / clear) stay pinned.
     * - `number` – fixed max height in pixels
     * - `string` – any valid CSS length (e.g. `'20rem'`, `'50vh'`)
     * @default undefined (no restriction)
     */
    maxHeight?: number | string;
};

// ---- Modal (components/Modal/Modal.d.ts) ----
import * as React from 'react';

/**
 * Modal from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/overlays/modal/modal.stories.tsx).
 */
export interface ModalProps {
  /** `<Modal.Trigger>` and `<Modal.Content>` children. */
  children: ReactNode;
  /** Open state for uncontrolled mode. Use `open` + `onToggle` for controlled mode. */
  defaultOpen?: boolean;
  /** Open state for controlled mode. Pair with `onToggle`. */
  open?: boolean;
  /** Called whenever the modal opens or closes. Pair with `open` for controlled mode. */
  onToggle?: (open: boolean) => void;
  /** Close the modal when the backdrop is clicked. */
  closeOnBackdropClick?: boolean;
  /** Close the modal when the Escape key is pressed. */
  closeOnEscape?: boolean;
  /** ARIA role for the dialog. Use `'alertdialog'` for destructive confirmations (delete, cancel subscription) — screen readers announce alertdialogs with higher urgency and require an explicit user action to dismiss. Affects both the trigger's `aria-haspopup` and the floating element's `role`. */
  role?: ModalRole;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type ModalRole = 'dialog' | 'alertdialog';

// ---- Popover (components/Popover/Popover.d.ts) ----
import * as React from 'react';

/**
 * Popover from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/overlays/popover/popover.stories.tsx).
 */
export interface PopoverProps {
  /** Adds correct event listeners that change the open state. */
  openWith?: OverlayOpenWith;
  /** Gap in px between the trigger and the popover. When `withArrow` is `true`, the arrow's height (17px) is added on top, so the value is the visible gap with or without the arrow. Also accepts Floating UI's `{ mainAxis, crossAxis, alignmentAxis }` object or a function. */
  offset?: OffsetOptions;
  /** Show the arrow pointing to the trigger. */
  withArrow?: boolean;
  /** If true, popover renders with an illustrative border on the arrow side and extra arrow padding so the arrow's shoulders stay clear of the rounded corner on `-start` / `-end` placements. */
  withBorder?: boolean;
  /** Trigger and Content components */
  children: ReactNode | ReactNode[];
  /** Changes aria attributes on trigger and content based on the components role */
  role?: UseRoleProps['role'];
  /** Props passed to FloatingFocusManager */
  focusManager?: Omit<ComponentProps<typeof FloatingFocusManager>, 'context' | 'children'>;
  /** Is open by default?<br /> Does not work with open and onToggle props. */
  defaultOpen?: boolean;
  /** Is open?<br /> Use this with onToggle prop for controlled component. */
  open?: boolean;
  /** Callback when toggled.<br /> Use this with open prop for state outside of component. */
  onToggle?: (open: boolean) => void;
  /** Is dismissible by clicking outside of content or Escape button? */
  dismissible?: boolean;
  /** Is scrolling locked outside of content? */
  scrollLock?: boolean;
  /** Renders the overlay purely visually: no `useRole` aria wiring on the trigger (so no `aria-describedby`) and the content is `aria-hidden`. Use when the trigger already conveys the same text through its accessible name — e.g. an icon-only button whose visible tooltip merely mirrors its label — so screen readers don't announce it twice. */
  ariaHidden?: boolean;
  /** Placement of content. */
  placement?: Placement;
  /** Re-measure the floating element every animation frame while mounted. Enable this when the trigger/reference element's position can change without a DOM-observable event (e.g. position driven by an inherited CSS custom property on an ancestor). The default `autoUpdate` only reacts to scroll, resize, and element-size changes, so position-only movement goes unnoticed and the overlay lags behind. Opt-in because animation-frame tracking is more expensive than the default. */
  trackReferencePosition?: boolean;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type OverlayOpenWith = 'click' | 'hover';

// ---- Sheet (components/Sheet/Sheet.d.ts) ----
import * as React from 'react';

/**
 * Sheet from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/overlays/sheet/sheet.stories.tsx).
 */
export interface SheetProps {
  /** `Sheet.Trigger`, `Sheet.Content` and any other content. */
  children: ReactNode;
  /** Initial open state for uncontrolled usage. */
  defaultOpen?: boolean;
  /** Controlled open state. Provide together with `onToggle`. */
  open?: boolean;
  /** Called whenever the sheet requests to open or close (trigger click, backdrop, Escape, close button). Required to react to changes in controlled mode. */
  onToggle?: (open: boolean) => void;
  /** Close the sheet when the backdrop is clicked. */
  closeOnBackdropClick?: boolean;
  /** Close the sheet when Escape is pressed. */
  closeOnEscape?: boolean;
  /** Initial collapsed state for uncontrolled usage. The sheet returns to this state each time it opens. */
  defaultCollapsed?: boolean;
  /** Controlled collapsed state - collapsed to just its header (docked peek). Collapsing only hides the body and footer, so their content and state are kept, unlike closing. Provide together with `onCollapsedChange` to collapse or expand the sheet from outside (e.g. after a map interaction). */
  collapsed?: boolean;
  /** Called whenever the sheet requests to collapse or expand (header toggle, drag handle). */
  onCollapsedChange?: (collapsed: boolean) => void;
  /** ARIA role of the sheet dialog. Use `alertdialog` for interruptive confirmations. */
  role?: SheetRole;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type SheetRole = 'dialog' | 'alertdialog';

// ---- InfoTooltip (components/InfoTooltip/InfoTooltip.d.ts) ----
import * as React from 'react';

/**
 * InfoTooltip from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/overlays/tooltip/info-tooltip.stories.tsx).
 */
export interface InfoTooltipProps {
  /** Tooltip content shown when the info button is hovered or focused. */
  children: ReactNode;
  /** Placement of the tooltip relative to the info button. */
  placement?: Placement;
  /** How the tooltip is opened. */
  openWith?: OverlayOpenWith;
  /** Max width of the tooltip content. */
  maxWidth?: TooltipContentProps['maxWidth'];
  /** Info button colour. Use `inverted` on dark or coloured backgrounds. */
  color?: 'default' | 'inverted';
  /** Renders the smaller (16px) info button. */
  isSmall?: boolean;
  /** Accessible name for the info button. */
  ariaLabel?: string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<InfoTooltipBreakpointProps>;
  md?: Partial<InfoTooltipBreakpointProps>;
  lg?: Partial<InfoTooltipBreakpointProps>;
  xl?: Partial<InfoTooltipBreakpointProps>;
  xxl?: Partial<InfoTooltipBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type OverlayOpenWith = 'click' | 'hover';
interface TooltipContentProps extends Omit<OverlayContentProps, 'classNames'> {
    /**
     * Additional class name.
     */
    className?: string;
    /**
     * Tooltip width.
     * @default medium
     */
    maxWidth?: 'none' | 'small' | 'medium' | 'large';
}
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface InfoTooltipBreakpointProps {
    /**
     * Tooltip content shown when the info button is hovered or focused.
     */
    children: ReactNode;
    /**
     * Placement of the tooltip relative to the info button.
     * @default top
     */
    placement?: Placement;
    /**
     * How the tooltip is opened.
     * @default hover
     */
    openWith?: OverlayOpenWith;
    /**
     * Max width of the tooltip content.
     * @default medium
     */
    maxWidth?: TooltipContentProps['maxWidth'];
    /**
     * Info button colour. Use `inverted` on dark or coloured backgrounds.
     * @default default
     */
    color?: 'default' | 'inverted';
    /**
     * Renders the smaller (16px) info button.
     * @default false
     */
    isSmall?: boolean;
    /**
     * Accessible name for the info button.
     * @default the translated "more information" label
     */
    ariaLabel?: string;
}

// ---- Tooltip (components/Tooltip/Tooltip.d.ts) ----
import * as React from 'react';

/**
 * Tooltip from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/overlays/tooltip/tooltip.stories.tsx).
 */
export interface TooltipProps {
  /** Adds correct event listeners that change the open state. */
  openWith?: OverlayOpenWith;
  /** Offset of content. */
  offset?: OffsetOptions;
  /** Trigger and Content components */
  children: ReactNode | ReactNode[];
  /** Changes aria attributes on trigger and content based on the components role */
  role?: UseRoleProps['role'];
  /** Minimum distance (in px) between the arrow and the edges of the content. Helps keep the arrow away from rounded corners, especially on `-start` and `-end` placements. Use a larger value for bigger arrows or arrows with borders. */
  arrowPadding?: number;
  /** Props passed to FloatingFocusManager */
  focusManager?: Omit<ComponentProps<typeof FloatingFocusManager>, 'context' | 'children'>;
  /** Is open by default?<br /> Does not work with open and onToggle props. */
  defaultOpen?: boolean;
  /** Is open?<br /> Use this with onToggle prop for controlled component. */
  open?: boolean;
  /** Callback when toggled.<br /> Use this with open prop for state outside of component. */
  onToggle?: (open: boolean) => void;
  /** Renders the overlay purely visually: no `useRole` aria wiring on the trigger (so no `aria-describedby`) and the content is `aria-hidden`. Use when the trigger already conveys the same text through its accessible name — e.g. an icon-only button whose visible tooltip merely mirrors its label — so screen readers don't announce it twice. */
  ariaHidden?: boolean;
  /** Placement of content. */
  placement?: Placement;
  /** Re-measure the floating element every animation frame while mounted. Enable this when the trigger/reference element's position can change without a DOM-observable event (e.g. position driven by an inherited CSS custom property on an ancestor). The default `autoUpdate` only reacts to scroll, resize, and element-size changes, so position-only movement goes unnoticed and the overlay lags behind. Opt-in because animation-frame tracking is more expensive than the default. */
  trackReferencePosition?: boolean;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type OverlayOpenWith = 'click' | 'hover';

// ---- StatusBadge (components/StatusBadge/StatusBadge.d.ts) ----
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

// ---- StatusIndicator (components/StatusIndicator/StatusIndicator.d.ts) ----
import * as React from 'react';

/**
 * StatusIndicator from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/tags/status-indicator/status-indicator.stories.tsx).
 */
export interface StatusIndicatorProps {
  /** The status type, which determines the indicator color. */
  type?: StatusIndicatorType;
  /** The size of the indicator. */
  size?: StatusIndicatorSize;
  /** Whether the indicator has a white border ring. */
  hasBorder?: boolean;
  /** Controls positioning of the indicator. - `'default'` — inline, no absolute positioning - `'top-right'` — absolutely positioned at the top-right corner of the parent */
  position?: StatusIndicatorPosition;
  /** Additional class name(s) */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type StatusIndicatorType = 'success' | 'danger' | 'warning' | 'inactive';
type StatusIndicatorSize = 'sm' | 'lg';
type StatusIndicatorPosition = 'default' | 'top-right';

// ---- Tag (components/Tag/Tag.d.ts) ----
import * as React from 'react';

/**
 * Tag from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/tags/tag/tag.stories.tsx).
 */
export interface TagProps {
  /** The content inside the Tag. Typically this will be text or any JSX elements to be displayed. */
  children: React.ReactNode;
  /** Function to be called when the close button is clicked. If provided, a close button will be rendered inside the Tag. */
  onClose?: MouseEventHandler<HTMLButtonElement>;
  /** Extra props forwarded to the inner close button (when `onClose` is set). Lets consumers wire up keyboard handlers, tab focus, or event isolation without reaching past the Tag API. `onClick` and `iconSize` are owned by Tag and can't be overridden here. */
  closeButtonProps?: Omit<ClosingButtonProps, 'onClick' | 'iconSize'>;
  /** Determines whether the Tag is in a loading state */
  isLoading?: boolean;
  /** Overrides the Tag's implicit live-region role. Tags default to `role="status"` so they are announced by assistive tech. When a Tag is rendered as static content inside a list — and additions/removals are announced elsewhere — pass e.g. `role="presentation"` so it is not read as a live status, which otherwise makes some screen readers (e.g. JAWS) announce the content twice on focus. */
  role?: React.AriaRole;
  /** Determines Tag color When true, the Tag will be styled accordingly and an error icon will be displayed. */
  color?: TagColor;
  /** Truncates the label when the Tag is width-constrained, revealing the full text in a popover on hover/focus. `end` shows a trailing ellipsis (`Long label…`); `start` shows a leading one (`…label`), keeping the most significant tail (e.g. dates, IDs) visible. `false` never truncates — the label wraps and the Tag keeps its full width. */
  ellipsis?: TagEllipsis;
  /** Additional classes to apply custom styles to the Tag. */
  className?: string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<TagBreakpointProps>;
  md?: Partial<TagBreakpointProps>;
  lg?: Partial<TagBreakpointProps>;
  xl?: Partial<TagBreakpointProps>;
  xxl?: Partial<TagBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface ClosingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Additional classes to apply custom styles to the ClosingButton.
     */
    className?: string;
    /**
     * Size of the ClosingButton
     * @default default
     */
    size?: ClosingButtonSize;
    /**
     * Event handler for the button click event. Triggered when the user clicks on the close button.
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
    title?: string;
    color?: ClosingButtonColor;
    iconSize?: ClosingButtonIconSize;
}
type TagColor = 'primary' | 'secondary' | 'danger';
type TagEllipsis = 'start' | 'end' | false;
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type TagBreakpointProps = {
    /**
     * Determines Tag color
     * When true, the Tag will be styled accordingly and an error icon will be displayed.
     * @default 'primary'
     */
    color?: TagColor;
    /**
     * Truncates the label when the Tag is width-constrained, revealing the full text
     * in a popover on hover/focus. `end` shows a trailing ellipsis (`Long label…`);
     * `start` shows a leading one (`…label`), keeping the most significant tail
     * (e.g. dates, IDs) visible. `false` never truncates — the label wraps and the
     * Tag keeps its full width.
     * @default false
     */
    ellipsis?: TagEllipsis;
    /**
     * Additional classes to apply custom styles to the Tag.
     */
    className?: string;
};

// ---- LabelProvider (components/LabelProvider/LabelProvider.d.ts) ----
import * as React from 'react';

/**
 * LabelProvider from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/providers/label-provider/label-provider.stories.tsx).
 */
export interface LabelProviderProps<TRecord extends TediLabelEntryRecord<TRecord> = Record<string, never>> {
  /** Global labels that are use in components. If omitted then default labels are used based on `locale` prop. If both props are omitted then Estonian translations are used by default */
  labels?: TRecord | TediLabelValuesRecord;
  /** Currently used locale. Supported languages are:<br /> et - Estonian<br /> en - English<br /> ru - Russian */
  locale?: TediLanguage;
  /** Rest of the App code */
  children: React.ReactNode;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type TediLabelValuesRecord = {
    [TKey in keyof DefaultLabels]?: DefaultLabels[TKey]['et'];
} & {
    [TKey: string]: string | LabelFunctionValue<any[]>;
};
type TediLanguage = 'et' | 'en' | 'ru';

// ---- ThemeProvider (components/ThemeProvider/ThemeProvider.d.ts) ----
import * as React from 'react';

/**
 * ThemeProvider from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/providers/theme-provider/theme-provider.stories.tsx).
 */
export interface ThemeProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type Theme = TEDITheme | string;
