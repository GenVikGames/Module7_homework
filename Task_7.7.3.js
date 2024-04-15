let users = [
    { name: 'Vasya', age: 15 },
    { name: 'Ivan', age: 18 },
    { name: 'Anton', age: 35 }
    ];

    const usersAge = users.filter((user) =>  user.age>=18);
    console.log(usersAge);

    const usersName = usersAge.filter((user) => delete user.age);
    console.log(usersName);