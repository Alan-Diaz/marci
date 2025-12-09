import { Component } from '@angular/core';
import { environment } from '../../environments/environments';
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  phone =environment.phone;
}
