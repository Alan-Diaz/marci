import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environments';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-nav',
  imports: [RouterLink],
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
}


}
