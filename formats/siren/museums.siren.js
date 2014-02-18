module.exports = function(model) {
  var entity = {
    'class': ['museums', 'collection'],
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
        },
        {
          'name': 'update-museum',
          'title': 'Update Museum',
          'method': 'PUT',
          'href': model.selfUrl,
          'type': 'application/json',
          'fields': [
            { 'name': 'museum', 'type':'text' },
            { 'name': 'address', 'type':'text'},
            { 'name': 'city', 'type':'text'}
          ]
        },
         {
          'name':'get-museums',
          'title':'Get Museums',
          'method':'GET',
          'href':model.selfUrl,
          'fields': [
            { 'name':'query', 'type':'text' },
            { 'name':'limit', 'type':'number' }
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
      rel: [ 
        'http://msiren.herokuapp.com/rels/museum',
        'item'
      ],
      properties: {
        'museum': item.museum
      },
      links: [
        {
          rel: [ 'self' ],
          href: item.selfUrl
        }
      ]
    };

    return museum;
  });

  return entity;
};
