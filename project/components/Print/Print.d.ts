import * as React from 'react';

/**
 * Print from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/misc/print/print.stories.tsx).
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
