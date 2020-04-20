const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}, context) => ({
  define () {
    const { siteConfig = {}} = context;
    const metrikaCounter = options.metrikaCounter || siteConfig.metrikaCounter;
    const METRIKA_COUNTER = metrikaCounter || false
    return { METRIKA_COUNTER }
  },

  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js')
})
