// @ts-ignore React is supplied by the application's runtime; type declarations are unavailable.
import React from 'react';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			[elementName: string]: any;
		}
	}
}

function App() {
function submitButtonOnClick() {
let name = document.querySelector<HTMLInputElement>("#name");
let age = document.querySelector<HTMLInputElement>("#age");

if (name && age) {
alert("Name: " + name.value + " - Age: " + age.value);
}
}

return React.createElement(
	'div',
	null,
	React.createElement(
		'form',
		{ onSubmit: (e: { preventDefault(): void }) => e.preventDefault() },
		React.createElement('div', null,
			React.createElement('label', null, 'Name: '),
			React.createElement('input', { id: 'name' })
		),
		React.createElement('div', null,
			React.createElement('label', null, 'Age: '),
			React.createElement('input', { type: 'number', id: 'age', min: '0', max: '120', required: true })
		),
		React.createElement('div', null,
			React.createElement('button', { type: 'submit', onClick: submitButtonOnClick }, 'Submit')
		)
	)
);
}

export default App;

