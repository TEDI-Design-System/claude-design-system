ScrollVisibility from @tedi-design-system/react. Use via `window.Tedi.ScrollVisibility` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default, Toggle Visibility, Animation Direction.

## Props

```ts
import * as React from 'react';

/**
 * ScrollVisibility from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/misc/scroll-visibility/scroll-visibility.stories.tsx).
 */
export interface ScrollVisibilityProps {
  /** Content to hide/show */
  children: ReactNode;
  /** Additional class name which applies to first child element */
  className?: string;
  /** Conditionally enable the functionality */
  enabled?: boolean;
  /** Determines wheter to hide or show when scrolled past scrollDistance */
  visibility?: 'hide' | 'show';
  /** Determines if the component's visibility toggles when scrolling opposite direction after crossing scrollDistance */
  toggleVisibility?: boolean;
  /** Distance in px user has to scroll for the component to show/hide */
  scrollDistance?: number;
  /** Direction used to calculate `scrollDistance`: - down: Measured from the top of the page. - up: Measured from the bottom of the page. */
  scrollDirection?: 'up' | 'down';
  /** Detect scroll based on this element */
  scrollContainer?: HTMLElement;
  /** Direction the component animates to */
  animationDirection?: AnimationDirection;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type AnimationDirection = 'left' | 'right' | 'down' | 'up' | 'center';
```

## Examples

### Default

```tsx
export const Default: Story = {
  render: FloatingButtonTemplate,
  args: {
    children: (
      <FloatingButton
        position="fixed"
        placement={{ vertical: 'bottom', horizontal: 'right' }}
        offset={{ right: 32, bottom: 32 }}
        onClick={() => scrollTo({ top: 0 })}
        icon="arrow_upward"
      >
        Scroll Up
      </FloatingButton>
    ),
    enabled: true,
    visibility: 'show',
    toggleVisibility: false,
    scrollDirection: 'down',
    scrollDistance: 30,
    animationDirection: 'down',
  },
  parameters: {
    docs: { story: { inline: false, iframeHeight: CONTAINER_HEIGHT } },
    layout: 'fullscreen',
  },
};
```

### Toggle Visibility

```tsx
export const ToggleVisibility: Story = {
  render: NavigationTemplate,
  args: {
    children: (
      <nav
        style={{
          position: 'sticky',
          top: 0,
          background: 'rgb(0, 72, 130)',
          color: 'white',
          borderBottom: '1px solid black',
          height: NAVIGATION_HEIGHT,
          alignContent: 'center',
          padding: '0 16px',
        }}
      >
        Navigation
      </nav>
    ),
    enabled: true,
    visibility: 'hide',
    toggleVisibility: true,
    scrollDirection: 'down',
    scrollDistance: NAVIGATION_HEIGHT,
    animationDirection: 'up',
  },
};
```

### Animation Direction

```tsx
export const AnimationDirection: Story = {
  render: AnimationDirectionTemplate,
  args: {
    visibility: 'hide',
    scrollDistance: NAVIGATION_HEIGHT,
  },
  parameters: {
    docs: { story: { inline: false, iframeHeight: CONTAINER_HEIGHT } },
    layout: 'fullscreen',
  },
};
```

Full story source: `src/tedi/components/misc/scroll-visibility/scroll-visibility.stories.tsx`.

## Related

`Text`
