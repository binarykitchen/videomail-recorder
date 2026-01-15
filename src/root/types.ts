import rootReducers from "./reducers";
import { store } from "./store";

type LibraryStore = typeof store;
export type RootState = ReturnType<LibraryStore["getState"]>;
export type PreloadedState = Parameters<typeof rootReducers>[0];
export type LibraryDispatch = LibraryStore["dispatch"];
