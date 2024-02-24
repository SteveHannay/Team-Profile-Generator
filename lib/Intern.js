/*`Intern` child class (inherits from "Employee" class) with the following additional properties and methods:   
* `school`
* `getSchool() returns school
* `getRole() returns `'Intern'`  
*/

const Employee = require("./Employee");

class Intern extends Employee{

    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }

    getSchool() {return this.school}
    getRole()  {return "Intern"}

}

module.exports = Intern