import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSection {
  id: string;
  number: string;
  title: string;
  description: string;
  items: FaqItem[];
}

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [],
  templateUrl: './faq-page.html',
  styleUrl: './faq-page.css'
})
export class FaqPageComponent {
  protected readonly faqSections: FaqSection[] = [
    {
      id: 'general',
      number: '01',
      title: 'General',
      description: 'Learn more about HHM and the businesses we support.',
      items: [
        {
          question: 'What does HHM Global Accounting do?',
          answer:
            'HHM Global Accounting provides accounting, bookkeeping, payroll, tax support, financial reporting, and related finance operations services. We also support agreed system integration, implementation and project requirements.'
        },
        {
          question: 'Who can work with HHM?',
          answer:
            'HHM works with businesses, accounting firms and professional practices that need additional accounting or finance operations capacity. The scope and working arrangement are discussed according to each organisation’s requirements.'
        },
        {
          question: 'Does HHM support international businesses?',
          answer:
            'HHM supports clients across multiple markets, including the US, UK, UAE, Canada, Australia and other locations. The services available for a particular engagement depend on the relevant jurisdiction, requirements and agreed scope.'
        },
        {
          question: 'Can a small business or sole practitioner work with HHM?',
          answer:
            'Yes. A business or sole practitioner can discuss its workload and support requirements with HHM. The proposed arrangement can be considered according to the type and volume of work involved.'
        }
      ]
    },
    {
      id: 'services',
      number: '02',
      title: 'Services',
      description: 'Understand the types of accounting and finance support available.',
      items: [
        {
          question: 'What accounting and bookkeeping activities can HHM support?',
          answer:
            'Support can include transaction recording, reconciliations, ledger reporting, accounts payable and receivable, month-end and year-end closing, and agreed financial reporting activities.'
        },
        {
          question: 'Does HHM provide payroll support?',
          answer:
            'HHM offers payroll management support, including payroll processing and related payroll compliance and filing activities within the agreed scope. Applicable requirements and responsibilities are reviewed for the relevant jurisdiction.'
        },
        {
          question: 'Does HHM offer tax preparation and compliance support?',
          answer:
            'HHM offers tax preparation, planning and compliance support. The exact services, responsibilities and applicable requirements should be confirmed for each jurisdiction and engagement before work begins.'
        },
        {
          question: 'Can HHM help with financial reporting and month-end closing?',
          answer:
            'Yes. Financial reporting, reconciliations, month-end and year-end closing, and related activities can be discussed as part of an engagement. The reporting format, frequency and deliverables are agreed based on your requirements.'
        },
        {
          question: 'Can HHM assist with accounting software integration or implementation?',
          answer:
            'HHM can discuss system integration and implementation requirements. The proposed work depends on the systems involved, the required data flows, the project scope and the technical access available.'
        }
      ]
    },
    {
      id: 'engagement',
      number: '03',
      title: 'Engagement & Pricing',
      description: 'Explore support arrangements and how pricing is determined.',
      items: [
        {
          question: 'What support options does HHM offer?',
          answer:
            'The available capacity options include hourly support, a part-time dedicated professional and a full-time dedicated professional. The suitable option depends on workload, required capacity and continuity needs. See the Hiring Options page for indicative brochure rates.'
        },
        {
          question: 'What is the difference between an Extended Team and an Outsourcing Partner?',
          answer:
            'With an Extended Team arrangement, HHM support works alongside your existing team. With an Outsourcing Partner arrangement, HHM can take responsibility for agreed activities or functions based on the defined scope. Project-Based Support is intended for a specific requirement or set of deliverables.'
        },
        {
          question: 'How is the engagement price determined?',
          answer:
            'Pricing can depend on the agreed scope, number of entities, transaction volumes, level of support and other requirements. Any indicative rate should be confirmed with HHM before an engagement is finalised.'
        },
        {
          question: 'Is backup professional support available?',
          answer:
            'Backup professional availability is described in HHM’s engagement options. The applicable arrangement and its scope should be confirmed in the proposal or engagement terms.'
        },
        {
          question: 'Can the level of support change later?',
          answer:
            'Requirements can be reviewed as business needs evolve. Any changes to responsibilities, capacity, engagement structure or pricing should be discussed and agreed between both parties.'
        }
      ]
    },
    {
      id: 'working-together',
      number: '04',
      title: 'Working Together',
      description: 'Find out how to discuss requirements and plan an engagement.',
      items: [
        {
          question: 'How do we get started with HHM?',
          answer:
            'Start by submitting an enquiry through the Contact page or emailing info@hhmconsultancyservices.com. Share the type of work, your business requirements and the support you are considering. HHM can then discuss the scope and potential next steps.'
        },
        {
          question: 'Can HHM work with our existing employees or accounting team?',
          answer:
            'Yes. The Extended Team model is intended for collaboration alongside an existing team. Responsibilities, communication, workflow ownership and review arrangements should be discussed before work starts.'
        },
        {
          question: 'How are software access and working processes agreed?',
          answer:
            'The systems involved, access requirements, responsibilities, handover information and communication arrangements should be reviewed during onboarding and agreed before the relevant work begins.'
        },
        {
          question: 'How can we contact HHM with a specific question?',
          answer:
            'You can use the Contact page enquiry form or email info@hhmconsultancyservices.com. Include enough detail about your requirement for the team to understand the nature of your enquiry.'
        }
      ]
    }
  ];
}