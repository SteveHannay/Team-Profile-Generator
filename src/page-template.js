/* 
    Javascript for Challenge 10
    Developer - Bootcamp with addions made by Steve Hannay (inline Style settings)
    First Created - 23rd February 2024 (from Bootcamp starter code)

    This code handles HTML Generation for the Team Profile Generator
*/


// creates the team
const generateTeam = team => {

    // creates the manager html
    const generateManager = manager => {
        return `
        <div class="card employee-card" style="margin: 20px 20px 20px 20px">
        <div class="card-header" style="background-color:CornflowerBlue;">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body" style="background-color:ghostwhite">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // creates the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card employee-card" style="margin: 20px 20px 20px 20px">
    <div class="card-header" style="background-color:LightGreen;">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body" style="background-color:ghostwhite">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // creates the html for interns
    const generateIntern = intern => {
        return `
        <div class="card employee-card" style="margin: 20px 20px 20px 20px;">
    <div class="card-header" style="background-color:powderblue;">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body" style="background-color:ghostwhite">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    // build cards
    const html = [];

    // (a) build Manager card from Manager object in Team Array
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );

    // (b) build Engineer card(s) from Engineer object(s) in Team Array
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );

    // (c) build Intern card(s) from Intern object(s) in Team Array
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// exports function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body style="background-color:PapayaWhip;">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading" style="padding: 1rem 1rem; background-color:PapayaWhip;">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container" style="background-color:lightgrey">
        <div class="row">
            <div class="team-area col-12 d-flex" style="display: flex; flex-wrap: wrap; flex-direction: row;">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};