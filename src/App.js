import {useState} from 'react'



import './App.css'

function Counter(){
  const [count,setCount] = useState(0)
  const [isRed, setIsRed] = useState(false);

  function handleClick(){
    setCount(count+1);
  }

 function handleClickK(){
  setIsRed(!isRed);
 }

  return(
    <div class="box d-flex flex-column justify-content-center">
  <div class="circle" style={{ backgroundColor: count > 0 ? 'blue' : 'yellow' }}>
    <h1 className='heading'>{count}</h1>
    <p className='paragraph' onClick={handleClick}>Click to increase counter</p>
  </div>
  <button className='button' onClick={handleClickK} style={{backgroundColor:isRed}}>Change Color</button>
</div>

  )
}

export default Counter