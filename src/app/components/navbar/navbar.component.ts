import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  showBar = false;

  constructor(
    private sharingDataService: SharingDataService,private renderer: Renderer2, private el: ElementRef
  ){}
  ngOnInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      const clickedInside = this.el.nativeElement.contains(event.target);
      if (!clickedInside) {
        this.showBar = false; // Cierra el menú si se hace clic fuera
      }
    });
  }

  move(location: string): void{
      this.sharingDataService.move.emit(location);
  }

  closeBar(): void {
    this.showBar = !this.showBar;
  }

}
