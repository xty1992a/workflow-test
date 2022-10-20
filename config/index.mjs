import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
// import globals from "rollup-plugin-node-globals";
// import builtins from "rollup-plugin-node-builtins";
// import typescript from "@rollup/plugin-typescript";
import typescript from 'rollup-plugin-typescript'

import { root } from "./tools.mjs";

export default {
  input: root("src/index.ts"),
  output: [
    {
      file: root("dist/index.cjs.js"),
      format: "cjs"
    },
    {
      file: root("dist/index.esm.js"),
      format: "es"
    }
  ],
  plugins: [
    commonjs({
      include: /node_modules/
    }),
    nodeResolve({ preferBuiltins: false }), // or `true`
    // commonjs(),
    // globals(),
    // builtins(),
    typescript({
      exclude: "node_modules/**",
    }),
  ]
};
