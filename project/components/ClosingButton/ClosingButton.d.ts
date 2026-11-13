import * as React from 'react';

/**
 * ClosingButton from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/buttons/closing-button/closing-button.stories.tsx).
 */
export interface ClosingButtonProps {
  /** Additional classes to apply custom styles to the ClosingButton. */
  className?: string;
  /** Size of the ClosingButton */
  size?: ClosingButtonSize;
  /** Event handler for the button click event. Triggered when the user clicks on the close button. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  color?: ClosingButtonColor;
  iconSize?: ClosingButtonIconSize;
}
// Also accepts 269 standard React / HTML attributes of its root element.

// Referenced types, resolved one level deep (see the story source for the rest).
type ClosingButtonSize = 'default' | 'small';
type ClosingButtonColor = 'primary' | 'brand' | 'white';
type ClosingButtonIconSize = 18 | 24;
