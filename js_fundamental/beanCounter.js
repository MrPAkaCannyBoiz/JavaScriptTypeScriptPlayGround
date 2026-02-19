let countBChar = (string) =>{
    const total = string.length;
    let counter = 0;
    for (let index = 0; index < total; index++) {
        if (string[index] === "B"){
            counter++;
        }
    };
    return counter
};

console.log(countBChar("BBC"));


let countChar = (string, char) => {
    let charLowerCase = char.toLowerCase();
    const total = string.length;
    let counter = 0;
    for (let i = 0; i < total; i++) {
        if (string[i].toLowerCase() === charLowerCase){
            counter++;
        }
    };
    return counter;
};

console.log(countChar ("Dndddddddd", "d"));
