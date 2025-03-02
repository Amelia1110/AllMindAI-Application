import Image from "next/image";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

export default function CompaniesSlideShow() {
    return (
        <div className="relative mx-4 md:mx-6">
            {/* Gradients */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-mistral-background-100 via-mistral-background-100/50 to-transparent pointer-events-none z-10"></div>

            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-mistral-background-100 via-mistral-background-100/50 to-transparent pointer-events-none z-10"></div>
        
            {/* Slide */}
            <Splide 
                className="w-full"
                aria-label="Companies"
                options={{
                type: 'loop',
                drag: false,
                direction: 'ltr',
                arrows: false,
                gap: '5.75rem', // Adds spacing between slides
                pagination: false,
                autoWidth: true,
                fixedHeight: 38,
                autoScroll: {
                    speed: 0.75,
                    pauseOnHover: false, // Prevents pausing when hovering over the slider
                    pauseOnFocus: false,
                },
                }} extensions={{ AutoScroll }}>
                <SplideSlide>
                <Image
                    className="w-auto h-full"
                    src="/orange.webp"
                    alt="Orange logo"
                    width={100}
                    height={100}
                />
                </SplideSlide>
                <SplideSlide>
                <Image
                    className="w-auto h-full"
                    src="/quora.webp"
                    alt="Quora logo"
                    width={100}
                    height={100}
                />
                </SplideSlide>
                <SplideSlide>
                <Image
                    className="w-auto h-full"
                    src="/sap.webp"
                    alt="SAPlogo"
                    width={100}
                    height={100}
                />
                </SplideSlide>
                <SplideSlide>
                <Image
                    className="w-auto h-full"
                    src="/snowflake.webp"
                    alt="Snowflake logo"
                    width={100}
                    height={100}
                />
                </SplideSlide>
                <SplideSlide>
                <Image
                    className="w-auto h-full"
                    src="/belfius.webp"
                    alt="Belfius logo"
                    width={100}
                    height={100}
                />
                </SplideSlide>
                <SplideSlide>
                <Image
                    className="w-auto h-full"
                    src="/bnpparibas.webp"
                    alt="BNP Paribas logo"
                    width={100}
                    height={100}
                />
                </SplideSlide>
                <SplideSlide>
                <Image
                    className="w-auto h-full"
                    src="/brave.webp"
                    alt="Brave logo"
                    width={100}
                    height={100}
                />
                </SplideSlide>
                <SplideSlide>
                <Image
                    className="w-auto h-full"
                    src="/cloudflare.webp"
                    alt="Cloudflare logo"
                    width={100}
                    height={100}
                />
                </SplideSlide>
                <SplideSlide>
                <Image
                    className="w-auto h-full"
                    src="/cmacgm.webp"
                    alt="CMA CGM logo"
                    width={100}
                    height={100}
                />
                </SplideSlide>
                <SplideSlide>
                <Image
                    className="w-auto h-full"
                    src="/francetravail.webp"
                    alt="France Travail logo"
                    width={100}
                    height={100}
                />
                </SplideSlide>
                <SplideSlide>
                <Image
                    className="w-auto h-full"
                    src="/harvey.webp"
                    alt="Harvey logo"
                    width={100}
                    height={100}
                />
                </SplideSlide>
                <SplideSlide>
                <Image
                    className="w-auto h-full"
                    src="/huggingface.webp"
                    alt="Hugging Face logo"
                    width={100}
                    height={100}
                />
                </SplideSlide>
                <SplideSlide>
                <Image
                    className="w-auto h-full"
                    src="/ibm.webp"
                    alt="IBM logo"
                    width={100}
                    height={100}
                />
                </SplideSlide>
                <SplideSlide>
                <Image
                    className="w-auto h-full"
                    src="/mars.webp"
                    alt="Mars logo"
                    width={100}
                    height={100}
                />
                </SplideSlide>
                <SplideSlide>
                <Image
                    className="w-auto h-full"
                    src="/mongodb.webp"
                    alt="MongoDB logo"
                    width={100}
                    height={100}
                />
                </SplideSlide>
                <SplideSlide>
                <Image
                    className="w-auto h-full"
                    src="/octoai.webp"
                    alt="Octo AI logo"
                    width={100}
                    height={100}
                />
                </SplideSlide>
            </Splide>
        </div>
    )
}