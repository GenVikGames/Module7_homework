let arr = [1,2,1,-10,2,3,0,6,-10];

function sortUniqueNumbers(array){
    array.sort((a, b) => a-b);
    const unique = [...new Set(array)];
    console.log(unique)
};

sortUniqueNumbers(arr);
