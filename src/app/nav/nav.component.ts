import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environments';
@Component({
  selector: 'app-nav',
  imports: [],
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



}
