import { Component, Inject, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { PlayerComponent } from './player/player.component';
import { TurnTrackerComponent } from './turn-tracker/turn-tracker.component';
import { BoardNavComponent } from './board-nav/board-nav.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

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
  boardComponent: QueryList<BoardComponent> | undefined
  @ViewChildren(PlayerComponent)
  playerComponent: QueryList<PlayerComponent> | undefined

  constructor( public dialog: MatDialog ) {}

  openDialog(winner: number): void {
    this.dialog.open(ModalComponent, {
      data: {
        content: `Player ${winner} wins!`,
        modal: 'winner',
    }
    });
  }
  
  setNextPlayer(newPlayerNo: number) {
    this.player = newPlayerNo
  }

  setWinner(winner: number) {
    this.winner = winner
    this.playerComponent?.forEach(c => c.onWin(winner));
    this.openDialog(winner)
  }

  onSeeRules() {
    this.dialog.open(ModalComponent, {
      data: {
        content: `
        Players take turns dropping one of their colored discs from the top into any column, with the disc falling to the lowest available space in that column.
        
        The game ends when one player successfully connects four discs in a row, or when the grid is completely filled without a winner, resulting in a draw.
        `,
        modal: 'rules',
        title: 'Connect four rules'
      }
    });
  }

  onGameAction = async (action: string) =>{
    this.winner = null
    this.player = 1
    this.boardComponent?.forEach(c => c.reset());
    if(action === 'resetScore') {
      window.localStorage.clear()
      this.playerComponent?.forEach(c => c.reset());

    }
  }

}
