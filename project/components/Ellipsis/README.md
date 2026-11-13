Ellipsis from @tedi-design-system/react. Use via `window.Tedi.Ellipsis` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Responsive Example, Leading Start, Responsive With Custom Popover.

## Props

```ts
import * as React from 'react';

/**
 * Ellipsis from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/misc/ellipsis/ellipsis.stories.tsx).
 */
export interface EllipsisProps {
  /** The content to be displayed inside the ellipsis container. */
  children: React.ReactNode;
  /** The maximum number of lines before truncating the text with an ellipsis. If the content exceeds this limit, it will be truncated. Applies to the `end` (multi-line) position only. */
  lineClamp?: number;
  /** Where the ellipsis is placed. - `end` — trailing ellipsis, multi-line (clamped by `lineClamp`). - `start` — leading ellipsis, single-line (keeps the end of the text visible, e.g. for file paths or IDs). */
  position?: EllipsisPosition;
  /** Determines whether a popover should be displayed when the text is truncated. If `true`, hovering over the truncated text will show the full content in a popover. */
  popover?: boolean;
  /** Adds a custom CSS class to the Ellipsis element for additional styling or theming purposes */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type EllipsisPosition = 'start' | 'end';
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,

  args: {
    children: (
      <span>
        Any inline <b>content (even bold)</b>, that is too long for the wrapper
        <span className="text-small"> and dont fit in x number of rows</span>
      </span>
    ),
  },
};

/**
 * Resize the window to see that the ellipsis and popover appear only when content doesn't fit
 */
```

### Responsive Example

```tsx
export const ResponsiveExample: Story = {
  args: {
    lineClamp: 1,
    children: (
      <span>
        Any inline <b>content (even bold)</b>, that is too long for the wrapper
        <span className="text-small"> and dont fit in x number of rows</span>
      </span>
    ),
  },
};

/**
 * With `position="start"` the text is truncated on a single line with a **leading**
 * ellipsis, keeping the end of the string visible. Useful for file paths, URLs or IDs
 * where the tail is the most distinguishing part. `lineClamp` does not apply here.
 */
```

### Leading Start

```tsx
export const LeadingStart: Story = {
  render: Template,
  args: {
    position: 'start',
    children: 'https://www.tedi.ee/some/very/long/path/to/a/specific-resource-identifier.pdf',
  },
};

/**
 * Example when popover is shown even when text doesn't ellipse.
 * Use this when you want to show popover always or with custom content
 */
```

### Responsive With Custom Popover

```tsx
export const ResponsiveWithCustomPopover: Story = {
  args: {
    lineClamp: 1,
    popover: false,
    children: (
      <Popover openWith="hover" focusManager={{ modal: false }}>
        <Popover.Trigger>
          <span role="button">
            Any inline <b>content (even bold)</b>, that is too long for the wrapper
            <span className="text-small"> and dont fit in x number of rows</span>
          </span>
        </Popover.Trigger>
        <Popover.Content>Custom popover content, shown also when text doesn&apos;t Ellipse</Popover.Content>
      </Popover>
    ),
  },
};
```

Full story source: `src/tedi/components/misc/ellipsis/ellipsis.stories.tsx`.
