import { Component, Inject, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { PlayerComponent } from './player/player.component';
import { TurnTrackerComponent } from './turn-tracker/turn-tracker.component';
import { BoardNavComponent } from './board-nav/board-nav.component';
import { MatDialog } from '@angular/material/dialog';
import { Modal } from './modal/modal.component';

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
  resetScore = 0
  newGame = 0
  winner: number | null = null

  @ViewChildren(BoardComponent)
  childBoard: QueryList<BoardComponent> | undefined
  @ViewChildren(PlayerComponent)
  childPlayer: QueryList<PlayerComponent> | undefined

  constructor(@Inject(PLATFORM_ID) private platformId: any, public dialog: MatDialog,) {}

  openDialog(): void {
    this.dialog.open(Modal, {
      data: {winner: this.winner}
    });
  }
  
  setNextPlayer(newPlayerNo: number) {
    this.player = newPlayerNo
  }

  setWinner(winner: number) {
    this.winner = winner
    this.openDialog()
  }

  onSeeRules() {
    console.log('rules')
  }

  onGameAction = async (action: string) =>{
    this.newGame += 1
    this.winner = null
    this.player = 1
    this.childBoard?.forEach(c => c.reset());
    if(action === 'resetScore') {
      this.resetScore += 1
      window.localStorage.clear()
      this.childPlayer?.forEach(c => c.reset());

    }
  }

}
