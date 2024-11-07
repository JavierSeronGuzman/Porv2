import { Component } from '@angular/core';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(
    private sharingDataService: SharingDataService
  ){}

  move(location: string): void{
      this.sharingDataService.move.emit(location);
  }

}
