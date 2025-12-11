import { Component } from '@angular/core';
import { HeadComponent } from '../../components/home/head/head.component';
import { PreFooterComponent } from '../../components/home/pre-footer/pre-footer.component';
import { ServicesMktComponent } from '../../components/home/services-mkt/services-mkt.component';
import { ValuesComponent } from '../../components/home/values/values.component';
import { WorkflowComponent } from '../../components/home/workflow/workflow.component';
@Component({
  selector: 'app-home',
  imports: [    
    HeadComponent,
    PreFooterComponent,
    ServicesMktComponent,
    ValuesComponent,
    WorkflowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
