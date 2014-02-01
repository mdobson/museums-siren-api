var titan = require('titan');
var path = require('path');
var siren = require('argo-formatter-siren');
var ug = require('usergrid');
var MuseumsResource = require('./resources/museums_resource.js');
var RootResource = require('./resources/root_resource.js');

var apigee = new ug.client({
  orgName:'mtraining',
  appName:'sandbox'
});

titan()
  .allow('*')
  .compress()
  .logger()
  .format({ engines: [siren], override: {'application/json': siren }})
  .add(RootResource)
  .add(MuseumsResource, apigee, ug)
  .listen(3000 || process.env.PORT);
