# The build

This directory builds the [TEDI Design System](https://github.com/TEDI-Design-System/react)'s
Claude Design System artifact: everything else on this branch is its output. Installing the
artifact needs none of it; see the [README](../README.md) at the root.

| Path | What it is |
|---|---|
| `scripts/build.mjs` | writes every artifact file from a built react checkout: bundle, styles, tokens, per-component types, docs and previews, the publish plan |
| `scripts/check.mjs` | renders every card the way the artifact page loads it; `--compare` puts each story next to the reference Storybook |
| `conventions.md` | the hand-written part of the artifact's README (the overview Claude reads first); the build checks the names it uses |
| `docs/<Name>.md` | extra usage notes for a component's README |
| `config.json` | what the build can't derive: excluded components, the provider chain every card mounts in, per-card layout |
| `seed/` | the files a first publish needs (index, cover, token usage notes) |
| `release/` | the root `README.md`, `AGENTS.md`, `CLAUDE.md` and `apply-theme.mjs`, copied into every release |
| `NOTES.md` | how the build works, how to sync the maintained artifact, and what earlier runs learned |

The workflow that runs it is `.github/workflows/publish.yml`, with the publish step in
`.github/actions/publish/`.

## How a release gets here

1. React's release workflow tags a release (`react-<version>`) and sends this repository a
   `react-release` dispatch carrying the tag.
2. `publish.yml` (on `rc`, the default branch) checks out react at that tag, builds it, runs
   `build/scripts/build.mjs --release` and the render check.
3. A release candidate becomes the release commit at the tip of `rc`: it replaces the previous
   release commit while that is still the tip, and goes on top when someone has committed to
   the build since. A stable release also gets a Storybook comparison and waits in the
   `claude-design-system-main` environment for a reviewer, then becomes a commit on `main`
   (generated files only) tagged `react-<version>`.

To rebuild a release by hand: **Actions › Publish a TEDI release › Run workflow** with the tag.

## Changing the build

Commit to `rc` as usual (a branch and a pull request into `rc` work too); only touch
`build/`, `.github/` and `.gitignore`. Everything else on `rc` is generated and is replaced
by the next release. The change reaches the artifact with the next release, or rerun the
workflow with the current tag.

## Building locally

With react cloned next to this repository and built (`npm ci && npm run build` there), from
this repository's root:

```bash
npm ci --prefix build
node build/scripts/build.mjs --out out
node build/scripts/check.mjs --out out
```

React keeps no knowledge of this build in its code: when a react change breaks it (a story
format, a provider, a `dist` file name), the fix goes here.
