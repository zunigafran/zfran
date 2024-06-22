"use client";

import React, { useEffect, useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const messages = [
    <span key="message-0">
      <i>&quot;Your warmth radiates upon those around you.&quot;</i>
      <br />
      <br />A Panda Express Fortune Cookie
    </span>,
    <span key="message-1">
      <i>&quot;Some people feel the rain, others just get wet.&quot;</i>
      <br />
      <br />
      Bob Dylan
    </span>,
    <span key="message-2">
      <i>&quot;A person who never made a mistake, never tried anything new.&quot;</i>
      <br />
      <br />
      Albert Einstein
    </span>,
    <span key="message-3">
      <i>&quot;When someone shows you who they are, believe them the first time.&quot;</i>
      <br />
      <br />
      Maya Angelou
    </span>,
    <span key="message-4">
      <i>&quot;The truth is rarely pure and never simple.&quot;</i>
      <br />
      <br />
      Oscar Wilde
    </span>,
    <span key="message-5">
      <i>&quot;There is no monopoly on truth&quot;</i>
      <br />
      <br />
      Justice Elena Kagan
    </span>,
  ]; // Example messages

  useEffect(() => {
    const interval = setInterval(() => {
      const messageElement = document.getElementById("messages");
      if (messageElement) {
        messageElement.classList.add("fade-out");

        setTimeout(() => {
          setCurrentMessageIndex(
            (prevIndex) => (prevIndex + 1) % messages.length
          );
          messageElement.classList.remove("fade-out");
          messageElement.classList.add("fade-in");

          setTimeout(() => {
            messageElement.classList.remove("fade-in");
          }, 1000); // Match the transition duration
        }, 1000); // Match the transition duration
      }
    }, 15000); // Change message every 15 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <main className="bg-primary text-[#fff]">
        <nav className="py-5 flex justify-between text-center place-items-center px-8 hidden lg:flex">
          {/* "LOGO */}
          <a href="/" className="text-2xl place-content-center">
            Francisco Zuniga
          </a>
          {/* MENU */}
          <ul className="flex col-span-2 gap-8 place-items-center text-xl -ml-28">
            <li>
              <a className="none" href="#competencies">
                Competencies
              </a>
            </li>
            <li>
              <a className="none" href="#work">
                Work
              </a>
            </li>
            <li>
              <a className="none" href="#experience">
                Experience
              </a>
            </li>
            <li>
              <a className="none" href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
          <button className="bg-gradient-to-b from-[#4ade80] to-[#3b8af6] p-2 rounded-xl text-xl">
            <a
              className="none"
              href="/Francisco Zuniga.pdf"
              alt="resume"
              download="Francisco Zuniga"
            >
              Resume
            </a>
          </button>
        </nav>
        {/* SIDEBAR/MOBILE MENU */}
        <details className="bg-primary cursor-pointer group grid sticky top-0 z-[999] flex lg:hidden">
          <summary className="group cursor-pointer list-none font-semibold h-[12svh] justify-items-stretch content-center grid grid-cols-3 inline">
            <div className="justify-self-start col-start-1 pl-8 z-[999] mt-4">
              <FaBars className="block text-4xl group-open:hidden" />
              <FaTimes className="hidden text-4xl group-open:block" />
            </div>
            <a
              href="/"
              className="flex flex-col text-center place-items-stretch text-3xl z-20"
            >
              Francisco Zuniga
            </a>
          </summary>
          <ul className="top-0 left-0 w-full h-screen flex flex-col text-center bg-primary">
            <li className="py-5 text-3xl">
              <a className="none" href="#competencies">
                Competencies
              </a>
            </li>
            <li className="py-5 text-3xl">
              <a className="none" href="#work">
                Work
              </a>
            </li>
            <li className="py-5 text-3xl">
              <a className="none" href="#experience">
                Experience
              </a>
            </li>
            <li className="py-5 text-3xl">
              <a
                className="none"
                href="/Francisco Zuniga.pdf"
                alt="resume"
                download="Francisco Zuniga"
              >
                Resume
              </a>
            </li>
            <li className="py-5 text-3xl">
              <a className="none" href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
        </details>

        {/* HERO */}
        <section className="min-h-screen grid-cols-4">
          <div className="h-screen flex items-end text-center">
            <div className="backgroundImage opacity-50"></div>
            <div className="container mx-auto text-center content-end absolute bottom-5">
              <h2 className="text-5xl py-2 font-medium lg:text-6xl">
                Francisco Zuniga
              </h2>
              <h3 className="text-2xl py-2 lg:text-4xl">
                Full-Stack Developer
              </h3>
              <p className="text-md py-5 leading-8 mx-[18%] lg:text-xl">
                I am a junior full-stack developer, adept at utilizing
                cutting-edge technologies and methodologies to develop robust
                software solutions. I have a proven track record of applying my
                knowledge to my tasks and projects to meet and exceed project
                goals. Seeking opportunities to apply my expertise in software
                development to drive innovation and contribute to the growth of
                a dynamic organization.
              </p>
            </div>
          </div>
        </section>

        {/* COMPETENCIES */}
        <section
          className="container mx-auto px-4 md:px-20 lg:px-8 py-16"
          id="competencies"
        >
          <h2 className="block antialiased tracking-normal text-4xl text-center leading-1 !leading-snug lg:!text-4xl">
            My Competencies
          </h2>
          <div className="flex justify-items-center mt-10 gap-2 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8">
            <div className="relative flex flex-col bg-clip-border rounded-xl shadow-fz max-w-sm lg:h-72 items-end overflow-hidden">
              <div className="bg-gradient-to-br from-[#ec4899] to-[#eab308] absolute inset-0"></div>
              <div className="p-6 relative flex flex-col justify-end hover:-translate-y-3 duration-300">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">
                  Full-Stack Development
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed my-2">
                  Expert in full-stack development, building industry-grade
                  projects with diverse programming languages and frameworks.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl shadow-fz max-w-sm lg:h-72 items-end overflow-hidden">
              <div className="bg-gradient-to-br from-[#4ade80] to-[#3b82f6] absolute inset-0"></div>
              <div className="p-6 relative flex flex-col justify-end hover:-translate-y-3 duration-300">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">
                  Problem-Solving and Analytical Skills
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed my-2">
                  Analytical and problem-solving skills acquired through
                  experience as a QA Automation Engineer.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl shadow-fz max-w-sm lg:h-72 items-end overflow-hidden">
              <div className="bg-gradient-to-br from-[#3b82f6] to-[#4ade80] absolute inset-0"></div>
              <div className="p-6 relative flex flex-col justify-end hover:-translate-y-3 duration-300">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">
                  Automation and Optimization
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed my-2">
                  Proficiency in Python and Bash scripting to automate tasks and
                  optimize workflows.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl shadow-fz max-w-sm lg:h-72 items-end overflow-hidden">
              <div className="bg-gradient-to-br from-[#f472b6] to-[#8b5cf6] absolute inset-0"></div>
              <div className="p-6 relative flex flex-col justify-end hover:-translate-y-3 duration-300">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">
                  Communication and Collaboration
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed my-2">
                  Skilled in effectively communicating with teams and
                  stakeholders to deliver high-quality results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="min-h-screen container mx-auto px-4 md:px-20 lg:px-8 py-16" id="work">
          <h2 className="block antialiased tracking-normal text-4xl text-center leading-1 !leading-snug lg:!text-4xl">
            My Work
          </h2>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8">
            <div className="relative flex flex-col bg-clip-border rounded-xl shadow-fz max-w-sm h-96 items-end overflow-hidden">
              <div className="bg-gradient-to-br from-[#ec4899] to-[#eab308] absolute inset-0">
                <Image
                  src="/images/ecom.png"
                  alt="Shopping Cart Project"
                  className="rounded-lg shadow-lg h-52 object-cover object-center relative"
                  layout="fill"
                />
              </div>
              <div className="p-6 relative flex flex-col justify-end hover:-translate-y-3 duration-300">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">
                  Shopping Cart Project
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed my-2">
                  Developed an e-commerce web application using React, Redux,
                  and Firebase, enabling users to browse products, add items to
                  their cart, and securely process payments.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl shadow-fz max-w-sm h-96 items-end overflow-hidden">
              <div className="bg-gradient-to-br from-[#4ade80] to-[#3b82f6] absolute inset-0">
                <Image
                  src="/images/qa.png"
                  alt="Test Automation Framework"
                  className="rounded-lg shadow-lg h-52 object-cover object-center relative"
                  layout="fill"
                />
              </div>
              <div className="p-6 relative flex flex-col justify-end hover:-translate-y-3 duration-300">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">
                  Test Automation Framework
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed my-2">
                  Designed and implemented a robust test automation framework
                  using Selenium and Python, reducing manual testing efforts and
                  improving test coverage for web applications.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl shadow-fz max-w-sm h-96 items-end overflow-hidden">
              <div className="bg-gradient-to-br from-[#3b82f6] to-[#4ade80] absolute inset-0">
                <Image
                  src="/images/dash.png"
                  alt="Dashboard for IoT Devices"
                  className="rounded-lg shadow-lg h-52 object-cover object-center relative"
                  layout="fill"
                />
              </div>
              <div className="p-6 relative flex flex-col justify-end hover:-translate-y-3 duration-300">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">
                  Dashboard for IoT Devices
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed my-2">
                  Created a real-time dashboard using React and Node.js to
                  monitor and manage IoT devices, providing insights into device
                  status, performance, and data analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="container mx-auto px-4 md:px-20 lg:px-8 py-16" id="experience">
          <h2 className="block antialiased tracking-normal text-4xl text-center leading-1 !leading-snug lg:!text-4xl">
            My Experience
          </h2>
          <div className="mt-10 flex flex-col gap-2 grid lg:grid-cols-4 sm:grid-cols-2 gap-8">
            <div className="relative flex flex-col bg-clip-border rounded-xl shadow-fz max-w-sm h-96 items-end overflow-hidden">
              <div className="bg-gradient-to-br from-[#ec4899] to-[#eab308] absolute inset-0">
                <Image
                  src="/images/consulting.png"
                  alt="Consulting"
                  className="rounded-lg shadow-lg h-52 object-cover object-center relative"
                  layout="fill"
                />
              </div>
              <div className="p-6 relative flex flex-col justify-end hover:-translate-y-3 duration-300">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">
                  Consulting
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed my-2">
                  Provided consulting services for various clients, advising on
                  software development best practices, technology selection, and
                  project management.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl shadow-fz max-w-sm h-96 items-end overflow-hidden">
              <div className="bg-gradient-to-br from-[#4ade80] to-[#3b82f6] absolute inset-0">
                <Image
                  src="/images/development.png"
                  alt="Development"
                  className="rounded-lg shadow-lg h-52 object-cover object-center relative"
                  layout="fill"
                />
              </div>
              <div className="p-6 relative flex flex-col justify-end hover:-translate-y-3 duration-300">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">
                  Development
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed my-2">
                  Hands-on experience in full-stack development, creating
                  scalable and maintainable web applications with modern
                  technologies.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl shadow-fz max-w-sm h-96 items-end overflow-hidden">
              <div className="bg-gradient-to-br from-[#3b82f6] to-[#4ade80] absolute inset-0">
                <Image
                  src="/images/qa.png"
                  alt="Quality Assurance"
                  className="rounded-lg shadow-lg h-52 object-cover object-center relative"
                  layout="fill"
                />
              </div>
              <div className="p-6 relative flex flex-col justify-end hover:-translate-y-3 duration-300">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">
                  Quality Assurance
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed my-2">
                  In-depth knowledge of QA processes and tools, ensuring
                  software quality through rigorous testing and automation.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl shadow-fz max-w-sm h-96 items-end overflow-hidden">
              <div className="bg-gradient-to-br from-[#f472b6] to-[#8b5cf6] absolute inset-0">
                <Image
                  src="/images/management.png"
                  alt="Management"
                  className="rounded-lg shadow-lg h-52 object-cover object-center relative"
                  layout="fill"
                />
              </div>
              <div className="p-6 relative flex flex-col justify-end hover:-translate-y-3 duration-300">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">
                  Management
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed my-2">
                  Proven track record in managing software development projects,
                  leading teams, and delivering projects on time and within
                  budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="container mx-auto px-4 md:px-20 lg:px-8 py-16" id="contact">
          <h2 className="block antialiased tracking-normal text-4xl text-center leading-1 !leading-snug lg:!text-4xl">
            Contact Me
          </h2>
          <div className="mt-10 flex flex-col items-center">
            <p className="block antialiased font-sans text-base font-light leading-relaxed my-2 text-center">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <a
              href="mailto:your.email@example.com"
              className="mt-6 px-6 py-3 bg-gradient-to-r from-[#f472b6] to-[#8b5cf6] text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 duration-300"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 md:px-20 lg:px-8 text-white text-center">
          <p className="block antialiased font-sans text-base font-light leading-relaxed my-2">
            &copy; 2024 Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}