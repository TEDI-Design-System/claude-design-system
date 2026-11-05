Modal from @tedi-design-system/react. Use via `window.Tedi.Modal` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `Modal.Trigger`, `Modal.Content`, `Modal.Header`, `Modal.Body`, `Modal.Footer`, `Modal.Closer`.

Variants (see `preview.html`): Default, Position, Size, Width, Custom Width, Fullscreen, Scrollable Content, With Description, No Backdrop Close, No Close Button, Footer Variants, Responsive Props, Alert Dialog, Controlled, Open For Visual Test, Open Small For Visual Test, Open Wide Scrolling For Visual Test, Open Position Top For Visual Test, Open Position Drawer For Visual Test, Open Fullscreen Edge For Visual Test.

## Props

```ts
import * as React from 'react';

/**
 * Modal from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/overlays/modal/modal.stories.tsx).
 */
export interface ModalProps {
  /** `<Modal.Trigger>` and `<Modal.Content>` children. */
  children: ReactNode;
  /** Open state for uncontrolled mode. Use `open` + `onToggle` for controlled mode. */
  defaultOpen?: boolean;
  /** Open state for controlled mode. Pair with `onToggle`. */
  open?: boolean;
  /** Called whenever the modal opens or closes. Pair with `open` for controlled mode. */
  onToggle?: (open: boolean) => void;
  /** Close the modal when the backdrop is clicked. */
  closeOnBackdropClick?: boolean;
  /** Close the modal when the Escape key is pressed. */
  closeOnEscape?: boolean;
  /** ARIA role for the dialog. Use `'alertdialog'` for destructive confirmations (delete, cancel subscription) — screen readers announce alertdialogs with higher urgency and require an explicit user action to dismiss. Affects both the trigger's `aria-haspopup` and the floating element's `role`. */
  role?: ModalRole;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type ModalRole = 'dialog' | 'alertdialog';
```

## Examples

### Default

```tsx
export const Default: StoryObj = {
  argTypes: {
    ...subcomponentArgTypes(Modal.Content, {
      category: 'Modal.Content',
      prefix: 'content',
      exclude: ['children', 'initialFocus', 'aria-labelledby', 'aria-describedby', 'aria-label'],
    }),
  },
  render: (args: Record<string, unknown>) => {
    const { heading = 'Modal title', description, closeButton = true, ...rest } = args;
    return (
      <Modal {...getPrimaryComponentProps<ModalProps>(rest)}>
        <Modal.Trigger>
          <Button visualType="secondary">Open modal</Button>
        </Modal.Trigger>
        <Modal.Content {...getSubcomponentProps(args, 'content')}>
          <Modal.Header
            title={heading as string}
            description={description as string | undefined}
            closeButton={closeButton as boolean}
          />
          <Modal.Body>
            <SampleForm />
          </Modal.Body>
          <DefaultFooter />
        </Modal.Content>
      </Modal>
    );
  },
};
```

### Position

```tsx
export const Position: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: () => (
    <Row gutterY={2}>
      {(['center', 'top', 'right', 'left'] as const).map((p) => (
        <Col key={p} xs="auto">
          <Modal>
            <Modal.Trigger>
              <Button visualType="secondary">
                {p === 'center' ? 'Center' : p === 'top' ? 'Top-aligned' : `Side (${p})`}
              </Button>
            </Modal.Trigger>
            <Modal.Content position={p} width={p === 'right' || p === 'left' ? 'sm' : 'md'}>
              <Modal.Header
                title={p === 'center' ? 'Center modal' : p === 'top' ? 'Top-aligned modal' : `Side modal (${p})`}
              />
              <Modal.Body>
                <SampleForm />
              </Modal.Body>
              <DefaultFooter />
            </Modal.Content>
          </Modal>
        </Col>
      ))}
    </Row>
  ),
};
```

### Size

```tsx
export const Size: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: () => (
    <Row gutterY={2}>
      <Col xs="auto">
        <Modal>
          <Modal.Trigger>
            <Button visualType="secondary">Open small modal</Button>
          </Modal.Trigger>
          <Modal.Content size="small" width="sm">
            <Modal.Header title="Small modal" />
            <Modal.Body>
              <SampleForm />
            </Modal.Body>
            <DefaultFooter />
          </Modal.Content>
        </Modal>
      </Col>
      <Col xs="auto">
        <Modal>
          <Modal.Trigger>
            <Button visualType="secondary">Open default modal</Button>
          </Modal.Trigger>
          <Modal.Content size="default" width="sm">
            <Modal.Header title="Default modal" />
            <Modal.Body>
              <SampleForm />
            </Modal.Body>
            <DefaultFooter />
          </Modal.Content>
        </Modal>
      </Col>
    </Row>
  ),
};
```

### Width

```tsx
export const Width: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: () => (
    <Row gutterY={2}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as ModalWidthPreset[]).map((w) => (
        <Col key={w} xs="auto">
          <Modal>
            <Modal.Trigger>
              <Button visualType="secondary">{w}</Button>
            </Modal.Trigger>
            <Modal.Content width={w}>
              <Modal.Header title={`Width: ${w}`} />
              <Modal.Body>
                <SampleForm />
              </Modal.Body>
              <DefaultFooter />
            </Modal.Content>
          </Modal>
        </Col>
      ))}
    </Row>
  ),
};

/**
 * `width` also accepts any CSS length (e.g. `'800px'`, `'60vw'`). Pair it with `maxWidth`
 * to cap the size on small viewports.
 */
```

### Custom Width

```tsx
export const CustomWidth: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  name: 'Custom width',
  render: () => (
    <Modal>
      <Modal.Trigger>
        <Button visualType="secondary">Open modal</Button>
      </Modal.Trigger>
      <Modal.Content width="800px" maxWidth="75%" position="left">
        <Modal.Header title="Width: 800px, max: 75%" />
        <Modal.Body>
          <SampleForm />
        </Modal.Body>
        <DefaultFooter />
      </Modal.Content>
    </Modal>
  ),
};

/**
 * Three sizing modes:
 *
 * - `fullscreen={true}` — padded fullscreen (modal fills the overlay's content box,
 *   16px backdrop visible all around — matches Figma `5981:67531`).
 * - `fullscreen="edge"` — true edge-to-edge takeover (no backdrop, no border, no radius).
 *
 * For responsive behaviour (e.g. fullscreen on phone, centered modal on
 * desktop) combine `fullscreen` with the breakpoint API — see the
 * **Responsive props** story.
 */
```

### Fullscreen

```tsx
export const Fullscreen: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: () => {
    const variants: { label: string; value: ModalFullscreen }[] = [
      { label: 'Normal (default)', value: false },
      { label: 'Padded fullscreen', value: true },
      { label: 'Edge-to-edge fullscreen', value: 'edge' },
    ];
    return (
      <Row gutterY={2}>
        {variants.map(({ label, value }) => (
          <Col key={label} xs="auto">
            <Modal>
              <Modal.Trigger>
                <Button visualType="secondary">{label}</Button>
              </Modal.Trigger>
              <Modal.Content width="md" fullscreen={value}>
                <Modal.Header title={label} />
                <Modal.Body>
                  <SampleForm />
                </Modal.Body>
                <DefaultFooter />
              </Modal.Content>
            </Modal>
          </Col>
        ))}
      </Row>
    );
  },
};
```

Full story source: `src/tedi/components/overlays/modal/modal.stories.tsx`.

## Related

`Heading`, `Text`, `TextField`, `Col`, `Row`, `VerticalSpacing`, `ScrollFade`
