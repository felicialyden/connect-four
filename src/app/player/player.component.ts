import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID} from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css',
})
export class PlayerComponent {
  @Input() playerNo!: number;
  @Input() resetScore!: number;

  score = 0

constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
      if (isPlatformBrowser(this.platformId)) {
        this.score = Number(window.localStorage.getItem(`score-${this.playerNo}`)) || 0
      }
  }

  onWin(winner: number) {
    if (winner === this.playerNo) {
      this.score += 1;
      window.localStorage.setItem(
        `score-${this.playerNo}`,
        this.score.toString()
      );
    }
  }

  reset() {
    this.score = 0
  }
}


