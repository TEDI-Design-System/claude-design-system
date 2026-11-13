Sheet from @tedi-design-system/react. Use via `window.Tedi.Sheet` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `Sheet.Trigger`, `Sheet.Content`, `Sheet.Header`, `Sheet.Body`, `Sheet.Footer`, `Sheet.Closer`.

Variants (see `preview.html`): Default, Actions Slot, Corner Radius, Header Variant, Header Type, Padding, Footer Alignment, Docked Peek, Snap Points, Keep Mounted, Controlled, Controlled Collapse, Content Navigation, Scrollable Content, Open For Visual Test, Open Brand For Visual Test, Open Small For Visual Test, Open Without Handle For Visual Test, Collapsed For Visual Test, Open Snap Point For Visual Test, Open Scrollable For Visual Test.

## Props

```ts
import * as React from 'react';

/**
 * Sheet from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/overlays/sheet/sheet.stories.tsx).
 */
export interface SheetProps {
  /** `Sheet.Trigger`, `Sheet.Content` and any other content. */
  children: ReactNode;
  /** Initial open state for uncontrolled usage. */
  defaultOpen?: boolean;
  /** Controlled open state. Provide together with `onToggle`. */
  open?: boolean;
  /** Called whenever the sheet requests to open or close (trigger click, backdrop, Escape, close button). Required to react to changes in controlled mode. */
  onToggle?: (open: boolean) => void;
  /** Close the sheet when the backdrop is clicked. */
  closeOnBackdropClick?: boolean;
  /** Close the sheet when Escape is pressed. */
  closeOnEscape?: boolean;
  /** Initial collapsed state for uncontrolled usage. The sheet returns to this state each time it opens. */
  defaultCollapsed?: boolean;
  /** Controlled collapsed state - collapsed to just its header (docked peek). Collapsing only hides the body and footer, so their content and state are kept, unlike closing. Provide together with `onCollapsedChange` to collapse or expand the sheet from outside (e.g. after a map interaction). */
  collapsed?: boolean;
  /** Called whenever the sheet requests to collapse or expand (header toggle, drag handle). */
  onCollapsedChange?: (collapsed: boolean) => void;
  /** ARIA role of the sheet dialog. Use `alertdialog` for interruptive confirmations. */
  role?: SheetRole;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type SheetRole = 'dialog' | 'alertdialog';
```

## Examples

### Default

```tsx
export const Default: StoryObj = {
  argTypes: {
    ...subcomponentArgTypes(Sheet.Content, {
      category: 'Sheet.Content',
      prefix: 'content',
      exclude: ['children', 'initialFocus', 'aria-labelledby', 'aria-label', 'snapPoints', 'defaultSnapPoint'],
    }),
    ...subcomponentArgTypes(Sheet.Header, {
      category: 'Sheet.Header',
      prefix: 'header',
      include: ['title', 'headingLevel', 'variant', 'titlePosition', 'collapsible', 'closeButton'],
    }),
    ...subcomponentArgTypes(Sheet.Footer, {
      category: 'Sheet.Footer',
      prefix: 'footer',
      include: ['align', 'fullWidth'],
    }),
  },
  args: {
    header__title: 'Filtreerimine',
    header__variant: 'default',
    footer__fullWidth: true,
  },
  render: (args: Record<string, unknown>) => (
    <Sheet {...getPrimaryComponentProps<SheetProps>(args)}>
      <Sheet.Trigger>
        <Button visualType="neutral" iconLeft="tune">
          Filtreeri
        </Button>
      </Sheet.Trigger>
      <Sheet.Content {...getSubcomponentProps<SheetContentProps>(args, 'content')}>
        <Sheet.Header {...getSubcomponentProps<SheetHeaderProps>(args, 'header')} />
        <Sheet.Body padding="none">{filterChoices('sheet-default')}</Sheet.Body>
        <Sheet.Footer {...getSubcomponentProps<SheetFooterProps>(args, 'footer')} endSlot={moreActions}>
          <Sheet.Closer>
            <Button visualType="secondary">Tühista</Button>
          </Sheet.Closer>
          <Button>Rakenda</Button>
        </Sheet.Footer>
      </Sheet.Content>
// …
```

### Actions Slot

```tsx
export const ActionsSlot: Story = {
  name: 'Actions slot',
  render: () =>
    exampleRow([
      {
        caption: 'With footer',
        content: (
          <Sheet.Content>
            <Sheet.Header title="Seaded" variant="default" />
            <Sheet.Body>{settingsBody('sheet-actions-footer')}</Sheet.Body>
            <ApplyFooter more />
          </Sheet.Content>
        ),
      },
      {
        caption: 'Without footer',
        label: 'Loe lähemalt',
        icon: 'menu_book',
        content: (
          <Sheet.Content>
            <Sheet.Header title="Loe lähemalt" variant="default" />
            <Sheet.Body>
              <Text>
                Orav ehk harilik orav ehk punaorav on oravlaste sugukonda kuuluv näriline. See on ainus Eestis
                pärismaisena elav orava perekonna liik. Orava karvastiku värvus varieerub ka Eesti ulatuses: Saaremaal
                on see valdavalt hallikam, mandril punakam.
              </Text>
            </Sheet.Body>
          </Sheet.Content>
        ),
      },
    ]),
};

/** Corner radius also supports breakpoint overrides. */
```

### Corner Radius

```tsx
export const CornerRadius: Story = {
  name: 'Corner radius',
  render: () =>
    exampleRow([
      ...(
        [
          ['24px', 'default'],
          ['4px', 'card'],
          ['0px', 'none'],
        ] as const
      ).map(([caption, radius]) => ({
        caption,
        content: (
          <Sheet.Content radius={radius}>
            <Sheet.Header title="Seaded" variant="default" />
            <Sheet.Body>{settingsBody(`sheet-radius-${radius}`)}</Sheet.Body>
          </Sheet.Content>
        ),
      })),
      {
        caption: '0px → 4px from md',
        content: (
          <Sheet.Content radius="none" md={{ radius: 'card' }}>
            <Sheet.Header title="Seaded" variant="default" />
            <Sheet.Body>{settingsBody('sheet-radius-responsive')}</Sheet.Body>
          </Sheet.Content>
        ),
      },
    ]),
};
```

### Header Variant

```tsx
export const HeaderVariant: Story = {
  name: 'Header variant',
  render: () =>
    exampleRow([
      {
        caption: 'Default',
        content: (
          <Sheet.Content>
            <Sheet.Header title="Seaded" variant="default" />
            <Sheet.Body>{settingsBody('sheet-variant-default')}</Sheet.Body>
          </Sheet.Content>
        ),
      },
      {
        caption: 'Brand',
        visualType: 'primary',
        content: (
          <Sheet.Content>
            <Sheet.Header title="Seaded" variant="brand" />
            <Sheet.Body>{settingsBody('sheet-variant-brand')}</Sheet.Body>
          </Sheet.Content>
        ),
      },
    ]),
};
```

### Header Type

```tsx
export const HeaderType: Story = {
  name: 'Header type',
  render: () => (
    <VerticalSpacing size={2}>
      {exampleGroup('Default', [
        {
          caption: 'Default',
          content: headerExample('sheet-type-default', <Sheet.Header title="Seaded" variant="default" />),
        },
      ])}
      {exampleGroup('Collapsible', [
        {
          caption: 'Heading left',
          content: headerExample(
            'sheet-type-collapsible',
            <Sheet.Header title="Seaded" variant="default" collapsible />
          ),
        },
        {
          caption: 'Heading center',
          content: headerExample(
            'sheet-type-collapsible-center',
            <Sheet.Header title="Seaded" variant="default" titlePosition="center" collapsible />
          ),
        },
      ])}
      {exampleGroup('Heading center', [
        {
          caption: 'Heading center',
          content: headerExample(
            'sheet-type-center',
            <Sheet.Header title="Seaded" variant="default" titlePosition="center" />
          ),
        },
      ])}
      {exampleGroup('Without closing button', [
        {
          caption: 'Heading left',
          content: headerExample(
            'sheet-type-no-close',
// …
```

### Padding

```tsx
export const Padding: Story = {
  render: () => (
    <ExampleRow>
      {(['default', 'small'] as const).map((padding) =>
        labeledTrigger(
          `padding="${padding}"`,
          <Sheet.Content padding={padding}>
            <Sheet.Header title="Seaded" variant="default" />
            <Sheet.Body>{settingsBody(`sheet-padding-${padding}`)}</Sheet.Body>
            <ApplyFooter more />
          </Sheet.Content>
        )
      )}
    </ExampleRow>
  ),
};

/** `align` places the actions; `fullWidth` stretches them, with or without `right`. */
```

Full story source: `src/tedi/components/overlays/sheet/sheet.stories.tsx`.

## Related

`Icon`, `Text`, `Button`, `Accordion`, `TextGroup`, `Checkbox`, `ChoiceGroup`, `DateField`, `Search`, `TextField`, `TimeField`, `VerticalSpacing`, `Separator`, `Tag`
