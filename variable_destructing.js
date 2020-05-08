const arrayFruit = [
  'banana',
  'apple',
  'orange',
  'lemon',
  'grape'
];

// Quero pegar apenas 2 fruta, sem usar a posicao

const [, secondFruit] = arrayFruit;
console.log(secondFruit) // apple

// gostaria de pegar a terceira e quinta fruta

const [,, thirdFruit,, fifthFruit] = arrayFruit;

console.log('Third fruit is:', thirdFruit) // orange
console.log('Fifth fruit is:', fifthFruit) // grape

// A utilizaçao da virgula (,) corresponde a um item do array
