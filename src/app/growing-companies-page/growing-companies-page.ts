
import {
  afterNextRender,
  Component,
  ElementRef,
  inject,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-growing-companies-page',
  standalone: true,
  templateUrl: './growing-companies-page.html',
  styleUrl: './growing-companies-page.css'
})
export class GrowingCompaniesPageComponent implements OnDestroy {

  private readonly elementRef = inject(ElementRef<HTMLElement>);

  private observer?: IntersectionObserver;


  // BUSINESS CHALLENGES
  readonly challenges = [
    {
      number: '01',
      title: 'Increasing Transaction Volumes',
      description:
        'As operations expand, maintaining accurate books and keeping up with daily financial transactions can become more demanding.'
    },
    {
      number: '02',
      title: 'Limited Internal Resources',
      description:
        'Growing finance workloads can put pressure on existing employees and make additional hiring necessary.'
    },
    {
      number: '03',
      title: 'Delayed Financial Reporting',
      description:
        'Inconsistent processes and delayed reconciliations can make it difficult to get timely financial information.'
    },
    {
      number: '04',
      title: 'Payroll Administration',
      description:
        'A growing workforce brings additional payroll processing, employee record management, and reporting requirements.'
    },
    {
      number: '05',
      title: 'Cash Flow Visibility',
      description:
        'Businesses need reliable financial information to monitor cash flow, understand expenses, and plan ahead.'
    },
    {
      number: '06',
      title: 'Disconnected Systems',
      description:
        'Using multiple systems without coordinated workflows can create repetitive work and difficulties in maintaining consistent records.'
    }
  ];


  // FINANCIAL AND OPERATIONAL CAPABILITIES
  readonly capabilities = [
    {
      number: '01',
      category: 'CORE ACCOUNTING',
      title: 'Accounting & Bookkeeping',
      description:
        'Maintain organized and accurate financial records through transaction recording, account reconciliations, ledger maintenance, and regular bookkeeping support.',
      points: [
        'Transaction recording and categorization',
        'Bank and account reconciliations',
        'General ledger maintenance',
        'Month-end and year-end closing support'
      ]
    },
    {
      number: '02',
      category: 'PEOPLE OPERATIONS',
      title: 'Payroll Management',
      description:
        'Support payroll operations with organized processing, employee-related records, payroll reporting, and recurring administrative activities.',
      points: [
        'Payroll processing support',
        'Employee payroll records',
        'Payroll reconciliations',
        'Payroll reports and year-end support'
      ]
    },
    {
      number: '03',
      category: 'FINANCIAL VISIBILITY',
      title: 'Financial Reporting',
      description:
        'Turn accounting records into structured financial reports that help management understand business performance and financial position.',
      points: [
        'Monthly financial statements',
        'Management reporting',
        'Expense and revenue analysis',
        'KPI and performance reporting'
      ]
    },
    {
      number: '04',
      category: 'PLANNING & CONTROL',
      title: 'Budgeting & Forecasting',
      description:
        'Support financial planning with structured budgets, cash flow monitoring, forecasting, and comparisons between planned and actual performance.',
      points: [
        'Budget preparation support',
        'Cash flow monitoring',
        'Financial forecasting',
        'Budget versus actual analysis'
      ]
    },
    {
      number: '05',
      category: 'WORKING CAPITAL',
      title: 'AP & AR Management',
      description:
        'Organize payable and receivable workflows to support invoice processing, tracking, reconciliations, and outstanding balance visibility.',
      points: [
        'Vendor invoice processing',
        'Customer invoice and receivable tracking',
        'AP and AR reconciliations',
        'Aging and outstanding reports'
      ]
    },
    {
      number: '06',
      category: 'SYSTEMS & WORKFLOWS',
      title: 'Software Integration & Implementation',
      description:
        'Support accounting system setup, software integrations, and workflow improvements to help maintain connected financial operations.',
      points: [
        'Accounting software implementation support',
        'System integration assistance',
        'Data migration and reconciliation support',
        'Workflow documentation and improvement'
      ]
    }
  ];


  // BUSINESS GROWTH STAGES
  readonly growthStages = [
    {
      number: '01',
      stage: 'Early Growth',
      title: 'Build a reliable foundation',
      description:
        'Establish consistent bookkeeping, reconciliations, payroll processes, and organized financial records.',
      services: [
        'Bookkeeping',
        'Reconciliations',
        'Payroll support'
      ]
    },
    {
      number: '02',
      stage: 'Expanding Operations',
      title: 'Bring structure to growing workloads',
      description:
        'Support increasing transaction volumes, regular financial reporting, AP and AR activities, and month-end closing.',
      services: [
        'Financial reporting',
        'AP & AR',
        'Month-end closing'
      ]
    },
    {
      number: '03',
      stage: 'Scaling Business',
      title: 'Improve financial visibility',
      description:
        'Introduce structured budgeting, forecasting, cash flow monitoring, and management reporting support.',
      services: [
        'Budgeting',
        'Forecasting',
        'KPI reporting'
      ]
    },
    {
      number: '04',
      stage: 'Established Operations',
      title: 'Support more complex requirements',
      description:
        'Assist with multi-entity accounting requirements, financial analysis, process improvements, and recurring reporting.',
      services: [
        'Multi-entity support',
        'Financial analysis',
        'Process improvement'
      ]
    }
  ];


  // ENGAGEMENT MODELS
  readonly engagementModels = [
    {
      number: '01',
      title: 'Extended Team',
      description:
        'Add dedicated accounting and finance resources who work alongside your internal team and follow your established processes.',
      features: [
        'Dedicated resource support',
        'Coordination with internal teams',
        'Work aligned with your workflows'
      ]
    },
    {
      number: '02',
      title: 'Outsourcing Partner',
      description:
        'Assign agreed accounting, payroll, or financial operations to HHM Global Accounting through a structured service arrangement.',
      features: [
        'Defined scope and responsibilities',
        'Recurring process management',
        'Review and reporting workflows'
      ],
      featured: true
    },
    {
      number: '03',
      title: 'Project-Based Support',
      description:
        'Engage our team for specific assignments, backlogs, system implementations, reconciliations, or reporting projects.',
      features: [
        'Defined project scope',
        'Specific deliverables',
        'Flexible project engagement'
      ]
    }
  ];


  // DELIVERY PROCESS
  readonly deliverySteps = [
    {
      number: '01',
      title: 'Understand Requirements',
      description:
        'Understand your business operations, accounting systems, existing processes, and support requirements.'
    },
    {
      number: '02',
      title: 'Define Scope & Resources',
      description:
        'Agree on responsibilities, deliverables, communication channels, timelines, and the right resource arrangement.'
    },
    {
      number: '03',
      title: 'Execute & Prepare',
      description:
        'Complete the assigned accounting, payroll, reconciliation, and reporting activities according to the agreed process.'
    },
    {
      number: '04',
      title: 'Review & Quality Checks',
      description:
        'Deliverables move through the defined review hierarchy: Preparer → Reviewer → Manager sign-off.'
    },
    {
      number: '05',
      title: 'Reporting & Delivery',
      description:
        'Share reviewed deliverables and agreed reports with the client for review, approval, or further action.'
    }
  ];


  // WHY HHM GLOBAL ACCOUNTING
  readonly benefits = [
    {
      number: '01',
      title: 'Flexible Resource Support',
      description:
        'Choose an engagement approach that aligns with your current workload and operational requirements.'
    },
    {
      number: '02',
      title: 'Structured Review Process',
      description:
        'Use defined preparation and review responsibilities before deliverables are shared with your team.'
    },
    {
      number: '03',
      title: 'Connected Finance Functions',
      description:
        'Coordinate accounting, payroll, reporting, and related financial activities through one service partner.'
    },
    {
      number: '04',
      title: 'Adaptable Workflows',
      description:
        'Adjust the scope of support as transaction volumes, teams, and business requirements change.'
    },
    {
      number: '05',
      title: 'Technology-Oriented Support',
      description:
        'Work with a team familiar with accounting platforms, integrations, and digital finance workflows.'
    },
    {
      number: '06',
      title: 'More Focus on Core Operations',
      description:
        'Delegate agreed finance activities so your internal team can focus on business priorities.'
    }
  ];


  // FREQUENTLY ASKED QUESTIONS
  readonly faqs = [
    {
      question:
        'What types of growing businesses does HHM Global Accounting support?',
      answer:
        'We support businesses that need assistance with accounting, bookkeeping, payroll, financial reporting, AP and AR, and related financial operations. The scope is discussed according to each business’s requirements.'
    },
    {
      question:
        'Can HHM work with our existing in-house finance team?',
      answer:
        'Yes. Our Extended Team model is designed to work alongside an existing internal team. Responsibilities and coordination arrangements can be defined before the engagement begins.'
    },
    {
      question:
        'Can we outsource only selected accounting functions?',
      answer:
        'Yes. Businesses can discuss support for selected functions such as bookkeeping, payroll, reconciliations, accounts payable, accounts receivable, or financial reporting.'
    },
    {
      question:
        'Which accounting and payroll software do you support?',
      answer:
        'Our team works with accounting and payroll platforms based on the engagement requirements. The relevant software, access arrangements, and workflow compatibility can be reviewed during the initial discussion.'
    },
    {
      question:
        'Can the engagement expand as our business grows?',
      answer:
        'The scope and resource arrangement can be reviewed as your requirements change. Any additions or changes to services, responsibilities, and fees should be mutually agreed.'
    },
    {
      question:
        'How does HHM manage the quality of deliverables?',
      answer:
        'Our delivery structure follows defined preparation and review responsibilities. The standard hierarchy is Preparer, Reviewer, and Manager sign-off before the agreed deliverables are shared with the client.'
    },
    {
      question:
        'Do you offer dedicated resources or project-based support?',
      answer:
        'Yes. Our engagement approaches include Extended Team, Outsourcing Partner, and Project-Based Support. The appropriate model depends on the scope and nature of the work.'
    }
  ];


  // SSR-SAFE SCROLL REVEAL
  constructor() {
    afterNextRender(() => {

      const host = this.elementRef.nativeElement as HTMLElement;

      const page = host.querySelector(
        '.growing-page'
      ) as HTMLElement | null;

      if (!page) {
        return;
      }

      const revealItems = Array.from(
        page.querySelectorAll('.scroll-reveal')
      ) as HTMLElement[];

      page.classList.add('reveal-ready');

      // Fallback for browsers without IntersectionObserver
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
          rootMargin: '0px 0px -45px 0px'
        }
      );

      revealItems.forEach((item: HTMLElement) => {
        this.observer?.observe(item);
      });

    });
  }


  // SMOOTH SCROLL TO PAGE SECTIONS
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
