const fibonacci = function(number) {
    let array = [1, 1];
    
    if (number >= 0) {
        for (let i = 0; i <= number - 1; i++) {
            array.push(array[i] + array[i + 1]);
        }
        return array[number -1];
    } else {
        return "OOPS";
    }
}

module.exports = fibonacci
