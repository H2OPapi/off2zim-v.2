"use client"

import { Button, Input } from "@relume_io/relume-ui";
import React from "react";



export function Cta8() {
return (<section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28"><div className="container grid w-full grid-cols-1 items-start justify-between gap-6 md:gap-x-12 md:gap-y-8 lg:grid-cols-[1fr_max-content] lg:gap-x-20"><div className="w-full max-w-lg"><h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">Stay Updated with Off2Zim</h2><p className="md:text-md">Get exclusive updates on exciting activities and offers!</p></div><div><form className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4"><Input id="email" type="email" placeholder="Enter your email"/><Button title="Sign Up">Sign Up</Button></form><div dangerouslySetInnerHTML={{__html:"
  <p class='text-xs'>
    By clicking Sign Up you're confirming that you agree with our
    <a href='#' class='underline'>Terms and Conditions</a>.
  </p>
  ",}}/></div></div></section>);
}