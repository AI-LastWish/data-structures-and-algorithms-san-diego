// Time: O(Log min(n1, n2)) 
var gcd = function (a, b) {
    return b == 0 ? a : gcd(b, a % b);
};
console.log(gcd(1344, 217));
