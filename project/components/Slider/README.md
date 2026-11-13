Slider from @tedi-design-system/react. Use via `window.Tedi.Slider` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, With Input Group, Min And Max Values, With Current Value, With Hint, Custom Value, States, Without Tooltip.

## Props

```ts
import * as React from 'react';

/**
 * Slider from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/form/slider/slider.stories.tsx).
 */
export interface SliderProps {
  /** Unique identifier for the underlying input element. Generated automatically if not provided. */
  id?: string;
  /** Name attribute of the underlying input element. */
  name?: string;
  /** Label text rendered above the slider. */
  label?: React.ReactNode;
  /** Controls the visibility of the label. Pass `true` to hide it visually while keeping it available to assistive technology, or `'keep-space'` to reserve the vertical space. */
  hideLabel?: boolean | 'keep-space';
  /** Additional props forwarded to the underlying `Label` component. Use `modifiers` to control how the label text wraps or breaks (e.g. `{ modifiers: 'nowrap' }`). */
  labelProps?: FormLabelProps['labelProps'];
  /** Marks the field as required. */
  required?: boolean;
  /** Minimum allowed value. */
  min?: number;
  /** Maximum allowed value. */
  max?: number;
  /** Step size. */
  step?: number;
  /** Controlled value. Use together with `onChange`. */
  value?: number;
  /** Default value for uncontrolled usage. */
  defaultValue?: number;
  /** Callback fired when the value changes. */
  onChange?: (value: number) => void;
  /** Disables the slider. */
  disabled?: boolean;
  /** Marks the slider as invalid for validation purposes. */
  invalid?: boolean;
  /** Accessible label used when no visible `label` is provided. */
  "aria-label"?: string;
  /** ID of an element that labels the slider, used when no visible `label` is provided. */
  "aria-labelledby"?: string;
  /** Human-readable text alternative of the current value. */
  "aria-valuetext"?: string;
  /** Text/element rendered to the left of the track (e.g. the minimum value). */
  minLabel?: React.ReactNode;
  /** Text/element rendered to the right of the track (e.g. the maximum value). Ignored when `showCurrentValue` is `true`. */
  maxLabel?: React.ReactNode;
  /** When `true`, renders the current value to the right of the track instead of `maxLabel`. */
  showCurrentValue?: boolean;
  /** Formats the current value, used by both the thumb tooltip and the `showCurrentValue` label. */
  valueFormatter?: (value: number) => React.ReactNode;
  /** Renders a tooltip above the thumb showing the current value. Shown only while the slider is hovered, focused, or being dragged. Value is formatted via `valueFormatter`. */
  tooltip?: boolean;
  /** Node rendered to the right of the slider, typically a NumberField used to edit the same value. */
  addonRight?: React.ReactNode;
  /** Helper text rendered below the slider. */
  helper?: FeedbackTextProps;
  /** Additional class name(s) applied to the root element. */
  className?: string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<SliderBreakpointProps>;
  md?: Partial<SliderBreakpointProps>;
  lg?: Partial<SliderBreakpointProps>;
  xl?: Partial<SliderBreakpointProps>;
  xxl?: Partial<SliderBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
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
type SliderBreakpointProps = {
    /**
     * Text/element rendered to the left of the track (e.g. the minimum value).
     */
    minLabel?: React.ReactNode;
    /**
     * Text/element rendered to the right of the track (e.g. the maximum value).
     * Ignored when `showCurrentValue` is `true`.
     */
    maxLabel?: React.ReactNode;
    /**
     * When `true`, renders the current value to the right of the track instead of `maxLabel`.
     * @default false
     */
    showCurrentValue?: boolean;
    /**
     * Formats the current value, used by both the thumb tooltip and the `showCurrentValue` label.
     * @default (value) => value
     */
    valueFormatter?: (value: number) => React.ReactNode;
    /**
     * Renders a tooltip above the thumb showing the current value. Shown only while the slider is
     * hovered, focused, or being dragged. Value is formatted via `valueFormatter`.
     * @default true
     */
    tooltip?: boolean;
    /**
     * Node rendered to the right of the slider, typically a NumberField used to edit the same value.
     */
    addonRight?: React.ReactNode;
    /**
     * Helper text rendered below the slider.
     */
    helper?: FeedbackTextProps;
    /**
     * Additional class name(s) applied to the root element.
     */
    className?: string;
};
```

## Examples

### Default

```tsx
export const Default: Story = {
  decorators: [wrapInCol],
  args: {
    id: 'slider-default',
    label: 'Väärtus',
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
    minLabel: '0%',
    maxLabel: '100%',
  },
};
```

### With Input Group

```tsx
export const WithInputGroup: Story = {
  render: (args) => <InputGroupTemplate {...args} />,
  args: {
    id: 'slider-input-group',
    label: 'Väärtus',
    min: 0,
    max: 100,
    step: 1,
    minLabel: '0%',
    maxLabel: '100%',
  },
};
```

### Min And Max Values

```tsx
export const MinAndMaxValues: Story = {
  decorators: [wrapInCol],
  args: {
    id: 'slider-min-max',
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
    minLabel: '0%',
    maxLabel: '100%',
    'aria-label': 'Väärtus',
  },
};
```

### With Current Value

```tsx
export const WithCurrentValue: Story = {
  decorators: [wrapInCol],
  args: {
    id: 'slider-current-value',
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
    showCurrentValue: true,
    valueFormatter: (value) => `${value}%`,
    'aria-label': 'Silt',
  },
};

/**
 * Adds hint text below the slider for guidance.
 */
```

### With Hint

```tsx
export const WithHint: Story = {
  decorators: [wrapInCol],
  args: {
    id: 'slider-hint',
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
    showCurrentValue: true,
    valueFormatter: (value) => `${value}%`,
    helper: { text: 'Liiguta nuppu, et väärtust muuta', type: 'hint' },
    'aria-label': 'Väärtus',
  },
};
```

### Custom Value

```tsx
export const CustomValue: Story = {
  render: (args) => <CustomValueTemplate {...args} />,
  args: {
    id: 'slider-custom-value',
    label: 'Väärtus',
    min: 1,
    max: 10,
    step: 1,
    minLabel: '1',
    maxLabel: '10',
  },
};
```

Full story source: `src/tedi/components/form/slider/slider.stories.tsx`.

## Related

`Text`, `Col`, `Row`, `VerticalSpacing`, `Field`, `NumberField`
