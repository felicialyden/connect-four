import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-turn-tracker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './turn-tracker.component.html',
  styleUrl: './turn-tracker.component.css'
})
export class TurnTrackerComponent {
 @Input() playerNo!: number
 @Input() winner!: number | null
}
