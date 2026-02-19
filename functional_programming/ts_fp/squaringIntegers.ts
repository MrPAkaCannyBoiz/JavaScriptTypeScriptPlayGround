export {};

let squarelist = (list: number[]): number[] => list.map(x => x * x);
const squaredInt : number[] = squarelist([-3, 4.8, 5, 3, -3.2])
console.log(squaredInt);
