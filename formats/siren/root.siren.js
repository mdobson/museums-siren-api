module.exports = function(model) {
  var entity = {
    class: ['root']
  };
  entity.links = model.urls.map(function(resource) {
      var link = {
        rel: [resource.name],
        href: resource.selfUrl
      };

      return link;
    });

    entity.links.push({
      rel: ['self'],
      href: model.selfUrl
    });

  return entity;
};


