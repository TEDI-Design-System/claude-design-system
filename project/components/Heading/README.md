Heading from @tedi-design-system/react. Use via `window.Tedi.Heading` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Headings, Custom Modifier, Semantic Headings.

## Props

```ts
import * as React from 'react';

/**
 * Heading from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/base/typography/heading/heading.stories.tsx).
 */
export interface HeadingProps {
  sm?: Partial<{ className?: string; element?: TextElement; modifiers?: TextModifiers[] | TextModifiers; color?: TextColor; }>;
  md?: Partial<{ className?: string; element?: TextElement; modifiers?: TextModifiers[] | TextModifiers; color?: TextColor; }>;
  lg?: Partial<{ className?: string; element?: TextElement; modifiers?: TextModifiers[] | TextModifiers; color?: TextColor; }>;
  xl?: Partial<{ className?: string; element?: TextElement; modifiers?: TextModifiers[] | TextModifiers; color?: TextColor; }>;
  xxl?: Partial<{ className?: string; element?: TextElement; modifiers?: TextModifiers[] | TextModifiers; color?: TextColor; }>;
  /** Children of the text */
  children: React.ReactNode;
  /** ID attribute */
  id?: string;
  /** Allows to focus the element */
  tabIndex?: number;
  /** Additional class */
  className?: string;
  /** Single or multiple modifiers to change the text behavior */
  modifiers?: TextModifiers[] | TextModifiers;
  /** Color of the text Use 'success', 'important' or 'warning' with caution, usually they should not be in application UI */
  color?: TextColor;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  /** Semantic heading tag h1-h6 are allowed values */
  element?: Extract<TextProps['element'], HeadingModifiers>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type TextElement = 'div' | 'p' | 'span' | 'li' | 'label' | HeadingModifiers;
type TextModifiers = HeadingModifiers | 'normal' | 'small' | 'extra-small' | 'bold' | 'thin' | 'italic' | 'center' | 'left' | 'right' | 'nowrap' | 'break-all' | 'break-word' | 'break-spaces' | 'uppercase' | 'lowercase' | 'capitalize' | 'capitalize-first' | 'inline-block' | 'inline' | 'line-normal' | 'line-condensed' | 'subtitle';
type TextColor = 'primary' | 'secondary' | 'tertiary' | 'white' | 'disabled' | 'brand' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface TextProps extends BreakpointSupport<TextBreakpointProps> {
    /**
     * Children of the text
     */
    children: React.ReactNode;
    /**
     * ID attribute
     */
    id?: string;
    /**
     * Allows to focus the element
     */
    tabIndex?: number;
}
type HeadingModifiers = `h${HeadingLevel}`;
```

## Examples

### Default

```tsx
export const Default: Story = {
  args: {
    children: 'Heading',
  },
};
```

### Headings

```tsx
export const Headings: Story = {
  render: TemplateHeadings,
};
```

### Custom Modifier

```tsx
export const CustomModifier: Story = {
  render: () => (
    <>
      <Heading element="h4" modifiers={['h1', 'bold']} color="warning">
        H4 heading with H1 styles and warning color
      </Heading>
      <Heading element="h2" modifiers={['normal', 'bold']} color="brand">
        H2 heading with normal bold text and brand color
      </Heading>
      <Heading element="h1" modifiers={['normal']}>
        H1 element with normal text styles
      </Heading>
    </>
  ),
};
```

### Semantic Headings

```tsx
export const SemanticHeadings: Story = {
  render: () => (
    <>
      <Row>
        <Col>
          <h1>Heading 1</h1>
        </Col>
        <Col>
          <Heading element="h1">Heading 1</Heading>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Heading 2</h2>
        </Col>
        <Col>
          <Heading element="h2">Heading 2</Heading>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Heading 3</h3>
        </Col>
        <Col>
          <Heading element="h3">Heading 3</Heading>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Heading 4</h4>
        </Col>
        <Col>
          <Heading element="h4">Heading 4</Heading>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>Heading 5</h5>
        </Col>
        <Col>
// …
```

Full story source: `src/tedi/components/base/typography/heading/heading.stories.tsx`.

## Related

`Col`, `Row`, `Text`
