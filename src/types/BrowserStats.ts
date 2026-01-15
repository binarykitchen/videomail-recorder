import { IBrowser, ICPU, IDevice, IEngine, IOS } from "ua-parser-js";

interface BrowserStats {
  ua: string;
  browser: IBrowser;
  cpu: ICPU;
  device: IDevice;
  engine: IEngine;
  os: IOS;
}

export type { BrowserStats };
