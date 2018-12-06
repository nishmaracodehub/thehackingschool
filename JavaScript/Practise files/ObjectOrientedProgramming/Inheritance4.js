class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    personDetails(){
        console.log(this.name + " whose age is " + this.age)
    }
}

class Organization{
    constructor(orgname){
        this.orgname = orgname;
    }
}

class Employee extends Organization{
    constructor(orgname,empid){
        super(orgname);
        this.empid = empid;
    }

    empDetails(){
        console.log(this.orgname + " 's employee " + this.name + " 's ID is " + this.empid + " and his Age is " + this.age);
    }
}

var emp = new Employee("Google","1806");
Object.assign(emp, new Person("Nishanth","30"));
emp.empDetails();

