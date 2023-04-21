import { useState } from 'react';

function A() {
  const [cendol, setCendol] = useState(2);

  function updateCendol(value) {
    setCendol(value);
  }

  return (
    <div>
      <p>Cendol in component A: {cendol}</p>
      <B cendol={cendol} updateCendol={updateCendol} />
    </div>
  );
}

function B({ cendol, updateCendol }) {
  function handleClick() {
    const newCendolValue = cendol + 10;
    updateCendol(newCendolValue);
  }

  return (
    <div>
      <p>Cendol in component B: {cendol}</p>
      <button onClick={handleClick}>Increase Cendol</button>
    </div>
  );
}

export default A