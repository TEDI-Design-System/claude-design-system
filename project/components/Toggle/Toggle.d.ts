import * as React from 'react';

/**
 * Toggle from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/toggle/toggle.stories.tsx).
 */
export interface ToggleProps {
  /** Unique identifier for the toggle input. Required for accessibility and to link the label with the input. */
  id: string;
  /** Label text or element displayed next to the toggle. This is shown to users and should clearly describe what the toggle does. */
  label: React.ReactNode;
  /** Visually hides the label while keeping it accessible to screen readers. Useful when the toggle's purpose is clear from context (e.g., in a settings row). */
  hideLabel?: boolean;
  /** Position of the label relative to the toggle switch. */
  labelPosition?: 'left' | 'right';
  /** Optional helper text displayed below the toggle. Can be used to provide additional context or validation messages. */
  helper?: FeedbackTextProps;
  /** Additional CSS class name(s) to apply to the toggle wrapper. Useful for custom styling or theming from parent components. */
  className?: string;
  /** Controlled state of the toggle. Use this together with `onChange` for full control over the checked state. */
  checked?: boolean;
  /** Initial checked state for uncontrolled usage. Ignored if `checked` prop is provided. */
  defaultChecked?: boolean;
  /** Callback fired when the toggle state changes. */
  onChange?: void;
  /** Size of the toggle switch. */
  size?: 'default' | 'large';
  /** Color variant of the toggle. - `primary`: Standard toggle (usually blue/brand color) - `colored`: Alternative accent color (e.g. for special settings) */
  color?: 'primary' | 'colored';
  /** Visual style variant of the toggle. */
  type?: 'filled' | 'outlined';
  /** Shows a lock icon inside the toggle knob. Typically used with `size="large"` to indicate secure/private settings. */
  icon?: boolean;
  /** Disables the toggle, preventing user interaction. */
  disabled?: boolean;
  /** Shows a loading spinner inside the toggle instead of the icon or dot. Useful for async operations (e.g. saving settings). When `true`, `onChange` will not be triggered. */
  isLoading?: boolean;
  /** Tooltip content shown when hovering over the label. Useful for providing extra explanation without cluttering the UI. */
  tooltip?: string;
  /** Additional props forwarded to the underlying `Label` component. Use `modifiers` to control how the label text wraps or breaks (e.g. `{ modifiers: 'nowrap' }`). */
  labelProps?: FormLabelProps['labelProps'];
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
interface FormLabelProps {
    /**
     * The unique identifier for the input element that this label is associated with.
     * This ID should match the input element's `id` attribute to ensure accessibility.
     */
    id: string;
    /**
     * The text content of the label that describes the input field.
     */
    label: React.ReactNode;
    /**
     * Controls the visibility of the label.
     * Use `true` to hide the label visually while maintaining its space in the layout,
     * or use 'keep-space' to hide it without collapsing the space it occupies.
     */
    hideLabel?: boolean | 'keep-space';
    /**
     * Indicates whether the input field is required.
     * If set to `true`, the required indicator (if provided) will be displayed next to the label.
     */
    required?: boolean;
    /**
     * Additional className.
     */
    className?: string;
    /**
     * Renders the label as a `<span>` instead of a `<label>` element.
     * This is useful when the `Form` component already handles labels internally.
     */
    renderWithoutLabel?: boolean;
    /**
     * Specifies the size of the label text.
     * Options include 'small' for a smaller label size or 'default' for the standard size.
     * @default default
     */
    size?: 'small' | 'default';
    /**
     * Tooltip content to display when hovering over the info button.
     * If provided, an info button with a tooltip will be rendered.
     */
    tooltip?: React.ReactNode;
    /**
     * Additional props forwarded to the underlying `Label` component.
     * Use `modifiers` to control how the label text wraps or breaks
     * (e.g. `{ modifiers: 'nowrap' }`) so long labels don't distort the form layout.
     * Breakpoint keys are supported for responsive wrapping
     * (e.g. `{ modifiers: 'nowrap', sm: { modifiers: 'break-word' } }`).
     */
    labelProps?: LabelModifierProps;
}
