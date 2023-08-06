This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## What 3rd libraries did I use in the project?

- [Eslint](https://eslint.org) - Find and fix problems in your JavaScript code
- [Prettier](https://prettier.io) - Format your code
- [Husky](https://github.com/typicode/husky) - Husky improves your commits and more 🐶 woof!
- [Lint-staged](https://github.com/okonet/lint-staged) - Run linters against staged git files and don't let 💩 slip into your code base!
- [Commitlint](https://commitlint.js.org/#/?id=commitlint-nbsp-) - Helps your team adhere to a commit convention. By supporting npm-installed configurations it makes sharing of commit conventions easy.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## For project developers

1. Commit
   The structure when committing code must follow the rules of commitlint as follows:

```bash
type(scope?): subject
```

In there:

```bash
type
```

above could be:

```bash
build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
ci: Changes to our CI configuration files and scripts (example scopes: Gitlab CI, Circle, BrowserStack, SauceLabs)
chore: add something without touching production code (Eg: update npm dependencies)
docs: Documentation only changes
feat: A new feature
fix: A bug fix
perf: A code change that improves performance
refactor: A code change that neither fixes a bug nor adds a feature
revert: Reverts a previous commit
style: Changes that do not affect the meaning of the code (Eg: adding white-space, formatting, missing semi-colons, etc)
test: Adding missing tests or correcting existing tests
```

```bash
scope
```

is optional, and if it is, it should be the name of the package that the current commit affects. I see scope is often used in repositories that contain many monorepo packages, for example, Vue 3's repo, scope will be the name of a certain package in the packages folder

```bash
subject
```

is the content of the commit
