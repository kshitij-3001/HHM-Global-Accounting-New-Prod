import {
  afterNextRender,
  Component,
  ElementRef,
  inject,
  OnDestroy
} from '@angular/core';

interface IndustryItem {
  number: string;
  name: string;
  description: string;
  symbol: string;
  isCta?: boolean;
}

@Component({
  selector: 'app-industries-page',
  standalone: true,
  imports: [],
  templateUrl: './industries-page.html',
  styleUrl: './industries-page.css'
})
export class IndustriesPageComponent implements OnDestroy {
  private readonly host =
    inject<ElementRef<HTMLElement>>(ElementRef);

  private observer?: IntersectionObserver;
  private isDestroyed = false;

  protected readonly industries: IndustryItem[] = [
    {
      number: '01',
      name: 'Real Estate & Property Management',
      description:
        'Property-level bookkeeping, reconciliations and financial reporting support.',
      symbol: '⌂'
    },
    {
      number: '02',
      name: 'Hospitality & Restaurants',
      description:
        'Restaurant accounting, food-cost tracking and operational reporting.',
      symbol: '♨'
    },
    {
      number: '03',
      name: 'Pharmaceuticals, Healthcare & Wellness',
      description:
        'Organized financial records, reconciliations and reporting support for healthcare and wellness businesses.',
      symbol: '⚕'
    },
    {
      number: '04',
      name: 'SaaS & Technology',
      description:
        'Financial reporting, reconciliations and accounting support for growing technology businesses.',
      symbol: '▣'
    },
    {
      number: '05',
      name: 'Retail & E-commerce',
      description:
        'Transaction tracking, inventory-related records and cash-flow reporting support.',
      symbol: '◇'
    },
    {
      number: '06',
      name: 'FMCG & Manufacturing',
      description:
        'Ledger management, inventory-related records and financial reporting support.',
      symbol: '▤'
    },
    {
      number: '07',
      name: 'CPA & Accounting Firms',
      description:
        'Extended team capacity with bookkeeping, payroll and tax-season workload support.',
      symbol: '▥'
    },
    {
      number: '08',
      name: 'Professional Services & Consultancy',
      description:
        'Reliable accounting operations, reconciliations and reporting support for service-led businesses.',
      symbol: '▰'
    },
    {
      number: '09',
      name: 'Education & EdTech',
      description:
        'Structured bookkeeping, financial reporting and operational accounting support.',
      symbol: '⌑'
    },
    {
      number: '10',
      name: 'Consumer Packaged Goods',
      description:
        'Accounting and reporting support for consumer-product businesses and their operations.',
      symbol: '⬡'
    },
    {
      number: '11',
      name: 'Technology & IT Services',
      description:
        'Flexible accounting support for IT service providers and technology-led operations.',
      symbol: '▦'
    },
    {
      number: '12',
      name: 'Have a Different Industry?',
      description:
        'Tell us about your business and discuss a support model suited to your requirements.',
      symbol: '+',
      isCta: true
    }
  ];

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
      '.industries-page'
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
        threshold: 0.06,
        rootMargin: '0px 0px -25px 0px'
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