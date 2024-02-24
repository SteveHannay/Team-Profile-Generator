/*`Engineer` child class (inherits from "Employee" class) with the following additional properties and methods:   
* `github`
* `getGithub() returns GitHub username`
* `getRole() returns `'Engineer'`  
*/
const Employee = require("./Employee");

class Engineer extends Employee{

    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }

    getGithub() {return this.github}
    getRole()  {return "Engineer"}

}

module.exports = Engineer