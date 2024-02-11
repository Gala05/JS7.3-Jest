const sorting = require("../../app");

describe("Books names test suit", () => {
  test("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",      
    ]

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",      
    ]

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);    
  });

  test ("Without params throws exception", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError)
  });

  test("Some book titles match", () => {
    const input = [
      "Унесенные ветром",
      "Горе от ума",
      "Горе от ума",          
    ]

    const expected = [
      "Горе от ума",
      "Горе от ума",
      "Унесенные ветром",     
    ]

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);    
  });
});
