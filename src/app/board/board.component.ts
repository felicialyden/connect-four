import { Component, EventEmitter, Output } from '@angular/core';
import { BoardSquareComponent } from '../board-square/board-square.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [BoardSquareComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})

export class BoardComponent {
  @Output() nextPlayer = new EventEmitter<number>();
  @Output() winner = new EventEmitter<number>();
  player = 1
  grid: number[][] = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0 , 0], [0, 0, 0, 0]]

  setChosenSquare(id: string) {
    console.log(id)
    const idArr = id.split('')
    const posX = Number(idArr[0]) -1
    const posY = Number(idArr[2]) -1
    this.grid[posX][posY] = this.player
    this.checkWinning(posX, posY)
    this.player === 1 ? this.player = 2 : this.player = 1
    this.nextPlayer.emit(this.player);
  }

  checkWinning(posX: number, posY :number){
    if(this.grid[posX].every(char => char === this.grid[posX][0]))  {
      this.winner.emit(this.grid[posX][0]);
      return
    }

    const verticalArr = this.grid.map((row) => row[posY])
    if(verticalArr.every(char => char === verticalArr[0]))  {
      this.winner.emit(verticalArr[0]);
      return
    }

    const leftDiagonal: number[] = []
    for (let i = 0; i < this.grid.length; i ++){
      leftDiagonal.push(this.grid[i][i])
    }
    if(leftDiagonal.every(char => char === leftDiagonal[0]))  {
      if(leftDiagonal[0] !== 0) {
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
        this.winner.emit(rightDiagonal[0]);
        return
      }
    }

  }

}
