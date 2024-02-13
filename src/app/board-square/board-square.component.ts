import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-board-square',
  standalone: true,
  imports: [],
  templateUrl: './board-square.component.html',
  styleUrl: './board-square.component.css'
})
export class BoardSquareComponent {
  @Input() id! : string
  @Input() playerNo! : number
  @Output() chosenSquare = new EventEmitter<string>();

  selected = false

  onClickBoardSquare(id: string) {
    if(this.selected) {
      return alert("This one is already taken")
    }
    
    document.getElementById(id)?.classList.add(`board-selected-${this.playerNo}`)
    this.chosenSquare.emit(id);
    this.selected = true
  }

}
