import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
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
