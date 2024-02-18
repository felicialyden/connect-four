import { Component, EventEmitter, Output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideArrowBigDown } from '@ng-icons/lucide';

@Component({
  selector: 'app-board-nav',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ lucideArrowBigDown })],
  templateUrl: './board-nav.component.html',
  styleUrl: './board-nav.component.css'
})

export class BoardNavComponent {
  @Output() chosenLine = new EventEmitter<number>();

  
  onClickBoardSquare(event: MouseEvent) {
    const lineId = (event.target as HTMLElement).closest(".board-nav-item")?.id
    this.chosenLine.emit(Number(lineId));
}
}