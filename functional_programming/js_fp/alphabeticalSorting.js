let alphabeticalOrder = (array) => {
    result = [...array].sort((a,b) => {
       return a.localeCompare(b);
    });
    return result;
}

const letters = ["a", "d", "c", "a", "z", "g"]
console.log(alphabeticalOrder(letters));
console.log(letters);

