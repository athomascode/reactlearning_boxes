import React from 'react'
import logo from './logo.svg';
import './App.css';
import box from './components/box.js';
import BoxComp from './components/BoxComp.js'

export default function App(props) {
    const [boxData, setBoxData] =  React.useState(box);
    // const [boxState, setBoxState] = React.useState(props.on)

    function changeState(id){
      setBoxData(prevState => 
        {
          return prevState.map((square) => {
            return square.id === id ? {...square,on: !square.on} : square
          })       
        })
    }

    const boxArray = boxData.map(element => (
    <BoxComp 
      key={element.id} 
      on={element.on}
      onClick={() => changeState(element.id)}/>
    ))

  return (
    <div className="App">
      <header className="App-header">
        {boxArray}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


