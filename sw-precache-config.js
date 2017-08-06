module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.js',
    'dist/**.css',
    'dist/assets/images/*',
    'dist/assets/icons/*',
    'dist/assets/js/*',
    'dist/assets/css/*'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html',
  runtimeCaching: [{
    urlPattern: /localhost\:4200/,
    handler: 'networkFirst'
  }]
};
