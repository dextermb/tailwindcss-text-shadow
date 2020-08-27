# Tailwindcss Text Shadows

This plugin makes basic text shadow classes available for use with Tailwindcss.

To find more information about [Tailwindcss][tailwindcss] please check out their website.

## Installation

Use `npm` or `yarn` to install the package:

```
yarn add tw-ts
```

Then within your `tailwind.config.js` that can be generated using:

```
npx tailwindcss init
```

Then require the plugin into your plugins array:

```
module.exports = {
  theme: {},
  variants: {},
  plugins: [
    require('tw-ts')
  ],
}
```


[tailwindcss]: https://tailwindcss.com
