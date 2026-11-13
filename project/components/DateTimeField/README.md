DateTimeField from @tedi-design-system/react. Use via `window.Tedi.DateTimeField` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Size, States, Field Options, Predefined Time Slots, No Times Available, Per Day Time Slots, Multi Steps, Range, Range Predefined Time Slots, Controlled, Date Constraints, Year Grid, Native.

## Props

```ts
import * as React from 'react';

/**
 * DateTimeField from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/form/date-time-field/date-time-field.stories.tsx).
 */
export interface DateTimeFieldProps {
  /** Unique identifier for the input field. */
  id: string;
  /** Field label. Required for accessibility. */
  label: string;
  /** Props forwarded to the field's label (e.g. `{ modifiers: 'nowrap' }` to control how a long label wraps). Breakpoint keys are supported for responsive wrapping. */
  labelProps?: TextFieldProps['labelProps'];
  /** Placeholder shown in the input when no value is selected. */
  placeholder?: string;
  /** Additional class on the container. */
  className?: string;
  /** Selection mode. - `'single'` (default) — one combined `Date` value. - `'range'` — pair of `from` / `to` `Date` values, each carrying their own time. Renders a 2-month calendar and two time pickers (one for `from`, one for `to`) stacked underneath. */
  mode?: DateTimeFieldMode;
  /** Controlled value. Type depends on `mode`: - `mode='single'` → `Date | undefined` - `mode='range'` → `DateTimeRange | undefined` (`{ from, to }`) */
  value?: DateTimeFieldValue;
  /** Initial value for uncontrolled usage. Ignored when `value` is provided. */
  defaultValue?: DateTimeFieldValue;
  /** Fires whenever the user picks a date or a time. The argument shape matches `mode`: `Date | undefined` for `'single'`, `DateTimeRange | undefined` for `'range'`. */
  onChange?: (value: DateTimeFieldValue | undefined) => void;
  /** Marks the field as required. */
  required?: boolean;
  /** When `true`, the input is read-only — typing is disabled, but the picker can still be opened. */
  readOnly?: boolean;
  /** Disables the input and the picker. */
  disabled?: boolean;
  /** Minimum selectable date. Dates before this are disabled in the calendar. */
  minDate?: Date;
  /** Maximum selectable date. Dates after this are disabled in the calendar. */
  maxDate?: Date;
  /** Disables every date strictly before today. */
  disablePast?: boolean;
  /** Disables every date strictly after today. */
  disableFuture?: boolean;
  /** Disable specific dates via react-day-picker matchers. Layered on top of the `minDate` / `maxDate` / `disablePast` / `disableFuture` shortcuts — use this for free-form matchers like "every Sunday" or "specific blacklisted dates". Mirrors the `disabledMatchers` prop on `DateField`. */
  disabledMatchers?: Matcher | Matcher[];
  /** Step interval (minutes) for the time-wheel picker. Ignored when `availableTimes` is set. */
  stepMinutes?: number;
  /** Initial month displayed when the calendar opens. Defaults to the month of the current value, or the current month if no value. */
  initialMonth?: Date;
  /** Locale object used by react-day-picker for the calendar grid. */
  locale?: Locale;
  /** Locale code used for the displayed date format. */
  localeCode?: string;
  /** Label of the "Select time" footer button under the calendar in the multi-step layout. Falls back to the localised `dateTimeField.selectTime` label. */
  selectTimeLabel?: string;
  /** Label of the "Back" link shown above the time picker in the multi-step layout. Falls back to the localised `dateTimeField.back` label. */
  backLabel?: string;
  /** Lowest calendar drill-down level the user can pick from before the value commits. `'days'` (default) requires drilling all the way down to a day; `'months'` commits as soon as a month is picked; `'years'` commits on year selection. Only meaningful when `monthYearSelectType='grid'`. */
  selectionLevel?: CalendarView;
  /** Earliest year offered in the calendar header's year dropdown. */
  minYear?: number;
  /** Latest year offered in the calendar header's year dropdown. */
  maxYear?: number;
  /** Forwarded to the underlying `TextField`. `id`, `label`, `value`, and `onChange` are owned by `DateTimeField`. */
  inputProps?: Omit<TextFieldProps, 'id' | 'label' | 'value' | 'onChange'>;
  /** Error message rendered below the input when the user types a date that fails the disable matchers (`disablePast`, `disableFuture`, `minDate`, `maxDate`, `disabledMatchers`). Falls back to the localised `dateField.disabledDateError` label. */
  disabledDateErrorMessage?: string;
  /** When `true`, renders an `<input type="datetime-local">` and skips the custom popover entirely — the browser's built-in date/time picker is shown when the calendar icon is clicked. Has no effect when `mode='range'` (native datetime-local has no range counterpart). */
  useNativePicker?: boolean;
  /** Whether the field shows a clear button to reset the value. Disable it when the field is required or the value should not be cleared. */
  clearable?: boolean;
  /** Layout of the date-and-time popover. `mode='range'` always uses `'side-by-side'` regardless of this value — the range UI needs the calendar and both `from` / `to` time pickers visible at once. */
  layout?: DateTimeFieldLayout;
  /** Predefined time slots, each in `"HH:mm"` format. When provided, the time step renders a grid of slots instead of the scroll-wheel picker. Accepts either: - a static array — the same slot list for every date, - or a function `(date: Date) => string[]` evaluated per render with the currently-selected date. Use the function form when slots depend on the picked date (e.g. clinic appointments where Tuesdays differ from Wednesdays). In `mode='range'` the function is called twice: once with `rangeValue.from` for the `from` time picker, once with `rangeValue.to` for the `to` time picker. When no date is picked yet the function is called with today's date as a fallback. Returning an empty array currently falls back to the wheel picker — if you need a dedicated "no times available" UX, render it from the consumer side via `onChange` / `value` state for now. */
  availableTimes?: string[] | ((date: Date) => string[]);
  /** Layout variant for the time grid when `availableTimes` is set. Defaults differ per layout: `'button'` for `side-by-side`, `'radio'` for `multi-step`. */
  timeGridVariant?: 'button' | 'radio';
  /** How the month/year selector in the calendar header is rendered. */
  monthYearSelectType?: 'dropdown' | 'grid';
  /** Show days from adjacent months in the calendar grid. */
  showOutsideDays?: boolean;
  /** Heading rendered above the time picker in the side-by-side layout. Falls back to the localised `dateTimeField.timeHeading` label. */
  timeHeading?: React.ReactNode;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<DateTimeFieldBreakpointProps>;
  md?: Partial<DateTimeFieldBreakpointProps>;
  lg?: Partial<DateTimeFieldBreakpointProps>;
  xl?: Partial<DateTimeFieldBreakpointProps>;
  xxl?: Partial<DateTimeFieldBreakpointProps>;
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
type DateTimeFieldMode = 'single' | 'range';
type DateTimeFieldValue = Date | DateTimeRange;
type CalendarView = 'days' | 'months' | 'years';
type DateTimeFieldLayout = 'side-by-side' | 'multi-step';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type DateTimeFieldBreakpointProps = {
    /**
     * When `true`, renders an `<input type="datetime-local">` and skips the
     * custom popover entirely — the browser's built-in date/time picker is
     * shown when the calendar icon is clicked. Has no effect when
     * `mode='range'` (native datetime-local has no range counterpart).
     * @default false
     */
    useNativePicker?: boolean;
    /**
     * Whether the field shows a clear button to reset the value. Disable it
     * when the field is required or the value should not be cleared.
     * @default true
     */
    clearable?: boolean;
    /**
     * Layout of the date-and-time popover. `mode='range'` always uses
     * `'side-by-side'` regardless of this value — the range UI needs the
     * calendar and both `from` / `to` time pickers visible at once.
     * @default side-by-side
     */
    layout?: DateTimeFieldLayout;
    /**
     * Predefined time slots, each in `"HH:mm"` format. When provided, the
     * time step renders a grid of slots instead of the scroll-wheel picker.
     *
     * Accepts either:
     * - a static array — the same slot list for every date,
     * - or a function `(date: Date) => string[]` evaluated per render with the
     *   currently-selected date. Use the function form when slots depend on
     *   the picked date (e.g. clinic appointments where Tuesdays differ from
     *   Wednesdays). In `mode='range'` the function is called twice: once
     *   with `rangeValue.from` for the `from` time picker, once with
     *   `rangeValue.to` for the `to` time picker. When no date is picked yet
     *   the function is called with today's date as a fallback.
     *
     * Returning an empty array currently falls back to the wheel picker —
     * if you need a dedicated "no times available" UX, render it from the
     * consumer side via `onChange` / `value` state for now.
     */
    availableTimes?: string[] | ((date: Date) => string[]);
    /**
     * Layout variant for the time grid when `availableTimes` is set.
     * Defaults differ per layout: `'button'` for `side-by-side`, `'radio'`
     * for `multi-step`.
     */
    timeGridVariant?: 'button' | 'radio';
    /**
     * How the month/year selector in the calendar header is rendered.
     * @default dropdown
     */
    monthYearSelectType?: 'dropdown' | 'grid';
    /**
     * Show days from adjacent months in the calendar grid.
     * @default true
     */
    showOutsideDays?: boolean;
    /**
     * Heading rendered above the time picker in the side-by-side layout.
     * Falls back to the localised `dateTimeField.timeHeading` label.
     */
    timeHeading?: React.ReactNode;
};
// From react-day-picker (see its documentation): Matcher, Locale.
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,
  args: {
    id: 'date-time-default',
    label: 'Kuupäev',
    placeholder: 'pp.kk.aaaa tt:mm',
    layout: 'side-by-side',
    stepMinutes: 1,
  },
};
```

### Size

```tsx
export const Size: StoryFn = () => (
  <div className="example-list">
    {sizeArray.map((size, idx) => (
      <Row key={size ?? 'default'} className={`${idx === sizeArray.length - 1 ? '' : 'border-bottom'} padding-14-16`}>
        <Col lg={2} xs={12}>
          <Text modifiers="bold">{size ? size.charAt(0).toUpperCase() + size.slice(1) : ''}</Text>
        </Col>
        <Col lg={10} xs={12} className="d-flex">
          <DateTimeField
            id={`date-time-size-${size}`}
            label="Kuupäev"
            placeholder="pp.kk.aaaa tt:mm"
            inputProps={{ size }}
          />
        </Col>
      </Row>
    ))}
  </div>
);
```

### States

```tsx
export const States: Story = {
  render: () => (
    <VerticalSpacing>
      {stateArray.map((state) => (
        <Row key={state}>
          <Col lg={2} xs={12} className="flex align-items-center gap-3">
            <Text modifiers="bold">{state}</Text>
          </Col>
          <Col>
            <DateTimeField id={state} label="Kuupäev ja kellaaeg" disabled={state === 'Disabled'} />
          </Col>
        </Row>
      ))}
      <Row>
        <Col lg={2} xs={12} className="flex align-items-center gap-3">
          <Text modifiers="bold">Success</Text>
        </Col>
        <Col>
          <DateTimeField
            id="success-datetimefield"
            label="Kuupäev ja kellaaeg"
            inputProps={{ helper: { text: 'Tagasiside tekst', type: 'valid' } }}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={2} xs={12} className="flex align-items-center gap-3">
          <Text modifiers="bold">Error</Text>
        </Col>
        <Col>
          <DateTimeField
            id="error-datetimefield"
            label="Kuupäev ja kellaaeg"
            inputProps={{ helper: { text: 'Tagasiside tekst', type: 'error' } }}
          />
        </Col>
      </Row>
    </VerticalSpacing>
  ),
  parameters: {
// …
```

### Field Options

```tsx
export const FieldOptions: StoryFn = () => {
  const [shortcutValue, setShortcutValue] = useState<Date | undefined>(undefined);

  const today = new Date();
  today.setHours(9, 0, 0, 0);

  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  tomorrow.setHours(9, 0, 0, 0);

  return (
    <Row>
      <Col lg={6} xs={12}>
        <div className="flex gap-4 flex-column">
          <DateTimeField id="date-time-options-default" label="Kuupäev ja kellaaeg" placeholder="pp.kk.aaaa tt:mm" />

          <DateTimeField
            id="date-time-options-hint"
            label="Kuupäev ja kellaaeg vihjega"
            placeholder="pp.kk.aaaa tt:mm"
            inputProps={{ helper: { text: 'pp.kk.aaaa tt:mm' } }}
          />

          <div>
            <DateTimeField
              id="date-time-options-shortcuts"
              label="Kuupäev ja kellaaeg kiirvalikutega"
              placeholder="pp.kk.aaaa tt:mm"
              value={shortcutValue}
              onChange={(v) => setShortcutValue(v instanceof Date ? v : undefined)}
            />
            <div className="flex gap-3" style={{ marginTop: '8px' }}>
              <Button visualType="link" size="small" onClick={() => setShortcutValue(today)}>
                Täna 9:00
              </Button>
              <Button visualType="link" size="small" onClick={() => setShortcutValue(tomorrow)}>
                Homme 9:00
              </Button>
            </div>
          </div>
// …
```

### Predefined Time Slots

```tsx
export const PredefinedTimeSlots: Story = {
  render: Template,
  args: {
    id: 'date-time-predefined',
    label: 'Kuupäev',
    placeholder: 'pp.kk.aaaa tt:mm',
    layout: 'side-by-side',
    availableTimes: ['09:30', '10:00', '11:30', '15:30', '18:30', '20:30'],
    timeGridVariant: 'button',
  },
};

/**
 * When `availableTimes` returns an empty array for the picked date,
 * `DateTimeField` falls back to the scroll-wheel picker — there's no
 * built-in "no times available" empty state inside the popover. Surface
 * that condition from the consumer side:
 *
 * - render a helper / error message on the field (shown below), and / or
 * - disable those days entirely via `disabledMatchers` so the user can't
 *   land on them in the first place.
 *
 * This example treats Mondays as closed: the field is pre-selected to a
 * Monday so the helper is visible, and the matcher greys Mondays out in
 * the calendar.
 */
```

### No Times Available

```tsx
export const NoTimesAvailable: StoryFn<DateTimeFieldProps> = (args) => {
  const upcomingMonday = (() => {
    const d = new Date();
    const daysUntilMonday = (8 - d.getDay()) % 7 || 7;
    d.setDate(d.getDate() + daysUntilMonday);
    d.setHours(10, 0, 0, 0);
    return d;
  })();

  const [value, setValue] = useState<Date | undefined>(upcomingMonday);

  const getSlots = (date: Date): string[] => {
    const day = date.getDay();
    if (day === 1) return [];
    if (day === 0) return ['10:00', '11:00', '12:00'];
    return ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];
  };

  const slotsForSelectedDate = value ? getSlots(value) : null;
  const noSlots = slotsForSelectedDate !== null && slotsForSelectedDate.length === 0;

  return (
    <Row>
      <Col lg={4} md={6} xs={12}>
        <DateTimeField
          {...args}
          value={value}
          onChange={(v) => setValue(v instanceof Date ? v : undefined)}
          availableTimes={getSlots}
          disabledMatchers={{ dayOfWeek: [1] }}
          inputProps={
            noSlots
              ? { helper: { text: 'Sellel päeval vastuvõtt puudub — esmaspäeviti suletud.', type: 'error' } }
              : undefined
          }
        />
      </Col>
    </Row>
  );
};
// …
```

Full story source: `src/tedi/components/form/date-time-field/date-time-field.stories.tsx`.

## Related

`Text`, `Col`, `Row`, `VerticalSpacing`
