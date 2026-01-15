import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";

import { PreloadedState } from "../src/root/types";
import withRedux from "../src/util/withRedux";

// Initializes MSW.

// To learn how to customize it, See
// https://github.com/mswjs/msw-storybook-addon#configuring-msw
initialize({
  onUnhandledRequest: ({ url, method }) => {
    const origin = new URL(url).origin;

    if (
      origin.startsWith("https://videomail.io") ||
      origin.startsWith("wss://videomail.io") ||
      origin.startsWith("https://videos.pond5.com") ||
      origin.startsWith("https://s1.dmcdn.net")
    ) {
      // When using the real videomail server or fun hamster videos, don't need to mock that
      return false;
    }

    console.warn(`Unhandled ${method} request to ${url}`);
    return true;
  },
});

const preview: Preview = {
  parameters: {
    docs: {
      codePanel: true,
    },
    options: {
      storySort: {
        // See https://storybook.js.org/docs/writing-stories/naming-components-and-hierarchy
        order: ["Record", "*", "Error Handling"],
      },
    },
  },
  // 👈 Add the MSW loader to all stories
  loaders: [mswLoader],
  decorators: [
    (Story, context) => {
      const args: PreloadedState = context.args;

      const ConnectedStory = withRedux(Story, args);

      return <ConnectedStory {...args} />;
    },
  ],
};

export default preview;
