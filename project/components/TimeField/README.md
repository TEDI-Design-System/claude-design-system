TimeField from @tedi-design-system/react. Use via `window.Tedi.TimeField` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Sizes, States, Field Options, Value Type, On Click Type, Predefined Time Slots, Dropdown, Field Without Picker, Custom Step, Manual Typing, Modal Picker, Responsive Modal Picker, Native Picker.

## Props

```ts
import * as React from 'react';

/**
 * TimeField from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/form/time-field/time-field.stories.tsx).
 */
export interface TimeFieldProps {
  /** Unique identifier for the input field. */
  id: string;
  /** Label for the input field. Used for accessibility. */
  label: string;
  /** Props forwarded to the field's label (e.g. `{ modifiers: 'nowrap' }` to control how a long label wraps). Breakpoint keys are supported for responsive wrapping. */
  labelProps?: TextFieldProps['labelProps'];
  /** Current value of the time field (controlled). */
  value?: string;
  /** Initial value of the time field (uncontrolled). */
  defaultValue?: string;
  /** Callback fired when the time value changes. */
  onChange?: (time: string) => void;
  /** Makes the input read-only. Picker can still be opened if showPicker is true. */
  readOnly?: boolean;
  /** Disables the input and the picker. Equivalent of `<DateTimeField disabled>` — added so all three field siblings (`DateField`, `TimeField`, `DateTimeField`) share the same form-control idiom for "this field is fully unavailable". Forwards to the underlying `TextField`'s `disabled` attribute and short-circuits the picker open path. */
  disabled?: boolean;
  /** Marks the input as required. */
  required?: boolean;
  /** Placeholder text for the input field. */
  placeholder?: string;
  /** Additional props to pass to the underlying TextField component, excluding `id`, `label`, `value`, and `onChange`. */
  inputProps?: Omit<TextFieldProps, 'id' | 'label' | 'value' | 'onChange'>;
  /** Step interval in minutes for the time picker. */
  stepMinutes?: number;
  /** Additional CSS class for the container. */
  className?: string;
  /** Array of available times to show in the picker or dropdown. */
  availableTimes?: string[];
  /** Open the picker inside a modal instead of a floating popover. Useful on narrow viewports where a popover overlaps the input itself. - `true` always opens in a modal - `false` (default) always uses the popover - A breakpoint name (e.g. `'md'`) opens in a modal *below* that breakpoint and falls back to the popover from that breakpoint up Ignored when `useNativePicker` resolves to `true`. */
  modal?: TimeFieldModal;
  /** Extra props forwarded to the picker modal's `Modal.Content` — e.g. `size`, `width`, `maxWidth`, `position`, `fullscreen`, and per-breakpoint overrides. Lets the consumer tune the modal beyond its `size="small"` / `width="xs"` (capped to 312px) defaults. `className` is merged with the component's own (so the internal padding reset is preserved). Only applies when the picker opens as a modal. */
  modalProps?: Omit<ModalContentProps, 'children'>;
  /** If `true`, the field swaps the custom time-picker popover for the browser's native time picker (`<input type="time">`). Works on both mobile and desktop — useful when the consumer wants to skip the custom UI entirely. Note: When using the native picker, the `availableTimes` prop is ignored. */
  useNativePicker?: boolean;
  /** Determines how the time picker is triggered: - 'button' (default) – only clicking the icon opens the picker - 'input' – clicking anywhere in the input opens the picker */
  timePickerTrigger?: 'input' | 'button';
  /** Enables or disables the time picker popover. */
  showPicker?: boolean;
  /** Variant of the available times: - 'grid-buttons' – buttons grid - 'grid-radio' – radio buttons grid - 'dropdown' – dropdown list */
  availableTimesVariant?: 'grid-buttons' | 'grid-radio' | 'dropdown';
  /** Whether the field shows a clear button to reset the value. Disable it when the field is required or the value should not be cleared. */
  clearable?: boolean;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<TimeFieldBreakpointProps>;
  md?: Partial<TimeFieldBreakpointProps>;
  lg?: Partial<TimeFieldBreakpointProps>;
  xl?: Partial<TimeFieldBreakpointProps>;
  xxl?: Partial<TimeFieldBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface TextFieldProps extends BreakpointSupport<TextFieldBreakpointProps>, Omit<FormLabelProps, 'size' | 'id' | 'label'> {
    /**
     * Unique identifier for the text field.
     *
     * Required for accessibility (associates label, helper text, and input).
     * Also used to generate `aria-describedby` and helper IDs automatically.
     */
    id?: string;
    /**
     * The text or React node that serves as the label for the text field.
     * If `hideLabel` is `true`, the label will be visually hidden but still accessible to screen readers.
     * If `hideLabel` is `'keep-space'`, the label will be hidden but the space it occupies will be preserved.
     */
    label?: React.ReactNode;
    /**
     * Name attribute for the underlying input/textarea element.
     *
     * Important for form submission and integration with form libraries (React Hook Form, Formik, etc.).
     */
    name?: string;
    /**
     * Custom CSS class applied directly to the `<input>` or `<textarea>` element (via the internal `Field` component).
     *
     * Use this when you need to style the input itself (e.g. text alignment, font, custom focus styles).
     *
     * Note: The root container uses `className`.
     */
    inputClassName?: string;
    /**
     * Callback fired when the value changes. Receives the new value as a plain string.
     *
     * Preferred for most use cases (simpler than `onChangeEvent`).
     *
     * @param value - The current value of the field after change
     */
    onChange?: (value: string) => void;
    /**
     * Native `onChange` event handler.
     *
     * Gives you access to the full `ChangeEvent` object (useful if you need `event.target`, `event.preventDefault()`, etc.).
     *
     * Note: Both `onChange` and `onChangeEvent` are called when the value changes.
     */
    onChangeEvent?: React.ChangeEventHandler<FieldElement>;
    /**
     * Keyboard event handlers attached to the inner wrapper `<div>`.
     *
     * Useful for handling Enter key submission, arrow key navigation, or custom keyboard shortcuts.
     *
     * Note: These are **not** attached to the input/textarea directly, but to the surrounding container.
     */
    onKeyPress?: React.KeyboardEventHandler<HTMLDivElement>;
    /**
     * Key-down handler attached to the field's surrounding container (not the input directly).
     */
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
    /**
     * Key-up handler attached to the field's surrounding container (not the input directly).
     */
    onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
    /**
     * Default value for **uncontrolled** usage.
     *
     * Use this when you don't want to manage state yourself.
     * The component will manage its internal state.
     */
    defaultValue?: string;
    /**
     * Controlled value of the text field.
     *
     * When provided, the component becomes **fully controlled**.
     * You must update this value via `onChange` to reflect user input.
     */
    value?: string;
    /**
     * Called when the user clicks on the icon (only works if `icon` is provided).
     *
     * The icon is automatically wrapped in a `<button>` when this prop is present.
     *
     * @param event - Mouse event from the icon wrapper
     */
    onIconClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
    /**
     * Extra HTML attributes spread on the icon `<button>` element.
     *
     * Use this to wire ARIA state (e.g. `aria-expanded`, `aria-controls`,
     * `aria-haspopup`) directly to the icon trigger, so screen readers announce
     * disclosure state correctly when the icon opens a popover / dialog.
     *
     * Only applied when `onIconClick` is set (i.e. the icon is rendered as a
     * `<button>`).
     */
    iconButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    /**
     * Click handler for the entire inner container (the area around the input).
     *
     * Can be used to focus the input when clicking anywhere in the field area,
     * or to trigger custom behavior.
     */
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    /**
     * Disables the entire text field.
     *
     * When `true`:
     * - Input becomes non-editable and non-focusable
     * - Clear button is hidden and icon is disabled
     * - Visual disabled styles are applied
     */
    disabled?: boolean;
    /**
     * Marks the field as invalid and triggers error styling.
     *
     * Also affects `aria-invalid` attribute.
     *
     * Note: The `helper` prop can override this if it contains items with `type: 'error'`.
     */
    invalid?: boolean;
    /**
     * Makes the field read-only.
     *
     * User can focus and select text, but cannot modify the value.
     * Useful for pre-filled data that should not be changed. Hides the clear button.
     */
    readOnly?: boolean;
    /**
     * Helper text, success message, or error message displayed below the field.
     *
     * Accepts either:
     * - A single `FeedbackTextProps` object
     * - An array of `FeedbackTextProps` (useful for multiple messages or mixed error/success states)
     *
     * The component automatically detects error states from helper items.
     */
    helper?: FeedbackTextProps | FeedbackTextProps[];
    /**
     * Fired when the input/textarea receives focus.
     */
    onFocus?: React.FocusEventHandler<FieldElement>;
    /**
     * Fired when the input/textarea loses focus.
     */
    onBlur?: React.FocusEventHandler<FieldElement>;
    /**
     * Hides the spinner/arrows for number inputs (`type="number"`).
     *
     * Only has effect when the underlying input has `type="number"`.
     *
     * @default true
     */
    isArrowsHidden?: boolean;
    /**
     * Callback fired when the clear button (×) is clicked.
     *
     * Useful if you need to perform additional actions besides clearing the value
     * (e.g. analytics, resetting related fields, etc.).
     *
     * Note: The field value is automatically cleared regardless of this callback.
     */
    onClear?: () => void;
    /**
     * Additional attributes for the input element.
     */
    input?: React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    /**
     * Optional start slot element to render inside the input container, before the input field.
     */
    startSlot?: React.ReactNode;
    /**
     * Optional end slot element to render inside the input container, after the input field.
     */
    endSlot?: React.ReactNode;
}
type TimeFieldModal = boolean | Exclude<Breakpoint, 'xs'>;
interface ModalContentProps extends BreakpointSupport<ModalContentBreakpointProps> {
    /**
     * `<Modal.Header>`, `<Modal.Body>`, `<Modal.Footer>` and any other content.
     */
    children: ReactNode;
    /**
     * Size density — controls header/body/footer padding.
     * @default default
     */
    size?: ModalSize;
    /**
     * Where overflow scrolls. `'content'` keeps the modal frame fixed and scrolls the body;
     * `'page'` lets the modal grow with content and scrolls the overlay around it.
     * @default content
     */
    scrollBehavior?: ModalScrollBehavior;
    /**
     * Trap focus inside the modal while open.
     * @default true
     */
    trapFocus?: boolean;
    /**
     * Restore focus to the trigger after closing.
     * @default true
     */
    returnFocus?: boolean;
    /**
     * Render the dimmed backdrop. `false` keeps portal + focus management but no overlay.
     * @default true
     */
    showOverlay?: boolean;
    /**
     * Lock background scroll while open.
     * @default true
     */
    lockScroll?: boolean;
    /**
     * Render visually-hidden dismiss buttons at the start and end of the dialog
     * so touch screen-readers can escape without an Escape key.
     * @default false
     */
    visuallyHiddenDismiss?: boolean;
    /**
     * Override the dialog's labelling element. Only needed when the label lives
     * outside `<Modal.Header>` — the header wires this automatically.
     */
    'aria-labelledby'?: string;
    /**
     * Override the dialog's describing element. Only needed when the description
     * lives outside `<Modal.Header>` — the header wires this automatically.
     */
    'aria-describedby'?: string;
    /**
     * Plain-text accessible name. Use when there's no visible title (icon-only
     * confirmation, etc.). Ignored when `aria-labelledby` is set.
     */
    'aria-label'?: string;
    /**
     * Element to focus on open. Tabbable index (`0` = first tabbable, `-1` = dialog
     * container) or a ref. Override the default to focus a "Cancel" button on
     * destructive prompts, or the first input on form-heavy modals.
     */
    initialFocus?: ComponentProps<typeof FloatingFocusManager>['initialFocus'];
    /**
     * Additional class name on the modal container.
     */
    className?: string;
}
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type TimeFieldBreakpointProps = {
    /**
     * If `true`, the field swaps the custom time-picker popover for the
     * browser's native time picker (`<input type="time">`). Works on both
     * mobile and desktop — useful when the consumer wants to skip the custom
     * UI entirely.
     * Note: When using the native picker, the `availableTimes` prop is ignored.
     * @default false
     */
    useNativePicker?: boolean;
    /**
     * Determines how the time picker is triggered:
     * - 'button' (default) – only clicking the icon opens the picker
     * - 'input' – clicking anywhere in the input opens the picker
     */
    timePickerTrigger?: 'input' | 'button';
    /**
     * Enables or disables the time picker popover.
     * @default true
     */
    showPicker?: boolean;
    /**
     * Variant of the available times:
     * - 'grid-buttons' – buttons grid
     * - 'grid-radio' – radio buttons grid
     * - 'dropdown' – dropdown list
     */
    availableTimesVariant?: 'grid-buttons' | 'grid-radio' | 'dropdown';
    /**
     * Whether the field shows a clear button to reset the value. Disable it
     * when the field is required or the value should not be cleared.
     * @default true
     */
    clearable?: boolean;
};
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,
  args: {
    label: 'Aeg',
    required: true,
    stepMinutes: 1,
  },
};
```

### Sizes

```tsx
export const Sizes: StoryObj<TemplateMultipleProps> = {
  render: TemplateColumn,

  args: {
    array: sizeArray,
    property: 'size',
  },
};
```

### States

```tsx
export const States: StoryObj<TimeFieldProps> = {
  render: () => (
    <div className="state-example">
      {stateArray.map((state) => (
        <Row key={state} className="padding-14-16">
          <Col width={2} className="flex align-items-center">
            <Text modifiers="bold">{state}</Text>
          </Col>
          <Col md={4} xs={12} className="flex align-items-center">
            <TimeField id={state} label="Aeg" inputProps={{ disabled: state === 'Disabled' }} />
          </Col>
        </Row>
      ))}
      <Row className="padding-14-16">
        <Col width={2} className="flex align-items-center">
          <Text modifiers="bold">Success</Text>
        </Col>
        <Col md={4} xs={12} className="flex align-items-center">
          <TimeField
            id="success-timefield"
            label="Aeg"
            inputProps={{ helper: { text: 'Vihjetekst', type: 'valid' } }}
          />
        </Col>
      </Row>
      <Row className="padding-14-16">
        <Col width={2} className="flex align-items-center">
          <Text modifiers="bold">Error</Text>
        </Col>
        <Col md={4} xs={12} className="flex align-items-center">
          <TimeField id="error-timefield" label="Aeg" inputProps={{ helper: { text: 'Vihjetekst', type: 'error' } }} />
        </Col>
      </Row>
    </div>
  ),
  parameters: {
    pseudo: {
      hover: '#Hover',
      focus: '#Focus',
      active: '#Active',
// …
```

### Field Options

```tsx
export const FieldOptions: StoryFn = () => {
  return (
    <Row>
      <Col lg={3} md={6}>
        <div className="flex gap-4 flex-column">
          <TimeField id="time-field-default" label="Aeg" />

          <TimeField id="time-field-with-hint" label="Aeg" inputProps={{ helper: { text: 'Vihjetekst' } }} />
        </div>
      </Col>
    </Row>
  );
};
```

### Value Type

```tsx
export const ValueType: StoryFn = () => {
  return (
    <Row>
      <Col lg={3} md={6}>
        <div className="flex gap-3 flex-column">
          <TimeField id="time-default" label="Aeg" />
          <TimeField id="time-with-placeholder" label="Aeg" placeholder="tt:mm" />
          <TimeField id="time-with-default-value" label="Aeg" defaultValue="13:00" />
        </div>
      </Col>
    </Row>
  );
};
```

### On Click Type

```tsx
export const OnClickType: Story = {
  render: () => {
    return (
      <VerticalSpacing>
        <Row>
          <Col lg={3} md={6}>
            <Text modifiers="small">Clock button is clickable</Text>
            <TimeField label="Aeg" id="time-button-trigger" timePickerTrigger="button" />
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={6}>
            <Text modifiers="small">Input is clickable</Text>
            <TimeField label="Aeg" id="time-input-trigger" timePickerTrigger="input" />
          </Col>
        </Row>
      </VerticalSpacing>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'timePickerTrigger prop allows you to open time picker either on input click or clock icon',
      },
    },
  },
};
```

Full story source: `src/tedi/components/form/time-field/time-field.stories.tsx`.

## Related

`Text`, `Col`, `Row`, `VerticalSpacing`
