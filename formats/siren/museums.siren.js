module.exports = function(model) {
  var entity = {
    class: ['musemus'],
    entities: [],
    links: [
      { rel: ['self'], href: model.selfUrl }
    ]
  };

  entity.entities = model.items.map(function(item) {
    var museum = {
      class: ['item', 'museum'],
      properties: {
        museum: item.museum,
        address: item.address,
        city: item.city
      },
      links: [
        { rel: ['self'], href: item.selfUrl }
      ]
    };

    return museum;
  });

  return entity;
};
