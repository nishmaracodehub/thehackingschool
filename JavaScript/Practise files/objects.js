function getCount(objects) {
    var count = 0;
    for (let i = 0; i < objects.length; i++) {
        if (objects[i].x == objects[i].y) {
            count += 1;
        }
    }
    return count;
}

console.log(getCount([
    { x: 1, y: 1},{x:2,y:3},{x:3,y:3},{x:4,y:2}
]));