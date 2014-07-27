Package.describe({
  summary: "Firebase wrapper for Meteor"
});

Npm.depends({ "firebase": "1.0.18" });

Package.on_use(function(api) {
  if (api.export) api.export('Firebase', 'server');
  api.add_files('firebase.js', 'server');
});

