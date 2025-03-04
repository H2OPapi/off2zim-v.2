"use client";

import React from "react";

export function Layout90() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
            Discover the Wonders of Victoria Falls: A Must-See Destination in
            Zimbabwe
          </h3>
          <p className="md:text-md">
            Victoria Falls, one of the Seven Natural Wonders of the World,
            offers breathtaking views and thrilling adventures. Engage in
            activities like white-water rafting, helicopter tours, and guided
            hikes to experience its beauty up close. Don't forget to check the
            weather and plan your visit to make the most of this iconic
            destination.
          </p>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
