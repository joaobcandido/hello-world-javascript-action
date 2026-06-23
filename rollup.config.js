const commonjs = require("@rollup/plugin-commonjs").default;
const { nodeResolve } = require("@rollup/plugin-node-resolve");

module.exports = {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs",
    sourcemap: true,
    exports: "auto",
  },
  plugins: [commonjs(), nodeResolve({ preferBuiltins: true })],
};
