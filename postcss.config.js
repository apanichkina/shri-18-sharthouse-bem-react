module.exports = {
  ident: 'postcss',
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-extend': {},
    'postcss-property-lookup': {},
    'postcss-preset-env': {
      features: {
        'custom-properties': true,
        'custom-media-queries': true,
      },
      autoprefixer: {
        grid: true,
      },
      browsers: ['last 2 versions'],
    },
  },
}
