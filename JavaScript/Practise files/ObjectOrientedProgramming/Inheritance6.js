function Bootcamp(fname, lname, country) {

    this.fname = fname;
    this.lname = lname;
    this.country = country;
}

function Instructor(fname, lname, country, experience) {
    Bootcamp.call(this, fname, lname, country);
    this.experience = experience;
}


Instructor.prototype = Object.create(Bootcamp.prototype);
Instructor.prototype.info = function () {

    return "hello info " + this.fname + this.lname;
}
Bootcamp.prototype.display = function () {

    return "hello display " + this.fname + this.lname;

}
console.log(Instructor.prototype);
console.log(Bootcamp.prototype);
var obj = new Instructor("prash", "ths", "india", "5Y");
console.log(obj.info())
console.log(obj.display())