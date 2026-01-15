import { useDispatch as useUnknownDispatch } from "react-redux";

import { Dispatch } from "./types";

export const useDispatch = () => useUnknownDispatch<Dispatch>();
