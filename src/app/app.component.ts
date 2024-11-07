import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NombreComponent } from './components/nombre/nombre.component';
import { ParticlesComponent } from "./components/particles/particles.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharingDataService } from './services/sharing-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NombreComponent, ParticlesComponent, NavbarComponent, ExperienciaComponent, TrabajosComponent,
    SobremiComponent, FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit{

  constructor(private sharingDataService: SharingDataService){}
  ngOnInit(): void {
    this.move();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  ngAfterViewInit() {
    const sections = document.querySelectorAll('.container');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.5 // Ajusta este valor para cambiar el punto en que se activa la animación
    });

    sections.forEach(section => {
      observer.observe(section);
    });

}
move():void{
   this.sharingDataService.move.subscribe((location) =>{
    const mapElement = document.getElementById(location);
    if(location == 'nombre-section'){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }else{
      if (mapElement) {
        mapElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
   })   
}
}
