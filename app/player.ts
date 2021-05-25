import { Person } from './person';

export class Player implements Person {
    name: string;
    age?: number | undefined;
    highScore?: number;

    constructor(name: string) {
        this.name = name;
    }

    formatName() {
        return this.name.toUpperCase();
    }
}