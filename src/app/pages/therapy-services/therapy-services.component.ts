import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCalendarComponent } from '../../components/modal-calendar/modal-calendar.component';
import { ModalInsertComponent } from '../../components/modal-insert/modal-insert.component';


@Component({
  selector: 'app-therapy-services',
  standalone: true,
  imports: [ModalCalendarComponent, CommonModule,ModalInsertComponent],
  templateUrl: './therapy-services.component.html',
  styleUrl: './therapy-services.component.css'
})
export class TherapyServicesComponent {
  modalIsOpenCalendar = false;
  modalIsopenInsert = false;

  openModalCalendar() {
    this.modalIsOpenCalendar = true;
  }

  closeModalCalendar() {
    this.modalIsOpenCalendar = false;
  }

  openModalInsert() {
 this.modalIsopenInsert = true;
  }
  closeModalInsert() {
    this.modalIsopenInsert = false;
  }

}
