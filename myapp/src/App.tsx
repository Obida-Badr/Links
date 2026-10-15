import React, { useState } from 'react';
import Papa from 'papaparse';
import csvText from './data.csv?raw';

class Person {
name: string = "";
age: number = 0;
isTeacher: boolean = false;
}

function App() {
let csvData: any[] = Papa.parse(csvText, {
header: true,
skipEmptyLines: true,
}).data;

let people: Person[] = [];

for (let loop = 0; loop < csvData.length; loop++) {
let row = csvData[loop];
let person = new Person();
person.name = row.name;
person.age = Number(row.age);
person.isTeacher = Boolean(Number(row.isTeacher));
people.push(person);
}

// Search & Filter functions
let findRob = people.find((p) => p.name === "Rob");
let teachers = people.filter((p) => Boolean(Number(p.isTeacher)));
let oNames = people.filter((p) => p.name.toLowerCase().includes("o"));

// React State for Dropdown
const [selectedName, setSelectedName] = useState<string>("Rob");

function handleNameChange(event: React.ChangeEvent<HTMLSelectElement>) {
setSelectedName(event.target.value);
}

const selectedPerson = people.find((p) => p.name === selectedName);

return (
<div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
{/* Main Data Table */}
<table border={1} cellPadding={8} style={{ borderCollapse: 'collapse', marginBottom: '20px' }}>
<thead>
<tr>
<th>Name</th>
<th>Age</th>
<th>Is Teacher</th>
</tr>
</thead>
<tbody>
{people.map((person, loop) => (
<tr key={loop}>
<td>{person.name}</td>
<td>{person.age}</td>
<td>{person.isTeacher ? "Yes" : "No"}</td>
</tr>
))}
</tbody>
</table>

{/* Search and Filter Results */}
<div style={{ marginBottom: '15px' }}>
<div>
<label>Search by name results: </label>
<span>{findRob?.name}</span>
</div>
<div>
<label>Number of teachers: </label>
<span>{teachers.length}</span>
</div>
<div>
<label>Number of names with the letter O: </label>
<span>{oNames.length}</span>
</div>
</div>

{/* Dropdown Menu */}
<div style={{ marginBottom: '10px' }}>
<label>People: </label>
<select id="name" value={selectedName} onChange={handleNameChange}>
{people.map((p, index) => (
<option key={index} value={p.name}>
{p.name}
</option>
))}
</select>
</div>

{/* Selected Person Details */}
<div>
<div>
<label>Selected Age: </label>
<span>{selectedPerson?.age}</span>
</div>
<div>
<label>Selected Is Teacher: </label>
<span>{selectedPerson?.isTeacher ? "Yes" : "No"}</span>
</div>
</div>
</div>
);
}
export default App;