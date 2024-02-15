import { Component, Inject, PLATFORM_ID } from '@angular/core';
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
  resetScore = false
  winner: number | null = null

  constructor(@Inject(PLATFORM_ID) private platformId: any, public dialog: MatDialog,) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(Modal, {
      width: '250px',
      data: {winner: this.winner}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  setNextPlayer(newPlayerNo: number) {
    this.player = newPlayerNo
  }

  setWinner(winner: number) {
    this.winner = winner
    return this.openDialog()
  }

  onSeeRules() {
    console.log('rules')
  }

  onNewGame() {
    console.log('new game')

  }

  onResetScore() {
    this.resetScore = true
    this.winner = null
    this.player = 1
    window.localStorage.clear()
  }

}
