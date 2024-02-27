# Team-Profile-Generator

Challenge homework for 12-object-oriented-programming-module

Task - Create code for a "Team Profile Generator" where the user can enter details of a Team into the terminal in order to genrate an html file containing a card for each Employee in the team. 

Developer - Steve Hannay

Completed - 27th Feb 2024


## Description

![Challenge 10 - screenshot of the team.html file created by the Team Profile Generator](assets/Challenge%2010%20-%20Webpage.png)

The aim of this project is to create a Team Profile Generator which runs from the Terminal.

The user is prompted to enter details of members of the team (Employee).

One Manager and any number of Engineers and Interns can be entered by the user.

An HTML file containing a card for each team member is then generated  in the Output folder.

The following acceptance criteria was set for the project :

--------------------------------------------------------------------------------------------------------------------------

The app should:

* Create a command-line application that accepts user input using the provided starter code.   
  * Create classes for each team member provided and export them. The tests for these classes (in the `_tests_` directory) must ALL pass.     
    * The first class is an `Employee` parent class with the following properties and methods:       
      * `name`
      * `id`
      * `email`
      * `getName()`
      * `getId()`
      * `getEmail()`
      * `getRole()`&mdash;returns `'Employee'`     
    * The other three classes will extend `Employee`.      
    * In addition to `Employee`'s properties and methods, `Manager` will also have the following:
      * `officeNumber`
      * `getRole()`&mdash;overridden to return `'Manager'`
    * In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
      * `github`&mdash;GitHub username
      * `getGithub()`
      * `getRole()`&mdash;overridden to return `'Engineer'`
    * In addition to `Employee`'s properties and methods, `Intern` will also have the following:
      * `school`
      * `getSchool()`
      * `getRole()`&mdash;overridden to return `'Intern'`
    * Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.   
  * Write code in `index.js` that uses inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.
    * When a user starts the application then they are prompted to enter the **team manager**’s:
      * Name
      * Employee ID
      * Email address
      * Office number
    * When a user enters those requirements then the user is presented with a menu with the option to:
      * Add an engineer
      * Add an intern 
      * Finish building the team
    * When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Engineer's Name
      * ID
      * Email
      * GitHub username
    * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Intern’s name
      * ID
      * Email
      * School
    * When a user decides to finish building their team then they exit the application, and the HTML is generated.
  * Call the `render` function (provided for you) and pass in an array containing all employee objects; 
    * The `render` function will generate and return a block of HTML including templated divs for each employee!
  * Create an HTML file using the HTML returned from the `render` function. 
    * Write it to a file named `team.html` in the `output` folder. 
    * You can use the provided variable `outputPath` to target this location.

--------------------------------------------------------------------------------------------------------------------------

During the process of working on this project I have learned more about the javascript coding, including the use of arrays of objects, html, element creation, inquired, test driven development, jest and asynchronous programming. 

Furthermore, I have become a little more familiar with working with GitHub and ReadMe files.


## Installation

Download the files from GitHub repository https://github.com/SteveHannay/Team-Profile-Generator.

Node.js, inquirer and jest should be installed to run the application from the terminal.


## Usage

Open the terminal and navigate to the folder containing the index.js file.

To start the application type 'node index.js' into the terminal and press the Enter key.

A series of questions regarding team members will appear in the terminal. Answer each question then press the Enter key

Once all questions have been answered, an HTML file containing a card for each team member is generated in the Output folder


Here is a VIDEO of the Team Profile Generator in use from the terminal :

![Challenge 10 - Video of the Team Profile Generator in use](assets/Challenge%2010%20-%20Testing.jpg)


Here is a screenshot of an example html file generated in the output folder :

![Challenge 10 - screenshot of the team.html file created by the Team Profile Generator](assets/Challenge%2010%20-%20Webpage.png)


## Testing

The javascipt employs Test Driven Design (TDD). The test can be found in the "__tests__" folder

Tests are run by typing "npm run test" into the terminal (from the root folder).

All tests were passed prior to deployment.

- This is a screenshot of the tests being run from the  terminal using jest.
![Challenge 10 - screenshot of tests being run from the terminal](assets/Challenge%2010%20-%20Testing.jpg)

--------------------------------------------------------------------------------------------------------------------------

    PS C:\Users\baron\bootcamp\Challenges\Challenge 10\Team-Profile-Generator> npm run test                 
       
    > test
    > jest

    PASS  __tests__/Engineer.test.js
    PASS  __tests__/Intern.test.js
    PASS  __tests__/Employee.test.js
    PASS  __tests__/Manager.test.js

    Test Suites: 4 passed, 4 total
    Tests:       17 passed, 17 total
    Snapshots:   0 total
    Time:        0.648 s, estimated 1 s
    Ran all test suites.
    PS C:\Users\baron\bootcamp\Challenges\Challenge 10\Team-Profile-Generator>

--------------------------------------------------------------------------------------------------------------------------


## Credits

This is a single developer project, based upon what I have been taught by the Bootcamp team.

During the project I studied and used extracts of various code supplied by the Bootcamp when teaching the previous modules and I referenced various online resources including those listed below.

The following information was referenced while coding the project.

[w3 school - Javascript event listeners](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

[w3 school - Asynchronousy](https://www.w3schools.com/js/js_asynchronous.asp)

[NPM js](https://www.npmjs.com/package/inquirer-longer)


## License

No licence is currently associated with this project.


