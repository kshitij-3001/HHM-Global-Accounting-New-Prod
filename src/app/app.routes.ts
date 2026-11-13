import { Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page';
import { ServicesPageComponent } from './services-page/services-page';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'services/accounting-bookkeeping',
    loadComponent: () =>
      import('./accounting-bookkeeping-page/accounting-bookkeeping-page').then(
        (module) => module.AccountingBookkeepingPageComponent,
      ),
  },
  {
    path: 'services/taxation',
    loadComponent: () =>
      import('./taxation-page/taxation-page').then((m) => m.TaxationPageComponent),
  },
  {
    path: 'services/payroll-management',
    loadComponent: () =>
      import('./payroll-management-page/payroll-management-page').then(
        (m) => m.PayrollManagementPageComponent,
      ),
  },
  {
    path: 'services',
    component: ServicesPageComponent,
  },
  {
    path: 'solutions/sole-practitioners',
    loadComponent: () =>
      import('./sole-practitioners-page/sole-practitioners-page').then(
        (m) => m.SolePractitionersPageComponent,
      ),
  },
  {
    path: 'solutions/mid-size-accounting-tax-firms',
    loadComponent: () =>
      import('./mid-size-accounting-tax-firm-page/mid-size-accounting-tax-firm-page').then(
        (m) => m.MidSizeAccountingTaxFirmPageComponent,
      ),
  },
  {
    path: 'hiring-options',
    loadComponent: () =>
      import('./hiring-options-page/hiring-options-page').then((m) => m.HiringOptionsPageComponent),
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./about-us-page/about-us-page').then((m) => m.AboutUsPageComponent),
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./privacy-policy-page/privacy-policy-page').then((m) => m.PrivacyPolicyPageComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact-page/contact-page').then((m) => m.ContactPageComponent),
  },
  {
    path: 'resources/blog',
    loadComponent: () => import('./blog-page/blog-page').then((m) => m.BlogPageComponent),
  },
  {
    path: 'resources/checklists',
    loadComponent: () =>
      import('./checklists-page/checklists-page').then((m) => m.ChecklistsPageComponent),
  },
  {
    path: 'resources/testimonials',
    loadComponent: () =>
      import('./testimonials-page/testimonials-page').then((m) => m.TestimonialsPageComponent),
  },
  {
    path: 'faq',
    loadComponent: () => import('./faq-page/faq-page').then((m) => m.FaqPageComponent),
  },
  {
    path: 'solutions',
    loadComponent: () =>
      import('./solutions-page/solutions-page').then((m) => m.SolutionsPageComponent),
  },
  {
    path: 'industries',
    loadComponent: () =>
      import('./industries-page/industries-page').then((m) => m.IndustriesPageComponent),
  },
  {
    path: 'services/financial-analysis',
    loadComponent: () =>
      import('./financial-analysis-page/financial-analysis-page').then(
        (m) => m.FinancialAnalysisPageComponent,
      ),
  },
  {
    path: 'services/ap-ar',
    loadComponent: () =>
      import('./ap-ar-management-page/ap-ar-management-page').then(
        (m) => m.ApArManagementPageComponent,
      ),
  },
  {
    path: 'solutions/cpa-firms',
    loadComponent: () =>
      import('./cpa-accounting-firms-page/cpa-accounting-firms-page').then(
        (m) => m.CpaAccountingFirmsPageComponent,
      ),
  },
  {
    path: 'solutions/growing-companies',
    loadComponent: () =>
      import('./growing-companies-page/growing-companies-page').then(
        (m) => m.GrowingCompaniesPageComponent,
      ),
  },
  {
    path: 'technology',
    loadComponent: () =>
      import('./technology-page/technology-page').then((m) => m.TechnologyPageComponent),
  },
  {
    path: 'resources',
    loadComponent: () =>
      import('./resources-page/resources-page').then((m) => m.ResourcesPageComponent),
  },
  {
    path: 'terms',
    loadComponent: () => import('./terms-page/terms-page').then((m) => m.TermsPageComponent),
  },
  {
    path: 'resources/careers',
    loadComponent: () => import('./career-page/career-page').then((m) => m.CareerPageComponent),
  },
  {
    path: 'finops-ai',
    loadComponent: () =>
      import('./finops-ai-page/finops-ai-page').then((m) => m.FinopsAiPageComponent),
  },
];
