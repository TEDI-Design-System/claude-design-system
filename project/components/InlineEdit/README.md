InlineEdit from @tedi-design-system/react. Use via `window.Tedi.InlineEdit` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Type, Sizes, Value Type, Edit Icon Position, Responsiveness, States, Read Only, Cancel Edit, Disabled, Invalid, Placeholder, Supported Controls.

## Props

```ts
import * as React from 'react';

/**
 * InlineEdit from @tedi-design-system/react@21.0.0-rc.35 (stories: ./src/tedi/components/form/inline-edit/inline-edit.stories.tsx).
 */
export interface InlineEditProps<T> {
  /** Accessible label for the field (announced on the read trigger). */
  label: string;
  /** Renders the read view. Defaults to the value itself. Return a node — e.g. format a `Date`, or map a select option to its `label`. */
  renderValue?: (value: T) => React.ReactNode;
  /** Shown in the read view when the value is empty. No default — supply one if you want an empty-state hint. */
  placeholder?: React.ReactNode;
  /** Renders the value as plain text with no edit affordance, keeping the row's inset so it lines up with editable rows. */
  readOnly?: boolean;
  /** Blocks editing and keeps the trigger and edit icon visible but greyed, for transient states such as saving. */
  disabled?: boolean;
  /** Marks the row as invalid, setting `aria-invalid` on the editor control; an `error` helper sets it too. */
  invalid?: boolean;
  /** Feedback text below the field, linked to the trigger and the editor through `aria-describedby`. */
  helper?: FeedbackTextProps | FeedbackTextProps[];
  /** Sizes the row to its value instead of filling its container, so the row changes width when the editor opens. */
  fitContent?: boolean;
  /** Commits on Enter; turn it off when the editor uses Enter itself. A textarea, menu or button already keeps its Enter. */
  closeOnEnter?: boolean;
  /** Cancels on Escape. */
  closeOnEscape?: boolean;
  /** Commits when focus leaves the editor or the menus it opens. */
  closeOnBlur?: boolean;
  /** Text size and row spacing of the read trigger and editor. */
  size?: InlineEditSize;
  /** Places the edit icon at the trailing edge (`end`) or straight after the value (`inline`); hidden while the row is invalid. */
  editIconPosition?: 'inline' | 'end';
  /** id applied to the root: the read trigger, the editor or the read-only text. */
  id?: string;
  /** Additional class on the root element. */
  className?: string;
  /** Renders the editor: return a TEDI control wired to the render props, forwarding `size` so it matches the read view. */
  children: (editor: InlineEditEditor<T> & { size: InlineEditSize; }) => React.ReactNode;
  /** Controlled committed value. Pair with `onChange`. */
  value?: T;
  /** Initial committed value for uncontrolled use. Ignored when `value` is set. */
  defaultValue?: T;
  /** Called with the draft when an edit is committed. */
  onChange?: (value: T) => void;
  /** Controlled edit mode. Update it from `onEditStart`, `onChange` and `onEditCancel`. */
  editing?: boolean;
  /** Starts in edit mode. An editor that starts open does not take focus. */
  defaultEditing?: boolean;
  /** Called when the user enters edit mode. */
  onEditStart?: () => void;
  /** Called when the user cancels the edit. */
  onEditCancel?: () => void;
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
type InlineEditSize = 'default' | 'small';
interface InlineEditEditor<T> {
    /** Current draft value — wire this to the control's `value`. */
    value: T;
    /** Update the draft — wire this to the control's `onChange`. */
    onChange: (value: T) => void;
    /** Commit the draft (fires `onChange`) and leave edit mode. */
    commit: () => void;
    /** Discard the draft and leave edit mode. */
    cancel: () => void;
}
```

## Examples

### Default

```tsx
export const Default: Story = {
  args: {
    label: 'Nimi',
    placeholder: 'Sisesta nimi',
    size: 'default',
    editIconPosition: 'end',
    readOnly: false,
    disabled: false,
    fitContent: false,
    closeOnEnter: true,
    closeOnEscape: true,
    closeOnBlur: true,
  },
  render: function DefaultField(args) {
    const [value, setValue] = useState('Mari Maasikas');
    return (
      <Column width={3}>
        <InlineEdit<string>
          label={args.label}
          placeholder={args.placeholder}
          size={args.size}
          editIconPosition={args.editIconPosition}
          readOnly={args.readOnly}
          disabled={args.disabled}
          fitContent={args.fitContent}
          closeOnEnter={args.closeOnEnter}
          closeOnEscape={args.closeOnEscape}
          closeOnBlur={args.closeOnBlur}
          value={value}
          onChange={setValue}
          renderValue={(v) => v}
        >
          {({ value: draft, onChange, size: editorSize }) => (
            <TextField
              id="default-value"
              label={args.label}
              hideLabel
              value={draft}
              onChange={onChange}
              size={editorSize}
// …
```

### Type

```tsx
export const Type: Story = {
  render: function Type() {
    const [type, setType] = useState<ISelectOption | null>(typeOptions[0]);
    return (
      <Column width={5}>
        <Fields>
          <NamedRow name="Text field">
            <NameInline id="ie-type-text" />
          </NamedRow>
          <NamedRow name="Select">
            <InlineEdit<ISelectOption | null>
              label="Tüüp"
              value={type}
              onChange={setType}
              renderValue={(v) => (v ? (v.label as string) : '—')}
            >
              {({ value, onChange, commit }) => (
                <Select
                  id="ie-type-select"
                  size="small"
                  label="Tüüp"
                  hideLabel
                  options={typeOptions}
                  value={value}
                  onChange={(next) => {
                    onChange(next as ISelectOption | null);
                    commit();
                  }}
                />
              )}
            </InlineEdit>
          </NamedRow>
        </Fields>
      </Column>
    );
  },
};
```

### Sizes

```tsx
export const Sizes: Story = {
  render: () => (
    <Column width={5}>
      <Fields>
        {sizeArray.map((size) => (
          <NamedRow key={size} name={size === 'default' ? 'Default' : 'Small'}>
            <NameInline id={`ie-size-${size}`} label="Kuupäev" defaultValue="22.03.2026" size={size} />
          </NamedRow>
        ))}
      </Fields>
    </Column>
  ),
};

/**
 * The read view is plain text by default — or the placeholder while the value is empty. For values a string cannot
 * express, such as tags or a status badge, return them from `renderValue`.
 */
```

### Value Type

```tsx
export const ValueType: Story = {
  name: 'Value type',
  render: function ValueType() {
    const [type, setType] = useState<ISelectOption | null>(typeOptions[0]);
    const [address, setAddress] = useState<ISelectOption | null>(null);
    const [keywords, setKeywords] = useState<ISelectOption[]>(keywordOptions);
    const [olek, setOlek] = useState<ISelectOption | null>(olekOptions[0]);

    return (
      <Column width={5}>
        <Fields>
          <FieldRow label="Tüüp">
            <InlineEdit<ISelectOption | null>
              label="Tüüp"
              value={type}
              onChange={setType}
              renderValue={(v) => (v ? (v.label as string) : '—')}
            >
              {({ value, onChange, commit }) => (
                <Select
                  id="type-select"
                  size="small"
                  label="Tüüp"
                  hideLabel
                  options={typeOptions}
                  value={value}
                  onChange={(next) => {
                    onChange(next as ISelectOption | null);
                    commit();
                  }}
                />
              )}
            </InlineEdit>
          </FieldRow>
          <FieldRow label="Aadress">
            <InlineEdit<ISelectOption | null>
              label="Aadress"
              value={address}
              onChange={setAddress}
              placeholder="Sisesta aadress"
// …
```

### Edit Icon Position

```tsx
export const EditIconPosition: Story = {
  render: () => (
    <Column width={6}>
      <Row alignItems="center" gutterX={3} gutterY={4}>
        {(['inline', 'end'] as const).map((align) => (
          <React.Fragment key={align}>
            <Col width={2}>
              <Text modifiers="bold">{align === 'inline' ? 'Inline' : 'End'}</Text>
            </Col>
            <Col width={10}>
              <Fields>
                {alignFields.map((field, index) => (
                  <FieldRow key={field.label} label={field.label}>
                    <NameInline
                      id={`ie-align-${align}-${index}`}
                      label={field.label}
                      defaultValue={field.value}
                      editIconPosition={align}
                    />
                  </FieldRow>
                ))}
              </Fields>
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </Column>
  ),
};

/**
 * The row fills its container, so on narrow layouts the whole row is a comfortable tap target rather than just the
 * value. The playground controls apply to the field below.
 */
```

### Responsiveness

```tsx
export const Responsiveness: Story = {
  args: {
    label: 'Nimi',
    placeholder: '—',
    size: 'default',
    editIconPosition: 'end',
    readOnly: false,
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  render: function ResponsiveField(args) {
    const [name, setName] = useState('Mari Maasikas');
    return (
      <InlineEdit<string>
        label={args.label}
        placeholder={args.placeholder}
        size={args.size}
        editIconPosition={args.editIconPosition}
        readOnly={args.readOnly}
        fitContent={args.fitContent}
        value={name}
        onChange={setName}
        renderValue={(v) => v}
      >
        {({ value, onChange, size: editorSize }) => (
          <TextField id="ie-mobile" label={args.label} hideLabel value={value} onChange={onChange} size={editorSize} />
        )}
      </InlineEdit>
    );
  },
};

/**
 * Active is the open editor. An invalid row drops the edit icon. Read-only and Disabled have no Figma counterpart yet.
 */
```

Full story source: `src/tedi/components/form/inline-edit/inline-edit.stories.tsx`.

## Related

`Text`, `Label`, `Col`, `Row`, `VerticalSpacing`, `StatusBadge`, `Tag`, `Checkbox`, `DateField`, `NumberField`, `Radio`, `Select`, `Textarea`, `TextField`
