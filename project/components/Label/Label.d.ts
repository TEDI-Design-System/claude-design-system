import * as React from 'react';

/**
 * Label from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/content/label/label.stories.tsx).
 */
export interface LabelProps {
  /** The element type to render. This can be any valid HTML element, allowing flexibility in how the label is used. Defaults to 'label'. */
  as?: ElementType;
  /** If true, displays a required symbol (*) after the label text, indicating that the associated input is mandatory. */
  required?: boolean;
  /** Tooltip content to display when hovering over the info button. Accepts rich content (e.g. bold text, links), not just a plain string. If provided, an info button with a tooltip will be rendered. */
  tooltip?: ReactNode;
  /** If true, applies a bold font weight to the label text. */
  isBold?: boolean;
  /** If true, applies a small font size to the label text. */
  isSmall?: boolean;
  /** Text modifiers that control how the label text is rendered, e.g. wrapping and line-breaking behavior (`'nowrap'`, `'break-word'`, `'break-all'`, `'break-spaces'`). Reuses the same modifiers as the `Text` component. Useful to prevent long labels from breaking across multiple lines and distorting form layouts. */
  modifiers?: LabelModifiers[] | LabelModifiers;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<LabelBreakpointProps>;
  md?: Partial<LabelBreakpointProps>;
  lg?: Partial<LabelBreakpointProps>;
  xl?: Partial<LabelBreakpointProps>;
  xxl?: Partial<LabelBreakpointProps>;
}
// Also accepts 265 standard React / HTML attributes of its root element.

// Referenced types, resolved one level deep (see the story source for the rest).
type LabelModifiers = Extract<TextModifiers, 'nowrap' | 'break-all' | 'break-word' | 'break-spaces' | 'italic' | 'uppercase' | 'lowercase' | 'capitalize'>;
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type LabelBreakpointProps = {
    /**
     * If true, applies a bold font weight to the label text.
     * @default false
     */
    isBold?: boolean;
    /**
     * If true, applies a small font size to the label text.
     * @default false
     */
    isSmall?: boolean;
    /**
     * Text modifiers that control how the label text is rendered, e.g. wrapping and
     * line-breaking behavior (`'nowrap'`, `'break-word'`, `'break-all'`, `'break-spaces'`).
     * Reuses the same modifiers as the `Text` component. Useful to prevent long labels
     * from breaking across multiple lines and distorting form layouts.
     */
    modifiers?: LabelModifiers[] | LabelModifiers;
};
