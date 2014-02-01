var Resource = module.exports = function() {
  this.name = null;
  this.selfUrl = null;
};

Resource.create = function(fill) {
  fill = fill || {};
  var entity = new Resource();

  entity.name = fill.name;
  entity.selfUrl = fill.selfUrl;
  return entity;
};


