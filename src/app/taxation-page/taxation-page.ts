import {
  afterNextRender,
  Component,
  ElementRef,
  inject,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-taxation-page',
  standalone: true,
  imports: [],
  templateUrl: './taxation-page.html',
  styleUrl: './taxation-page.css'
})
export class TaxationPageComponent implements OnDestroy {

  private readonly host =
    inject<ElementRef<HTMLElement>>(ElementRef);

  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      this.initializeScrollReveal();
    });
  }

  private initializeScrollReveal(): void {
    const page = this.host.nativeElement.querySelector(
      '.tax-page'
    ) as HTMLElement | null;

    if (!page) {
      return;
    }

    const elements = page.querySelectorAll('.scroll-reveal');

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      elements.forEach((element) => {
        element.classList.add('is-visible');
      });

      return;
    }

    page.classList.add('reveal-ready');

    this.observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    elements.forEach((element) => {
      this.observer?.observe(element);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}