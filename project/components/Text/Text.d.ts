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
