import { IResult, UAParser } from "ua-parser-js";

import { BrowserStats } from "../../types/BrowserStats";

// TODO Move to state management
class Browser {
  private readonly result: IResult;

  public constructor() {
    const userAgentParser = new UAParser(window.navigator.userAgent);
    this.result = userAgentParser.getResult();
  }

  public isIOS() {
    return this.result.os.name === "iOS";
  }

  private getBrowserVersion() {
    return this.result.browser.version;
  }

  private isChrome() {
    return this.result.browser.name === "Chrome";
  }

  private isChromium() {
    return this.result.browser.name === "Chromium";
  }

  public isFirefox() {
    return this.result.browser.name === "Firefox";
  }

  private isSafari() {
    if (!this.result.browser.name) {
      return false;
    }

    return this.result.browser.name.includes("Safari");
  }

  public isAndroid() {
    if (!this.result.os.name) {
      return false;
    }

    return this.result.os.name.includes("Android");
  }

  public isChromeBased() {
    return this.isChrome() || this.isChromium();
  }

  // TODO What if there are any other mobile OS out there?
  public isMobile() {
    return this.isIOS() || this.isAndroid();
  }

  public isOkSafari() {
    const version = this.getBrowserVersion();

    if (!version) {
      return false;
    }

    return this.isSafari() && Number.parseFloat(version) >= 11;
  }

  public getUsefulData() {
    const data: BrowserStats = {
      ua: this.result.ua,
      browser: this.result.browser,
      cpu: this.result.cpu,
      device: this.result.device,
      engine: this.result.engine,
      os: this.result.os,
    };

    return data;
  }
}

export default Browser;
