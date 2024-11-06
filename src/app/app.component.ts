import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NombreComponent } from './components/nombre/nombre.component';
import { ParticlesComponent } from "./components/particles/particles.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NombreComponent, ParticlesComponent, NavbarComponent, ExperienciaComponent, TrabajosComponent,
    SobremiComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portafolio';
}
