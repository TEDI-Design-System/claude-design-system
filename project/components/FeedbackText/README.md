FeedbackText from @tedi-design-system/react. Use via `window.Tedi.FeedbackText` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Helper, Error, Valid, Position Left, Position Right, Visual Test.

## Props

```ts
import * as React from 'react';

/**
 * FeedbackText from @tedi-design-system/react@21.0.0 (stories: ./src/tedi/components/form/feedback-text/feedback-text.stories.tsx).
 */
export interface FeedbackTextProps {
  /** Helper text */
  text: React.ReactNode | React.ReactNode[];
  /** ID to reference the helper from aria-describedby attributes. If omitted, then the id might be set through a parent component. */
  id?: string;
  /** Additional custom class. */
  className?: string;
  /** Type of form-helper. */
  type?: FeedbackTextType;
  /** Position of the helper. */
  position?: FeedbackTextPosition;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type FeedbackTextType = 'hint' | 'valid' | 'error';
type FeedbackTextPosition = 'left' | 'right';
```

## Examples

### Helper

```tsx
export const Helper: Story = {
  args: {
    text: 'I am a hint text',
  },
};
```

### Error

```tsx
export const Error: Story = {
  args: {
    text: 'I am an error text',
    type: 'error',
  },
};
```

### Valid

```tsx
export const Valid: Story = {
  args: {
    text: 'I am a valid text',
    type: 'valid',
  },
};
```

### Position Left

```tsx
export const PositionLeft: Story = {
  args: {
    text: 'I am a hint text',
    position: 'left',
  },
};
```

### Position Right

```tsx
export const PositionRight: Story = {
  args: {
    text: 'I am a valid text',
    type: 'valid',
    position: 'right',
  },
};
```

### Visual Test

```tsx
export const VisualTest: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: { chromatic: { disableSnapshot: false, viewports: VISUAL_TEST_VIEWPORTS } },
  render: () => (
    <VerticalSpacing>
      {visualTestVariants.map(({ label, story }) => (
        <Row key={label}>
          <Col lg={2} xs={12}>
            <Text modifiers="bold">{label}</Text>
          </Col>
          <Col>
            <VisualTestStory story={story} component={FeedbackText} />
          </Col>
        </Row>
      ))}
    </VerticalSpacing>
  ),
};
```

Full story source: `src/tedi/components/form/feedback-text/feedback-text.stories.tsx`.

## Related

`Text`, `Col`, `Row`, `VerticalSpacing`
