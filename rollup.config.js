// rollup.config.js
import typescript from "@rollup/plugin-typescript";

export default {
  input: "./index.ts",
  plugins: [typescript({ tsconfig: "./tsconfig.json" })],
  output: [
    {
      file: "./lib/index.js",
      format: "cjs",
      exports: "named",
    },
    {
      file: "./lib/index.esm.js",
      format: "esm",
      exports: "named",
    },
    {
      file: "./lib/index.umd.js",
      format: "umd",
      exports: "named",
      name: "UACheck",
    },
  ],
};
