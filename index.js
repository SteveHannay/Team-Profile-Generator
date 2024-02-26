/* 
    Javascript for Challenge 10
    Developer - Steve Hannay 
    First Created - 23rd February 2024 (from Bootcamp starter code)

    This code handles logic for the Team Profile Generator
*/

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/    

let teamArray = []                  // array to hold objects generated by user input
let menuOption = ""                 // menu option selected by user



// Gather information about the development team members and render an HTML file
// -----------------------------------------------------------------------------


init()
async function init() {

    // Get User Input and Populate the Team Array

    // (a) get Manager
    await getUserInput_Manager()

    // repeat until user input is completed
    while(menuOption !== "Finish building the team") {

        // (b) get Engineer
        if (menuOption === "Add an engineer") {await getUserInput_Engineer()}

        // (c) get Intern
        if (menuOption === "Add an intern") {await getUserInput_Intern()}

    }        
    

    // Get HTML (generated using the Team Array)
    const html = render(teamArray)

    // Write HTML to a File (create webpage in output folder)
    fs.writeFile(outputPath, html, (err) =>
        err ? console.log(err) : console.log('Your Team Profile has been saved to the team.html file in the output folder')  
    )

}



// Get User Input
// --------------


// (a) Get MANAGER details from User Input and append to the Team Array
async function getUserInput_Manager() {

    // array of Questions for user to answer
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the NAME of the Manager?',
            validate : answer => {
                if(!answer) {return "Please enter a name"}
                return true}
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the Manager?',
            validate : (answer) => {
                if (isNaN(answer)) {return "please enter a number"}
                return true}
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the EMAIL of the Manager?',
            validate : (answer) => {
                if(!emailRegex.test(answer)) {return "please enter a valid email address!"}
                return true}
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the OFFICE NUMBER of the Manager?',
            validate : (answer) => {
                if (isNaN(answer)) {return "please enter a number"}
                return true}
        },
        {
            type: 'list',
            message: 'What would you like to do next?',
            name: 'menuOption',
            choices: ["Add an engineer", "Add an intern", "Finish building the team"], 
        },
    ]   

    // Ask the user Questions
    await inquirer
        .prompt(questions)

        // With the Answers
        .then((answers) => {

            // Create a New Manager object (an instance of the Manager class)
            let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)

            // Add the New Manager to the Team Array
            teamArray.push(manager)

            // Store the users Menu Selection
            menuOption = answers.menuOption

        })
        .catch((error) => {console.log('error : ', error)})

}


// (b) Get ENGINEER details from User Input and append to the Team Array
async function getUserInput_Engineer() {

    // array of Questions for user to answer
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the NAME of the Engineer?',
            validate : answer => {
                if(!answer) {return "Please enter a name"}
                return true}
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the Engineer?',
            validate : (answer) => {
                if (isNaN(answer)) {return "please enter a number"}
                return true}
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the EMAIL of the Engineer?',
            validate : (answer) => {
                if(!emailRegex.test(answer)) {return "please enter a valid email address!"}
                return true}
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the GITHUB of the Engineer?',
            validate : answer => {
                if(!answer) {return "Please enter a gitHub name"}
                return true}
        },
        {
            type: 'list',
            message: 'What would you like to do next?',
            name: 'menuOption',
            choices: ["Add an engineer", "Add an intern", "Finish building the team"], 
        },
    ]   

    // Ask the user Questions
    await inquirer
        .prompt(questions)

        // With the Answers
        .then((answers) => {

            // Create a New Engineer object (an instance of the Engineer class)
            let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)

            // Add the New Engineer to the Team Array
            teamArray.push(engineer)

            // Store the users Menu Selection
            menuOption = answers.menuOption

        })
        .catch((error) => {console.log('error : ', error)})

}


// (c) Get INTERN details from User Input and append to the Team Array
async function getUserInput_Intern() {

    // array of Questions for user to answer
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the NAME of the Intern?',
            validate : answer => {
                if(!answer) {return "Please enter a name"}
                return true}
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the Intern?',
            validate : (answer) => {
                if (isNaN(answer)) {return "please enter a number"}
                return true}
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the EMAIL of the Intern?',
            validate : (answer) => {
                if(!emailRegex.test(answer)) {return "please enter a valid email address!"}
                return true}
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the SCHOOL of the Intern?',
            validate : answer => {
                if(!answer) {return "Please enter a school"}
                return true}
        },
        {
            type: 'list',
            message: 'What would you like to do next?',
            name: 'menuOption',
            choices: ["Add an engineer", "Add an intern", "Finish building the team"], 
        },
    ]   

    // Ask the user Questions
    await inquirer
        .prompt(questions)

        // With the Answers
        .then((answers) => {

            // Create a New Intern object (an instance of the Intern class)
            let intern = new Intern(answers.name, answers.id, answers.email, answers.school)

            // Add the New Intern to the Team Array
            teamArray.push(intern)

            // Store the users Menu Selection
            menuOption = answers.menuOption

        })
        .catch((error) => {console.log('error : ', error)})

}



