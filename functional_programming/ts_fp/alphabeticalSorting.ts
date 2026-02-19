// Add types to the argument (string[]) and return type (: string[])
let alphabeticalOrder = (array: string[]): string[] => {
    // Determine sort logic. Note: .sort() mutates the original array in JavaScript/TypeScript.
    // If you want pure functional programming, do: [...array].sort(...)
    const result = [...array].sort((a, b) => {
        return a.localeCompare(b);
    });
    return result;
}

const letters: string[] = ["a", "d", "c", "a", "z", "g"];
console.log(alphabeticalOrder(letters));

// check if it's changed
console.log(letters)

// Make it a module to avoid implementation conflict with the JS file
export {}; 