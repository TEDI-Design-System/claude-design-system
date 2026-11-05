import * as React from 'react';

/**
 * Card from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/card/card.stories.tsx).
 */
export interface CardProps {
  children?: React.ReactNode;
  /** Id applied to the root element (forwarded to the underlying `div`). */
  id?: string;
  /** Additional class. */
  className?: string;
  /** Controls card border radius. Accepts `false` to remove all radius or an object to control sides or individual corners. Side values affect two corners while corner values take precedence. Examples: `false` → no radius `{ top:false }` → removes top corners `{ left:false }` → removes left corners `{ topLeft:false }` → removes one corner `{ bottom:false, bottomRight:true }` → corner override */
  borderRadius?: BorderRadius;
  /** Removes the card's border entirely. */
  borderless?: boolean;
  /** Adds a colored accent border to the top or left of the card (e.g. `top-success-primary`, `left-danger-primary`). */
  border?: CardBorderType;
  /** Card content padding Values can be:<br /> - predefined number value in rems<br /> - object of separated horizontal and vertical number values in rems - object of separated top, right, bottom, left number values in rems */
  padding?: CardContentPadding;
  /** Background color. */
  background?: CardBackground;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<CardBreakpointProps>;
  md?: Partial<CardBreakpointProps>;
  lg?: Partial<CardBreakpointProps>;
  xl?: Partial<CardBreakpointProps>;
  xxl?: Partial<CardBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type BorderRadius = false | {
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
    topLeft?: boolean;
    topRight?: boolean;
    bottomRight?: boolean;
    bottomLeft?: boolean;
};
type CardBorderType = `${CardBorderPlacement}-${CardBackground}` | CardBackground;
type CardContentPadding = CardContentPaddingNumber | {
    vertical: CardContentPaddingNumber;
    horizontal: CardContentPaddingNumber;
} | {
    top: CardContentPaddingNumber;
    right: CardContentPaddingNumber;
    bottom: CardContentPaddingNumber;
    left: CardContentPaddingNumber;
};
type CardBackground = 'primary' | 'secondary' | 'tertiary' | 'accent' | 'brand-primary' | 'brand-secondary' | 'brand-tertiary' | 'brand-quaternary' | 'danger-primary' | 'danger-secondary' | 'success-primary' | 'success-secondary' | 'info-primary' | 'info-secondary' | 'warning-primary' | 'warning-secondary' | 'neutral-primary' | 'neutral-secondary';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type CardBreakpointProps = {
    /**
     * Additional class.
     */
    className?: string;
    /**
     * Controls card border radius.
     *
     * Accepts `false` to remove all radius or an object to control sides or individual corners.
     *
     * Side values affect two corners while corner values take precedence.
     *
     * Examples:
     * `false` → no radius
     * `{ top:false }` → removes top corners
     * `{ left:false }` → removes left corners
     * `{ topLeft:false }` → removes one corner
     * `{ bottom:false, bottomRight:true }` → corner override
     */
    borderRadius?: BorderRadius;
    /**
     * Removes the card's border entirely.
     * @default false
     */
    borderless?: boolean;
    /**
     * Adds a colored accent border to the top or left of the card (e.g. `top-success-primary`, `left-danger-primary`).
     */
    border?: CardBorderType;
} & Pick<CardContentProps, 'padding' | 'background'>;
