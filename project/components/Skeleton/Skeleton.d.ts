import * as React from 'react';

/**
 * Skeleton from @tedi-design-system/react@21.0.0-rc.1 (stories: ./src/tedi/components/loaders/skeleton/skeleton.stories.tsx).
 */
export interface SkeletonProps {
  /** The content to be rendered inside the skeleton placeholder. */
  children?: React.ReactNode | React.ReactNode[];
  /** Custom class names to apply to the skeleton component for styling purposes. */
  className?: string;
  /** The accessibility label announced by screen readers when the skeleton component mounts. This message informs users that content is loading. If omitted, all skeletons on the page are combined into a single status message. */
  label?: string;
  /** The accessibility label announced by screen readers when the skeleton component unmounts. This message informs users that content has finished loading. This label is only announced if the delay specified by `labelDelay` is met. */
  completedLabel?: string;
  /** The delay, in milliseconds, before the screen reader announces the `label` when the component mounts. If the content loads faster than this delay, the label may not be announced to avoid unnecessary interruptions. */
  labelDelay?: number;
}
