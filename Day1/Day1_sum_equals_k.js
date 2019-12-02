/*
 * Good morning! Here's your coding interview problem for today.
 * This problem was recently asked by Google.
 * 
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 * 
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 */

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