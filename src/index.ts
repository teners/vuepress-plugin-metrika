import { EnhanceAppFilesGeneratedFile, Plugin } from 'vuepress-types';
import { MetrikaConfig, MetrikaPluginOptions } from './types';

let METRIKA_COUNTER: string;
let METRIKA_CONFIG: MetrikaConfig;

function mergeWithDefaultConfig(config?: MetrikaConfig): MetrikaConfig {
  const defaultConfig: MetrikaConfig = {
    accurateTrackBounce: true,
    clickmap: true,
    trackLinks: true,
    webvisor: false,
  };
  if (config) {
    Object.keys(config).forEach((key) => {
      defaultConfig[key] = config[key];
    });
  }
  return defaultConfig;
}

const MetrikaPlugin: Plugin<MetrikaPluginOptions> = (options) => ({
  name: 'vuepress-plugin-metrika',
  ready(): void {
    METRIKA_COUNTER = options.counter;
    if (!METRIKA_COUNTER) {
      throw TypeError('Metrika Counter option is missing');
    }
    METRIKA_CONFIG = mergeWithDefaultConfig(options.config);
  },
  enhanceAppFiles: (): EnhanceAppFilesGeneratedFile => ({
    name: 'metrika-enhance-app',
    content: `
        import VueYandexMetrika from 'vue-yandex-metrika'
        export default ({ Vue, router }) => {
          Vue.use(VueYandexMetrika, {
            id: ${JSON.stringify(METRIKA_COUNTER)},
            options: ${JSON.stringify(METRIKA_CONFIG)},
            router: router,
            env: process.env.NODE_ENV,
          });
        }
      `,
  }),
});

module.exports = MetrikaPlugin;
