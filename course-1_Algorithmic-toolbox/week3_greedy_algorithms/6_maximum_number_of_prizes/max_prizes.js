var max_prizes = function (candies) {
    var arr = [], remain = candies;
    for (var i = 1; i <= candies; i++) {
        if (2 * i + 1 > remain) {
            arr.push(remain);
            break;
        }
        arr.push(i);
        remain -= i;
    }
    return arr;
};
console.log(max_prizes(8));
