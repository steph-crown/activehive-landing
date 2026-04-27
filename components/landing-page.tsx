"use client";

import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  IconBarbell,
  IconBell,
  IconBrandAndroid,
  IconBrandApple,
  IconCalendar,
  IconChartBar,
  IconCheck,
  IconChevronRight,
  IconCreditCard,
  IconDeviceMobile,
  IconMapPin,
  IconQrcode,
  IconShield,
  IconStar,
  IconUsers,
  IconX,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { APP_URL } from "@/lib/urls";

const painPoints = [
  {
    icon: IconChartBar,
    title: "Member Records in Excel Sheets",
    description:
      "Every day, someone's record is missing, outdated, or just wrong — and you won't find out until it becomes a problem.",
  },
  {
    icon: IconBell,
    title: "Subscriptions Expire Unnoticed",
    description:
      "Without automated reminders, members forget to renew. By the time you notice, they've already joined the gym down the road.",
  },
  {
    icon: IconCreditCard,
    title: "No Clear View of Your Revenue",
    description:
      "Payments come in via cash, transfer, and card. Nobody has a complete picture of what was actually collected this month.",
  },
  {
    icon: IconCalendar,
    title: "Paper Attendance Register at Reception",
    description:
      "Members sign for each other, staff falsify entries, and there's no way to audit it. Fraud is invisible until money is gone.",
  },
  {
    icon: IconMapPin,
    title: "Multiple Locations, Zero Visibility",
    description:
      "Each branch runs differently. Staff call you constantly. You have no single view of what's happening across your business.",
  },
  {
    icon: IconUsers,
    title: "No Accountability for Staff",
    description:
      "No visibility into trainer assignments, check-in logs, or daily operations. Accountability runs on trust alone.",
  },
];

const features = [
  {
    icon: IconUsers,
    title: "Member Management",
    description:
      "Complete profiles with payment history, subscription status, and attendance records. Know who's active, at risk, or about to churn — before it costs you.",
  },
  {
    icon: IconQrcode,
    title: "QR Code Check-In",
    description:
      "Every member gets a unique QR code. They scan at the door — entry is logged instantly. No paper registers, no disputes, no fraud. Full attendance history always visible.",
  },
  {
    icon: IconCalendar,
    title: "Class Scheduling & Booking",
    description:
      "Create classes, assign trainers, and set capacity limits. Members book online. You see real-time attendance without picking up the phone.",
  },
  {
    icon: IconShield,
    title: "Subscription & Payments",
    description:
      "Track every membership plan, renewal date, and payment in one place. Automated reminders go out before subscriptions expire — you stop chasing, members start renewing.",
  },
  {
    icon: IconBarbell,
    title: "Staff & Trainer Management",
    description:
      "Set role-based access for staff, manage trainer assignments, and track daily activity. Your team handles what they need to — you see everything they do.",
  },
  {
    icon: IconChartBar,
    title: "Analytics & Marketing",
    description:
      "Real-time revenue dashboards, member growth reports, and built-in SMS and email campaigns. Re-engage inactive members, send promos, and know exactly if your gym is making money.",
  },
];

const benefits = [
  "Know which members are active, expiring, or overdue at a glance",
  "QR check-in replaces your paper register — permanently",
  "Automated renewal reminders slash your churn rate",
  "Real-time revenue dashboard — finally know if you're profitable",
  "Manage multiple gym locations from a single screen",
  "Free onboarding support and dedicated local customer service",
];

const gymGoerFeatures = [
  {
    icon: IconDeviceMobile,
    label: "Book fitness classes instantly from your phone",
  },
  { icon: IconQrcode, label: "Scan QR code for seamless gym check-in" },
  { icon: IconBell, label: "Get smart reminders so you never miss a class" },
  { icon: IconBarbell, label: "Track your attendance and fitness progress" },
  { icon: IconStar, label: "View and renew your membership with ease" },
  { icon: IconUsers, label: "Connect with trainers and your gym community" },
];

const statsData = [
  { num: "500+", label: "Active Gyms in Nigeria" },
  { num: "50K+", label: "Members Managed" },
  { num: "₦2B+", label: "Payments Processed" },
  { num: "10hrs+", label: "Saved Per Gym Per Week" },
];

const testimonials = [
  {
    quote:
      "Before ActiveHive, I tracked 200+ members in Excel and sent renewal reminders via WhatsApp. My renewal rate jumped from 41% to 79% in 3 months — without doing anything manually.",
    name: "Chukwuemeka Obi",
    gym: "FitZone Lagos",
    location: "Victoria Island, Lagos",
    initials: "CO",
  },
  {
    quote:
      "I run 3 gym locations in Lagos and Abuja. ActiveHive gives me one view of all three. My managers are now accountable — I see exactly what's happening at each branch from my phone.",
    name: "Amaka Adeleke",
    gym: "FlexFit Gyms",
    location: "Abuja · 3 Locations",
    initials: "AA",
  },
  {
    quote:
      "I tried two other apps — neither was built for Nigeria. ActiveHive just works. The QR check-in alone caught two staff members marking fake attendance. That paid for the subscription 10 times over.",
    name: "Babatunde Adekunle",
    gym: "IronHouse Gym",
    location: "Ikeja, Lagos",
    initials: "BA",
  },
];

const comparisonBefore = [
  "Excel sheets and notebooks for member records",
  "WhatsApp messages to remind members about renewals",
  "Paper register — no audit trail, easy to manipulate",
  "Guessing monthly revenue from cash and transfers",
  "Calling each branch to know what's happening",
  "No visibility into staff or trainer performance",
];

const comparisonAfter = [
  "Digital profiles with full history and subscription status",
  "Automated SMS and email renewal reminders",
  "QR check-in — every entry logged, nothing manipulated",
  "Live revenue dashboard updated in real time",
  "Full multi-location visibility from a single dashboard",
  "Role-based access with complete activity logs",
];

const pricingPlans = [
  {
    name: "Starter",
    price: "₦49",
    period: "per month",
    description: "Perfect for small gyms just getting started",
    features: [
      "Up to 100 members",
      "Single location",
      "Member management",
      "Class scheduling",
      "QR code check-in",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "₦99",
    period: "per month",
    description: "For growing gyms that need more power",
    features: [
      "Up to 500 members",
      "Up to 3 locations",
      "Advanced analytics",
      "Staff & trainer management",
      "SMS & email marketing",
      "Automated renewal reminders",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large gym chains and franchises",
    features: [
      "Unlimited members",
      "Unlimited locations",
      "White-label options",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom development",
      "API access",
      "SLA guarantee",
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "Is ActiveHive built specifically for Nigerian gyms?",
    answer:
      "Yes — completely. ActiveHive was designed from the ground up for Nigerian gym owners. Naira pricing, local payment methods, and support that understands how gyms work here. We're not a foreign app adapted for the market — we are the Nigerian gym management platform.",
  },
  {
    question: "How does the free trial work?",
    answer:
      "You get 14 days of full access to every feature — no credit card required. Set up your gym, add your members, and see exactly how ActiveHive works for your business. If it's not for you, cancel anytime. No charges, no questions.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most gym owners are fully set up within a day. Our onboarding team guides you through importing members, configuring plans, and setting up locations. If you can use WhatsApp, you can use ActiveHive.",
  },
  {
    question: "Can I manage multiple gym locations?",
    answer:
      "Yes. The Professional plan supports up to 3 locations. Enterprise supports unlimited locations with per-location settings, staff access control, individual reporting, and a consolidated view across your entire business.",
  },
  {
    question: "What payment methods do you support?",
    answer:
      "We support card payments (Visa, Mastercard), bank transfers, and USSD. Your gym members pay via Paystack-powered checkout. Enterprise plans also support custom billing arrangements.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use enterprise-grade encryption and daily automated backups. Role-based access means staff only see what they need to. Your member data and financial records are protected.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes — no contracts, no cancellation fees. Cancel anytime and your access continues until the end of your billing period. We'd rather earn your business every month than lock you in.",
  },
  {
    question: "What support do you provide?",
    answer:
      "All plans include email support. Professional plans get priority support with faster response times. Enterprise customers get 24/7 phone support and a dedicated account manager, plus onboarding calls, video tutorials, and a full help center.",
  },
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      {/* ── Nav ── */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#09090B]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
          <Logo path="/" />
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Pricing
            </a>
            <a
              href="#app"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Mobile App
            </a>
            <a
              href="#faq"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`${APP_URL}/login`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm text-white/60 transition-colors hover:text-white md:block"
            >
              Login
            </a>
            <a
              href={`${APP_URL}/signup`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img
            src="/images/gym-1-min.jpg"
            alt=""
            className="h-full w-full object-cover"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/60 via-[#09090B]/40 to-[#09090B]" />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-24 text-center md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl leading-none text-white md:text-8xl"
          >
            RUN YOUR GYM. <span className="text-primary">NOT YOUR</span>
            <br />
            SPREADSHEETS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg font-light text-white/70"
          >
            ActiveHive is Nigeria&apos;s all-in-one gym management platform.
            Track members, collect payments, schedule classes, and see your
            revenue — all from one place. Join 500+ gym owners who stopped
            guessing and started growing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2"
          >
            {[
              "QR code check-in",
              "Subscription reminders",
              "Class scheduling",
              "Revenue analytics",
              "Staff management",
              "Multi-location support",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 text-sm text-white/50"
              >
                <IconCheck size={16} className="shrink-0 text-primary" />
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={`${APP_URL}/signup`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
            >
              Start Free — 14 Days, No Card
              <IconChevronRight size={16} />
            </a>
            <a
              href={`${APP_URL}/login`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto"
            >
              Login to Dashboard
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4"
          >
            {[
              { num: "500+", label: "Gyms in Nigeria" },
              { num: "50K+", label: "Members Managed" },
              { num: "₦2B+", label: "Payments Processed" },
              { num: "14 days", label: "Free Trial" },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <p className="font-bebas text-4xl text-primary">{num}</p>
                <p className="mt-1 text-xs text-white/50">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Dashboard Preview ── */}
      <section className="bg-[#09090B] py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-10 text-center text-xs font-medium uppercase tracking-widest text-white/30">
              The platform built for growth
            </p>
            <div className="rounded-[17px] bg-gradient-to-b from-white/10 to-transparent p-px shadow-[rgba(250,190,18,0.06)_0px_32px_60px_-12px]">
              <div className="overflow-hidden rounded-[16px] bg-[#1C1C1F]">
                <div className="flex items-center gap-3 border-b border-white/5 bg-[#141414] px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-white/10" />
                    <div className="h-3 w-3 rounded-full bg-white/10" />
                    <div className="h-3 w-3 rounded-full bg-white/10" />
                  </div>
                  <div className="flex flex-1 justify-center">
                    <div className="flex h-5 w-52 items-center justify-center rounded bg-white/5 text-[10px] text-white/30">
                      app.activehive.com
                    </div>
                  </div>
                </div>
                <Image
                  src="/images/dashboard.png"
                  alt="ActiveHive gym management dashboard showing member overview, class schedule, and revenue analytics"
                  width={3340}
                  height={2100}
                  className="w-full"
                  priority
                />
              </div>
            </div>
            <div className="mx-auto mt-3 h-2 w-3/4 rounded-full bg-primary/10 blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* ── Pain Points ── */}
      <section className="relative bg-[#09090B] py-24">
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Sound Familiar?
            </span>
            <h2 className="mt-3 text-4xl text-white md:text-5xl">
              THE DAILY STRUGGLES EVERY GYM OWNER KNOWS
            </h2>
            <p className="mt-4 font-light text-white/55">
              If you&apos;re nodding, you&apos;re not alone — and there is a
              better way.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <point.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="mt-5 text-xl text-white">{point.title}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-white/50">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-white/35">
              ActiveHive was built to solve every single one of these.
            </p>
            <a
              href={`${APP_URL}/signup`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              See How It Works
              <IconChevronRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="relative bg-[#09090B] py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Platform Features
            </span>
            <h2 className="mt-3 text-4xl text-white md:text-5xl">
              EVERYTHING YOU NEED TO RUN YOUR GYM
            </h2>
            <p className="mt-4 font-light text-white/55">
              Powerful tools designed for the way Nigerian gyms actually operate
              — not adapted from a foreign product.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <feature.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="mt-5 text-xl text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-white/50">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-[#09090B] py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                Why ActiveHive
              </span>
              <h2 className="mt-3 text-4xl text-white md:text-5xl">
                THE PLATFORM GYM OWNERS TRUST
              </h2>
              <p className="mt-4 font-light text-white/55">
                Join hundreds of gym owners across Nigeria who use ActiveHive to
                run tighter operations and grow faster.
              </p>
              <ul className="mt-10 space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <IconCheck size={11} className="text-primary" />
                    </div>
                    <span className="text-sm text-white/70">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-10 flex items-center gap-4"
              >
                <a
                  href={`${APP_URL}/signup`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Create Free Account
                  <IconChevronRight size={16} />
                </a>
                <p className="text-xs text-white/35">No credit card required</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ height: "500px" }}
              >
                <img
                  src="/images/gym-3-min.jpg"
                  alt="Gym floor"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/70 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-[#09090B]/80 p-5 backdrop-blur-md">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-bebas text-3xl text-primary">500+</p>
                    <p className="mt-0.5 text-[10px] text-white/45">Gyms</p>
                  </div>
                  <div className="border-x border-white/10">
                    <p className="font-bebas text-3xl text-primary">50K+</p>
                    <p className="mt-0.5 text-[10px] text-white/45">Members</p>
                  </div>
                  <div>
                    <p className="font-bebas text-3xl text-primary">14</p>
                    <p className="mt-0.5 text-[10px] text-white/45">
                      Day Free Trial
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Band ── */}
      <section className="border-y border-white/10 bg-[#09090B] py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {statsData.map(({ num, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-bebas text-5xl text-primary md:text-6xl">
                  {num}
                </p>
                <p className="mt-2 text-xs text-white/45">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-[#09090B] py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Success Stories
            </span>
            <h2 className="mt-3 text-4xl text-white md:text-5xl">
              REAL GYMS. REAL RESULTS.
            </h2>
            <p className="mt-4 font-light text-white/55">
              Gym owners across Nigeria chose ActiveHive to stop the chaos and
              start growing.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <IconStar
                        key={j}
                        size={14}
                        className="text-primary"
                        style={{ fill: "currentColor" }}
                      />
                    ))}
                  </div>
                  <p className="flex-1 text-sm font-light leading-relaxed text-white/70">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <span className="font-bebas text-lg text-primary">
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{t.name}</p>
                      <p className="text-xs text-white/40">
                        {t.gym} · {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before / After ── */}
      <section className="bg-[#09090B] py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              The Switch
            </span>
            <h2 className="mt-3 text-4xl text-white md:text-5xl">
              WHY GYM OWNERS SWITCH TO ACTIVEHIVE
            </h2>
            <p className="mt-4 font-light text-white/55">
              Everything you&apos;re doing manually today, automated tomorrow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <p className="mb-6 text-xs font-medium uppercase tracking-widest text-white/30">
                The Old Way
              </p>
              <ul className="space-y-4">
                {comparisonBefore.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <IconX size={10} className="text-white/35" />
                    </div>
                    <span className="text-sm text-white/40">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 shadow-[rgba(250,190,18,0.06)_0px_25px_50px_-12px]">
              <p className="mb-6 text-xs font-medium uppercase tracking-widest text-primary">
                With ActiveHive
              </p>
              <ul className="space-y-4">
                {comparisonAfter.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <IconCheck size={11} className="text-primary" />
                    </div>
                    <span className="text-sm text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <a
              href={`${APP_URL}/signup`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Make the Switch Today
              <IconChevronRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── For Gym Goers + App Download ── */}
      <section id="app" className="bg-[#09090B] py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                For Gym Goers
              </span>
              <h2 className="mt-3 text-4xl text-white md:text-5xl">
                YOUR FITNESS JOURNEY,{" "}
                <span className="text-primary">UPGRADED</span>
              </h2>
              <p className="mt-4 font-light text-white/55">
                The ActiveHive mobile app gives gym members the tools to stay
                consistent, connected, and in control of their fitness.
              </p>
              <ul className="mt-8 space-y-3">
                {gymGoerFeatures.map(({ icon: Icon, label }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <span className="text-sm text-white/65">{label}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 transition-all hover:border-white/30 hover:bg-white/10"
                >
                  <IconBrandApple size={28} className="text-white" />
                  <div>
                    <p className="text-[10px] font-light text-white/45">
                      Download on the
                    </p>
                    <p className="text-sm font-medium text-white">App Store</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 transition-all hover:border-white/30 hover:bg-white/10"
                >
                  <IconBrandAndroid size={28} className="text-white" />
                  <div>
                    <p className="text-[10px] font-light text-white/45">
                      Get it on
                    </p>
                    <p className="text-sm font-medium text-white">
                      Google Play
                    </p>
                  </div>
                </a>
              </div>
              <p className="mt-4 text-xs text-white/25">
                Coming soon to iOS and Android
              </p>
            </motion.div>

            {/* Phone mockup */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <div className="relative w-64">
                <div className="rounded-[36px] border border-white/20 bg-[#1C1C1F] p-4 shadow-[0_0_80px_rgba(250,190,18,0.08)]">
                  <div className="overflow-hidden rounded-[28px] bg-[#09090B]">
                    <div className="flex items-center justify-between px-5 pt-4 pb-2">
                      <span className="text-[10px] text-white/50">9:41</span>
                      <div className="flex gap-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-white/50" />
                        <div className="h-1.5 w-1.5 rounded-full bg-white/50" />
                        <div className="h-1.5 w-1.5 rounded-full bg-white/50" />
                      </div>
                    </div>
                    <div className="px-4 pb-8 pt-2">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <p className="text-[9px] text-white/35">
                            Good morning
                          </p>
                          <p className="text-xs font-medium text-white">
                            Alex Johnson
                          </p>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                          <span className="font-bebas text-sm text-primary">
                            AJ
                          </span>
                        </div>
                      </div>
                      <div className="mb-3 rounded-xl border border-primary/20 bg-primary/10 p-3">
                        <p className="text-[8px] font-medium uppercase tracking-wide text-primary/70">
                          Membership
                        </p>
                        <p className="mt-1 text-[11px] font-medium text-white">
                          Professional Plan
                        </p>
                        <div className="mt-2 h-1 rounded-full bg-white/10">
                          <div className="h-1 w-3/4 rounded-full bg-primary" />
                        </div>
                        <p className="mt-1 text-[8px] text-white/35">
                          23 days remaining
                        </p>
                      </div>
                      <div className="mb-3">
                        <p className="mb-2 text-[8px] font-medium uppercase tracking-wide text-white/35">
                          Next Class
                        </p>
                        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-[11px] font-medium text-white">
                                Morning HIIT
                              </p>
                              <p className="text-[8px] text-white/35">
                                Today • 7:00 AM
                              </p>
                            </div>
                            <div className="rounded bg-primary/20 px-2 py-0.5 text-[8px] font-medium text-primary">
                              Booked
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { icon: IconQrcode, label: "Check In" },
                          { icon: IconCalendar, label: "Classes" },
                        ].map(({ icon: Icon, label }) => (
                          <div
                            key={label}
                            className="flex flex-col items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 py-3"
                          >
                            <Icon size={14} className="text-primary" />
                            <p className="text-[8px] text-white/45">{label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-auto mt-4 h-4 w-3/4 rounded-full bg-primary/10 blur-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="bg-[#09090B] py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Pricing
            </span>
            <h2 className="mt-3 text-4xl text-white md:text-5xl">
              SIMPLE, TRANSPARENT PRICING
            </h2>
            <p className="mt-4 font-light text-white/55">
              Choose the plan that fits your gym. Every plan starts with a
              14-day free trial — no credit card required.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2">
                    <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                      Most Popular
                    </span>
                  </div>
                )}
                <div
                  className={`relative h-full overflow-hidden rounded-2xl border p-6 transition-all ${
                    plan.popular
                      ? "border-primary/40 bg-primary/5 shadow-[rgba(250,190,18,0.1)_0px_25px_50px_-12px]"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                  )}
                  <div className="relative">
                    <h3 className="text-2xl text-white">{plan.name}</h3>
                    <p className="mt-1 text-sm font-light text-white/45">
                      {plan.description}
                    </p>
                    <div className="mt-5">
                      <span className="font-bebas text-5xl text-white">
                        {plan.price}
                      </span>
                      {plan.period !== "pricing" && (
                        <span className="ml-2 text-sm text-white/35">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <div className="my-6 border-t border-white/10" />
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                            <IconCheck size={11} className="text-primary" />
                          </div>
                          <span className="text-sm text-white/60">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`${APP_URL}/signup`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium transition-colors ${
                        plan.popular
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
                      }`}
                    >
                      Start Free Trial
                      <IconChevronRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-[#09090B] py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              FAQ
            </span>
            <h2 className="mt-3 text-4xl text-white md:text-5xl">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="mt-4 font-light text-white/55">
              Everything you need to know about ActiveHive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-white/10"
                >
                  <AccordionTrigger className="text-left text-sm font-medium text-white hover:text-primary hover:no-underline [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-light text-white/50">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#09090B] py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-primary/10 via-transparent to-transparent p-12 text-center md:p-16">
              <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
              <div className="relative">
                <h2 className="text-4xl text-white md:text-5xl">
                  YOUR GYM WON&apos;T RUN ITSELF.
                  <br />
                  <span className="text-primary">
                    ACTIVEHIVE GETS PRETTY CLOSE.
                  </span>
                </h2>
                <p className="mx-auto mt-6 max-w-lg font-light text-white/55">
                  Start your 14-day free trial. No credit card. No commitment.
                  10 minutes to set up — and you&apos;re running.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href={`${APP_URL}/signup`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Get Started Free
                    <IconChevronRight size={16} />
                  </a>
                  <p className="text-xs text-white/35">
                    Questions?{" "}
                    <a
                      href="mailto:mail@activehive.com"
                      className="text-white/55 transition-colors hover:text-primary"
                    >
                      mail@activehive.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 bg-[#09090B] py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <Logo path="/" />
              <p className="mt-4 text-sm font-light text-white/35">
                The all-in-one platform for gym management in Nigeria.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-white/35">
                Product
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {["Features", "Pricing", "Updates"].map((item) => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="text-white/50 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-white/35">
                Company
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {["About", "Blog", "Careers"].map((item) => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="text-white/50 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-white/35">
                Support
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {["Help Center", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="text-white/50 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="tel:+2349388338"
                    className="text-white/50 transition-colors hover:text-white"
                  >
                    +234 938 8338
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:mail@activehive.com"
                    className="text-white/50 transition-colors hover:text-white"
                  >
                    mail@activehive.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-center">
            <p className="text-xs text-white/25">
              © {new Date().getFullYear()} ActiveHive. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
