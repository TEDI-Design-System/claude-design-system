Tooltip from @tedi-design-system/react. Use via `window.Tedi.Tooltip` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `Tooltip.Trigger`, `Tooltip.Content`.

Variants (see `preview.html`): Default, Arrow Position, Tooltip Width, Triggers, Open With Click, Uncontrolled Default Open, Controlled Open, Open Vertical Placements For Visual Test, Open Horizontal Placements For Visual Test, Open Widths For Visual Test.

## Props

```ts
import * as React from 'react';

/**
 * Tooltip from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/overlays/tooltip/tooltip.stories.tsx).
 */
export interface TooltipProps {
  /** Adds correct event listeners that change the open state. */
  openWith?: OverlayOpenWith;
  /** Offset of content. */
  offset?: OffsetOptions;
  /** Trigger and Content components */
  children: ReactNode | ReactNode[];
  /** Changes aria attributes on trigger and content based on the components role */
  role?: UseRoleProps['role'];
  /** Minimum distance (in px) between the arrow and the edges of the content. Helps keep the arrow away from rounded corners, especially on `-start` and `-end` placements. Use a larger value for bigger arrows or arrows with borders. */
  arrowPadding?: number;
  /** Props passed to FloatingFocusManager */
  focusManager?: Omit<ComponentProps<typeof FloatingFocusManager>, 'context' | 'children'>;
  /** Is open by default?<br /> Does not work with open and onToggle props. */
  defaultOpen?: boolean;
  /** Is open?<br /> Use this with onToggle prop for controlled component. */
  open?: boolean;
  /** Callback when toggled.<br /> Use this with open prop for state outside of component. */
  onToggle?: (open: boolean) => void;
  /** Renders the overlay purely visually: no `useRole` aria wiring on the trigger (so no `aria-describedby`) and the content is `aria-hidden`. Use when the trigger already conveys the same text through its accessible name — e.g. an icon-only button whose visible tooltip merely mirrors its label — so screen readers don't announce it twice. */
  ariaHidden?: boolean;
  /** Placement of content. */
  placement?: Placement;
  /** Re-measure the floating element every animation frame while mounted. Enable this when the trigger/reference element's position can change without a DOM-observable event (e.g. position driven by an inherited CSS custom property on an ancestor). The default `autoUpdate` only reacts to scroll, resize, and element-size changes, so position-only movement goes unnoticed and the overlay lags behind. Opt-in because animation-frame tracking is more expensive than the default. */
  trackReferencePosition?: boolean;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type OverlayOpenWith = 'click' | 'hover';
```

## Examples

### Default

```tsx
export const Default: StoryObj = {
  argTypes: {
    ...subcomponentArgTypes(Tooltip.Content, {
      category: 'Tooltip.Content',
      prefix: 'content',
      exclude: ['children', 'labelledBy', 'describedBy'],
    }),
  },
  args: {
    content__maxWidth: 'medium',
  },
  render: (args: Record<string, unknown>) => (
    <Tooltip {...getPrimaryComponentProps<TooltipProps>(args)}>
      <Tooltip.Trigger>
        <InfoButton>Info</InfoButton>
      </Tooltip.Trigger>
      <Tooltip.Content {...getSubcomponentProps(args, 'content')}>
        The polar bear (Ursus maritimus) is a large bear native to the Arctic and nearby areas.
      </Tooltip.Content>
    </Tooltip>
  ),
};
```

### Arrow Position

```tsx
export const ArrowPosition: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: PositionTemplate,
  args: {},
};
```

### Tooltip Width

```tsx
export const TooltipWidth: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: WidthTemplate,
  args: {},
};
```

### Triggers

```tsx
export const Triggers: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: TriggerTemplate,
  args: {},
};
```

### Open With Click

```tsx
export const OpenWithClick: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: Template,
  args: {
    openWith: 'click',
  },
};
```

### Uncontrolled Default Open

```tsx
export const UncontrolledDefaultOpen: Story = {
  render: Template,
  args: {
    defaultOpen: true,
  },
};
```

Full story source: `src/tedi/components/overlays/tooltip/tooltip.stories.tsx`.

## Related

`Col`, `Row`
