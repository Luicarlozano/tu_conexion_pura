import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarruselTestimonialComponent } from '../../components/carrusel-testimonial/carrusel-testimonial.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CarruselTestimonialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router){}

  goToAboutMe(){
    this.router.navigate(['Quien_Soy']);
  }

  goToServices(){
    this.router.navigate(['Servicios'],{fragment:'section_container_1'});
}


}
