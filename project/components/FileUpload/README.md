FileUpload from @tedi-design-system/react. Use via `window.Tedi.FileUpload` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Sizes, With Hint, Disabled, Validation Failed, Validation Success, Multiple With Individual Validation, Loading State, Multiple, Multiple Handled, Read Only Files, Pdf And Txt Only, Size Limited, Extension And Size Limit, Controlled Clearing.

## Props

```ts
import * as React from 'react';

/**
 * FileUpload from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/form/file-upload/file-upload.stories.tsx).
 */
export interface FileUploadProps {
  /** Unique HTML id for the file input, also used to associate the label and helper/error text for accessibility. When omitted, falls back to the surrounding `InputGroup`'s id or a generated one. */
  id?: string;
  /** Visible label for the field. May be omitted when the surrounding `InputGroup` provides its own label. */
  label?: string;
  /** Additional class names appended to the inner dropzone element (`tedi-file-upload`) — the content area that holds the file list and the upload button. Use this to tweak the dropzone itself (border, padding, background) without affecting the surrounding container. */
  className?: string;
  /** Additional class names appended to the outer container element (`tedi-file-upload__container`) that wraps the dropzone, file list, and helper/error states. Use this to tweak the component's outer shell (radius, outline, max-width) or to override size/state modifiers. */
  wrapperClassName?: string;
  /** The name of the file input field, used for form submission and accessibility. */
  name: string;
  /** A helper text or error message to display below the file upload field. */
  helper?: FeedbackTextProps;
  /** Specifies the allowed file types (e.g., "image/png, image/jpeg"). */
  accept?: string;
  /** Allows multiple file selection if `true`. Defaults to `false`. */
  multiple?: boolean;
  /** Callback function triggered when files are added or changed. */
  onChange?: (files: FileUploadFile[]) => void;
  /** An array of preloaded files that appear in the upload field by default. */
  defaultFiles?: FileUploadFile[];
  /** Callback function triggered when a file is removed. */
  onDelete?: (file: FileUploadFile) => void;
  /** Determines whether a "Clear" button is shown to remove all files. */
  hasClearButton?: boolean;
  /** A controlled list of uploaded files. If provided, `onChange` should be used to update them. */
  files?: FileUploadFile[];
  /** If `true`, prevents file selection and removal, making the field read-only. */
  readOnly?: boolean;
  /** Disables the file upload field, preventing interactions. */
  disabled?: boolean;
  /** Maximum allowed file size in bytes (e.g. `5 * 1024 ** 2` for 5 MB). */
  maxSize?: number;
  /** When `true`, files that fail validation stay in the list marked invalid instead of being discarded, so the failing file is shown; when `false`, only valid files are added. Applies to both single and multiple uploads. */
  keepRejectedFiles?: boolean;
  /** Whether to show the auto-generated restrictions hint (allowed types / max size) below the field. Turn it off when the same info is shown elsewhere to avoid a duplicate — rejection error messages still render. */
  showRestrictions?: boolean;
  /** Determines the visual size of the file upload field. Defaults to `"default"`. */
  size?: 'small' | 'default';
  /** Indicates whether the input field is required. If set to `true`, the required indicator (if provided) will be displayed next to the label. */
  required?: boolean;
  /** Controls the visibility of the label. Use `true` to hide the label visually while maintaining its space in the layout, or use 'keep-space' to hide it without collapsing the space it occupies. */
  hideLabel?: boolean | 'keep-space';
  /** Renders the label as a `<span>` instead of a `<label>` element. This is useful when the `Form` component already handles labels internally. */
  renderWithoutLabel?: boolean;
  /** Tooltip content to display when hovering over the info button. If provided, an info button with a tooltip will be rendered. */
  tooltip?: React.ReactNode;
  /** Additional props forwarded to the underlying `Label` component. Use `modifiers` to control how the label text wraps or breaks (e.g. `{ modifiers: 'nowrap' }`) so long labels don't distort the form layout. Breakpoint keys are supported for responsive wrapping (e.g. `{ modifiers: 'nowrap', sm: { modifiers: 'break-word' } }`). */
  labelProps?: LabelModifierProps;
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
type LabelModifierProps = BreakpointSupport<{
    modifiers?: LabelModifiers[] | LabelModifiers;
}>;
```

## Examples

### Default

```tsx
export const Default: Story = {
  args: {
    id: 'file-upload',
    name: 'file',
    label: 'Laadi fail üles',
  },
};
```

### Sizes

```tsx
export const Sizes: Story = {
  render: TemplateSizes,
  args: {
    label: 'Silt',
  },
};
```

### With Hint

```tsx
export const WithHint: Story = {
  args: {
    id: 'file-upload',
    name: 'file',
    label: 'Laadi fail üles',
    helper: {
      text: 'JPG, PNG, PDF suurusega kuni 0.001 MB.',
    },
  },
};
```

### Disabled

```tsx
export const Disabled: Story = {
  args: {
    id: 'file-upload-disabled',
    name: 'file-loading',
    label: 'Laadi fail üles',
    defaultFiles: [{ name: 'report.pdf' }],
    disabled: true,
  },
};
```

### Validation Failed

```tsx
export const ValidationFailed: Story = {
  args: {
    id: 'file-upload-validation-failed',
    name: 'file-validation-failed',
    label: 'Laadi fail üles',
    maxSize: 1024,
    accept: '.pdf,.txt',
    multiple: true,
    keepRejectedFiles: true,
    defaultFiles: [{ name: 'taotlus_scan_lk_1.pdf', isValid: false }],
  },
  render: (args) => (
    <FileUpload
      {...args}
      helper={{
        type: 'error',
        text: 'Tagasiside tekst',
      }}
    />
  ),
};
```

### Validation Success

```tsx
export const ValidationSuccess: Story = {
  args: {
    id: 'file-upload-validation-failed',
    name: 'file-validation-failed',
    label: 'Laadi fail üles',
    maxSize: 1024,
    accept: '.pdf,.txt',
    multiple: true,
    keepRejectedFiles: true,
    defaultFiles: [{ name: 'taotlus_scan_lk_1.pdf', isValid: false }],
  },
  render: (args) => (
    <FileUpload
      {...args}
      helper={{
        type: 'valid',
        text: 'Tagasiside tekst',
      }}
    />
  ),
};
```

Full story source: `src/tedi/components/form/file-upload/file-upload.stories.tsx`.

## Related

`Text`, `Col`, `Row`
