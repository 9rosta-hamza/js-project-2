function countStringFrequency(strings) {
    const frequencyObject = strings.reduce((accumulator, currentString) => {
        accumulator[currentString] = (accumulator[currentString] || 0) + 1;
        return accumulator;
    }, {});
    return frequencyObject;
}

// Example usage:
const stringsArray = ["hello", "world", "hello"];
console.log(countStringFrequency(stringsArray));