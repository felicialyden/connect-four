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

  setNextPlayer(newPlayerNo: number) {
    this.player = newPlayerNo
    this.nextPlayer.emit(newPlayerNo);
  }
}
