import * as React from 'react';

/**
 * Calendar from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/content/calendar/calendar.stories.tsx).
 */
export interface CalendarProps {
  /** Current view of the calendar. Can be `'days'`, `'months'`, or `'years'`. Controls which calendar grid is displayed. */
  view?: CalendarView;
  /** **Selection granularity** — controls the level at which a click finalises the selection rather than drilling down to the next sub-grid: - `'years'` — clicking a year selects Jan 1 of that year and closes; the calendar starts on the year grid. - `'months'` — clicking a month selects the first day of that month; the calendar starts on the month grid. - `'days'` (default) — full day-level selection; the calendar starts on the day grid. Distinct from `view` / `setView`, which control the *currently visible* grid — those flip as the user navigates between year / month / day. `selectionLevel` is the lowest level the user can drill down to before a click commits the selection. */
  selectionLevel?: CalendarView;
  /** The month currently displayed in the calendar. Used to render the correct month grid. */
  currentMonth: Date;
  /** Callback to update the `currentMonth` when navigating months/years. */
  setCurrentMonth: (date: Date) => void;
  /** Callback to update the current `view` (days, months, years) when the user switches calendar levels. */
  setView?: (view: CalendarView) => void;
  /** Selection mode of the calendar. Can be `'single'`, `'multiple'`, or `'range'`. */
  mode?: DateFieldMode;
  /** The currently selected value(s). - Single mode: `Date | undefined` - Multiple mode: `Date[]` - Range mode: `DateRange` (object with `from` and optional `to`) */
  value: Date | Date[] | DateRange | undefined;
  /** Locale object for formatting and translating calendar labels (from `react-day-picker`). */
  locale?: Locale;
  /** The locale code string used for date formatting. Defaults to 'et-EE'. */
  localeCode?: string;
  /** Whether to display days from the previous and next months in the current month grid. Default is `true`. */
  showOutsideDays?: boolean;
  /** Array of `Matcher`s or functions to disable specific dates. Used to prevent selection of certain days. */
  disabledMatchers?: Matcher[];
  /** If `true`, a value must be selected before the calendar allows closing. */
  required?: boolean;
  /** Array of available dates or a function to dynamically mark dates as available. Highlights selectable days without disabling other days. */
  availableDays?: Date[] | ((date: Date) => boolean);
  /** Array of unavailable dates or a function to dynamically mark dates as unavailable. Used for styling and optionally disabling specific days. */
  unavailableDays?: Date[] | ((date: Date) => boolean);
  /** Optional footer element to render below the calendar grid, e.g., for action buttons. */
  footer?: React.ReactNode;
  /** How the month/year selector in the calendar header is rendered. Forwarded to the internal `CalendarHeader`. - `'dropdown'` (default) — each picker is a `<Select>` dropdown. - `'grid'` — each picker opens a full grid of options. - `'static'` — the month/year is a plain, non-clickable label; only the prev/next navigation buttons can change the month. Use to disable month/year selection. */
  monthYearSelectType?: 'dropdown' | 'grid' | 'static';
  /** Optional per-day status. Called for each rendered day; return a `{ type, label }` to overlay a `StatusIndicator` dot on that day (the `label` is folded into the day's `aria-label`), or `null` / `undefined` for no status. */
  dayStatus?: DayStatusFn;
  /** Earliest year offered in the calendar header's year dropdown. Forwarded to the internal `CalendarHeader`. */
  minYear?: number;
  /** Latest year offered in the calendar header's year dropdown. Forwarded to the internal `CalendarHeader`. */
  maxYear?: number;
  /** Callback fired when a date or date range is selected. Receives the selected value, day, modifiers, and event. */
  handleSelect: OnSelectHandler<Date | Date[] | DateRange | undefined>;
  /** Callback to apply a selected date from month/year selection or programmatically. */
  applyValue: (date: Date) => void;
  /** Show or hide previous/next navigation buttons in calendar header. Default is `true`. */
  showNavigation?: boolean;
  /** Optional additional CSS class for the calendar container. */
  className?: string;
  /** Whether to render the surrounding card (border, background, radius). Set to `false` when embedding inside a parent that already provides its own surface — e.g. inside `DatePickerModal`, or alongside a calendar in `DateTimeField`. The inner gradient masks and column separators are preserved either way. */
  bordered?: boolean;
  /** Grow to fill the container's width instead of a fixed width; cells keep a square aspect ratio. Wrap in a sized container to control the scale. */
  fullWidth?: boolean;
  /** A unique id to add to the root element. */
  id?: string;
  /** Add modifiers to the matching days. */
  modifiers?: Record<string, Matcher | Matcher[] | undefined> | undefined;
  /** Apply the `disabled` modifier to the matching days. Disabled days cannot be selected when in a selection mode is set. */
  disabled?: Matcher | Matcher[] | undefined;
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
  /** The number of displayed months. */
  numberOfMonths?: number;
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
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<CalendarBreakpointProps>;
  md?: Partial<CalendarBreakpointProps>;
  lg?: Partial<CalendarBreakpointProps>;
  xl?: Partial<CalendarBreakpointProps>;
  xxl?: Partial<CalendarBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type CalendarView = 'days' | 'months' | 'years';
type DateFieldMode = 'single' | 'multiple' | 'range';
type DayStatusFn = (date: Date) => DayStatus | null | undefined;
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface CalendarBreakpointProps extends Omit<DayPickerProps, 'mode' | 'selected' | 'onSelect'> {
    /**
     * Current view of the calendar. Can be `'days'`, `'months'`, or `'years'`.
     * Controls which calendar grid is displayed.
     */
    view?: CalendarView;
    /**
     * **Selection granularity** — controls the level at which a click finalises
     * the selection rather than drilling down to the next sub-grid:
     * - `'years'` — clicking a year selects Jan 1 of that year and closes; the
     *   calendar starts on the year grid.
     * - `'months'` — clicking a month selects the first day of that month; the
     *   calendar starts on the month grid.
     * - `'days'` (default) — full day-level selection; the calendar starts on
     *   the day grid.
     *
     * Distinct from `view` / `setView`, which control the *currently visible*
     * grid — those flip as the user navigates between year / month / day.
     * `selectionLevel` is the lowest level the user can drill down to before
     * a click commits the selection.
     * @default days
     */
    selectionLevel?: CalendarView;
    /**
     * The month currently displayed in the calendar. Used to render the correct month grid.
     */
    currentMonth: Date;
    /**
     * Callback to update the `currentMonth` when navigating months/years.
     */
    setCurrentMonth: (date: Date) => void;
    /**
     * Callback to update the current `view` (days, months, years) when the user switches calendar levels.
     */
    setView?: (view: CalendarView) => void;
    /**
     * Selection mode of the calendar. Can be `'single'`, `'multiple'`, or `'range'`.
     */
    mode?: DateFieldMode;
    /**
     * The currently selected value(s).
     * - Single mode: `Date | undefined`
     * - Multiple mode: `Date[]`
     * - Range mode: `DateRange` (object with `from` and optional `to`)
     */
    value: Date | Date[] | DateRange | undefined;
    /**
     * Locale object for formatting and translating calendar labels (from `react-day-picker`).
     */
    locale?: Locale;
    /**
     * The locale code string used for date formatting. Defaults to 'et-EE'.
     */
    localeCode?: string;
    /**
     * Whether to display days from the previous and next months in the current month grid.
     * Default is `true`.
     */
    showOutsideDays?: boolean;
    /**
     * Array of `Matcher`s or functions to disable specific dates. Used to prevent selection of certain days.
     */
    disabledMatchers?: Matcher[];
    /**
     * If `true`, a value must be selected before the calendar allows closing.
     */
    required?: boolean;
    /**
     * Array of available dates or a function to dynamically mark dates as available.
     * Highlights selectable days without disabling other days.
     */
    availableDays?: Date[] | ((date: Date) => boolean);
    /**
     * Array of unavailable dates or a function to dynamically mark dates as unavailable.
     * Used for styling and optionally disabling specific days.
     */
    unavailableDays?: Date[] | ((date: Date) => boolean);
    /**
     * Optional footer element to render below the calendar grid, e.g., for action buttons.
     */
    footer?: React.ReactNode;
    /**
     * How the month/year selector in the calendar header is rendered.
     * Forwarded to the internal `CalendarHeader`.
     * - `'dropdown'` (default) — each picker is a `<Select>` dropdown.
     * - `'grid'` — each picker opens a full grid of options.
     * - `'static'` — the month/year is a plain, non-clickable label; only the
     *   prev/next navigation buttons can change the month. Use to disable
     *   month/year selection.
     * @default dropdown
     */
    monthYearSelectType?: 'dropdown' | 'grid' | 'static';
    /**
     * Optional per-day status. Called for each rendered day; return a
     * `{ type, label }` to overlay a `StatusIndicator` dot on that day (the
     * `label` is folded into the day's `aria-label`), or `null` / `undefined` for
     * no status.
     */
    dayStatus?: DayStatusFn;
    /**
     * Earliest year offered in the calendar header's year dropdown.
     * Forwarded to the internal `CalendarHeader`.
     * @default currentYear - 100
     */
    minYear?: number;
    /**
     * Latest year offered in the calendar header's year dropdown.
     * Forwarded to the internal `CalendarHeader`.
     * @default currentYear + 20
     */
    maxYear?: number;
    /**
     * Callback fired when a date or date range is selected. Receives the selected value, day, modifiers, and event.
     */
    handleSelect: OnSelectHandler<Date | Date[] | DateRange | undefined>;
    /**
     * Callback to apply a selected date from month/year selection or programmatically.
     */
    applyValue: (date: Date) => void;
    /**
     * Show or hide previous/next navigation buttons in calendar header.
     * Default is `true`.
     */
    showNavigation?: boolean;
    /**
     * Optional additional CSS class for the calendar container.
     */
    className?: string;
    /**
     * Whether to render the surrounding card (border, background, radius).
     * Set to `false` when embedding inside a parent that already provides its
     * own surface — e.g. inside `DatePickerModal`, or alongside a calendar in
     * `DateTimeField`. The inner gradient masks and column separators are
     * preserved either way.
     * @default true
     */
    bordered?: boolean;
    /**
     * Grow to fill the container's width instead of a fixed width; cells keep a
     * square aspect ratio. Wrap in a sized container to control the scale.
     * @default false
     */
    fullWidth?: boolean;
}
// From react-day-picker (see its documentation): DateRange, Locale, Matcher, OnSelectHandler, ClassNames, DeprecatedUI, ModifiersClassNames, Styles, ModifiersStyles, CustomComponents, Labels, Formatters, Numerals, MonthChangeEventHandler, DayEventHandler, DateLib.
