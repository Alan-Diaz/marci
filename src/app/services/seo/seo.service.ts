import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class SeoService {

  constructor(@Inject(DOCUMENT) private document: Document, private meta: Meta) {}

  setCanonical(url: string): void {
    let link: HTMLLinkElement | null =
      this.document.querySelector("link[rel='canonical']");

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  removeCanonical(): void {
    const link = this.document.querySelector("link[rel='canonical']");
    if (link) {
      link.remove();
    }
  }
  applyNoIndex(): void {
    if (!environment.noIndex) return;

    const existing = this.meta.getTag("name='robots'");

    if (!existing) {
      this.meta.addTag({
        name: 'robots',
        content: 'noindex, nofollow'
      });
    }
  }
  applyRobots(): void {
    if (environment.noIndex) {
      // Solo agrega si no existe
      if (!this.meta.getTag("name='robots'")) {
        this.meta.addTag({
          name: 'robots',
          content: 'noindex, nofollow'
        });
      }
    } else {
      // Opcional: eliminar si existía por error
      const tag = this.meta.getTag("name='robots'");
      if (tag) this.meta.removeTagElement(tag);
    }
  }
}
