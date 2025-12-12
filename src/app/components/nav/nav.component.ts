import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environments';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',	
})
export class NavComponent implements OnInit {

  phone =environment.phone;
  
  constructor(
    
	) {
	}


  ngOnInit(): void {

  }
debugClick(e: Event, target: string) {
  e.preventDefault();
  console.log('debugClick fired for', target);
  // para probar navegación manual (si querés)
  // this.router.navigateByUrl(target);
}


}
