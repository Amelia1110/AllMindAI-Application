import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import CompaniesSlideShow from "@/components/CompaniesSlideShow";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Mistral AI | Frontier AI in your hands</title>
      </Head>
      {/* Mobile Header */}
      <header className="lg:hidden flex justify-between items-center p-5 h-22 bg-mistral-background-100 fixed w-full top-0 z-100">
        <Link target="_blank" className="" href={`/`}>
          <Image
            src="/mistral-beige.svg"
            alt="Mistral AI beige icon"
            width={41}
            height={29}
          />
        </Link>
        <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.890625 1.5H24.8906" stroke="currentColor" stroke-width="3"></path>
          <path d="M0.890625 9.5H24.8906" stroke="currentColor" stroke-width="3"></path>
          <path d="M0.890625 17.5H24.8906" stroke="currentColor" stroke-width="3"></path>
        </svg>
      </header>

      {/* Desktop Header */}
      <header className="hidden items-center p-6 lg:block h-30 bg-mistral-background-100 w-full fixed top-0 z-100">
        <div className="h-full flex self-center justify-between items-center">
          <Link target="_blank" className="" href={`/`}>
            <Image
              src="/mistral-beige.svg"
              alt="Mistral AI beige icon"
              width={41}
              height={29}
            />
          </Link>
          <div className="flex items-center">
            <div className="flex p-4">
                <p>Products</p>              
            </div>
            <div className="flex p-4">
                <p>Solutions</p>              
            </div>
            <div className="flex p-4">
                <p>Research</p>              
            </div>
            <div className="flex p-4">
                <p>Resources</p>              
            </div>
            <div className="flex p-4">
                <p>Company</p>              
            </div>
            <div className="flex p-4">
              <div className="bg-mistral-orange-50 py-2 px-3 flex gap-4 justify-between items-center group">
                <p className="text-sm">Try the API</p>  
                <div className="flex w-2 h-2 mr-1 items-center text-mistral-accent">
                  <svg className="group-hover:translate-x-1 transition duration-150" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.39166 4.93066H4.92969V7.39936H7.39166V4.93066Z" fill="currentColor"></path>
                    <path d="M4.92681 2.46875H2.46484V4.93744H4.92681V2.46875Z" fill="currentColor"></path>
                    <path d="M2.46197 0H0V2.46869H2.46197V0Z" fill="currentColor"></path>
                    <path d="M4.92681 7.39941H2.46484V9.86811H4.92681V7.39941Z" fill="currentColor"></path>
                    <path d="M2.46197 9.86133H0V12.33H2.46197V9.86133Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex p-4">
              <div className="bg-mistral-orange-50 py-2 px-3 flex gap-4 justify-between items-center group">
                <p className="text-sm">Talk to sales</p>      
                <div className="flex w-2 h-2 mr-1 items-center text-mistral-accent">
                  <svg className="group-hover:translate-x-1 transition duration-150" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.39166 4.93066H4.92969V7.39936H7.39166V4.93066Z" fill="currentColor"></path>
                    <path d="M4.92681 2.46875H2.46484V4.93744H4.92681V2.46875Z" fill="currentColor"></path>
                    <path d="M2.46197 0H0V2.46869H2.46197V0Z" fill="currentColor"></path>
                    <path d="M4.92681 7.39941H2.46484V9.86811H4.92681V7.39941Z" fill="currentColor"></path>
                    <path d="M2.46197 9.86133H0V12.33H2.46197V9.86133Z" fill="currentColor"></path>
                  </svg>
                </div>        
              </div>
            </div>
          </div>
        </div>
        
      </header>

      <main>
        {/* Home */}
        <div className="relative flex justify-center w-full">
          <Image
                className="w-full h-173 object-cover"
                src="/background.webp"
                alt="Mountains"
                width={3840}
                height={1835}
          />
          <div className="absolute top-1/4 grid justify-items-center w-full content-between h-1/2 md:h-2/3">
            <h1 className="text-white text-6xl md:text-8xl max-w-250 text-center">Frontier AI. In Your Hands.</h1>
            <p className="text-white text-xl md:text-2xl text-center mx-4">Amelia&#39;s fake version :)</p>
            <div className="w-full px-5 flex justify-center">
              <div className="bg-mistral-background-50 w-full max-w-135 h-12.5 flex justify-between items-center">
                <input type="text" placeholder="Talk to le Chat" className="text-sm p-6 w-full outline-0"/>
                <div className="w-6.5 h-6.5 m-3.25 p-1.5 bg-mistral-orange-500 hover:bg-mistral-orange-400 transition duration-100"> 
                  <Image
                    className="rotate-90"
                    src="/uparrow.svg"
                    alt="Mistral AI black icon"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-125 h-12.5 px-5 justify-between gap-8">
              <div className="group">
                <div className="flex justify-between">
                  <p className="text-white py-2">Enterprise deployments</p>
                  <svg className="w-2.5 group-hover:text-mistral-orange-500 transition duration-50" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.39166 4.93066H4.92969V7.39936H7.39166V4.93066Z" fill="currentColor"></path>
                    <path d="M4.92681 2.46875H2.46484V4.93744H4.92681V2.46875Z" fill="currentColor"></path>
                    <path d="M2.46197 0H0V2.46869H2.46197V0Z" fill="currentColor"></path>
                    <path d="M4.92681 7.39941H2.46484V9.86811H4.92681V7.39941Z" fill="currentColor"></path>
                    <path d="M2.46197 9.86133H0V12.33H2.46197V9.86133Z" fill="currentColor"></path>
                  </svg>
                </div>
                <hr className="text-white"/>
              </div>
              <div className="group">
                <div className="flex justify-between">
                  <p className="text-white py-2">APIs on la Plateforme</p>
                  <svg className="w-2.5 group-hover:text-mistral-orange-500 transition duration-50" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.39166 4.93066H4.92969V7.39936H7.39166V4.93066Z" fill="currentColor"></path>
                    <path d="M4.92681 2.46875H2.46484V4.93744H4.92681V2.46875Z" fill="currentColor"></path>
                    <path d="M2.46197 0H0V2.46869H2.46197V0Z" fill="currentColor"></path>
                    <path d="M4.92681 7.39941H2.46484V9.86811H4.92681V7.39941Z" fill="currentColor"></path>
                    <path d="M2.46197 9.86133H0V12.33H2.46197V9.86133Z" fill="currentColor"></path>
                  </svg>
                </div>
                <hr className="text-white"/>
              </div>
            </div>
          </div>
        </div>

        {/* Download Options Block */}
        <div className="my-12 mx-4 md:mx-6 md:flex">
          <div className="w-full md:w-30 h-30 relative">
            <div className="w-full md:w-30 h-1/5 bg-mistral-orange-200"></div>
            <div className="w-full md:w-30 h-1/5 bg-mistral-orange-300"></div>
            <div className="w-full md:w-30 h-1/5 bg-mistral-orange-400"></div>
            <div className="w-full md:w-30 h-1/5 bg-mistral-orange-500"></div>
            <div className="w-full md:w-30 h-1/5 bg-mistral-orange-600"></div>
            <Image
              className="centered-image top-1/2"
              src="/mistral-beige.svg"
              alt="Mistral AI beige icon"
              width={62}
              height={22}
            />
          </div>
          <div className="p-6 w-full gap-8 md:h-30 bg-mistral-orange-100 grid md:grid-cols-2 items-center relative">
            <p className="text-lg">Le Chat: Your AI assistant for life and work.</p>
            <div className="flex gap-4 justify-self-center md:mr-24">
              <Link target="_blank" href={`https://apps.apple.com/us/app/le-chat-by-mistral-ai/id6740410176`}>
                <Image
                  src="/app-store.svg"
                  alt="App store icon"
                  width={120}
                  height={120}
                />
              </Link>
              <Link target="_blank" href={`https://play.google.com/store/apps/details?id=ai.mistral.chat`}>
                <Image
                  src="/google-play.svg"
                  alt="Google play icon"
                  width={120}
                  height={120}
                />
              </Link>
            </div>
            <Image
              className="absolute right-6 -bottom-10 hidden md:block"
              src="/animated-cat.gif"
              alt="Animated cat"
              width={125}
              height={125}
            />
          </div>
        </div>

        {/* Slideshow */}
        <div className="w-full my-22">
          <CompaniesSlideShow/>
        </div>

        {/* FYI Section */}
        <div>
          <div>

          </div>
          <div>
            
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer>
        <div className="relative bg-mistral-orange-100 h-13 ">
          <Image
              className="top-4 centered-image"
              src="/animated-cat.gif"
              alt="Animated cat"
              width={210}
              height={210}
          />
        </div>

        <div className="bg-mistral-orange-200 h-13"></div>
        <div className="bg-mistral-orange-300 h-13"></div>
        <div className="bg-mistral-orange-400 h-13"></div>
        <div className="bg-mistral-orange-500 h-13"></div>
        <div className="bg-mistral-orange-600 h-13"></div>

        <div className="px-5 py-16 bg-mistral-orange-100">
          <div className="grid md:grid-cols-5 gap-y-8 pb-15">
            <div className="grid gap-8 content-start md:col-span-2">
              <Link className="" href={`/`}>
                <Image
                  src="/black-logo.svg"
                  alt="Mistral AI black icon"
                  width={40}
                  height={40}
                />
              </Link>
              <div className="flex gap-4">
                <Link target="_blank" href={`https://apps.apple.com/us/app/le-chat-by-mistral-ai/id6740410176`}>
                  <Image
                    src="/app-store.svg"
                    alt="App store icon"
                    width={120}
                    height={120}
                  />
                </Link>
                <Link target="_blank" href={`https://play.google.com/store/apps/details?id=ai.mistral.chat`}>
                  <Image
                    src="/google-play.svg"
                    alt="Google play icon"
                    width={120}
                    height={120}
                  />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 md:col-span-3 md:grid-cols-4 gap-y-4">
              <div className="grid content-start gap-1">
                <p className="text-sm text-mistral-accent">Why Mistral</p>
                <Link className="text-sm" href={`/empty-page`}>About us</Link>
                <Link className="text-sm" href={`/empty-page`}>Our customers</Link>
                <Link className="text-sm" href={`/empty-page`}>Careers</Link>
                <Link className="text-sm" href={`/empty-page`}>Contact us</Link>
              </div>
              <div className="grid content-start gap-1">
                <p className="text-sm text-mistral-accent">Explore</p>
                <Link className="text-sm" href={`/empty-page`}>AI solutions</Link>
                <Link className="text-sm" href={`/empty-page`}>Partners</Link>
                <Link className="text-sm" href={`/empty-page`}>Research</Link>
                <Link className="text-sm" href={`/empty-page`}>Documentation</Link>
              </div>
              <div className="grid content-start gap-1">
                <p className="text-sm text-mistral-accent">Build</p>
                <Link className="text-sm" href={`/empty-page`}>La Plateforme</Link>
                <Link className="text-sm" href={`/empty-page`}>Le Chat</Link>
                <Link className="text-sm" href={`/empty-page`}>Try the API</Link>
              </div>
              <div className="grid content-start gap-1">
                <p className="text-sm text-mistral-accent">Legal</p>
                <Link className="text-sm" href={`/empty-page`}>Terms of service</Link>
                <Link className="text-sm" href={`/empty-page`}>Privacy policy</Link>
                <Link className="text-sm" href={`/empty-page`}>Data processing agreement</Link>
                <Link className="text-sm" href={`/empty-page`}>Legal notice</Link>
              </div>
            </div>
          </div>

          <div className="grid gap-8 mb-2 md:gap-0 md:grid-cols-5 ">
            {/* Get locales working */}
            <div className="grid gap-2 md:w-fit md:col-start-3 md:row-start-1">
              <hr className="text-mistral-gray md:text-mistral-text"/>
              <div className="flex items-center justify-between gap-4 hover:text-mistral-accent">
                <p className="text-sm">EN</p>
                <svg className="origin-center rotate-90" width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 7.86859L8.5 5.30859L5.94 5.30859L5.94 7.86859L8.5 7.86859Z" fill="#FA500F"></path><path d="M5.9375 5.29828L5.9375 2.73828L3.3775 2.73828L3.3775 5.29828L5.9375 5.29828Z" fill="#FA500F"></path><path d="M3.37891 2.73969L3.37891 0.179688L0.818907 0.179687L0.818907 2.73969L3.37891 2.73969Z" fill="#FA500F"></path><path d="M5.9375 10.4311L5.9375 7.87109L3.3775 7.87109L3.3775 10.4311L5.9375 10.4311Z" fill="#FA500F"></path><path d="M3.37891 12.9975L3.37891 10.4375L0.818907 10.4375L0.818907 12.9975L3.37891 12.9975Z" fill="#FA500F"></path></svg>
              </div>
            </div>
            <p className="text-sm md:col-start-1 md:row-start-1 md:self-end">Mistral AI © 2025</p>
            <div className="flex gap-7 px-3 md:col-start-5 md:row-start-1 md:justify-self-end md:pr-5">
              <Link target="_blank" href={`https://x.com/mistralai`}>
                <Image
                  src="/x.webp"
                  alt="X icon"
                  width={18}
                  height={18}
                />
              </Link>
              <Link target="_blank" className="" href={`https://www.linkedin.com/company/mistralai/`}>
                <Image
                  src="/linkedin.svg"
                  alt="Linkedin icon"
                  width={18}
                  height={18}
                />
              </Link>
              <Link target="_blank" className="" href={`https://discord.com/invite/mistralai`}>
                <Image
                  src="/discord.svg"
                  alt="Discord icon"
                  width={18}
                  height={18}
                />
              </Link>
            </div>
        </div> 
        </div> 
      </footer>
    </div>
  );
}
