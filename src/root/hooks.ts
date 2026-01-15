import { useDispatch } from "react-redux";

import { LibraryDispatch } from "./types";

export const useLibraryDispatch = () => useDispatch<LibraryDispatch>();
