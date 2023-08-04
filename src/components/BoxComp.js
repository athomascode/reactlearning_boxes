import React from "react"

export default function BoxComp (props){
  // const [boxState, setBoxState] = React.useState(props.on)

  // function changeState(){
  //   setBoxState(prevState => !prevState)
  // }

  const styles = {
    backgroundColor : props.on?"black":"wheat"
  }
  return(
    <div 
    style={styles} 
    className='box-class' 
    onClick={props.onClick}></div>
)
}