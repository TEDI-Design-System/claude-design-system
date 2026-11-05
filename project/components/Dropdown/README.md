Dropdown from @tedi-design-system/react. Use via `window.Tedi.Dropdown` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `Dropdown.Trigger`, `Dropdown.Content`, `Dropdown.Item`, `Dropdown.Separator`.

Variants (see `preview.html`): Default, With Active Item, With Action, With Icon, With Checkbox, With Indented Items, With Radio, Custom Width, Restricted Height, With Description, Divided, With Separator And Opens Right, Custom Content, Tree, Open Items For Visual Test, Open Chrome For Visual Test, Open Control Items For Visual Test.

## Props

```ts
import * as React from 'react';

/**
 * Dropdown from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/overlays/dropdown/dropdown.stories.tsx).
 */
export interface DropdownProps {
  /** Child elements — must include exactly one `Dropdown.Trigger` and one `Dropdown.Content` */
  children: React.ReactNode;
  /** When `true`, the dropdown behaves like a modal: - Traps focus inside the dropdown - Shows a visually hidden "Close" button for screen readers - Usually used for menus that require explicit dismissal */
  modal?: boolean;
  /** Controlled open state */
  open?: boolean;
  /** Uncontrolled default state */
  defaultOpen?: boolean;
  /** Change handler (fires for both modes) */
  onOpenChange?: (open: boolean) => void;
  /** Index of the item that should be focused when the dropdown opens. Pass the index of the "current selection" so the user can arrow-key or Enter/Space to reconfirm without first pressing an arrow. Omit (or pass `undefined`) to keep the default behaviour — no item is pre-focused and the user has to press an arrow key to start navigating. */
  defaultActiveIndex?: number;
  /** Navigation mode — use when the dropdown lists **links** (e.g. collapsed breadcrumbs) rather than menu commands. Drops the `menu` / `menuitem` roles, `aria-haspopup="menu"` and roving tabindex, so screen readers announce the items as links and each is a normal Tab stop. Keep it `false` (default) for action menus. */
  navigation?: boolean;
  className?: string;
  /** When `true` there is a border between the dropdown items */
  divided?: boolean;
  /** Controls the width of the dropdown menu. - `'auto'` – width is determined by content (default) - `'trigger'` – matches the width of the trigger element - `'full'` – spans the full width of the containing block - `number` – fixed width in pixels - `string` – any valid CSS width value (e.g. `'16rem'`, `'100%'`) */
  width?: 'auto' | 'trigger' | 'full' | number | string;
  /** Controls where the dropdown is positioned relative to its trigger. Accepts any Floating UI placement value, such as: `'bottom-start'`, `'bottom-end'`, `'top-start'`, `'right-end'`, etc. */
  placement?: Placement;
  /** Controls the visual and structural variant of the dropdown. - `'default'` – standard flat list of items - `'tree'` – hierarchical (tree-style) list with indented items and connector lines Tree visuals are only applied when this prop is set to `'tree'`. Ignored by default. */
  variant?: 'default' | 'tree';
  /** Restricts the height of the dropdown's scrollable body. When the content is taller, the body scrolls vertically while any sticky regions (e.g. a Filter search / clear) stay pinned. - `number` – fixed max height in pixels - `string` – any valid CSS length (e.g. `'20rem'`, `'50vh'`) */
  maxHeight?: number | string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<DropdownBreakpointProps>;
  md?: Partial<DropdownBreakpointProps>;
  lg?: Partial<DropdownBreakpointProps>;
  xl?: Partial<DropdownBreakpointProps>;
  xxl?: Partial<DropdownBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type DropdownBreakpointProps = {
    /**
     * When `true` there is a border between the dropdown items
     *  @default false
     */
    divided?: boolean;
    /**
     * Controls the width of the dropdown menu.
     * - `'auto'` – width is determined by content (default)
     * - `'trigger'` – matches the width of the trigger element
     * - `'full'` – spans the full width of the containing block
     * - `number` – fixed width in pixels
     * - `string` – any valid CSS width value (e.g. `'16rem'`, `'100%'`)
     * @default auto
     */
    width?: 'auto' | 'trigger' | 'full' | number | string;
    /**
     * Controls where the dropdown is positioned relative to its trigger.
     * Accepts any Floating UI placement value, such as:
     * `'bottom-start'`, `'bottom-end'`, `'top-start'`, `'right-end'`, etc.
     *
     * @default bottom-start
     */
    placement?: Placement;
    /**
     * Controls the visual and structural variant of the dropdown.
     * - `'default'` – standard flat list of items
     * - `'tree'` – hierarchical (tree-style) list with indented items and connector lines
     * Tree visuals are only applied when this prop is set to `'tree'`.
     * Ignored by default.
     * @default 'default'
     */
    variant?: 'default' | 'tree';
    /**
     * Restricts the height of the dropdown's scrollable body. When the content is taller,
     * the body scrolls vertically while any sticky regions (e.g. a Filter search / clear) stay pinned.
     * - `number` – fixed max height in pixels
     * - `string` – any valid CSS length (e.g. `'20rem'`, `'50vh'`)
     * @default undefined (no restriction)
     */
    maxHeight?: number | string;
};
```

## Examples

### Default

```tsx
export const Default: StoryObj = {
  argTypes: {
    ...subcomponentArgTypes(Dropdown.Item, {
      category: 'Dropdown.Item',
      prefix: 'item',
      exclude: ['children', 'onClick', 'index'],
    }),
  },
  args: {
    item__active: true,
  },
  render: (args: Record<string, unknown>) => (
    <Dropdown {...getPrimaryComponentProps<DropdownProps>(args)}>
      <Dropdown.Trigger>
        <Button visualType="secondary" iconRight="keyboard_arrow_down">
          Create
        </Button>
      </Dropdown.Trigger>

      <Dropdown.Content>
        <Dropdown.Item index={0} onClick={() => console.log('Lisa pöördumine')}>
          Access to health data
        </Dropdown.Item>
        <Dropdown.Item index={1} {...getSubcomponentProps(args, 'item')} onClick={() => console.log('Lisa toetus')}>
          Declaration of intent
        </Dropdown.Item>
        <Dropdown.Item index={2}>Contacts</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
};
```

### With Active Item

```tsx
export const WithActiveItem: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: () => {
    const [lang, setLang] = React.useState('ENG');
    const [filter, setFilter] = React.useState('Newest first');

    return (
      <Row>
        <Col width={2}>
          <Dropdown>
            <Dropdown.Trigger>
              <Button visualType="link" iconRight="expand_more">
                {lang}
              </Button>
            </Dropdown.Trigger>

            <Dropdown.Content>
              {['EST', 'ENG', 'RUS'].map((l, i) => (
                <Dropdown.Item key={l} index={i} active={lang === l} onClick={() => setLang(l)}>
                  {l}
                </Dropdown.Item>
              ))}
            </Dropdown.Content>
          </Dropdown>
        </Col>
        <Col width={3}>
          <Dropdown width={200}>
            <Dropdown.Trigger>
              <Button visualType="link" iconRight="expand_more">
                Sort: {filter}
              </Button>
            </Dropdown.Trigger>

            <Dropdown.Content>
              {['Newest first', 'Oldest first', 'Application name A–Z', 'Application name Z–A'].map((f, i) => (
                <Dropdown.Item key={f} index={i} active={filter === f} onClick={() => setFilter(f)}>
                  {f}
                </Dropdown.Item>
              ))}
            </Dropdown.Content>
// …
```

### With Action

```tsx
export const WithAction: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: () => (
    <Dropdown>
      <Dropdown.Trigger>
        <Button visualType="secondary" icon="add">
          Add
        </Button>
      </Dropdown.Trigger>

      <Dropdown.Content>
        <Dropdown.Item index={0} onClick={() => console.log('Lisa pöördumine')}>
          Create contact
        </Dropdown.Item>
        <Dropdown.Item index={1} onClick={() => console.log('Lisa toetus')}>
          Create application
        </Dropdown.Item>
        <Dropdown.Item index={2}>Create invoice</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
};
```

### With Icon

```tsx
export const WithIcon: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: () => (
    <Dropdown>
      <Dropdown.Trigger>
        <Button visualType="secondary" iconLeft="more_vert">
          More
        </Button>
      </Dropdown.Trigger>

      <Dropdown.Content>
        <Dropdown.Item index={0}>
          <Text>
            <Icon name="download" color="inherit" display="inline" /> Download
          </Text>
        </Dropdown.Item>
        <Dropdown.Item index={1}>
          <Text>
            <Icon name="add" color="inherit" display="inline" /> Add
          </Text>
        </Dropdown.Item>
        <Dropdown.Item index={2}>
          <Text>
            <Icon name="delete" color="inherit" display="inline" /> Delete
          </Text>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
};

// TODO(#1006): Checkbox and Radio items need `closeOnSelect={false}` until Dropdown.Item stops slotting form controls
```

### With Checkbox

```tsx
export const WithCheckbox: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: () => {
    const [cities, setCities] = React.useState<string[]>([]);

    const toggle = (value: string) => (_value: string, checked: boolean) => {
      setCities((prev) => (checked ? [...prev.filter((v) => v !== value), value] : prev.filter((v) => v !== value)));
    };

    return (
      <Dropdown>
        <Dropdown.Trigger>
          <Button visualType="primary" iconRight="keyboard_arrow_down">
            Locations ({cities.length})
          </Button>
        </Dropdown.Trigger>

        <Dropdown.Content>
          <Dropdown.Item index={0} asChild closeOnSelect={false}>
            <Checkbox
              id="parnu"
              label="Pärnu"
              value="parnu"
              checked={cities.includes('parnu')}
              onChange={toggle('parnu')}
              name=""
            />
          </Dropdown.Item>

          <Dropdown.Item index={1} asChild closeOnSelect={false}>
            <Checkbox
              id="tartu"
              label="Tartu"
              value="tartu"
              checked={cities.includes('tartu')}
              onChange={toggle('tartu')}
              name=""
            />
          </Dropdown.Item>

// …
```

### With Indented Items

```tsx
export const WithIndentedItems: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: () => {
    const [selected, setSelected] = React.useState<City[]>([]);

    const allChecked = selected.length === allCities.length;
    const noneChecked = selected.length === 0;
    const indeterminate = !allChecked && !noneChecked;

    const toggleAll = (_: string, checked: boolean) => {
      setSelected(checked ? allCities : []);
    };

    const toggleOne = (value: City) => (_: string, checked: boolean) => {
      setSelected((prev) => (checked ? [...prev.filter((v) => v !== value), value] : prev.filter((v) => v !== value)));
    };

    return (
      <Dropdown>
        <Dropdown.Trigger>
          <Button visualType="secondary" iconRight="keyboard_arrow_down">
            Locations ({selected.length})
          </Button>
        </Dropdown.Trigger>

        <Dropdown.Content>
          <Dropdown.Item index={0} asChild closeOnSelect={false}>
            <Checkbox
              id="all"
              label="All locations"
              checked={allChecked}
              indeterminate={indeterminate}
              onChange={toggleAll}
              name=""
              value=""
            />
          </Dropdown.Item>

          <Dropdown.Item index={1} asChild closeOnSelect={false} indent={1}>
            <Checkbox
// …
```

Full story source: `src/tedi/components/overlays/dropdown/dropdown.stories.tsx`.

## Related

`Icon`, `Text`, `Button`, `Search`, `Col`, `Row`, `OptionContent`
