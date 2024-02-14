import { Component } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { PlayerComponent } from './player/player.component';
import { TurnTrackerComponent } from './turn-tracker/turn-tracker.component';
import { BoardNavComponent } from './board-nav/board-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BoardComponent, PlayerComponent, TurnTrackerComponent, BoardNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'connect-four';
  player = 1
  newGame = false
  winner: number | null = null
  
  setNextPlayer(newPlayerNo: number) {
    this.player = newPlayerNo
  }

  setWinner(winner: number) {
    this.winner = winner
    return alert(`Player ${winner} win`)

  }

  onSeeRules() {
    console.log('rules')
  }

  onNewGame() {
    this.player = 1

  }

  onResetScore() {
    console.log('reset score')
  }

}
