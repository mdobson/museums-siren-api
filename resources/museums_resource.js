var Museum = require('../models/museum');
var MuseumList = require('../models/museum_list');
var ApiError = require('../models/error');

var MuseumsResource = module.exports = function(client, ug) {
  this.path = '/museums';
  
  this.ug = ug;
  this.client = client;
  this.collection = new this.ug.collection({
    type:'museums',
    client:this.client
  });

};

MuseumsResource.prototype.init = function(config) {
  config
    .path(this.path)
    .consumes('application/json')
    .produces('application/json')
    .produces('application/vnd.siren+json')
    .get('/', this.list)
    .post('/', this.create)
    .get('/{id}', this.show);
};

MuseumsResource.prototype.list = function(env, next) {
  var urlHelper = env.helpers.url;
  var self = this;
  var items = [];

  this.collection.fetch(function(err, data) {
    if(err) {
      console.log('error');
      console.log(data);
      var errorEntity = ApiError.create({
        error:data.error,
        description: data.exception,
        code: 500,
        selfUrl:  urlHelper.current()
      });
      env.format.render('error', errorEntity);
      next(env);

    } else {
      while(self.collection.hasNextEntity()) {
        var museum = self.collection.getNextEntity();
        var entity = Museum.create({
          id: museum.get('uuid'),
          museum: museum.get('museum'),
          address: museum.get('address'),
          city: museum.get('city'),
          selfUrl: urlHelper.join(museum.get('uuid'))
        });

        items.push(entity);
      }

      var list = MuseumList.create({
        items: items,
        selfUrl: urlHelper.current()
      });

      env.format.render('museums', list);
      next(env);
    }
  });
};

MuseumsResource.prototype.create = function(env, next) {
  var self = this;
  env.request.getBody(function(err, body) {
    if(err) {
      console.log(err);
      var errorEntity = ApiError.create({
        error:data.error,
        description: data.exception,
        code: 500,
        selfUrl:  urlHelper.current()
      });
      env.format.render('error', errorEntity);
      env.response.statusCode = 500;  
      next(env);

    } else {
      var b = JSON.parse(body.toString());
      b.type = 'museums';
      self.client.createEntity(b, function(err, response) {
        if(err) {
          console.log(err);
          var errorEntity = ApiError.create({
            error:data.error,
            description: data.exception,
            code: 500,
            selfUrl:  urlHelper.current()
          });
          env.format.render('error', errorEntity);
          env.response.statusCode = 500;
          next(env);

        } else {
          env.response.statusCode = 201;
        }
        next(env);
      });
    }
  });
};


MuseumsResource.prototype.show = function(env, next) {
  var id = env.route.params.id;
  var urlHelper = env.helpers.url;

  var opts = {
    type:'museums',
    uuid: id
  };

  var self = this;

  this.client.getEntity(opts, function(err, entity, data) {
    if(err) {
      console.log('error');
      console.log(data);
      var errorEntity = ApiError.create({
        error:data.error,
        description: data.exception,
        code: 404,
        selfUrl:  urlHelper.current()
      });
      env.format.render('error', errorEntity);
      env.response.statusCode = 404;  
      next(env);

    } else {
      var museum = Museum.create({
        id: entity.get('uuid'),
        museum: entity.get('museum'),
        address: entity.get('address'),
        city: entity.get('city'),
        selfUrl: urlHelper.current(),
        collectionUrl: urlHelper.path(self.path)
      });

      env.format.render('museum', museum);
    }
    next(env);
  });
};

