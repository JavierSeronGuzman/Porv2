import { Component } from '@angular/core';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(
    private sharingDataService: SharingDataService
  ){}

  move(location: string): void{
      this.sharingDataService.move.emit(location);
  }

}
