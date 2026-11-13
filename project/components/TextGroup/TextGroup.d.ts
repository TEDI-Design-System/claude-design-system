import * as React from 'react';

/**
 * TextGroup from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/content/text-group/text-group.stories.tsx).
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
