import { useDispatch } from "react-redux";

import { LibraryDispatch } from "./types";

export const useAppDispatch = () => useDispatch<LibraryDispatch>();
