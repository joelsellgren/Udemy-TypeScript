const add = (n1: number, n2: number) => {
    return n1 + n2;
};

const printResult = (num: number) => {
    console.log('Result: ' + num);
};

const addAndHandle = (
    n1: number,
    n2: number,
    callback: (num: number) => void
) => {
    const result = n1 + n2;
    callback(result);
};

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

addAndHandle(10, 20, result => {
    console.log(result);
    return result;
});
