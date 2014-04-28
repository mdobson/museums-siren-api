var ResourceModel = require('../models/resource');
var RootModel = require('../models/root');

var RootResource = module.exports = function() {
  this.path = '/';
  
  this.resources = [
    { name: 'museums' }
  ];
};

RootResource.prototype.init = function(config) {
  config
    .path(this.path)
    .produces('application/vnd.siren+json')
    .get('/',this.list);
};

RootResource.prototype.list = function(env, next) {
  var urlHelper = env.helpers.url;
  
  var resources = this.resources.map(function(resource) {
    resource.selfUrl = urlHelper.path(resource.name);
    return resource;
  });

  var root = RootModel.create({
    urls: resources,
    selfUrl: urlHelper.current()
  });

  env.format.render('root', root);
  next(env);

};
