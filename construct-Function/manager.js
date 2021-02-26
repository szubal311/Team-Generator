const Employee = ("./employee")
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email)        
        this.officeNumber = officeNumber;        
    };

     getNumber() {
         return this.officeNumber
     };   

    getRole() {
        return "Manager"
    }
}