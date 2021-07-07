//imr + tab
// import React, { Fragment } from 'react'
import React from 'react'
import PropTypes from 'prop-types';

//React utiliza Functional Components

const PrimeraApp = ({ saludo, subtitulo  }) => {
  // No es conveniente arrojar un error
  /* if(!saludo){
    throw new Error('El saludo es necesario');
  } */
  //Booleanos no aparecen dentro del render
  //const saludo = 'Hola Mundo';
  //console.log(props);
  /* const saludo = {
    nombre: 'Abraham',
    edad: 25
  } */
  //JavaScript solo puede retornar un objeto a la vez
  return (
    // Fragment es una importacion que permite renderizar varios elementos
    //Tratar de no usar Fragment
    //Preferible usar <> vacio
    <>
    {/* Expresiones de JavaScript o valores entre llaves */}
      <h1>{ saludo }</h1>
      {/* Objetos de JS dentro del navegador */}
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
      <p>{ subtitulo }</p>
    </>
  );
}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;