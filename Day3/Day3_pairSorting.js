/*
John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
For example, there are 5 socks with colors . There is one pair of color 1 and one of color 2. There are one odd socks left, one of color 3. The number of pairs is 2.

Function Description
Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.
sockMerchant has the following parameter(s):
    n: the number of socks in the pile
    ar: the colors of each sock

Input Format
The first line contains an integer , the number of socks represented in .
The second line contains  space-separated integers describing the colors  of the socks in the pile.

Constraints
    1 <= n <= 100
    1 <= ar[i] <= 100 where 0 <= i <= n

Output Format
Return the total number of matching pairs of socks that John can sell.

Sample Input
    10 20 20 10 10 30 50 10 20

Sample Output
    3
*/

// I think a good starting place is to split the array into smaller arrays for each colour.
// Iterating through the array that would give us [1]; [1],[2]; [1],[2],[3]; [1,1],[2],[3]; [1,1],[2,2],[3];
// We can then just sum the math.floor(length/2) of the secondary arrays
// This works, but only when we know the number of different colours we are dealing with.
x = [1,2,3,1,2];
y = [10, 20, 20, 10, 10, 30, 50, 10, 20];
knownColours(x);
unknownColours(y);

// Known colours. Complexity O(n)
function knownColours(sockAr) {
    console.log("--- Known colours, solution 1 ---");
    var array1=[], array2=[], array3=[];

    for(var i=sockAr.length-1; i >= 0; i--)
    {
        var temp = sockAr.pop();
        if (temp == 1) array1.push(temp);
        else if (temp == 2) array2.push(temp);
        else if (temp == 3) array3.push(temp);
    }

    var pairs = Math.floor(array1.length/2) + Math.floor(array2.length/2) + Math.floor(array3.length/2);
    console.log("Number of pairs: " + pairs);
}

// Solution adapted from 1st solution https://www.codementor.io/@rezehnde/sock-merchant-challenge-solved-in-c-10iz1059au
function unknownColours(sockAr) {
    console.log("--- Known colours, solution 2 ---");
    var pairs = 0;
    var hashSet = {};
    for (let i = 0; i < sockAr.length; i++) {
        var sock = sockAr[i];
        if(hashSet.hasOwnProperty(sock)){
            hashSet[sock]++;
            if (hashSet[sock] % 2 === 0) {
                pairs++;
            }
        } else {
            hashSet[sock] = 1;
        }
    }
    console.log("Number of pairs: " + pairs);
}
