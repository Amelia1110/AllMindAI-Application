import Image from "next/image";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

export default function CompaniesSlideShow() {
    return (
        <div className="relative mb-14 mt-40">
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
                fixedHeight: 70,
                autoScroll: {
                    speed: 0.75,
                    pauseOnHover: false, // Prevents pausing when hovering over the slider
                    pauseOnFocus: false,
                },
                }} extensions={{ AutoScroll }}>
                <SplideSlide>
                    <Image
                        className="w-auto h-full py-3"
                        src="/black-logo.svg"
                        alt="Orange logo"
                        width={100}
                        height={100}
                    />
                    </SplideSlide>
                <SplideSlide className="flex items-center ">
                    <p className="text-6xl">One platform. Many uses. For all humans</p>
                </SplideSlide>
            </Splide>
        </div>
    )
}