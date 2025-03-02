import Link from "next/link";
import Image from "next/image";

export default function MistralHeader() {
    return (
        <>
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
        </>
    )
}