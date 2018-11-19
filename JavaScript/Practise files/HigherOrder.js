// Higher-Order Functions
// A large program is a costly program, and not just because of the time it takes
// to build. Size almost always involves complexity, and complexity confuses
// programmers. Confused programmers, in turn, introduce mistakes (bugs) into
// programs. A large program then provides a lot of space for these bugs to hide,
// making them hard to find.
// Let’s briefly go back to the final two example programs in the introduction.
// The first is self-contained and six lines long.
// let total = 0, count = 1;
// while (count <= 10) {
// total += count;
// count += 1;
// }
// console.log(total);
// The second relies on two external functions and is one line long.
// console.log(sum(range(1, 10)));
// Which one is more likely to contain a bug?
// If we count the size of the definitions of sum and range , the second program
// is also big—even bigger than the first. But still, I’d argue that it is more likely
// to be correct.
// It is more likely to be correct because the solution is expressed in a vocabulary
// that corresponds to the problem being solved. Summing a range of numbers
// isn’t about loops and counters. It is about ranges and sums.
// The definitions of this vocabulary (the functions sum and range ) will still
// involve loops, counters, and other incidental details. But because they are
// expressing simpler concepts than the program as a whole, they are easier to
// get right.

// function makeAdjectifier(adjective){
//     return function (string){
//         return adjective + " "+ string;
//     }
// }
// var makeCoolifier = makeAdjectifier("cool");
// console.log(makeCoolifier("Conference"));


//Mutation of variables

// var rooms = ["R1","R2","R3"];
// var newRooms = rooms.map(function (rm){
//     if(rm == "R3") return "R4";
//     else return rm;
// });
// console.log(rooms);
// console.log(newRooms);

// var rooms = ["R1","R2","R3"];
// var newRooms = ["R1","R2","R4"];

// console.log(rooms);
// console.log(newRooms);

