var mv_loot = function (knapsack, capacity) {
    var sorted_ks = sortKs(knapsack);
    var remain = capacity, result = 0;
    for (var i = 0; i < sorted_ks.length; i++) {
        var average = sorted_ks[i][0], val = sorted_ks[i][1], weight = sorted_ks[i][2];
        if (remain <= weight) {
            // remain = 0
            result += remain * average;
            return result;
        }
        else {
            remain -= weight;
            result += val;
        }
    }
};
var sortKs = function (knapsack) {
    var result = [];
    for (var i = 0; i < knapsack.length; i++) {
        var val = knapsack[i][0];
        var weight = knapsack[i][1];
        var average = val / weight;
        result.push([average, val, weight]);
    }
    return result.sort().reverse();
};
// console.log(mv_loot([[60, 20], [100, 50], [120, 30]], 50))
console.log(mv_loot([[500, 30]], 10));
