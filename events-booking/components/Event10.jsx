"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Event10() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-end gap-12 md:mb-18 md:grid-cols-[1fr_max-content] lg:mb-20 lg:gap-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Exciting</p>
            <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
              Events
            </h1>
            <p className="md:text-md">
              Explore the vibrant events happening across Zimbabwe!
            </p>
          </div>
          <Button
            variant="secondary"
            size="primary"
            title="View all"
            className="hidden md:flex"
          >
            View all
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div className="flex flex-col items-start border border-border-primary">
            <a href="#" className="relative block aspect-[3/2] w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="absolute size-full object-cover"
              />
              <div className="absolute right-4 top-4 flex min-w-28 flex-col items-center bg-background-primary px-1 py-3 text-sm">
                <span>Fri</span>
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  09
                </span>
                <span>Feb 2024</span>
              </div>
            </a>
            <div className="flex flex-col items-start p-6">
              <span className="mb-3 bg-background-secondary px-2 py-1 text-sm font-semibold md:mb-4">
                Music
              </span>
              <a href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Pub Choir Bulawayo
                </h2>
              </a>
              <p className="mb-2">Bulawayo</p>
              <p>
                Join the lively atmosphere of singing and camaraderie at this
                unique event.
              </p>
              <Button
                title="View event"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                View event
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-start border border-border-primary">
            <a href="#" className="relative block aspect-[3/2] w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 2"
                className="absolute size-full object-cover"
              />
              <div className="absolute right-4 top-4 flex min-w-28 flex-col items-center bg-background-primary px-1 py-3 text-sm">
                <span>Sat</span>
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  10
                </span>
                <span>Feb 2024</span>
              </div>
            </a>
            <div className="flex flex-col items-start p-6">
              <span className="mb-3 bg-background-secondary px-2 py-1 text-sm font-semibold md:mb-4">
                Festival
              </span>
              <a href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Vic Falls Carnival
                </h2>
              </a>
              <p className="mb-2">Victoria</p>
              <p>
                Experience music, culture, and adventure at one of Zimbabwe's
                biggest festivals!
              </p>
              <Button
                title="View event"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                View event
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-start border border-border-primary">
            <a href="#" className="relative block aspect-[3/2] w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 3"
                className="absolute size-full object-cover"
              />
              <div className="absolute right-4 top-4 flex min-w-28 flex-col items-center bg-background-primary px-1 py-3 text-sm">
                <span>Sun</span>
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  11
                </span>
                <span>Feb 2024</span>
              </div>
            </a>
            <div className="flex flex-col items-start p-6">
              <span className="mb-3 bg-background-secondary px-2 py-1 text-sm font-semibold md:mb-4">
                Arts
              </span>
              <a href="#">
                <h2 className="text-xl font-bold md:text-2xl">Poetry Night</h2>
              </a>
              <p className="mb-2">Harare</p>
              <p>
                Immerse yourself in the beauty of words and expression at this
                enchanting evening.
              </p>
              <Button
                title="View event"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                View event
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-end md:hidden">
          <Button variant="secondary" size="primary" title="View all">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
