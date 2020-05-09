export interface MetrikaConfig {
  accurateTrackBounce?: boolean;
  clickmap?: boolean;
  trackLinks?: boolean;
  webvisor?: boolean;
}

export interface MetrikaPluginOptions {
  counter: string;
  config?: MetrikaConfig;
}
