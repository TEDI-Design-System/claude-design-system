Skeleton from @tedi-design-system/react. Use via `window.Tedi.Skeleton` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `Skeleton.Block`.

Variants (see `preview.html`): Default, Skeleton Height, Skeleton Width, Accessibility.

## Props

```ts
import * as React from 'react';

/**
 * Skeleton from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/loaders/skeleton/skeleton.stories.tsx).
 */
export interface SkeletonProps {
  /** The content to be rendered inside the skeleton placeholder. */
  children?: React.ReactNode | React.ReactNode[];
  /** Custom class names to apply to the skeleton component for styling purposes. */
  className?: string;
  /** The accessibility label announced by screen readers when the skeleton component mounts. This message informs users that content is loading. If omitted, all skeletons on the page are combined into a single status message. */
  label?: string;
  /** The accessibility label announced by screen readers when the skeleton component unmounts. This message informs users that content has finished loading. This label is only announced if the delay specified by `labelDelay` is met. */
  completedLabel?: string;
  /** The delay, in milliseconds, before the screen reader announces the `label` when the component mounts. If the content loads faster than this delay, the label may not be announced to avoid unnecessary interruptions. */
  labelDelay?: number;
}
```

## Examples

### Default

```tsx
export const Default: StoryObj = {
  argTypes: {
    ...subcomponentArgTypes(Skeleton.Block, {
      category: 'Skeleton.Block',
      prefix: 'block',
      exclude: ['children'],
    }),
  },
  args: {
    label: 'Loading something',
    block__width: 50,
    block__height: 'h2',
  },
  render: (args: Record<string, unknown>) => (
    <Skeleton {...getPrimaryComponentProps<SkeletonProps>(args)}>
      <Skeleton.Block {...getSubcomponentProps(args, 'block')} />
    </Skeleton>
  ),
};
```

### Skeleton Height

```tsx
export const SkeletonHeight: Story = {
  render: Template,

  args: {
    label: 'Loading something',
  },
};
```

### Skeleton Width

```tsx
export const SkeletonWidth: Story = {
  render: TemplateWidth,

  args: {
    label: 'Loading something',
  },
};
```

### Accessibility

```tsx
export const Accessibility: Story = {
  render: (args) => {
    const [skeletons, setSkeletons] = React.useState<AccessibilityTemplateProps[]>([]);

    const removeSkeleton = (id: string) =>
      setSkeletons((prevState) => prevState.filter((skeleton) => skeleton.id !== id));

    const addSkeleton = (skeleton: Omit<AccessibilityTemplateProps, 'remove'>) => {
      setSkeletons((prevState) => [...prevState, { ...skeleton, remove: removeSkeleton }]);
    };

    const renderButton = (label: string, options: Omit<AccessibilityTemplateProps, 'remove'>) => (
      <Col width="auto">
        <Button onClick={() => addSkeleton(options)}>{label}</Button>
      </Col>
    );

    return (
      <VerticalSpacing>
        <Row gutterX={2}>
          {renderButton('Add a short loading block', { id: `skeleton-${skeletons.length}`, delay: 900 })}
          {renderButton('Add a long loading block', {
            id: `skeleton-${skeletons.length}`,
            style: { '--loader-skeleton-color': 'var(--tedi-red-600)' },
          })}
          {renderButton('Render loading block with custom labels', {
            id: `skeleton-${skeletons.length}`,
            style: { '--loader-skeleton-color': 'var(--tedi-green-600)' },
            label: 'Custom block is loading',
            completedLabel: 'Custom block has finished loading',
          })}
        </Row>

        <Row>
          {skeletons?.length ? (
            skeletons.map((skeleton) => (
              <Col xs={12} md={3} key={skeleton.id}>
                <AccessibilityTemplate {...args} {...skeleton} />
              </Col>
            ))
// …
```

Full story source: `src/tedi/components/loaders/skeleton/skeleton.stories.tsx`.

## Related

`Button`, `Col`, `Row`, `VerticalSpacing`
