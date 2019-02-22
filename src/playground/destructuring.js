const person = {
    name: 'Devin',
    age: 27,
    location: {
        city: 'New York',
        temp: 42
    }
};
// It takes the values from Person object
const { name: firstName = "Anonymous", age } = person;

console.log(`${person.name} is ${person.age}`);

const {city, temp} = person.location;
if(city && temp) {
    console.log(`It's ${temp} in ${city}!`);
}

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     pub: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName= "Self published"} = book.pub;
// console.log(publisherName);

// Array destructuring
const address = ['1299 S Juptier street', 'Philedelphia', 'Pennsylvania'];
const [street, , state = "New York"];
console.log(`You are in ${street} ${state}.`);

const items = ['Coffee', '$2.00', '$2.50', '$2.75'];
const [a, ,c] = items;
console.log(`A ${a} costs ${b}`);