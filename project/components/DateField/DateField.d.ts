import * as React from 'react';

/**
 * DateField from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/form/date-field/date-field.stories.tsx).
 */
export interface DateFieldProps {
  /** Unique identifier for the date field. */
  id: string;
  /** Field label. Required for accessibility. */
  label: string;
  /** Props forwarded to the field's label (e.g. `{ modifiers: 'nowrap' }` to control how a long label wraps). Breakpoint keys are supported for responsive wrapping. */
  labelProps?: TextFieldProps['labelProps'];
  /** Determines the selection mode of the calendar. - `'single'` (default) – only one date can be selected. The `selected` prop should be a `Date` object or `undefined`. - `'multiple'` – multiple individual dates can be selected. The `selected` prop should be an array of `Date` objects. - `'range'` – a continuous date range can be selected. The `selected` prop should be an object with `from` and optional `to` properties, both being `Date` objects. */
  mode?: DateFieldMode;
  /** The currently selected date(s). The expected type depends on the `mode`: - For `mode="single"`, this should be a `Date` object or `undefined`. - For `mode="multiple"`, this should be an array of `Date` objects. - For `mode="range"`, this should be an object with a `from` property (a `Date` object) and an optional `to` property (also a `Date` object). */
  selected?: Date | Date[] | DateRange | undefined;
  /** Callback fired when the user selects a date or date range. The exact parameters depend on the `mode`: - For `mode="single"`, the callback receives the selected `Date` object (or `undefined` if cleared). - For `mode="multiple"`, the callback receives an array of selected `Date` objects. - For `mode="range"`, the callback receives an object with `from` and optional `to` properties, both being `Date` objects (or `undefined` if cleared). */
  onSelect?: OnSelectHandler<Date | Date[] | DateRange | undefined>;
  /** Disable specific dates. Accepts the same matchers as React DayPicker's `disabled` prop. */
  disabled?: Matcher | Matcher[];
  /** Disable specific dates via react-day-picker matchers. Mirrors the `disabledMatchers` prop on `DateTimeField` so the API is consistent across the date-field family. Merges with the (deprecated) `disabled` overload — if both are supplied, the union of both matcher sets is applied. */
  disabledMatchers?: Matcher | Matcher[];
  /** Input placeholder text when no date is selected. */
  placeholder?: string;
  /** Additional class name(s) to apply to the component container. */
  className?: string;
  /** Custom date formatting function. Receives the selected date(s) and should return a string for display in the input field. If not provided, a default formatter will be used that formats dates as "dd.MM.yyyy" in the "et-EE" locale. */
  formatDate?: (date: Date | Date[] | DateRange | undefined) => string;
  /** Show days from adjacent months in the calendar view. Default is `true`. */
  showOutsideDays?: boolean;
  /** Custom date parsing function for user input. Receives the input string and should return a `Date`, an array of `Date`s, a `DateRange`, or `undefined` if the input is invalid or cleared. If not provided, `mode="single"` falls back to a built-in `dd.MM.yyyy` parser and stays typeable. `mode="multiple"` and `mode="range"` cannot be parsed automatically, so their input is read-only and dates are selected via the calendar only. */
  parseDate?: (value: string) => Date | Date[] | DateRange | undefined;
  /** Initial month to display when the calendar is opened. If not provided, defaults to the month of the currently selected date or the current month if no date is selected. */
  initialMonth?: Date;
  /** When `true`, the date field is marked as required, and the calendar will enforce that a date is selected before allowing the user to close it. Default is `false`. */
  required?: boolean;
  /** How the month/year selector in the calendar header is rendered. Forwarded to the internal `Calendar` / `CalendarHeader`. - `'dropdown'` (default) — each picker is a `<Select>` dropdown. - `'grid'` — each picker opens a full grid of options. - `'static'` — the month/year is a plain, non-clickable label; only the prev/next navigation buttons can change the month (disables month/year selection). */
  monthYearSelectType?: 'dropdown' | 'grid' | 'static';
  /** Optional per-day status forwarded to the calendar. Return a `{ type, label }` to overlay a `StatusIndicator` dot on that day (the `label` is folded into the day's `aria-label`), or `null` / `undefined` for no status. */
  dayStatus?: DayStatusFn;
  /** Earliest year offered in the calendar header's year dropdown. */
  minYear?: number;
  /** Latest year offered in the calendar header's year dropdown. */
  maxYear?: number;
  /** Show or hide the calendar header's previous/next navigation. When hidden, the month/year header also becomes a static, non-interactive label (no dropdown / grid jumping) — so the calendar is locked to the visible month(s): a clean "pick from these" view for a fixed month or range. */
  showNavigation?: boolean;
  /** **Selection granularity** — controls the level at which a click finalises the date selection rather than drilling further into days. Use a coarser level when the consumer only needs to pick a year or a month. - `'years'` — clicking a year selects Jan 1 of that year and closes; the calendar opens on the year grid. - `'months'` — clicking a month selects the first day of that month; the calendar opens on the month grid. - `'days'` (default) — full day-level selection; the calendar opens on the day grid as usual. Distinct from the *currently visible* grid — that's managed internally and flips as the user navigates between year / month / day. This prop is the lowest level the user can drill down to before a click commits. */
  selectionLevel?: CalendarView;
  /** **Initial grid** the calendar opens on, independent of `selectionLevel`. Use it to start the user on the year / month grid for fast year-first navigation while still letting them drill down and commit at the `selectionLevel` (e.g. `initialView="years"` with the default `selectionLevel="days"` opens the year grid → month grid → day grid). Pair with `monthYearSelectType="grid"` so the navigation stays grid-based. */
  initialView?: CalendarView;
  /** The locale object for the calendar, used by React DayPicker. Defaults to Estonian locale. */
  locale?: Locale;
  /** The locale code string used for date formatting. Defaults to 'et-EE'. */
  localeCode?: string;
  /** When `true`, the calendar popover will automatically close after a date is selected. Default behavior is to close on select only in 'single' mode. You can override this behavior by explicitly setting this prop to `true` or `false`. */
  closeOnSelect?: boolean;
  /** Custom footer content to display at the bottom of the calendar popover. Can be used to add action buttons or additional information. The footer will be rendered inside the calendar popover, below the calendar grid. */
  footer?: React.ReactNode;
  /** Initial value for uncontrolled usage */
  defaultValue?: Date | Date[] | DateRange;
  /** Minimum selectable date. Dates before this will be disabled. If you want to disable past dates, you can also use the `disablePast` boolean prop. */
  minDate?: Date;
  /** Maximum selectable date. Dates after this will be disabled. If you want to disable future dates, you can also use the `disableFuture` boolean prop. */
  maxDate?: Date;
  /** Disable all past dates. Dates before the current date will be disabled. */
  disablePast?: boolean;
  /** Disable all future dates. Dates after the current date will be disabled. */
  disableFuture?: boolean;
  /** Disable specific months dynamically. Receives a month `Date` object and should return `true` if that month should be disabled. */
  shouldDisableMonth?: (month: Date) => boolean;
  /** Disable specific years dynamically. Receives a year `Date` object and should return `true` if that year should be disabled. */
  shouldDisableYear?: (year: Date) => boolean;
  /** When `true`, the input field will be read-only, preventing manual text input. The calendar can still be opened and used for date selection. This is useful when you want to allow date selection only through the calendar picker and not allow users to type in dates manually. */
  readOnly?: boolean;
  /** Specify available days. Can be an array of `Date` objects or a function that receives a date and returns `true` if that date is available. This is useful for highlighting specific dates as available while keeping other dates enabled. */
  availableDays?: Date[] | ((date: Date) => boolean);
  /** Props to pass down to the underlying TextField (in 'single' mode) or MultiValueField (in 'multiple' mode). This allows for additional customization of the input field, such as adding custom styles, attributes, or event handlers. */
  inputProps?: DateTextFieldProps | DateMultiValueFieldProps;
  /** Layout for the selected-date tags in `'multiple'` mode. - `'stack'` (default) — tags wrap onto multiple rows; the field grows in height. - `'row'` — tags stay on a single row; any that don't fit collapse into a `+N` counter (measured from the available width). */
  tagsDirection?: 'stack' | 'row';
  /** Open the calendar inside a modal instead of a floating popover. Useful on narrow viewports where a popover overlaps the input itself. Mirrors `TimeField`'s `modal` prop. - `true` always opens in a modal - `false` (default) always uses the popover - A breakpoint name (e.g. `'md'`) opens in a modal *below* that breakpoint and falls back to the popover from that breakpoint up Ignored when `useNativePicker` resolves to `true` (the native picker is already handled by the OS). */
  modal?: DateFieldModal;
  /** Extra props forwarded to the calendar modal's `Modal.Content` — e.g. `size`, `width`, `maxWidth`, `position`, `fullscreen`, and per-breakpoint overrides. Lets the consumer tune the modal beyond its responsive-width defaults. `className` is merged with the component's own (so the internal layout is preserved). Only applies when the calendar opens as a modal. */
  modalProps?: Omit<ModalContentProps, 'children'>;
  /** Heading shown at the top of the calendar modal. Falls back to the `date-field.modal-title` label. Handy for month/year-only pickers (e.g. `"Vali kuu"` / `"Vali aasta"`). Only applies when the calendar opens as a modal. */
  modalTitle?: string;
  /** Error message rendered below the input when the user types a date that matches one of the disable matchers (`disablePast`, `disableFuture`, `minDate`, `maxDate`, `disabledMatchers`, or the deprecated `disabled` overload). Falls back to the localised `dateField.disabledDateError` label. */
  disabledDateErrorMessage?: string;
  /** Error message rendered below the input when the typed text cannot be parsed into a valid date for the current `mode`. Validation runs on blur so partially-typed input isn't flagged mid-typing. Falls back to the localised `dateField.invalidDateError` label. */
  invalidDateErrorMessage?: string;
  /** Whether the calendar popover is interactive. */
  enableCalendar?: boolean;
  /** What opens the calendar — only the icon (`'button'`) or anywhere in the input (`'input'`). */
  calendarTrigger?: DateFieldCalendarTrigger;
  /** Swap the custom calendar for the browser's native `<input type="date">`. Only applies to `mode='single'`. */
  useNativePicker?: boolean;
  /** Number of months shown side-by-side. In the **popover** on mobile (`< md`) values > 1 are clamped to 1 — a multi-month popover gets unscrollable on a phone viewport. In a **modal** the count is kept: the months wrap to a vertical stack and the modal body scrolls. */
  numberOfMonths?: number;
  /** Whether the field shows a clear button to reset the value. Disable it when the field is required or the value should not be cleared. */
  clearable?: boolean;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<DateFieldBreakpointProps>;
  md?: Partial<DateFieldBreakpointProps>;
  lg?: Partial<DateFieldBreakpointProps>;
  xl?: Partial<DateFieldBreakpointProps>;
  xxl?: Partial<DateFieldBreakpointProps>;
  /** Add modifiers to the matching days. */
  modifiers?: Record<string, Matcher | Matcher[] | undefined> | undefined;
  /** Style to apply to the root element. */
  style?: React.CSSProperties;
  /** Add a `title` attribute to the container element. */
  title?: HTMLDivElement["title"];
  /** Animate navigating between months. */
  animate?: boolean;
  /** When a selection mode is set, DayPicker will focus the first selected day (if set) or today's date (if not disabled). Use this prop when you need to focus DayPicker after a user action, for improved accessibility. */
  autoFocus?: boolean;
  /** The text direction of the calendar. Use `ltr` for left-to-right (default) or `rtl` for right-to-left. */
  dir?: HTMLDivElement["dir"];
  /** Apply the `hidden` modifier to the matching days. Will hide them from the calendar. */
  hidden?: Matcher | Matcher[] | undefined;
  /** Add the language tag to the container element. When omitted, DayPicker uses the active locale code (`locale.code`). Set this prop to override the language tag. */
  lang?: HTMLDivElement["lang"];
  /** A cryptographic nonce ("number used once") which can be used by Content Security Policy for the inline `style` attributes. */
  nonce?: HTMLDivElement["nonce"];
  /** The role attribute to add to the container element. */
  role?: "application" | "dialog" | undefined;
  /** The aria-label attribute to add to the container element. */
  "aria-label"?: string;
  /** The aria-labelledby attribute to add to the container element. */
  "aria-labelledby"?: string;
  /** Change the class names used by DayPicker. Use this prop when you need to change the default class names — for example, when importing the style via CSS modules or when using a CSS framework. */
  classNames?: Partial<ClassNames> & Partial<DeprecatedUI<string>>;
  /** Change the class name for the day matching the `modifiers`. */
  modifiersClassNames?: ModifiersClassNames;
  /** Change the inline styles of the HTML elements. */
  styles?: Partial<Styles> & Partial<DeprecatedUI<React.CSSProperties>>;
  /** Change the class name for the day matching the {@link modifiers}. */
  modifiersStyles?: ModifiersStyles;
  /** The initial month to show in the calendar. Use this prop to let DayPicker control the current month. If you need to set the month programmatically, use {@link month} and {@link onMonthChange}. */
  defaultMonth?: Date;
  /** The month displayed in the calendar. As opposed to `defaultMonth`, use this prop with `onMonthChange` to change the month programmatically. */
  month?: Date;
  /** The earliest month to start the month navigation. */
  startMonth?: Date | undefined;
  fromDate?: Date | undefined;
  fromMonth?: Date | undefined;
  fromYear?: number | undefined;
  /** The latest month to end the month navigation. */
  endMonth?: Date;
  toDate?: Date;
  toMonth?: Date;
  toYear?: number;
  /** Paginate the month navigation displaying the `numberOfMonths` at a time. */
  pagedNavigation?: boolean;
  /** Render the months in reversed order (when {@link numberOfMonths} is set) to display the most recent month first. */
  reverseMonths?: boolean;
  /** Hide the navigation buttons. This prop won't disable the navigation: to disable the navigation, use {@link disableNavigation}. */
  hideNavigation?: boolean;
  /** Disable the navigation between months. This prop won't hide the navigation: to hide the navigation, use {@link hideNavigation}. */
  disableNavigation?: boolean;
  /** Show dropdowns to navigate between months or years. - `label`: Displays the month and year as a label. Default value. - `dropdown`: Displays dropdowns for both month and year navigation. - `dropdown-months`: Displays a dropdown only for the month navigation. - `dropdown-years`: Displays a dropdown only for the year navigation. **Note:** By default, showing the dropdown will set the {@link startMonth} to 100 years ago and {@link endMonth} to the end of the current year. You can override this behavior by explicitly setting `startMonth` and `endMonth`. */
  captionLayout?: "label" | "dropdown" | "dropdown-months" | "dropdown-years";
  /** Reverse the order of years in the dropdown when using `captionLayout="dropdown"` or `captionLayout="dropdown-years"`. */
  reverseYears?: boolean;
  /** Adjust the positioning of the navigation buttons. - `around`: Displays the buttons on either side of the caption. - `after`: Displays the buttons after the caption. This ensures the tab order matches the visual order. If not set, the buttons default to being displayed after the caption, but the tab order may not align with the visual order. */
  navLayout?: "around" | "after" | undefined;
  /** Display always 6 weeks per each month, regardless of the month’s number of weeks. Weeks will be filled with the days from the next month. */
  fixedWeeks?: boolean;
  /** Hide the row displaying the weekday row header. */
  hideWeekdays?: boolean;
  /** Show the week numbers column. Weeks are numbered according to the local week index. */
  showWeekNumber?: boolean;
  /** Display the weeks in the month following the broadcast calendar. Setting this prop will ignore {@link weekStartsOn} (always Monday) and {@link showOutsideDays} will default to true. */
  broadcastCalendar?: boolean;
  /** Use ISO week dates instead of the locale setting. Setting this prop will ignore `weekStartsOn` and `firstWeekContainsDate`. */
  ISOWeek?: boolean;
  /** The time zone (IANA or UTC offset) to use in the calendar (experimental). See [Wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) for the possible values. */
  timeZone?: string | undefined;
  /** Keep calendar math at noon in the configured {@link timeZone} to avoid historical second-level offsets drifting dates across midnight. This prop sets the time of the dates to noon (12:00). */
  noonSafe?: boolean | undefined;
  /** Change the components used for rendering the calendar elements. */
  components?: Partial<CustomComponents>;
  initialFocus?: boolean;
  /** The today’s date. Default is the current date. This date will get the `today` modifier to style the day. */
  today?: Date;
  /** Labels creators to override the defaults. Use this prop to customize the aria-label attributes in DayPicker. */
  labels?: Partial<Labels>;
  /** Formatters used to format dates to strings. Use this prop to override the default functions. */
  formatters?: Partial<Formatters>;
  /** The numeral system to use when formatting dates. - `latn`: Latin (Western Arabic) - `arab`: Arabic-Indic - `arabext`: Eastern Arabic-Indic (Persian) - `deva`: Devanagari - `beng`: Bengali - `guru`: Gurmukhi - `gujr`: Gujarati - `orya`: Oriya - `tamldec`: Tamil - `telu`: Telugu - `knda`: Kannada - `mlym`: Malayalam */
  numerals?: Numerals | undefined;
  /** The index of the first day of the week (0 - Sunday). Overrides the locale's default. */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  /** The day of January that is always in the first week of the year. */
  firstWeekContainsDate?: 1 | 4;
  /** Enable `DD` and `DDDD` for week year tokens when formatting or parsing dates. */
  useAdditionalWeekYearTokens?: boolean | undefined;
  /** Enable `YY` and `YYYY` for day of year tokens when formatting or parsing dates. */
  useAdditionalDayOfYearTokens?: boolean | undefined;
  /** Event fired when the user navigates between months. */
  onMonthChange?: MonthChangeEventHandler;
  /** Event handler when the next month button is clicked. */
  onNextClick?: MonthChangeEventHandler;
  /** Event handler when the previous month button is clicked. */
  onPrevClick?: MonthChangeEventHandler;
  /** Event handler when a week number is clicked. */
  onWeekNumberClick?: any;
  /** Event handler when a day is clicked. */
  onDayClick?: DayEventHandler<React.MouseEvent>;
  /** Event handler when a day is focused. */
  onDayFocus?: DayEventHandler<React.FocusEvent>;
  /** Event handler when a day is blurred. */
  onDayBlur?: DayEventHandler<React.FocusEvent>;
  /** Event handler when a key is pressed on a day. */
  onDayKeyDown?: DayEventHandler<React.KeyboardEvent>;
  /** Event handler when the mouse enters a day. */
  onDayMouseEnter?: DayEventHandler<React.MouseEvent>;
  /** Event handler when the mouse leaves a day. */
  onDayMouseLeave?: DayEventHandler<React.MouseEvent>;
  /** Replace the default date library with a custom one. Experimental: not guaranteed to be stable (may not respect semver). */
  dateLib?: Partial<typeof DateLib.prototype> | undefined;
  onDayKeyUp?: DayEventHandler<React.KeyboardEvent>;
  onDayKeyPress?: DayEventHandler<React.KeyboardEvent>;
  onDayPointerEnter?: DayEventHandler<React.PointerEvent>;
  onDayPointerLeave?: DayEventHandler<React.PointerEvent>;
  onDayTouchCancel?: DayEventHandler<React.TouchEvent>;
  onDayTouchEnd?: DayEventHandler<React.TouchEvent>;
  onDayTouchMove?: DayEventHandler<React.TouchEvent>;
  onDayTouchStart?: DayEventHandler<React.TouchEvent>;
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
type DateFieldMode = 'single' | 'multiple' | 'range';
type DayStatusFn = (date: Date) => DayStatus | null | undefined;
type CalendarView = 'days' | 'months' | 'years';
type DateTextFieldProps = Omit<TextFieldProps, 'label' | 'id'>;
type DateMultiValueFieldProps = Omit<MultiValueFieldProps, 'label' | 'id'>;
type DateFieldModal = boolean | Exclude<Breakpoint, 'xs'>;
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
type DateFieldCalendarTrigger = 'input' | 'button';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type DateFieldBreakpointProps = {
    /**
     * Whether the calendar popover is interactive.
     * @default true
     */
    enableCalendar?: boolean;
    /**
     * What opens the calendar — only the icon (`'button'`) or anywhere in the input (`'input'`).
     * @default button
     */
    calendarTrigger?: DateFieldCalendarTrigger;
    /**
     * Swap the custom calendar for the browser's native `<input type="date">`.
     * Only applies to `mode='single'`.
     * @default false
     */
    useNativePicker?: boolean;
    /**
     * Number of months shown side-by-side. In the **popover** on mobile (`< md`) values > 1 are
     * clamped to 1 — a multi-month popover gets unscrollable on a phone viewport. In a **modal** the
     * count is kept: the months wrap to a vertical stack and the modal body scrolls.
     */
    numberOfMonths?: number;
    /**
     * Whether the field shows a clear button to reset the value. Disable it
     * when the field is required or the value should not be cleared.
     * @default true
     */
    clearable?: boolean;
};
// From react-day-picker (see its documentation): DateRange, OnSelectHandler, Matcher, Locale, ClassNames, DeprecatedUI, ModifiersClassNames, Styles, ModifiersStyles, CustomComponents, Labels, Formatters, Numerals, MonthChangeEventHandler, DayEventHandler, DateLib.
