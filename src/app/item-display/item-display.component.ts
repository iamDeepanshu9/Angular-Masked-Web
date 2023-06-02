import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface Item {
  id?: string;
  title: string;
  description: string;
}

export interface TaskDialogData {
  task: Partial<Item>;
  enableDelete: boolean;
}

export interface TaskDialogResult {
  task: Item;
  delete?: boolean;
}



@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.scss']
})
export class ItemDisplayComponent implements OnInit {

  @Input() task: Item | null = null;
  @Output() edit = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

}
