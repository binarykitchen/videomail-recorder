import { combineReducers } from "@reduxjs/toolkit";

import { optionsReducer } from "../features/options/slice";

const rootReducers = combineReducers({ options: optionsReducer });

export default rootReducers;
