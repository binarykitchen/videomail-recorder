import { PreloadedState } from "../../root/types";
import withRedux from "../../util/withRedux";
import { VideomailRecorder } from "./components/Recorder";

// We should not export the component directly, this to maintain state.
function createVideomailRecorder(preloadedState: PreloadedState) {
  const ConnectedVideomailRecorder = withRedux(VideomailRecorder, preloadedState);

  return ConnectedVideomailRecorder;
}

export default createVideomailRecorder;
