// Interfaces and Type Aliases


// Interfaces are always open - you can add new members (via declaration merging):
interface User {
    name: string;
}

interface User {
    age: number;
}

const u = { name: "adam", age: 15 };

console.log(u)
     // {name: 'adam', age: 15}


// a type cannot be changed
type User2 = {
    name: string;
}
        // error TS2300: Duplicate identifier 'User2'.

type User2 = {
    age: number;
}
        // error TS2300: Duplicate identifier 'User2'.


// aliasing a primitive type:
type StringOfChars = string;

// cannot do this with an interface:
interface MyString extends string {
}
        // error TS2840: An interface cannot extend a primitive type like 'string'. It can only extend other named object types.


// extending interfaces:
interface NamedUser {
    name: string;
}

interface AgedNamedUser extends NamedUser {
    age: number;
}

const aged: AgedNamedUser = {
    name: "adam",
    age: 15
}

console.log(aged);
     // {name: 'adam', age: 15}


// extending types (via intersection):
type NamedUser2 = {
    name: string;
}

type AgedNamedUser2 = NamedUser2 & {
    age: number;
}

const aged2: AgedNamedUser2 = {
    name: "adam",
    age: 15
}

console.log(aged2);