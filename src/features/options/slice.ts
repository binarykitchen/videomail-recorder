import { deepmerge } from "@fastify/deepmerge";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import db from "./db";
import { PartialVideomailRecorderOptions } from "./types";

const optionsSlice = createSlice({
  name: "options",
  initialState: db,
  reducers: {
    deepMergeOptions: (
      state,
      action: PayloadAction<PartialVideomailRecorderOptions | undefined>,
    ) => {
      console.log({ action });

      if (!action.payload) {
        // No change
        return state;
      }

      // I might have figured a way to sort this out, but there are still issues with types.
      // Have to sort out those TS issues between UndefinedOnPartialDeep and PartialDeep
      const newOptions = deepmerge({
        onlyDefinedProperties: true,
      })(state, action.payload);

      console.log({ newOptions });

      return Object.assign(state, newOptions);
    },
  },
});

export const { deepMergeOptions } = optionsSlice.actions;

export default optionsSlice.reducer;
