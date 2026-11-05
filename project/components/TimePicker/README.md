TimePicker from @tedi-design-system/react. Use via `window.Tedi.TimePicker` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, With Initial Value, Predefined Slots, Controlled Example.

## Props

```ts
import * as React from 'react';

/**
 * TimePicker from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/time-picker/time-picker.stories.tsx).
 */
export interface TimePickerProps {
  /** Currently selected time in "HH:mm" format (24-hour). */
  value?: string;
  /** Initial time value for uncontrolled mode. Should be in "HH:mm" format. */
  defaultValue?: string;
  /** Callback fired when the user selects a new time. Returns the selected time in "HH:mm" format. */
  onChange?: (time: string) => void;
  /** Minute step interval for the minute wheel. Determines which minute values are shown (e.g. 00, 05, 10, ..., 55). */
  stepMinutes?: number;
  /** When provided, the component switches from wheel mode to grid mode. Displays a list/grid of predefined time slots instead of scrollable wheels. Each string must be in "HH:mm" format. */
  availableTimes?: string[];
  /** Variant of the grid rendered when `availableTimes` is provided: - 'buttons' – buttons grid - 'radio' – radio buttons grid */
  gridVariant?: 'button' | 'radio';
  /** Additional CSS class name to apply to the root element. Useful for custom styling and layout overrides. */
  className?: string;
  /** Whether to render the surrounding card (border, background, radius). Set to `false` when embedding inside a parent that already provides its own surface — e.g. alongside a calendar inside `DateTimeField`. The inner gradient masks and column separators are preserved either way. */
  bordered?: boolean;
}
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,
  args: {
    stepMinutes: 1,
  },
};
```

### With Initial Value

```tsx
export const WithInitialValue: Story = {
  render: Template,
  args: {
    value: '12:30',
  },
};
```

### Predefined Slots

```tsx
export const PredefinedSlots: Story = {
  render: () => {
    const [timeButton, setTimeButton] = useState<string | undefined>();
    const [timeRadio, setTimeRadio] = useState<string | undefined>();

    const availableTimes = ['08:00', '08:30', '09:00', '09:15', '09:30', '10:00', '10:30', '11:00', '12:00'];

    return (
      <VerticalSpacing>
        <Row>
          <Col width={5}>
            <Text>gridVariant = button</Text>
            <TimePicker value={timeButton} availableTimes={availableTimes} onChange={setTimeButton} />
          </Col>
          <Col width={5}>
            <Text>gridVariant = radio</Text>
            <TimePicker gridVariant="radio" value={timeRadio} availableTimes={availableTimes} onChange={setTimeRadio} />
          </Col>
        </Row>
      </VerticalSpacing>
    );
  },
};
```

### Controlled Example

```tsx
export const ControlledExample: StoryFn<TimePickerProps> = () => {
  const [time, setTime] = useState<string>('09:00');

  return (
    <Row>
      <Col width={4} sm={12}>
        <TimePicker value={time} onChange={setTime} />
      </Col>

      <Col width={8} sm={12} className="flex align-items-center">
        <Text>Selected time: {time}</Text>
      </Col>
    </Row>
  );
};
ControlledExample.parameters = { chromatic: { disableSnapshot: true } };
```

Full story source: `src/tedi/components/form/time-picker/time-picker.stories.tsx`.

## Related

`Text`, `Col`, `Row`, `VerticalSpacing`
