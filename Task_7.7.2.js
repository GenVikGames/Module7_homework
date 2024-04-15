function calculate(a,b,operator) {
    if (operator === '+') {
                return a + b;
            } else if (operator === '-') {
                return a - b;
            } else if (operator === '*') {
                return a * b;
            } else if (operator === '/') {
                return a / b;
    
            return 0;}
    }
    console.log(calculate(10, 2, '+'));
    console.log(calculate(10, 2, '-'));
    console.log(calculate(10, 2, '*'));
    console.log(calculate(10, 2, '/'));

    const obj = {
        a: 2,
        b: 3,
        operator: '+'
      };

 console.log(calculate.apply(obj,[obj.a, obj.b, obj.operator]));
