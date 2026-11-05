import * as React from 'react';

/**
 * Calendar from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/calendar/calendar.stories.tsx).
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
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<CalendarBreakpointProps>;
  md?: Partial<CalendarBreakpointProps>;
  lg?: Partial<CalendarBreakpointProps>;
  xl?: Partial<CalendarBreakpointProps>;
  xxl?: Partial<CalendarBreakpointProps>;
}
// Also accepts 72 standard React / HTML attributes of its root element.

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
