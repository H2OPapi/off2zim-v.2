"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to your most common questions about dining reservations
            and enjoy your experience.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              How to make reservations?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Making a reservation is simple. Just select your desired
              restaurant, choose your date and time, and complete the booking
              process online. You will receive a confirmation via email.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I modify my reservation?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, you can modify your reservation through your confirmation
              email link. Changes can be made up to 24 hours before your
              booking. If you need further assistance, please contact us.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              What if I need to cancel?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Cancellations can be made through the link in your confirmation
              email. Be sure to cancel at least 24 hours in advance to avoid any
              charges. For further help, reach out to our support team.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Are there any fees?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Most dining reservations are free of charge. However, some premium
              restaurants may require a deposit. Always check the restaurant's
              policy before booking.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I book for groups?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, you can book for groups directly on our platform. Just select
              the number of guests when making your reservation. For larger
              parties, we recommend contacting the restaurant directly.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">We're here to help you!</p>
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
