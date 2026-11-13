StretchContent from @tedi-design-system/react. Use via `window.Tedi.StretchContent` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Cards Example.

## Props

```ts
import * as React from 'react';

/**
 * StretchContent from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/misc/stretch-content/stretch-content.stories.tsx).
 */
export interface StretchContentProps {
  /** Element that will be stretched within the container. */
  children: React.ReactElement;
  /** Accessibility role for the container. */
  role?: React.AriaRole;
  /** An optional additional CSS class name to customize the styling of the container. This will be appended to the default BEM class generated for the component. */
  className?: string;
  /** Specifies the axis along which the child element should be stretched. - `both` (default): Stretches the child element both horizontally and vertically. - `horizontal`: Stretches the child element only horizontally (width). - `vertical`: Stretches the child element only vertically (height). */
  direction?: StretchContentDirection;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<StretchContentBreakpointProps>;
  md?: Partial<StretchContentBreakpointProps>;
  lg?: Partial<StretchContentBreakpointProps>;
  xl?: Partial<StretchContentBreakpointProps>;
  xxl?: Partial<StretchContentBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type StretchContentDirection = 'both' | 'horizontal' | 'vertical';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface StretchContentBreakpointProps {
    /**
     * An optional additional CSS class name to customize the styling of the container.
     * This will be appended to the default BEM class generated for the component.
     */
    className?: string;
    /**
     * Specifies the axis along which the child element should be stretched.
     * - `both` (default): Stretches the child element both horizontally and vertically.
     * - `horizontal`: Stretches the child element only horizontally (width).
     * - `vertical`: Stretches the child element only vertically (height).
     * @default 'both'
     */
    direction?: StretchContentDirection;
}
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,
};
```

### Cards Example

```tsx
export const CardsExample: StoryObj<Partial<StretchContentProps>> = {
  render: (_args) => {
    const lorem = (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad expedita iste itaque laborum magnam non nulla
        tempora ullam! A consequuntur dicta et incidunt nisi pariatur sapiente, temporibus unde voluptatem?
      </p>
    );

    const card = (title: string, content: JSX.Element) => {
      return (
        <Card>
          <CardHeader background="brand-primary">
            <Heading element="h2">{title}</Heading>
          </CardHeader>
          <CardContent>
            <StretchContent>
              <Row direction="column" gap={4}>
                <Col>
                  <VerticalSpacing>{content}</VerticalSpacing>
                </Col>
                <Col width="auto">
                  <Button>Click me</Button>
                </Col>
              </Row>
            </StretchContent>
          </CardContent>
        </Card>
      );
    };

    return (
      <Row>
        <Col>
          <StretchContent>
            {card(
              'Card with longer content',
              <>
                {lorem}
                {lorem}
// …
```

Full story source: `src/tedi/components/misc/stretch-content/stretch-content.stories.tsx`.

## Related

`Heading`, `Button`, `Card`, `Col`, `Row`, `VerticalSpacing`
