import { Component, EventEmitter, Output } from '@angular/core';
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
  player = 1
  gameIsActive = true
  posX = 0

  grid: number[][] = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0 , 0], [0, 0, 0, 0]]

  setChosenSquare(chosenLine: number) {
    if(!this.gameIsActive) return
    const posY = chosenLine
    this.findSquare(chosenLine)
    const squareId = `${this.posX}-${posY}`
    document.getElementById(squareId)?.classList.add(`board-selected-${this.player}`)
    this.checkWinning(this.posX, posY)
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

  checkWinning(posX: number, posY :number){
    if(this.grid[posX].every(char => char === this.grid[posX][0])) {
      this.gameIsActive = false
      this.winner.emit(this.grid[posX][0]);
      return
    }

    const verticalArr = this.grid.map((row) => row[posY])
    if(verticalArr.every(char => char === verticalArr[0]))  {
      this.winner.emit(verticalArr[0]);
      this.gameIsActive = false
      return
    }

    const leftDiagonal: number[] = []
    for (let i = 0; i < this.grid.length; i ++){
      leftDiagonal.push(this.grid[i][i])
    }
    if(leftDiagonal.every(char => char === leftDiagonal[0]))  {
      if(leftDiagonal[0] !== 0) {
        this.gameIsActive = false
        this.winner.emit(leftDiagonal[0]);
        return
      }
    }
    
    const rightDiagonal: number[] = []
    for (let i = this.grid.length - 1; i >= 0; i--){
      rightDiagonal.push(this.grid[this.grid.length - 1 - i][i])
    }
    if(rightDiagonal.every(char => char === rightDiagonal[0]))  {
      if(rightDiagonal[0] !== 0) {
        this.gameIsActive = false
        this.winner.emit(rightDiagonal[0]);
        return
      }
    }
  }
}
