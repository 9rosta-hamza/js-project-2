function findLongestWord(words) {
    const longestWord = words.reduce((longest, currentWord) =>
        currentWord.length > longest.length ? currentWord : longest, '');
    return longestWord;
}

// Example usage:
const wordsArray = ['apple', 'banana', 'kiwi', 'strawberry', 'orange'];
console.log(findLongestWord(wordsArray));