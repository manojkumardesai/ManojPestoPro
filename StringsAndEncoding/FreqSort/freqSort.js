function frequencySort(arrayToBeSortedByFrequency) {
    var freqCountObj = {};
    arrayToBeSortedByFrequency.map((elem) => {
        if (freqCountObj[elem]) {
            freqCountObj[elem] += 1;
        } else {
            freqCountObj[elem] = 1;
        }
    });
    var freqCountObjToArray = [];
    freqCountObjToArray = Object.entries(freqCountObj).sort((a,b) => b[1]-a[1]);
    return Object.keys(Object.fromEntries(freqCountObjToArray));
}
