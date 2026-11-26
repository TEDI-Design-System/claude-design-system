import * as React from 'react';

/**
 * Rating from @tedi-design-system/react@21.0.0 (stories: ./src/tedi/components/form/rating/rating.stories.tsx).
 */
export interface RatingProps {
  /** Accessible name for the group; also prefixes the `readOnly` summary. */
  label: string;
  /** Visual style. `star` / `number` fill cumulatively; `icon` highlights a single item. */
  type?: RatingType;
  /** Number of items (the max rating). */
  count?: number;
  /** Selected value (1-based; `0` = none). Use with `onChange` for controlled mode. In `readOnly`, the (possibly fractional) average. */
  value?: number;
  /** Initial value for uncontrolled mode. */
  defaultValue?: number;
  /** Called with the chosen value when the selection changes. */
  onChange?: (value: number) => void;
  /** Per-item labels (length = `count`); used as each item's accessible name and as captions. */
  itemLabels?: string[];
  /** Custom Material Symbol glyph(s): an array (one per item) for `type="icon"`, or a single string to swap the `type="star"` glyph. */
  icons?: string | string[];
  /** Disable interaction and mute the colours. */
  disabled?: boolean;
  /** Show a compact read-only summary (visual + `{value}/{count}` text; text only for `type="number"`) instead of the interactive scale. */
  readOnly?: boolean;
  /** Number of ratings shown in the `readOnly` summary (e.g. `271 hindajat`); omitted when unset. */
  ratingsCount?: number;
  /** Show the descriptive raters label next to `ratingsCount` (e.g. `271 hindajat`). Set `false` to show the number only (`271`). */
  showRatingsCountLabel?: boolean;
  /** `readOnly` layout: `summary` (single visual) or `scale` (full star scale with fractional fill). */
  readOnlyVariant?: 'summary' | 'scale';
  /** `name` for the radio inputs (form submission). Defaults to a generated id. */
  name?: string;
  /** Additional class name on the root element. */
  className?: string;
  /** Lay the scale out horizontally or stack it vertically (icon + caption per row; number scale stacked with the endpoint captions bracketing it). Use `vertical` on narrow layouts for `type="icon"` with long `itemLabels`, or for a number scale that would otherwise overflow. Ignored for `type="star"`, which is always horizontal. Breakpoint-aware: e.g. `orientation="vertical" md={{ orientation: 'horizontal' }}`. */
  orientation?: 'horizontal' | 'vertical';
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<RatingBreakpointProps>;
  md?: Partial<RatingBreakpointProps>;
  lg?: Partial<RatingBreakpointProps>;
  xl?: Partial<RatingBreakpointProps>;
  xxl?: Partial<RatingBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type RatingType = 'star' | 'number' | 'icon';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface RatingBreakpointProps {
    /**
     * Lay the scale out horizontally or stack it vertically (icon + caption per row; number scale
     * stacked with the endpoint captions bracketing it). Use `vertical` on narrow layouts for
     * `type="icon"` with long `itemLabels`, or for a number scale that would otherwise overflow.
     * Ignored for `type="star"`, which is always horizontal.
     * Breakpoint-aware: e.g. `orientation="vertical" md={{ orientation: 'horizontal' }}`.
     * @default horizontal
     */
    orientation?: 'horizontal' | 'vertical';
}
