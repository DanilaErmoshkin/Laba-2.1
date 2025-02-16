
function showAlert() {
    alert("Hello world");
}
const concatenateNumbers = (num1: number,num2:number): string =>{
    return '${num1}${num2}';
}
showAlert();
const result = concatenateNumbers(5,10);
console.log(result);

const userName: string = "Alice";
const userAge: number = 30;
const isActive: boolean = true;
const hobbies: string[] = ["reading", "hiking", "cooking"];
const user: { name: string; age: number } = { name: "Bob", age: 25 };

let score: number | null = null;
let position: [number, number] = [10, 20];
let anyValue: any = "This could be anything";
interface Entity {
    id: number;
    }
    interface ToJsonStringify extends
    Entity {
    name: string;
    surname?: string;
    }
    const data: ToJsonStringify = {
    id: 1,
    name: "Василий",
    }
