import { Component } from '@angular/core';
import { environment } from '../../environments/environments';
@Component({
  selector: 'app-services-mkt',
  imports: [],
  templateUrl: './services-mkt.component.html',
  styleUrl: './services-mkt.component.css'
})
export class ServicesMktComponent {

  phone =environment.phone;
}
