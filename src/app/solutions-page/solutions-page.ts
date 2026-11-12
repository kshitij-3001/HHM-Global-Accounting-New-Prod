import {
  afterNextRender,
  Component,
  ElementRef,
  inject,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-solutions-page',
  standalone: true,
  imports: [],
  templateUrl: './solutions-page.html',
  styleUrl: './solutions-page.css'
})
export class SolutionsPageComponent implements OnDestroy {
  private readonly host =
    inject<ElementRef<HTMLElement>>(ElementRef);

  private observer?: IntersectionObserver;
  private isDestroyed = false;

  constructor() {
    afterNextRender(() => {
      this.initializeScrollReveal();
    });
  }

  private initializeScrollReveal(): void {
    if (this.isDestroyed) {
      return;
    }

    const page = this.host.nativeElement.querySelector(
      '.solutions-page'
    ) as HTMLElement | null;

    if (!page) {
      return;
    }

    const elements = Array.from(
      page.querySelectorAll<HTMLElement>('.scroll-reveal')
    );

    if (elements.length === 0) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach(element => {
        element.classList.add('is-visible');
      });
      return;
    }

    page.classList.add('reveal-ready');

    this.observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    elements.forEach(element => {
      this.observer?.observe(element);
    });
  }

  ngOnDestroy(): void {
    this.isDestroyed = true;
    this.observer?.disconnect();
  }
}