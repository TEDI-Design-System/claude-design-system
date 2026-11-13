InfoTooltip from @tedi-design-system/react. Use via `window.Tedi.InfoTooltip` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, In Label Row.

## Props

```ts
import * as React from 'react';

/**
 * InfoTooltip from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/overlays/tooltip/info-tooltip.stories.tsx).
 */
export interface InfoTooltipProps {
  /** Tooltip content shown when the info button is hovered or focused. */
  children: ReactNode;
  /** Placement of the tooltip relative to the info button. */
  placement?: Placement;
  /** How the tooltip is opened. */
  openWith?: OverlayOpenWith;
  /** Max width of the tooltip content. */
  maxWidth?: TooltipContentProps['maxWidth'];
  /** Info button colour. Use `inverted` on dark or coloured backgrounds. */
  color?: 'default' | 'inverted';
  /** Renders the smaller (16px) info button. */
  isSmall?: boolean;
  /** Accessible name for the info button. */
  ariaLabel?: string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<InfoTooltipBreakpointProps>;
  md?: Partial<InfoTooltipBreakpointProps>;
  lg?: Partial<InfoTooltipBreakpointProps>;
  xl?: Partial<InfoTooltipBreakpointProps>;
  xxl?: Partial<InfoTooltipBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type OverlayOpenWith = 'click' | 'hover';
interface TooltipContentProps extends Omit<OverlayContentProps, 'classNames'> {
    /**
     * Additional class name.
     */
    className?: string;
    /**
     * Tooltip width.
     * @default medium
     */
    maxWidth?: 'none' | 'small' | 'medium' | 'large';
}
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface InfoTooltipBreakpointProps {
    /**
     * Tooltip content shown when the info button is hovered or focused.
     */
    children: ReactNode;
    /**
     * Placement of the tooltip relative to the info button.
     * @default top
     */
    placement?: Placement;
    /**
     * How the tooltip is opened.
     * @default hover
     */
    openWith?: OverlayOpenWith;
    /**
     * Max width of the tooltip content.
     * @default medium
     */
    maxWidth?: TooltipContentProps['maxWidth'];
    /**
     * Info button colour. Use `inverted` on dark or coloured backgrounds.
     * @default default
     */
    color?: 'default' | 'inverted';
    /**
     * Renders the smaller (16px) info button.
     * @default false
     */
    isSmall?: boolean;
    /**
     * Accessible name for the info button.
     * @default the translated "more information" label
     */
    ariaLabel?: string;
}
// From @floating-ui/utils (see its documentation): Placement.
```

## Examples

### Default

```tsx
export const Default: Story = {
  args: {
    children: 'Lisainfo väljal',
  },
};

/**
 * Typical usage — a trailing info affix next to a form label. `Label` renders
 * this exact pattern via its `tooltip` prop (it uses `InfoTooltip` internally and
 * places the trigger outside the `<label>`), so you rarely compose it by hand.
 */
```

### In Label Row

```tsx
export const InLabelRow: Story = {
  render: () => (
    <Label htmlFor="city" required tooltip="Sisestage linn, kus te praegu elate.">
      Linn
    </Label>
  ),
};
```

Full story source: `src/tedi/components/overlays/tooltip/info-tooltip.stories.tsx`.

## Related

`Label`
