const Employee = ("./employee")

class Engineer extends Employee {
    constructor (name, id, email, github ) {
        super (name, id, email)        
        this.github = github;        
    };

    getGithub() {
         return this.github
     };   

    getGithub() {
        return "Engineer"
    }
}