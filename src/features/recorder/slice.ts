import { createSlice } from "@reduxjs/toolkit";

import db from "./db";
import reducers from "./reducers";

const recorderSlice = createSlice({
  name: "recorder",
  initialState: db,
  reducers,
});

export const {
  actions: { startRecording, stopRecording },
  reducer: recorderReducer,
} = recorderSlice;
