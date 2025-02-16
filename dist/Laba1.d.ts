declare function showAlert(): void;
declare const concatenateNumbers: (num1: number, num2: number) => string;
declare const result: string;
declare const userName: string;
declare const userAge: number;
declare const isActive: boolean;
declare const hobbies: string[];
declare const user: {
    name: string;
    age: number;
};
declare let score: number | null;
declare let position: [number, number];
declare let anyValue: any;
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    name: string;
    surname?: string;
}
declare const data: ToJsonStringify;
