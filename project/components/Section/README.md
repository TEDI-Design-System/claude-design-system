Section from @tedi-design-system/react. Use via `window.Tedi.Section` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Section As Article, Section With Custom Id And ARIA.

## Props

```ts
import * as React from 'react';

/**
 * Section from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/content/section/section.stories.tsx).
 */
export interface SectionProps {
  /** Section content */
  children?: React.ReactNode;
  /** Additional class names */
  className?: string;
  /** Defines the HTML element to render (e.g., section, article, aside, etc.) */
  as?: 'section' | 'article' | 'aside' | 'div';
  /** ARIA role for accessibility */
  role?: string;
  /** Unique identifier for the section */
  id?: string;
}
```

## Examples

### Default

```tsx
export const Default: Story = {
  args: {
    children: (
      <VerticalSpacing>
        <Heading>Page title</Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget convallis quam, eu rhoncus turpis.
          Vestibulum venenatis leo eget felis accumsan, in finibus metus tristique. Curabitur ac quam eu justo consequat
          efficitur quis eget purus. Donec blandit, augue in vehicula tempor, erat nulla tincidunt tellus, ut tincidunt
          purus dolor sed augue.
        </p>
      </VerticalSpacing>
    ),
    className: 'default-section',
  },
};
```

### Section As Article

```tsx
export const SectionAsArticle: Story = {
  args: {
    as: 'article',
    children: (
      <VerticalSpacing>
        <Heading>Article Title</Heading>
        <p>
          This is a section rendered as an <code>article</code> element. It can be used to define sections of content
          that could stand independently.
        </p>
      </VerticalSpacing>
    ),
    className: 'article-section',
  },
};
```

### Section With Custom Id And ARIA

```tsx
export const SectionWithCustomIdAndARIA: Story = {
  args: {
    as: 'section',
    id: 'custom-section',
    role: 'complementary',
    children: (
      <VerticalSpacing>
        <Heading id="section-heading">Custom Section with ARIA</Heading>
        <p>
          This section demonstrates the use of custom <code>id</code> and ARIA attributes for accessibility.
        </p>
      </VerticalSpacing>
    ),
    className: 'custom-section',
  },
};
```

Full story source: `src/tedi/components/content/section/section.stories.tsx`.

## Related

`Heading`, `VerticalSpacing`
