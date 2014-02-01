module.exports = function(model) {
  var entity = {
    class: ['museums'],
    entities: [],
      actions: [
        {
          'name':'add-museum',
          'title': 'Add Museum',
          'method': 'POST',
          'href': model.selfUrl,
          'type': 'application/json',
          'fields': [
            { 'name': 'museum', 'type': 'text' },
            { 'name': 'address', 'type': 'text' },
            { 'name': 'city', 'type': 'text' }
          ]
        }
      ],
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
