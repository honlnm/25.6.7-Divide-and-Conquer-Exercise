function sortedFrequency(arr, val) {
    let firstIdx = findFirst(arr, val);
    if (firstIdx === -1) return firstIdx;
    let lastIdx = findLast(arr, val);
    return lastIdx - firstIdx + 1;
}

function findFirst(arr, val, lowIdx = 0, highIdx = arr.length - 1) {
    if (highIdx >= lowIdx) {
        let middleIdx = Math.floor((lowIdx + highIdx) / 2);
        if ((middleIdx === 0 || val > arr[middleIdx - 1]) && arr[middleIdx] === val) {
            return middleIdx
        } else if (val > arr[middleIdx]) {
            return findFirst(arr, val, middleIdx + 1, highIdx)
        } else {
            return findFirst(arr, val, lowIdx, middleIdx - 1)
        }
    }
    return -1
}

function findLast(arr, val, lowIdx = 0, highIdx = arr.length - 1) {
    if (highIdx >= lowIdx) {
        let middleIdx = Math.floor((lowIdx + highIdx) / 2);
        if ((middleIdx === arr.length - 1 || val < arr[middleIdx + 1]) && arr[middleIdx] === val) {
            return middleIdx;
        } else if (val < arr[middleIdx]) {
            return findLast(arr, val, lowIdx, middleIdx - 1)
        } else {
            return findLast(arr, val, middleIdx + 1, highIdx)
        }
    }
    return -1
}

module.exports = sortedFrequency