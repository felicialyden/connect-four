import { Component, Input } from '@angular/core';

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
  selected = false

  onClickBoardSquare(id: number) {
    if(this.selected) {
      return alert("This one is already taken")
    }
    console.log(this.playerNo)
    this.selected = true
    document.getElementById(id.toString())?.classList.add("board-selected")
  }

}
