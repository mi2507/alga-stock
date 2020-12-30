import React from 'react'
import './Button.css'

declare interface ButtonProps{
  content: string
  onClick?: () => void

}

const Button: React.FC<ButtonProps> = (props) => {
  return <button className="AppButton" onClick={props.onClick}>
    {props.content}
    

  </button>
}

export default Button