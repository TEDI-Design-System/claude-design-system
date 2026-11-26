import * as React from 'react';

/**
 * InlineEdit from @tedi-design-system/react@21.0.0 (stories: ./src/tedi/components/form/inline-edit/inline-edit.stories.tsx).
 */
export interface InlineEditProps<T> {
  /** Accessible label for the field (announced on the read trigger). */
  label: string;
  /** Renders the read view. Defaults to the value itself. Return a node — e.g. format a `Date`, or map a select option to its `label`. */
  renderValue?: (value: T) => React.ReactNode;
  /** Shown in the read view when the value is empty. No default — supply one if you want an empty-state hint. */
  placeholder?: React.ReactNode;
  /** Renders the value as plain text with no edit affordance, keeping the row's inset so it lines up with editable rows. */
  readOnly?: boolean;
  /** Blocks editing and keeps the trigger and edit icon visible but greyed, for transient states such as saving. */
  disabled?: boolean;
  /** Marks the row as invalid, setting `aria-invalid` on the editor control; an `error` helper sets it too. */
  invalid?: boolean;
  /** Feedback text below the field, linked to the trigger and the editor through `aria-describedby`. */
  helper?: FeedbackTextProps | FeedbackTextProps[];
  /** Sizes the row to its value instead of filling its container, so the row changes width when the editor opens. */
  fitContent?: boolean;
  /** Commits on Enter; turn it off when the editor uses Enter itself. A textarea, menu or button already keeps its Enter. */
  closeOnEnter?: boolean;
  /** Cancels on Escape. */
  closeOnEscape?: boolean;
  /** Commits when focus leaves the editor or the menus it opens. */
  closeOnBlur?: boolean;
  /** Text size and row spacing of the read trigger and editor. */
  size?: InlineEditSize;
  /** Places the edit icon at the trailing edge (`end`) or straight after the value (`inline`); hidden while the row is invalid. */
  editIconPosition?: 'inline' | 'end';
  /** id applied to the root: the read trigger, the editor or the read-only text. */
  id?: string;
  /** Additional class on the root element. */
  className?: string;
  /** Renders the editor: return a TEDI control wired to the render props, forwarding `size` so it matches the read view. */
  children: (editor: InlineEditEditor<T> & { size: InlineEditSize; }) => React.ReactNode;
  /** Controlled committed value. Pair with `onChange`. */
  value?: T;
  /** Initial committed value for uncontrolled use. Ignored when `value` is set. */
  defaultValue?: T;
  /** Called with the draft when an edit is committed. */
  onChange?: (value: T) => void;
  /** Controlled edit mode. Update it from `onEditStart`, `onChange` and `onEditCancel`. */
  editing?: boolean;
  /** Starts in edit mode. An editor that starts open does not take focus. */
  defaultEditing?: boolean;
  /** Called when the user enters edit mode. */
  onEditStart?: () => void;
  /** Called when the user cancels the edit. */
  onEditCancel?: () => void;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface FeedbackTextProps {
    /**
     * Helper text
     */
    text: React.ReactNode | React.ReactNode[];
    /**
     * ID to reference the helper from aria-describedby attributes.
     * If omitted, then the id might be set through a parent component.
     */
    id?: string;
    /**
     * Additional custom class.
     */
    className?: string;
    /**
     * Type of form-helper.
     * @default hint
     */
    type?: FeedbackTextType;
    /**
     * Position of the helper.
     * @default left
     */
    position?: FeedbackTextPosition;
}
type InlineEditSize = 'default' | 'small';
interface InlineEditEditor<T> {
    /** Current draft value — wire this to the control's `value`. */
    value: T;
    /** Update the draft — wire this to the control's `onChange`. */
    onChange: (value: T) => void;
    /** Commit the draft (fires `onChange`) and leave edit mode. */
    commit: () => void;
    /** Discard the draft and leave edit mode. */
    cancel: () => void;
}
