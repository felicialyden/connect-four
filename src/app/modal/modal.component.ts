import {Component, Inject, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  winner: number | boolean;
}


@Component({
  selector: 'modal.component',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.css'],
})
export class Modal {

  constructor(public dialogRef: MatDialogRef<MatDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
