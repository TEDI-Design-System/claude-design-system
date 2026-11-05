InputGroup from @tedi-design-system/react. Use via `window.Tedi.InputGroup` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `InputGroup.Prefix`, `InputGroup.Suffix`, `InputGroup.Input`.

Variants (see `preview.html`): Start Static, Start Dynamic, End Static, End Dynamic, States, With Button Addons, With Feedback Text.

## Props

```ts
import * as React from 'react';

/**
 * InputGroup from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/input-group/input-group.stories.tsx).
 */
export interface InputGroupProps {
  /** Additional class name(s) applied to the root element of the InputGroup. Useful for custom styling or layout overrides. */
  className?: string;
  /** Enables merged styling between input and its prefix/suffix elements. When `true`, borders and radius are visually combined into a single control. Disable this when using non-standard addons (e.g. buttons) that should not visually merge. */
  addons?: boolean;
  /** Helper or feedback text displayed below the input group. Can be a single item or multiple messages (e.g. error + hint). Accepts the same props as `FeedbackText`. */
  helper?: FeedbackTextProps | FeedbackTextProps[];
  /** InputGroup composition slots. Typically includes `InputGroup.Input` and optionally `InputGroup.Prefix` and/or `InputGroup.Suffix`. */
  children: ReactNode;
  /** Disables the entire input group. Applies disabled styles to the group and propagates the disabled state to the input and any interactive prefix/suffix elements. */
  disabled?: boolean;
  /** Marks the whole group as invalid. Applies the error border to the prefix/suffix addons and propagates `invalid` down to the inner form control, so you don't have to set it on the child as well. Pair with an error `helper` message. */
  invalid?: boolean;
  /** The unique identifier for the input element that this label is associated with. This ID should match the input element's `id` attribute to ensure accessibility. */
  id: string;
  /** The text content of the label that describes the input field. */
  label: React.ReactNode;
  /** Controls the visibility of the label. Use `true` to hide the label visually while maintaining its space in the layout, or use 'keep-space' to hide it without collapsing the space it occupies. */
  hideLabel?: boolean | 'keep-space';
  /** Indicates whether the input field is required. If set to `true`, the required indicator (if provided) will be displayed next to the label. */
  required?: boolean;
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
type LabelModifierProps = BreakpointSupport<{
    modifiers?: LabelModifiers[] | LabelModifiers;
}>;
```

## Examples

### Start Static

```tsx
export const StartStatic: Story = {
  args: {
    label: 'Address',
  },
  render: (args) => (
    <InputGroup {...args} id="start-static">
      <InputGroup.Prefix>Street</InputGroup.Prefix>
      <InputGroup.Input>
        <Field />
      </InputGroup.Input>
    </InputGroup>
  ),
};
```

### Start Dynamic

```tsx
export const StartDynamic: Story = {
  parameters: {
    a11y: {
      options: {
        // react-select's whole control is the pointer target, so axe flagging its inner input is a false positive.
        rules: { 'target-size': { enabled: false } },
      },
    },
  },
  render: () => (
    <VerticalSpacing>
      <PhonePrefixRow />
      <CurrencyPrefixSelectRow />
      <FileFormatPrefixRow />
      <SearchCategoryPrefixRow />
    </VerticalSpacing>
  ),
};
```

### End Static

```tsx
export const EndStatic: Story = {
  args: {
    label: 'Cost',
  },
  render: (args) => (
    <InputGroup {...args} id="end-static">
      <InputGroup.Input>
        <Field />
      </InputGroup.Input>
      <InputGroup.Suffix>EUR</InputGroup.Suffix>
    </InputGroup>
  ),
};
```

### End Dynamic

```tsx
export const EndDynamic: Story = {
  render: () => (
    <VerticalSpacing>
      <CostUnitSuffixRow />
      <TimezoneSuffixSelectRow />
      <FileFormatSuffixRow />
      <SearchCategorySuffixRow />
    </VerticalSpacing>
  ),
};
```

### States

```tsx
export const States: StoryObj<TemplateStateProps> = {
  render: TemplateColumnWithStates,
  args: {
    array: stateArray,
  },
  parameters: {
    pseudo: {
      hover: ['#state-Hover-prefix', '#state-Hover-suffix'],
      focus: ['#state-Focus-prefix', '#state-Focus-suffix'],
      active: ['#state-Active-prefix', '#state-Active-suffix'],
    },
  },
};
```

### With Button Addons

```tsx
export const WithButtonAddons: Story = {
  args: {
    label: 'Promo code',
    addons: false,
  },
  render: (args) => (
    <VerticalSpacing>
      <InputGroup {...args} id="input-group-button">
        <InputGroup.Input>
          <Field placeholder="Enter promo code" />
        </InputGroup.Input>
        <InputGroup.Suffix>
          <Button>Apply</Button>
        </InputGroup.Suffix>
      </InputGroup>

      <InputGroup {...args} disabled id="input-group-button-disabled" label="Promo code (disabled)">
        <InputGroup.Input>
          <Field placeholder="Enter promo code" />
        </InputGroup.Input>
        <InputGroup.Suffix>
          <Button>Apply</Button>
        </InputGroup.Suffix>
      </InputGroup>
    </VerticalSpacing>
  ),
};

/**
 * Feedback text is rendered below the group via the `helper` prop, which accepts the same
 * shape as `FeedbackText` — a single message or an array. Use `type: 'hint'` for guidance and
 * `type: 'error'` for validation messages. Pair an error message with the `invalid` prop so the
 * whole group (addon borders + the inner control) reflects the error state — `invalid` is
 * propagated to the wrapped control automatically, so you don't set it on the child too.
 */
```

Full story source: `src/tedi/components/form/input-group/input-group.stories.tsx`.

## Related

`Icon`, `Text`, `Button`, `Col`, `Row`, `VerticalSpacing`, `Dropdown`, `Field`, `FileUpload`, `Search`
