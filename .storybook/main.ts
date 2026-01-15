import type { StorybookConfig } from "storybook-react-rsbuild";

const config: StorybookConfig = {
  stories: ["../src/stories/*.stories.@(ts|tsx)"],
  addons: [
    "storybook-addon-rslib",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
  ],
  framework: "storybook-react-rsbuild",
  // It must match with the `msw` entry in `package.json`
  staticDirs: ["./public"],
  // Useful trick to alter HTTP header if needed
  // rsbuildFinal: (config) => {
  //   if (config.server) {
  //     config.server.headers = { "permissions-policy": "microphone=(), camera=()" };
  //   }

  //   return config;
  // },
};

export default config;
