import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { BoardSquareComponent } from '../board-square/board-square.component';
import { BoardNavComponent } from '../board-nav/board-nav.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [BoardSquareComponent, BoardNavComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})

export class BoardComponent {
  @Output() nextPlayer = new EventEmitter<number>();
  @Output() winner = new EventEmitter<number>();
  @Input() newGame: number = 0;

  player = 1
  gameIsActive = true
  posX = 0

  grid: number[][] = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0 , 0], [0, 0, 0, 0]]

  reset() {
    this.grid = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0 , 0], [0, 0, 0, 0]]
    this.player = 1
    this.gameIsActive = true
    const boardElements = document.querySelectorAll(".board-element")
    boardElements.forEach((boardElement) => boardElement.classList.remove('board-selected-1', 'board-selected-2'))
  }

  setChosenSquare(chosenLine: number) {
    if(!this.gameIsActive) return
    const posY = chosenLine
    this.findSquare(chosenLine)
    const squareId = `${this.posX}-${posY}`
    document.getElementById(squareId)?.classList.add(`board-selected-${this.player}`)
    this.evaluateWinning(this.posX, posY)
    this.player === 1 ? this.player = 2 : this.player = 1
    this.nextPlayer.emit(this.player);
  }

  findSquare(posY: number) {
    const verticalArr = this.grid.map((row) => row[posY])
    for(let i = 3; i >= 0; i--){
      if(verticalArr[i] === 0) {
        this.grid[i][posY] = this.player
        this.posX = i
        return
      }
    }
  }

  evaluateWinning(posX: number, posY :number){
    const horizontalArr = this.grid[posX]
    const verticalArr = this.grid.map((row) => row[posY])
    const leftDiagonal: number[] = []
    for (let i = 0; i < this.grid.length; i ++){
      leftDiagonal.push(this.grid[i][i])
    }
    const rightDiagonal: number[] = []
    for (let i = this.grid.length - 1; i >= 0; i--){
      rightDiagonal.push(this.grid[this.grid.length - 1 - i][i])
    }

    const rowsToEvaluate = [horizontalArr, verticalArr, leftDiagonal, rightDiagonal]

    rowsToEvaluate.forEach((row) => {
      if(row.every(char => char === row[0]) && row[0] !== 0){
        console.log(row)
        this.gameIsActive = false
        this.winner.emit(row[0]);
        return
      }
    })
  }
}
