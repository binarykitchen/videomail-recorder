import { ComponentType, FunctionComponent } from "react";
import { Provider } from "react-redux";

import { store } from "../core/store";

const connectWithRedux = <Props extends object>(Component: ComponentType<Props>) => {
  const ReduxComponent: FunctionComponent<Props> = (props: Props) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );

  // For easier debugging
  ReduxComponent.displayName = `Redux${Component.displayName}`;

  return ReduxComponent;
};

export default connectWithRedux;
