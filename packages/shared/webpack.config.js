const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
module.exports = {
  entry: "./index.js",
  mode: "development",
  devtool: "hidden-source-map",
  module: {},
  devServer: {
    port:10000,
    headers: {
      'X-Custom-Foo': 'bar',
    },
},
  plugins: [
    new ModuleFederationPlugin({
      name: "mf1",
      library: { type: 'umd', name: 'mf1' },
      filename: 'remoteEntry.js',
      exposes: {
        "./Button": './index.js',
      },
      shared: { react: { eager: true }, "react-dom": { eager: true } },
    }),
  ],
};