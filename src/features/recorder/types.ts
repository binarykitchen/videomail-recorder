import { PartialDeep } from "type-fest";

export interface VideomailRecorder {
  isRecording: boolean;
}

export type PartialVideomailRecorder = PartialDeep<VideomailRecorder>;
