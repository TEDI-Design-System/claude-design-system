CardStepper from @tedi-design-system/react. Use via `window.Tedi.CardStepper` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Sub-components: `CardStepper.Step`.

Variants (see `preview.html`): Default, Without Step Number, With Status Icon, With Info Bottom, With Info Top, Has Navigation, Without Progressbar, With Bottom Slot, Many Steps, Collapsible Sub Steps, Interactive, Card Stepper Button, Card Stepper Button States.

## Props

```ts
import * as React from 'react';

/**
 * CardStepper from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/navigation/card-stepper/card-stepper.stories.tsx).
 */
export interface CardStepperProps {
  /** `CardStepper.Step` elements (compound API) — the active step shows on the card, all steps in the modal. Alternative to the `steps` data prop. */
  children?: React.ReactNode;
  /** Steps as data (alternative to `CardStepper.Step` children). Ignored when `children` contains `CardStepper.Step` elements. */
  steps?: CardStepperStepProps[];
  /** Active step index (0-based), controlled. Pair with `onStepChange`. */
  activeStep?: number;
  /** Initial active step index for uncontrolled usage. */
  defaultActiveStep?: number;
  /** Fired with the new index when the user navigates (arrows) or picks a step in the modal. */
  onStepChange?: (index: number) => void;
  /** Show the active step's number in a ring indicator on the left. Ignored when `showNavigation` is set — the back arrow occupies the left slot instead. */
  showStepNumber?: boolean;
  /** Show a status icon next to the active step's title — a success check when the step's `state` is `'completed'`, a danger icon when it's `'error'`. Nothing is shown for other states. */
  showStatusIcon?: boolean;
  /** Where the active step's `description` sits relative to its title: - `'bottom'` (default) — below the title. - `'top'` — above the title, as a small secondary line. */
  descriptionPosition?: 'top' | 'bottom';
  /** Where the `N / M` step counter sits: - `'inline'` (default) — in the trailing controls, next to the list / next button. - `'top'` — above the title (and removed from the trailing controls). */
  counterPosition?: 'inline' | 'top';
  /** Show the segmented progress bar below the row. */
  showProgress?: boolean;
  /** Show previous / next arrow buttons on the edges. They move sequentially and skip `disabled` steps. */
  showNavigation?: boolean;
  /** Show the list button and the step-list modal. Turn off for a read-only progress tracker or an arrows-only flow. */
  showStepList?: boolean;
  /** Which steps can be jumped to from the step-list modal: - `true` — any step - `false` — none (the list is read-only) - `'completed'` — only completed steps - `'completed-or-next'` — completed steps and the one immediately after the active step A per-step `disabled` always wins. The prev/next arrows are sequential and are **not** gated by this. */
  allowJump?: boolean | 'completed' | 'completed-or-next';
  /** Heading element for the active step's title — set it to fit the surrounding page's heading hierarchy. The visual size is unchanged. */
  headingElement?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Accessible label overrides. Otherwise sourced from the `LabelProvider`. */
  labels?: CardStepperLabels;
  /** Accessible name for the card region. */
  "aria-label"?: string;
  /** Additional class name applied to the card root. */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
interface CardStepperStepProps {
    /**
     * Step title.
     */
    title: React.ReactNode;
    /**
     * Optional secondary line shown under the title (on the card for the active
     * step, and always in the step-list modal).
     */
    description?: React.ReactNode;
    /**
     * Visual / semantic state used in the progress bar and the step-list modal.
     * @default default
     */
    state?: VerticalStepperItemState;
    /**
     * Stable key for the step. Falls back to the array index.
     */
    id?: string;
    /**
     * Excludes the step from navigation — not reachable via the arrows or the step
     * list, and rendered as disabled in the modal.
     */
    disabled?: boolean;
    /**
     * Custom content rendered at the bottom of the card when this step is active —
     * e.g. an inline `Alert`, a "read more" link or an action button. Only shown for
     * the active step. Matches the Figma "with bottom slot" variant.
     */
    bottomSlot?: React.ReactNode;
    /**
     * Sub-steps shown under this step in the step-list modal. When present the step
     * becomes a collapsible parent — the title navigates and a chevron expands the
     * sub-step list.
     */
    subSteps?: CardStepperSubStepProps[];
    /**
     * Whether the sub-step list starts expanded in the modal. Defaults to expanded
     * for the active step. Only relevant with `subSteps`.
     */
    defaultExpanded?: boolean;
}
interface CardStepperLabels {
    /** Accessible label for the previous-step button. Defaults to the `stepper.previous` label. */
    previous?: string;
    /** Accessible label for the next-step button. Defaults to the `stepper.next` label. */
    next?: string;
    /** Accessible label for the button that opens the step list. Defaults to the `stepper.open-steps` label. */
    openSteps?: string;
    /** Heading of the step-list modal. Defaults to the `stepper.steps` label. */
    modalHeading?: string;
    /**
     * Screen-reader phrasing for the `N / M` counter (the visible "N / M" is hidden
     * from assistive tech, since "N slash M" reads poorly). Defaults to the
     * `stepper.status` label.
     */
    status?: (current: number, total: number) => string;
}
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: () => <CardStepper steps={STEPS_NO_DESC} activeStep={2} labels={ET_LABELS} aria-label="Taotluse sammud" />,
};
```

### Without Step Number

```tsx
export const WithoutStepNumber: Story = {
  render: () => (
    <CardStepper
      steps={STEPS_NO_DESC}
      activeStep={2}
      showStepNumber={false}
      labels={ET_LABELS}
      aria-label="Taotluse sammud"
    />
  ),
};
```

### With Status Icon

```tsx
export const WithStatusIcon: Story = {
  render: () => (
    <VerticalSpacing size={1}>
      <CardStepper
        steps={[
          { title: 'Isikuandmed', state: 'completed' },
          { title: 'Üldandmed', state: 'completed' },
          { title: 'Taotleja andmed', state: 'completed' },
          { title: 'Ülevaade' },
        ]}
        activeStep={2}
        showStatusIcon
        labels={ET_LABELS}
        aria-label="Taotluse sammud"
      />
      <CardStepper
        steps={[
          { title: 'Isikuandmed', state: 'completed' },
          { title: 'Üldandmed', state: 'completed' },
          { title: 'Taotleja andmed', state: 'error' },
          { title: 'Ülevaade' },
        ]}
        activeStep={2}
        showStatusIcon
        labels={ET_LABELS}
        aria-label="Taotluse sammud"
      />
    </VerticalSpacing>
  ),
};
```

### With Info Bottom

```tsx
export const WithInfoBottom: Story = {
  render: () => {
    const INFO_BOTTOM_STEPS: CardStepperStepProps[] = [
      { title: 'Isikuandmed', description: 'Taotleja või esindatav', state: 'completed' },
      { title: 'Üldandmed', description: 'Taotleja või esindatav', state: 'completed' },
      { title: 'Taotleja andmed', description: 'Taotleja või esindatav' },
      { title: 'Ülevaade', description: 'Taotleja või esindatav' },
    ];

    return (
      <VerticalSpacing size={1}>
        <CardStepper
          steps={INFO_BOTTOM_STEPS}
          activeStep={2}
          showStepNumber={false}
          labels={ET_LABELS}
          aria-label="Taotluse sammud"
        />
        <CardStepper
          steps={INFO_BOTTOM_STEPS}
          activeStep={1}
          showNavigation
          labels={ET_LABELS}
          aria-label="Taotluse sammud"
        />
        <CardStepper steps={INFO_BOTTOM_STEPS} activeStep={2} labels={ET_LABELS} aria-label="Taotluse sammud" />
      </VerticalSpacing>
    );
  },
};
```

### With Info Top

```tsx
export const WithInfoTop: Story = {
  render: () => {
    const INFO_TOP_STEPS: CardStepperStepProps[] = [
      { title: 'Isikuandmed', description: 'Nimi ja kontakt', state: 'completed' },
      { title: 'Dokumendid', description: 'Üleslaaditud failid', state: 'completed' },
      { title: 'Elukoht', description: 'Aadress' },
      { title: 'Ülevaade', description: 'Kokkuvõte' },
    ];

    return (
      <VerticalSpacing size={1}>
        <CardStepper
          steps={STEPS_NO_DESC}
          activeStep={2}
          counterPosition="top"
          showStepNumber={false}
          labels={ET_LABELS}
          aria-label="Taotluse sammud"
        />
        <CardStepper
          steps={INFO_TOP_STEPS}
          activeStep={2}
          descriptionPosition="top"
          labels={ET_LABELS}
          aria-label="Taotluse sammud"
        />
        <CardStepper
          steps={INFO_TOP_STEPS}
          activeStep={1}
          descriptionPosition="top"
          showNavigation
          labels={ET_LABELS}
          aria-label="Taotluse sammud"
        />
        <CardStepper
          steps={INFO_TOP_STEPS}
          activeStep={2}
          descriptionPosition="top"
          showStepNumber={false}
          labels={ET_LABELS}
// …
```

### Has Navigation

```tsx
export const HasNavigation: Story = {
  render: () => (
    <VerticalSpacing size={1}>
      <CardStepper
        steps={STEPS_NO_DESC}
        activeStep={1}
        showNavigation
        labels={ET_LABELS}
        aria-label="Taotluse sammud"
      />
    </VerticalSpacing>
  ),
};
```

Full story source: `src/tedi/components/navigation/card-stepper/card-stepper.stories.tsx`.

## Related

`Icon`, `Text`, `Button`, `CardButton`, `Card`, `Collapse`, `Col`, `Row`, `VerticalSpacing`, `Alert`
