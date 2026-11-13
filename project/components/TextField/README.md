TextField from @tedi-design-system/react. Use via `window.Tedi.TextField` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Sizes, States, With Hint, Password, Password With Toggle, Placeholder, Clear Button On Interaction.

## Props

```ts
import * as React from 'react';

/**
 * TextField from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/form/textfield/textfield.stories.tsx).
 */
export interface TextFieldProps {
  /** Unique identifier for the text field. Required for accessibility (associates label, helper text, and input). Also used to generate `aria-describedby` and helper IDs automatically. */
  id?: string;
  /** The text or React node that serves as the label for the text field. If `hideLabel` is `true`, the label will be visually hidden but still accessible to screen readers. If `hideLabel` is `'keep-space'`, the label will be hidden but the space it occupies will be preserved. */
  label?: React.ReactNode;
  /** Name attribute for the underlying input/textarea element. Important for form submission and integration with form libraries (React Hook Form, Formik, etc.). */
  name?: string;
  /** Custom CSS class applied directly to the `<input>` or `<textarea>` element (via the internal `Field` component). Use this when you need to style the input itself (e.g. text alignment, font, custom focus styles). Note: The root container uses `className`. */
  inputClassName?: string;
  /** Callback fired when the value changes. Receives the new value as a plain string. Preferred for most use cases (simpler than `onChangeEvent`). */
  onChange?: (value: string) => void;
  /** Native `onChange` event handler. Gives you access to the full `ChangeEvent` object (useful if you need `event.target`, `event.preventDefault()`, etc.). Note: Both `onChange` and `onChangeEvent` are called when the value changes. */
  onChangeEvent?: React.ChangeEventHandler<FieldElement>;
  /** Keyboard event handlers attached to the inner wrapper `<div>`. Useful for handling Enter key submission, arrow key navigation, or custom keyboard shortcuts. Note: These are **not** attached to the input/textarea directly, but to the surrounding container. */
  onKeyPress?: React.KeyboardEventHandler<HTMLDivElement>;
  /** Key-down handler attached to the field's surrounding container (not the input directly). */
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  /** Key-up handler attached to the field's surrounding container (not the input directly). */
  onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
  /** Default value for **uncontrolled** usage. Use this when you don't want to manage state yourself. The component will manage its internal state. */
  defaultValue?: string;
  /** Controlled value of the text field. When provided, the component becomes **fully controlled**. You must update this value via `onChange` to reflect user input. */
  value?: string;
  /** Called when the user clicks on the icon (only works if `icon` is provided). The icon is automatically wrapped in a `<button>` when this prop is present. */
  onIconClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
  /** Extra HTML attributes spread on the icon `<button>` element. Use this to wire ARIA state (e.g. `aria-expanded`, `aria-controls`, `aria-haspopup`) directly to the icon trigger, so screen readers announce disclosure state correctly when the icon opens a popover / dialog. Only applied when `onIconClick` is set (i.e. the icon is rendered as a `<button>`). */
  iconButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  /** Click handler for the entire inner container (the area around the input). Can be used to focus the input when clicking anywhere in the field area, or to trigger custom behavior. */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /** Disables the entire text field. When `true`: - Input becomes non-editable and non-focusable - Clear button is hidden and icon is disabled - Visual disabled styles are applied */
  disabled?: boolean;
  /** Marks the field as invalid and triggers error styling. Also affects `aria-invalid` attribute. Note: The `helper` prop can override this if it contains items with `type: 'error'`. */
  invalid?: boolean;
  /** Makes the field read-only. User can focus and select text, but cannot modify the value. Useful for pre-filled data that should not be changed. Hides the clear button. */
  readOnly?: boolean;
  /** Helper text, success message, or error message displayed below the field. Accepts either: - A single `FeedbackTextProps` object - An array of `FeedbackTextProps` (useful for multiple messages or mixed error/success states) The component automatically detects error states from helper items. */
  helper?: FeedbackTextProps | FeedbackTextProps[];
  /** Fired when the input/textarea receives focus. */
  onFocus?: React.FocusEventHandler<FieldElement>;
  /** Fired when the input/textarea loses focus. */
  onBlur?: React.FocusEventHandler<FieldElement>;
  /** Hides the spinner/arrows for number inputs (`type="number"`). Only has effect when the underlying input has `type="number"`. */
  isArrowsHidden?: boolean;
  /** Callback fired when the clear button (×) is clicked. Useful if you need to perform additional actions besides clearing the value (e.g. analytics, resetting related fields, etc.). Note: The field value is automatically cleared regardless of this callback. */
  onClear?: () => void;
  /** Additional attributes for the input element. */
  input?: React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  /** Optional start slot element to render inside the input container, before the input field. */
  startSlot?: React.ReactNode;
  /** Optional end slot element to render inside the input container, after the input field. */
  endSlot?: React.ReactNode;
  /** Controls the visual size of the text field. - `'small'` → Compact version (smaller height, padding, and font size) - `'default'` → Standard size (most commonly used) - `'large'` → Larger touch target, bigger text and padding */
  size?: 'default' | 'small' | 'large';
  /** Icon displayed inside the text field on the right side. Accepts either: - A simple string (icon name) → e.g. `'search'`, `'user'`, `'calendar'` - A full `IconWithoutBackgroundProps` object for advanced configuration (size, color, className, etc.) When `onIconClick` is provided, the icon becomes a clickable button. Otherwise, it is rendered as a non-interactive decorative element. */
  icon?: string | IconWithoutBackgroundProps;
  /** If `true`, renders a `<textarea>` instead of a regular `<input>`. Useful for multi-line text input (comments, descriptions, addresses, etc.). Note: When using `isTextArea`, the component still behaves like a text field (same styling, clear button, icon support, validation, etc.). */
  isTextArea?: boolean;
  /** Placeholder text shown when the field is empty. Recommended to be short and descriptive. Avoid using placeholder as a label. */
  placeholder?: string;
  /** When `true`, displays a clear (×) button on the right side when the field has a value. Clicking the button clears the input and calls `onClear` (if provided). Hidden while the field is `readOnly` or disabled. `input.readOnly` only blocks typing, so the button stays for fields whose value changes another way, like a calendar-only DateField range. */
  isClearable?: boolean;
  /** Show the clear (×) button only while the field is hovered or focused, instead of whenever it has a value. Requires `isClearable`. */
  showClearOnInteraction?: boolean;
  /** Additional CSS class name applied to the root container (`<div>`). Use this for layout adjustments, custom spacing, or theming the entire text field wrapper. */
  className?: string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<TextFieldBreakpointProps>;
  md?: Partial<TextFieldBreakpointProps>;
  lg?: Partial<TextFieldBreakpointProps>;
  xl?: Partial<TextFieldBreakpointProps>;
  xxl?: Partial<TextFieldBreakpointProps>;
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
}

// Referenced types, resolved one level deep (see the story source for the rest).
type FieldElement = HTMLInputElement | HTMLTextAreaElement;
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
interface IconWithoutBackgroundProps extends IconSharedProps {
    background?: undefined;
    /**
     * Type of display
     * @default block
     */
    display?: 'block' | 'inline';
}
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type TextFieldBreakpointProps = {
    /**
     * Controls the visual size of the text field.
     *
     * - `'small'`  → Compact version (smaller height, padding, and font size)
     * - `'default'` → Standard size (most commonly used)
     * - `'large'`   → Larger touch target, bigger text and padding
     *
     * @default 'default'
     */
    size?: 'default' | 'small' | 'large';
    /**
     * Icon displayed inside the text field on the right side.
     *
     * Accepts either:
     * - A simple string (icon name) → e.g. `'search'`, `'user'`, `'calendar'`
     * - A full `IconWithoutBackgroundProps` object for advanced configuration (size, color, className, etc.)
     *
     * When `onIconClick` is provided, the icon becomes a clickable button.
     * Otherwise, it is rendered as a non-interactive decorative element.
     */
    icon?: string | IconWithoutBackgroundProps;
    /**
     * If `true`, renders a `<textarea>` instead of a regular `<input>`.
     * Useful for multi-line text input (comments, descriptions, addresses, etc.).
     *
     * Note: When using `isTextArea`, the component still behaves like a text field
     * (same styling, clear button, icon support, validation, etc.).
     *
     * @default false
     */
    isTextArea?: boolean;
    /**
     * Placeholder text shown when the field is empty.
     *
     * Recommended to be short and descriptive. Avoid using placeholder as a label.
     */
    placeholder?: string;
    /**
     * When `true`, displays a clear (×) button on the right side when the field has a value.
     *
     * Clicking the button clears the input and calls `onClear` (if provided).
     * Hidden while the field is `readOnly` or disabled. `input.readOnly` only blocks typing, so the button
     * stays for fields whose value changes another way, like a calendar-only DateField range.
     *
     * @default true
     */
    isClearable?: boolean;
    /**
     * Show the clear (×) button only while the field is hovered or focused, instead of whenever it has
     * a value. Requires `isClearable`.
     * @default false
     */
    showClearOnInteraction?: boolean;
    /**
     * Additional CSS class name applied to the root container (`<div>`).
     *
     * Use this for layout adjustments, custom spacing, or theming the entire text field wrapper.
     */
    className?: string;
};
type LabelModifierProps = BreakpointSupport<{
    modifiers?: LabelModifiers[] | LabelModifiers;
}>;
```

## Examples

### Default

```tsx
export const Default: Story = {
  args: {
    id: 'example-1',
    label: 'Label',
  },
};
```

### Sizes

```tsx
export const Sizes: StoryObj<TemplateMultipleProps> = {
  render: TemplateColumn,

  args: {
    id: 'example-2',
    label: 'Label',
    property: 'size',
    value: 'Text value',
    array: sizeArray,
  },
};
```

### States

```tsx
export const States: StoryObj<TemplateStateProps> = {
  render: TemplateColumnWithStates,
  args: {
    array: stateArray,
    label: 'Label',
  },
  parameters: {
    pseudo: {
      hover: '#Hover',
      focus: '#Focus',
      active: '#Active',
    },
  },
};
```

### With Hint

```tsx
export const WithHint: Story = {
  args: {
    ...Default.args,
    id: 'example-3',
    helper: {
      id: 'example-3',
      text: 'Hint text',
      type: 'hint',
    },
  },
};
```

### Password

```tsx
export const Password: Story = {
  args: {
    ...Default.args,
    id: 'example-4',
    input: { type: 'password' },
    value: '123456789',
  },
};

/**
 * A password field with a show/hide toggle. The trailing `icon` becomes a button via `onIconClick`;
 * clicking it swaps the input `type` between `password` and `text` and updates the icon. Give the
 * icon button an `aria-label` and `aria-pressed` (through `iconButtonProps`) so screen-reader users
 * know it toggles password visibility and its current state.
 */
```

### Password With Toggle

```tsx
export const PasswordWithToggle: Story = {
  render: function PasswordWithToggle() {
    const [isVisible, setIsVisible] = useState(false);
    const [value, setValue] = useState('SuperSecret123');

    return (
      <TextField
        id="example-password-toggle"
        label="Password"
        value={value}
        onChange={setValue}
        input={{ type: isVisible ? 'text' : 'password', autoComplete: 'current-password' }}
        icon={isVisible ? 'visibility_off' : 'visibility'}
        onIconClick={() => setIsVisible((prev) => !prev)}
        iconButtonProps={{
          'aria-label': 'Show password',
          'aria-pressed': isVisible,
        }}
      />
    );
  },
};
```

Full story source: `src/tedi/components/form/textfield/textfield.stories.tsx`.

## Related

`Text`, `Col`, `Row`, `VerticalSpacing`
