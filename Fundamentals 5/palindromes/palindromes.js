const palindromes = function (string) {
    const justLetters = string.split("").filter(function (letter) {
        if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90 || letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
            return true;
        }
    });
    const normalString = justLetters.join("").toLowerCase();
    const reversedString = justLetters.reverse().join("").toLowerCase();

    if (normalString === reversedString) {
        return true;
    }
    return false;
}

module.exports = palindromes