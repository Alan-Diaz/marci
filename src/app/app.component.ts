import { Component } from '@angular/core';
import { HeadComponent } from './head/head.component';
import { NavComponent } from './nav/nav.component';
import { PreFooterComponent } from './pre-footer/pre-footer.component';
import { ServicesMktComponent } from './services-mkt/services-mkt.component';
import { ValuesComponent } from './values/values.component';
import { FooterComponent } from './footer/footer.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { environment } from '../environments/environments';
@Component({
  selector: 'app-root',
  imports: [
    HeadComponent,
    NavComponent,
    PreFooterComponent,
    ServicesMktComponent,
    ValuesComponent,
    FooterComponent,
    WorkflowComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  phone = environment.phone;
  title = 'Marci';
}
