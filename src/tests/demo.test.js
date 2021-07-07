/* 
test('debe ser true', () =>{
  const isActive = true;
  if (isActive) {
    throw new Error('No esta activo');
  }
}) */

// AGRUPADOR GENERAL DE PRUEBAS
describe('Pruebas en el archivo demo.test.js', () => {
  test('Deben ser iguales los string', () => {
    //1. Inicializacion
    const mensaje = 'Hola Mundo';
  
    //2. Estimulo
    const mensaje2 = `Hola Mundo`;
  
    //3. Observar el comportamiento
    expect(mensaje).toBe(mensaje2); //===
  })
})


