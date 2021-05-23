function startGame() {

    let messagesElement: HTMLElement | null;
    
    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);
    postScore(100, playerName);

    pointerToFunctionExample();
}

//passing undefined is the same and sending nothing - default value will be used
function logPlayer(playerName: string = 'Default'): void {
    console.log(`Starting game for player ${playerName}`);
}

function getInputValue(elementId: string): string | undefined {
    const inputElement : HTMLInputElement = document.getElementById(elementId) as HTMLInputElement;

    if (inputElement.value === '') {
        return undefined;
    } 
    else {
        return inputElement.value;
    }
}

function postScore(score: number, playerName: string = 'Default Player'): void {
    const scoreElement: HTMLElement = document.getElementById('postedScores') as HTMLElement;

    scoreElement!.innerText = `${score} - ${playerName}`;
}

//arrow functions
let squareit = (x: number) => x * x;
let result: number = squareit(4); //16

function pointerToFunctionExample() {
    //Type safety
    let logger: (value: string) => void;
    logger = logMessage;

    logger('Log message to console');

    logger = logError;

    logger('I am an error!');
}

//function types
function logMessage(message: string) {
    console.log(message);
}

function logError(error: string) {
    console.error(error);
}


document.getElementById('startGame')!.addEventListener('click', startGame)

