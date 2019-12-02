var x = [10,15,3,2];
var k = 17;

// Search an array, x, for two numbers that sum up to a number k. Return TRUE if found.
sumToK = (x, k) => {
    for (var i = 0; i <= x.length; i++) {
        var diff = k - x[i];
        var index = x.includes(diff);
        return index;
    }
}

console.log("Sum to k: " + sumToK(x, k));