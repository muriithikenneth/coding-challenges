function groupBy(array, propertyName) {
    const grouped = {};

    array.forEach(obj => {
        const propertyValue = obj[propertyName];
        if (!grouped[propertyValue]) {
            grouped[propertyValue] = [];
        }
        grouped[propertyValue].push(obj);
    });

    return grouped;
}

// Example usage:
const data = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'Chicago' },
    { name: 'Charlie', age: 35, city: 'New York' },
    { name: 'Dave', age: 40, city: 'Chicago' }
];

console.log(groupBy(data, 'city'));
console.log(groupBy(data, 'age'));
