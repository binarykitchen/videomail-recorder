import path from "node:path";

import { pluginNodePolyfill } from "@rsbuild/plugin-node-polyfill";
import { pluginReact } from "@rsbuild/plugin-react";
import { RsdoctorRspackPlugin } from "@rsdoctor/rspack-plugin";
import { defineConfig } from "@rslib/core";

import { NodeEnvType } from "./src/types/Env";
import isProd from "./src/util/isProd";

const rootDir = process.cwd();

const resolvePath = (relativePath: string) => path.resolve(rootDir, relativePath);

const srcDir = resolvePath("src");
const tsConfig = resolvePath("tsconfig.json");
const tsConfigProd = resolvePath("tsconfig.prod.json");
const tsEntry = resolvePath(path.join(srcDir, "index.ts"));

export default defineConfig({
  lib: [
    {
      format: "esm",
      syntax: "es2020",
      dts: true,
      output: {
        distPath: {
          root: "./dist/esm/",
        },
      },
    },
    {
      format: "cjs",
      // This will include all the JS code into one single file without
      // the use of require()
      autoExternal: false,
      syntax: "es2015",
      output: {
        distPath: {
          root: "./dist/cjs/",
        },
      },
    },
    {
      format: "umd",
      // This will include all the JS code into one single file without
      // the use of require()
      autoExternal: false,
      umdName: "VideomailRecorder",
      output: {
        distPath: {
          root: "./dist/umd/",
        },
      },
    },
  ],
  mode: isProd() ? NodeEnvType.PRODUCTION : NodeEnvType.DEVELOPMENT,
  output: {
    target: "web",
    injectStyles: true,
    legalComments: "none",
  },
  source: {
    entry: {
      index: tsEntry,
    },
    tsconfigPath: isProd() ? tsConfigProd : tsConfig,
  },
  plugins: [
    pluginNodePolyfill(),
    pluginReact({
      // Disabled as it slows down builds but useful to identify performance issues under dev tools
      // enableProfiler: false
    }),
  ],
  tools: {
    rspack: (_config, { appendPlugins }) => {
      // To run this, use the `npm run build:prod:doc` command
      if (process.env.RSDOCTOR) {
        appendPlugins(
          new RsdoctorRspackPlugin({
            // plugin options
          }),
        );
      }
    },
  },
});
