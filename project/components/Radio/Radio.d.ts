import * as React from 'react';

/**
 * Radio from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/radio/radio.stories.tsx).
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
