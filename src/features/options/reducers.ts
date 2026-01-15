import { deepmerge } from "@fastify/deepmerge";
import { PayloadAction } from "@reduxjs/toolkit";

import { PartialVideomailRecorderOptions, VideomailRecorderOptions } from "./types";

function deepMergeOptions(
  state: VideomailRecorderOptions,
  action: PayloadAction<PartialVideomailRecorderOptions | undefined>,
) {
  if (!action.payload) {
    // No change, return original state
    return state;
  }

  const newOptions: VideomailRecorderOptions = deepmerge({
    onlyDefinedProperties: true,
  })(state, action.payload);

  return newOptions;
}

export default { deepMergeOptions };
