function isPositive(a) {
    try {
        if (a > 0)
            throw "YES";
        else if (a == 0)
            throw "Zero Error";
        else if (a < 0)
            throw "Negative Error";
    }
    catch (err) {
        return err;
    }
}

console.log(isPositive(1));
console.log(isPositive(0));
console.log(isPositive(-1));