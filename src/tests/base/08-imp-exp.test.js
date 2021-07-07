import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes.js";

describe('Pruebas en funciones de Heores', () => {
  test('Debe retronar un heore por Id', () => {
    const id = 1;
    const heroe = getHeroeById(id);
    
    const heroeData = heroes.find(heroe => heroe.id);

    expect(heroe).toEqual(heroeData);
  });

  test('Debe retronar undefined si heroe no existe', () => {
    
    const id = 10;
    const heroe = getHeroeById(id);
    
    // const heroeData = heroes.find(heroe => heroe.id);

    expect(heroe).toBe(undefined);
  });

  test('Debe retornar un arreglo con los herores de DC', () => {
    
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);
    // console.log(heroes);

    const heroesData = heroes.filter(h => h.owner === owner);
    // console.log(heroesData);
    expect(heroes).toEqual(heroesData);

    expect(heroes).toEqual(
      [
        {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
          id: 3,
          name: 'Superman',
          owner: 'DC'
        },
        {
          id: 4,
          name: 'Flash',
          owner: 'DC'
        }
      ]
    );
  });

  test('Debe retornar un arreglo con los heroes de Marvel', () => {
    
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);
    // console.log(heroes);

    expect(heroes.length).toBe(2);
  });
});