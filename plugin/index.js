module.exports = babel => {
  const t = babel.types;

  return {
    visitor: {
      JSXElement: function (path) {
        var nodeName = path.node.openingElement.name.name;
        var handler = nodeHandlers[nodeName];

        if (handler) {
          path.replaceWith(handler(path.node, path.hub.file));
        }
      },
    },
  };
};
