Truncate from @tedi-design-system/react. Use via `window.Tedi.Truncate` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, No Truncate.

## Props

```ts
import * as React from 'react';

/**
 * Truncate from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/truncate/truncate.stories.tsx).
 */
export interface TruncateProps {
  /** Text that will be truncated */
  children: string;
  /** Custom content to display at the end of truncated text */
  ellipsis?: ReactNode;
  /** Whether the truncated text should be expandable */
  expandable?: boolean;
  /** Override default button properties */
  button?: Partial<Omit<ButtonProps, 'onClick'> & { onClick: (e: React.MouseEvent<HTMLButtonElement>, isTruncated: boolean) => void; }>;
  /** Additional class name */
  className?: string;
  /** Maximum number of characters to display */
  maxLength?: number;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<TruncateBreakpointProps>;
  md?: Partial<TruncateBreakpointProps>;
  lg?: Partial<TruncateBreakpointProps>;
  xl?: Partial<TruncateBreakpointProps>;
  xxl?: Partial<TruncateBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type ButtonProps<C extends React.ElementType = 'button'> = BreakpointSupport<ButtonContentProps<C, IInternalButtonProps, AllowedTags>>;
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type TruncateBreakpointProps = {
    /**
     * Additional class name
     */
    className?: string;
    /**
     * Maximum number of characters to display
     * @default 200
     */
    maxLength?: number;
};
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: TemplateColumn,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, maiores! Tempora consequatur eveniet cupiditate. 
    Aspernatur id quia fugiat, consequatur rerum ipsa ipsam ad suscipit provident odio est commodi velit ut quisquam amet, 
    harum nisi molestias excepturi sit perferendis, aliquid at consectetur? 
    Minima quidem cumque eaque eveniet unde esse impedit necessitatibus aut non autem, 
    maxime sed odit repellat distinctio, molestias laudantium saepe dignissimos eius!`,
    expandable: true,
  },
};
```

### No Truncate

```tsx
export const NoTruncate: Story = {
  render: TemplateColumn,
  args: {
    children: 'This text does not get truncated, because the length is smaller than maxLength property.',
    maxLength: 100,
  },
};
```

Full story source: `src/tedi/components/content/truncate/truncate.stories.tsx`.

## Related

`Col`, `Row`
