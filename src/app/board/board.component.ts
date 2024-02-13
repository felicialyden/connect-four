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
  player = 1
  grid: number[][] = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0 , 0], [0, 0, 0, 0]]

  setChosenSquare(id: string) {
    console.log(id)
    const idArr = id.split('')
    const posX = Number(idArr[0])
    const posY = Number(idArr[2])
    this.grid[posX-1][posY-1] = this.player
    console.log(this.grid)
    this.player === 1 ? this.player = 2 : this.player = 1
    this.nextPlayer.emit(this.player);
  }


}
