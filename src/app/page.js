import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';


export default function Home() {
  return (
    <main className="bg-primary text-[#fff]">
      <section className="min-h-screen px-4 md:px-20 lg:px-8">
        <nav className="py-10 mb-12 flex justify-between content-center">
          <h1 className="w-1/4 text-xl">
            Francisco Zuniga
          </h1>
          <ul className="flex gap-8">
            <li><a className="" href="#">Competencies</a></li>
            <li><a className="" href="#">Work</a></li>
            <li><a className="" href="#">Experience</a></li>
            <li><a className="" href="#">Contact Me</a></li>
          </ul>
          <BsFillMoonStarsFill className="w-1/4 cursor-pointer text-2xl" />
        </nav>

        {/* TEST HERO */}

        <div className="h-screen flex items-end">

          {/* <image src="" className="w-full bg-cover bg-center py-32" alt="Field"> */}
          <div className="container mx-auto text-center content-end">
            <h2 className="text-5xl py-2 font-medium md:text-6xl">Francisco Zuniga</h2>
            <h3 className="text-2xl py-2 md:text-4xl">Full-Stack Developer</h3>
            <p className="text-md py-5 leading-8 md:text-xl">Professional Summary Here</p>
          </div>
          {/* </image> */}
        </div>

      </section>
      {/* CORE COMPETENCIES */}
      <section className="container mx-auto px-4 md:px-20 lg:px-8 py-16">
        <h2 className="block antialiased tracking-normal text-4xl text-center leading-1 !leading-snug lg:!text-4xl">My Competencies</h2>
        <div className="flex justify-center mt-10 gap-2 grid-cols-2 lg:grid-cols-4">
          <div className="relative flex flex-col bg-clip-border rounded-xl shadow-md shadow-[#fff]/50 ax-w-sm lg:h-72 md:h-96 items-end overflow-hidden">
            <div className="bg-gradient-to-br from-[#ec4899] to-[#eab308] absolute inset-0"></div>
            <div className="p-6 relative flex flex-col justify-end hover:-translate-y-3 duration-300">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">Full-Stack Development</h4>
              <p className="block antialiased font-sans text-base font-light leading-relaxed my-2">Expert in full-stack development, building industry-grade projects with diverse programming languages and frameworks</p>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl shadow-md max-w-sm lg:h-72 items-end overflow-hidden">
            <div className="bg-gradient-to-br from-[#4ade80] to-[#3b82f6] absolute inset-0"></div>
            <div className="p-6 relative flex flex-col justify-end hover:-translate-y-3 duration-300">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">Problem-Solving and Analytical Skills</h4>
              <p className="block antialiased font-sans text-base font-light leading-relaxed my-2">Skilled in solving complex problems and detailed analysis, contributing significantly in software and financial roles</p>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl shadow-md max-w-sm lg:h-72 items-end overflow-hidden">
            <div className="bg-gradient-to-br from-[#f869d5] to-[#5650de] absolute inset-0"></div>
            <div className="p-6 relative flex flex-col justify-end hover:-translate-y-3 duration-300">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">Project Management and Agile Methodology</h4>
              <p className="block antialiased font-sans text-base font-light leading-relaxed my-2">Proficient in agile project management, successfully planning and executing numerous reports and applications</p>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl shadow-md max-w-sm lg:h-72 items-end overflow-hidden">
            <div className="bg-gradient-to-br from-[#f00b51] to-[#7366ff] absolute inset-0"></div>
            <div className="p-6 relative flex flex-col justify-end hover:-translate-y-3 duration-300">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">Communication and Mentorship</h4>
              <p className="block antialiased font-sans text-base font-light leading-relaxed my-2">Effective communicator and mentor, highly rated for work ethic and delivering clear, comprehensive briefs and reports</p>
            </div>
          </div>
        </div>
      </section>
      {/* PORTFOLIO */}
      <section className="container mx-auto lg:py-16">
        <h2 className="block antialiased tracking-normal text-4xl text-center leading-1 !leading-snug lg:!text-4xl">My Work</h2>

        {/* Test Card 2*/}
        <div className="flex justify-center grid-col-1 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-sm pt-6 drop-shadow-lg">
            <a href="#" className="relative inline-block w-full transform transition-transform duration-300 ease-in-out bg-accent rounded-xl pb-2">
              <div className="rounded-lg">
                <div className="relative flex h-60 justify-center overflow-hidden rounded-t-xl">
                  <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                    <img src="https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                  </div>
                </div>
                <div className="pl-2">
                  <div className="mt-4 grid grid-cols-2">
                    <div className="flex items-center">
                      <div className="relative">
                        <h2 className="line-clamp-1 text-base font-medium md:text-lg">Statue of Liberty</h2>
                        <p className="mt-2 line-clamp-1 text-sm">Web Development</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-sm pt-6 drop-shadow-lg">
            <a href="#" className="relative inline-block w-full transform transition-transform duration-300 ease-in-out bg-accent rounded-xl pb-2">
              <div className="rounded-lg">
                <div className="relative flex h-60 justify-center overflow-hidden rounded-t-xl">
                  <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                    <img src="https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                  </div>
                </div>
                <div className="pl-2">
                  <div className="mt-4 grid grid-cols-2">
                    <div className="flex items-center">
                      <div className="relative">
                        <h2 className="line-clamp-1 text-base font-medium  md:text-lg">Statue of Liberty</h2>
                        <p className="mt-2 line-clamp-1 text-sm">Web Development</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section className="container mx-auto py-8 sm:py-16 lg:py-24">
        <h2 className="block antialiased tracking-normal text-4xl text-center leading-1 !leading-snug lg:!text-4xl">Professional Experience</h2>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          <details class="bg-accent border-gray-200 shadow-lg cursor-pointer group rounded-xl hover:bg-accent-50">
            <summary
              class="flex cursor-pointer list-none items-center justify-between w-full px-4 py-4 font-semibold sm:p-6">
              Account Expeditor @ ProSource Wholesale
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="block h-5 w-5 group-open:hidden">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="hidden h-5 w-5 group-open:block">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
              </div>
            </summary>
            <div className='grid grid-cols-3 m-2'>
              <div className="col-start-1 col-span-2">
                <div class="pl-6 pb-4">This is the first item's accordion body.</div>
              </div>
              <a href="https://www.prosourcewholesale.com/showrooms/tx-prosource-of-austin" className="justify-self-center">
                <img src="https://play-lh.googleusercontent.com/Wv2EpksNIai7HcQFi_OOmpZ8ysWNEvEZq8LsJH4xGYHWrcB1XK71Ki5siEmjMS_ZQCk=w480-h960-rw" alt="proIcon" className="w-36 rounded-xl shadow-md opacity-75"></img>
              </a>
            </div>
            <div className="ml-5 pb-5">
              <span className="bg-[#000] rounded-full p-2"> skill 1 </span>
            </div>
          </details>
          <details class="bg-accent border-gray-200 shadow-lg cursor-pointer group rounded-xl hover:bg-accent-50">
            <summary
              class="flex cursor-pointer list-none items-center justify-between w-full px-4 py-4 font-semibold sm:p-6">
              Software Engineer @ Springboard
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="block h-5 w-5 group-open:hidden">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="hidden h-5 w-5 group-open:block">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
              </div>
            </summary>
            <div class="pb-4">This is the second item's accordion body.</div>
          </details>
          <details class="bg-accent border-gray-200 shadow-lg cursor-pointer group rounded-xl hover:bg-accent-50">
            <summary
              class="flex cursor-pointer list-none items-center justify-between w-full px-4 py-4 font-semibold sm:p-6">
              Accordion item 03
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="block h-5 w-5 group-open:hidden">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="hidden h-5 w-5 group-open:block">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
              </div>
            </summary>
            <div class="pb-4">This is the third item's accordion body.</div>
          </details>
        </div>
      </section>

      {/* FOOTER */}
      <section>
        <footer className="w-full  bg-secondary body-font">
          <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
              <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                <svg className="w-auto h-5 text-gray-900 fill-current" viewBox="0 0 202 69"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M57.44.672s6.656 1.872 6.656 5.72c0 0-1.56 2.6-3.744 6.552 8.424 1.248 16.744 1.248 23.816-1.976-1.352 7.904-12.688 8.008-26.208 6.136-7.696 13.624-19.656 36.192-19.656 42.848 0 .416.208.624.52.624 4.576 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392C56.608 53.088 42.152 69 36.432 69c-4.472 0-8.216-5.928-8.216-10.4 0-6.552 11.752-28.08 20.28-42.952-9.984-1.664-20.176-3.64-27.976-3.848-13.936 0-16.64 3.536-17.576 6.032-.104.312-.52.52-.832.312-3.744-7.072-1.456-14.56 14.144-14.56 9.36 0 22.048 4.576 34.944 7.592C54.736 5.04 57.44.672 57.44.672zm46.124 41.08c1.144-1.456 4.264.728 3.016 2.392C100.236 53.088 85.78 69 80.06 69c-4.576 0-8.32-5.928-8.32-10.4v-.208C67.58 64.32 63.524 69 61.34 69c-4.472 0-8.944-4.992-8.944-11.856 0-10.608 15.704-33.072 24.96-33.072 4.992 0 7.384 2.392 8.528 4.576l2.6-4.576s6.656 1.976 6.656 5.824c0 0-13.312 24.336-13.312 30.056 0 .208 0 .624.52.624 4.472 0 17.888-14.352 21.216-18.824zm-40.56 18.72c2.184 0 11.752-13.312 17.368-22.048l4.16-7.488c-8.008-7.904-27.248 29.536-21.528 29.536zm57.564-38.168c-2.184 0-4.992-2.808-4.992-4.784 0-2.912 5.824-14.872 7.28-14.872 2.6 0 6.136 2.808 6.136 6.344 0 2.08-7.176 12.064-8.424 13.312zm-17.68 46.592c-4.472 0-8.216-5.928-8.216-10.4 0-6.656 16.744-34.528 16.744-34.528s6.552 1.976 6.552 5.824c0 0-13.312 24.336-13.312 30.056 0 .208.104.624.624.624 4.472 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392-6.448 8.944-20.904 24.856-26.624 24.856zM147.244.672s6.656 1.872 6.656 5.72c0 0-25.792 43.784-25.792 53.56 0 .416.208.624.52.624 4.576 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392C146.412 53.088 131.956 69 126.236 69c-4.472 0-8.216-5.928-8.216-10.4 0-10.4 29.224-57.928 29.224-57.928zM169.7 60.16c3.848-2.392 7.904-6.864 10.816-10.92 6.656-9.464 11.544-20.696 10.504-27.352-.312-3.432-.104-4.056 3.12-2.704 5.2 2.392 11.336 8.632 2.184 22.88-5.2 8.008-12.48 15.288-19.344 19.76-2.704 1.768-6.344 3.328-9.984 4.16-.52.416-1.04.728-1.456.936-1.872 1.352-4.264 2.08-7.592 2.08-14.664 0-16.848-12.272-16.848-16.016 0-2.392 3.224-4.68 4.784-3.744.208.104.312.416.312.624 0 2.808 1.872 13.104 9.984 13.104 7.904 0 3.432-18.304 2.288-27.144-1.456 2.288-3.432 4.992-5.616 8.32-2.6 3.744-5.72 1.456-4.784 0 5.824-8.424 9.152-13.832 11.856-18.616 1.248-2.08 3.328-3.328 6.448-3.328 2.704 0 5.824 3.016 6.864 4.784.312.52 0 1.04-.52 1.144a5.44 5.44 0 00-4.368 5.408c0 6.968 2.6 17.16 1.664 24.856l-.312 1.768z"
                    fill-rule="nonzero" /></svg>
              </a>
              <p className="mt-2 text-sm">Design, Code and Ship!</p>
              <div className="mt-4">
                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                  <a className="cursor-pointer hover:text-gray-700">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 cursor-pointer hover:text-gray-700">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                      </path>
                    </svg>
                  </a>
                  <a className="ml-3 cursor-pointer hover:text-gray-700">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-3 cursor-pointer hover:text-gray-700">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                      <path stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                      </path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest uppercase title-font">About</h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className="cursor-pointer hover:text-gray-900">Company</a>
                  </li>
                  <li className="mt-3">
                    <a className="cursor-pointer hover:text-gray-900">Careers</a>
                  </li>
                  <li className="mt-3">
                    <a className="cursor-pointer hover:text-gray-900">Blog</a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Support</h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className="cursor-pointer hover:text-gray-900">Contact Support</a>
                  </li>
                  <li className="mt-3">
                    <a className="cursor-pointer hover:text-gray-900">Help Resources</a>
                  </li>
                  <li className="mt-3">
                    <a className="cursor-pointer hover:text-gray-900">Release Updates</a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Platform
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Terms &amp; Privacy</a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Pricing</a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">FAQ</a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Contact</h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className=" cursor-pointer hover:text-gray-900">Send a Message</a>
                  </li>
                  <li className="mt-3">
                    <a className=" cursor-pointer hover:text-gray-900">Request a Quote</a>
                  </li>
                  <li className="mt-3">
                    <a className=" cursor-pointer hover:text-gray-900">+123-456-7890</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-gray-300">
            <div className="container px-5 py-4 mx-auto">
              <p className="text-sm capitalize xl:text-center">© 2020 All rights reserved </p>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
