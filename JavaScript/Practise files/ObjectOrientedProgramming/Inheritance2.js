// function Abc(fname,lname){
//     this.fname = fname;
//     this.lname = lname;
//     this.display = function (){
//         console.log(this.fname + " " + this.lname);
//     }
// };

// function Ths(fname,lname,country){
//     Abc.call(this,fname,lname);
//     this.country = country;
//     this.livIn = function (){
//         console.log(this.fname + this.lname + " is living in " + this.country);
//     }
// }

// var obj1 = new Ths("Nishanth","Maraboina","India");
// console.log(obj1);
// obj1.display();
// obj1.livIn();


function Abc(fname,lname){
    this.fname = fname;
    this.lname = lname;
    this.display = function (){
        console.log(this.fname + " " + this.lname);
    }
};

function Ths(fname,lname,country){
    Abc.call(this,fname,lname);
    this.country = country;
}

Ths.prototype.livIn = function (){
    console.log(this.fname + this.lname + " is living in " + this.country);
}

Abc.prototype = Object.create(Ths.prototype);

var obj = new Ths("Nishanth","Maraboina","country");

obj.display();
obj.livIn();


