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

  // Deep merging partial options (action.payload) into the current state,
  // yet the newOptions are still partial which is wrong.
  //
  // New options should mee the type VideomailRecorderOptions, but it does not.
  const newOptions = deepmerge({
    onlyDefinedProperties: true,
  })(state, action.payload);

  return newOptions;
}

export default { deepMergeOptions };
