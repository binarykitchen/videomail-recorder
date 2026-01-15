# Project Overview

Hello AI, this is for you 😉

This public project, called videomail-recorder, is a React-based npm package for reuse in any other web applications and also as a separate WordPress plugin, see [videomail-for-ninja-forms](https://github.com/binarykitchen/videomail-for-ninja-forms).

It contains a collection of components and utilities for building Videomail-related interfaces in React.
The library is designed to be composable and styling agnostic.

The most important app of this package is [Videomail](https://www.videomail.io) itself which heavily relies on this package and resides in another, but private repository. Videomail's goal is to enable Sign Language in emails.

Deaf and Sign Language users are our target audience, while we also enable audio in videos for hearing people to communicate back with Deaf users and vice-versa.

The root `/README.md` file has further general information for you, the GitHub Copilot. AI, please include that README file and add it to your context.

If there are any discrepancies between these AI instructions and the code base, please highlight these in any suggestions or chats.

## Folder Structure

- `/.github`: has instructions for the GitHub Copilot and some workflows for github.com itself
- `/.storybook`: comes with general Storybook settings
- `/.vscode`: general configurations for VS Code users regarding extensions and settings
- `/dist`: anything compiled by rslib goes in here. [rslib](https://rslib.rs/) is our bundler.
- `/etc`: it contains script for SSL certificates and for releasing new npm package versions
- `/src`: contains the source code with all their unit tests, under `__tests__` in the same subdirectory
- `/src/stories`: contains [Storybook stories](https://storybook.js.org/) for visual testing of any components we export from this library. It's only one folder for simplicity.

## Libraries and Frameworks

- All runs on Node.js, the used version is defined in the `.nvmrc` file.
- We use React and [Redux Toolkit](https://redux-toolkit.js.org) for proper state management, this to maintain a single source of truth for all states.
- For UI elements like buttons, we use [base-ui/react](https://base-ui.com/react/overview/quick-start) which is a great and accessible React component library.
  - For you AI assistants, base-ui provides a handbook in LLM format at <https://base-ui.com/llms.txt>
- Most source code is written in TypeScript.
- Security checks using the audit-ci package are included and configured. Security is important.

## Coding language

- TypeScript is the main coding language for this project.
- All has to be typed properly. Using types with `any` nor force typing using `as` is not allowed at all.

## Bundler

It's rslib, which is a Rust-based bundler. It compiles TypeScript to JavaScript and bundles the source code into a single file for distribution.
Its configuration file can be found in the root folder at rslib.config.ts.

## Video Recording Specs

These are configured on the Videomail server side and vary from website to website. This videomail-recorder package is just a client library which communicates with the Videomail server.

## Tests

### Unit Tests

- For unit tests we use the next generation [Vitest](https://vitest.dev) framework.
- Vitest was chosen because it is fast, has a great API and is compatible with other testing frameworks like Jest.
- The unit tests are located in the `__tests__` subdirectory of each source code

### Visual Tests

As mentioned above, for visual tests, we use [Storybook](https://storybook.js.org). The main configuration is in the root`.storybook` folder. The stories for the components we export are in the `src/stories` folder.

In addition, we also use [Chromatic](https://www.chromatic.com) to catch any visual differences between git commits.

## Accessibility

- Because this invention is made for Deaf people, we should care about top-notch accessibility for Deaf people.
- Then, mobile devices must be supported. Therefore, ensure all HTML and styles are responsive for iPhones and Android.

## Coding Standards

- It's all defined already, using Prettier, eslint and TypeScript. Their configurations can be found in the root folder. Parse these.

## Error Handling

- Any errors caught are being sent over the API to the remote Videomail server.

## Versioning

We honour the semver versioning strategy and pinpoint exact versions of any npm package in the `package.json` file. This is important to ensure that the videomail-recorder package remains stable and compatible with other packages.

## Goals

It's all made for the love of Sign Language 🤟🏼
So that Deaf people can communicate in Sign Language easily and fast through WWWW/HTTP without the need to download any apps.
