
import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css'
})
export class ServicesPageComponent {

  /*
   * Explicitly type ElementRef so nativeElement is an HTMLElement
   * instead of any. This fixes TS2347 and TS7006.
   */
  private readonly host =
    inject<ElementRef<HTMLElement>>(ElementRef);

  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  private revealObserver: IntersectionObserver | null = null;


  constructor() {

    /*
     * Initialize browser animations only after Angular renders.
     * This avoids accessing browser APIs during server rendering.
     */
    afterNextRender(() => {

      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      this.setupScrollReveal();

    });


    /*
     * Clean up the observer when navigating away from this page.
     */
    this.destroyRef.onDestroy(() => {

      this.revealObserver?.disconnect();
      this.revealObserver = null;

    });

  }


  /*
   * =========================================
   * SCROLL REVEAL ANIMATIONS
   * =========================================
   */
  private setupScrollReveal(): void {

    const root =
      this.host.nativeElement.querySelector<HTMLElement>(
        '.services-page'
      );

    if (!root) {
      return;
    }


    const elements =
      root.querySelectorAll<HTMLElement>(
        '.scroll-reveal'
      );

    if (elements.length === 0) {
      return;
    }


    /*
     * Respect the user's reduced-motion preference.
     * Keep all content visible without scroll animation.
     */
    const reducedMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

    if (reducedMotion) {

      elements.forEach((element: HTMLElement) => {
        element.classList.add('is-visible');
      });

      return;

    }


    /*
     * Enable reveal styles only in the browser.
     * Server-rendered content therefore remains visible.
     */
    root.classList.add('reveal-ready');


    /*
     * Fallback for browsers without IntersectionObserver.
     */
    if (!('IntersectionObserver' in window)) {

      elements.forEach((element: HTMLElement) => {
        element.classList.add('is-visible');
      });

      return;

    }


    /*
     * Observe elements and reveal them as they enter
     * the viewport.
     */
    this.revealObserver = new IntersectionObserver(

      (entries: IntersectionObserverEntry[]) => {

        entries.forEach((entry: IntersectionObserverEntry) => {

          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;

          element.classList.add('is-visible');

          /*
           * Each element animates only once.
           */
          this.revealObserver?.unobserve(element);

        });

      },

      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
      }

    );


    elements.forEach((element: HTMLElement) => {
      this.revealObserver?.observe(element);
    });

  }

}
