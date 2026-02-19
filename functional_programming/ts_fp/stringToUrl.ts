export {};

function urlSlug(randomString : string) {
    let array: string = randomString.trim().split(" ").join("-");
    return array;
}

let result : string = urlSlug("yomama haiyaaaaaa")
console.log(result);
