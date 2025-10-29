export const getRandomInt = (min, max) => 
    Math.floor(Math.random() * (max - min + 1)) + min;
  
  export const getRandomOperator = (operators) => 
    operators[getRandomInt(0, operators.length - 1)];