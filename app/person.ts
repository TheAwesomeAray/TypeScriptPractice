export interface Person {
    name: string;
    age?: number; //automatically a union type number | undefined
    formatName: () => string;
}