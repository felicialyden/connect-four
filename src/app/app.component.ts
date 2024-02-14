import { Component, EventEmitter } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { PlayerComponent } from './player/player.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TurnTrackerComponent } from './turn-tracker/turn-tracker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BoardComponent, PlayerComponent, NavbarComponent, TurnTrackerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'connect-four';
  player = 1
  winner: number | null = null
  
  setNextPlayer(newPlayerNo: number) {
    this.player = newPlayerNo
  }

  setWinner(winner: number) {
    this.winner = winner
    return alert(`Player ${winner} win`)

  }

}
