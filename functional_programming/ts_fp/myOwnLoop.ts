export {};

let myForLoop = (start: number, test: any, update: any, body: any) => {
    for (let i:number = start; test(i); i = update(i)) {
        body(i)
    }
}

myForLoop(
    3,
    (n:any) => n > 0,
    (n:any) => n - 1,
    console.log
)