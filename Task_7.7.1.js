function printInfo(){
    console.log("Name:" + this.name + "," + " " + "Age:" + this.age);
    };
    
const person = {
 name:"Ivan", age:"20",
 };
    
 printInfo.call(person);