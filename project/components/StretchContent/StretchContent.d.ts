import * as React from 'react';

/**
 * StretchContent from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/misc/stretch-content/stretch-content.stories.tsx).
 */
export interface StretchContentProps {
  /** Element that will be stretched within the container. */
  children: React.ReactElement;
  /** Accessibility role for the container. */
  role?: React.AriaRole;
  /** An optional additional CSS class name to customize the styling of the container. This will be appended to the default BEM class generated for the component. */
  className?: string;
  /** Specifies the axis along which the child element should be stretched. - `both` (default): Stretches the child element both horizontally and vertically. - `horizontal`: Stretches the child element only horizontally (width). - `vertical`: Stretches the child element only vertically (height). */
  direction?: StretchContentDirection;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<StretchContentBreakpointProps>;
  md?: Partial<StretchContentBreakpointProps>;
  lg?: Partial<StretchContentBreakpointProps>;
  xl?: Partial<StretchContentBreakpointProps>;
  xxl?: Partial<StretchContentBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type StretchContentDirection = 'both' | 'horizontal' | 'vertical';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface StretchContentBreakpointProps {
    /**
     * An optional additional CSS class name to customize the styling of the container.
     * This will be appended to the default BEM class generated for the component.
     */
    className?: string;
    /**
     * Specifies the axis along which the child element should be stretched.
     * - `both` (default): Stretches the child element both horizontally and vertically.
     * - `horizontal`: Stretches the child element only horizontally (width).
     * - `vertical`: Stretches the child element only vertically (height).
     * @default 'both'
     */
    direction?: StretchContentDirection;
}
