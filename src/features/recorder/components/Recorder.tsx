import { Button } from "@base-ui/react/button";
// import { Toolbar } from "@base-ui/react/toolbar";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "../../../root/hooks";
import { deepMergeOptions } from "../../options/slice";
import { selectAudioEnabled } from "../../options/subs";
import { PartialVideomailRecorderOptions } from "../../options/types";
import { startRecording, stopRecording } from "../slice";
import { selectRecording } from "../subs";

export interface VideomailRecorderProps {
  options?: PartialVideomailRecorderOptions;
}

const VideomailRecorder = (props: VideomailRecorderProps) => {
  const { options } = props;

  const dispatch = useDispatch();
  const audioEnabled = useSelector(selectAudioEnabled);
  const isRecording = useSelector(selectRecording);

  useEffect(() => {
    dispatch(deepMergeOptions(options));
  }, [dispatch, options]);

  /*
    TODO

    - Pause there and implement native video players on VM side if possible?
    - Then continue initialize media streams (should happen before recording starts I think)
    - See https://github.com/DeltaCircuit/react-media-recorder/blob/master/src/index.ts#L238
  */

  const handleStartRecording = () => {
    dispatch(startRecording());
  };

  const handleStopRecording = () => {
    dispatch(stopRecording());
  };

  // Next steps:
  // - Be inspired by
  //  - https://github.com/DeltaCircuit/react-media-recorder
  //  - https://github.com/chrisguttandin/extendable-media-recorder
  //  - https://github.com/chrisguttandin/extendable-media-recorder-wav-encoder
  // - Build empty placeholder recorder and buttons:
  //  - for buttons, use base-ui/react, see https://base-ui.com/react/overview/quick-start
  //  - then continue, experiment ...

  return (
    <div>
      <h1>
        Hello, audio = {audioEnabled.toString()}, recording = {isRecording.toString()}
      </h1>
      {/* <video src={mediaBlobUrl} controls autoPlay loop /> */}
      {/* <Toolbar> */}
      <Button onClick={handleStartRecording}>Record</Button>
      <Button onClick={handleStopRecording}>Stop</Button>
      {/* </Toolbar> */}
    </div>
  );
};

export { VideomailRecorder };
