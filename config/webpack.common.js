const paths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  entry: {
    app: paths.src + "/index.js",
    calc: paths.src + "/js/calc.js",
  },
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    publicPath: "/",
    pathinfo: false,
  },

  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // // Prettier configuration
    // new PrettierPlugin({
    //   tabWidth: 2,
    //   printWidth: 80,
    //   extensions: [".html"],
    // }),

    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      template: paths.src + "/index.html",
      filename: "index.html",
      minify: false,
      scriptLoading: "blocking",
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/loan.html",
      filename: "loan.html",
      minify: false,
      scriptLoading: "blocking",
      excludeChunks: ["calc"],
    }),
    new HtmlWebpackPlugin({
      template: paths.src + "/blog.html",
      filename: "blog.html",
      minify: false,
      scriptLoading: "blocking",
      excludeChunks: ["calc"],
    }),
    new HtmlWebpackPlugin({
      template: paths.src + "/post.html",
      filename: "post.html",
      minify: false,
      scriptLoading: "blocking",
      excludeChunks: ["calc"],
    }),
    new HtmlWebpackPlugin({
      template: paths.src + "/reviews.html",
      filename: "reviews.html",
      minify: false,
      scriptLoading: "blocking",
      excludeChunks: ["calc"],
    }),
    new HtmlWebpackPlugin({
      template: paths.src + "/about-us.html",
      filename: "about-us.html",
      minify: false,
      scriptLoading: "blocking",
      excludeChunks: ["calc"],
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/form.html",
      filename: "form.html",
      minify: false,
      scriptLoading: "blocking",
      excludeChunks: ["calc"],
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/contact-us.html",
      filename: "contact-us.html",
      minify: false,
      scriptLoading: "blocking",
      excludeChunks: ["calc"],
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/calculator.html",
      filename: "calculator.html",
      minify: false,
      scriptLoading: "blocking",
    }),
  ],
  // Determine how modules within the project are treated
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: false,
        },
      },

      // Images: Copy image files to build folder
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(?:svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/svg/[name][ext]",
        },
      },

      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
};
