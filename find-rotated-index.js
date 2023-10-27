function findRotatedIndex(arr, val, lowIdx = 0, highIdx = arr.length - 1) {
    let pivot = findPivot(arr);
    if (pivot > 0 && val >= arr[0] && val <= arr[pivot - 1]) {
        return search(arr, val, lowIdx, pivot - 1);
    } else {
        return search(arr, val, pivot, highIdx)
    }
}

function search(arr, val, low = 0, high = arr.length - 1) {
    if (arr.length === 0) return -1;
    if (val < arr[low] || val > arr[high]) return -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === val) {
            return mid;
        } else if (val < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}


function findPivot(arr, start = 0, end = arr.length - 1) {
    if (arr.length === 1 || arr[0] < arr[end]) return 0;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] > arr[middle + 1]) return middle + 1;
        else if (arr[start] <= arr[middle]) start = middle + 1;
        else end = middle - 1;
    }
}

module.exports = findRotatedIndex