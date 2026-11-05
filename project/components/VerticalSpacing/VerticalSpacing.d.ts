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
