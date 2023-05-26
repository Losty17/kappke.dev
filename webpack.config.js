const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const [server, client] = require("nullstack/webpack.config");

function customClient(...args) {
  const config = client(...args);
  const rule = config.module.rules.find(
    (rule) => rule.test && rule.test.test(".css")
  );
  rule.use.push({
    loader: require.resolve("postcss-loader"),
    options: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
        },
      },
    },
  });

  return config;
}

function applyPathsPlugin(environments) {
  return environments.map((environment) => (...args) => {
    const config = environment(...args);

    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({ configFile: "tsconfig.json" })
    );

    return config;
  });
}

module.exports = applyPathsPlugin([server, customClient]);
