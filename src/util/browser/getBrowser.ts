import Browser from "./Browser";

let browser: Browser | undefined;

// TODO Move this to state management and populate on start instead
function getBrowser() {
  if (!browser) {
    browser = new Browser();
  }

  return browser;
}

export default getBrowser;
