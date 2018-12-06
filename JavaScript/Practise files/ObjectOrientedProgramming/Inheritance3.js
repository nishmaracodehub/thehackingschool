class A{
    constructor(fname,lname){
        this.fname = fname;
        this.lname = lname;
    }

    display(){
        return this.fname + " " + this.lname;
    }
}

class B  extends A{
    constructor(fname,lname,country){
        super(fname,lname);
        this.country = country;
    }

    livIn(){
        return this.fname + " " + this.lname + " is living in " + this.country;
    }
}

var obj = new B("Nishanth","Maraboina","India");
console.log(obj);
console.log(obj.display());
console.log(obj.livIn());
