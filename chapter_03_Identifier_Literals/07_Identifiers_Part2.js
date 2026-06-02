// Naming conventions (cases) used in JavaScript
// PROMPT : can you please add to 07_Identifiers_Part2  js code , different type of cases like snake case camel case..... etc
//

// camelCase (variables, functions - most common)
let firstName = "Nehanshu";
let lastName = "Patel";
function getUserDetails() {
    return `${firstName} ${lastName}`;
}

// snake_case (less common in JS, used in databases/APIs)
let first_name = "Nehanshu";
let last_name = "Patel";
function get_user_details() {
    return `${first_name} ${last_name}`;
}

// PascalCase (classes, constructors, React components)
class UserAccount {
    constructor(name) {
        this.Name = name;
    }
}
const AppHeader = () => "Header";

// UPPER_SNAKE_CASE (constants)
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_TIMEOUT_MS = 5000;

// lower case (rare, sometimes for single-word vars)
let temp = 25;
let color = "blue";

// kebab-case CANNOT be used (not a valid identifier)
// let first-name = "John"; // SyntaxError

// Hungarian notation (prefix indicates type)
let strName = "John";
let numAge = 30;
let arrItems = [1, 2, 3];
let fnCallback = () => { };

// Common prefix conventions
let _isLoading = true;         // underscore: private/internal
let $formElement = null;       // dollar: DOM elements
let isActive = false;          // is- prefix for booleans
let hasAccess = true;          // has- prefix for booleans
let shouldUpdate = false;      // should- prefix for booleans

console.log({
    firstName,
    last_name,
    MAX_RETRY_COUNT,
    strName,
    numAge,
    _isLoading,
    isActive,
});
