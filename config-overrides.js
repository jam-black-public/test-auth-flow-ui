const gzipLoader = require('./loaders/compression');
const svgLoader = require('./loaders/svg');

module.exports = function override(config, env) {
  config = svgLoader(config, env);
  config = gzipLoader(config, env, {
    test: /\.js(\?.*)?$/i,
    cache: true
  });

  return config;
};
