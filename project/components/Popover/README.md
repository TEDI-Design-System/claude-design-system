Popover from @tedi-design-system/react. Use via `window.Tedi.Popover` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `Popover.Trigger`, `Popover.Content`.

Variants (see `preview.html`): Default, Content Examples, Heading, Trigger, Arrow Position, With Prominent Border, Size, Closing Button, Not Dismissible, Scroll Locked, Focus Locked, Accessibility Baseline, No Title Accessible Name, Read All Stress Test, Open For Visual Test, Open Vertical Placements For Visual Test, Open Horizontal Placements For Visual Test, Open Widths For Visual Test, Open With Border For Visual Test.

## Props

```ts
import * as React from 'react';

/**
 * Popover from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/overlays/popover/popover.stories.tsx).
 */
export interface PopoverProps {
  /** Adds correct event listeners that change the open state. */
  openWith?: OverlayOpenWith;
  /** Gap in px between the trigger and the popover. When `withArrow` is `true`, the arrow's height (17px) is added on top, so the value is the visible gap with or without the arrow. Also accepts Floating UI's `{ mainAxis, crossAxis, alignmentAxis }` object or a function. */
  offset?: OffsetOptions;
  /** Show the arrow pointing to the trigger. */
  withArrow?: boolean;
  /** If true, popover renders with an illustrative border on the arrow side and extra arrow padding so the arrow's shoulders stay clear of the rounded corner on `-start` / `-end` placements. */
  withBorder?: boolean;
  /** Trigger and Content components */
  children: ReactNode | ReactNode[];
  /** Changes aria attributes on trigger and content based on the components role */
  role?: UseRoleProps['role'];
  /** Props passed to FloatingFocusManager */
  focusManager?: Omit<ComponentProps<typeof FloatingFocusManager>, 'context' | 'children'>;
  /** Is open by default?<br /> Does not work with open and onToggle props. */
  defaultOpen?: boolean;
  /** Is open?<br /> Use this with onToggle prop for controlled component. */
  open?: boolean;
  /** Callback when toggled.<br /> Use this with open prop for state outside of component. */
  onToggle?: (open: boolean) => void;
  /** Is dismissible by clicking outside of content or Escape button? */
  dismissible?: boolean;
  /** Is scrolling locked outside of content? */
  scrollLock?: boolean;
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
    ...subcomponentArgTypes(Popover.Content, {
      category: 'Popover.Content',
      prefix: 'content',
      exclude: ['children', 'labelledBy', 'describedBy', 'titleProps', 'closeProps'],
    }),
  },
  args: {
    content__title: 'Pealkiri',
    content__close: true,
    content__width: 'medium',
  },
  render: (args: Record<string, unknown>) => (
    <Popover {...getPrimaryComponentProps<PopoverProps>(args)}>
      <Popover.Trigger>
        <Button>Popover Trigger</Button>
      </Popover.Trigger>
      <Popover.Content {...getSubcomponentProps(args, 'content')}>{POLAR_BEAR_TEXT}</Popover.Content>
    </Popover>
  ),
};
```

### Content Examples

```tsx
export const ContentExamples: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: ContentExamplesTemplate,
  args: {},
};
```

### Heading

```tsx
export const Heading: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: HeadingTemplate,
  args: {},
};
```

### Trigger

```tsx
export const Trigger: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: TriggerTemplate,
  args: {},
};
```

### Arrow Position

```tsx
export const ArrowPosition: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: ArrowPositionTemplate,
  args: {},
};
```

### With Prominent Border

```tsx
export const WithProminentBorder: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: WithProminentBorderTemplate,
  args: {},
};
```

Full story source: `src/tedi/components/overlays/popover/popover.stories.tsx`.

## Related

`Icon`, `Text`, `EmptyState`, `Search`, `Col`, `Row`, `OptionContent`
