let rangeFromOneTo = (end) => {
    var list = [];
    return (step = 1) => {
        for (let i = 1; i <= end; i+=step) {
        list.push(i);
    };
    return list;
    }
};

console.log(rangeFromOneTo(10)(2));


var range = (start, end, step = start < end ? 1 : -1) => {
    if (end === undefined) {
        return end => range(start, end)
    };
    let list = [];
    if (step > 0){
        for (let i = start; i < end; i+=step) {
            list.push(i);
        }
    }
    else if (step < 0){
        for (let i = end; i > start; i-=step) {
            list.push(i);
        }
    }
    return list;

}

console.log(range(1)(8));
