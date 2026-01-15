import { configureStore } from "@reduxjs/toolkit";

import optionsReducer from "../features/options/slice";
import isDev from "../util/isDev";

// https://redux-toolkit.js.org/api/configureStore
export const store = configureStore({
  reducer: {
    options: optionsReducer,
  },
  devTools: isDev(),
  duplicateMiddlewareCheck: isDev(),
});
