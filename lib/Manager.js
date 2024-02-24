/*`Manager` child class (inherits from "Employee" class) with the following additional properties and methods:   
* `officeNumber`
* `getRole() - returns `'Manager'`  
*/
const Employee = require("./Employee");

class Manager extends Employee{

    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {return this.officeNumber}
    getRole()  {return "Manager"}

}

module.exports = Manager