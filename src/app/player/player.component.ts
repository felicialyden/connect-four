import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  @Input() playerNo! : number
  @Input() winner! : number | null

  score: number = 0

  ngOnChanges(changes: SimpleChange) {
    if(this.winner === this.playerNo) {
      this.score += 1
    }
  }

}
