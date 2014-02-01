var ApiError = module.exports = function() {
  this.error = null;
  this.description = null;
  this.code = null;
  this.selfUrl = null;
};


ApiError.create = function(fill) {
  fill = fill || {};
  var err = new ApiError();
  err.error = fill.error;
  err.description = fill.description;
  err.code = fill.code;
  err.selfUrl = fill.selfUrl;

  return err;
};

