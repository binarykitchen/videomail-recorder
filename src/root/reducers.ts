import { combineReducers } from "@reduxjs/toolkit";

import { optionsReducer } from "../features/options/slice";
import { recorderReducer } from "../features/recorder/slice";

const rootReducers = combineReducers({
  options: optionsReducer,
  recorder: recorderReducer,
});

export default rootReducers;
