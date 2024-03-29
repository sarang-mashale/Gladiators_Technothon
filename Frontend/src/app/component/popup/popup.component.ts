import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent  {

  password = '';

  constructor(public dialogRef: MatDialogRef<PopupComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
