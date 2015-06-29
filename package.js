Package.describe({
  name: 'davidrums:tota11y',
  version: '0.0.3',
  summary: 'port of the tota11y package to Meteor',
  git: 'https://github.com/Davidrums/Meteor-tota11y.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('tota11y.js','client');
});
