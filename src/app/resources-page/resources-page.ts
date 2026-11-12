
import {
  afterNextRender,
  Component,
  ElementRef,
  inject,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-resources-page',
  standalone: true,
  templateUrl: './resources-page.html',
  styleUrl: './resources-page.css'
})
export class ResourcesPageComponent implements OnDestroy {

  private readonly elementRef = inject(ElementRef<HTMLElement>);

  private observer?: IntersectionObserver;


  // RESOURCE DESTINATIONS
  readonly resourceCards = [
    {
      number: '01',
      category: 'INSIGHTS & UPDATES',
      title: 'Blog & Insights',
      description:
        'Explore practical perspectives and updates around accounting, bookkeeping, payroll, compliance, and financial operations.',
      action: 'Explore Articles',
      href: '/resources/blog',
      status: 'EXPLORE',
      type: 'active',
      visual: 'blog'
    },
    {
      number: '02',
      category: 'PRACTICAL TOOLS',
      title: 'Checklists & Tools',
      description:
        'Use structured checklists to organize recurring accounting activities, month-end closing, payroll preparation, and financial reviews.',
      action: 'Browse Checklists',
      href: '/resources/checklists',
      status: 'AVAILABLE',
      type: 'active',
      visual: 'checklists'
    },
    {
      number: '03',
      category: 'KNOWLEDGE LIBRARY',
      title: 'Ebooks & Guides',
      description:
        'A collection of practical guides and downloadable resources for businesses and accounting professionals.',
      action: 'Coming Soon',
      href: '',
      status: 'COMING SOON',
      type: 'coming-soon',
      visual: 'ebooks'
    },
    {
      number: '04',
      category: 'CLIENT EXPERIENCES',
      title: 'Testimonials',
      description:
        'Discover feedback and experiences that reflect the way we collaborate, communicate, and support our clients.',
      action: 'View Experiences',
      href: '/resources/testimonials',
      status: 'EXPLORE',
      type: 'active',
      visual: 'testimonials'
    }
  ];


  // CHECKLIST TOPICS ALREADY AVAILABLE
  readonly checklistTopics = [
    {
      number: '01',
      title: 'Monthly Bookkeeping',
      description:
        'Organize recurring bookkeeping activities and financial records.'
    },
    {
      number: '02',
      title: 'Month-End Closing',
      description:
        'Structure reconciliations, closing tasks, and reporting preparation.'
    },
    {
      number: '03',
      title: 'Payroll Preparation',
      description:
        'Keep payroll-related information and processing tasks organized.'
    },
    {
      number: '04',
      title: 'Accounts Payable & Receivable',
      description:
        'Review invoice workflows, outstanding balances, and reconciliations.'
    },
    {
      number: '05',
      title: 'Tax Readiness',
      description:
        'Arrange financial records and supporting information for tax work.'
    },
    {
      number: '06',
      title: 'Budgeting & Forecasting',
      description:
        'Organize inputs and review activities for financial planning.'
    }
  ];


  // WHO CAN USE THE RESOURCES
  readonly audiences = [
    {
      number: '01',
      title: 'Business Owners',
      description:
        'Find useful tools and information to help organize business finance activities and recurring processes.'
    },
    {
      number: '02',
      title: 'Finance Teams',
      description:
        'Use structured references to support bookkeeping, payroll, reconciliations, and reporting workflows.'
    },
    {
      number: '03',
      title: 'Accounting Professionals',
      description:
        'Explore practical resources relevant to accounting operations, client work, and process organization.'
    }
  ];


  // SSR-SAFE SCROLL REVEAL
  constructor() {
    afterNextRender(() => {

      const host = this.elementRef.nativeElement as HTMLElement;

      const page = host.querySelector(
        '.resources-page'
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
          threshold: 0.12,
          rootMargin: '0px 0px -40px 0px'
        }
      );

      revealItems.forEach((item: HTMLElement) => {
        this.observer?.observe(item);
      });

    });
  }


  // SMOOTH SCROLL TO A SECTION
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
