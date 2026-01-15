import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../core/hooks";
import { deepMergeOptions } from "../options/slice";
import { selectAudioEnabled } from "../options/subs";
import { PartialVideomailRecorderOptions } from "../options/types";

export interface VideomailRecorderProps {
  options?: PartialVideomailRecorderOptions;
}

const VideomailRecorder = (props: VideomailRecorderProps) => {
  const { options } = props;

  const dispatch = useAppDispatch();
  const audioEnabled = useSelector(selectAudioEnabled);

  useEffect(() => {
    dispatch(deepMergeOptions(options));
  }, [dispatch, options]);

  // Next steps:
  // - Build empty placeholder recorder and buttons:
  //  - for buttons, use base-ui/react, see https://base-ui.com/react/overview/quick-start
  //  - then get onto getUserMedia, MediaRecorder

  // Here you can test the event loop for the AudioEnabled story
  // It will be false, then true on the next loop. Which needs fixing.

  return <h1>Hello, audio = {audioEnabled.toString()}</h1>;
};

export { VideomailRecorder };
