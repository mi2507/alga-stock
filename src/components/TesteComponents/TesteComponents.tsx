import React, {useState} from 'react'
import './TesteComponents.css'

function TestComponents(props: { name: string }) {
  const [age, setAge] = useState(34)
  
  return <div className="TestComponents" > Test Components,
     olá {props.name}, {age}
    <button onClick={() => {
      setAge (age +1)
    }}> +
    </button>
  </div>
}
 
export default TestComponents
