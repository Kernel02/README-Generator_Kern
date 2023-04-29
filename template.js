const fs = require("fs");

function createReadme(
  title,
  description,
  installation,
  usage,
  license,
  contributions,
  test,
  email,
  gitHubUsername
) {
  const readme = `
  # ${title} ${license}

  ## Table of Contents
   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [License](#license)
   - [Contributions](#contributions)
   - [Tests](#tests)
   - [Questions](#questions)
    
  ## Description
   ${description}
    
  ## Installation
   ${installation}
    
  ## Usage
   ${usage}
    
  ## License
   ${license}
    
  ## Contributions
   ${contributions}
    
  ## Tests
   ${test}
   
  ## Questions
   If you have any questions you can contact me at my email: ${email}
   
   GitHub: ${gitHubUsername}`;

  fs.writeFile(`./Generated-README.md/${title}.md`, readme, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("\nREADME file succesfully made.\n");
    }
  });
}

module.exports = createReadme;
