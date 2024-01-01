function averageOfEvenNumbers(numbers) {
    const evenNumbers = numbers.filter(number => number % 2 === 0);
    const sumOfEvenNumbers = evenNumbers.reduce((sum, number) => sum + number, 0);
    const average = evenNumbers.length > 0 ? sumOfEvenNumbers / evenNumbers.length : 0;
    return average;
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(averageOfEvenNumbers(numbersArray));