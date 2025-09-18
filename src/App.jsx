
import './App.css'
import Batsman from './batsman';
import Counter from './counter';

function App() {
  
  function handleClick(){
    alert('I am clicked')
  }
  function handleClick3(){
    alert('clicked 3')
  }

const handleAdd5 = (num)=> {
  const newNum = num + 5;
  alert(newNum);
}

  return (
    <>
  
      <h1>Vite + React</h1>
      <Counter></Counter>
      <Batsman></Batsman>


     
      <button onClick = {handleClick}>Click Me</button>
      <button onClick = {function handleClick2(){
        alert('clicked 2')
      }}>Click Me</button>
      <button onClick={handleClick3}>Click Me</button>
      <button onClick={()=> {
        alert('clicked 4')
      }}>Click Me 4</button>
      {/* <button onClick={handleAdd5(10)}>Click Me 5</button> */}

    </>
  )
}

export default App


