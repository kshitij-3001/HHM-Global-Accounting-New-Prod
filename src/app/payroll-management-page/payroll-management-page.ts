import {
  afterNextRender,
  Component,
  ElementRef,
  inject,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-payroll-management-page',
  standalone: true,
  imports: [],
  templateUrl: './payroll-management-page.html',
  styleUrl: './payroll-management-page.css'
})
export class PayrollManagementPageComponent implements OnDestroy {

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
      '.payroll-page'
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