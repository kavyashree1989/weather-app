import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ConfirmDialogData {
  message: string;
}

@Component({
  selector: 'weather-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class WeatherConfirmDialogComponent {
  public message: string = '';
  constructor(
    public dialogRef: MatDialogRef<WeatherConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData
  ) {}

  ngOnInit() {
    this.message = this.data.message;
  }
}
