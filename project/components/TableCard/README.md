TableCard from @tedi-design-system/react. Use via `window.Tedi.TableCard` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Simple Card, With Actions, Is Accordion, Has Children Rows, With Responsive Layout.

## Props

```ts
import * as React from 'react';

/**
 * TableCard from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/content/table-card/table-card.stories.tsx).
 */
export interface TableCardProps {
  /** Label / value pairs (one per column) rendered as the card body - a single `<dl>`. */
  rows: TableCardRow[];
  /** Header title. Required for `collapsible`. */
  title?: React.ReactNode;
  /** Secondary line under the title. */
  subtitle?: React.ReactNode;
  /** Content rendered at the end of the header — a `StatusBadge`, a link, etc. */
  endSlot?: React.ReactNode;
  /** Heading tag for `title` (for the document outline). The title stays body-sized unless `titleModifiers` is set. */
  titleElement?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Visual size / weight of the title (`Text` modifiers), independent of `titleElement`. */
  titleModifiers?: TextModifiers;
  /** Make the header a toggle that shows / hides the body. Provide a `title` (or, failing that, `ariaLabel`) so the toggle has an accessible name. */
  collapsible?: boolean;
  /** Initial open state (uncontrolled). Ignored when `open` is set. */
  defaultOpen?: boolean;
  /** Controlled open state. Pair with `onOpenChange`. */
  open?: boolean;
  /** Called with the next open state when the header toggles. */
  onOpenChange?: (open: boolean) => void;
  /** Style of the collapse indicator (only applies when `collapsible`), mirroring `CollapseButton`'s `arrowType`: - `default` — a plain chevron. - `secondary` — a circular, outlined arrow. */
  arrowType?: 'default' | 'secondary';
  /** Footer content (e.g. `Button`s), divided from the body. */
  actions?: React.ReactNode;
  /** Emphasised summary / total row after the body, on a muted background. */
  summary?: { label: React.ReactNode; value: React.ReactNode; };
  /** Show a leading checkbox to select the row. */
  selectable?: boolean;
  /** Controlled selected state. Pair with `onSelectedChange`. */
  selected?: boolean;
  /** Initial selected state in uncontrolled mode. Ignored when `selected` is provided. */
  defaultSelected?: boolean;
  /** Called with the next selected state when the checkbox toggles. */
  onSelectedChange?: (selected: boolean) => void;
  /** Label text size — `small` uses the 14px label style, `default` the 16px body style. */
  labelSize?: 'small' | 'default';
  /** Accessible name for the selection checkbox. Defaults to the `table-card.select-row` label. */
  selectionLabel?: string;
  /** Accessible name for the card region. */
  ariaLabel?: string;
  /** Root element id (also wires the collapsible ARIA). Auto-generated when omitted. */
  id?: string;
  /** Extra full-width body content after `rows` (e.g. child row-groups). Collapses with the body. */
  children?: React.ReactNode;
  /** Row layout: `horizontal` (label beside value) or `vertical` (label above value). */
  layout?: 'horizontal' | 'vertical';
  /** Number of equal-width columns. Best with `layout="vertical"`. */
  columns?: number;
  /** Label column width (horizontal layout); a `number` is pixels. */
  labelWidth?: string | number;
  /** Label text alignment. Defaults to `right` in horizontal layout, `left` otherwise. */
  labelAlign?: TableCardAlign;
  /** Value text alignment. Defaults to `right` in horizontal layout, `left` otherwise. */
  valueAlign?: TableCardAlign;
  /** Vertical alignment of each label against its value (horizontal layout only). `'center'` keeps the label centred when a value is taller, e.g. a `StatusBadge`. */
  rowAlign?: 'start' | 'center';
  /** Padding of the card body (the rows section). Accepts the same values as `Card.Content`: a number in rems, `{ vertical, horizontal }`, or `{ top, right, bottom, left }`. */
  padding?: CardContentPadding;
  /** Vertical gap between rows in the body. A `number` is rems (matching `padding`); pass a string for any other CSS length. Defaults to the layout gutter in `vertical` layout and the list's compact spacing otherwise. */
  rowGap?: string | number;
  /** Class name for the root element. */
  className?: string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<TableCardBreakpointProps>;
  md?: Partial<TableCardBreakpointProps>;
  lg?: Partial<TableCardBreakpointProps>;
  xl?: Partial<TableCardBreakpointProps>;
  xxl?: Partial<TableCardBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface TableCardRow {
    /** Row label (usually the column header). Strings are wrapped in a `<Label>`; nodes render as-is. */
    label: React.ReactNode;
    /** Row value — text, a `StatusBadge`, a link, etc. */
    value: React.ReactNode;
    /**
     * Show the value in bold.
     * @default false
     */
    bold?: boolean;
    /** In a multi-column body, span this row across N columns. Ignored when `columns` is 1. */
    colSpan?: number;
}
type TextModifiers = HeadingModifiers | 'normal' | 'small' | 'extra-small' | 'bold' | 'thin' | 'italic' | 'center' | 'left' | 'right' | 'nowrap' | 'break-all' | 'break-word' | 'break-spaces' | 'uppercase' | 'lowercase' | 'capitalize' | 'capitalize-first' | 'inline-block' | 'inline' | 'line-normal' | 'line-condensed' | 'subtitle';
type TableCardAlign = 'left' | 'right';
type CardContentPadding = CardContentPaddingNumber | {
    vertical: CardContentPaddingNumber;
    horizontal: CardContentPaddingNumber;
} | {
    top: CardContentPaddingNumber;
    right: CardContentPaddingNumber;
    bottom: CardContentPaddingNumber;
    left: CardContentPaddingNumber;
};
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type TableCardBreakpointProps = {
    /**
     * Row layout: `horizontal` (label beside value) or `vertical` (label above value).
     * @default horizontal
     */
    layout?: 'horizontal' | 'vertical';
    /**
     * Number of equal-width columns. Best with `layout="vertical"`.
     * @default 1
     */
    columns?: number;
    /**
     * Label column width (horizontal layout); a `number` is pixels.
     * @default 8.25rem horizontal, auto vertical
     */
    labelWidth?: string | number;
    /** Label text alignment. Defaults to `right` in horizontal layout, `left` otherwise. */
    labelAlign?: TableCardAlign;
    /** Value text alignment. Defaults to `right` in horizontal layout, `left` otherwise. */
    valueAlign?: TableCardAlign;
    /**
     * Vertical alignment of each label against its value (horizontal layout only).
     * `'center'` keeps the label centred when a value is taller, e.g. a `StatusBadge`.
     * @default start
     */
    rowAlign?: 'start' | 'center';
    /**
     * Padding of the card body (the rows section). Accepts the same values as `Card.Content`:
     * a number in rems, `{ vertical, horizontal }`, or `{ top, right, bottom, left }`.
     * @default 1
     */
    padding?: CardContentPadding;
    /**
     * Vertical gap between rows in the body. A `number` is rems (matching `padding`); pass a
     * string for any other CSS length.
     * Defaults to the layout gutter in `vertical` layout and the list's compact spacing otherwise.
     */
    rowGap?: string | number;
    /** Class name for the root element. */
    className?: string;
};
```

## Examples

### Default

```tsx
export const Default: Story = {
  args: {
    rows: benefitRows,
    summary: { label: 'Ülekande summa', value: '0.00 €' },
    labelSize: 'small',
  },
};
```

### Simple Card

```tsx
export const SimpleCard: Story = {
  render: () => (
    <VerticalSpacing size={1}>
      <TableCard rows={benefitRows} summary={{ label: 'Ülekande summa', value: '0.00 €' }} labelSize="small" />

      <TableCard
        title="ID kaart"
        titleElement="h4"
        titleModifiers="h4"
        endSlot={<StatusBadge color="success">Kehtib 13.08.2027</StatusBadge>}
        layout="vertical"
        labelSize="small"
        columns={2}
        rows={[
          { label: 'Eesnimi', value: 'Mari' },
          { label: 'Sünniaeg', value: '15.08.1987' },
          { label: 'Perenimi', value: 'Maasikas' },
          { label: 'Isikukood', value: '41234567891' },
          { label: 'Dokumendi number', value: 'AS0000226' },
          { label: 'Sugu', value: 'Naine' },
        ]}
      />

      <TableCard
        title="4. juuli 2026"
        layout="vertical"
        labelSize="small"
        rows={[
          { label: 'Päringu teostaja', value: 'EE4800234675' },
          { label: 'Päringu nimetus', value: 'Inimeste arv kohalikus omavalitsuses' },
          { label: 'Infosüsteem', value: 'Rahvastikuregister' },
        ]}
      />

      <TableCard
        layout="vertical"
        rows={[
          { label: 'Periood', value: '01.02 - 14.01.2024' },
          { label: 'Liik', value: 'Haigusleht' },
          { label: 'Pikkus', value: '14 päeva' },
// …
```

### With Actions

```tsx
export const WithActions: StoryFn = () => {
  const people = [
    { name: 'Meelis Mägi', vanus: 23, visits: 7, status: <StatusBadge color="warning">Aegumas</StatusBadge> },
    { name: 'Madis Tamm', vanus: 12, visits: 14, status: <StatusBadge color="success">Kehtiv</StatusBadge> },
    { name: 'Kadi Kuusk', vanus: 43, visits: 24, status: <StatusBadge color="success">Kehtiv</StatusBadge> },
  ];
  return (
    <VerticalSpacing size={1}>
      <EditableAppointmentCard />

      <TableCard
        layout="vertical"
        rows={[
          { label: 'Teenus', value: 'Ortopeedia' },
          { label: 'Arst', value: 'Pille Paunküla' },
          { label: 'Maksumus', value: '45.50 €/h' },
          {
            label: 'Asukoht',
            value: (
              <Dropdown>
                <Dropdown.Trigger>
                  <Button visualType="neutral" size="small" iconRight="expand_more">
                    Tallinn
                  </Button>
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <Dropdown.Item index={0}>Tallinn</Dropdown.Item>
                  <Dropdown.Item index={1}>Tartu</Dropdown.Item>
                  <Dropdown.Item index={2}>Pärnu</Dropdown.Item>
                </Dropdown.Content>
              </Dropdown>
            ),
          },
        ]}
      />

      <TableCard
        layout="vertical"
        rows={[
          { label: 'Periood', value: '01.02 - 14.01.2024' },
// …
```

### Is Accordion

```tsx
export const IsAccordion: StoryFn = () => {
  const rows: TableCardRow[] = [
    { label: 'Vanus', value: '25' },
    { label: 'Külastuste arv', value: '6' },
    { label: 'Taotluse olek', value: <StatusBadge color="brand">Menetluses</StatusBadge> },
  ];
  return (
    <VerticalSpacing size={1}>
      <TableCard
        title="Hambaarst"
        subtitle="14.04.2026 15:30"
        collapsible
        defaultOpen={false}
        labelSize="small"
        labelAlign="left"
        valueAlign="left"
        rowAlign="center"
        rows={rows}
      />

      <TableCard
        title="Hambaarst"
        subtitle="14.04.2026 15:30"
        collapsible
        defaultOpen={false}
        labelSize="small"
        labelAlign="left"
        valueAlign="left"
        rowAlign="center"
        rows={rows}
        actions={
          <>
            <Button visualType="neutral" fullWidth iconLeft="edit">
              Muuda
            </Button>
            <Button visualType="neutral" fullWidth iconLeft="close">
              Tühista
            </Button>
            <Button visualType="neutral" fullWidth iconLeft="more_vert">
              Rohkem
// …
```

### Has Children Rows

```tsx
export const HasChildrenRows: StoryFn = () => {
  const certificates = ['Puukentsefaliidi vaktsiin', 'COVID-19'];
  const validBadge = (
    <StatusBadge color="success" variant="filled-bordered">
      Kehtiv
    </StatusBadge>
  );
  const editButton = (
    <Button visualType="neutral" fullWidth iconLeft="edit">
      Muuda
    </Button>
  );

  return (
    <VerticalSpacing size={1}>
      <TableCard
        title="Kadri Kaasik"
        collapsible
        layout="horizontal"
        labelAlign="left"
        valueAlign="left"
        labelWidth="var(--text-group-label-width-sm)"
        rows={[
          { label: 'Vanus', value: '25' },
          { label: 'Külastuste arv', value: '6' },
        ]}
        actions={editButton}
      >
        {certificates.map((name) => (
          <Card.Content key={name} padding={1} background="tertiary" hasSeparator>
            <VerticalSpacing size={0.5}>
              <TextGroup.List
                type="horizontal"
                labelAlign="left"
                valueAlign="left"
                labelWidth="var(--text-group-label-width-sm)"
                items={[
                  { label: 'Tõend', value: name },
                  { label: 'Tõendi staatus', value: validBadge },
                ]}
// …
```

### With Responsive Layout

```tsx
export const WithResponsiveLayout: Story = {
  args: {
    title: 'ID kaart',
    titleElement: 'h4',
    titleModifiers: 'h4',
    endSlot: <StatusBadge color="success">Kehtib 13.08.2027</StatusBadge>,
    layout: 'vertical',
    labelSize: 'small',
    columns: 1,
    md: { columns: 2 },
    rows: [
      { label: 'Eesnimi', value: 'Mari' },
      { label: 'Sünniaeg', value: '15.08.1987' },
      { label: 'Perenimi', value: 'Maasikas' },
      { label: 'Isikukood', value: '41234567891' },
      { label: 'Dokumendi number', value: 'AS0000226' },
      { label: 'Sugu', value: 'Naine' },
    ],
  },
};
```

Full story source: `src/tedi/components/content/table-card/table-card.stories.tsx`.

## Related

`Button`, `Field`, `Select`, `VerticalSpacing`, `Dropdown`, `StatusBadge`, `Card`, `Label`, `TextGroup`
