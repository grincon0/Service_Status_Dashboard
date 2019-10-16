const mergeArrays = (firstArray, secondArray) => {
    const merged = [];

    for(let item of firstArray){
        let tempObj = {};
        tempObj['name'] = item;
        merged.push(tempObj);
    }

    for(let i = 0; i < merged.length; i++){
        merged[i].status = secondArray[i];
    }

    return merged;

}

module.exports = mergeArrays;
