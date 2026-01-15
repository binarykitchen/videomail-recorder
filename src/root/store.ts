import { configureStore } from "@reduxjs/toolkit";

import isDev from "../util/isDev";
import rootReducers from "./reducers";
import { PreloadedState } from "./types";

// When replacing configureStore, with those functions I experience TS mismatches.
// But not with configureStore directly.
export function makeStore(preloadedState?: PreloadedState) {
  console.log({ preloadedState });
  // https://redux-toolkit.js.org/api/configureStore
  return configureStore({
    reducer: rootReducers,
    preloadedState,
    devTools: isDev(),
    duplicateMiddlewareCheck: isDev(),
  });
}

export const store = makeStore();
