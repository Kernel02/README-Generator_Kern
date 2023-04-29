const inquirer = require("inquirer");
const createReadme = require("./template");

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter a title for your project",
      name: "title",
    },
    {
      type: "input",
      message: "Enter a description for your project.",
      name: "description",
    },
    {
      type: "input",
      message: "Enter installation instructions for your project.",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter usage information for your project.",
      name: "usage",
    },
    {
      type: "list",
      choices: ["MIT", "Apache", "Boost"],
      message: "Choose the license used for your project",
      name: "license",
    },
    {
      type: "input",
      message: "Enter the contribution guidelines for your project",
      name: "contributions",
    },
    {
      type: "input",
      message: "Enter test instructions for your project.",
      name: "test",
    },
    {
      type: "input",
      message: "Enter your email.",
      name: "email",
    },
    {
      type: "input",
      message: "Enter your GitHub username.",
      name: "gitHubUsername",
    },
  ])
  .then((response) => {
    switch (response.license) {
      case "MIT":
        response.license =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "Apache":
        response.license =
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "Boost":
        response.license =
          "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    }
    createReadme(
      response.title,
      response.description,
      response.installation,
      response.usage,
      response.license,
      response.contributions,
      response.test,
      response.email,
      response.gitHubUsername
    );
  });
