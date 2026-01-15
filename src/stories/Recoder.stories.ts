import type { Meta, StoryObj } from "@storybook/react";

import {
  VideomailRecorder,
  VideomailRecorderProps,
} from "../features/recorder/components/Recorder";

// import { fn } from "storybook/test";
const meta: Meta<VideomailRecorderProps> = {
  title: "Recorder",
  component: VideomailRecorder,
  // // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};

type Story = StoryObj<typeof meta>;

export const SimpleWithAudio: Story = {
  name: "Simple with audio",
};

export const SimpleWithoutAudio: Story = {
  name: "Simple without audio",
  args: {
    options: {
      audio: {
        enabled: false,
      },
    },
  },
};

export default meta;
