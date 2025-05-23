import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})


export class LayoutComponent implements AfterViewInit{


  ngAfterViewInit(): void {
    const links = document.querySelectorAll('.ir-link1');
    links.forEach(link => {
      link.addEventListener('click',()=>{
        const offcanvasElement = document.querySelector('.offcanvas');
        const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (offcanvasInstance) {
          offcanvasInstance.hide();
        }
      })
    })
  }
  
  

}
