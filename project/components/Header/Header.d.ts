import * as React from 'react';

/**
 * Header from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/layout/header/header.stories.tsx).
 */
export interface HeaderProps {
  /** Content rendered inside the header, typically Header.Logo, Header.Center, and Header.Actions subcomponents. */
  children: React.ReactNode;
  /** Toggle element for the mobile side navigation menu. Typically a SideNav.Toggle component. */
  toggle?: React.ReactNode;
  /** Content rendered in the top bar above the main header. */
  top?: React.ReactNode;
  /** Content rendered below the main header bar on mobile viewports (below `md` breakpoint). Commonly used for a mobile-specific search bar or other compact navigation elements. */
  bottom?: React.ReactNode;
  /** Additional CSS class name applied to the header wrapper. */
  className?: string;
  /** Horizontal alignment (`justify-content`) of the top bar content. Supports per-breakpoint overrides, e.g. `topAlignment="center"` with `lg={{ topAlignment: 'space-between' }}`. */
  topAlignment?: HeaderAlignment;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<HeaderBreakpointProps>;
  md?: Partial<HeaderBreakpointProps>;
  lg?: Partial<HeaderBreakpointProps>;
  xl?: Partial<HeaderBreakpointProps>;
  xxl?: Partial<HeaderBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type HeaderAlignment = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface HeaderBreakpointProps {
    /**
     * Horizontal alignment (`justify-content`) of the top bar content.
     * Supports per-breakpoint overrides, e.g. `topAlignment="center"` with `lg={{ topAlignment: 'space-between' }}`.
     * @default space-between
     */
    topAlignment?: HeaderAlignment;
}
