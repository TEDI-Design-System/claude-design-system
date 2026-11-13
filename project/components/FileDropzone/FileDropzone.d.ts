import * as React from 'react';

/**
 * FileDropzone from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/form/file-dropzone/file-dropzone.stories.tsx).
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
