/*
 * This problem was asked by Uber.
 * 
 * Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
 * For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. 
 * If our input was [3, 2, 1], the expected output would be [2, 3, 6].
 * 
 * Follow-up: what if you can't use division?
 */

var x = [3,2,1];
// Array.reduce will iterate through an array and perform a function on each element. 
// The output it the result of the function on all elements.
const reducer = (accumulator, currentValue) => accumulator * currentValue;
var prod = x.reduce(reducer);
console.log("Reduce: " + prod);
var y = new Array(3);
for (var i = 0; i < x.length; i++){
    y[i] = prod / x[i];
}
console.log("Prod array: " + y);