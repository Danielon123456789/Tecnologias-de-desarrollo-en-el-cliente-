import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  imports: [CommonModule],
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.scss'
})

export class LeftPanelComponent {
  @Input() items: any[] = [];
  @Input() selectedItem: any = null;
  @Output() selectItem = new EventEmitter<any>();

  onSelect(item: any) {
    this.selectItem.emit(item);
  }
}
