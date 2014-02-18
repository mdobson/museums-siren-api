module.exports = function(model) {
  var entity = {
    'class': ['museum'],
    properties: {
      museum: model.museum,
      address: model.address,
      city: model.city
    },
    actions: [
      {
        'name':'delete-museum',
        'title': 'Delete Museum',
        'method': 'DELETE',
        'href': model.selfUrl
      }
    ], 
    links: [
      { rel: ['collection'], href: model.collectionUrl },
      { rel: ['self'], href: model.selfUrl }
    ]
  };

  return entity;
};
