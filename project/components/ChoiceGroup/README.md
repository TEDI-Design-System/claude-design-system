ChoiceGroup from @tedi-design-system/react. Use via `window.Tedi.ChoiceGroup` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `ChoiceGroup.Item`.

Variants (see `preview.html`): Radio, Radio Row, Checkbox, Checkbox Row, Radio Card Segmented, Radio Card Separated, Checkbox Card, Radio Card With Icon, Checkbox Card With Icon, With Error, With Default Value, With Indeterminate, With Extra Content, Responsive, Custom Label, Custom Item Labels, Custom Item HTMLLabels.

## Props

```ts
import * as React from 'react';

/**
 * ChoiceGroup from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/choice-group/choice-group.stories.tsx).
 */
export interface ChoiceGroupProps {
  id: string;
  items: ExtendedChoiceGroupItemProps[];
  name: string;
  label: React.ReactNode | string;
  inputType?: ChoiceGroupItemType;
  helper?: FeedbackTextProps;
  /** Additional className. */
  className?: string;
  defaultValue?: ChoiceGroupValue;
  value?: ChoiceGroupValue;
  onChange?: (value: ChoiceGroupValue) => void;
  variant?: ChoiceGroupItemVariant;
  color?: ChoiceGroupItemColor;
  direction?: Direction;
  layout?: ChoiceGroupItemLayout;
  rowProps?: RowProps;
  showIndicator?: boolean;
  indeterminateCheck?: boolean | string | ((state: ChoiceGroupIndeterminateState) => string);
  indeterminateCheckProps?: { indented?: boolean; } & Partial<Omit<CheckboxProps, 'indeterminate' | 'checked' | 'onChange' | 'defaultChecked' | 'label'>>;
  /** Specifies the size of the label text. Options include 'small' for a smaller label size or 'default' for the standard size. */
  size?: 'small' | 'default';
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
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<ChoiceGroupAllProps>;
  md?: Partial<ChoiceGroupAllProps>;
  lg?: Partial<ChoiceGroupAllProps>;
  xl?: Partial<ChoiceGroupAllProps>;
  xxl?: Partial<ChoiceGroupAllProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface ExtendedChoiceGroupItemProps extends BreakpointSupport<ChoiceGroupItemBreakpointProps> {
    id: string;
    label: string | React.ReactNode;
    value: string;
}
type ChoiceGroupItemType = 'radio' | 'checkbox';
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
type ChoiceGroupValue = string | string[] | null;
type ChoiceGroupItemVariant = 'default' | 'card';
type ChoiceGroupItemColor = 'primary' | 'secondary';
type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type ChoiceGroupItemLayout = 'segmented' | 'separated';
interface RowProps extends RowSpec, React.HTMLAttributes<HTMLElement> {
    /**
     * Row children. Row direct children should always be Col components
     */
    children?: React.ReactElement<ColProps> | React.ReactElement<ColProps>[] | React.ReactNode;
    /**
     * Additional class.
     */
    className?: string;
    /**
     * Base element.
     * @default div
     */
    element?: RowElement;
    /**
     * RowSpec object to change Row behavior on xs devices (<576px).
     * Or number of columns that will fit next to each other.
     */
    xs?: RowSpec | Cols;
    /**
     * RowSpec object to change Row behavior on sm devices (≥576px).
     * Or number of columns that will fit next to each other.
     */
    sm?: RowSpec | Cols;
    /**
     * RowSpec object to change Row behavior on md devices (≥768px).
     * Or number of columns that will fit next to each other.
     */
    md?: RowSpec | Cols;
    /**
     * RowSpec object to change Row behavior on lg devices (≥992px).
     * Or number of columns that will fit next to each other.
     */
    lg?: RowSpec | Cols;
    /**
     * RowSpec object to change Row behavior on xl devices (≥1200px).
     * Or number of columns that will fit next to each other.
     */
    xl?: RowSpec | Cols;
    /**
     * RowSpec object to change Row behavior on xxl devices (≥1400px).
     * Or number of columns that will fit next to each other.
     */
    xxl?: RowSpec | Cols;
}
type ChoiceGroupIndeterminateState = 'none' | 'some' | 'all';
type CheckboxProps = BreakpointSupport<CheckboxBaseProps>;
type LabelModifierProps = BreakpointSupport<{
    modifiers?: LabelModifiers[] | LabelModifiers;
}>;
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface ChoiceGroupAllProps extends Omit<FormLabelProps, 'id' | 'label'> {
    id: string;
    items: ExtendedChoiceGroupItemProps[];
    name: string;
    label: React.ReactNode | string;
    inputType?: ChoiceGroupItemType;
    helper?: FeedbackTextProps;
    className?: string;
    defaultValue?: ChoiceGroupValue;
    value?: ChoiceGroupValue;
    onChange?: (value: ChoiceGroupValue) => void;
    variant?: ChoiceGroupItemVariant;
    color?: ChoiceGroupItemColor;
    direction?: Direction;
    layout?: ChoiceGroupItemLayout;
    rowProps?: RowProps;
    showIndicator?: boolean;
    indeterminateCheck?: boolean | string | ((state: ChoiceGroupIndeterminateState) => string);
    indeterminateCheckProps?: {
        indented?: boolean;
    } & Partial<Omit<CheckboxProps, 'indeterminate' | 'checked' | 'onChange' | 'defaultChecked' | 'label'>>;
}
```

## Examples

### Radio

```tsx
export const Radio: StoryObj = {
  argTypes: {
    ...subcomponentArgTypes(ChoiceGroup.Item, {
      category: 'ChoiceGroup.Item',
      prefix: 'item',
      include: ['variant', 'color', 'layout', 'showIndicator', 'disabled', 'justifyContent', 'direction'],
    }),
  },
  args: {
    label: 'ChoiceGroup with radios:',
    id: 'example-1',
    defaultValue: [],
    inputType: 'radio',
    name: 'radio-1',
    item__variant: 'card',
    item__showIndicator: true,
    item__layout: 'separated',
  },
  render: (args: Record<string, unknown>) => {
    const itemProps = getSubcomponentProps<Partial<ExtendedChoiceGroupItemProps>>(args, 'item');
    return (
      <ChoiceGroup
        {...getPrimaryComponentProps<ChoiceGroupProps>(args)}
        items={generateItems({ index: 0 }).map((item) => ({ ...item, ...itemProps }))}
      />
    );
  },
};
```

### Radio Row

```tsx
export const RadioRow: Story = {
  args: {
    label: 'ChoiceGroup with radios:',
    id: 'example-1.2',
    defaultValue: [],
    inputType: 'radio',
    name: 'radio-1.2',
    direction: 'row',
    items: generateItems({ index: 1 }),
  },
};
```

### Checkbox

```tsx
export const Checkbox: Story = {
  args: {
    label: 'ChoiceGroup with checkboxes:',
    id: 'example-2',
    defaultValue: [],
    inputType: 'checkbox',
    name: 'check-2',
    items: generateItems({ index: 2 }),
  },
};
```

### Checkbox Row

```tsx
export const CheckboxRow: Story = {
  args: {
    label: 'ChoiceGroup with checkboxes:',
    id: 'example-2.1',
    defaultValue: [],
    inputType: 'checkbox',
    name: 'check-2.1',
    direction: 'row',
    items: generateItems({ index: 33 }),
  },
};
```

### Radio Card Segmented

```tsx
export const RadioCardSegmented = () => <VerticalSpacing>{renderChoiceGroups('radio', 'segmented')}</VerticalSpacing>;
```

### Radio Card Separated

```tsx
export const RadioCardSeparated = () => <VerticalSpacing>{renderChoiceGroups('radio', 'separated')}</VerticalSpacing>;
```

Full story source: `src/tedi/components/form/choice-group/choice-group.stories.tsx`.

## Related

`Icon`, `Text`, `Col`, `Row`, `VerticalSpacing`
