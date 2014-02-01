module.exports = function(model) {
  var entity = {
    class: ['museum'],
    properties: {
      museum: model.museum,
      address: model.address,
      city: model.city
    },
    links: [
      { rel: ['collection'], href: model.collectionUrl },
      { rel: ['self'], href: model.selfUrl }
    ]
  };

  return entity;
};
