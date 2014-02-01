var Museum = module.exports = function() {
  this.id = null;
  this.museum = null;
  this.address = null;
  this.city = null;
  this.selfUrl = null;
  this.collectionUrl = null;
};

Museum.create = function(fill) {
  fill = fill || {};

  var museum = new Museum();
  museum.id = fill.id;
  museum.museum = fill.museum;
  museum.address = fill.address;
  museum.city = fill.city;
  museum.selfUrl = fill.selfUrl;
  museum.collectionUrl = fill.collectionUrl;

  return museum;
};

