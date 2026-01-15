import { ComponentType } from "react";
import { Provider } from "react-redux";

import { makeStore } from "../root/store";
import { PreloadedState } from "../root/types";

const withRedux = <Props extends object>(
  Component: ComponentType<Props>,
  preloadedState: PreloadedState,
) => {
  const store = makeStore(preloadedState);

  const ReduxComponent = (props: Props) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );

  // For easier debugging
  ReduxComponent.displayName = `Redux${Component.displayName}`;

  return ReduxComponent;
};

export default withRedux;
