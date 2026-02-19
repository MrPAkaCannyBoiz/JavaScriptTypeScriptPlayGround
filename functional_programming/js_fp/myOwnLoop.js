let myForLoop = (start, test, update, body) => {
    for (let i = start; test(i); i = update(i)) {
        body(i)
    }
}

myForLoop(
    3,
    n => n > 0,
    n => n - 1,
    console.log
)