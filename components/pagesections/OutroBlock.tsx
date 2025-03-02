import Image from "next/image";
import Link from "next/link";

export default function OutroBlock() {
    return (
        <div className="grid mx-4 md:mx-6 mt-15 md:mt-0">
            <div className="bg-mistral-orange-100 w-full px-6 md:px-12 py-8 grid gap-10">
                <p>Announcements</p>
                <div className="md:flex justify-between items-end">
                    <span className="text-2xl md:text-3xl max-w-110 inline-block">
                            Announcing the all new le Chat: Your AI assistant for life and work. 
                        <div className="inline-block w-5.5 h-5.5 p-1.5 ml-3 bg-mistral-orange-500 hover:bg-mistral-orange-400 transition duration-100"> 
                            <Image
                                className="rotate-90"
                                src="/uparrow.svg"
                                alt="arrow"
                                width={40}
                                height={40}
                            />
                        </div>
                    </span>
                    <p className="pt-10">Feb 6, 2025</p>
                </div>
            </div>

            <div className="mt-20 relative">
                <Image
                    className="w-full h-120 object-cover"
                    src="/workers.webp"
                    alt="Workers"
                    width={3840}
                    height={1835}
                />
                <div className="absolute px-5 md:px-12 bottom-10 grid grid-cols-1 md:grid-cols-2 justify-items-between items-end w-full h-1/2 md:h-2/3">
                    <div className="grid gap-10 max-w-100">
                        <h1 className="text-white text-3xl md:text-5xl max-w-250">Build the future of secure, private AI.</h1>
                        <p className="text-white">Now seeking: Insatiably curious AI enthusiasts with an entrepreneurial spirit.</p>
                    </div>    
                    <Link target="_blank" href={`https://drive.google.com/file/d/1QDa9dW90jOzQoJtCYYPYClHTI2V2oDxi/view?usp=sharing`}  className="w-38 md:justify-self-end">
                        <div className="flex justify-between">
                            <p className="text-white py-2">View open roles</p>
                            <svg className="w-2.5 text-mistral-orange-500 transition duration-50" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.39166 4.93066H4.92969V7.39936H7.39166V4.93066Z" fill="currentColor"></path>
                                <path d="M4.92681 2.46875H2.46484V4.93744H4.92681V2.46875Z" fill="currentColor"></path>
                                <path d="M2.46197 0H0V2.46869H2.46197V0Z" fill="currentColor"></path>
                                <path d="M4.92681 7.39941H2.46484V9.86811H4.92681V7.39941Z" fill="currentColor"></path>
                                <path d="M2.46197 9.86133H0V12.33H2.46197V9.86133Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <hr className="text-white"/>
                    </Link>
                </div>
            </div>

            <div className="my-25 mx-10 grid items-center justify-center gap-8">
                <h1 className="text-center text-4xl md:text-6xl">The next chapter of AI is yours.</h1>
                <div className="flex items-center justify-center gap-8">
                    <Link target="_blank" href={`https://drive.google.com/file/d/1QDa9dW90jOzQoJtCYYPYClHTI2V2oDxi/view?usp=sharing`}  className="group">
                        <div className="flex gap-5 justify-between">
                            <p className="group-hover:text-mistral-orange-500 transition duration-200 py-2">Start building with Mistral AI</p>
                            <svg className="w-2.5 text-mistral-orange-500" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.39166 4.93066H4.92969V7.39936H7.39166V4.93066Z" fill="currentColor"></path>
                                <path d="M4.92681 2.46875H2.46484V4.93744H4.92681V2.46875Z" fill="currentColor"></path>
                                <path d="M2.46197 0H0V2.46869H2.46197V0Z" fill="currentColor"></path>
                                <path d="M4.92681 7.39941H2.46484V9.86811H4.92681V7.39941Z" fill="currentColor"></path>
                                <path d="M2.46197 9.86133H0V12.33H2.46197V9.86133Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <hr className=""/>
                    </Link>
                    <Link target="_blank" href={`https://drive.google.com/file/d/1QDa9dW90jOzQoJtCYYPYClHTI2V2oDxi/view?usp=sharing`}  className="group">
                        <div className="flex gap-5 justify-between">
                            <p className="group-hover:text-mistral-orange-500 transition duration-200 py-2">Talk to an expert</p>
                            <svg className="w-2.5 text-mistral-orange-500" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.39166 4.93066H4.92969V7.39936H7.39166V4.93066Z" fill="currentColor"></path>
                                <path d="M4.92681 2.46875H2.46484V4.93744H4.92681V2.46875Z" fill="currentColor"></path>
                                <path d="M2.46197 0H0V2.46869H2.46197V0Z" fill="currentColor"></path>
                                <path d="M4.92681 7.39941H2.46484V9.86811H4.92681V7.39941Z" fill="currentColor"></path>
                                <path d="M2.46197 9.86133H0V12.33H2.46197V9.86133Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <hr className=""/>
                    </Link>
                </div>
            </div>
        </div>
    )
}