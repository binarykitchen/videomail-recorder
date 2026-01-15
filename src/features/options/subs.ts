import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../core/types";

const selectOptions = (state: RootState) => state.options;

export const selectAudioEnabled = createSelector(selectOptions, (options) =>
  Boolean(options.audio.enabled),
);
