Tabs from @tedi-design-system/react. Use via `window.Tedi.Tabs` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `Tabs.List`, `Tabs.Trigger`, `Tabs.Content`.

Variants (see `preview.html`): Default, With Icons, With Status Badge, States, Controlled, With Disabled Tab, Overflow Behavior, With Sub Tabs.

## Props

```ts
import * as React from 'react';

/**
 * Tabs from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/navigation/tabs/tabs.stories.tsx).
 */
export interface TabsProps {
  /** Tabs content — should include Tabs.List and Tabs.Content elements */
  children: React.ReactNode;
  /** Controlled active tab id. Use together with onChange. */
  value?: string;
  /** Default active tab id for uncontrolled usage. */
  defaultValue?: string;
  /** Callback fired when the active tab changes */
  onChange?: (tabId: string) => void;
  /** Additional class name(s) */
  className?: string;
}
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab-1">
      <Tabs.List aria-label="Tervise sakid">
        <Tabs.Trigger id="tab-1">Terviseteekond</Tabs.Trigger>
        <Tabs.Trigger id="tab-2">Haiguste kulg</Tabs.Trigger>
        <Tabs.Trigger id="tab-3">Ravimite ajalugu</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content id="tab-1">
        <CardContent padding={{ vertical: 1.5, horizontal: 1 }}>
          <Text>{content.healthTimeline}</Text>
        </CardContent>
      </Tabs.Content>
      <Tabs.Content id="tab-2">
        <CardContent padding={{ vertical: 1.5, horizontal: 1 }}>
          <Text>{content.diseaseCourse}</Text>
        </CardContent>
      </Tabs.Content>
      <Tabs.Content id="tab-3">
        <CardContent padding={{ vertical: 1.5, horizontal: 1 }}>
          <Text>{content.medication}</Text>
        </CardContent>
      </Tabs.Content>
    </Tabs>
  ),
};
```

### With Icons

```tsx
export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="tab-1">
      <Tabs.List aria-label="Ikoonidega sakid">
        <Tabs.Trigger id="tab-1" icon="table_chart">
          Tabel
        </Tabs.Trigger>
        <Tabs.Trigger id="tab-2" icon="grid_on">
          Ruudustik
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content id="tab-1">
        <CardContent padding={{ vertical: 1.5, horizontal: 1 }}>
          <Text>{content.table}</Text>
        </CardContent>
      </Tabs.Content>
      <Tabs.Content id="tab-2">
        <CardContent padding={{ vertical: 1.5, horizontal: 1 }}>
          <Text>{content.grid}</Text>
        </CardContent>
      </Tabs.Content>
    </Tabs>
  ),
};
```

### With Status Badge

```tsx
export const WithStatusBadge: Story = {
  render: () => (
    <Tabs defaultValue="tab-1">
      <Tabs.List aria-label="Olekumärgisega sakid">
        <Tabs.Trigger id="tab-1">
          <Ellipsis lineClamp={1} popover={true}>
            Terviseteekond
          </Ellipsis>{' '}
          <StatusBadge color="brand">Esitatud</StatusBadge>
        </Tabs.Trigger>
        <Tabs.Trigger id="tab-2">
          <span style={{ position: 'relative' }}>
            Lugemata teated&nbsp;
            <StatusIndicator type="danger" position="top-right" />
          </span>
        </Tabs.Trigger>
        <Tabs.Trigger id="tab-3">Ravimite ajalugu</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content id="tab-1">
        <CardContent padding={{ vertical: 1.5, horizontal: 1 }}>
          <Text>{content.healthTimeline}</Text>
        </CardContent>
      </Tabs.Content>
      <Tabs.Content id="tab-2">
        <CardContent padding={{ vertical: 1.5, horizontal: 1 }}>
          <Text>{content.unreadMessages}</Text>
        </CardContent>
      </Tabs.Content>
      <Tabs.Content id="tab-3">
        <CardContent padding={{ vertical: 1.5, horizontal: 1 }}>
          <Text>{content.medication}</Text>
        </CardContent>
      </Tabs.Content>
    </Tabs>
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
    a11y: { test: 'off' },
    pseudo: {
      hover: '#Hover-tab',
      active: '#Active-tab',
      focusVisible: '#Focus-tab',
    },
  },
};
```

### Controlled

```tsx
export const Controlled: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: () => {
    const [currentTab, setCurrentTab] = useState('tab-1');

    return (
      <VerticalSpacing>
        <p>
          Current tab: <strong>{currentTab}</strong>
        </p>
        <Tabs value={currentTab} onChange={setCurrentTab}>
          <Tabs.List aria-label="Juhitavad sakid">
            <Tabs.Trigger id="tab-1">Terviseteekond</Tabs.Trigger>
            <Tabs.Trigger id="tab-2">Haiguste kulg</Tabs.Trigger>
            <Tabs.Trigger id="tab-3">Ravimite ajalugu</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content id="tab-1">
            <Text>{content.healthTimeline}</Text>
          </Tabs.Content>
          <Tabs.Content id="tab-2">
            <Text>{content.diseaseCourse}</Text>
          </Tabs.Content>
          <Tabs.Content id="tab-3">
            <Text>{content.medication}</Text>
          </Tabs.Content>
        </Tabs>
      </VerticalSpacing>
    );
  },
};
```

### With Disabled Tab

```tsx
export const WithDisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="tab-1">
      <Tabs.List aria-label="Keelatud sakiga sakid">
        <Tabs.Trigger id="tab-1">Terviseteekond</Tabs.Trigger>
        <Tabs.Trigger id="tab-2">Haiguste kulg</Tabs.Trigger>
        <Tabs.Trigger id="tab-3" disabled>
          Ravimite ajalugu
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content id="tab-1">
        <CardContent padding={{ vertical: 1.5, horizontal: 1 }}>
          <Text>{content.healthTimeline}</Text>
        </CardContent>
      </Tabs.Content>
      <Tabs.Content id="tab-2">
        <CardContent padding={{ vertical: 1.5, horizontal: 1 }}>
          <Text>{content.diseaseCourse}</Text>
        </CardContent>
      </Tabs.Content>
      <Tabs.Content id="tab-3">
        <CardContent padding={{ vertical: 1.5, horizontal: 1 }}>
          <Text>{content.medication}</Text>
        </CardContent>
      </Tabs.Content>
    </Tabs>
  ),
};
```

Full story source: `src/tedi/components/navigation/tabs/tabs.stories.tsx`.

## Related

`Heading`, `Text`, `Button`, `ButtonGroup`, `Col`, `Row`, `VerticalSpacing`, `Ellipsis`, `StatusBadge`, `StatusIndicator`
