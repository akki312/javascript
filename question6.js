//Write a JavaScript function to get the number of occurrences of each letter in a specified string.
function countOccurrences(str) {
    const occurrences = {};
    str.split('').forEach(char => occurrences[char] = (occurrences[char] || 0) + 1);
    return occurrences;
}

// Example usage
const string = "akshith!";
const result = countOccurrences(string);

console.log(result);
