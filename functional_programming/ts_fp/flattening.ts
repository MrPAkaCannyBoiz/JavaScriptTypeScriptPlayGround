export {};
let reduceArray = (A: any[][]) =>{
    return A.reduce((previous, current) => [...previous, ...current], [])
}

let arrays = [[1,2,3], [4,5], [6]]

console.log(reduceArray(arrays));
