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
