import { VideomailRecorder } from "./features/recorder/Recorder";
import { VideoType } from "./types/VideoType";
import connectWithRedux from "./util/connectWithRedux";

const ConnectedVideomailRecorder = connectWithRedux(VideomailRecorder);

export type { VideomailRecorderOptions } from "./features/options/types";
export type { VideomailRecorderProps } from "./features/recorder/Recorder";
export type { BrowserStats } from "./types/BrowserStats";
export type { Command } from "./types/Command";
export type { VideomailCommandArgs } from "./types/Command";
export type { DeliveryRecord } from "./types/Delivery";
export type { EmailAddress, EmailAddresses } from "./types/EmailAddress";
export type { FullVideomailErrorData, VideomailErrorData } from "./types/Error";
export type { VideomailEvents } from "./types/events";
export type * from "./types/events/params";
export type { RecordingStats } from "./types/RecordingStats";
export type { PartialVideomail, Videomail } from "./types/Videomail";
export type { VideoTypeType } from "./types/VideoType";

export {
  ConnectedVideomailRecorder,
  // TODO Will sort this out later after the TS v10 release
  VideoType,
};
