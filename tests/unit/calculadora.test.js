const calculadora = require("../../models/calculadora");

test("somar 1 + 2 deveria retornar 3", () => {
  const resultado = calculadora.somar(1, 2);
  expect(resultado).toBe(3);
});

test("somar 5 + 100 deveria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 20 + -5 deveria retornar 15", () => {
  const resultado = calculadora.somar(20, -5);
  expect(resultado).toBe(15);
});

test("somar 'banana' + 100 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});
