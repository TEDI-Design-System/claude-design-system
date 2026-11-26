Tabs from @tedi-design-system/react. Use via `window.Tedi.Tabs` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `Tabs.List`, `Tabs.Trigger`, `Tabs.Content`.

Variants (see `preview.html`): Default, With Icons, With Status Badge, States, Controlled, With Disabled Tab, Overflow Behavior, With Sub Tabs, Visual Test.

## Props

```ts
import * as React from 'react';

/**
 * Tabs from @tedi-design-system/react@21.0.0 (stories: ./src/tedi/components/navigation/tabs/tabs.stories.tsx).
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
  render: () => <DefaultTemplate />,
};
```

### With Icons

```tsx
export const WithIcons: Story = {
  render: () => <WithIconsTemplate />,
};
```

### With Status Badge

```tsx
export const WithStatusBadge: Story = {
  render: () => <WithStatusBadgeTemplate />,
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
  parameters: { visualTest: false },
  render: () => {
    const [currentTab, setCurrentTab] = useState('tab-1');

    return (
      <VerticalSpacing>
        <p>
          Current tab: <strong>{currentTab}</strong>
        </p>
        <Tabs value={currentTab} onChange={setCurrentTab}>
          <Tabs.List aria-label="Terviseandmed">
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
  render: () => <WithDisabledTabTemplate />,
};
```

Full story source: `src/tedi/components/navigation/tabs/tabs.stories.tsx`.

## Related

`Heading`, `Text`, `Button`, `ButtonGroup`, `Col`, `Row`, `VerticalSpacing`, `Ellipsis`, `StatusBadge`, `StatusIndicator`
