// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    }
    'postcss-pxtorem': {
      rootValue: 750,
      propList: ['*']
    }
  }
}
