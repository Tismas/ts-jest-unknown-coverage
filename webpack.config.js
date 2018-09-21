const path = require("path");

module.exports = (_, argv) => {
  return {
    entry: {
      app: "./src/main.tsx"
    },
    resolve: {
      extensions: [".js", ".jsx", ".json", ".tsx", ".ts"],
      modules: [path.resolve("./node_modules"), path.resolve("./src")]
    },
    devServer: {
      historyApiFallback: true
    },
    devtool: "source-map",

    module: {
      rules: [
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg)/,
          use: "file-loader"
        }
      ]
    },

    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "_build")
    }
  };
};
