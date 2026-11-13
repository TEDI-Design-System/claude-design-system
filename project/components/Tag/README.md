Tag from @tedi-design-system/react. Use via `window.Tedi.Tag` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Primary, Secondary, Danger, Ellipsis.

## Props

```ts
import * as React from 'react';

/**
 * Tag from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/tags/tag/tag.stories.tsx).
 */
export interface TagProps {
  /** The content inside the Tag. Typically this will be text or any JSX elements to be displayed. */
  children: React.ReactNode;
  /** Function to be called when the close button is clicked. If provided, a close button will be rendered inside the Tag. */
  onClose?: MouseEventHandler<HTMLButtonElement>;
  /** Extra props forwarded to the inner close button (when `onClose` is set). Lets consumers wire up keyboard handlers, tab focus, or event isolation without reaching past the Tag API. `onClick` and `iconSize` are owned by Tag and can't be overridden here. */
  closeButtonProps?: Omit<ClosingButtonProps, 'onClick' | 'iconSize'>;
  /** Determines whether the Tag is in a loading state */
  isLoading?: boolean;
  /** Overrides the Tag's implicit live-region role. Tags default to `role="status"` so they are announced by assistive tech. When a Tag is rendered as static content inside a list — and additions/removals are announced elsewhere — pass e.g. `role="presentation"` so it is not read as a live status, which otherwise makes some screen readers (e.g. JAWS) announce the content twice on focus. */
  role?: React.AriaRole;
  /** Determines Tag color When true, the Tag will be styled accordingly and an error icon will be displayed. */
  color?: TagColor;
  /** Truncates the label when the Tag is width-constrained, revealing the full text in a popover on hover/focus. `end` shows a trailing ellipsis (`Long label…`); `start` shows a leading one (`…label`), keeping the most significant tail (e.g. dates, IDs) visible. `false` never truncates — the label wraps and the Tag keeps its full width. */
  ellipsis?: TagEllipsis;
  /** Additional classes to apply custom styles to the Tag. */
  className?: string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<TagBreakpointProps>;
  md?: Partial<TagBreakpointProps>;
  lg?: Partial<TagBreakpointProps>;
  xl?: Partial<TagBreakpointProps>;
  xxl?: Partial<TagBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface ClosingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Additional classes to apply custom styles to the ClosingButton.
     */
    className?: string;
    /**
     * Size of the ClosingButton
     * @default default
     */
    size?: ClosingButtonSize;
    /**
     * Event handler for the button click event. Triggered when the user clicks on the close button.
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
    title?: string;
    color?: ClosingButtonColor;
    iconSize?: ClosingButtonIconSize;
}
type TagColor = 'primary' | 'secondary' | 'danger';
type TagEllipsis = 'start' | 'end' | false;
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type TagBreakpointProps = {
    /**
     * Determines Tag color
     * When true, the Tag will be styled accordingly and an error icon will be displayed.
     * @default 'primary'
     */
    color?: TagColor;
    /**
     * Truncates the label when the Tag is width-constrained, revealing the full text
     * in a popover on hover/focus. `end` shows a trailing ellipsis (`Long label…`);
     * `start` shows a leading one (`…label`), keeping the most significant tail
     * (e.g. dates, IDs) visible. `false` never truncates — the label wraps and the
     * Tag keeps its full width.
     * @default false
     */
    ellipsis?: TagEllipsis;
    /**
     * Additional classes to apply custom styles to the Tag.
     */
    className?: string;
};
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,
  args: {
    color: 'primary',
    children: 'Tag',
  },
};
```

### Primary

```tsx
export const Primary: Story = {
  render: ColorTemplate,
  args: {
    onClose: (e) => console.log('Close button clicked', e),
    isLoading: true,
    color: 'primary',
    children: 'Tag',
  },
};
```

### Secondary

```tsx
export const Secondary: Story = {
  render: ColorTemplate,
  args: {
    onClose: (e) => console.log('Close button clicked', e),
    isLoading: true,
    color: 'secondary',
    children: 'Tag',
  },
};
```

### Danger

```tsx
export const Danger: Story = {
  render: ColorTemplate,
  args: {
    onClose: (e) => console.log('Close button clicked', e),
    color: 'danger',
    children: 'Tag',
  },
};

/**
 * When width-constrained, `ellipsis` truncates the label (the close button stays fixed) and
 * reveals the full text in a popover on hover/focus. `false` never truncates — the label wraps;
 * `end` cuts the end; `start` cuts the start.
 */
```

### Ellipsis

```tsx
export const Ellipsis: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '7rem' }}>
      <Tag onClose={(e) => console.log('Close button clicked', e)}>A fairly long tag label that wraps</Tag>
      <Tag onClose={(e) => console.log('Close button clicked', e)} ellipsis="end">
        A fairly long tag label, end
      </Tag>
      <Tag onClose={(e) => console.log('Close button clicked', e)} ellipsis="start">
        start, a fairly long tag label
      </Tag>
    </div>
  ),
};
```

Full story source: `src/tedi/components/tags/tag/tag.stories.tsx`.

## Related

`Col`, `Row`
