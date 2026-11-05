TextGroup from @tedi-design-system/react. Use via `window.Tedi.TextGroup` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `TextGroup.List`.

Variants (see `preview.html`): Default, Position Type, Text Weight, Types, Has Slot, Horizontal Label Length, Long Text Values, Responsive, Custom Label, With List.

## Props

```ts
import * as React from 'react';

/**
 * TextGroup from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/text-group/text-group.stories.tsx).
 */
export interface TextGroupProps {
  /** Type of text group layout */
  type?: 'horizontal';
  /** Alignment for the label text */
  labelAlign?: TextAlign;
  /** Alignment for the value text. `'right'` grows the value so it sits flush against the trailing edge. Horizontal only. Value alignment is horizontal-only; not available in vertical layout. */
  valueAlign?: TextAlign;
  /** Width for the label (e.g., '200px', '30%', etc.) */
  labelWidth?: string | number;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<TextGroupBreakpointProps>;
  md?: Partial<TextGroupBreakpointProps>;
  lg?: Partial<TextGroupBreakpointProps>;
  xl?: Partial<TextGroupBreakpointProps>;
  xxl?: Partial<TextGroupBreakpointProps>;
  /** Label for the text group */
  label: React.ReactNode;
  /** Value displayed alongside the label. Accepts multiple nodes — a trailing `StatusBadge`, `Tag`, or info tooltip renders inline beside the text (the value row is a flex container with a small gap). */
  value: React.ReactNode | React.ReactNode[];
  /** Additional class name(s) to apply to the element */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type TextAlign = 'left' | 'right';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type TextGroupBreakpointProps = {
    /**
     * Type of text group layout
     */
    type?: 'horizontal';
    /**
     * Alignment for the label text
     *  @default left
     */
    labelAlign?: TextAlign;
    /**
     * Alignment for the value text. `'right'` grows the value so it sits flush
     * against the trailing edge. Horizontal only.
     * @default 'left'
     */
    valueAlign?: TextAlign;
    /**
     * Width for the label (e.g., '200px', '30%', etc.)
     * @default auto
     */
    labelWidth?: string | number;
} | {
    /**
     * Type of text group layout
     */
    type: 'vertical';
    /**
     * Alignment for the label text
     *  @default left
     */
    labelAlign?: 'left';
    /**
     * Value alignment is horizontal-only; not available in vertical layout.
     */
    valueAlign?: never;
    /**
     * Width for the label (e.g., '200px', '30%', etc.)
     * @default auto
     */
    labelWidth?: string | number;
};
```

## Examples

### Default

```tsx
export const Default: Story = {
  args: {
    label: 'Ligipääsetavus',
    value: <Text>Arstile ja esindajale nähtav</Text>,
  },
};

/**
 * Position of the value relative to the label: stacked (`vertical`) or side by side
 * (`horizontal`) with the label aligned left or right.
 */
```

### Position Type

```tsx
export const PositionType: Story = {
  name: 'Position',
  render: () => (
    <ExampleRows
      rows={[
        {
          title: 'Vertical',
          content: (
            <TextGroup type="vertical" label="Ligipääsetavus" value={<Text>Arstile ja esindajale nähtav</Text>} />
          ),
        },
        {
          title: 'Horizontal, label left',
          content: (
            <TextGroup
              type="horizontal"
              labelWidth="150px"
              label="Ligipääsetavus"
              value={<Text>Arstile ja esindajale nähtav</Text>}
            />
          ),
        },
        {
          title: 'Horizontal, label right',
          content: (
            <TextGroup
              type="horizontal"
              labelWidth="150px"
              labelAlign="right"
              label="Ligipääsetavus"
              value={<Text>Arstile ja esindajale nähtav</Text>}
            />
          ),
        },
      ]}
    />
  ),
};

/**
// …
```

### Text Weight

```tsx
export const TextWeight: Story = {
  name: 'Text weight',
  render: () => (
    <ExampleRows
      rows={[
        {
          title: 'Regular label',
          content: <TextGroup label="Ligipääsetavus" value={<Text>Arstile ja esindajale nähtav</Text>} />,
        },
        {
          title: 'Bold label',
          content: (
            <TextGroup label={<Label isBold>Ligipääsetavus</Label>} value={<Text>Nähtav arstile ja esindajale</Text>} />
          ),
        },
        {
          title: 'Regular value',
          content: <TextGroup label="Ligipääsetavus" value={<Text>Nähtav arstile ja esindajale</Text>} />,
        },
        {
          title: 'Bold value',
          content: (
            <TextGroup label="Ligipääsetavus" value={<Text modifiers="bold">Nähtav arstile ja esindajale</Text>} />
          ),
        },
      ]}
    />
  ),
};

/**
 * The value can carry extra content beside the text: a link, a leading icon, or a status badge.
 * (For a trailing element like an info tooltip or a tag, see the **Has slot** story.)
 */
```

### Types

```tsx
export const Types: Story = {
  name: 'Type',
  render: () => (
    <ExampleRows
      rows={[
        {
          title: 'Has link',
          content: (
            <VerticalSpacing size={1}>
              <TextGroup label="Ligipääsetavus" value={<Text>Nähtav arstile ja esindajale</Text>} />
              <TextGroup
                label="Ligipääsetavus"
                value={[
                  <Text key="v">Nähtav arstile ja esindajale</Text>,
                  <Link key="l" href="#">
                    Vaata dokumenti
                  </Link>,
                ]}
              />
              <TextGroup
                label="Ligipääsetavus"
                value={[
                  <Text key="v">Nähtav arstile ja esindajale</Text>,
                  <Link key="l" href="#">
                    dokument nr 4534
                  </Link>,
                ]}
              />
            </VerticalSpacing>
          ),
        },
        {
          title: 'Has icon',
          content: (
            <VerticalSpacing size={1}>
              <TextGroup
                label="Ligipääsetavus"
                value={
                  <>
                    <Icon name="lock" size={16} color="secondary" />
// …
```

### Has Slot

```tsx
export const HasSlot: Story = {
  name: 'Has slot',
  render: () => (
    <VerticalSpacing size={1}>
      <TextGroup
        label="Ligipääs"
        value={[
          <Text key="v">Arstile ja esindajale nähtav</Text>,
          <InfoButton key="s" aria-label="Lisainfo ligipääsu kohta" />,
        ]}
      />
      <TextGroup
        label="Nimi"
        value={[
          <Text key="v">Mari Maasikas</Text>,
          <StatusBadge key="s" color="success">
            Ligipääs lubatud
          </StatusBadge>,
        ]}
      />
    </VerticalSpacing>
  ),
};
```

### Horizontal Label Length

```tsx
export const HorizontalLabelLength: Story = {
  render: MultipleTextGroupsTemplate,
  args: {
    type: 'horizontal',
  },
};
```

Full story source: `src/tedi/components/content/text-group/text-group.stories.tsx`.

## Related

`Icon`, `Text`, `Col`, `Row`, `VerticalSpacing`, `Link`, `StatusBadge`, `Label`
