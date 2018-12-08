function Abc(fname,lname){
    this.fname = fname;
    this.lname = lname;
};

Abc.prototype.display = function (){
    console.log(this.fname + " " + this.lname);
}

function Ths(fname,lname,country){
    Abc.call(this,fname,lname);
    this.country = country;
}

Ths.prototype = Object.create(Abc.prototype);
Ths.prototype.livIn = function (){
    console.log(this.fname + this.lname + " is living in " + this.country);
}

var obj = new Ths("Nishanth","Maraboina","country");
obj.display();
obj.livIn();