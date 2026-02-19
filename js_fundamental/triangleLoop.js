let triangleLoop = (string, length) =>{
    for (let index = 1; index <= length; index++) {
        console.log(string.repeat(index));
    }
}

triangleLoop("#", 7);
