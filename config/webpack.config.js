"use strict";
/**
 * Version of the Webpack Config used for Development.
 *
 * This version will include SourceMaps, Uncompressed JS and HMR.
 */
const path = require("path");

module.exports = {
  output: {
    filename: "main.min.js",
  },

  devtool: "source-map",
  resolve: {
    modules: [path.resolve(__dirname, "scripts"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-proposal-object-rest-spread",
              [
                "@babel/plugin-transform-runtime",
                {
                  regenerator: true,
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
