import { NodeEnvType } from "../types/Env";

function getNodeEnv() {
  if (!process.env.NODE_ENV) {
    return NodeEnvType.DEVELOPMENT;
  }

  return process.env.NODE_ENV;
}

export default getNodeEnv;
