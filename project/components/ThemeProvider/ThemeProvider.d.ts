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
