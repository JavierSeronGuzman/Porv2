import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {

  timelineItems = [
    {
      date: 'Septiembre 2024 - Noviembre 2024',
      role: 'Desarrollador de Software',
      company: 'Maderas Lawal',
      description: 'Desarrollo de página web y digitalización de procesos. Utilizando tecnologías como Angular, Spring Boot, MySQL, entre otros.'},
    {
      date: 'Noviembre 2023 - Noviembre 2024',
      role: 'Practicante Ciencia de Datos y Desarrollo de Software',
      company: 'City Lab Bío-Bío',
      description: 'Enfocado en la mantención, mejoras y desarrollo de servicios Back-End del sistema tecnológico CityScope. Procesamiento y análisis de datos de telefonía móvil, junto a la implementación de modelo de machine learning para predecir medios de transporte.'
    }
  ];

}
