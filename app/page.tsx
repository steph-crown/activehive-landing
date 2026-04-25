import { LandingPage } from "@/components/landing-page";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ActiveHive",
  url: "https://activehive.com",
  logo: "https://activehive.com/images/logo.svg",
  description:
    "Nigeria's #1 gym management platform. Manage members, classes, staff, and payments from a single dashboard.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+234-938-8338",
    contactType: "customer service",
    email: "mail@activehive.com",
    availableLanguage: "English",
  },
  areaServed: "NG",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ActiveHive",
  url: "https://activehive.com",
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ActiveHive",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "All-in-one gym management software for Nigerian gym owners. Features include member management, class scheduling, staff management, multi-location support, and analytics.",
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "49",
      priceCurrency: "NGN",
    },
    {
      "@type": "Offer",
      name: "Professional",
      price: "99",
      priceCurrency: "NGN",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the free trial work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can start with a 14-day free trial with full access to all features. No credit card required. Cancel anytime during the trial period with no charges.",
      },
    },
    {
      "@type": "Question",
      name: "Can I manage multiple gym locations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! ActiveHive supports multiple locations. The Professional plan includes up to 3 locations, and the Enterprise plan offers unlimited locations with advanced multi-location management features.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept all major credit cards (Visa, MasterCard, American Express) and ACH transfers for Enterprise plans. All payments are processed securely through our encrypted payment gateway.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We use enterprise-grade encryption, regular security audits, and comply with industry standards. Your data is backed up daily and stored in secure, redundant data centers.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my subscription anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your access will continue until the end of your current billing period.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer training for my staff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We provide comprehensive onboarding, video tutorials, documentation, and live training sessions. Enterprise customers also receive dedicated training sessions with our team.",
      },
    },
    {
      "@type": "Question",
      name: "Can I integrate with other software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ActiveHive offers integrations with popular fitness apps, payment processors, and accounting software. Enterprise plans include custom integration development based on your specific needs.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of support do you provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All plans include email support. Professional plans get priority support with faster response times. Enterprise customers receive 24/7 phone support and a dedicated account manager.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LandingPage />
    </>
  );
}
