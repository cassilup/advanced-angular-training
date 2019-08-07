# Webpack Intro Tutorial

1. Clone the project and inspect the files. Observe `webpack.config.js`.

2. Install typescript-loader and typescript through npm.
```
npm install ts-loader --save-dev
npm install typescript --save-dev
```
3. Take a look at `webpack.config.js` (notice how `entry`, `output` and `loaders` are configured).
4. Run `npm install` in order to install dependencies.

5. Update webpack.config as follows:

```
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./app.ts",
  output: {
    filename: "bundle.js"
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
};
```

6. Add a `tsoconfig.json` file:

```
{
  "compilerOptions": {
    "sourceMap": true
  }
}
```

7. Start Webpack Dev Server by running this command in the terminal:

```
webpack-dev-server --progress --debug --inline --host 0.0.0.0
```

8. Open http://localhost:8080
    (Bonus: page reloads on changes)

9. Inspect sources