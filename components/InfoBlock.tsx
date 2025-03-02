interface InfoBlockProps {
    title: string;
    text: string;
  }

export default function InfoBlock({title, text}: InfoBlockProps) {
    return (
        <div className="my-10 grid gap-7">
            <h1 className="text-3xl">{title}</h1>
            <div className="flex gap-6">
                <div className="min-w-5.5 max-w-5.5 min-h-5.5 max-h-5.5">
                    <svg viewBox="0 0 21 19" className=" text-mistral-orange-500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0039 10.9983L21.0039 8.00293L18.0086 8.00293L18.0086 10.9983L21.0039 10.9983Z" fill="currentColor"></path>
                        <path d="M18.0117 7.99143L18.0117 4.99609L15.0164 4.99609L15.0164 7.99143L18.0117 7.99143Z" fill="currentColor"></path>
                        <path d="M15.0117 4.99583L15.0117 2.00049L12.0164 2.00049L12.0164 4.99582L15.0117 4.99583Z" fill="currentColor"></path>
                        <path d="M18.0117 13.9934L18.0117 10.998L15.0164 10.998L15.0164 13.9934L18.0117 13.9934Z" fill="currentColor"></path>
                        <path d="M15.0039 10.9983L15.0039 8.00293L0.00382328 8.00293L0.00382315 10.9983L15.0039 10.9983Z" fill="currentColor"></path>
                        <path d="M15.0117 17.0002L15.0117 14.0049L12.0164 14.0049L12.0164 17.0002L15.0117 17.0002Z" fill="currentColor"></path>
                    </svg>
                </div>
                <p className="w-max-95">{text}</p>
            </div>
        </div>
    )
}