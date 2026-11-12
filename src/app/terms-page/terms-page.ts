
import {
  afterNextRender,
  Component,
  ElementRef,
  inject,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-terms-page',
  standalone: true,
  templateUrl: './terms-page.html',
  styleUrl: './terms-page.css'
})
export class TermsPageComponent implements OnDestroy {

  private readonly elementRef = inject(ElementRef);

  private observer?: IntersectionObserver;

  readonly contents = [
    { id: 'acceptance', label: 'Acceptance of Terms' },
    { id: 'about-website', label: 'About This Website' },
    { id: 'services', label: 'Services & Engagements' },
    { id: 'website-use', label: 'Permitted Website Use' },
    { id: 'enquiries', label: 'Enquiries & Communications' },
    { id: 'confidentiality', label: 'Confidentiality & Information' },
    { id: 'intellectual-property', label: 'Intellectual Property' },
    { id: 'third-party', label: 'Third-Party Platforms & Links' },
    { id: 'accuracy', label: 'Accuracy & Availability' },
    { id: 'disclaimer', label: 'Disclaimers' },
    { id: 'liability', label: 'Limitation of Liability' },
    { id: 'indemnity', label: 'User Responsibilities' },
    { id: 'privacy', label: 'Privacy & Data Protection' },
    { id: 'governing-law', label: 'Governing Law & Disputes' },
    { id: 'changes', label: 'Changes to These Terms' },
    { id: 'general', label: 'General Provisions' },
    { id: 'contact', label: 'Contact Information' }
  ];


  // SSR-SAFE SCROLL REVEAL
  constructor() {
    afterNextRender(() => {

      const host = this.elementRef.nativeElement as HTMLElement;

      const page = host.querySelector(
        '.terms-page'
      ) as HTMLElement | null;

      if (!page) {
        return;
      }

      const revealItems = Array.from(
        page.querySelectorAll('.scroll-reveal')
      ) as HTMLElement[];

      page.classList.add('reveal-ready');

      if (typeof IntersectionObserver === 'undefined') {
        revealItems.forEach((item: HTMLElement) => {
          item.classList.add('is-visible');
        });

        return;
      }

      this.observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {

          entries.forEach((entry: IntersectionObserverEntry) => {

            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              this.observer?.unobserve(entry.target);
            }

          });

        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -35px 0px'
        }
      );

      revealItems.forEach((item: HTMLElement) => {
        this.observer?.observe(item);
      });

    });
  }


  // SCROLL TO A TERMS SECTION
  scrollToSection(event: Event, sectionId: string): void {

    event.preventDefault();

    const host = this.elementRef.nativeElement as HTMLElement;

    const section = host.querySelector(
      `#${sectionId}`
    ) as HTMLElement | null;

    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  }


  // CLEANUP
  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

}
