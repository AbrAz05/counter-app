// import { render } from "@testing-library/react";
import React from 'react';
import { shallow } from 'enzyme';
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {
  /* test('Debe mostrar el mensaje "Hola Soy Goku"', () => {
    const saludo = 'Hola soy Goku';
    // Es el producto renderizado
    // Render es una funcion que recibe un componente que vamos a renderizar
    const { getByText } = render(<PrimeraApp saludo={saludo}/>);
    expect(getByText(saludo)).toBeInTheDocument();
  }) */

  test('Debe mostrar <PrimeraApp /> correctamente', () => {

    const saludo = 'Hola soy Goku';
    const wrapper = shallow(<PrimeraApp saludo={saludo} />)
  })
  


  
})
