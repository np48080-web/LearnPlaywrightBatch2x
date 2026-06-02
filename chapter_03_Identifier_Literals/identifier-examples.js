// Rule 1: Can start with letter, underscore, or dollar sign
let name = "John";
let _privateVar = 42;
let $domElement = document;

// Rule 2: Subsequent chars can include letters, digits, _ and $
let user2 = "Alice";
let my_var_123 = true;
let $amount$ = 100;

// Rule 3: Case-sensitive
let myVar = 1;
let myvar = 2;
let MyVar = 3;

// Rule 4: Unicode letters allowed
let café = "coffee";   // accented character
let 名前 = "Taro";     // Japanese
let π = 3.14159;       // Greek

// Rule 5: Reserved keywords CANNOT be used (these would throw errors):
// let let = 5;     // SyntaxError
// let class = 10;  // SyntaxError
// let return = 1;  // SyntaxError

// Rule 6: No spaces or special chars other than _ and $
// let my var = 1;  // SyntaxError
// let my-var = 1;  // SyntaxError
// let my.var = 1;  // SyntaxError

console.log({ name, _privateVar, $domElement, user2, my_var_123, $amount$, myVar, myvar, MyVar, café, 名前, π });

// please create a example of all identifier rules - prompt