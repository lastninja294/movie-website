const generateComponent = require("./generate/component");

module.exports = function (plop) {
  plop.setGenerator("component", generateComponent);
};
