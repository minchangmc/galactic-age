/* eslint-disable no-undef */
import Age from './../src/js/age.js';
// import Mercury from './../src/js/mercury.js';
// import Jupiter from './../src/js/jupiter.js';
// import Mars from './../src/js/mars.js';
// import Venus from './../src/js/venus.js';

describe('Age', () => {
  let num;
  beforeEach(() => {
    num = new Age();
  }); 

  test('it should return num for the age', () => {
    num.age = 5;
    expect(num.age).toEqual(5);
  });
  test('it should get the average age of 72', () => {
    const average = num.avgAge;
    expect(average).toEqual(72);
  });
});