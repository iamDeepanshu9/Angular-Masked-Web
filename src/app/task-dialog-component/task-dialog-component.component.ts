import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TaskDialogData} from "../item-display/item-display.component";

@Component({
  selector: 'app-task-dialog-component',
  templateUrl: './task-dialog-component.component.html',
  styleUrls: ['./task-dialog-component.component.scss']
})
export class TaskDialogComponentComponent implements OnInit {
  private backupTask = { ...this.data.task };

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData
  ) {}

  cancel(): void {
    this.data.task.title = this.backupTask.title;
    this.data.task.description = this.backupTask.description;
    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {
  }

}
