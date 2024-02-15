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
  @Input() winner!: number | null;
  @Input() resetScore!: boolean;

  score = 0

constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
      if (isPlatformBrowser(this.platformId)) {
        this.score = Number(window.localStorage.getItem(`score-${this.playerNo}`)) || 0
      }
  }

  ngOnChanges() {
    if (this.winner === this.playerNo) {
      this.score += 1;
      window.localStorage.setItem(
        `score-${this.playerNo}`,
        this.score.toString()
      );
    }
    if(this.resetScore) this.score = 0
  }
}
