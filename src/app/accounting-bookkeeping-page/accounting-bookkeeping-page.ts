import {
  afterNextRender,
  Component,
  ElementRef,
  inject,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-accounting-bookkeeping-page',
  standalone: true,
  imports: [],
  templateUrl: './accounting-bookkeeping-page.html',
  styleUrl: './accounting-bookkeeping-page.css'
})
export class AccountingBookkeepingPageComponent implements OnDestroy {

  // Explicitly type the host element as HTMLElement.
  private readonly host =
    inject<ElementRef<HTMLElement>>(ElementRef);

  private observer?: IntersectionObserver;

  constructor() {
    // Runs after the component has rendered in the browser.
    afterNextRender(() => {
      this.initializeScrollReveal();
    });
  }

  private initializeScrollReveal(): void {
    const page = this.host.nativeElement.querySelector(
      '.ab-page'
    ) as HTMLElement | null;

    if (!page) {
      return;
    }

    // Find all elements that should animate into view.
    const elements = page.querySelectorAll('.scroll-reveal');

    // Show everything when reduced motion is enabled or
    // IntersectionObserver is unavailable.
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      elements.forEach((element) => {
        element.classList.add('is-visible');
      });

      return;
    }

    // Enable the scroll-reveal CSS rules.
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
    // Release the observer when leaving the page.
    this.observer?.disconnect();
  }
}