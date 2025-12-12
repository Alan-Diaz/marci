import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { environment } from '../../../../environments/environments';
@Component({
  selector: 'app-head',
  imports: [],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent implements OnInit {

  phone =environment.phone;

  constructor() {}

  ngOnInit(): void {
  }

	showNavigationArrows = false;
	showNavigationIndicators = false;
}
