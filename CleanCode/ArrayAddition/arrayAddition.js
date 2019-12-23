function arrayAddition(firstArray, secondArray) {
    if (!isParametersArray(firstArray, secondArray)) {
        throw 'Both should be arrays'
    } else if (!isEmptyArrays(firstArray, secondArray)) {
        throw 'Arrays should not be empty, both arrays should have values'
    } else if (!isArrayNumerical(firstArray, secondArray)) {
        throw 'Both parameters should be numeric array'
    } else {
        return secondArray.map((secondArrayElement, index) => secondArrayElement + (firstArray[index] ? firstArray[index] : 0));
    }
}

function isEmptyArrays(firstArray, secondArray) {
    return firstArray.length && secondArray.length;
};
function isParametersArray(firstArray, secondArray) {
    return Array.isArray(firstArray) && Array.isArray(secondArray);
};
function isArrayNumerical(firstArray, secondArray) {
    return !firstArray.some(isNaN) && !secondArray.some(isNaN);
};

console.log(arrayAddition([-1, -2, -3, -4], [1, 2, 3, 4]));
console.log(arrayAddition([0, 0, 0, 0], [1, 2, 3, 4]));
console.log(arrayAddition([0, 1, 0, 4], [100, -200, 200, 400, 0, 99999]));
console.log(arrayAddition([], [100, -200, 200, 400, 0, 99999]));
console.log(arrayAddition('a', [100, -200, 200, 400, 0, 99999]));
console.log(arrayAddition('a', 1));
console.log(arrayAddition(['1', '2', '3', '4'], [2, 'b', 'c']));
