import { Component } from '@angular/core';
import { ParticlesComponent } from '../particles/particles.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'nombre',
  standalone: true,
  imports: [ParticlesComponent, NavbarComponent],
  templateUrl: './nombre.component.html',
  styleUrl: './nombre.component.css'
})
export class NombreComponent {

}
