const { NODE_ENV } = process.env;
const devMode = NODE_ENV === "development";

module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        pragma: "dom",
        pragmaFrag: "DomFrag",
        throwIfNamespace: false,
        runtime: "classic",
      },
    ],
  ],
  plugins: [].concat(devMode ? "react-refresh/babel" : []),
};
