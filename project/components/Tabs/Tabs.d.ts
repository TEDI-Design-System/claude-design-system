import * as React from 'react';

/**
 * Tabs from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/navigation/tabs/tabs.stories.tsx).
 */
export interface TabsProps {
  /** Tabs content — should include Tabs.List and Tabs.Content elements */
  children: React.ReactNode;
  /** Controlled active tab id. Use together with onChange. */
  value?: string;
  /** Default active tab id for uncontrolled usage. */
  defaultValue?: string;
  /** Callback fired when the active tab changes */
  onChange?: (tabId: string) => void;
  /** Additional class name(s) */
  className?: string;
}
