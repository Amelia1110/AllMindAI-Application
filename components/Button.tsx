import Link from "next/link";

interface ButtonProps {
    text: string;
}

export default function Button({text}: ButtonProps) {
    return (
        <Link target="_blank" href={`https://drive.google.com/file/d/1QDa9dW90jOzQoJtCYYPYClHTI2V2oDxi/view?usp=sharing`} className="bg-mistral-black flex flex-row w-fit p-2 px-4 gap-6 group hover:bg-mistral-orange-500 transition duration-200">
            <p className="text-sm text-white group-hover:text-white transition duration-50">{text}</p>
            <svg className="w-2.5 text-mistral-orange-500 group-hover:text-mistral-black group-hover:translate-x-1.5 transition duration-200" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.39166 4.93066H4.92969V7.39936H7.39166V4.93066Z" fill="currentColor"></path>
                <path d="M4.92681 2.46875H2.46484V4.93744H4.92681V2.46875Z" fill="currentColor"></path>
                <path d="M2.46197 0H0V2.46869H2.46197V0Z" fill="currentColor"></path>
                <path d="M4.92681 7.39941H2.46484V9.86811H4.92681V7.39941Z" fill="currentColor"></path>
                <path d="M2.46197 9.86133H0V12.33H2.46197V9.86133Z" fill="currentColor"></path>
            </svg>
        </Link>
    )
}