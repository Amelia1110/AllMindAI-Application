import InfoBlock from "../InfoBlock";
import Image from "next/image";

export default function FYIBlock() {
    return (
        <div className="grid md:grid-cols-2 h-fit gap-16 md:gap-25 mx-4 md:ml-0 md:mr-6 relative">
          <div className="relative">
            <Image
                className="md:absolute md:top-0 md:left-0 md:w-fit h-85 md:h-full object-cover"
                src="/blocks.svg"
                alt="Beige blocks"
                width={3840}
                height={1835}
            />
            <div className="absolute top-1/4 md:sticky md:top-1/2 md:transform w-80">
                <span className="text-3xl md:text-5xl md:m-6 inline-block w-full">Your AI future belongs in your hands.
                <Image
                    className="h-6 inline-block md:h-8 -translate-y-1"
                    src="/orangeflag.svg"
                    alt="Mistral AI black icon"
                    width={40}
                    height={40}
                />
                </span>
            </div>
          </div>
          <div>
            <hr className="text-mistral-div"/>
            <InfoBlock 
              title="Customizable, from pre-training to the real world."
              text="World class, benchmark-setting open models to customize, distill, fine-tune, iterate, and build on."
            />
            <hr className="text-mistral-div"/>
            <InfoBlock 
              title="Private and portable."
              text="A comprehensive, enterprise-grade AI platform that can be deployed anywhere—on-premises, cloud, edge, devices, data centers, and more."
            />
            <hr className="text-mistral-div"/>
            <InfoBlock 
              title="Transparent and trustworthy."
              text="Strongest global contributor to open source AI and AI policy. Mistral AI is the world&apos;s greenest and leading independent AI lab."
            />
            <hr className="text-mistral-div"/>
            <InfoBlock 
              title="Deeply engaged solutioning and value delivery."
              text="Hands-on assistance from the world&apos;s best AI engineers and scientists across deployment, solutioning, safety, and beyond."
            />
            <hr className="text-mistral-div"/>
            <InfoBlock 
              title="Delightful interfaces."
              text="Bringing frontier intelligence to life with intuitive user experiences across life and work."
            />
            <hr className="text-mistral-div"/>
          </div>
        </div>
    )
}