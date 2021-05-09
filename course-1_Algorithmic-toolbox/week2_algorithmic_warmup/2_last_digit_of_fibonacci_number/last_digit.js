// Time: O(n)
// Space: O(1)
var last_digit = function (n) {
    if (n < 2)
        return n;
    var temp = 0;
    var first = 0;
    var second = 1;
    for (var i = 2; i <= n; i++) {
        temp = (first + second) % 10;
        first = second;
        second = temp;
    }
    return second;
};
console.log(last_digit(327305));
