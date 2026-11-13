FeedbackText from @tedi-design-system/react. Use via `window.Tedi.FeedbackText` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Helper, Error, Valid, Position Left, Position Right.

## Props

```ts
import * as React from 'react';

/**
 * FeedbackText from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/form/feedback-text/feedback-text.stories.tsx).
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

Full story source: `src/tedi/components/form/feedback-text/feedback-text.stories.tsx`.
