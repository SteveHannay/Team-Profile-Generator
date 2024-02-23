const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

init()

function init() {

    console.log("init...")

    const html = render([])

    console.log(html)

    // Write HTML File
    fs.writeFile(outputPath, html, (err) =>
        err ? console.log(err) : console.log('team.html has been created in the output folder')  
    )

}

