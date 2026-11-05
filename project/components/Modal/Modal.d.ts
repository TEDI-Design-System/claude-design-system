import * as React from 'react';

/**
 * Modal from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/overlays/modal/modal.stories.tsx).
 */
export interface ModalProps {
  /** `<Modal.Trigger>` and `<Modal.Content>` children. */
  children: ReactNode;
  /** Open state for uncontrolled mode. Use `open` + `onToggle` for controlled mode. */
  defaultOpen?: boolean;
  /** Open state for controlled mode. Pair with `onToggle`. */
  open?: boolean;
  /** Called whenever the modal opens or closes. Pair with `open` for controlled mode. */
  onToggle?: (open: boolean) => void;
  /** Close the modal when the backdrop is clicked. */
  closeOnBackdropClick?: boolean;
  /** Close the modal when the Escape key is pressed. */
  closeOnEscape?: boolean;
  /** ARIA role for the dialog. Use `'alertdialog'` for destructive confirmations (delete, cancel subscription) — screen readers announce alertdialogs with higher urgency and require an explicit user action to dismiss. Affects both the trigger's `aria-haspopup` and the floating element's `role`. */
  role?: ModalRole;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type ModalRole = 'dialog' | 'alertdialog';
