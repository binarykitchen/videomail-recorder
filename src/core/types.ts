import { store } from "./store";

type LibraryStore = typeof store;
export type RootState = ReturnType<LibraryStore["getState"]>;
export type LibraryDispatch = LibraryStore["dispatch"];
