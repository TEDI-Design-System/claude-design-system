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
  sm?: Partial<{ className?: string; element?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").TextElement; modifiers?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").TextModifiers[] | import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").TextModifiers; color?: TextColor; }>;
  md?: Partial<{ className?: string; element?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").TextElement; modifiers?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").TextModifiers[] | import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").TextModifiers; color?: TextColor; }>;
  lg?: Partial<{ className?: string; element?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").TextElement; modifiers?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").TextModifiers[] | import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").TextModifiers; color?: TextColor; }>;
  xl?: Partial<{ className?: string; element?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").TextElement; modifiers?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").TextModifiers[] | import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").TextModifiers; color?: TextColor; }>;
  xxl?: Partial<{ className?: string; element?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").TextElement; modifiers?: import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").TextModifiers[] | import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/index").TextModifiers; color?: TextColor; }>;
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
