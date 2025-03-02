import Link from "next/link";
import Image from "next/image";

export default function MistralHeader() {
    return (
        <>
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
        </>
    )
}