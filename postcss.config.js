const postcssPresetEnv  = require('postcss-preset-env')
const postcssImport     = require('postcss-import')
const postcsseasings    = require('postcss-easings')
const importUrl         = require('postcss-import-url')
const cssnano           = require('cssnano')
const avifInCSS         = require('avif-in-css')

const dev = {
  plugins: [
    importUrl(),
    postcssImport({
      path: 'app/css',
    }),
    avifInCSS(),
    postcsseasings(),
    postcssPresetEnv({
      stage: 0,
      features: {
        'logical-properties-and-values': false,
      }
    }),
  ]
}

const prod = {
  plugins: [
    importUrl(),
    postcssImport({
      path: 'app/css',
    }),
    avifInCSS(),
    postcsseasings(),
    postcssPresetEnv({
      stage: 0,
      features: {
        'logical-properties-and-values': false,
      }
    }),
    cssnano({
      preset: 'default'
    }),
  ]
}

module.exports = process.env.NODE_ENV === 'production' 
  ? prod 
  : dev
