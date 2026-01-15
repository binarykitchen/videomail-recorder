import createVideomailRecorder from "./features/recorder/createRecorder";
import { VideoType } from "./types/VideoType";

export type { VideomailRecorderOptions } from "./features/options/types";
export type { VideomailRecorderProps } from "./features/recorder/components/Recorder";
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
  createVideomailRecorder,
  // TODO Will sort this out later after the TS v10 release
  VideoType,
};
