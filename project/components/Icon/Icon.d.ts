import * as React from 'react';

/**
 * Icon from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/base/icon/icon.stories.tsx).
 */
export interface IconProps {
  /** Name of material icon https://fonts.google.com/icons */
  name: string;
  /** Additional classes to style the icon or its wrapper. - If `background` is provided, the `className` will be applied to the wrapper element. - If `background` is not provided, the `className` will be applied directly to the icon element. */
  className?: string;
  /** Type of icon It is recommended to only use one type throughout your app, and to load only that type's font (`icons/<type>.css` with `index-without-icons.css`) instead of all three via `index.css`. */
  type?: IconType;
  /** Size of the icon */
  size?: IconSize;
  /** Render a filled variant of the icon */
  filled?: boolean;
  /** Which color Icon should be Use 'positive', 'important' or 'warning' with caution, usually they should not be in application UI */
  color?: IconColor;
  /** Icons label for screen-readers. If omitted then the icon is hidden for screen-readers. */
  label?: string;
  /** Add round background */
  background?: IconBackgroundColor;
  /** Type of display */
  display?: 'block';
}

// Referenced types, resolved one level deep (see the story source for the rest).
type IconType = 'outlined' | 'sharp' | 'rounded';
type IconSize = 8 | 12 | 16 | 18 | 24 | 36 | 48;
type IconColor = 'primary' | 'secondary' | 'tertiary' | 'brand' | 'brand-dark' | 'success' | 'warning' | 'warning-dark' | 'danger' | 'white' | 'inherit';
type IconBackgroundColor = 'primary' | 'secondary' | 'brand-primary' | 'brand-secondary';
