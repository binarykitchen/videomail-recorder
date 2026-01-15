import { NodeEnvType } from "../types/Env";
import getNodeEnv from "./getNodeEnv";

function isProd() {
  return getNodeEnv() === NodeEnvType.PRODUCTION;
}

export default isProd;
