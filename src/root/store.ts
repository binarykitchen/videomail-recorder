import { configureStore } from "@reduxjs/toolkit";

import isDev from "../util/isDev";
import rootReducers from "./reducers";
import { PreloadedState } from "./types";

export function makeStore(preloadedState?: PreloadedState) {
  // https://redux-toolkit.js.org/api/configureStore
  return configureStore({
    reducer: rootReducers,
    // This prevents you from passing undefined to keys marked as optional
    // (necessary because of exactOptionalPropertyTypes)
    ...(preloadedState && { preloadedState }),
    devTools: isDev(),
    duplicateMiddlewareCheck: isDev(),
  });
}

export const store = makeStore();
