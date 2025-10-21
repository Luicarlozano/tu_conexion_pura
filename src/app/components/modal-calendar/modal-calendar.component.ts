import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

declare function createEvent(eventDetails: any): void;
declare function getGoogleEvents(): void;

@Component({
  selector: 'app-modal-calendar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './modal-calendar.component.html',
  styleUrl: './modal-calendar.component.css',
})
export class ModalCalendarComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  ngOnInit(): void {
    createEvent(event);
    getGoogleEvents();
  }

  eventForm = new FormGroup({
    service: new FormControl('', Validators.required),
    eventTime: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    cellphone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]),
  });

  scheduleEvent(): void {
    if (this.eventForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos correctamente antes de enviar el formulario.',
      });
      return;
    }
    const eventDetails = this.eventForm.value;
    console.log('Event Details:', eventDetails);
    createEvent(eventDetails);
    this.close.emit();
  }

  infoEvents() {
    getGoogleEvents();
  }
}
