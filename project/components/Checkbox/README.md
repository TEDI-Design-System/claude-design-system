Checkbox from @tedi-design-system/react. Use via `window.Tedi.Checkbox` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `Checkbox.Group`.

Variants (see `preview.html`): Default, Sizes, Hidden Label, With Helper, With Tooltip, With Long Title, Group, Group Required, Group Invalid, With Select All, Controlled, Cards Default, Cards With Label, Cards With Description, Cards With Icons, Responsive Variant, States, Card States Primary, Card States Secondary.

## Props

```ts
import * as React from 'react';

/**
 * Checkbox from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/checkbox/checkbox.stories.tsx).
 */
export interface CheckboxProps {
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
  /** If the check is in indeterminate state. (Not checked or unchecked) When this is true then the checked prop is ignored */
  indeterminate?: boolean;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<CheckboxBaseProps>;
  md?: Partial<CheckboxBaseProps>;
  lg?: Partial<CheckboxBaseProps>;
  xl?: Partial<CheckboxBaseProps>;
  xxl?: Partial<CheckboxBaseProps>;
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
type CheckboxBaseProps = ChoiceInputProps & {
    /**
     * If the check is in indeterminate state. (Not checked or unchecked)
     * When this is true then the checked prop is ignored
     */
    indeterminate?: boolean;
};
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,

  args: {
    id: 'default-check',
    name: 'default-check',
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
    id: 'hidden-label-check',
    name: 'hidden-label-check',
    hideLabel: true,
  },
};
```

### With Helper

```tsx
export const WithHelper: Story = {
  render: Template,

  args: {
    id: 'extra-content-check',
    name: 'extra-content-check',
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
          <Checkbox
            {...args}
            id="check-short-title-tooltip"
            label="Tekst"
            name="check-short-title-tooltip"
            value="check"
          />
          <Checkbox
            {...args}
            id="check-short-title-helper-tooltip"
            label="Tekst"
            name="check-short-title-helper-tooltip"
            value="check"
            helper={{
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque quis augue sit amet semper. Donec porttitor mauris neque, quis feugiat erat malesuada ac. Cras vel mauris a est pretium egestas.',
            }}
          />
          <Checkbox
            {...args}
            id="check-long-title-tooltip-helper"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius, sem blandit sodales tincidunt, orci elit ornare ex, eu ultrices diam turpis id nisl. Sed sollicitudin auctor nunc. Aliquam a arcu in sem bibendum laoreet non eu nunc."
            name="check-long-title-tooltip-helper"
            value="check"
            helper={{
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque quis augue sit amet semper. Donec porttitor mauris neque, quis feugiat erat malesuada ac. Cras vel mauris a est pretium egestas.',
            }}
          />
        </VerticalSpacing>
      </Col>
    </Row>
  ),

  args: {
    name: 'tooltip-check',
    tooltip: 'This is a tooltip',
// …
```

### With Long Title

```tsx
export const WithLongTitle: StoryFn = () => {
  return (
    <Row>
      <Col lg={6} md={12}>
        <Checkbox
          id="check-long-title"
          label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius, sem blandit sodales tincidunt, orci elit ornare ex, eu ultrices diam turpis id nisl. Sed sollicitudin auctor nunc. Aliquam a arcu in sem bibendum laoreet non eu nunc."
          name="check-long-title"
          value="check"
        />
      </Col>
    </Row>
  );
};

/** Compose checkboxes inside `Checkbox.Group`, which owns the selected values. */
```

Full story source: `src/tedi/components/form/checkbox/checkbox.stories.tsx`.

## Related

`Text`, `Button`, `Col`, `Row`, `VerticalSpacing`
