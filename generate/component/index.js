module.exports = {
  description: "Generates new component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Component name ?",
      validate: function (value) {
        let message = true;
        if (!/.+/.test(value)) {
          message = console.error(
            "Missing",
            "you must define a component name"
          );
        } else if (value.length < 3) {
          message = console.error(
            "Too Short",
            `"${value}" is not descriptive enough`
          );
        }
        return message;
      },
    },
  ],
  actions: function () {
    return [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.jsx",
        templateFile: "./generate/component/templates/component.jsx.hbs",
      },

      {
        type: "add",
        path: "src/components/{{pascalCase name}}/styles.module.scss",
      },
    ];
  },
};
