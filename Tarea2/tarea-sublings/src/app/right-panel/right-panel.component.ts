import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right-panel',
  imports: [CommonModule],
  templateUrl: './right-panel.component.html',
  styleUrl: './right-panel.component.scss'
})
export class RightPanelComponent {
  @Input() selectedItem: any = null;
  @Output() clearSelection = new EventEmitter<void>();

  clear() {
    this.clearSelection.emit();
  }
}
