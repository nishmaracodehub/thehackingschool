function Person(first, last, age, country,language){
    this.firsName = first;
    this.lastName = last;
    this.age = age;
    this.country = country;
    this.language = language;
}

var person1 = new Person("Nishanth", "Maraboina", 30,"India", "Telugu");

console.log(person1);