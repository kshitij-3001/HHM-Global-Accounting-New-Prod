
import {
  afterNextRender,
  Component,
  ElementRef,
  inject,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-technology-page',
  standalone: true,
  templateUrl: './technology-page.html',
  styleUrl: './technology-page.css'
})
export class TechnologyPageComponent implements OnDestroy {

  private readonly elementRef = inject(ElementRef<HTMLElement>);

  private observer?: IntersectionObserver;


  // MAIN PLATFORMS FEATURED ON THE HOMEPAGE
  readonly mainPlatforms = [
    {
      initials: 'QB',
      name: 'QuickBooks',
      category: 'ACCOUNTING',
      tone: 'green'
    },
    {
      initials: 'X',
      name: 'Xero',
      category: 'ACCOUNTING',
      tone: 'blue'
    },
    {
      initials: 'NS',
      name: 'NetSuite',
      category: 'ERP',
      tone: 'white'
    },
    {
      initials: 'S',
      name: 'Sage Intacct',
      category: 'ACCOUNTING',
      tone: 'green'
    },
    {
      initials: 'Z',
      name: 'Zoho',
      category: 'BUSINESS',
      tone: 'coral'
    },
    {
      initials: 'B',
      name: 'Buildium',
      category: 'PROPERTY',
      tone: 'lime'
    },
    {
      initials: 'A',
      name: 'AppFolio',
      category: 'PROPERTY',
      tone: 'blue'
    },
    {
      initials: 'Y',
      name: 'Yardi',
      category: 'PROPERTY',
      tone: 'lime'
    },
    {
      initials: 'G',
      name: 'Gusto',
      category: 'PAYROLL',
      tone: 'coral'
    },
    {
      initials: 'ADP',
      name: 'Payroll',
      category: 'PAYROLL',
      tone: 'coral'
    },
    {
      initials: 'R',
      name: 'Rippling',
      category: 'PAYROLL',
      tone: 'pink'
    },
    {
      initials: 'P',
      name: 'Paychex',
      category: 'PAYROLL',
      tone: 'blue'
    }
  ];


  // ADDITIONAL PLATFORMS FROM THE HOMEPAGE
  readonly additionalPlatforms = [
    'Excel',
    'ResMan',
    'Rent Manager',
    'Paylocity',
    'Deel',
    'Heartland',
    'Every.io',
    'Bill.com',
    'Expensify',
    'Google Sheets'
  ];


  // TECHNOLOGY CATEGORIES
  readonly technologyCategories = [
    {
      number: '01',
      code: 'ACC / ERP',
      title: 'Accounting & ERP Systems',
      description:
        'Work within established accounting and enterprise systems to support bookkeeping, reconciliations, financial records, and reporting.',
      platforms: [
        'QuickBooks',
        'Xero',
        'NetSuite',
        'Sage Intacct',
        'Zoho'
      ],
      icon: '01'
    },
    {
      number: '02',
      code: 'PROPERTY',
      title: 'Property Management Platforms',
      description:
        'Support property-related financial workflows, records, reporting, and accounting activities across property management systems.',
      platforms: [
        'Buildium',
        'AppFolio',
        'Yardi',
        'ResMan',
        'Rent Manager'
      ],
      icon: '02'
    },
    {
      number: '03',
      code: 'PAY / HR',
      title: 'Payroll & Workforce Platforms',
      description:
        'Support payroll-related processing, employee information workflows, reconciliations, and reporting through relevant platforms.',
      platforms: [
        'Gusto',
        'ADP',
        'Rippling',
        'Paychex',
        'Paylocity',
        'Deel',
        'Heartland'
      ],
      icon: '03'
    },
    {
      number: '04',
      code: 'DATA / OPS',
      title: 'Productivity & Expense Tools',
      description:
        'Use spreadsheets, expense applications, and billing tools to support organized financial information and operational workflows.',
      platforms: [
        'Excel',
        'Google Sheets',
        'Bill.com',
        'Expensify',
        'Every.io'
      ],
      icon: '04'
    }
  ];


  // TECHNOLOGY-RELATED SUPPORT
  readonly capabilities = [
    {
      number: '01',
      code: 'SYSTEM SETUP',
      title: 'Implementation & Configuration Support',
      description:
        'Assist with setting up accounting and business systems according to the agreed operational requirements.',
      points: [
        'Initial system setup assistance',
        'Chart of accounts support',
        'Workflow and process configuration',
        'Documentation of system procedures'
      ]
    },
    {
      number: '02',
      code: 'DATA MOVEMENT',
      title: 'Data Migration & Validation',
      description:
        'Support the movement and validation of financial information when businesses change systems or organize existing records.',
      points: [
        'Data preparation and mapping',
        'Opening balance support',
        'Data validation and reconciliation',
        'Migration review assistance'
      ]
    },
    {
      number: '03',
      code: 'CONNECTED SYSTEMS',
      title: 'Integration & Workflow Support',
      description:
        'Assist with connected workflows across business applications to reduce repetitive activities and improve information flow.',
      points: [
        'Integration requirement assessment',
        'Workflow coordination',
        'Data flow validation',
        'Process documentation'
      ]
    },
    {
      number: '04',
      code: 'FINANCIAL CONTROL',
      title: 'Reconciliation & Data Accuracy',
      description:
        'Help maintain consistency between accounting records, supporting systems, and financial information.',
      points: [
        'Account and transaction reconciliation',
        'Source-to-ledger comparison',
        'Exception identification',
        'Supporting documentation'
      ]
    },
    {
      number: '05',
      code: 'REPORTING',
      title: 'Reporting & Spreadsheet Support',
      description:
        'Organize financial information into structured reports and working files that support regular business review.',
      points: [
        'Spreadsheet management',
        'Financial data consolidation',
        'Management reporting support',
        'Recurring report preparation'
      ]
    },
    {
      number: '06',
      code: 'ONGOING OPERATIONS',
      title: 'Ongoing System & Process Support',
      description:
        'Provide operational assistance for agreed recurring activities within the systems used by your business.',
      points: [
        'Recurring system-based activities',
        'Process coordination',
        'Issue documentation and follow-up',
        'Support for changing workflows'
      ]
    }
  ];


  // OUR TECHNOLOGY WORKFLOW
  readonly workflowSteps = [
    {
      number: '01',
      title: 'Understand Your Systems',
      description:
        'Review the software currently used, business processes, access arrangements, and operational requirements.'
    },
    {
      number: '02',
      title: 'Map the Requirements',
      description:
        'Identify the relevant workflows, data points, responsibilities, and expected deliverables.'
    },
    {
      number: '03',
      title: 'Configure & Coordinate',
      description:
        'Support agreed implementation, setup, integration, migration, or recurring system-based activities.'
    },
    {
      number: '04',
      title: 'Validate the Information',
      description:
        'Review data consistency, reconcile relevant records, and follow the agreed quality-control process.'
    },
    {
      number: '05',
      title: 'Support the Workflow',
      description:
        'Provide ongoing operational assistance and documentation according to the engagement scope.'
    }
  ];


  // FREQUENTLY ASKED QUESTIONS
  readonly faqs = [
    {
      question: 'Which accounting and business platforms does HHM work with?',
      answer:
        'The platforms displayed on this page reflect the software and tools relevant to our service activities. The specific platform, version, access requirements, and scope of support are reviewed before an engagement is confirmed.'
    },
    {
      question: 'Can HHM work within our existing accounting software?',
      answer:
        'Yes. Where the system and access arrangements are suitable, our team can work within your existing software and follow the agreed processes rather than requiring you to change platforms.'
    },
    {
      question: 'Do you provide software implementation support?',
      answer:
        'We can discuss implementation-related assistance such as initial setup, workflow configuration, data preparation, validation, and process documentation. The exact implementation scope is agreed for each project.'
    },
    {
      question: 'Can you help when we migrate from one accounting system to another?',
      answer:
        'We can support agreed migration activities, including data preparation, mapping, opening balance checks, validation, and reconciliation. The final migration approach depends on the systems and project requirements.'
    },
    {
      question: 'Can multiple systems be used within the same engagement?',
      answer:
        'Yes. We can review workflows involving multiple platforms and define the responsibilities, information flows, and deliverables that fall within the agreed scope.'
    },
    {
      question: 'Does HHM provide official software licenses or resell platforms?',
      answer:
        'This page describes technology-related operational support. Software licensing, subscriptions, and vendor arrangements should be confirmed separately with the relevant software provider.'
    },
    {
      question: 'Can HHM assist with recurring system-based accounting activities?',
      answer:
        'Yes. Depending on the agreed scope, support may include recurring bookkeeping, payroll-related activities, reconciliations, reporting, and other work performed through the relevant business systems.'
    }
  ];


  // SSR-SAFE SCROLL REVEAL
  constructor() {
    afterNextRender(() => {

      const host = this.elementRef.nativeElement as HTMLElement;

      const page = host.querySelector(
        '.technology-page'
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


  // SMOOTH SCROLL
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
