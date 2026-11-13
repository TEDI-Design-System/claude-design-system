import * as React from 'react';

/**
 * Dropdown from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/overlays/dropdown/dropdown.stories.tsx).
 */
export interface DropdownProps {
  /** Child elements — must include exactly one `Dropdown.Trigger` and one `Dropdown.Content` */
  children: React.ReactNode;
  /** When `true`, the dropdown behaves like a modal: - Traps focus inside the dropdown - Shows a visually hidden "Close" button for screen readers - Usually used for menus that require explicit dismissal */
  modal?: boolean;
  /** Controlled open state */
  open?: boolean;
  /** Uncontrolled default state */
  defaultOpen?: boolean;
  /** Change handler (fires for both modes) */
  onOpenChange?: (open: boolean) => void;
  /** Index of the item that should be focused when the dropdown opens. Pass the index of the "current selection" so the user can arrow-key or Enter/Space to reconfirm without first pressing an arrow. Omit (or pass `undefined`) to keep the default behaviour — no item is pre-focused and the user has to press an arrow key to start navigating. */
  defaultActiveIndex?: number;
  /** Navigation mode — use when the dropdown lists **links** (e.g. collapsed breadcrumbs) rather than menu commands. Drops the `menu` / `menuitem` roles, `aria-haspopup="menu"` and roving tabindex, so screen readers announce the items as links and each is a normal Tab stop. Keep it `false` (default) for action menus. */
  navigation?: boolean;
  className?: string;
  /** When `true` there is a border between the dropdown items */
  divided?: boolean;
  /** Controls the width of the dropdown menu. - `'auto'` – width is determined by content (default) - `'trigger'` – matches the width of the trigger element - `'full'` – spans the full width of the containing block - `number` – fixed width in pixels - `string` – any valid CSS width value (e.g. `'16rem'`, `'100%'`) */
  width?: 'auto' | 'trigger' | 'full' | number | string;
  /** Controls where the dropdown is positioned relative to its trigger. Accepts any Floating UI placement value, such as: `'bottom-start'`, `'bottom-end'`, `'top-start'`, `'right-end'`, etc. */
  placement?: Placement;
  /** Controls the visual and structural variant of the dropdown. - `'default'` – standard flat list of items - `'tree'` – hierarchical (tree-style) list with indented items and connector lines Tree visuals are only applied when this prop is set to `'tree'`. Ignored by default. */
  variant?: 'default' | 'tree';
  /** Restricts the height of the dropdown's scrollable body. When the content is taller, the body scrolls vertically while any sticky regions (e.g. a Filter search / clear) stay pinned. - `number` – fixed max height in pixels - `string` – any valid CSS length (e.g. `'20rem'`, `'50vh'`) */
  maxHeight?: number | string;
  /** Default breakpoint for SSR, the component is rendered with this breakpoint props on the server-side. */
  defaultServerBreakpoint?: Breakpoint;
  sm?: Partial<DropdownBreakpointProps>;
  md?: Partial<DropdownBreakpointProps>;
  lg?: Partial<DropdownBreakpointProps>;
  xl?: Partial<DropdownBreakpointProps>;
  xxl?: Partial<DropdownBreakpointProps>;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type DropdownBreakpointProps = {
    /**
     * When `true` there is a border between the dropdown items
     *  @default false
     */
    divided?: boolean;
    /**
     * Controls the width of the dropdown menu.
     * - `'auto'` – width is determined by content (default)
     * - `'trigger'` – matches the width of the trigger element
     * - `'full'` – spans the full width of the containing block
     * - `number` – fixed width in pixels
     * - `string` – any valid CSS width value (e.g. `'16rem'`, `'100%'`)
     * @default auto
     */
    width?: 'auto' | 'trigger' | 'full' | number | string;
    /**
     * Controls where the dropdown is positioned relative to its trigger.
     * Accepts any Floating UI placement value, such as:
     * `'bottom-start'`, `'bottom-end'`, `'top-start'`, `'right-end'`, etc.
     *
     * @default bottom-start
     */
    placement?: Placement;
    /**
     * Controls the visual and structural variant of the dropdown.
     * - `'default'` – standard flat list of items
     * - `'tree'` – hierarchical (tree-style) list with indented items and connector lines
     * Tree visuals are only applied when this prop is set to `'tree'`.
     * Ignored by default.
     * @default 'default'
     */
    variant?: 'default' | 'tree';
    /**
     * Restricts the height of the dropdown's scrollable body. When the content is taller,
     * the body scrolls vertically while any sticky regions (e.g. a Filter search / clear) stay pinned.
     * - `number` – fixed max height in pixels
     * - `string` – any valid CSS length (e.g. `'20rem'`, `'50vh'`)
     * @default undefined (no restriction)
     */
    maxHeight?: number | string;
};
// From @floating-ui/utils (see its documentation): Placement.
