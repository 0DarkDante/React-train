import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [userId] = useState(nanoid());
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [age, setAge] = useState(25);

	function clickHandler() {
		setName('xxxx');
	}

  return (
    <div>
      <h1>User Information</h1>
      <p>ID: {userId}</p>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Age: {age}</p>
			<button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default App;