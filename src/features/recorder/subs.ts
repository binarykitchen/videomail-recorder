import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../root/types";

const selectRecorder = (state: RootState) => state.recorder;

export const selectRecording = createSelector(
  selectRecorder,
  (recorder) => recorder.isRecording,
);
