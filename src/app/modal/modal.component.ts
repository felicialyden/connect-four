import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'modal.component',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.css'],
})
export class Modal {

  constructor(public dialogRef: MatDialogRef<MatDialog>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
