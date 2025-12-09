import { Component } from '@angular/core';
import { environment } from '../../environments/environments';
@Component({
  selector: 'app-pre-footer',
  imports: [],
  templateUrl: './pre-footer.component.html',
  styleUrl: './pre-footer.component.css'
})
export class PreFooterComponent {

  phone =environment.phone;
}
