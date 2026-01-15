import { VideomailRecorderOptions } from "./types";

const db: VideomailRecorderOptions = {
  // Leave as it, permanent API url to post videos
  apiUrl: "https://videomail.io/api",

  // Leave as it, permanent websocket url to send frames
  socketUrl: "wss://videomail.io",

  // Required for API, use https://videomail.io/whitelist
  whitelistKey: "videomail-client-demo",

  // Enable pause/resume button
  enablePause: true,

  // Automatically pauses when window becomes inactive
  enableAutoPause: true,

  // Hitting space can pause recording
  enableSpace: true,

  // When enabled, all videomail metadata is submitted
  // under the `videomail` key inside the form data body.
  submitWithVideomail: false,

  // Set this to true if you do not want to submit videos,
  // but just want to record and replay these temporarily
  disableSubmit: false,

  // Automatically validates all form inputs if any exist and
  enableAutoValidation: true,

  // Automatically unloads VC when navigating away
  enableAutoUnload: true,

  // Does not enable or disable submit button after recording
  // when something else seems invalid.
  enableAutoSubmission: true,

  // Enctype for the form submission. currently implemented are:
  // 'application/json' and
  // 'application/x-www-form-urlencoded'
  enctype: "application/json",

  audio: {
    enabled: true,

    // Enables a switcher for audio recording (on/off)
    switch: false,

    // Must be between 0 .. 1 but 0.20 is recommended to avoid distorting at the higher volume peaks
    volume: 0.2,

    // Decides how often the audio is being sampled.

    // It can be 'auto' or an integer being a power of two like 512 or 2048
    // the higher the less traffic, but harder to adjust with rubberband
    // to match with the video length on server side during encoding
    bufferSize: "auto",
  },

  video: {
    // Depends on your connection
    fps: 15,

    // Recording automatically stops after that limit
    limitSeconds: 30,

    // Set it to 0 or false to disable it
    countdown: 3,

    // It is recommended to set one dimension only and leave the other one to auto
    // because each webcam has a different aspect ratio.

    // Or use an integer for exact pixels
    width: undefined,

    // Or use an integer for exact pixels
    height: undefined,

    // Can be 'user', 'environment', 'left' or 'right'. useful for mobiles.
    facingMode: "user",

    facingModeButton: false,

    // Set to true if you want the video to take the full width of the parent container
    stretch: false,

    // If you define one, all video related width will be set to 100% below this breakpoint
    mobileBreakPoint: undefined,

    // Default is undefined, because ...
    // ... accessibility. Let the user decide when to play.
    autoPlay: undefined,
  },

  image: {
    quality: 0.42,

    // Recommended settings to make most of all browsers
    types: ["webp", "jpeg"],
  },

  // Alter these text for internationalization
  text: {
    pausedHeader: "Paused",
    pausedHint: undefined,
    sending: "Teleporting",
    encoding: "Encoding",
    limitReached: "Limit reached",
    audioOff: "Audio off",
    audioOn: "Audio on",
    buttons: {
      record: "Record video",
      recordAgain: "Record again",
      resume: "Resume",
      pause: "Pause",
      preview: "Preview",
    },
  },

  notifier: {
    // When true, user is entertained while waiting, see examples
    entertain: false,
    entertainClass: "bg",
    entertainLimit: 6,
    entertainInterval: 9000,
  },

  timeouts: {
    // In milliseconds, increase if you want user give more time to enable webcam
    userMedia: 20e3,

    // In seconds, increase if api is slow
    connection: 1e4,

    // In milliseconds, keeps web stream (connection) alive when pausing
    pingInterval: 30e3,
  },

  // When true, user media is loaded only when record button is pressed
  loadUserMediaOnRecord: false,

  callbacks: {
    // A custom callback to tweak form data before posting to server
    // this is for advanced use only and shouldn't be used if possible
    adjustFormDataBeforePosting: undefined,

    // Another custom callback to tweak a single form value before populating the form.
    adjustFormValueBeforePopulating: undefined,
  },

  // Show errors inside the container?
  displayErrors: true,

  // When true, all form inputs get disabled and disappear when browser can't record
  adjustFormOnBrowserError: true,

  // When true, any errors will be sent to the videomail server for analysis
  reportErrors: true,

  // This is because we need to set this to false by default for our WordPress plugin unfortunately.
  // Because WordPress plugins do overlap with each other.
  //
  // We will keep the default to `true` but offer an option to correct it on WP side.
  disableFormWhenSubmitting: true,

  // Just for testing purposes to simulate browser agent handling
  fakeUaString: undefined,

  // Experimental, needs more work:
  // But for better mobile support, this shall be set to true for now.
  recalculateDimensionsOnWindowResize: false,

  versions: {
    videomailNinjaFormPlugin: undefined,
  },
};

export default db;
