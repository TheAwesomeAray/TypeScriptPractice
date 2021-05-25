import { Player } from './player';
import { Game } from './game';
import * as Helpers from './utility';

let game: Game;

document.getElementById('startGame')!.addEventListener('click', () => {
    let playerName: string = Helpers.getValue('playername') ?? "";
    const player: Player = new Player(playerName);
    const problemCount: number = Number(Helpers.getValue('problemCount'));
    const factor: number = Number(Helpers.getValue('factor'));

    game = new Game(player, problemCount, factor);
    game.displayGame();
});

document.getElementById('calculate')?.addEventListener('click', () => {
    game.calculateScore();
});