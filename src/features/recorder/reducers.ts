import { deepmerge } from "@fastify/deepmerge";

import { PartialVideomailRecorder, VideomailRecorder } from "./types";

function startRecording(state: VideomailRecorder) {
  const payload: PartialVideomailRecorder = { isRecording: true };

  const newState = deepmerge({
    onlyDefinedProperties: true,
  })(state, payload);

  return newState;
}

function stopRecording(state: VideomailRecorder) {
  const payload: PartialVideomailRecorder = { isRecording: false };

  const newState = deepmerge({
    onlyDefinedProperties: true,
  })(state, payload);

  return newState;
}

export default { startRecording, stopRecording };
