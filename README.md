# Yandex Metrika VuePress plugin

![Version](https://img.shields.io/npm/v/vuepress-plugin-metrika)
![License](https://img.shields.io/npm/l/vuepress-plugin-metrika)

Integrate [Yandex.Metrika](https://metrika.yandex.ru/) into your
[VuePress](http://vuepress.vuejs.org) app with a few configuration lines.

## Install

From your VuePress project directory run

```shell
yarn add -D vuepress-plugin-metrika
```

## Usage

Add the following lines to the `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    ...
    [
      'metrika',
      {
        counter: 'XXXXXXX',
        config: {...},
      },
    ],
  ]
}
```

where `XXXXXXX` is your Metrika counter, and `config` is an optional parameter
with the following defaults:

```js
{
  accurateTrackBounce: true,
  clickmap: true,
  trackLinks: true,
  webvisor: false
}     
```

[See more](https://yandex.ru/support/metrica/code/counter-initialize.html)
about Yandex.Metrika configuration options.
