Package.describe({
  name: 'clinical:users-picklist',
  version: '1.0.7',
  summary: 'User Picklist modal for  ClinicalFramework apps.',
  git: 'https://github.com/clinical-meteor/clinical-keybindings',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('grove:less@0.1.1');
  api.use('awatson1978:fonts-helveticas@1.0.4');
  api.use('clinical:modals@1.0.6');
  api.use('clinical:active-layout@0.4.1');

  api.addFiles('client/userPicklistModal/userPicklistModal.html', 'client');
  api.addFiles('client/userPicklistModal/userPicklistModal.js', 'client');
  api.addFiles('client/userPicklistModal/userPicklistModal.less', 'client');

  api.export('userPicklistModal');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:users-picklist');
  api.addFiles('tests/users-picklist.js');
});
