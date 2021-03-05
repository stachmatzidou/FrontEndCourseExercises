const repeatString = function(string, times) {
    if (times<0) {
        return "ERROR";
    }
    let output = "";
    for ( let i = 0; i < times; i++) {
        output += string;
    }
    return output;
}


module.exports = repeatString
