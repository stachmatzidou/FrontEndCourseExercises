const removeFromArray = function(array, value1, value2, value3, value4) {
    return array.filter(function(elements){
        return elements !== value1
            && elements !== value2
            && elements !== value3
            && elements !== value4
    });
}

module.exports = removeFromArray