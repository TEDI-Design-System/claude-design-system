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
  sm?: Partial<{ children: React.ReactNode; className?: string; visualType?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").ButtonType; fullWidth?: boolean; color?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").ButtonColor; size?: "default" | "small" | "large"; icon?: string | import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").IconWithoutBackgroundProps; iconLeft?: string | import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").IconWithoutBackgroundProps; iconRight?: string | import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").IconWithoutBackgroundProps; underline?: boolean; isHovered?: boolean; isActive?: boolean; isLoading?: boolean; noStyle?: boolean; renderWrapperElement?: unknown; showTooltip?: boolean; } & InternalLinkProps & { as?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>; } & Omit<React.PropsWithoutRef<React.ComponentProps<import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>>>, "children" | "className" | "color" | "as" | "visualType" | "fullWidth" | "size" | "icon" | "iconLeft" | "iconRight" | "underline" | "isHovered" | "isActive" | "isLoading" | "noStyle" | "renderWrapperElement" | "showTooltip" | "iconStandalone"> & { ref?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").PolymorphicRef<import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>>; } & { underline?: boolean; }>;
  md?: Partial<{ children: React.ReactNode; className?: string; visualType?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").ButtonType; fullWidth?: boolean; color?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").ButtonColor; size?: "default" | "small" | "large"; icon?: string | import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").IconWithoutBackgroundProps; iconLeft?: string | import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").IconWithoutBackgroundProps; iconRight?: string | import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").IconWithoutBackgroundProps; underline?: boolean; isHovered?: boolean; isActive?: boolean; isLoading?: boolean; noStyle?: boolean; renderWrapperElement?: unknown; showTooltip?: boolean; } & InternalLinkProps & { as?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>; } & Omit<React.PropsWithoutRef<React.ComponentProps<import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>>>, "children" | "className" | "color" | "as" | "visualType" | "fullWidth" | "size" | "icon" | "iconLeft" | "iconRight" | "underline" | "isHovered" | "isActive" | "isLoading" | "noStyle" | "renderWrapperElement" | "showTooltip" | "iconStandalone"> & { ref?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").PolymorphicRef<import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>>; } & { underline?: boolean; }>;
  lg?: Partial<{ children: React.ReactNode; className?: string; visualType?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").ButtonType; fullWidth?: boolean; color?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").ButtonColor; size?: "default" | "small" | "large"; icon?: string | import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").IconWithoutBackgroundProps; iconLeft?: string | import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").IconWithoutBackgroundProps; iconRight?: string | import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").IconWithoutBackgroundProps; underline?: boolean; isHovered?: boolean; isActive?: boolean; isLoading?: boolean; noStyle?: boolean; renderWrapperElement?: unknown; showTooltip?: boolean; } & InternalLinkProps & { as?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>; } & Omit<React.PropsWithoutRef<React.ComponentProps<import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>>>, "children" | "className" | "color" | "as" | "visualType" | "fullWidth" | "size" | "icon" | "iconLeft" | "iconRight" | "underline" | "isHovered" | "isActive" | "isLoading" | "noStyle" | "renderWrapperElement" | "showTooltip" | "iconStandalone"> & { ref?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").PolymorphicRef<import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>>; } & { underline?: boolean; }>;
  xl?: Partial<{ children: React.ReactNode; className?: string; visualType?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").ButtonType; fullWidth?: boolean; color?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").ButtonColor; size?: "default" | "small" | "large"; icon?: string | import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").IconWithoutBackgroundProps; iconLeft?: string | import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").IconWithoutBackgroundProps; iconRight?: string | import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").IconWithoutBackgroundProps; underline?: boolean; isHovered?: boolean; isActive?: boolean; isLoading?: boolean; noStyle?: boolean; renderWrapperElement?: unknown; showTooltip?: boolean; } & InternalLinkProps & { as?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>; } & Omit<React.PropsWithoutRef<React.ComponentProps<import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>>>, "children" | "className" | "color" | "as" | "visualType" | "fullWidth" | "size" | "icon" | "iconLeft" | "iconRight" | "underline" | "isHovered" | "isActive" | "isLoading" | "noStyle" | "renderWrapperElement" | "showTooltip" | "iconStandalone"> & { ref?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").PolymorphicRef<import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>>; } & { underline?: boolean; }>;
  xxl?: Partial<{ children: React.ReactNode; className?: string; visualType?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").ButtonType; fullWidth?: boolean; color?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").ButtonColor; size?: "default" | "small" | "large"; icon?: string | import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").IconWithoutBackgroundProps; iconLeft?: string | import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").IconWithoutBackgroundProps; iconRight?: string | import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").IconWithoutBackgroundProps; underline?: boolean; isHovered?: boolean; isActive?: boolean; isLoading?: boolean; noStyle?: boolean; renderWrapperElement?: unknown; showTooltip?: boolean; } & InternalLinkProps & { as?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>; } & Omit<React.PropsWithoutRef<React.ComponentProps<import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>>>, "children" | "className" | "color" | "as" | "visualType" | "fullWidth" | "size" | "icon" | "iconLeft" | "iconRight" | "underline" | "isHovered" | "isActive" | "isLoading" | "noStyle" | "renderWrapperElement" | "showTooltip" | "iconStandalone"> & { ref?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").PolymorphicRef<import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").AllowedHTMLTags<C, AllowedTags>>; } & { underline?: boolean; }>;
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
