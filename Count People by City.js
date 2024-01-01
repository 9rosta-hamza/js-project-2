function countPeopleByCity(people) {
    const cityCounts = people.reduce((accumulator, person) => {
        const city = person.city;
        accumulator[city] = (accumulator[city] || 0) + 1;
        return accumulator;
    }, {});
    return cityCounts;
}

// Example usage:
const peopleArray = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 40, city: "Chicago" },
    { name: "Charlie", age: 50, city: "New York" }
];
console.log(countPeopleByCity(peopleArray)); 