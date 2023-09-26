import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmatin-close',
  templateUrl: './confirmatin-close.component.html',
  styleUrls: ['./confirmatin-close.component.scss']
})
export class ConfirmatinCloseComponent implements OnInit {

  constructor(
    public dialog: MatDialogRef<ConfirmatinCloseComponent>,
    public matdialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  confirmNo(){
    this.dialog.close()
  }
  confirmYes(){
    this.matdialog.closeAll()
  }

}
