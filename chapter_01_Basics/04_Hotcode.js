console.log("Hello");

function add(a, b) {

    return (a + b);
}
let result;
for (i = 0; i < 100000; i++) {
    result = add(i, i + 1)
}
console.log("After 1000 calls:", result)