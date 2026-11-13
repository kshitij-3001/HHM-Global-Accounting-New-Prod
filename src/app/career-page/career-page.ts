
import {
  afterNextRender,
  Component,
  ElementRef,
  inject,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-career-page',
  standalone: true,
  templateUrl: './career-page.html',
  styleUrl: './career-page.css'
})
export class CareerPageComponent implements OnDestroy {

  private readonly elementRef = inject(ElementRef<HTMLElement>);

  private observer?: IntersectionObserver;

  // GENERAL ENQUIRY EMAIL
  readonly applicationEmail = 'info@hhmconsultancyservices.com';

  // REPLACE THIS WITH YOUR ACTUAL GOOGLE FORM LINK
  readonly applicationFormUrl = 'https://forms.gle/KjsyR4KKUuQATkSt5';

  // HHM OFFERS REMOTE POSITIONS ONLY
  readonly workMode = '100% Remote – Work From Home';


  // =====================================
  // CURRENT OPEN POSITIONS
  // Add confirmed vacancies here.
  // All positions must be remote.
  // =====================================

  readonly openPositions: {
    title: string;
    department: string;
    experience: string;
    employmentType: string;
    location: string;
    shift: string;
    description: string;
    responsibilities: string[];
  }[] = [];


  // =====================================
  // CAREER AREAS
  // =====================================

  readonly careerAreas = [
    {
      number: '01',
      code: 'FINANCE / ACCOUNTS',
      title: 'Accounting & Bookkeeping',
      description:
        'Contribute to bookkeeping, reconciliations, month-end closing, financial reporting, and accounting operations.',
      skills: [
        'Accounting fundamentals',
        'Reconciliations',
        'Financial reporting'
      ]
    },
    {
      number: '02',
      code: 'PAYROLL / OPERATIONS',
      title: 'Payroll & Compliance',
      description:
        'Support payroll operations, employee-related records, payroll reporting, and associated compliance workflows.',
      skills: [
        'Payroll processing',
        'Attention to detail',
        'Process coordination'
      ]
    },
    {
      number: '03',
      code: 'DATA / TECHNOLOGY',
      title: 'Finance & Technology',
      description:
        'Work across financial data, reporting, systems, software integrations, and technology-enabled business processes.',
      skills: [
        'Data analysis',
        'Accounting systems',
        'Problem solving'
      ]
    },
    {
      number: '04',
      code: 'BUSINESS / SUPPORT',
      title: 'Business & Operations',
      description:
        'Contribute to business development, client coordination, internal operations, and related support functions.',
      skills: [
        'Communication',
        'Coordination',
        'Professional development'
      ]
    }
  ];


  // =====================================
  // WHAT WE VALUE
  // =====================================

  readonly values = [
    {
      number: '01',
      title: 'Ownership',
      description:
        'Take responsibility for assigned work, follow through on commitments, and maintain accountability.'
    },
    {
      number: '02',
      title: 'Attention to Detail',
      description:
        'Approach financial information, operational tasks, and deliverables with care and accuracy.'
    },
    {
      number: '03',
      title: 'Continuous Learning',
      description:
        'Stay curious, build new skills, and develop familiarity with evolving tools and work processes.'
    },
    {
      number: '04',
      title: 'Collaboration',
      description:
        'Work constructively with colleagues and contribute to clear communication and coordinated delivery.'
    }
  ];


  // =====================================
  // HIRING PROCESS
  // =====================================

  readonly hiringSteps = [
    {
      number: '01',
      title: 'Submit Your Application',
      description:
        'Complete our Google application form and provide your resume and relevant information.'
    },
    {
      number: '02',
      title: 'Application Review',
      description:
        'Our recruitment team reviews your experience, skills, and alignment with the role requirements.'
    },
    {
      number: '03',
      title: 'Discussion & Assessment',
      description:
        'Shortlisted candidates may be invited for an interview or a role-related assessment.'
    },
    {
      number: '04',
      title: 'Next Steps',
      description:
        'Selected candidates receive further information about the role, compensation, shift, documentation, and onboarding.'
    }
  ];


  // =====================================
  // CAREER FAQ
  // =====================================

  readonly faqs = [
    {
      question:
        'Are all positions at HHM Global Accounting remote?',
      answer:
        'Yes. HHM Global Accounting offers Work From Home opportunities only. We do not offer office-based or hybrid vacancies. Specific remote working requirements and eligibility will be mentioned in each job listing.'
    },
    {
      question:
        'What kinds of roles does HHM Global Accounting hire for?',
      answer:
        'Opportunities may arise across accounting and bookkeeping, payroll, finance and technology, business development, and internal operations. Each vacancy has its own responsibilities and eligibility requirements.'
    },
    {
      question:
        'Are there specific shift timings?',
      answer:
        'Shift timings depend on the role and the market or client operations it supports. The applicable working hours will be mentioned in the individual job description.'
    },
    {
      question:
        'How can I apply for a vacancy?',
      answer:
        'Click the Apply Now button on the relevant vacancy and complete the Google Form. Please provide accurate details and upload your latest resume where requested.'
    },
    {
      question:
        'Can I apply if there is no suitable vacancy listed?',
      answer:
        'Yes. You can submit your profile through our Google Form and indicate your area of interest. We may consider your details for relevant future remote opportunities, subject to our recruitment requirements.'
    },
    {
      question:
        'What happens after I submit the application form?',
      answer:
        'Our recruitment team reviews applications against the requirements of the relevant position. Shortlisted candidates may be contacted regarding interviews, assessments, and further recruitment steps.'
    }
  ];


  // =====================================
  // SSR-SAFE SCROLL REVEAL
  // =====================================

  constructor() {
    afterNextRender(() => {

      const host = this.elementRef.nativeElement as HTMLElement;

      const page = host.querySelector(
        '.career-page'
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


  // =====================================
  // SMOOTH SCROLL
  // =====================================

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


  // =====================================
  // CLEANUP
  // =====================================

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

}
