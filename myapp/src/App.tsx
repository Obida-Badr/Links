function App() {
return "Hello, Welcome to My First React App!";
}

export default App;
// 1. Boolean variable
let isStudent: boolean = true;

// 2. String variable
const studentName: string = "Obida";

// 3. Number variable
let studentAge: number = 17;

// 4. Colour array
let colours: string[] = ["red", "blue", "green"];

// 5. Person class
class Person {
name: string;
age: number;

constructor(name: string, age: number) {
this.name = name;
this.age = age;
}
}

// 6. Object of type Person
let person1 = new Person("Obida", 17);

// 7. Table (Array of type Person)
let people: Person[] = [
new Person("Rob", 39),
new Person("Jane", 28),
new Person("Sam", 42)
];