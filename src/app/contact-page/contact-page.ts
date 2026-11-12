import {
  afterNextRender,
  Component,
  ElementRef,
  inject,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css'
})
export class ContactPageComponent implements OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  protected formStatus = '';

  constructor() {
    afterNextRender(() => {
      this.initializeScrollReveal();
    });
  }

  private initializeScrollReveal(): void {
    const page = this.host.nativeElement.querySelector(
      '.contact-page'
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
        threshold: 0.08,
        rootMargin: '0px 0px -25px 0px'
      }
    );

    elements.forEach(element => {
      this.observer?.observe(element);
    });
  }

  protected submitEnquiry(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);

    const fullName = String(data.get('fullName') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const company = String(data.get('company') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const service = String(data.get('service') ?? '').trim();
    const supportModel = String(data.get('supportModel') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const subject = `Website enquiry from ${fullName}`;

    const body = [
      'New website enquiry for HHM Global Accounting',
      '',
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Company: ${company || 'Not provided'}`,
      `Phone: ${phone || 'Not provided'}`,
      `Service of interest: ${service || 'Not specified'}`,
      `Preferred support model: ${supportModel || 'Not specified'}`,
      '',
      'Enquiry details:',
      message
    ].join('\n');

    const mailtoUrl =
      `mailto:info@hhmconsultancyservices.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    this.formStatus =
      'Your email application should open with your enquiry details. ' +
      'Review the email and press Send to submit your enquiry to HHM.';

    // This runs only when a visitor submits the form in the browser.
    window.location.href = mailtoUrl;
  }

  ngOnDestroy(): void {
    // Safe during SSR: no direct access to the browser's window object.
    this.observer?.disconnect();
  }
}