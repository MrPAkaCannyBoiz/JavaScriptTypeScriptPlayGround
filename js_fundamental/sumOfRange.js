let range = (start, end, step = 1) => {
    const list = [];
    for (let i = start; i <= end; i+=step) {
        list.push(i);
    };
    return list;
};

let sum = (array) => {
    let sum = 0;
    array.forEach(number => {
        sum += number;
    });
    return sum;
}


console.log(range(1,10,2));


console.log(sum(range(1,10,2)))