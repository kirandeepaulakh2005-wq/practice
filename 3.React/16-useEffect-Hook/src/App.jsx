import { useEffect, useState } from "react"
import './App.css'

function App() {

  const [num,setNum]=useState(0)
  const [num2,setNum2] = useState(10)

  useEffect(function(){
    console.log('use effect is running....');
  },[num])

  return (
    <div>
      <h1>Value of num is {num}</h1>
      <h1>Value of num2 is {num2}</h1>
      <button onMouseEnter={()=>{
        setNum(num+1)
         }}
         onMouseLeave={() =>{
          setNum2(num2+10)
         }}>Hover</button>
        </div>
    
  )
}

export default App
