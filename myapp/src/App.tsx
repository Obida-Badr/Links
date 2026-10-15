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

const [selectedName, setSelectedName] = useState<string>("Rob");

function handleNameChange(event: React.ChangeEvent<HTMLSelectElement>) {
setSelectedName(event.target.value);
}

const selectedPerson = people.find((p) => p.name === selectedName);

return (
<div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
<h2>Course #9 - Working with Data</h2>

<div style={{ marginBottom: '15px' }}>
<label>People: </label>
<select id="name" value={selectedName} onChange={handleNameChange}>
{people.map((p, index) => (
<option key={index} value={p.name}>
{p.name}
</option>
))}
</select>
</div>

<div style={{ marginBottom: '20px' }}>
<div>
<label>Selected Age: </label>
<span>{selectedPerson?.age}</span>
</div>
<div>
<label>Selected Is Teacher: </label>
<span>{selectedPerson?.isTeacher ? "Yes" : "No"}</span>
</div>
</div>

<hr />

<table border={1} cellPadding={8} style={{ borderCollapse: 'collapse' }}>
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
</div>
);
}

export default App;