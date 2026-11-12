import {
  afterNextRender,
  Component,
  ElementRef,
  inject,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [],
  templateUrl: './about-us-page.html',
  styleUrl: './about-us-page.css'
})
export class AboutUsPageComponent implements OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => this.initializeScrollReveal());
  }

  private initializeScrollReveal(): void {
    const page = this.host.nativeElement.querySelector('.about-page') as HTMLElement | null;
    if (!page) return;

    const elements = page.querySelectorAll<HTMLElement>('.scroll-reveal');
    if (!elements.length) return;

    // afterNextRender runs in the browser; retain a safe fallback for unsupported browsers.
    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach(element => element.classList.add('is-visible'));
      return;
    }

    page.classList.add('reveal-ready');
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

    elements.forEach(element => this.observer?.observe(element));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
