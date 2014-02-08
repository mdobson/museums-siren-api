module.exports = function(model) {
  var entity = {
    class: ['root']
  };

  entity.actions = model.urls.map(function(resource) {
    var action = {
      'name':'get-'+resource.name,
      'title':'Get '+resource.name,
      'method':'GET',
      'href':resource.selfUrl,
      'fields': [
        { 'name':'query', 'type':'text' },
        { 'name':'limit', 'type':'number' }
      ]
    };

    return action;
  });

  entity.links = model.urls.map(function(resource) {
      var link = {
        rel: [resource.name, 'collection'],
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


