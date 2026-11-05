NumberField from @tedi-design-system/react. Use via `window.Tedi.NumberField` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Sizes, States, With Hint, Decimal, With Unit, Full Width, Controlled.

## Props

```ts
import * as React from 'react';

/**
 * NumberField from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/number-field/number-field.stories.tsx).
 */
export interface NumberFieldProps {
  /** Initial value of the input field. */
  defaultValue?: number;
  /** Controlled value of the input field. Overrides defaultValue. */
  value?: number;
  /** Callback fired when the input value changes. Emits `undefined` when the field is cleared so consumers can distinguish *"user explicitly entered zero"* from *"field is empty"* — important for required-field validation and for fields where `0` is a meaningful selection. */
  onChange?: (value: number | undefined) => void;
  /** Specifies the input mode for the field (e.g., numeric or decimal). Defaults to `'decimal'` when `decimalPlaces > 0` or `decimalSeparator === ','`, otherwise numeric. */
  inputMode?: 'numeric' | 'decimal';
  /** Number of decimal places for rounding calculations. */
  decimalPlaces?: number;
  /** Character used as the decimal separator when displaying the value. Both `.` and `,` are always accepted as input regardless of this setting. Defaults are derived from `<LabelProvider locale>`: `en` → `.`, `et` / `ru` → `,`. Pass the prop explicitly to override the locale-derived default for a single field. */
  decimalSeparator?: '.' | ',';
  /** Minimum allowed value. Disables decrementing below this value and restricts manual input. */
  min?: number;
  /** Maximum allowed value. Disables incrementing above this value and restricts manual input. */
  max?: number;
  /** Disables the input field. */
  disabled?: boolean;
  /** Marks the field as invalid for validation purposes. */
  invalid?: boolean;
  /** Text displayed after the input value, typically a unit. */
  suffix?: string;
  /** Whether the number field occupies the full width of its container. */
  fullWidth?: boolean;
  /** Helper text displayed below the input. */
  helper?: FeedbackTextProps;
  /** Step size for incrementing or decrementing the value. */
  step?: number;
  /** Additional attributes for the underlying input element. */
  input?: React.InputHTMLAttributes<HTMLInputElement>;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<NumberFieldBreakpointProps>;
  md?: Partial<NumberFieldBreakpointProps>;
  lg?: Partial<NumberFieldBreakpointProps>;
  xl?: Partial<NumberFieldBreakpointProps>;
  xxl?: Partial<NumberFieldBreakpointProps>;
  /** The unique identifier for the input element that this label is associated with. This ID should match the input element's `id` attribute to ensure accessibility. */
  id: string;
  /** The text content of the label that describes the input field. */
  label: React.ReactNode;
  /** Controls the visibility of the label. Use `true` to hide the label visually while maintaining its space in the layout, or use 'keep-space' to hide it without collapsing the space it occupies. */
  hideLabel?: boolean | 'keep-space';
  /** Indicates whether the input field is required. If set to `true`, the required indicator (if provided) will be displayed next to the label. */
  required?: boolean;
  /** Additional className. */
  className?: string;
  /** Renders the label as a `<span>` instead of a `<label>` element. This is useful when the `Form` component already handles labels internally. */
  renderWithoutLabel?: boolean;
  /** Specifies the size of the label text. Options include 'small' for a smaller label size or 'default' for the standard size. */
  size?: 'small' | 'default';
  /** Tooltip content to display when hovering over the info button. If provided, an info button with a tooltip will be rendered. */
  tooltip?: React.ReactNode;
  /** Additional props forwarded to the underlying `Label` component. Use `modifiers` to control how the label text wraps or breaks (e.g. `{ modifiers: 'nowrap' }`) so long labels don't distort the form layout. Breakpoint keys are supported for responsive wrapping (e.g. `{ modifiers: 'nowrap', sm: { modifiers: 'break-word' } }`). */
  labelProps?: LabelModifierProps;
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
type NumberFieldBreakpointProps = {
    /**
     * Text displayed after the input value, typically a unit.
     */
    suffix?: string;
    /**
     * Whether the number field occupies the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Helper text displayed below the input.
     */
    helper?: FeedbackTextProps;
    /**
     * Step size for incrementing or decrementing the value.
     * @default 1
     */
    step?: number;
    /**
     * Additional attributes for the underlying input element.
     */
    input?: React.InputHTMLAttributes<HTMLInputElement>;
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
    label: 'Label',
    defaultValue: 1,
    step: 1,
    max: 10,
    min: 0,
  },
};
```

### Sizes

```tsx
export const Sizes: StoryObj<typeof TemplateSizes> = {
  render: TemplateSizes,
  args: {
    label: 'Label',
    defaultValue: 1,
    step: 1,
    max: 10,
    min: 0,
  },
};
```

### States

```tsx
export const States: Story = {
  args: {
    step: 1,
    max: 10,
    min: -10,
    label: 'Label',
    defaultValue: 1,
  },
  parameters: {
    pseudo: {
      hover: '#Hover',
      active: '#Active',
      focus: '#Focus',
    },
  },
  render: (args) => {
    return (
      <VerticalSpacing>
        <Row>
          <Col lg={2} md={12} className="flex align-items-center gap-3">
            <Text modifiers="bold">Default</Text>
          </Col>
          <Col>
            <NumberField {...args} id="example-6"></NumberField>
          </Col>
        </Row>
        <Row>
          <Col lg={2} md={12} className="flex align-items-center gap-3">
            <Text modifiers="bold">Min value</Text>
          </Col>
          <Col>
            <NumberField {...args} defaultValue={1} min={1}></NumberField>
          </Col>
        </Row>
        <Row>
          <Col lg={2} md={12} className="flex align-items-center gap-3">
            <Text modifiers="bold">Max value</Text>
          </Col>
          <Col>
            <NumberField {...args} defaultValue={1} max={1}></NumberField>
// …
```

### With Hint

```tsx
export const WithHint: Story = {
  args: {
    label: 'Label',
    helper: {
      text: 'Hint text',
      type: 'hint',
    },
  },
};
```

### Decimal

```tsx
export const Decimal: Story = {
  args: {
    label: 'Label',
    defaultValue: 1.5,
    step: 0.25,
    max: 3,
    min: -3,
  },
};
```

### With Unit

```tsx
export const WithUnit: Story = {
  args: {
    label: 'Label',
    defaultValue: 2,
    step: 1,
    max: 5,
    min: -5,
    suffix: 'unit',
  },
};
```

Full story source: `src/tedi/components/form/number-field/number-field.stories.tsx`.

## Related

`Text`, `Button`, `Col`, `Row`, `VerticalSpacing`
