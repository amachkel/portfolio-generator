const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "location",
      message: "Where are you from?",
    },
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "bio",
      message: "Please insert your bio.",
    },
    {
      type: "input",
      name: "github",
      message: "What is your github URL?",
    },
    {
      type: "input",
      name: "linkedIn",
      message: "What is your linkedIn URL?",
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(" ").join("")}.html`;
    const portfolio = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Portfolio</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
      integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="jumbotron">
        <h1 class="display-4">Hello, and welcome!</h1>
        <p class="lead">Welcome to ${data.name}'s portfolio!</p>
        <hr class="my-4">
        <p> I am from ${data.location}.</p>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">About Me</h5>
          <p class="card-text">${data.bio}</p>
          <a href="https://${data.github}" class="card-link">Github</a>
          <a href="https://${data.linkedIn}" class="card-link">LinkedIn</a>
        </div>
      </div>
    <script
      src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;
    fs.writeFile(filename, portfolio, (err) =>
      err ? console.log(err) : console.log("an html document was created.")
    );
  });
