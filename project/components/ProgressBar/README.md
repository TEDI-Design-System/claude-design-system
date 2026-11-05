ProgressBar from @tedi-design-system/react. Use via `window.Tedi.ProgressBar` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Sizes, Position, With Label, Regular, With Hint, With Error, Value Hidden, Responsive, Animated.

## Props

```ts
import * as React from 'react';

/**
 * ProgressBar from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/loaders/progress-bar/progress-bar.stories.tsx).
 */
export interface ProgressBarProps {
  /** Id forwarded to the bar element so external `<label htmlFor>` can target it. */
  id?: string;
  /** Progress value, clamped to `0..100`. `NaN` is treated as `0`. */
  value?: number;
  /** Label rendered above or inline with the bar. */
  label?: string;
  /** Renders a required indicator on the label. Ignored without `label`. */
  required?: boolean;
  /** Accessible name. Falls back to `label`. */
  ariaLabel?: string;
  /** Use the 4px bar height instead of the 8px default. */
  small?: boolean;
  /** Label placement. Ignored without `label`. */
  labelPosition?: ProgressBarLabelPosition;
  /** Show the percentage value. */
  showValue?: boolean;
  /** Where the percentage sits relative to the bar / hint row. */
  valuePosition?: ProgressBarValuePosition;
  /** Override the rendered value text (e.g. `"1 / 5"`) without affecting the fill. */
  valueLabel?: string;
  /** Hint or error text rendered below the bar via `FeedbackText`. */
  helper?: FeedbackTextProps;
  /** Class on the root wrapper. */
  className?: string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<ProgressBarBreakpointProps>;
  md?: Partial<ProgressBarBreakpointProps>;
  lg?: Partial<ProgressBarBreakpointProps>;
  xl?: Partial<ProgressBarBreakpointProps>;
  xxl?: Partial<ProgressBarBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type ProgressBarLabelPosition = 'top' | 'horizontal';
type ProgressBarValuePosition = 'horizontal' | 'bottom';
interface FeedbackTextProps {
    /**
     * Helper text
     */
    text: React.ReactNode | React.ReactNode[];
    /**
     * ID to reference the helper from aria-describedby attributes.
     * If omitted, then the id might be set through a parent component.
     */
    id?: string;
    /**
     * Additional custom class.
     */
    className?: string;
    /**
     * Type of form-helper.
     * @default hint
     */
    type?: FeedbackTextType;
    /**
     * Position of the helper.
     * @default left
     */
    position?: FeedbackTextPosition;
}
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type ProgressBarBreakpointProps = {
    /**
     * Use the 4px bar height instead of the 8px default.
     * @default false
     */
    small?: boolean;
    /**
     * Label placement. Ignored without `label`.
     * @default top
     */
    labelPosition?: ProgressBarLabelPosition;
    /**
     * Show the percentage value.
     * @default true
     */
    showValue?: boolean;
    /**
     * Where the percentage sits relative to the bar / hint row.
     * @default horizontal
     */
    valuePosition?: ProgressBarValuePosition;
    /**
     * Override the rendered value text (e.g. `"1 / 5"`) without affecting the fill.
     */
    valueLabel?: string;
    /**
     * Hint or error text rendered below the bar via `FeedbackText`.
     */
    helper?: FeedbackTextProps;
    /** Class on the root wrapper. */
    className?: string;
};
```

## Examples

### Default

```tsx
export const Default: Story = {
  args: { value: 60, ariaLabel: 'Edenemisriba pealkiri' },
};
```

### Sizes

```tsx
export const Sizes: Story = {
  render: () => <MatrixTable rows={sizeRows} />,
  parameters: {
    docs: {
      source: {
        code: `<ProgressBar value={20} ariaLabel="Edenemisriba pealkiri" helper={{ text: 'Üleslaadimine', type: 'hint' }} />
<ProgressBar value={20} small ariaLabel="Edenemisriba pealkiri" helper={{ text: 'Üleslaadimine', type: 'hint' }} />`,
      },
    },
  },
};
```

### Position

```tsx
export const Position: Story = {
  render: () => <MatrixTable rows={positionRows} />,
  parameters: {
    docs: {
      source: {
        code: `<ProgressBar value={20} label="Edenemisriba pealkiri" required labelPosition="top" valuePosition="horizontal" helper={{ text: 'Üleslaadimine', type: 'hint' }} />
<ProgressBar value={20} label="Edenemisriba pealkiri" required labelPosition="top" valuePosition="bottom" helper={{ text: 'Üleslaadimine', type: 'hint' }} />
<ProgressBar value={20} label="Edenemisriba pealkiri" required labelPosition="top" valuePosition="horizontal" helper={{ text: 'Üleslaadimine', type: 'hint' }} md={{ labelPosition: 'horizontal' }} />
<ProgressBar value={20} label="Edenemisriba pealkiri" required labelPosition="top" valuePosition="bottom" helper={{ text: 'Üleslaadimine', type: 'hint' }} md={{ labelPosition: 'horizontal' }} />`,
      },
    },
  },
};
```

### With Label

```tsx
export const WithLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '720px' }}>
      <ProgressBar
        value={40}
        label="Progress"
        required
        valuePosition="bottom"
        helper={{ text: 'Üleslaadimine', type: 'hint' }}
      />
      <ProgressBar
        value={40}
        label="Küsitluses osalenutest olid vanuses 15-18"
        labelPosition="top"
        md={{ labelPosition: 'horizontal' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<ProgressBar value={40} label="Progress" required valuePosition="bottom" helper={{ text: 'Üleslaadimine', type: 'hint' }} />
<ProgressBar value={40} label="Küsitluses osalenutest olid vanuses 15-18" labelPosition="top" lg={{ labelPosition: 'top' }} />`,
      },
    },
  },
};
```

### Regular

```tsx
export const Regular: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '720px' }}>
      <ProgressBar value={40} ariaLabel="Edenemisriba pealkiri" />
      <ProgressBar value={40} ariaLabel="Edenemisriba pealkiri" valueLabel="1 / 5" />
      <ProgressBar value={40} ariaLabel="Edenemisriba pealkiri" valuePosition="bottom" />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<ProgressBar value={40} ariaLabel="Edenemisriba pealkiri" />
<ProgressBar value={40} ariaLabel="Edenemisriba pealkiri" valueLabel="1 / 5" />
<ProgressBar value={40} ariaLabel="Edenemisriba pealkiri" valuePosition="bottom" />`,
      },
    },
  },
};
```

### With Hint

```tsx
export const WithHint: Story = {
  args: {
    value: 40,
    ariaLabel: 'Edenemisriba pealkiri',
    helper: HINT,
  },
};

/**
 * An error row below the bar (announced via `role="alert"`).
 */
```

Full story source: `src/tedi/components/loaders/progress-bar/progress-bar.stories.tsx`.

## Related

`Text`
