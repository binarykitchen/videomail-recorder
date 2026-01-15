// These actually define the runtime mode of Node.js and
// are set either in package.json, via unit test runs or in Docker
export const NodeEnvType = {
  DEVELOPMENT: "development",
  PRODUCTION: "production",
} as const;
