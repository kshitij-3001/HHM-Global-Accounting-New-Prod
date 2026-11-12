import {
  Component,
  DestroyRef,
  PLATFORM_ID,
  afterNextRender,
  inject
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPageComponent {

  private readonly platformId =
    inject(PLATFORM_ID);

  private readonly destroyRef =
    inject(DestroyRef);

  private revealObserver:
    IntersectionObserver | null = null;

  private counterObserver:
    IntersectionObserver | null = null;

  private counterStarted = false;


  constructor() {

    /*
     * afterNextRender runs only in the browser
     * after Angular has finished rendering.
     *
     * This is safer for SSR/hydration than
     * calling browser APIs directly from the
     * component lifecycle.
     */
    afterNextRender(() => {

      if (
        !isPlatformBrowser(
          this.platformId
        )
      ) {
        return;
      }

      this.initializeAnimations();

    });

  }


  private initializeAnimations(): void {

    /*
     * Give Angular one browser task to ensure
     * all DOM nodes are available.
     */
    window.setTimeout(() => {

      this.setupScrollReveal();

      this.setupEfficiencyCounter();

    }, 50);


  }


  /*
   * =========================================
   * SCROLL REVEAL
   * =========================================
   */
  private setupScrollReveal(): void {

    const elements =
      document.querySelectorAll<HTMLElement>(
        '.scroll-reveal'
      );


    if (!elements.length) {
      return;
    }


    /*
     * If IntersectionObserver is not available,
     * make everything visible.
     */
    if (
      !('IntersectionObserver' in window)
    ) {

      elements.forEach(
        element => {

          element.classList.add(
            'is-visible'
          );

        }
      );

      return;
    }


    this.revealObserver =
      new IntersectionObserver(

        entries => {

          entries.forEach(
            entry => {

              if (
                !entry.isIntersecting
              ) {
                return;
              }


              const element =
                entry.target as HTMLElement;


              /*
               * Trigger the CSS animation.
               */
              element.classList.add(
                'is-visible'
              );


              /*
               * We only need to reveal
               * each element once.
               */
              this.revealObserver
                ?.unobserve(element);

            }
          );

        },

        {
          threshold: 0.12,

          rootMargin:
            '0px 0px -80px 0px'
        }

      );


    elements.forEach(
      element => {

        this.revealObserver
          ?.observe(element);

      }
    );

  }


  /*
   * =========================================
   * 0 → 99% EFFICIENCY COUNTER
   * =========================================
   */
  private setupEfficiencyCounter(): void {

    if (this.counterStarted) {
      return;
    }


    const counter =
      document.querySelector<HTMLElement>(
        '.efficiency-counter'
      );


    const ring =
      document.querySelector<SVGCircleElement>(
        '.efficiency-ring-progress'
      );


    if (
      !counter ||
      !ring
    ) {
      return;
    }


    if (
      !('IntersectionObserver' in window)
    ) {

      this.counterStarted = true;

      this.runEfficiencyCounter(
        counter,
        ring
      );

      return;
    }


    this.counterObserver =
      new IntersectionObserver(

        entries => {

          const entry =
            entries[0];


          if (
            entry?.isIntersecting &&
            !this.counterStarted
          ) {

            this.counterStarted = true;

            this.runEfficiencyCounter(
              counter,
              ring
            );


            this.counterObserver
              ?.disconnect();

          }

        },

        {
          threshold: 0.3
        }

      );


    this.counterObserver
      .observe(counter);

  }


  /*
   * =========================================
   * COUNTER ANIMATION
   * =========================================
   */
  private runEfficiencyCounter(
    counter: HTMLElement,
    ring: SVGCircleElement
  ): void {

    const target = 99;

    const duration = 2200;

    const circumference = 452;

    const start =
      performance.now();


    ring.style.strokeDasharray =
      `${circumference}`;


    ring.style.strokeDashoffset =
      `${circumference}`;


    const animate =
      (currentTime: number): void => {

        const elapsed =
          currentTime - start;


        const progress =
          Math.min(
            elapsed / duration,
            1
          );


        const eased =
          1 -
          Math.pow(
            1 - progress,
            3
          );


        const value =
          Math.round(
            target * eased
          );


        counter.textContent =
          `${value}%`;


        const offset =
          circumference -
          (
            circumference *
            value /
            100
          );


        ring.style.strokeDashoffset =
          `${offset}`;


        if (
          progress < 1
        ) {

          window.requestAnimationFrame(
            animate
          );

        } else {

          counter.textContent =
            `${target}%`;

          ring.style.strokeDashoffset =
            `${circumference * 0.01}`;

        }

      };


    window.requestAnimationFrame(
      animate
    );

  }


  /*
   * =========================================
   * CLEANUP
   * =========================================
   */
  ngOnDestroy(): void {

    this.revealObserver
      ?.disconnect();

    this.counterObserver
      ?.disconnect();

  }

}