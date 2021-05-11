var max_revenue = function (profits, clicks) {
    var sorted_profits = profits.sort(function (a, b) { return (b - a); });
    var sorted_clicks = clicks.sort(function (a, b) { return (b - a); });
    var result = 0;
    for (var i = 0; i < sorted_profits.length; i++) {
        result += sorted_profits[i] * sorted_clicks[i];
    }
    return result;
};
console.log(max_revenue([1, 3, -5], [-2, 4, 1]));
