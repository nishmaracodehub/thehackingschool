
function abc(fname,lname){
    this.fname = fname;
    this.lname = lname;
}

abc.prototype.display = function (){
    console.log(this.fname + " " + this.lname);
}

function ths(country){
    this.country = country;
    this.livIn = function (){
    console.log(this.fname + " " + this.lname + " is Living in " + this.country);
    }

}

var obj = new abc("Nishanth","Maraboina");
ths.prototype = obj;
var obj1 = new ths("India");
obj1.display();
obj1.livIn();










