ThemeProvider from @tedi-design-system/react. Use via `window.Tedi.ThemeProvider` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default.

## Props

```ts
import * as React from 'react';

/**
 * ThemeProvider from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/providers/theme-provider/theme-provider.stories.tsx).
 */
export interface ThemeProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type Theme = TEDITheme | string;
```

## Examples

### Default

```tsx
export const Default = {
  render: () => {
    const [globals, updateGlobals] = useGlobals();

    return (
      <ThemeProvider theme="default">
        <Text element="h3" color={globals.theme === 'dark' ? 'white' : 'primary'}>
          ThemeProvider Example
        </Text>
        <Text element="p" color={globals.theme === 'dark' ? 'white' : 'primary'}>
          Use the buttons below to toggle between default, dark, and RIT themes. The background and text colors should
          update according to the active theme.
        </Text>
        <ThemeSwitcher globals={globals} updateGlobals={updateGlobals} />
        <div style={{ marginTop: '2rem' }}>
          <Button>Primary Button</Button>
          <Button visualType="secondary" style={{ marginLeft: '1rem' }}>
            Secondary Button
          </Button>
        </div>
      </ThemeProvider>
    );
  },

  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
};
```

Full story source: `src/tedi/providers/theme-provider/theme-provider.stories.tsx`.

## Related

`Text`, `Button`
