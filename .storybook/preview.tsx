import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";

import connectWithRedux from "../src/util/connectWithRedux";

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
  // Next steps:
  // - So far so good, but figure out how to reset states when switching stories
  decorators: [
    (Story, context) => {
      const args = context.args;

      const ConnectedStory = connectWithRedux(Story);

      return <ConnectedStory {...args} />;
    },
  ],
};

export default preview;
