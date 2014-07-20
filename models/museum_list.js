var MuseumList = module.exports = function() {
  this.items = null;
  this.selfUrl = null;
};

MuseumList.create = function(fill) {
  fill = fill || {};
  
  var list = new MuseumList();

  list.items = fill.items;
  list.selfUrl = fill.selfUrl;
  list.selfPath = fill.selfPath;

  return list;
};
