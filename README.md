# Aurora UI

Accessible React UI components built with Radix primitives, custom CSS tokens, TypeScript and Storybook.

## Install

```bash
npm install @ihopeyoucanflym3/aurora-ui
```

```tsx
import { Button, Dialog, DialogContent, DialogTrigger } from "@ihopeyoucanflym3/aurora-ui";
import "@ihopeyoucanflym3/aurora-ui/styles.css";
```

## Theme

Set `data-theme="dark"` on the root element, or add a `.dark` ancestor. Override CSS variables such as `--ui-primary`, `--ui-radius`, and `--ui-surface` in your application stylesheet.

## Development

```bash
npm install
npm run format:check
npm run lint
npm run typecheck
npm run test:coverage
npm run build
npm run storybook
```

`npm run pack:check` shows the exact files that will reach npm. Before the first release, create the `@ihopeyoucanflym3` scope in npm and configure npm Trusted Publishing for `.github/workflows/release.yml`.
