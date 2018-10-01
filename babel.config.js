module.exports = {
  babelrcRoots: "packages/**",
  presets: ["@babel/preset-react", "@babel/preset-env"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-export-default-from"
  ]
};