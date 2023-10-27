function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let leftVal = arr[leftIdx];
    let rightVal = arr[rightIdx];
    if ((arr[leftIdx] === 0) && (arr[rightIdx] === 0)) {
        result = arr.length
        return result
    }
    while (leftVal > rightVal) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
        let middleVal = arr[middleIdx];
        if (leftVal === 1 && middleVal === 1) {
            leftIdx = middleIdx + 1
        } else if (leftVal === 0 && middleVal === 0) {
            rightIdx = middleIdx - 1
        } else {
            result = +(arr.length - 1) - (+leftIdx)
            return result
        }
    }
    return 0;
};

module.exports = countZeroes