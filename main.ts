// if don't know a variable's value ahead of time, use type anotations
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, "a", false]; // Avoid this

// consts should be typed with Pascal Case
// enum enumeration happens by default, but doing it manually is a good practice to keep track of values
enum Color { Red = 0, Green = 1, Blue = 2 };
let backgroundColor = Color.Red;
