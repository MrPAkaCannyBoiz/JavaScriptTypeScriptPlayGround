// number[] is basically List<double> 
function checkIfSomeIsPositive(nums : number[]): boolean {
    return nums.some(c => c > 0);
}

let check00 : boolean = checkIfSomeIsPositive([1, 2, 3, -4, 5]);
console.log(check00);

export {};