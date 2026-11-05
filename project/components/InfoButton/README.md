InfoButton from @tedi-design-system/react. Use via `window.Tedi.InfoButton` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, States, Inverted, Usage With Tooltip And Popover.

## Props

```ts
import * as React from 'react';

/**
 * InfoButton from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/buttons/info-button/info-button.stories.tsx).
 */
export interface InfoButtonProps {
  /** If true, applies a small size to the InfoButton */
  isSmall?: boolean;
  /** Children elements to be rendered inside the InfoButton */
  children?: React.ReactNode;
  color?: 'default' | 'inverted';
  sm?: Partial<import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/components/buttons/button-content/button-content").ButtonContentProps<"button", IInternalButtonProps, "button">>;
  md?: Partial<import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/components/buttons/button-content/button-content").ButtonContentProps<"button", IInternalButtonProps, "button">>;
  lg?: Partial<import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/components/buttons/button-content/button-content").ButtonContentProps<"button", IInternalButtonProps, "button">>;
  xl?: Partial<import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/components/buttons/button-content/button-content").ButtonContentProps<"button", IInternalButtonProps, "button">>;
  xxl?: Partial<import("/home/runner/work/claude-design-system/claude-design-system/react/dist/src/tedi/components/buttons/button-content/button-content").ButtonContentProps<"button", IInternalButtonProps, "button">>;
  /** Additional custom class name. */
  className?: string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  /** Render as custom component */
  as?: C;
  /** Button visual type */
  visualType?: ButtonType;
  /** If button should take all the space it has */
  fullWidth?: boolean;
  /** Name of the icon when button only has an icon in it. */
  icon?: string | IconWithoutBackgroundProps;
  /** Name of the icon we want to show on the left. */
  iconLeft?: string | IconWithoutBackgroundProps;
  /** Name of the icon we want to show on the right. */
  iconRight?: string | IconWithoutBackgroundProps;
  /** Underline the button text */
  underline?: boolean;
  /** If button is active and should keep its hover state. */
  isHovered?: boolean;
  /** If button is active and should keep it's active state. */
  isActive?: boolean;
  /** If button is in loading state and should show spinner. When isLoading is true, button does not trigger onClick event. */
  isLoading?: boolean;
  /** Skip applying button/link styles Useful when you just want to use Button or Link logic without the styles In this case icon, iconLeft and iconRight are ignored */
  noStyle?: boolean;
  /** Internal use only */
  renderWrapperElement?: unknown;
  /** Automatically show tooltip for icon-only buttons. */
  showTooltip?: boolean;
  /** Button type */
  type?: 'submit' | 'button' | 'reset';
  /** Skips form's browser validation */
  formNoValidate?: boolean;
  ref?: PolymorphicRef<C>;
}
// Also accepts 269 standard React / HTML attributes of its root element.

// Referenced types, resolved one level deep (see the story source for the rest).
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type ButtonType = 'primary' | 'secondary' | 'neutral' | 'link';
interface IconWithoutBackgroundProps extends IconSharedProps {
    background?: undefined;
    /**
     * Type of display
     * @default block
     */
    display?: 'block' | 'inline';
}
type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];
```

## Examples

### Default

```tsx
export const Default: Story = {};
```

### States

```tsx
export const States: StoryObj<TemplateMultipleProps> = {
  render: TemplateColumn,
  args: {
    array: buttonStateArray,
  },
  parameters: {
    pseudo: {
      hover: '#Hover',
      active: '#Active',
      focusVisible: '#Focus',
    },
  },
};
```

### Inverted

```tsx
export const Inverted: StoryObj<TemplateMultipleProps> = {
  render: TemplateColumn,
  args: {
    array: buttonStateArray,
    color: 'inverted',
  },
  parameters: {
    pseudo: {
      hover: '#Hover',
      active: '#Active',
      focusVisible: '#Focus',
    },
  },
  globals: { backgrounds: { value: 'brand' } },
};
```

### Usage With Tooltip And Popover

```tsx
export const UsageWithTooltipAndPopover: Story = {
  name: 'Usage with tooltip and popover',
  parameters: { controls: { disable: true } },
  render: () => {
    const bloodGroup = (
      <TextGroup
        type="vertical"
        label={
          <span style={labelStyle}>
            <Label>Veregrupp</Label>
            <Tooltip>
              <Tooltip.Trigger>
                <InfoButton aria-label="Rohkem infot veregrupi kohta" />
              </Tooltip.Trigger>
              <Tooltip.Content>Veregrupp määratakse vereanalüüsiga ning see ei muutu elu jooksul.</Tooltip.Content>
            </Tooltip>
          </span>
        }
        value="AB-"
      />
    );

    const dentalBenefit = (
      <TextGroup
        type="vertical"
        label={
          <span style={labelStyle}>
            <Label>Hambaravihüvitise jääk</Label>
            <Popover>
              <Popover.Trigger>
                <InfoButton aria-label="Rohkem infot hüvitise kohta" />
              </Popover.Trigger>
              <Popover.Content width="medium">
                <VerticalSpacing size={0.5}>
                  <Text>
                    Hambaravihüvitist saab kasutada jooksva kalendriaasta jooksul. Kasutamata jääk järgmisesse aastasse
                    ei kandu.
                  </Text>
                  <div style={{ textAlign: 'right' }}>
                    <Link href="#" underline={false} iconRight="arrow_forward">
// …
```

Full story source: `src/tedi/components/buttons/info-button/info-button.stories.tsx`.

## Related

`Text`, `Label`, `TextGroup`, `Col`, `Row`, `HideAt`, `ShowAt`, `VerticalSpacing`, `Link`
