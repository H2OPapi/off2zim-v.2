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
            Find answers to your most common questions about traveling and
            exploring Zimbabwe's beautiful destinations.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is Zimbabwe known for?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Zimbabwe is renowned for its stunning landscapes, rich wildlife,
              and vibrant culture. Key attractions include Victoria Falls,
              Hwange National Park, and the Great Zimbabwe ruins. Each
              destination offers unique experiences for adventure seekers and
              culture enthusiasts alike.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              Is it safe to travel?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Traveling in Zimbabwe is generally safe for tourists. However,
              it's important to stay informed about local conditions and follow
              common safety precautions. Engaging with local guides can enhance
              your experience and ensure safety.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              What should I pack?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Packing essentials include lightweight clothing, comfortable
              shoes, and sun protection. Depending on your activities, consider
              bringing binoculars for wildlife viewing and a camera to capture
              stunning landscapes. Don't forget any personal medications you may
              need.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is the currency?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              The official currency in Zimbabwe is the Zimbabwean dollar.
              However, US dollars are widely accepted, making transactions
              easier for tourists. It's advisable to carry some local currency
              for smaller purchases.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              What about local cuisine?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Zimbabwean cuisine features a variety of delicious dishes, with
              sadza being a staple. Don't miss trying local specialties like
              biltong and nyama choma. Many restaurants offer a fusion of
              traditional and modern culinary experiences.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">
            We're here to help you with your inquiries.
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
