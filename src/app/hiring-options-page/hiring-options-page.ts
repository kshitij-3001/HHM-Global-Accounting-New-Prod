import {
  afterNextRender,
  Component,
  ElementRef,
  inject,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-hiring-options-page',
  standalone: true,
  imports: [],
  templateUrl: './hiring-options-page.html',
  styleUrl: './hiring-options-page.css'
})
export class HiringOptionsPageComponent implements OnDestroy {
  private readonly host =
    inject<ElementRef<HTMLElement>>(ElementRef);

  private revealElements: HTMLElement[] = [];
  private isDestroyed = false;
  private initialized = false;
  private listenersAttached = false;

  constructor() {
    afterNextRender(() => {
      this.initializeScrollReveal();
    });
  }

  private readonly onViewportChange = (): void => {
    this.revealVisibleElements();
  };

  private initializeScrollReveal(): void {
    // Browser APIs must not run during server-side rendering.
    if (
      this.isDestroyed ||
      typeof window === 'undefined' ||
      this.initialized
    ) {
      return;
    }

    const page = this.host.nativeElement.querySelector(
      '.hiring-page'
    ) as HTMLElement | null;

    if (!page) {
      console.error(
        'Hiring page: .hiring-page container not found.'
      );
      return;
    }

    this.revealElements = Array.from(
      page.querySelectorAll<HTMLElement>('.scroll-reveal')
    );

    if (this.revealElements.length === 0) {
      console.warn(
        'Hiring page: No .scroll-reveal elements found.'
      );
      return;
    }

    this.initialized = true;
    page.classList.add('reveal-ready');

    // Reveal elements that are already visible.
    this.revealVisibleElements();

    window.addEventListener(
      'scroll',
      this.onViewportChange,
      { passive: true }
    );

    window.addEventListener(
      'resize',
      this.onViewportChange,
      { passive: true }
    );

    this.listenersAttached = true;

    window.requestAnimationFrame(() => {
      this.revealVisibleElements();
    });
  }

  private revealVisibleElements(): void {
    if (
      this.isDestroyed ||
      typeof window === 'undefined' ||
      this.revealElements.length === 0
    ) {
      return;
    }

    const viewportHeight = window.innerHeight;

    for (const element of this.revealElements) {
      if (element.classList.contains('is-visible')) {
        continue;
      }

      const rect = element.getBoundingClientRect();

      const isVisible =
        rect.top < viewportHeight * 0.92 &&
        rect.bottom > 0;

      if (isVisible) {
        element.classList.add('is-visible');
      }
    }
  }

  ngOnDestroy(): void {
    this.isDestroyed = true;

    // SSR has no window and never attaches these listeners.
    if (
      this.listenersAttached &&
      typeof window !== 'undefined'
    ) {
      window.removeEventListener(
        'scroll',
        this.onViewportChange
      );

      window.removeEventListener(
        'resize',
        this.onViewportChange
      );

      this.listenersAttached = false;
    }
  }
}