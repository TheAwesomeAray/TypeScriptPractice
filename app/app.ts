function startGame() {



    //control flow-based type analysis
    // This type of analysis is the compiler analyzing the conditional behavior in code and applying type checking to
    // variables using the most narrow criteria possible
    let messagesElement: HTMLElement | null;
    messagesElement = document.getElementById('messages');

    // if (typeof messagesElement === 'string') {
    //     //compiler knows that messagesElement is a string here, now a HTMLElement
    //     return messagesElement;
    // }
    // else {
    //     //compiler knows that this is an HTMLElement or null
    //     return messagesElement;
    // }


    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game!';

    let playerName: string = 'Andrew';
    logPlayer(playerName);

    //Valid javascript is also valid typescript
}

function logPlayer(name: string) {
    console.log(`New game starting for player ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame)

//Other Types:
// Void -- absense of a type (return type for function)
// Null -- 
// Undefined --
// By default, null and undefined are allowed for all types. --strictNullChecks compiler option disallows this unless you opt in
// by explcitly listing null or undefined in a union type or as the only type allowed
// Never -- values that will never occur (rare)
// Any -- opt out of type checking

// Union Types: number | string
let someValue: number | string;
someValue = 5;
someValue = 'hello';

//Type assertions
let value: any = 5;
let fixedString: string = (<number>value).toFixed(4);
let otherString: string = (value as number).toFixed(4);

