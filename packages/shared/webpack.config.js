const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./index.js",
  mode: "development",
  devtool: "hidden-source-map",
  output: {
    publicPath: "http://localhost:3000/",
    clean: true,
  },
  module: {},
  plugins: [
    new ModuleFederationPlugin({
      name: "lib_app",
      filename: "remoteEntry.js",
      library: { type: 'umd', name: 'lib_app' },
      exposes: {
        "./react": "react",
        "./react-dom": "react-dom",
        "./Button":'./index.js'
      },
    }),
  ],
};