Search from @tedi-design-system/react. Use via `window.Tedi.Search` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Sizes, States, Placeholder, Clearable, Clearable With Button, With Hint, With Result And Actions, Accessibility Focused, Autocomplete, Autocomplete Custom Row, Autocomplete Async, Autocomplete Disabled Suggestions, Autocomplete Free Text, Autocomplete With Footer, Autocomplete Hide On Scroll.

## Props

```ts
import * as React from 'react';

/**
 * Search from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/form/search/search.stories.tsx).
 */
export interface SearchProps {
  /** Callback triggered when the search is executed (Enter key pressed or button clicked). In autocomplete mode it fires on Enter only when no suggestion is active — a free-text submit. */
  onSearch?: (value: string) => void;
  /** Custom icon for the search input. */
  searchIcon?: string | IconWithoutBackgroundProps;
  /** Optional button properties. */
  button?: Partial<ButtonProps>;
  /** For accessibility: search field name (accessible name). Recommended to always set. E.g., "Search products" or "Search site". */
  ariaLabel?: string;
  /** Suggestions rendered in the popup. Providing this array (even empty) turns the field into an accessible combobox; leave it `undefined` for a plain search field. Filter / fetch these yourself in response to `onChange`; the component renders exactly what it is given. */
  suggestions?: SearchSuggestion[];
  /** Fired when a suggestion is chosen (Enter on the active suggestion, or click). In controlled mode update `value` from here to reflect the picked label. */
  onSuggestionSelect?: (suggestion: SearchSuggestion) => void;
  /** Shows a loading row in the popup instead of suggestions — use while an async request is in flight. */
  loading?: boolean;
  /** Minimum query length (after trimming) before the popup opens. */
  minQueryLength?: number;
  /** Closes the suggestion popup when the page (or a scrollable ancestor) scrolls. Scrolling the suggestion list itself keeps the popup open. */
  hideOnScroll?: boolean;
  /** Custom suggestion renderer. Receives the suggestion plus its active state and the current query (handy for match highlighting). */
  renderSuggestionContent?: (suggestion: SearchSuggestion, state: { active: boolean; query: string; }) => React.ReactNode;
  /** Derives the input text to show after a suggestion is picked (uncontrolled mode). Defaults to the suggestion's string label, falling back to its `value`. */
  getSuggestionText?: (suggestion: SearchSuggestion) => string;
  /** Text shown when there are no suggestions and it is not loading. Defaults to the localized `search.no-results` label. */
  noResultsText?: React.ReactNode;
  /** Text shown in the loading row. Defaults to the localized `search.loading` label. */
  loadingText?: React.ReactNode;
  /** Builds the politely announced live-region message stating how many suggestions are available. Defaults to the localized `search.results-count` label. */
  resultsCountText?: (count: number) => string;
  /** Extra content pinned below the suggestions — fallback actions or a hint, for example. It shows whenever the popup is open, including the no-results state. `Tab` from the field moves focus into the footer's controls. */
  footer?: React.ReactNode;
  /** Additional native attributes for the input element (e.g. `autoComplete`, `maxLength`). Narrowed to input attributes — a search field is always a single-line `<input>`. */
  input?: React.InputHTMLAttributes<HTMLInputElement>;
  sm?: Partial<{ size?: "default" | "small" | "large"; icon?: string | IconWithoutBackgroundProps; isTextArea?: boolean; placeholder?: string; isClearable?: boolean; showClearOnInteraction?: boolean; className?: string; }>;
  md?: Partial<{ size?: "default" | "small" | "large"; icon?: string | IconWithoutBackgroundProps; isTextArea?: boolean; placeholder?: string; isClearable?: boolean; showClearOnInteraction?: boolean; className?: string; }>;
  lg?: Partial<{ size?: "default" | "small" | "large"; icon?: string | IconWithoutBackgroundProps; isTextArea?: boolean; placeholder?: string; isClearable?: boolean; showClearOnInteraction?: boolean; className?: string; }>;
  xl?: Partial<{ size?: "default" | "small" | "large"; icon?: string | IconWithoutBackgroundProps; isTextArea?: boolean; placeholder?: string; isClearable?: boolean; showClearOnInteraction?: boolean; className?: string; }>;
  xxl?: Partial<{ size?: "default" | "small" | "large"; icon?: string | IconWithoutBackgroundProps; isTextArea?: boolean; placeholder?: string; isClearable?: boolean; showClearOnInteraction?: boolean; className?: string; }>;
  /** Unique identifier for the text field. Required for accessibility (associates label, helper text, and input). Also used to generate `aria-describedby` and helper IDs automatically. */
  id?: string;
  /** Additional CSS class name applied to the root container (`<div>`). Use this for layout adjustments, custom spacing, or theming the entire text field wrapper. */
  className?: string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  /** The text or React node that serves as the label for the text field. If `hideLabel` is `true`, the label will be visually hidden but still accessible to screen readers. If `hideLabel` is `'keep-space'`, the label will be hidden but the space it occupies will be preserved. */
  label?: React.ReactNode;
  /** Disables the entire text field. When `true`: - Input becomes non-editable and non-focusable - Clear button is hidden and icon is disabled - Visual disabled styles are applied */
  disabled?: boolean;
  /** Controls the visual size of the text field. - `'small'` → Compact version (smaller height, padding, and font size) - `'default'` → Standard size (most commonly used) - `'large'` → Larger touch target, bigger text and padding */
  size?: 'default' | 'small' | 'large';
  /** Name attribute for the underlying input/textarea element. Important for form submission and integration with form libraries (React Hook Form, Formik, etc.). */
  name?: string;
  /** Controlled value of the text field. When provided, the component becomes **fully controlled**. You must update this value via `onChange` to reflect user input. */
  value?: string;
  /** Default value for **uncontrolled** usage. Use this when you don't want to manage state yourself. The component will manage its internal state. */
  defaultValue?: string;
  /** Fired when the input/textarea receives focus. */
  onFocus?: React.FocusEventHandler<FieldElement>;
  /** Fired when the input/textarea loses focus. */
  onBlur?: React.FocusEventHandler<FieldElement>;
  /** Callback fired when the value changes. Receives the new value as a plain string. Preferred for most use cases (simpler than `onChangeEvent`). */
  onChange?: (value: string) => void;
  /** Key-down handler attached to the field's surrounding container (not the input directly). */
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  /** Key-up handler attached to the field's surrounding container (not the input directly). */
  onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
  /** Click handler for the entire inner container (the area around the input). Can be used to focus the input when clicking anywhere in the field area, or to trigger custom behavior. */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /** Indicates whether the input field is required. If set to `true`, the required indicator (if provided) will be displayed next to the label. */
  required?: boolean;
  /** Controls the visibility of the label. Use `true` to hide the label visually while maintaining its space in the layout, or use 'keep-space' to hide it without collapsing the space it occupies. */
  hideLabel?: boolean | 'keep-space';
  /** Renders the label as a `<span>` instead of a `<label>` element. This is useful when the `Form` component already handles labels internally. */
  renderWithoutLabel?: boolean;
  /** Tooltip content to display when hovering over the info button. If provided, an info button with a tooltip will be rendered. */
  tooltip?: React.ReactNode;
  /** Additional props forwarded to the underlying `Label` component. Use `modifiers` to control how the label text wraps or breaks (e.g. `{ modifiers: 'nowrap' }`) so long labels don't distort the form layout. Breakpoint keys are supported for responsive wrapping (e.g. `{ modifiers: 'nowrap', sm: { modifiers: 'break-word' } }`). */
  labelProps?: LabelModifierProps;
  /** Native `onChange` event handler. Gives you access to the full `ChangeEvent` object (useful if you need `event.target`, `event.preventDefault()`, etc.). Note: Both `onChange` and `onChangeEvent` are called when the value changes. */
  onChangeEvent?: React.ChangeEventHandler<FieldElement>;
  /** Marks the field as invalid and triggers error styling. Also affects `aria-invalid` attribute. Note: The `helper` prop can override this if it contains items with `type: 'error'`. */
  invalid?: boolean;
  /** Makes the field read-only. User can focus and select text, but cannot modify the value. Useful for pre-filled data that should not be changed. Hides the clear button. */
  readOnly?: boolean;
  /** Helper text, success message, or error message displayed below the field. Accepts either: - A single `FeedbackTextProps` object - An array of `FeedbackTextProps` (useful for multiple messages or mixed error/success states) The component automatically detects error states from helper items. */
  helper?: FeedbackTextProps | FeedbackTextProps[];
  /** Callback fired when the clear button (×) is clicked. Useful if you need to perform additional actions besides clearing the value (e.g. analytics, resetting related fields, etc.). Note: The field value is automatically cleared regardless of this callback. */
  onClear?: () => void;
  /** Placeholder text shown when the field is empty. Recommended to be short and descriptive. Avoid using placeholder as a label. */
  placeholder?: string;
  /** When `true`, displays a clear (×) button on the right side when the field has a value. Clicking the button clears the input and calls `onClear` (if provided). Hidden while the field is `readOnly` or disabled. `input.readOnly` only blocks typing, so the button stays for fields whose value changes another way, like a calendar-only DateField range. */
  isClearable?: boolean;
  /** Show the clear (×) button only while the field is hovered or focused, instead of whenever it has a value. Requires `isClearable`. */
  showClearOnInteraction?: boolean;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface IconWithoutBackgroundProps extends IconSharedProps {
    background?: undefined;
    /**
     * Type of display
     * @default block
     */
    display?: 'block' | 'inline';
}
type ButtonProps<C extends React.ElementType = 'button'> = BreakpointSupport<ButtonContentProps<C, IInternalButtonProps, AllowedTags>>;
interface SearchSuggestion {
    /**
     * Stable value returned to `onSuggestionSelect` and used as the React key. For
     * richer payloads keep a lookup keyed by this value on the consumer side.
     */
    value: string;
    /**
     * Visible label. Falls back to `value` when omitted.
     */
    label?: React.ReactNode;
    /**
     * Optional secondary line shown beneath the label (e.g. a code, category, or
     * hint). Rendered as `OptionContent.Meta` in the default row layout; ignored
     * when a custom `renderSuggestionContent` is supplied.
     */
    description?: React.ReactNode;
    /**
     * Renders the suggestion greyed out and skips it during keyboard navigation.
     * @default false
     */
    disabled?: boolean;
}
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type FieldElement = HTMLInputElement | HTMLTextAreaElement;
type LabelModifierProps = BreakpointSupport<{
    modifiers?: LabelModifiers[] | LabelModifiers;
}>;
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
```

## Examples

### Default

```tsx
export const Default: Story = {
  args: {
    id: 'search-default',
    label: 'Otsing',
    placeholder: 'Otsi nime või märksõna järgi',
  },
};
```

### Sizes

```tsx
export const Sizes: StoryObj<TemplateMultipleProps> = {
  render: TemplateColumn,
  args: {
    id: 'search-sizes',
    label: 'Otsing',
    property: 'size',
    array: sizeArray,
  },
  parameters: { a11y: { test: 'error' } },
};
```

### States

```tsx
export const States: StoryObj<TemplateStateProps> = {
  render: TemplateColumnWithStates,
  args: {
    array: stateArray,
    label: 'Otsing',
    id: 'search-states',
  },
  parameters: {
    a11y: { test: 'error' },
    pseudo: {
      hover: '#search-states-hover',
      focus: '#search-states-focus',
      active: '#search-states-active',
    },
  },
};
```

### Placeholder

```tsx
export const Placeholder: Story = {
  args: {
    id: 'search-placeholder',
    label: 'Otsing',
    placeholder: 'Trüki midagi…',
  },
};

/**
 * With `isClearable`, a clear (×) button appears once the field has a value and empties it on click.
 * Uses `defaultValue` (uncontrolled), so the clear button works on its own.
 */
```

### Clearable

```tsx
export const Clearable: Story = {
  args: {
    id: 'search-clearable',
    label: 'Otsing',
    isClearable: true,
    defaultValue: 'Lorem ipsum',
  },
};

/**
 * Clearable field paired with a search button — the clear (×) empties the field; the button runs the search.
 */
```

### Clearable With Button

```tsx
export const ClearableWithButton: Story = {
  name: 'Clearable with button',
  args: {
    id: 'search-clearable-button',
    label: 'Otsing',
    isClearable: true,
    defaultValue: 'Lorem ipsum',
    button: { iconLeft: 'search', children: 'Otsi' },
  },
};
```

Full story source: `src/tedi/components/form/search/search.stories.tsx`.

## Related

`Text`, `Button`, `Card`, `Col`, `Row`, `VerticalSpacing`, `OptionContent`
