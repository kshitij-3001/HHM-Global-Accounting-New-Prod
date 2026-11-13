import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
  dropdownOnly?: boolean;
};

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly isMenuOpen = signal(false);

  protected readonly navItems: NavItem[] = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Services',
      href: '/services',
      children: [
        {
          label: 'Accounting and Bookkeeping',
          href: '/services/accounting-bookkeeping',
        },
        {
          label: 'Taxation',
          href: '/services/taxation',
        },
        {
          label: 'Payroll Management',
          href: '/services/payroll-management',
        },
        {
          label: 'View All Services',
          href: '/services',
        },
      ],
    },
    {
      label: 'Solutions',
      href: '/solutions',
      children: [
        {
          label: 'Sole Practioners',
          href: '/solutions/sole-practitioners',
        },
        {
          label: 'Mid Size Accounting/Tax Firm',
          href: '/solutions/mid-size-accounting-tax-firms',
        },
        {
          label: 'CPA & Accounting Firms',
          href: '/solutions/cpa-firms',
        },
      ],
    },
    {
      label: 'Hiring Options',
      href: '/hiring-options',
    },
    {
      label: 'About Us',
      href: '/about-us',
      children: [
        {
          label: 'Privacy Policy',
          href: '/privacy-policy',
        },
      ],
    },
    {
      label: 'Contact',
      href: '/contact',
    },
    {
      label: 'Resources',
      href: '/resources',
      children: [
        {
          label: 'Blog',
          href: '/resources/blog',
        },
        {
          label: 'Checklists',
          href: '/resources/checklists',
        },
        {
          label: 'Ebooks',
          href: '/resources#ebooks',
        },
        {
          label: 'Testimonials',
          href: '/resources/testimonials',
        },
        {
          label: 'Career',
          href: '/resources/careers',
        },
      ],
    },
    {
      label: 'FAQ',
      href: '/faq',
    },
    {
      label: 'FinOps AI',
      href: '/finops-ai',
    },
  ];

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
  protected readonly openDropdown = signal<string | null>(null);

  protected toggleDropdown(label: string): void {
    this.openDropdown.update((current) => (current === label ? null : label));
  }
}
