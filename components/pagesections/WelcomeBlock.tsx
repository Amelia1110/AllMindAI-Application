import Image from "next/image";

export default function WelcomeBlock() {
    return (
        <>
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
                <p className="text-white text-xl md:text-2xl text-center mx-4">Amelia&apos;s fake version :)</p>
                <div className="w-full px-5 flex justify-center">
                <div className="bg-mistral-background-50 w-full max-w-135 h-12.5 flex justify-between items-center">
                    <input type="text" placeholder="Talk to le Chat" className="text-sm p-6 w-full outline-0"/>
                    <div className="w-6.5 h-6.5 m-3.25 p-1.5 bg-mistral-orange-500 hover:bg-mistral-orange-400 transition duration-100"> 
                    <Image
                        className="rotate-90"
                        src="/uparrow.svg"
                        alt="arrow"
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
        </>
    )
}