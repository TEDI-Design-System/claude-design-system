import * as React from 'react';

/**
 * Radio from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/form/radio/radio.stories.tsx).
 */
export interface RadioProps {
  /** Visual variant. - `default` — standard indicator + label. - `card` — the whole control renders as a selectable card (indicator, label, optional icon/description). */
  variant?: ChoiceInputVariant;
  /** Provide content for tooltip. Accepts rich content (e.g. bold text, links), not just a plain string. Mutually exclusive with `variant="card"` — the card carries supplementary content through its `description` slot instead. Passing both logs a dev-time warning and the tooltip is ignored. (This is enforced at runtime rather than in the types: a discriminated union would reject the dynamic prop-spreading that `Checkbox.Group` / `Radio.Group` / `Table` rely on.) */
  tooltip?: React.ReactNode;
  /** ID property. When omitted a stable id is generated (useful inside `Radio.Group` / `Checkbox.Group`). */
  id?: string;
  /** Label text */
  label: React.ReactNode;
  /** Additional classes. */
  className?: string;
  /** Value property */
  value: string;
  /** name of the input. Provided automatically when rendered inside `Radio.Group` / `Checkbox.Group`. */
  name?: string;
  /** Card colour variant. Only applies when `variant="card"`. */
  cardVariant?: ChoiceInputCardVariant;
  /** Secondary description text shown under the label. Primarily used with `variant="card"`. */
  description?: React.ReactNode;
  /** Leading icon (Material icon name) shown before the label. Primarily used with `variant="card"`. */
  icon?: string;
  /** is the label hidden */
  hideLabel?: boolean;
  /** If the option is disabled */
  disabled?: boolean;
  /** onChange handler */
  onChange?: (value: string, checked: boolean) => void;
  /** Helper text displayed below the input. */
  helper?: FeedbackTextProps;
  /** If the check is controlled from outside the components */
  checked?: boolean;
  /** If the check is checked by default */
  defaultChecked?: boolean;
  /** If the item should be in hover state */
  hover?: boolean;
  /** Additional props forwarded to the underlying `Label` component. Use `modifiers` to control how the label text wraps or breaks (e.g. `{ modifiers: 'nowrap' }`). */
  labelProps?: FormLabelProps['labelProps'];
  /** Input size */
  size?: 'default' | 'large';
  /** Whether the input is marked as invalid. */
  invalid?: boolean;
  /** Whether the input is marked as required. */
  required?: boolean;
  /** Gives a primary card a border in the unselected state. Only applies to `variant="card"` with `cardVariant="primary"`; has no effect inside a `layout="segmented"` group, where cards always have a border. */
  bordered?: boolean;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<RadioBreakpointProps>;
  md?: Partial<RadioBreakpointProps>;
  lg?: Partial<RadioBreakpointProps>;
  xl?: Partial<RadioBreakpointProps>;
  xxl?: Partial<RadioBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type ChoiceInputVariant = 'default' | 'card';
type ChoiceInputCardVariant = 'primary' | 'secondary';
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
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type RadioBreakpointProps = ChoiceInputProps & {
    /**
     * Gives a primary card a border in the unselected state.
     * Only applies to `variant="card"` with `cardVariant="primary"`; has no effect inside a
     * `layout="segmented"` group, where cards always have a border.
     * @default false
     */
    bordered?: boolean;
};
