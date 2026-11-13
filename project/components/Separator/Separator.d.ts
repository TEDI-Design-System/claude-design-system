import * as React from 'react';

/**
 * Separator from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/misc/separator/separator.stories.tsx).
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
