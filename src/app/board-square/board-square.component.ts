import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-board-square',
  standalone: true,
  imports: [],
  templateUrl: './board-square.component.html',
  styleUrl: './board-square.component.css'
})
export class BoardSquareComponent {
  @Input() id! : number
  @Input() playerNo! : number
  @Output() nextPlayer = new EventEmitter<number>();

  selected = false

  onClickBoardSquare(id: number) {
    if(this.selected) {
      return alert("This one is already taken")
    }
    
    document.getElementById(id.toString())?.classList.add(`board-selected-${this.playerNo}`)

    this.nextPlayer.emit(this.playerNo === 1? 2 : 1);
    this.selected = true
  }

}
