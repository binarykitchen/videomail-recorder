import rootReducers from "./reducers";
import { store } from "./store";

type Store = typeof store;

// Reminder: every reducer is (state, action) => newState
type RootReducers = typeof rootReducers;

// So the argument type tuple is [RootState, SomeActionType]
type RootReducersParameters = Parameters<RootReducers>;

export type RootState = ReturnType<Store["getState"]>;

// Parameters retrieves an array/tuple of "all of the individual argument types for this
// function type". Every reducer is (state, action) => newState,
// so the argument type tuple is [RootState, SomeActionType]
//
// The Redux maintainer promises that the first argument of a reducer is always the state,
// so we can just take the first element of the tuple to get the type of the state.
export type PreloadedState = RootReducersParameters[0];

export type Dispatch = Store["dispatch"];
