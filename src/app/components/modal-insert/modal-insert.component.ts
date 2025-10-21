import { CommonModule } from '@angular/common';
import { Component, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal-insert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-insert.component.html',
  styleUrl: './modal-insert.component.css'
})
export class ModalInsertComponent {
@Output() close = new EventEmitter<void>();
}
