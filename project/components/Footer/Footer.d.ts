import * as React from 'react';

/**
 * Footer from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/layout/footer/footer.stories.tsx).
 */
export interface FooterProps {
  /** `<Footer.Side>`, `<Footer.Body>` (with `<Footer.Section>` children), and `<Footer.Bottom>` slots. Recognised arrangement: 1. Zero or more `<Footer.Side placement="start">` elements (logos on the left). 2. Exactly one `<Footer.Body>`. 3. Zero or more `<Footer.Side placement="end">` elements (logos on the right). 4. Optional `<Footer.Bottom>` rendered below the main row as a strip with separator dots. Other nodes are rendered verbatim where the consumer placed them. */
  children: ReactNode;
  /** Viewport breakpoint at and below which the footer switches to its stacked mobile layout — sections collapse into accordions, sides stack, the bottom strip wraps. Propagated to every Footer subcomponent via context so they agree on the threshold. */
  mobileBreakpoint?: Breakpoint;
  /** Caps the inner content — the column row and the bottom strip's content — to a maximum width and centers it, while the dark backgrounds stay full-bleed. Pass any CSS length (e.g. `1280`, `'1280px'`, `'80rem'`). Omit to let the content fill the full width (with the 40px padding). */
  maxWidth?: number | string;
  /** Additional class name on the `<footer>` root. */
  className?: string;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
