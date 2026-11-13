Header from @tedi-design-system/react. Use via `window.Tedi.Header` (the bundle is `components/bundle.js`). Wrap the tree in `<ThemeProvider>` (full provider chain in README.md: components read theme and i18n from that context).

Application header bar. Composed from `Header.Logo`, `Header.Center` and
`Header.Actions`, with `Header.Language`, `Header.Profile`, `Header.Role` and
`Header.Logout` as ready-made action-cluster pieces.

**Live Storybook:** https://storybook.tedi.ee/react/rc/?path=/docs/tedi-ready-layout-header--docs

Stories (see `Header.html`): `Default`, `LoggedOut`, `LoggedOutWithSearch`, `LoggedIn`,
`LoggedInWithTagLabel`, `WithOrganizationSelection`, `WithSingleOrganization`,
`WithProfileLabel`, `WithProfileLabelAndNoOrganization`, `WithNameAsProfileLabel`,
`WithStandaloneLogoutButton`, `WithTopHeader`, `WithTopHeaderAndLanguageDropdown`,
`WithInlineSearch`, `WithMobileBottomSearch`, `WithCustomRoleContent`,
`LanguageWithNavigationLinks`, `LoggedInWithSidenav`.

`LoggedInWithSidenav` is the one that shows the full app shell.

## The default pattern for a logged-in app

Wordmark logo, **no centre nav** (primary navigation lives in `SideNav` or `TopNav`), and
an actions cluster of language + identity + logout:

```jsx
<Header toggle={<SideNav.Toggle menuOpen={open} toggleMenu={() => setOpen(!open)} />}>
  <Header.Logo logo={<Text modifiers="bold">Terviseportaal</Text>} />
  <Header.Actions>
    <Header.Language
      languages={[
        { label: 'Eesti keel', locale: 'et', isSelected: true, onClick: …},
        { label: 'English',    locale: 'en', onClick: …},
      ]}
    />
    <Separator axis="vertical" />
    <Header.Profile>
      <Text modifiers="bold">Mari Maasikas</Text>
      <Text color="secondary" modifiers="small">48001010000</Text>
      <Header.Logout onClick={signOut} />
    </Header.Profile>
  </Header.Actions>
</Header>
```

## Gotchas

**1. `Header.Logo` takes `logo` as a PROP, not children.** Children are ignored.

```jsx
// ✗ renders nothing
<Header.Logo><Text modifiers="bold">Terviseportaal</Text></Header.Logo>

// ✓ wordmark, no image asset needed
<Header.Logo logo={<Text modifiers="bold">Terviseportaal</Text>} />

// ✓ image, with a dark-theme variant and a home link
<Header.Logo logo={<img src={logo} alt="" />} logoDark={<img src={logoDark} alt="" />} href="/" />
```

**2. Primary navigation does not belong in `Header.Center`.** In a logged-in application
the nav lives in `SideNav` (the shell's left column) or `TopNav`. `Header.Center` is for
**logged-out / marketing link rows** — a public site's "About / Services / Contact"
strip — plus occasional global slots like a search field or environment banner. It takes
`alignment` (`center` by default). Most logged-in app headers omit it entirely.

**3. The mobile nav toggle goes in the `toggle` prop, not in `children`.** That slot
places it ahead of the logo; in `children` it is misaligned. Its `menuOpen` must be the
same boolean as `SideNav`'s `isMobileOpen` — the two components share no context.

## Subcomponent props

```ts
Header.Logo    { logo: ReactNode; logoDark?: ReactNode; href?: string; showLogo?: boolean }
Header.Center  { children: ReactNode; alignment?: HeaderAlignment }  // default 'center'
Header.Actions { children: ReactNode }

Header.Language {
  languages: {
    label: string;                 // "Eesti keel"
    locale?: 'et' | 'en' | 'ru';
    href?: string;                 // use href OR onClick
    onClick?: (p: { onToggle: (open: boolean) => void }) => void;
    isSelected?: boolean;          // marks the current language
    'aria-label'?: string;
  }[];
  currentLanguage?: string;
  selectLabel?: string;
}

Header.Profile {
  children: ReactNode;             // identity block + Header.Logout go here
  label?: string;                  // breakpoint-overridable: lg={{ label: 'Minu konto' }}
  showLabel?: boolean;             // show the label next to the avatar
  showPopover?: Breakpoint;        // breakpoint at and above which it opens as a popover
  disabled?: boolean;
  noStyle?: boolean;
}

Header.Role {
  // Representative = { id: string; name: string;
  //                    description?: string; icon?: string | IconProps }
  representatives: Representative[];
  label?: ReactNode;               // e.g. <Text modifiers="bold">Roll:</Text>
  showSearch?: boolean;            // search field in the representative list
  showDescription?: boolean;
  isOrganization?: boolean;        // organisation rather than person semantics
  searchLabel?: string;
  onRepresentativeChange?: (r: Representative) => void;
  accordionLabels?: { open?: string; close?: string };
}

Header.Logout { onClick?: () => void; href?: string; label?: string;
                size?: 'default' | 'small' }
```

`Header` itself also takes `top` (a bar above the main row), `bottom` (rendered below the
bar under `md` — typically a compact search) and `topAlignment` (breakpoint-aware).

Use `ShowAt` / `HideAt` to move pieces between the bar and the profile popover per
breakpoint rather than duplicating markup.

Variants (see `preview.html`): Default, Logged Out, Logged Out With Search, Logged In, Logged In With Tag Label, With Organization Selection, With Single Organization, With Profile Label, With Profile Label And No Organization, With Name As Profile Label, With Standalone Logout Button, With Top Header, With Top Header And Language Dropdown, With Inline Search, With Mobile Bottom Search, With Custom Role Content, Language With Navigation Links, Logged In With Sidenav.

## Props

```ts
import * as React from 'react';

/**
 * Header from @tedi-design-system/react@21.0.0-rc.9 (stories: ./src/tedi/components/layout/header/header.stories.tsx).
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
```

## Examples

### Default

```tsx
export const Default: StoryObj = {
  argTypes: {
    ...subcomponentArgTypes(HeaderLogo, {
      category: 'Header.Logo',
      prefix: 'logo',
      exclude: ['logo', 'logoDark', 'className'],
    }),
    ...subcomponentArgTypes(HeaderCenter, {
      category: 'Header.Center',
      prefix: 'center',
      exclude: ['children', 'className'],
    }),
    ...subcomponentArgTypes(Header.Language, {
      category: 'Header.Language',
      prefix: 'language',
      exclude: ['languages', 'className'],
    }),
    ...subcomponentArgTypes(Header.Login, {
      category: 'Header.Login',
      prefix: 'login',
      exclude: ['onClick', 'className'],
    }),
  },
  args: {
    logo__href: '#',
    login__href: '#',
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
  render: (args: Record<string, unknown>) => (
    <StoryWrapper>
      {({ isOpen, setIsOpen }) => (
        <div style={{ display: 'flex', flexDirection: 'column', ...(isOpen && { height: '100vh' }) }}>
          <Header toggle={<SideNav.Toggle menuOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />}>
            <Header.Logo
// …
```

### Logged Out

```tsx
export const LoggedOut: Story = {
  render: () => (
    <StoryWrapper>
      {({ isOpen, setIsOpen }) => (
        <div style={{ display: 'flex', flexDirection: 'column', ...(isOpen && { height: '100vh' }) }}>
          <Header toggle={<SideNav.Toggle menuOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />}>
            <Header.Logo logoDark={logoDark} logo={logo} />

            <ShowAt lg>
              <Header.Center>
                <Link underline={false} href="#">
                  Link text
                </Link>
                <Link underline={false} href="#">
                  Link text
                </Link>
                <Link underline={false} href="#">
                  Link text
                </Link>
                <Link underline={false} href="#">
                  Link text
                </Link>
                <Link underline={false} href="#">
                  Link text
                </Link>
              </Header.Center>
            </ShowAt>

            <Header.Actions>
              <Header.Language languages={languages} currentLanguage={languages[0].label} />
              <Separator axis="vertical" />
              <Header.Login href="#" />
            </Header.Actions>
          </Header>

          <HideAt lg>
            <div style={{ flex: 1 }}>
              <SideNav
                ariaLabel="Main navigation"
                linkAs="a"
// …
```

### Logged Out With Search

```tsx
export const LoggedOutWithSearch: Story = {
  parameters: {
    docs: {
      description: {
        story: `
On the narrowest viewports the header has to fit a sidenav toggle, a search input and several action buttons in a single row, which leaves no room for the logo. This story wraps \`Header.Logo\` in a small \`ResponsiveLogo\` helper that listens to \`(min-width: 420px)\` via \`window.matchMedia\` and toggles \`showLogo\` accordingly, so the logo is hidden below that width and rendered again as soon as there is space.

\`\`\`tsx
```

### Logged In

```tsx
export const LoggedIn: Story = {
  render: () => (
    <WithTranslations>
      {(t) => (
        <Header>
          <Header.Logo logoDark={logoDark} logo={logo} />
          <Header.Actions>
            <ShowAt lg>
              <AccessibilityLink />
              <Separator axis="vertical" />
              <Header.Role
                showSearch
                label={
                  <Text modifiers={['small', 'bold']} color="secondary">
                    {t('role')}:
                  </Text>
                }
                representatives={representatives}
              />
              <Separator axis="vertical" />
            </ShowAt>
            <Header.Language languages={languages} />
            <Separator axis="vertical" />
            <Header.Profile>
              <HideAt lg>
                <Header.Role
                  showSearch
                  label={
                    <Text modifiers="bold" color="secondary">
                      {t('role')}:
                    </Text>
                  }
                  representatives={representatives}
                />
                <AccessibilityLink />
              </HideAt>
              <ProfileExample />
            </Header.Profile>
          </Header.Actions>
        </Header>
// …
```

### Logged In With Tag Label

```tsx
export const LoggedInWithTagLabel: Story = {
  render: () => (
    <WithTranslations>
      {(t) => (
        <Header>
          <Header.Logo logoDark={logoDark} logo={logo} />
          <Header.Actions>
            <ShowAt lg>
              <AccessibilityLink />
              <Separator axis="vertical" />
              <Header.Role
                showSearch
                label={<Tag>{t('representative')}</Tag>}
                showDescription={false}
                representatives={representatives}
              />
              <Separator axis="vertical" />
            </ShowAt>
            <Header.Language languages={languages} />
            <Separator axis="vertical" />
            <Header.Profile>
              <HideAt lg>
                <Header.Role
                  showSearch
                  label={<Tag>{t('representative')}:</Tag>}
                  showDescription={false}
                  representatives={representatives}
                />
                <AccessibilityLink />
              </HideAt>
              <ProfileExample />
            </Header.Profile>
          </Header.Actions>
        </Header>
      )}
    </WithTranslations>
  ),
};
```

### With Organization Selection

```tsx
export const WithOrganizationSelection: Story = {
  render: () => (
    <WithTranslations>
      {(t) => (
        <Header>
          <Header.Logo logoDark={logoDark} logo={logo} />
          <Header.Actions>
            <ShowAt lg>
              <AccessibilityLink />
              <Separator axis="vertical" />
              <Header.Role
                showSearch
                label={
                  <Text modifiers={['small', 'bold']} color="secondary">
                    {t('organization')}
                  </Text>
                }
                representatives={organizations}
                isOrganization
              />
              <Separator axis="vertical" />
              <Header.Role
                showSearch
                label={
                  <Text modifiers={['small', 'bold']} color="secondary">
                    {t('role')}:
                  </Text>
                }
                representatives={representatives}
              />
              <Separator axis="vertical" />
            </ShowAt>
            <Header.Language languages={languages} />
            <Separator axis="vertical" />
            <Header.Profile>
              <HideAt lg>
                <Header.Role
                  showSearch
                  label={
                    <Text modifiers="bold" color="secondary">
// …
```

Full story source: `src/tedi/components/layout/header/header.stories.tsx`.

## Related

`LabelProvider`, `Icon`, `Text`, `EmptyState`, `Search`, `Tag`, `HideAt`, `ShowAt`, `SideNav`
