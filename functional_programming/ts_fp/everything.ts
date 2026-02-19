function checkIfAllAreTrue(array: any[], test: (a: any) => boolean ): boolean {
    return array.every(c => c === test);
}

console.log("should be true:" + checkIfAllAreTrue([1, 3, 5], n => n < 10))
// → true
console.log("should be false:" + checkIfAllAreTrue([2, 4, 16], n => n < 10))
// → false
console.log("should be true:" + checkIfAllAreTrue([], n => n < 10))
// → true

export {};