const caesar = function(string, shiftFactor) {
    let result = "";

	for (let i = 0; i < string.length; i++) {
		if (shiftFactor < 0) {
			shiftFactor = 26 + shiftFactor % 26;
		}

		if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
			const charCode = string.charCodeAt(i);
			result += String.fromCharCode(((charCode - 65 + shiftFactor) % 26) + 65);
		} else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
			const charCode = string.charCodeAt(i);
			result += String.fromCharCode(((charCode - 97 + shiftFactor) % 26) + 97);
		} else {
			result += string.charAt(i);
		}
	}
	return result;
}

module.exports = caesar
