import Image from "next/image";
import Link from "next/link";

export default function DownloadBlock() {
    return (
        <>
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
        </>
    )
}