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
            Here are answers to common questions about booking events through
            Off2Zim.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              How to book events?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Booking events through Off2Zim is simple. Just browse our events
              calendar, select your desired event, and follow the prompts to
              complete your booking. You'll receive a confirmation email once
              your reservation is successful.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              What payment methods accepted?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We accept various payment methods including credit cards, mobile
              payments, and bank transfers. This ensures a convenient and secure
              transaction process for all users. Check our website for the
              latest payment options available.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I cancel bookings?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, you can cancel your bookings through your account dashboard.
              Please note that cancellation policies vary by event, so it's
              important to review the specific terms before confirming your
              purchase. If you have any issues, our customer service team is
              here to help.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Are tickets transferable?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Ticket transferability depends on the event's policy. Some events
              allow you to transfer tickets to another person, while others may
              not. Always check the event details for specific guidelines
              regarding ticket transfers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              What if I need help?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              If you need assistance, our customer support team is available to
              help. You can reach out via our contact page or through the live
              chat feature on our website. We're committed to ensuring you have
              a smooth booking experience.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">
            We're here to assist you with any inquiries.
          </p>
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
