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
