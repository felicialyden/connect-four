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
    this.chosenLine.emit(Number((event.target as HTMLDivElement).id));
}
}