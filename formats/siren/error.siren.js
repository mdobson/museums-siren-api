module.exports = function(model) {
  var entity = {
    class: ['error'],
    properties: {
      error: model.error,
      description: model.description,
      code:model.code
    },
    links: [
      { rel: ['self'], href: model.selfUrl }
    ]
  };

  return entity;
};

