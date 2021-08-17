# axe-storybook-testing-example

This is a simple typescript React app, with Storybook. It's purpose is to showcase [chanzuckerberg/axe-storybook-testing](https://github.com/chanzuckerberg/axe-storybook-testing/).

It does this by creating some contrived examples of accessibility issues, which can be uncovered by running the tool.

## How to run

Install dependencies
```bash
yarn
```

Run storybook
```bash
yarn storybook
```

Run axe-storybook-testing
```bash
yarn storybook:axe
```

To run against a running storybook server ensure storybook is running and then run
```bash
yarn storybook:axe:server
```