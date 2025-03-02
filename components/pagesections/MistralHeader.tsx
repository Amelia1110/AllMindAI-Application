import { useEffect, useState } from "react";
import Link from "next/link";

export default function MistralHeader() {
    const [headerClass, setHeaderClass] = useState("clear");
    const [backgroundClass, setBackgroundClass] = useState("clear");
    const [iconClass, setIconClass] = useState("clear");

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setHeaderClass("blurry");
                setBackgroundClass("blurryback");
                setIconClass("blurryicon");
            } else {
                setHeaderClass("default");
                setBackgroundClass("defaultback");
                setIconClass("defaulticon");
            }
        },
        { threshold: 0.3 }
        );

        const target = document.querySelector("#welcome-image");
        if (target) observer.observe(target);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Mobile Header */}
            <header
                className={`lg:hidden flex justify-between items-center p-5 h-22 fixed w-full top-0 z-100 transition-all duration-300 ${headerClass}`}
            >
                <Link target="_blank" href={`/`}>
                <svg width="41" height="29" viewBox="0 0 41 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1323_477)">
                        <path d="M11.7053 0H5.85156V5.79928H11.7053V0Z" fill="currentColor"></path>
                        <path d="M35.1272 0H29.2734V5.79928H35.1272V0Z" fill="currentColor"></path>
                        <path d="M17.559 5.79932H5.85156V11.5986H17.559V5.79932Z" fill="currentColor"></path>
                        <path d="M35.1293 5.79932H23.4219V11.5986H35.1293V5.79932Z" fill="currentColor"></path>
                        <path d="M35.1239 11.5986H5.85156V17.3979H35.1239V11.5986Z" fill="currentColor"></path>
                        <path d="M11.7053 17.3979H5.85156V23.1972H11.7053V17.3979Z" fill="currentColor"></path>
                        <path d="M23.4162 17.3979H17.5625V23.1972H23.4162V17.3979Z" fill="currentColor"></path>
                        <path d="M35.1272 17.3979H29.2734V23.1972H35.1272V17.3979Z" fill="currentColor"></path>
                        <path d="M17.5648 23.2007H0V29H17.5648V23.2007Z" fill="currentColor"></path>
                        <path d="M40.9867 23.2007H23.4219V29H40.9867V23.2007Z" fill="currentColor"></path>
                        <path d="M11.7072 0H5.85352V5.79928H11.7072V0Z" fill="currentColor"></path>
                        <path d="M35.1252 0H29.2715V5.79928H35.1252V0Z" fill="currentColor"></path>
                        <path d="M17.561 5.79932H5.85352V11.5986H17.561V5.79932Z" fill="currentColor"></path>
                        <path d="M35.1254 5.79932H23.418V11.5986H35.1254V5.79932Z" fill="currentColor"></path>
                        <path d="M35.1258 11.5986H5.85352V17.3979H35.1258V11.5986Z" fill="currentColor"></path>
                        <path d="M11.7072 17.3979H5.85352V23.1972H11.7072V17.3979Z" fill="currentColor"></path>
                        <path d="M23.4162 17.3979H17.5625V23.1972H23.4162V17.3979Z" fill="currentColor"></path>
                        <path d="M35.1252 17.3979H29.2715V23.1972H35.1252V17.3979Z" fill="currentColor"></path>
                        <path d="M17.5648 23.2007H0V29H17.5648V23.2007Z" fill="currentColor"></path>
                        <path d="M40.9828 23.2007H23.418V29H40.9828V23.2007Z" fill="currentColor"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_1323_477">
                        <rect width="41" height="29" fill="currentColor"></rect>
                        </clipPath>
                    </defs>
                </svg>
                </Link>
                <svg
                width="25"
                height="19"
                viewBox="0 0 25 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M0.890625 1.5H24.8906" stroke="currentColor" strokeWidth="3"></path>
                <path d="M0.890625 9.5H24.8906" stroke="currentColor" strokeWidth="3"></path>
                <path d="M0.890625 17.5H24.8906" stroke="currentColor" strokeWidth="3"></path>
                </svg>
            </header>

            {/* Desktop Header */}
            <header
                className={`hidden items-center p-6 lg:block h-30 w-full fixed top-0 z-100 ${headerClass} transition-all duration-300`}
            >
                <div className="h-full flex self-center justify-between items-center">
                    <Link target="_blank"  href={`/`}>
                        <svg width="41" height="29" viewBox="0 0 41 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1323_477)">
                                <path d="M11.7053 0H5.85156V5.79928H11.7053V0Z" fill="currentColor"></path>
                                <path d="M35.1272 0H29.2734V5.79928H35.1272V0Z" fill="currentColor"></path>
                                <path d="M17.559 5.79932H5.85156V11.5986H17.559V5.79932Z" fill="currentColor"></path>
                                <path d="M35.1293 5.79932H23.4219V11.5986H35.1293V5.79932Z" fill="currentColor"></path>
                                <path d="M35.1239 11.5986H5.85156V17.3979H35.1239V11.5986Z" fill="currentColor"></path>
                                <path d="M11.7053 17.3979H5.85156V23.1972H11.7053V17.3979Z" fill="currentColor"></path>
                                <path d="M23.4162 17.3979H17.5625V23.1972H23.4162V17.3979Z" fill="currentColor"></path>
                                <path d="M35.1272 17.3979H29.2734V23.1972H35.1272V17.3979Z" fill="currentColor"></path>
                                <path d="M17.5648 23.2007H0V29H17.5648V23.2007Z" fill="currentColor"></path>
                                <path d="M40.9867 23.2007H23.4219V29H40.9867V23.2007Z" fill="currentColor"></path>
                                <path d="M11.7072 0H5.85352V5.79928H11.7072V0Z" fill="currentColor"></path>
                                <path d="M35.1252 0H29.2715V5.79928H35.1252V0Z" fill="currentColor"></path>
                                <path d="M17.561 5.79932H5.85352V11.5986H17.561V5.79932Z" fill="currentColor"></path>
                                <path d="M35.1254 5.79932H23.418V11.5986H35.1254V5.79932Z" fill="currentColor"></path>
                                <path d="M35.1258 11.5986H5.85352V17.3979H35.1258V11.5986Z" fill="currentColor"></path>
                                <path d="M11.7072 17.3979H5.85352V23.1972H11.7072V17.3979Z" fill="currentColor"></path>
                                <path d="M23.4162 17.3979H17.5625V23.1972H23.4162V17.3979Z" fill="currentColor"></path>
                                <path d="M35.1252 17.3979H29.2715V23.1972H35.1252V17.3979Z" fill="currentColor"></path>
                                <path d="M17.5648 23.2007H0V29H17.5648V23.2007Z" fill="currentColor"></path>
                                <path d="M40.9828 23.2007H23.418V29H40.9828V23.2007Z" fill="currentColor"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_1323_477">
                                <rect width="41" height="29" fill="currentColor"></rect>
                                </clipPath>
                            </defs>
                        </svg>
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
                        <div className="flex p-4 group">
                        <div className={`${backgroundClass} py-2 px-3 flex gap-4 justify-between items-center`}>
                            <p className="group-hover:text-mistral-text transition duration-150 text-sm">Try the API</p>  
                            <div className={`flex w-2 h-2 mr-1 items-center ${iconClass}`}>
                                <svg className="group-hover:text-mistral-orange-400 group-hover:translate-x-1 transition duration-150" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.39166 4.93066H4.92969V7.39936H7.39166V4.93066Z" fill="currentColor"></path>
                                    <path d="M4.92681 2.46875H2.46484V4.93744H4.92681V2.46875Z" fill="currentColor"></path>
                                    <path d="M2.46197 0H0V2.46869H2.46197V0Z" fill="currentColor"></path>
                                    <path d="M4.92681 7.39941H2.46484V9.86811H4.92681V7.39941Z" fill="currentColor"></path>
                                    <path d="M2.46197 9.86133H0V12.33H2.46197V9.86133Z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                        </div>
                        <div className="flex p-4 group">
                        <div className={`${backgroundClass} py-2 px-3 flex gap-4 justify-between items-center`}>
                            <p className="group-hover:text-mistral-text transition duration-150  text-sm">Talk to sales</p>      
                            <div className={`flex w-2 h-2 mr-1 items-center ${iconClass}`}>
                                <svg className="group-hover:text-mistral-orange-400 group-hover:translate-x-1 transition duration-150" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    );
}