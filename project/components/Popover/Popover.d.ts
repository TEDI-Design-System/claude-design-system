import * as React from 'react';

/**
 * Popover from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/overlays/popover/popover.stories.tsx).
 */
export interface PopoverProps {
  /** Adds correct event listeners that change the open state. */
  openWith?: OverlayOpenWith;
  /** Gap in px between the trigger and the popover. When `withArrow` is `true`, the arrow's height (17px) is added on top, so the value is the visible gap with or without the arrow. Also accepts Floating UI's `{ mainAxis, crossAxis, alignmentAxis }` object or a function. */
  offset?: OffsetOptions;
  /** Show the arrow pointing to the trigger. */
  withArrow?: boolean;
  /** If true, popover renders with an illustrative border on the arrow side and extra arrow padding so the arrow's shoulders stay clear of the rounded corner on `-start` / `-end` placements. */
  withBorder?: boolean;
  /** Trigger and Content components */
  children: ReactNode | ReactNode[];
  /** Changes aria attributes on trigger and content based on the components role */
  role?: UseRoleProps['role'];
  /** Props passed to FloatingFocusManager */
  focusManager?: Omit<ComponentProps<typeof FloatingFocusManager>, 'context' | 'children'>;
  /** Is open by default?<br /> Does not work with open and onToggle props. */
  defaultOpen?: boolean;
  /** Is open?<br /> Use this with onToggle prop for controlled component. */
  open?: boolean;
  /** Callback when toggled.<br /> Use this with open prop for state outside of component. */
  onToggle?: (open: boolean) => void;
  /** Is dismissible by clicking outside of content or Escape button? */
  dismissible?: boolean;
  /** Is scrolling locked outside of content? */
  scrollLock?: boolean;
  /** Renders the overlay purely visually: no `useRole` aria wiring on the trigger (so no `aria-describedby`) and the content is `aria-hidden`. Use when the trigger already conveys the same text through its accessible name — e.g. an icon-only button whose visible tooltip merely mirrors its label — so screen readers don't announce it twice. */
  ariaHidden?: boolean;
  /** Placement of content. */
  placement?: Placement;
  /** Re-measure the floating element every animation frame while mounted. Enable this when the trigger/reference element's position can change without a DOM-observable event (e.g. position driven by an inherited CSS custom property on an ancestor). The default `autoUpdate` only reacts to scroll, resize, and element-size changes, so position-only movement goes unnoticed and the overlay lags behind. Opt-in because animation-frame tracking is more expensive than the default. */
  trackReferencePosition?: boolean;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type OverlayOpenWith = 'click' | 'hover';
