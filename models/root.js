var Root = module.exports = function() {
  this.urls = null;
  this.selfUrl = null;
};

Root.create = function(fill) {
  fill = fill || {};

  var entity = new Root();

  entity.urls = fill.urls;
  entity.selfUrl = fill.selfUrl;

  return entity;
};
