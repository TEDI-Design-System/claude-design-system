OptionContent from @tedi-design-system/react. Use via `window.Tedi.OptionContent` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `OptionContent.Label`, `OptionContent.Meta`.

Variants (see `preview.html`): Default, Items, With Checkbox, With Radio, With Icon, With Description, With Tree, States, Inside Select, Inside Dropdown, Inside Search, Inside Popover.

## Props

```ts
import * as React from 'react';

/**
 * OptionContent from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/misc/option-content/option-content.stories.tsx).
 */
export interface OptionContentProps {
  /** Content of the value row — typically `OptionContent.Label` and optionally `OptionContent.Meta`, but any node is allowed. */
  children?: React.ReactNode;
  /** Selection-indicator type: - `default` — no indicator - `checkbox` — checkbox indicator (multi-select) - `radio` — radio indicator (single-select listbox) */
  type?: OptionContentType;
  /** Arrange the label and meta side-by-side (`horizontal`) or stacked (`vertical`, e.g. a title with a description below). */
  layout?: OptionContentLayout;
  /** Whether the indicator renders as selected (checked). */
  selected?: boolean;
  /** Whether the checkbox indicator renders as indeterminate. Ignored for other types. */
  indeterminate?: boolean;
  /** Whether the row renders as disabled (dims the indicator and text). */
  disabled?: boolean;
  /** Leading icon, rendered before the content. Accepts an icon name or full `IconProps`. */
  icon?: string | IconProps;
  /** How the selection indicator is exposed to assistive tech: - `presentation` (default) — the indicator is `aria-hidden`; the interactive parent owns selection (menu pattern: `aria-checked` on the `DropdownItem`). - `control` — the indicator itself carries `role="checkbox"`/`"radio"`, `aria-checked` and is named via `aria-labelledby` from `OptionContent.Label` (listbox pattern, e.g. inside a `Select` option). Requires a `Label` child. */
  indicatorSemantics?: 'presentation' | 'control';
  /** Additional class name. */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type OptionContentType = 'default' | 'checkbox' | 'radio';
type OptionContentLayout = 'horizontal' | 'vertical';
type IconProps = IconSharedProps & (IconWithBackgroundProps | IconWithoutBackgroundProps);
```

## Examples

### Default

```tsx
export const Default: Story = {
  args: {
    type: 'default',
    layout: 'horizontal',
    selected: false,
    disabled: false,
  },
  render: (args) => (
    <div style={{ width: 280 }}>
      <OptionContent {...args}>
        <OptionContent.Label>Option 1</OptionContent.Label>
      </OptionContent>
    </div>
  ),
};

/**
 * Plain items, and a nested set indented by level.
 */
```

### Items

```tsx
export const Items: Story = {
  render: () => (
    <Row>
      <Menu>
        {['Access to health data', 'Declaration of intent', 'Contacts'].map((text, i) => (
          <DropdownItem key={text} index={i} onClick={noop}>
            <OptionContent>
              <OptionContent.Label>{text}</OptionContent.Label>
            </OptionContent>
          </DropdownItem>
        ))}
      </Menu>

      <Menu>
        {[
          { text: '1st level' },
          { text: '2nd level', indent: 1 },
          { text: '3rd level', indent: 2 },
          { text: '3rd level', indent: 2 },
          { text: '4th level', indent: 3 },
        ].map((level, i) => (
          <DropdownItem key={i} index={i} indent={level.indent} onClick={noop}>
            <OptionContent>
              <OptionContent.Label>{level.text}</OptionContent.Label>
            </OptionContent>
          </DropdownItem>
        ))}
      </Menu>
    </Row>
  ),
};

/**
 * Multi-select checkboxes — hierarchical (parent + indented children) and flat.
 */
```

### With Checkbox

```tsx
export const WithCheckbox: Story = {
  render: function WithCheckboxExample() {
    const [checked, setChecked] = useState<string[]>(['Tartu', 'Locations']);
    const toggle = (key: string) =>
      setChecked((current) => (current.includes(key) ? current.filter((k) => k !== key) : [...current, key]));

    const item = (text: string, indent?: number, indeterminate?: boolean) => (
      <DropdownItem
        role="menuitemcheckbox"
        aria-checked={checked.includes(text)}
        closeOnSelect={false}
        indent={indent}
        onClick={() => toggle(text)}
      >
        <OptionContent type="checkbox" selected={checked.includes(text)} indeterminate={indeterminate}>
          <OptionContent.Label>{text}</OptionContent.Label>
        </OptionContent>
      </DropdownItem>
    );

    return (
      <Row>
        <Menu>
          {item('Locations', undefined, !checked.includes('Tallinn'))}
          {item('Tallinn', 1)}
          {item('Tartu', 1)}
          {item('Doctors')}
          {item('Mari Allikas', 1)}
          {item('Tõnu Liblikas', 1)}
        </Menu>

        <Menu>
          {item('Hospitals')}
          {item('Pharmacies')}
          {item('Laboratories')}
        </Menu>
      </Row>
    );
  },
};
```

### With Radio

```tsx
export const WithRadio: Story = {
  render: function WithRadioExample() {
    const [selected, setSelected] = useState('Tallinn');
    return (
      <Menu>
        {['Tallinn', 'Tartu', 'Elva', 'Rakvere'].map((city, i) => (
          <DropdownItem
            key={city}
            index={i}
            role="menuitemradio"
            aria-checked={selected === city}
            closeOnSelect={false}
            onClick={() => setSelected(city)}
          >
            <OptionContent type="radio" selected={selected === city}>
              <OptionContent.Label>{city}</OptionContent.Label>
            </OptionContent>
          </DropdownItem>
        ))}
      </Menu>
    );
  },
};
```

### With Icon

```tsx
export const WithIcon: Story = {
  render: () => (
    <Row>
      <Menu>
        {['Access to health data', 'Declaration of intent', 'Contacts'].map((text, i) => (
          <DropdownItem key={text} index={i} onClick={noop}>
            <OptionContent>
              <OptionContent.Label>{text}</OptionContent.Label>
              <OptionContent.Meta>
                <Icon name="arrow_forward" size={18} />
              </OptionContent.Meta>
            </OptionContent>
          </DropdownItem>
        ))}
      </Menu>

      <Menu>
        {[
          ['Download', 'download'],
          ['Add', 'add'],
          ['Delete', 'delete'],
        ].map(([text, icon], i) => (
          <DropdownItem key={text} index={i} onClick={noop}>
            <OptionContent icon={icon}>
              <OptionContent.Label>{text}</OptionContent.Label>
            </OptionContent>
          </DropdownItem>
        ))}
      </Menu>
    </Row>
  ),
};
```

### With Description

```tsx
export const WithDescription: Story = {
  render: function WithDescriptionExample() {
    const [active, setActive] = useState('Access to health data');
    const access = [
      ['Access to health data', 'Doctors will be able to see your health data'],
      ['Access to medications and health data', 'Doctors will be able to see your medications and health data'],
      ['Access to all', 'Doctors will be able to see all your information'],
    ];
    const cities = [
      ['Tallinn', '3 timeslots available'],
      ['Tartu', '4 timeslots available'],
      ['Elva', '7 timeslots available'],
      ['Rakvere', '3 timeslots available'],
    ];

    return (
      <Row>
        <Menu width={320}>
          {access.map(([title, desc], i) => (
            <DropdownItem
              key={title}
              index={i}
              active={active === title}
              closeOnSelect={false}
              onClick={() => setActive(title)}
            >
              <OptionContent layout="vertical">
                <OptionContent.Label>{title}</OptionContent.Label>
                <OptionContent.Meta>{desc}</OptionContent.Meta>
              </OptionContent>
            </DropdownItem>
          ))}
        </Menu>

        <Menu width={320}>
          {cities.map(([city, meta], i) => (
            <DropdownItem key={city} index={i} onClick={noop}>
              <OptionContent>
                <OptionContent.Label>{city}</OptionContent.Label>
                <OptionContent.Meta>{meta}</OptionContent.Meta>
// …
```

Full story source: `src/tedi/components/misc/option-content/option-content.stories.tsx`.

## Related

`Icon`, `Button`, `Search`, `Select`, `Toggle`, `Dropdown`, `Popover`
