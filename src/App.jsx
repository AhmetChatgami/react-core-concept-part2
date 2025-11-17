import Counter from './Counter'
import './App.css'
import Batsman from './Batsman';
function App() {
  
  function handleClick() {
    alert('Button Clicked!')
  }
  return (
    <>
      
      <h1>Vite + React</h1>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={(handleClick)}>Click Here</button>
    </>
  )
}

export default App
