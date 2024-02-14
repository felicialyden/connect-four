import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-board-nav',
  standalone: true,
  imports: [],
  templateUrl: './board-nav.component.html',
  styleUrl: './board-nav.component.css'
})

export class BoardNavComponent {
  @Output() chosenLine = new EventEmitter<number>();

  
  onClickBoardSquare(event: MouseEvent) {
    const lineId = (event.target as HTMLElement).closest(".board-nav-item")?.id
    console.log(lineId)
    this.chosenLine.emit(Number(lineId));
}
}