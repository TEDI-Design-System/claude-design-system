ButtonGroup from @tedi-design-system/react. Use via `window.Tedi.ButtonGroup` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Sizes, Types, With Icon, Icon Only, Primary, Secondary, Different Width Buttons, Stretched.

## Props

```ts
import * as React from 'react';

/**
 * ButtonGroup from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/buttons/button-group/button-group.stories.tsx).
 */
export interface ButtonGroupProps {
  /** The child components to render inside the ButtonGroup. Typically, these should be `<Button>` components. */
  children: ReactNode;
  /** The visual style of the ButtonGroup, determining its color and appearance. */
  type?: 'primary' | 'secondary';
  /** Callback function triggered when the selected button changes. Receives the `id` of the selected button as an argument. */
  onSelectionChange?: (id: string) => void;
  /** Whether all buttons in the group should have equal width and stretched inside their parent element. If `true`, all buttons will take up equal space. If `false`, the button widths will be determined by their content. */
  stretch?: boolean;
  /** A label for the button group, used for accessibility. Required if the group does not have a visible label. */
  ariaLabel?: string;
  /** Additional custom CSS classes to apply to the ButtonGroup container */
  className?: string;
  /** Size of the buttons in ButtonGroup */
  size?: 'default' | 'small';
  /** Whether the button group should collapse into a dropdown on mobile */
  enableMobileDropdown?: boolean;
  /** Breakpoint at which to switch to dropdown */
  mobileBreakpoint?: Breakpoint;
  /** Label to display on the dropdown trigger button when the button group collapses on mobile. If not provided, the label provider value for `sidenav.submenu` will be used as fallback. */
  dropdownLabel?: string;
  dropdownLabelMode?: 'active' | 'static';
}

// Referenced types, resolved one level deep (see the story source for the rest).
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: Template,
  args: {
    type: 'primary',
    stretch: false,
    dropdownLabel: 'Text',
    enableMobileDropdown: true,
  },
};
```

### Sizes

```tsx
export const Sizes: StoryObj<TemplateMultipleProps> = {
  render: TemplateSizes,
  args: {
    property: 'size',
    array: sizeArray,
    dropdownLabel: 'Text',
    enableMobileDropdown: true,
  },
};
```

### Types

```tsx
export const Types: StoryObj<typeof Button> = {
  render: TemplateTypes,
};
```

### With Icon

```tsx
export const WithIcon: Story = {
  render: TemplateWithIcons,
  args: {
    type: 'primary',
    enableMobileDropdown: true,
    dropdownLabelMode: 'active',
  },
};
```

### Icon Only

```tsx
export const IconOnly: Story = {
  render: TemplateIconOnly,
  args: {
    type: 'primary',
  },
};
```

### Primary

```tsx
export const Primary: StoryObj<{ states: string[] }> = {
  render: (args) => <TemplateColumn {...args} type="primary" />,
  args: {
    states: buttonStates,
  },
  parameters: {
    pseudo: {
      hover: ['#Hover-primary'],
      active: ['#Active-primary'],
      focusVisible: ['#Focus-primary'],
    },
  },
};
```

Full story source: `src/tedi/components/buttons/button-group/button-group.stories.tsx`.

## Related

`Text`, `Col`, `Row`, `VerticalSpacing`, `Button`
