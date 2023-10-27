function findRotationCount(arr, lowIdx = 0, highIdx = arr.length - 1) {
    if (highIdx < lowIdx) return 0;
    if (highIdx === lowIdx) return lowIdx;
    let middleIdx = Math.floor((lowIdx + highIdx) / 2);

    if (middleIdx < highIdx && arr[middleIdx + 1] < arr[middleIdx])
        return middleIdx + 1;

    if (middleIdx > lowIdx && arr[middleIdx] < arr[middleIdx - 1])
        return middleIdx;

    if (arr[highIdx] > arr[middleIdx])
        return findRotationCount(arr, lowIdx, middleIdx - 1);

    return findRotationCount(arr, middleIdx + 1, highIdx);
}

module.exports = findRotationCount