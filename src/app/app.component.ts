import { Component,  OnInit, inject, PLATFORM_ID } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environments';

import { isPlatformBrowser } from '@angular/common';
import { getAnalytics, setUserId } from 'firebase/analytics';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SeoService } from './services/seo/seo.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    NavComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  phone = environment.phone;
  title = 'Marci';

  private platformId = inject(PLATFORM_ID);
constructor(
    private router: Router,
    private seo: SeoService
  ) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((event: any) => {
        const canonicalUrl = environment.baseUrl + event.urlAfterRedirects;
        const url = canonicalUrl;
        this.seo.setCanonical(url);
        this.seo.applyNoIndex();
        this.seo.applyRobots();
      });
  }
  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return; // evita errores SSR

    let userId = localStorage.getItem('user_id');
    if (!userId) {
      userId = crypto.randomUUID();
      localStorage.setItem('user_id', userId);
    }

    const analytics = getAnalytics();
    setUserId(analytics, userId);
  }
}
