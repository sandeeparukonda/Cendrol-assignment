import {useState} from "react";

function ComponentB({ initialValue }) {
    const [value, setValue] = useState(initialValue);
  
    const handleClick = () => {
      setValue(value + 10);
    };
  
    return (
      <div>
        <p>{value}</p>
        <button onClick={handleClick}>Increment by 10</button>
      </div>
    );
  }
  
  export default ComponentB;