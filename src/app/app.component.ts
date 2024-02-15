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
  winner: number | null = null

  @ViewChildren(BoardComponent)
  childBoard: QueryList<BoardComponent> | undefined
  @ViewChildren(PlayerComponent)
  childPlayer: QueryList<PlayerComponent> | undefined

  constructor(@Inject(PLATFORM_ID) private platformId: any, public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(Modal, {
      data: {
        content: `Player ${this.winner} wins!`,
        modal: 'winner'
    }
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
    this.dialog.open(Modal, {
      data: {
        content: `Players take turns dropping one of their colored discs from the top into any column, with the disc falling to the lowest available space in that column. The game ends when one player successfully connects four discs in a row, or when the grid is completely filled without a winner, resulting in a draw.`,
        modal: 'rules'
      }
    });
  }

  onGameAction = async (action: string) =>{
    this.winner = null
    this.player = 1
    this.childBoard?.forEach(c => c.reset());
    if(action === 'resetScore') {
      window.localStorage.clear()
      this.childPlayer?.forEach(c => c.reset());

    }
  }

}
