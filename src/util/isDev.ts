import { NodeEnvType } from "../types/Env";
import getNodeEnv from "./getNodeEnv";

function isDev() {
  return getNodeEnv() === NodeEnvType.DEVELOPMENT;
}

export default isDev;
