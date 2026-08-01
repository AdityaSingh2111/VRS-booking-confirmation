/**
 * Page One — Booking Confirmation
 *
 * Company data, next steps, and trust badges are imported from config.
 * All sections use print-safe primitives.
 */
import React from "react";
import {
  BadgeCheck,
  CalendarDays,
  CircleUserRound,
  Headphones,
  MapPin,
  Flag,
  Wallet,
  Phone,
  Mail,
  Globe,
  Hash,
  Clock,
  Truck,
  User,
  AtSign,
  PackageCheck,
  BadgeDollarSign,
  Check,
  ShieldCheck,
  Award,
  Map,
} from "lucide-react";
import { Card, DocHeader, Field, Footer, Watermark } from "./primitives";
import { company, contact, nextSteps, heroChips, trustBadges } from "@/config/company";
import QRCode from "react-qr-code";
/** Map icon name strings → Lucide components */
const iconMap: Record<
  string,
  React.FC<React.SVGProps<SVGSVGElement> & { strokeWidth?: number }>
> = {
  BadgeDollarSign,
  Award,
  Map,
  PackageCheck,
  Headphones,
  ShieldCheck,
};

function BookingDetailItem({
  label,
  value,
  icon,
  highlight = false,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`booking-detail-item group flex min-w-0 items-center gap-2.5 py-1 ${
        highlight ? "booking-detail-highlight" : ""
      }`}
    >
      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border"
        style={{
          borderColor: highlight ? "rgb(250 136 53 / 0.32)" : "rgb(13 160 253 / 0.18)",
          color: highlight ? "var(--brand-orange)" : "var(--brand-blue)",
        }}
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[6.8px] font-medium uppercase tracking-[0.18em] text-muted-foreground/75">
          {label}
        </p>
        <p className="mt-0.5 truncate text-[12.5px] font-bold leading-none text-foreground">
          {value}
        </p>
      </div>
      {highlight && (
        <span
          className="shrink-0 rounded-sm border px-1.5 py-0.5 text-[6.8px] font-bold uppercase tracking-[0.14em]"
          style={{
            borderColor: "rgb(250 136 53 / 0.28)",
            color: "var(--brand-orange)",
          }}
        >
          ID
        </span>
      )}
    </div>
  );
}

function CustomerDetailItem({
  label,
  value,
  icon,
  prominent = false,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  prominent?: boolean;
}) {
  return (
    <div
      className={`customer-detail-item flex min-w-0 items-center gap-2.5 py-1 ${
        prominent ? "customer-detail-prominent" : ""
      }`}
    >
      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border"
        style={{
          borderColor: prominent ? "rgb(250 136 53 / 0.28)" : "rgb(13 160 253 / 0.18)",
          color: prominent ? "var(--brand-orange)" : "var(--brand-blue)",
        }}
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[6.8px] font-medium uppercase tracking-[0.18em] text-muted-foreground/75">
          {label}
        </p>
        <p className="mt-0.5 truncate text-[12.5px] font-semibold leading-none text-foreground">
          {value}
        </p>
      </div>
    </div>
  );
}

import { BookingData } from "@/types/booking";

interface PageOneProps {
  booking: BookingData;
}

export function PageOne({ booking }: PageOneProps) {
  return (
    <article className="sheet page-one mx-auto flex flex-col rounded-sm p-[15mm]">
      {/* <Watermark /> */}
      <div className="relative z-[1] flex min-h-full flex-1 flex-col">
        <DocHeader />

        {/* ── Hero ── */}
        <section className="mt-4 border-t border-hairline pt-4">
          <div
            className="relative overflow-hidden rounded-md border px-4 py-3"
            style={{
              backgroundColor: "rgb(34 197 94 / 0.055)",
              borderColor: "rgb(34 197 94 / 0.28)",
            }}
          >
            <svg
              aria-hidden="true"
              className="absolute right-3 top-1/2 h-[32mm] w-[52mm] -translate-y-1/2 opacity-[0.12]"
              fill="none"
              viewBox="0 0 190 118"
            >
              <path
                d="M25 79 C57 58 82 91 110 69 C132 52 148 56 170 39"
                stroke="var(--brand-green)"
                strokeDasharray="5 5"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="M20 65 L39 49 L58 65 V91 H20 Z"
                stroke="var(--brand-blue)"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M31 91 V72 H47 V91"
                stroke="var(--brand-blue)"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M76 72 H123 L135 84 V94 H76 Z"
                stroke="var(--brand-orange)"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M123 72 V94"
                stroke="var(--brand-orange)"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <circle cx="91" cy="96" r="7" stroke="var(--brand-orange)" strokeWidth="2" />
              <circle cx="122" cy="96" r="7" stroke="var(--brand-orange)" strokeWidth="2" />
              <path
                d="M162 44 C162 32 171 24 181 24 C191 24 200 32 200 44 C200 59 181 78 181 78 C181 78 162 59 162 44 Z"
                stroke="var(--brand-green)"
                strokeLinejoin="round"
                strokeWidth="2"
                transform="translate(-19 0)"
              />
              <circle
                cx="162"
                cy="44"
                r="4"
                stroke="var(--brand-green)"
                strokeWidth="2"
                transform="translate(0 0)"
              />
            </svg>

            <div className="relative z-[1] grid grid-cols-[1fr_42mm] items-center gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-white"
                    style={{
                      borderColor: "rgb(34 197 94 / 0.35)",
                      color: "var(--brand-green)",
                    }}
                  >
                    <BadgeCheck className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <p
                      className="text-[7.5px] font-semibold uppercase tracking-[0.2em]"
                      style={{ color: "var(--brand-green)" }}
                    >
                      Reservation Status
                    </p>
                    <h1 className="font-serif text-[29px] font-semibold uppercase leading-none tracking-normal text-foreground">
                      Booking Confirmed
                    </h1>
                  </div>
                </div>

                <p
                  className="mt-1.5 text-[12.5px] font-semibold leading-tight"
                  style={{ color: "var(--brand-green)" }}
                >
                  Your booking has been successfully confirmed.
                </p>

                <div className="mt-2 max-w-[128mm]">
                  <p className="text-[11.5px] font-semibold leading-tight text-foreground">
                    Dear {booking.customer.name},{" "}
                  </p>
                  <p className="mt-0.5 text-[10.5px] leading-[1.45] text-muted-foreground">
                    Thank you for choosing {company.nameFull}. Your move is now in careful hands,
                    with safe packing, timely coordination, and professional support from pickup to
                    delivery.
                  </p>
                </div>

                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {heroChips.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-1 rounded-sm border bg-white/70 px-2 py-1 text-[8px] font-semibold uppercase tracking-wider text-foreground/75"
                      style={{ borderColor: "rgb(34 197 94 / 0.22)" }}
                    >
                      <Check
                        className="h-2.5 w-2.5"
                        strokeWidth={2.6}
                        style={{ color: "var(--brand-green)" }}
                      />
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-[31mm]" aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* ── Details Grid ── */}
        <div className="grid grid-cols-2 gap-1.5 pt-1.5">
          <Card
            title="Booking Details"
            icon={<CalendarDays className="h-3.5 w-3.5" />}
            className="page-one-card booking-details-card"
          >
            <div className="booking-details-grid grid grid-cols-2 gap-x-3">
              <BookingDetailItem
                label="Booking ID"
                value={booking.bookingId}
                icon={<Hash className="h-3.5 w-3.5" />}
                highlight
              />
              <BookingDetailItem
                label="Booking Date"
                value={booking.bookingDate}
                icon={<CalendarDays className="h-3.5 w-3.5" />}
              />
              <BookingDetailItem
                label="Shifting Date"
                value={booking.service.shiftingDate}
                icon={<Truck className="h-3.5 w-3.5" />}
              />
              <BookingDetailItem
                label="Service Type"
                value={booking.service.type}
                icon={<PackageCheck className="h-3.5 w-3.5" />}
              />
              <BookingDetailItem
                label="Reference No."
                value={booking.referenceNumber}
                icon={<Hash className="h-3.5 w-3.5" />}
              />
              <BookingDetailItem
                label="Generated On"
                value={booking.generatedOn}
                icon={<Clock className="h-3.5 w-3.5" />}
              />
            </div>
          </Card>

          <Card
            title="Customer Details"
            icon={<CircleUserRound className="h-4 w-4" />}
            className="page-one-card customer-details-card"
          >
            <div className="customer-details-grid grid grid-cols-2 gap-x-3">
              <CustomerDetailItem
                label="Customer Name"
                value={booking.customer.name}
                icon={<User className="h-3.5 w-3.5" />}
              />
              <CustomerDetailItem
                label="Phone Number"
                value={booking.customer.phone}
                icon={<Phone className="h-3.5 w-3.5" />}
                prominent
              />
              <div className="col-span-2">
                <CustomerDetailItem
                  label="Email Address"
                  value={booking.customer.email || "N/A"}
                  icon={<AtSign className="h-3.5 w-3.5" />}
                  prominent
                />
              </div>
            </div>
          </Card>

          <Card
            title="Pickup Address"
            icon={<MapPin className="h-4 w-4" />}
            className="page-one-card address-card pickup-address-card"
          >
            <p className="address-copy text-[12px] font-medium leading-[1.55] text-foreground">
              {booking.pickup.address}
            </p>
            <p className="address-note mt-1 text-[8.5px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Our team will arrive at the scheduled time slot.
            </p>
          </Card>

          <Card
            title="Delivery Address"
            icon={<Flag className="h-4 w-4" />}
            accent
            className="page-one-card address-card delivery-address-card"
          >
            <p className="address-copy text-[12px] font-medium leading-[1.55] text-foreground">
              {booking.delivery.address}
            </p>
            <p className="address-note mt-1 text-[8.5px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Delivery subject to route and access conditions.
            </p>
          </Card>
        </div>

        {/* ── Payment Summary ── */}
        <div className="pt-1.5">
          <Card title="Payment Summary" className="page-one-card">
            <div className="grid grid-cols-3 divide-x divide-hairline">
              <div className="pr-4">
                <p className="text-[8.5px] uppercase tracking-[0.16em] text-muted-foreground">
                  Total Amount
                </p>
                <p className="mt-2 text-[22px] font-semibold leading-none tracking-tight text-foreground">
                  ₹{booking.payment.total.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="px-4">
                <p className="text-[8.5px] uppercase tracking-[0.16em] text-muted-foreground">
                  Advance Paid
                </p>
                <p
                  className="mt-2 text-[22px] font-semibold leading-none tracking-tight"
                  style={{ color: "var(--brand-green)" }}
                >
                  ₹{booking.payment.advance.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="pl-4">
                <p className="text-[8.5px] uppercase tracking-[0.16em] text-muted-foreground">
                  Balance Amount
                </p>
                <p
                  className="mt-2 text-[24px] font-extrabold leading-none tracking-tight"
                  style={{ color: "var(--brand-orange)" }}
                >
                  ₹{booking.payment.balance.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* ── What Happens Next ── */}
        <div className="pt-1.5">
          <section
            className="page-one-section border-y border-border py-4"
            style={{ pageBreakInside: "avoid", breakInside: "avoid" }}
          >
            <header className="mb-2 flex items-center gap-2">
              <h3
                className="font-serif text-[11px] font-medium uppercase tracking-[0.15em]"
                style={{ color: "var(--brand-blue)" }}
              >
                What Happens Next
              </h3>
            </header>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-0.5">
              {nextSteps.map((s) => (
                <li key={s} className="flex gap-2 text-[10px] leading-[1.45] text-foreground/80">
                  <Check
                    className="mt-[2px] h-3 w-3 shrink-0"
                    strokeWidth={3}
                    style={{ color: "var(--brand-blue)" }}
                  />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* ── Customer Support ── */}
        <div className="mt-4 border-t border-slate-200 pt-3">
  <h3
    className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em]"
    style={{ color: "var(--brand-blue)" }}
  >
    Customer Support
  </h3>

  <div className="flex items-start justify-between">
    {/* Left */}
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Phone className="h-3.5 w-3.5 text-slate-500" />
        <span className="text-[10px] font-medium">
          +91 93440 07343
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Mail className="h-3.5 w-3.5 text-slate-500" />
        <span className="text-[10px]">
          info@vrscargopackers.com
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Globe className="h-3.5 w-3.5 text-slate-500" />
        <span className="text-[10px]">
          vrscargopackers.com
        </span>
      </div>
    </div>

    {/* Right */}
    <div className="flex flex-col items-center -mt-8">
      <p
        className="mb-1 text-center text-[8px] font-semibold uppercase tracking-[0.15em]"
        style={{ color: "var(--brand-blue)" }}
      >
        SCAN TO VERIFY BOOKING
      </p>

      <div className="rounded-lg border border-slate-300 bg-white p-1.5 shadow-sm">
        <QRCode
          value={contact.websiteUrl}
          size={64}
          bgColor="#ffffff"
          fgColor="#000000"
        />
      </div>
    </div>
  </div>
</div>

        {/* ── Trust Ribbon ── */}
        <div className="mb-1.5 mt-2.5 grid grid-cols-6 gap-1.5 border-t border-hairline pt-2.5">
          {trustBadges.map(({ icon: iconName, label }) => {
            const Icon = iconMap[iconName];
            if (!Icon) return null;
            return (
              <div key={label} className="flex flex-col items-center gap-1.5 text-center">
                <Icon className="h-4 w-4 text-muted-foreground" strokeWidth={1} />
                <span className="text-[7.5px] font-medium uppercase tracking-widest text-muted-foreground">
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        <Footer page={1} />
      </div>
    </article>
  );
}
