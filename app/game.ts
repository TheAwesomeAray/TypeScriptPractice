import { getValue } from './utility';
import { Result } from './result';
import { Player } from './player';
import { ScoreBoard } from './scoreboard';

export class Game {
    private scoreboard: ScoreBoard = new ScoreBoard();

    constructor(
        //Parameter properties
        public player: Player, 
        public problemCount: number, 
        public factor: number) {
    }

    displayGame(): void {
        let gameForm: string = '';
        for (let i = 1; i <= this.problemCount; i++) {
            gameForm += '<div class="form-group">';
            gameForm += `<label for="answer${i}" class="col-sm-2 control-label">`;
            gameForm += `${String(this.factor)} x ${i} </label>`;
            gameForm += `<div class="col-sm-1"><input type="text" class="form-control" id="answer${i}" size="5"/></div>`;
            gameForm += '</div>';
        }

        const gameElement: HTMLElement = document.getElementById('game') ?? new HTMLElement();
        gameElement.innerHTML = gameForm;

        document.getElementById('calculate')!.removeAttribute('disabled');
    }

    calculateScore(): void {
        let score: number = 0;

        for (let i = 1; i <= this.problemCount; i++) {
            console.log(i);
            const answer: number = Number(getValue(`answer${i}`));
            if (i * this.factor === answer) {
                score++;
            }
        }

        const result: Result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };

        this.scoreboard.addResult(result);

        document.getElementById('calculate')!.setAttribute('disabled', 'true');
    }
}

