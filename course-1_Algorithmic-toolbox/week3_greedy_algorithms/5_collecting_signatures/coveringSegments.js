var coveringSegments = function (segments) {
    var sorted_segments = segments.sort(function (a, b) { return (a[1] - b[1]); });
    var point = -1, points = 0;
    for (var i = 0; i < sorted_segments.length; i++) {
        var start = sorted_segments[i][0];
        var end = sorted_segments[i][1];
        if (!(start <= point && point <= end)) {
            point = end;
            points++;
        }
    }
    return points;
};
console.log(coveringSegments([[1, 3], [2, 5], [3, 6]]));
console.log(coveringSegments([[4, 7], [1, 3], [2, 5], [5, 6]]));
