import { PartialDeep } from "type-fest";

import { PartialVideomail, Videomail } from "../../types/Videomail";

// TODO Review those options, most are not needed with this new port :)
export interface VideomailRecorderOptions {
  apiUrl: string;
  socketUrl: string;
  whitelistKey: string;
  enablePause: boolean;
  enableAutoPause: boolean;
  enableSpace: boolean;
  submitWithVideomail: boolean;
  disableSubmit: boolean;
  enableAutoValidation: boolean;
  enableAutoUnload: boolean;
  enableAutoSubmission: boolean;
  enctype: string;

  audio: {
    enabled: boolean | undefined;
    switch: boolean | undefined;
    volume: number | undefined;
    bufferSize: number | "auto" | undefined;
  };

  video: {
    fps?: number | undefined;
    limitSeconds: number;
    countdown?: number | boolean | undefined;

    width?: number | undefined;
    height?: number | undefined;
    // Later reconsider using the native lib dom type ConstrainDOMString
    facingMode: string | string[];
    facingModeButton: boolean;

    stretch: boolean;
    mobileBreakPoint?: number | undefined;

    autoPlay?: boolean | undefined;
  };

  image: {
    quality: number;
    types: string[];
  };

  text: {
    pausedHeader: string;
    pausedHint?: string | undefined;
    sending: string;
    encoding: string;
    limitReached: string;
    audioOff: string;
    audioOn: string;
    buttons: {
      record: string;
      recordAgain: string;
      resume: string;
      pause: string;
      preview: string;
    };
  };

  notifier: {
    entertain: boolean;
    entertainClass: string;
    entertainLimit: number;
    entertainInterval: number;
  };

  timeouts: {
    userMedia: number;
    connection: number;
    pingInterval: number;
  };

  loadUserMediaOnRecord: boolean;

  callbacks: {
    adjustFormDataBeforePosting?:
      | undefined
      | ((videomail: PartialVideomail) => PartialVideomail);
    adjustFormValueBeforePopulating?:
      | undefined
      | ((name: string, value: any, videomail: Videomail) => string);
  };

  displayErrors: boolean;
  adjustFormOnBrowserError: boolean;
  reportErrors: boolean;
  disableFormWhenSubmitting?: boolean | undefined;
  fakeUaString?: string | undefined;
  recalculateDimensionsOnWindowResize?: boolean | undefined;

  versions?:
    | {
        videomailNinjaFormPlugin?: string | undefined;
      }
    | undefined;
}

export type PartialVideomailRecorderOptions = PartialDeep<VideomailRecorderOptions>;
