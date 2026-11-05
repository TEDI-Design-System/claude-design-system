Radio from @tedi-design-system/react. Use via `window.Tedi.Radio` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `Radio.Group`.

Variants (see `preview.html`): Default, Sizes, Hidden Label, With Helper, With Tooltip, With Long Title, Group, Controlled, Cards Separate, Cards With Label, Cards Has Border, Cards Grouped, Cards With Description, Cards With Icons, Responsive Variant, States, Card States Primary, Card States Secondary.

## Props

```ts
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
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,

  args: {
    id: 'default-radio',
    name: 'default-radio',
    defaultChecked: true,
  },
};
```

### Sizes

```tsx
export const Sizes: Story = {
  render: TemplateSizes,
};
```

### Hidden Label

```tsx
export const HiddenLabel: Story = {
  render: Template,

  args: {
    id: 'hidden-label-radio',
    name: 'hidden-label-radio',
    hideLabel: true,
  },
};
```

### With Helper

```tsx
export const WithHelper: Story = {
  render: Template,

  args: {
    id: 'extra-content-radio',
    name: 'extra-content-radio',
    helper: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque quis augue sit amet semper. Donec porttitor mauris neque, quis feugiat erat malesuada ac. Cras vel mauris a est pretium egestas.',
    },
  },
};
```

### With Tooltip

```tsx
export const WithTooltip: Story = {
  render: (args) => (
    <Row>
      <Col lg={6} md={12}>
        <VerticalSpacing>
          <Radio
            {...args}
            id="radio-short-title-tooltip"
            label="Tekst"
            name="radio-short-title-tooltip"
            value="radio"
          />
          <Radio
            {...args}
            id="radio-short-title-helper-tooltip"
            label="Tekst"
            name="radio-short-title-helper-tooltip"
            value="radio"
            helper={{
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque quis augue sit amet semper. Donec porttitor mauris neque, quis feugiat erat malesuada ac. Cras vel mauris a est pretium egestas.',
            }}
          />
          <Radio
            {...args}
            id="radio-long-title-tooltip-helper"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius, sem blandit sodales tincidunt, orci elit ornare ex, eu ultrices diam turpis id nisl. Sed sollicitudin auctor nunc. Aliquam a arcu in sem bibendum laoreet non eu nunc."
            name="radio-long-title-tooltip-helper"
            value="radio"
            helper={{
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque quis augue sit amet semper. Donec porttitor mauris neque, quis feugiat erat malesuada ac. Cras vel mauris a est pretium egestas.',
            }}
          />
        </VerticalSpacing>
      </Col>
    </Row>
  ),

  args: {
    name: 'tooltip-radio',
    tooltip: 'This is a tooltip',
// …
```

### With Long Title

```tsx
export const WithLongTitle: StoryFn = () => {
  return (
    <Row>
      <Col width={12} lg={6}>
        <Radio
          id="radio-long-title"
          label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius, sem blandit sodales tincidunt, orci elit ornare ex, eu ultrices diam turpis id nisl. Sed sollicitudin auctor nunc. Aliquam a arcu in sem bibendum laoreet non eu nunc."
          name="radio-long-title"
          value="radio"
        />
      </Col>
    </Row>
  );
};

/** Compose radios inside `Radio.Group`, which owns the selection and shared props. */
```

Full story source: `src/tedi/components/form/radio/radio.stories.tsx`.

## Related

`Text`, `Button`, `Col`, `Row`, `VerticalSpacing`
