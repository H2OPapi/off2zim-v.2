"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Here are some common questions about our services to help you plan
            your trip.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What services do you offer?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Off2Zim offers a variety of services including event bookings,
              hotel reservations, and dining options. We also provide flight and
              bus ticket bookings, along with shuttle services. Our platform is
              designed to enhance your travel experience in Zimbabwe.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How can I book?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Booking through Off2Zim is simple and user-friendly. Just select
              your desired service, choose your dates, and complete the payment
              process. You will receive a confirmation via email shortly after.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Is customer support available?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, we provide dedicated customer support to assist you with any
              inquiries. Our team is available via chat, email, or phone. We are
              here to ensure your travel experience is seamless.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              What payment methods accepted?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We accept various payment methods including credit cards, debit
              cards, and mobile payments. Your transactions are secure and
              processed through trusted payment gateways. You can choose the
              method that suits you best.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I cancel bookings?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, you can cancel your bookings, but please check our
              cancellation policy for specific terms. Depending on the service,
              cancellation fees may apply. We recommend reviewing the policy
              before finalizing your booking.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">Reach out to us anytime for assistance.</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
