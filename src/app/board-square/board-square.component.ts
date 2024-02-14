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
}
