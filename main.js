/*function printInfo(){
    console.log("Name:" + this.name + "," + " " + "Age:" + this.age);
    };
    
const person = {
 name:"Ivan", age:"20",
 };
    
 printInfo.call(person);*/
 
 /*function calculate(a,b,operator) {
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

 console.log(calculate.apply(obj,[obj.a, obj.b, obj.operator]));*/
 
 /*let users = [
    { name: 'Vasya', age: 15 },
    { name: 'Ivan', age: 18 },
    { name: 'Anton', age: 35 }
    ];

    const usersAge = users.filter((user) =>  user.age>=18);
    console.log(usersAge);

    const usersName = usersAge.filter((user) => delete user.age);
    console.log(usersName);*/

   
  /*let person = {};
   
    function setFullName(obj, name) {
        
        obj.fullName = name;
        
        
    };
    setFullName(person, 'Cristoforo Colombo');
    console.log(person);

    
    const setPersonFullName = setFullName.bind(null, person);
    setPersonFullName('John Smith');
    console.log(person.fullName);*/

let arr = [1,2,1,-10,2,3,0,6,-10];

function sortUniqueNumbers(array){
    array.sort((a, b) => a-b);
    const unique = [...new Set(array)];
    console.log(unique)
};

sortUniqueNumbers(arr);
