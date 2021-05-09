var gcd = function (a, b) {
    return b == 0 ? a : gcd(b, a % b);
};
var lcm = function (a, b) {
    return a * b / gcd(a, b);
};
console.log(lcm(761457, 614573));
