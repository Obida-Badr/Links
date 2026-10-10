// @ts-ignore React and its types must be supplied by the host app.
import React from 'react';function App() {
function add(number1: number, number2: number): number {
return number1 + number2;
}

let sum: number = add(2, 5);

try {
let testValue: number = Number("abc");
if (isNaN(testValue)) {
throw new Error("Error - NaN (Not a Number)");
}
} catch (error) {
console.log("Caught an error:", error);
}

return React.createElement(
React.Fragment,
null,
React.createElement('h1', null, 'Course 7')
);
}
export default App;