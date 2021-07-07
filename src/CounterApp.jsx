//Los Hooks son funciones
import React, {useState} from 'react'
import PropsTypes from 'prop-types';

//rafcp crea platilla de react con props

const CounterApp = ({value = 0}) => {
  
  // Convencion del Hook
  // Destructurar siempre como const [algo, setAlgo] 
  const [counter, setCounter] = useState(value); //useState retorna siempre un arreglo
  //console.log(nombre, setNombre);

  // console.log(state[1]()); 

  const handleAdd = () => {
    setCounter(counter +1);
    // setCounter( (c) => c + 1);
  }

  const handleSubstract = () => setCounter(counter - 1);

  const handleReset = () => setCounter(value);

  return(
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      {/* Opcion 1 */}
      {/* <button onClick={(e) => {console.log(e)}}>+1</button> */}
      {/* Opcion 2 */}
      {/* <button onClick={ (e) => {handleAdd(e)}}></button> */}
      {/* Opcion 3 la mejor */}
      <button onClick = { handleAdd }>+1</button>
      <button onClick = { handleReset }>Reset</button>
      <button onClick = { handleSubstract }>-1</button>
    </>
  );
}

CounterApp.PropsTypes = {
  value: PropsTypes.number,
}

export default CounterApp;