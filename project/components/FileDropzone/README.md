FileDropzone from @tedi-design-system/react. Use via `window.Tedi.FileDropzone` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, With Hint, Multiple, Validation Discarding Rejected Files, Validation Keeping Rejected Files, With Attachment Props, States.

## Props

```ts
import * as React from 'react';

/**
 * FileDropzone from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/file-dropzone/file-dropzone.stories.tsx).
 */
export interface FileDropzoneProps {
  /** Unique identifier for the underlying file input. Auto-generated when omitted. */
  id?: string;
  /** Additional CSS class names to apply to the dropzone for custom styling */
  className?: string;
  /** The name attribute for the file input, used for form submission and identifying the field. */
  name: string;
  /** Marks the field as required — adds the required indicator to the label. */
  required?: boolean;
  /** The text label displayed for the file dropzone, providing context for users. Defaults to the `LabelProvider`'s localised `file-dropzone.label` (e.g. "Lohista failid siia või klõpsa failide valimiseks" in Estonian). */
  label?: string;
  /** Provides helper text or feedback (such as an error or instruction message) to guide the user. */
  helper?: FeedbackTextProps;
  /** Disables the file dropzone, preventing user interaction. */
  disabled?: boolean;
  /** Overrides forwarded to each rendered `Attachment` (e.g. `icon`, `fileSize`, `progress`, `feedback`). Pass a function to vary per file. `FileDropzone` sets `name`, `isValid` and `isLoading` itself, and always appends a remove button to the `actions` slot (after any `actions` you provide here). */
  attachmentProps?: FileDropzoneAttachmentProps;
  /** Specifies the allowed file types (e.g., "image/png, image/jpeg"). */
  accept?: string;
  /** The maximum file size allowed for upload, in bytes (e.g. `5 * 1024 ** 2` for 5 MB). */
  maxSize?: number;
  /** Determines if multiple files can be uploaded at once. */
  multiple?: boolean;
  /** When `true`, files that fail validation (wrong type or over `maxSize`) stay in the list marked invalid instead of being discarded, so the failing file is shown under the dropzone; when `false`, only valid files are added. Applies to both single and multiple uploads; files are validated individually either way. */
  keepRejectedFiles?: boolean;
  /** An array of default files that are preloaded in the upload list. */
  defaultFiles?: FileUploadFile[];
  /** Callback function triggered when files are added or changed. */
  onChange?: (files: FileUploadFile[]) => void;
  /** Callback function triggered when a file is removed. */
  onDelete?: (file: FileUploadFile) => void;
  /** An optional array of files to be used in controlled mode. When provided, the hook uses this array as the source of truth for the file list instead of its internal state. The parent component is responsible for updating this prop in response to the `onChange` callback. If not provided, the hook operates in uncontrolled mode, managing its own internal file state via `defaultFiles` and user interactions. */
  files?: FileUploadFile[];
  /** How long (ms) the announcement message should be visible. */
  announcementTimeout?: number;
  /** Whether to show the auto-generated restrictions hint (allowed types / max size) below the field. Turn it off when the same information is presented elsewhere (e.g. a `tooltip`) to avoid a visible duplicate — rejection error messages are unaffected and still render. */
  showRestrictions?: boolean;
}

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
type FileDropzoneAttachmentProps = Partial<Omit<AttachmentProps, 'name'>> | ((file: FileUploadFile) => Partial<Omit<AttachmentProps, 'name'>>);
interface FileUploadFile extends Partial<File> {
    /**
     * A unique identifier for the file, useful for tracking files in a list.
     */
    id?: string;
    /**
     * Indicates if the file is currently being uploaded.
     */
    isLoading?: boolean;
    /**
     * Specifies whether the file passed validation checks (e.g., size, extension).
     */
    isValid?: boolean;
}
```

## Examples

### Default

```tsx
export const Default: Story = {};
```

### With Hint

```tsx
export const WithHint: Story = {
  render: Template,
  args: {
    name: 'file',
    accept: '.jpg,.png,.pdf',
    maxSize: 1024 ** 2,
    helper: {
      text: 'JPG, PNG, PDF suurusega kuni 1 MB.',
    },
  },
};
```

### Multiple

```tsx
export const Multiple: Story = {
  render: Template,
  args: {
    id: 'file-dropzone-multiple',
    name: 'file-multiple',
    multiple: true,
    accept: '.jpg,.png,.pdf',
    maxSize: 1024 ** 2,
    defaultFiles: [{ name: 'report.pdf' }, { name: 'report_1.pdf' }, { name: 'report_2.pdf' }],
    helper: {
      text: 'JPG, PNG, PDF suurusega kuni 1 MB.',
    },
  },
};

/**
 * Discarding rejected files (the default): valid files are still added and the ones that fail
 * validation are dropped, with their rejections summarised in a single error message.
 */
```

### Validation Discarding Rejected Files

```tsx
export const ValidationDiscardingRejectedFiles: Story = {
  name: 'Validation: discarding rejected files',
  args: {
    id: 'file-dropzone-discarding-rejected-files',
    name: 'file-discarding-rejected-files',
    maxSize: 1024 ** 2,
    accept: '.pdf,.txt',
    multiple: true,
    defaultFiles: [{ id: '1', name: 'taotlus.pdf' }],
  },
  render: (args) => (
    <Row>
      <Col md={6}>
        <FileDropzone
          {...args}
          helper={{
            type: 'error',
            text: 'Failid foto.png ja video.mov on sobimatud.',
          }}
        />
      </Col>
    </Row>
  ),
};

/**
 * Keeping rejected files (`keepRejectedFiles`): files that fail validation stay in the list with
 * their own invalid state instead of being discarded, so the user can see and remove the ones that
 * failed. Applies to both single and multiple uploads; files are validated individually either way.
 */
```

### Validation Keeping Rejected Files

```tsx
export const ValidationKeepingRejectedFiles: Story = {
  name: 'Validation: keeping rejected files',
  args: {
    id: 'file-dropzone-keeping-rejected-files',
    name: 'file-keeping-rejected-files',
    multiple: true,
    maxSize: 1024 ** 2,
    accept: '.pdf,.txt',
    keepRejectedFiles: true,
    defaultFiles: [
      { id: '1', name: 'taotlus_scan_lk_1.pdf' },
      { id: '2', name: 'taotlus_scan_lk_2.pdf' },
      { id: '3', name: 'taotlus_scan_lk_3.pdf', isValid: false },
      { id: '4', name: 'taotlus_scan_lk_4.pdf' },
      { id: '5', name: 'taotlus_scan_lk_5.pdf', isValid: false },
    ],
    helper: {
      text: 'Lubatud on ainult .pdf ja .txt failid suurusega kuni 1 MB.',
    },
  },
  render: (args) => (
    <Row>
      <Col md={6}>
        <FileDropzone
          {...args}
          attachmentProps={(file) => ({
            feedback: file.isValid === false ? { type: 'error', text: 'Fail on liiga suur' } : undefined,
          })}
        />
      </Col>
    </Row>
  ),
};

/**
 * The `attachmentProps` slot forwards extra props (e.g. `icon`, `fileSize`,
 * `progress`, `feedback`) onto each rendered `Attachment`. Pass a function to
 * vary the props per file — here the size and progress are sourced from each
 * file's own state, with the in-flight upload showing a `ProgressBar`.
 */
```

### With Attachment Props

```tsx
export const WithAttachmentProps: Story = {
  args: {
    id: 'file-dropzone-attachment-props',
    name: 'file-attachment-props',
    multiple: true,
    maxSize: 200 * 1024 ** 2,
    defaultFiles: [
      { id: '1', name: 'arve_2026_06.pdf', size: 1_200_000 },
      { id: '2', name: 'aastaaruanne_2025.pdf', size: 5_400_000 },
      { id: '3', name: 'esitlus.mp4', size: 140_000_000, isLoading: true },
    ],
  },
  render: (args) => {
    const progressByFile: Record<string, number> = { '3': 64 };
    return (
      <Row>
        <Col md={6}>
          <FileDropzone
            {...args}
            attachmentProps={(file) => ({
              icon: 'description',
              fileSize: formatBytes(file.size),
              progress: file.id ? progressByFile[file.id] : undefined,
            })}
          />
        </Col>
      </Row>
    );
  },
};

/**
 * All visual states in one place (mirrors the Figma states spec). Hover / active / focus are
 * forced with the pseudo-states addon; drop-over, disabled and error are driven by props/classes.
 * Toggle the Storybook theme to preview the dark-mode variants.
 */
```

Full story source: `src/tedi/components/form/file-dropzone/file-dropzone.stories.tsx`.

## Related

`Text`, `Col`, `Row`, `VerticalSpacing`
