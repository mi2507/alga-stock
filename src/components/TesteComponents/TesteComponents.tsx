import React, {useState, useEffect} from 'react'
import './TesteComponents.css'

function TestComponents(props: { name: string }) {
  const [age, setAge] = useState(34)

  useEffect(() => {
    console.log ('component was created')
  }, [])

  useEffect(() => {
    console.log ('Age has been update to:' + age)
  }, [age])
  
  

  return <div className="TestComponents" > Test Components,
     olá {props.name}, {age}
    <button onClick={() => {
      setAge (age +1)
    }}> +
    </button>
    <button onClick={() => {
      setAge (age -1)
    }}> -
    </button>
  </div>
}
 
export default TestComponents
