let person = {};
   
    function setFullName(obj, name) {obj.fullName = name;};
    
    setFullName(person, 'Cristoforo Colombo');
    console.log(person);

    
    const setPersonFullName = setFullName.bind(null, person);
    setPersonFullName('John Smith');
    console.log(person);