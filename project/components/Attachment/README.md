Attachment from @tedi-design-system/react. Use via `window.Tedi.Attachment` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Read Only, With Progress, With File Size, With Icon, Without Delete Button, With Different Actions, Vertical, With Error, Labeled Actions.

## Props

```ts
import * as React from 'react';

/**
 * Attachment from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/misc/attachment/attachment.stories.tsx).
 */
export interface AttachmentProps {
  /** File name (required). */
  name: string;
  /** Hint / error message shown below the card, wired via `aria-describedby`. */
  feedback?: FeedbackTextProps;
  /** Pre-formatted file size (e.g. `'1.2 MB'`), shown after the name. Format it yourself. */
  fileSize?: string;
  /** Material icon name for a leading file-type glyph. */
  icon?: string | null;
  /** Action buttons (download, delete, …) shown on the right. `Button`s default to `visualType="neutral"`. */
  actions?: React.ReactNode;
  /** Show an upload progress bar. */
  isLoading?: boolean;
  /** Upload progress (0..100); only shown while `isLoading`. */
  progress?: number;
  /** Hint text under the progress bar (e.g. `'Üleslaadimine'`); only shown while `isLoading`. */
  progressLabel?: string;
  /** `false` switches the card to the error state (danger surface + warning glyph). */
  isValid?: boolean;
  /** Force the layout: `'vertical'` stacks the content, `'horizontal'` keeps one row. When omitted, derived from the viewport via `verticalBelow`. */
  direction?: AttachmentDirection;
  /** Breakpoint below which the layout auto-switches to vertical (when `direction` is unset). */
  verticalBelow?: Breakpoint;
  /** Additional class name on the root element. */
  className?: string;
}
// Also accepts 260 standard React / HTML attributes of its root element.

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
type AttachmentDirection = 'horizontal' | 'vertical';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: renderWithDelete,
};
```

### Read Only

```tsx
export const ReadOnly: StoryFn<AttachmentProps> = () => (
  <div style={{ maxWidth: 480 }}>
    <VerticalSpacing size={0.5}>
      <Attachment name="Kodukülastusakt_Triin.pdf" actions={downloadAction} />
      <Attachment name="Lisa_5.pdf" actions={downloadAction} />
      <Attachment name="Graafik_2025.pdf" actions={downloadAction} />
    </VerticalSpacing>
  </div>
);
```

### With Progress

```tsx
export const WithProgress: StoryFn<AttachmentProps> = () => (
  <div style={{ maxWidth: 480 }}>
    <VerticalSpacing size={0.5}>
      <Attachment
        name="Kodukülastusakt_Triin.pdf"
        isLoading
        progress={34}
        progressLabel="Üleslaadimine"
        actions={deleteAction}
      />
      <Attachment name="Kodukülastusakt_Triin.pdf" fileSize="0,9 MB" isLoading progress={34} actions={deleteAction} />
      <Attachment
        name="Kodukülastusakt_Triin.pdf"
        fileSize="0,9 MB"
        isLoading
        progress={34}
        progressLabel="Üleslaadimine"
        actions={
          <>
            {downloadAction}
            {deleteAction}
          </>
        }
      />
    </VerticalSpacing>
  </div>
);
```

### With File Size

```tsx
export const WithFileSize: Story = {
  render: renderWithDelete,
  args: {
    fileSize: '0,9 MB',
  },
};
```

### With Icon

```tsx
export const WithIcon: StoryFn<AttachmentProps> = () => (
  <div style={{ maxWidth: 480 }}>
    <VerticalSpacing size={0.5}>
      <Attachment name="Kodukülastusakt_Triin.pdf" fileSize="0,9 MB" icon="description" actions={deleteAction} />
      <Attachment name="Kodukülastusakt_Triin.pdf" fileSize="0,9 MB" icon="imagesmode" actions={deleteAction} />
      <Attachment name="Kodukülastusakt_Triin.pdf" fileSize="0,9 MB" icon="audio_file" actions={deleteAction} />
      <Attachment name="Kodukülastusakt_Triin.pdf" fileSize="0,9 MB" icon="picture_as_pdf" actions={deleteAction} />
    </VerticalSpacing>
  </div>
);
```

### Without Delete Button

```tsx
export const WithoutDeleteButton: StoryFn<AttachmentProps> = () => (
  <div style={{ maxWidth: 480 }}>
    <VerticalSpacing size={0.5}>
      <Attachment name="Kodukülastusakt_Triin.pdf" fileSize="0,9 MB" />
      <Attachment name="Kodukülastusakt_Triin.pdf" fileSize="0,9 MB" />
    </VerticalSpacing>
  </div>
);

/**
 * Pass any combination of neutral icon buttons to the `actions` slot — view,
 * download, delete, or a mix. The last row pairs the actions with a progress bar.
 */
```

Full story source: `src/tedi/components/misc/attachment/attachment.stories.tsx`.

## Related

`Button`, `HideAt`, `ShowAt`, `VerticalSpacing`, `Dropdown`, `Tooltip`
