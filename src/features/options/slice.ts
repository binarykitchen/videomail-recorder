import { createSlice } from "@reduxjs/toolkit";

import db from "./db";
import reducers from "./reducers";

const optionsSlice = createSlice({
  name: "options",
  initialState: db,
  reducers,
});

export const {
  actions: { deepMergeOptions },
  reducer: optionsReducer,
} = optionsSlice;
