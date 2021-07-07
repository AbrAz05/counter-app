import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';


const divRoot = document.querySelector('#app');
//Maneras de mandar datos a alas props de un comoponente
//Este es el componente padre
// ReactDOM.render( <CounterApp value = {0}/>, divRoot);
ReactDOM.render(<PrimeraApp saludo='Hola Soy Goku' />, divRoot);
