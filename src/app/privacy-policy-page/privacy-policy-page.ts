import {
  afterNextRender,
  Component,
  ElementRef,
  inject,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-privacy-policy-page',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy-page.html',
  styleUrl: './privacy-policy-page.css'
})
export class PrivacyPolicyPageComponent implements OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => this.initializeScrollReveal());
  }

  private initializeScrollReveal(): void {
    const page = this.host.nativeElement.querySelector('.privacy-page') as HTMLElement | null;
    if (!page) return;

    const elements = page.querySelectorAll<HTMLElement>('.scroll-reveal');
    if (!elements.length) return;

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
    }, { threshold: 0.06, rootMargin: '0px 0px -25px 0px' });

    elements.forEach(element => this.observer?.observe(element));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
