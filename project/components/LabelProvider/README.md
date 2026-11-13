LabelProvider from @tedi-design-system/react. Use via `window.Tedi.LabelProvider` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Variants (see `preview.html`): Default.

## Props

```ts
import * as React from 'react';

/**
 * LabelProvider from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/providers/label-provider/label-provider.stories.tsx).
 */
export interface LabelProviderProps<TRecord extends TediLabelEntryRecord<TRecord> = Record<string, never>> {
  /** Global labels that are use in components. If omitted then default labels are used based on `locale` prop. If both props are omitted then Estonian translations are used by default */
  labels?: TRecord | TediLabelValuesRecord;
  /** Currently used locale. Supported languages are:<br /> et - Estonian<br /> en - English<br /> ru - Russian */
  locale?: TediLanguage;
  /** Rest of the App code */
  children: React.ReactNode;
}

// Referenced types, resolved one level deep (see the story source for the rest).
type TediLabelValuesRecord = {
    [TKey in keyof DefaultLabels]?: DefaultLabels[TKey]['et'];
} & {
    [TKey: string]: string | LabelFunctionValue<any[]>;
};
type TediLanguage = 'et' | 'en' | 'ru';
```

## Examples

### Default

```tsx
export const Default = {
  render: Template,

  args: {
    locale: 'en',
    labels: {
      close: {
        en: 'Close this',
      },
    },
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

Full story source: `src/tedi/providers/label-provider/label-provider.stories.tsx`.

## Related

`Text`
