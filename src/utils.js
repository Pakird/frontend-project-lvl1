export const getGreatestCommonDivisor = (number1, number2) => {
    const max = Math.max(number1, number2);
    const min = Math.min(number1, number2);
    const divisor = max % min;
    return divisor === 0 ? min : getGreatestCommonDivisor(min, divisor);
};

export const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const getRandom = (begin, end) => {
    const min = Math.ceil(begin);
    const max = Math.floor(end);
    return Math.floor(Math.random() * (max - min)) + min;
};

export const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const calculateResult = (operator, operand1, operand2) => {
    switch(operator) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
    }
  };

export const randomOf100 = () => getRandom(1, 100);
export const randomOf3 = () => getRandom(0, 2);