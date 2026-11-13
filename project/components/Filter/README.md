Filter from @tedi-design-system/react. Use via `window.Tedi.Filter` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Size, Single Value Filter, Multi Value Filter, Customize Content, States, Custom Dropdown Content, Examples, Restricted Height.

## Props

```ts
import * as React from 'react';

/**
 * Filter from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/filter/filter/filter.stories.tsx).
 */
export interface FilterProps {
  /** Trigger label. In single-select mode it's replaced by the picked option (or prefixed when `preserveLabel`). */
  text: string;
  /** Identifier for participating in a managed `<FilterGroup>`. Unused outside a group. */
  value?: string;
  disabled?: boolean;
  /** Class on the root wrapper `<div>` (not the inner `<button>`). */
  className?: string;
  /** Trigger `<button>` id. Auto-generated when omitted; also used as a prefix for sub-element ids. */
  id?: string;
  /** Selected appearance. - Toggle mode (no `options`, no `children`): controlled or uncontrolled (`defaultSelected`). - Custom-content mode (`children`): controlled-only — derive it from your own state. - Dropdown mode (`options`): ignored; derived from `selectedValue` / `selectedValues`. */
  selected?: boolean;
  /** Toggle-mode initial state. Ignored when `selected` is set. */
  defaultSelected?: boolean;
  /** Toggle-mode change callback. Not fired in custom-content or dropdown modes. */
  onSelectedChange?: (selected: boolean) => void;
  /** Single-select controlled value (`''` = nothing selected). Pair with `options`. */
  selectedValue?: string;
  /** Single-select initial value. Ignored when `selectedValue` is set. */
  defaultSelectedValue?: string;
  /** Single-select change callback — fires on commit or clear (`''`). */
  onSelectedValueChange?: (value: string) => void;
  /** Switch the dropdown to multi-select (checkboxes). Requires `options`. */
  multiselect?: boolean;
  /** Multi-select controlled values. */
  selectedValues?: string[];
  /** Multi-select initial values. Ignored when `selectedValues` is set. */
  defaultSelectedValues?: string[];
  /** Multi-select change callback — fires on toggle, "Select all", or clear. */
  onSelectedValuesChange?: (values: string[]) => void;
  /** Dropdown options. Mutually exclusive with `children` (children wins if both). */
  options?: FilterOption[];
  /** Search input that filters `options` by label (case-insensitive substring). */
  searchable?: boolean;
  /** Multi-select "Select all" toggle; targets enabled + visible options. */
  showSelectAll?: boolean;
  /** Override the `filter.select-all` i18n label. */
  selectAllLabel?: string;
  /** "Clear selection" button below the panel. Dropdown modes clear automatically; custom-content mode delegates to `onClear`. */
  showClear?: boolean;
  /** Override the `filter.clear-selection` i18n label. */
  clearLabel?: string;
  /** Single-select: keep `text` as a prefix once a value is picked ("Teenus: …"). */
  preserveLabel?: boolean;
  /** Custom dropdown content. Switches the filter into controlled custom-content mode. */
  children?: React.ReactNode;
  /** Fires when "Clear" is clicked in custom-content mode — reset your own state here. */
  onClear?: () => void;
  /** Slot before `text` (icon, status). Auto-replaced by a check icon when toggle-mode selected — disable via `hidePrependWhenSelected={false}`. */
  prepend?: React.ReactNode;
  /** Hide `prepend` while selected so the check icon can take its place. */
  hidePrependWhenSelected?: boolean;
  /** Slot after `text`. In multi-select sits alongside the built-in count badge. */
  append?: React.ReactNode;
  /** Floating UI placement; flips when room is tight. */
  placement?: React.ComponentProps<typeof Dropdown>['placement'];
  /** Accessible label for the search input. Falls back to `text`. */
  searchLabel?: string;
  /** Caps the height of the dropdown's option list. The list scrolls when it's taller, while the search and "Clear selection" stay pinned. `number` = px, `string` = any CSS length. */
  maxHeight?: React.ComponentProps<typeof Dropdown>['maxHeight'];
  /** Visual variant of the filter. */
  variant?: FilterVariant;
  /** Visual size of the filter. */
  size?: FilterSize;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<FilterBreakpointProps>;
  md?: Partial<FilterBreakpointProps>;
  lg?: Partial<FilterBreakpointProps>;
  xl?: Partial<FilterBreakpointProps>;
  xxl?: Partial<FilterBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface FilterOption {
    /** Display label of the option. */
    label: string;
    /** Stable identifier returned via selection callbacks. */
    value: string;
    /** Whether the option cannot be selected. */
    disabled?: boolean;
}
type FilterVariant = 'primary' | 'secondary';
type FilterSize = 'default' | 'large';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type FilterBreakpointProps = {
    /**
     * Visual variant of the filter.
     * @default primary
     */
    variant?: FilterVariant;
    /**
     * Visual size of the filter.
     * @default default
     */
    size?: FilterSize;
};
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,
  args: { text: 'Teenused' },
};
```

### Size

```tsx
export const Size: Story = {
  render: () => (
    <div className="example-list">
      {sizeArray.map((value, key) => (
        <Row className={`${key === sizeArray.length - 1 ? '' : 'border-bottom'} padding-14-16`} key={key}>
          <Col width={2}>
            <Text modifiers="bold">{value ? value.charAt(0).toUpperCase() + value.slice(1) : ''}</Text>
          </Col>
          <Col className="flex gap-2 flex-wrap">
            <Filter text="Text" size={value} selected />
            <Filter text="Text" size={value} />
            <Filter text="Text" size={value} />
            <Filter text="Text" size={value} />
          </Col>
        </Row>
      ))}
    </div>
  ),
};

/**
 * Single value filters include boolean toggles (separate and grouped) and single-select dropdown
 * filters. The grouped variant shares a `FilterGroup` to coordinate selection.
 */
```

### Single Value Filter

```tsx
export const SingleValueFilter: Story = {
  render: () => (
    <VerticalSpacing>
      <VerticalSpacing size={1}>
        <Text modifiers="bold">Separate</Text>
        <div className="flex gap-2 flex-wrap">
          <Filter text="Vastuvõtud" defaultSelected />
          <Filter text="Analüüsid" defaultSelected />
          <Filter text="Uuringud" />
          <Filter text="Vaktsineerimised" />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Filter text="Vastuvõtud" variant="secondary" defaultSelected />
          <Filter text="Analüüsid" variant="secondary" defaultSelected />
          <Filter text="Uuringud" variant="secondary" />
          <Filter text="Vaktsineerimised" variant="secondary" />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Filter
            text="Vastuvõtud"
            variant="secondary"
            defaultSelected
            prepend={<Icon name="medical_services" size={18} color="inherit" />}
          />
          <Filter text="Analüüsid" variant="secondary" prepend={<Icon name="science" size={18} color="inherit" />} />
          <Filter text="Uuringud" variant="secondary" prepend={<Icon name="biotech" size={18} color="inherit" />} />
          <Filter
            text="Vaktsineerimised"
            variant="secondary"
            prepend={<Icon name="vaccines" size={18} color="inherit" />}
          />
        </div>
      </VerticalSpacing>

      <VerticalSpacing size={1}>
        <Text modifiers="bold">Grouped</Text>
        <div className="flex gap-2 flex-wrap">
          <FilterGroup>
            <Filter text="Kooskõlastatud" />
            <Filter text="Tagasilükatud" />
// …
```

### Multi Value Filter

```tsx
export const MultiValueFilter: Story = {
  render: () => (
    <VerticalSpacing>
      <div className="flex gap-2 flex-wrap">
        <Filter
          text="Teenused"
          multiselect
          options={teenusOptions}
          defaultSelectedValues={['1', '2']}
          searchable
          showSelectAll
          showClear
        />
        <Filter
          text="Raviasutus"
          multiselect
          options={raviasutusOptions}
          defaultSelectedValues={['4']}
          searchable
          showSelectAll
          showClear
        />
        <Filter text="Arst" multiselect options={arstOptions} searchable showSelectAll showClear />
        <Filter text="Ajavahemik" multiselect options={ajavahemikOptions} showClear />
      </div>
      <div className="flex gap-2 flex-wrap">
        <Filter
          text="Teenused"
          variant="secondary"
          multiselect
          options={teenusOptions}
          defaultSelectedValues={['1', '2']}
          searchable
          showSelectAll
          showClear
        />
        <Filter
          text="Raviasutus"
          variant="secondary"
          multiselect
// …
```

### Customize Content

```tsx
export const CustomizeContent: Story = {
  render: () => (
    <VerticalSpacing>
      <VerticalSpacing size={1}>
        <Text modifiers="bold">Prepend hidden when selected (default)</Text>
        <Row>
          <Col>
            <FilterGroup>
              <Filter
                text="Unread (3)"
                variant="secondary"
                size="large"
                prepend={<StatusIndicator type="danger" size="sm" />}
              />
              <Filter text="All" variant="secondary" size="large" />
            </FilterGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FilterGroup>
              <Filter
                text="Unread (3)"
                variant="secondary"
                size="large"
                defaultSelected
                prepend={<StatusIndicator type="danger" size="sm" />}
              />
              <Filter text="All" variant="secondary" size="large" />
            </FilterGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FilterGroup>
              <Filter
                text="Submitted"
                variant="secondary"
                size="large"
                prepend={<StatusBadge color="brand">5</StatusBadge>}
// …
```

### States

```tsx
export const States: Story = {
  parameters: {
    pseudo: {
      hover: '.pseudo-hover button',
      active: '.pseudo-active button',
      focusVisible: '.pseudo-focus button',
    },
  },
  render: function StatesStory() {
    const breakpoint = useBreakpoint();
    const isMobile = isBreakpointBelow(breakpoint, 'md');
    const stateRows: { label: string; id: string; disabled?: boolean }[] = [
      { label: 'Default', id: 'default' },
      { label: 'Hover', id: 'hover' },
      { label: 'Active', id: 'active' },
      { label: 'Focus', id: 'focus' },
      { label: 'Disabled', id: 'disabled', disabled: true },
    ];
    const stateOptions: FilterOption[] = [
      { label: 'Optometristi vastuvõtt', value: '1' },
      { label: 'Silmaarsti vastuvõtt', value: '2' },
      { label: 'Hambaarsti vastuvõtt', value: '3' },
    ];

    const variants: { label: string; variant: FilterProps['variant'] }[] = [
      { label: 'Primary', variant: 'primary' },
      { label: 'Secondary', variant: 'secondary' },
    ];

    const renderCell = (variant: FilterProps['variant'], selected: boolean, disabled: boolean | undefined) => (
      <Row gutter={1} gutterX={3} alignItems="center">
        <Col xs="auto">
          <Filter text="Text" variant={variant} selected={selected} disabled={disabled} />
        </Col>
        <Col xs="auto">
          <Filter
            text="Text"
            variant={variant}
            multiselect
            options={stateOptions}
// …
```

Full story source: `src/tedi/components/filter/filter/filter.stories.tsx`.

## Related

`Icon`, `Text`, `Calendar`, `ChoiceGroup`, `Col`, `Row`, `VerticalSpacing`, `StatusBadge`, `StatusIndicator`, `Tag`
