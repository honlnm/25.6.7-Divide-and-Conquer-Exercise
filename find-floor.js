function findFloor(arr, val, lowIdx = 0, highIdx = arr.length - 1) {
    if (lowIdx > highIdx) return -1;
    if (val >= arr[highIdx]) return arr[highIdx];

    let middleIdx = Math.floor((lowIdx + highIdx) / 2);

    if (arr[middleIdx] === val) return arr[middleIdx];

    if (middleIdx > 0 && arr[middleIdx - 1] <= val && val < arr[middleIdx]) {
        return arr[middleIdx - 1];
    }

    if (val < arr[middleIdx]) {
        return findFloor(arr, val, lowIdx, middleIdx - 1)
    }

    return findFloor(arr, val, middleIdx + 1, highIdx)
}

module.exports = findFloor