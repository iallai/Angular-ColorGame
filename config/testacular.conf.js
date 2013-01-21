basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/angular/angular.js',
  'app/lib/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',
  'app/js/*.js',
  '/wamp/www/game/Color-Match/test/unit/*.js',
];

autoWatch = true;

browsers = ['ChromeCanary'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
