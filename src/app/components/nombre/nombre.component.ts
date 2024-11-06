import { Component } from '@angular/core';
import { ParticlesComponent } from '../particles/particles.component';

@Component({
  selector: 'nombre',
  standalone: true,
  imports: [ParticlesComponent],
  templateUrl: './nombre.component.html',
  styleUrl: './nombre.component.css'
})
export class NombreComponent {

}
