import * as React from 'react';

/**
 * Sheet from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/overlays/sheet/sheet.stories.tsx).
 */
export interface SheetProps {
  /** `Sheet.Trigger`, `Sheet.Content` and any other content. */
  children: ReactNode;
  /** Initial open state for uncontrolled usage. */
  defaultOpen?: boolean;
  /** Controlled open state. Provide together with `onToggle`. */
  open?: boolean;
  /** Called whenever the sheet requests to open or close (trigger click, backdrop, Escape, close button). Required to react to changes in controlled mode. */
  onToggle?: (open: boolean) => void;
  /** Close the sheet when the backdrop is clicked. */
  closeOnBackdropClick?: boolean;
  /** Close the sheet when Escape is pressed. */
  closeOnEscape?: boolean;
  /** Initial collapsed state for uncontrolled usage. The sheet returns to this state each time it opens. */
  defaultCollapsed?: boolean;
  /** Controlled collapsed state - collapsed to just its header (docked peek). Collapsing only hides the body and footer, so their content and state are kept, unlike closing. Provide together with `onCollapsedChange` to collapse or expand the sheet from outside (e.g. after a map interaction). */
  collapsed?: boolean;
  /** Called whenever the sheet requests to collapse or expand (header toggle, drag handle). */
  onCollapsedChange?: (collapsed: boolean) => void;
  /** ARIA role of the sheet dialog. Use `alertdialog` for interruptive confirmations. */
  role?: SheetRole;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type SheetRole = 'dialog' | 'alertdialog';
