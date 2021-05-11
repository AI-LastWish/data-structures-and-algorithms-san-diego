var mc = function (arr, money) {
    var sorted_arr = arr.sort(function (a, b) { return b - a; });
    var coins = 0, remain = money, coin = 0;
    for (var i = 0; i < sorted_arr.length; i++) {
        if (remain <= 0)
            break;
        coin = Math.floor(remain / sorted_arr[i]);
        remain -= sorted_arr[i] * coin;
        coins += coin;
    }
    return coins;
};
console.log(mc([5, 1, 10], 28));
