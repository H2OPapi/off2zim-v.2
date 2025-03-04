"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to your questions about hotel bookings, cancellations,
            and modifications here.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              How to book a hotel?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Booking a hotel is simple. Just select your desired dates, choose
              a hotel, and follow the prompts to complete your reservation. You
              will receive a confirmation email shortly after.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is the cancellation policy?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our cancellation policy varies by hotel. Generally, you can cancel
              for free up to 24 hours before your check-in date. Please check
              the specific hotel’s policy during booking.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I modify my booking?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, you can modify your booking through your account on our
              platform. Simply log in, find your reservation, and follow the
              instructions to make changes. Modifications are subject to the
              hotel's policy.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              What payment methods are accepted?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We accept various payment methods including credit cards, debit
              cards, and PayPal. During checkout, you will see all available
              options. Your payment information is securely processed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Is my data secure?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! We prioritize your privacy and security. All
              transactions are encrypted, and we adhere to strict data
              protection regulations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
