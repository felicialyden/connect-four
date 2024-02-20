import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';

export interface DialogData {
  content: number | boolean;
  modal: string
}
@Component({
  selector: 'modal.component',
  templateUrl: 'modal.component.html',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ lucideX })],
  styleUrls: ['modal.component.css'],
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<MatDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
