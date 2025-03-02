import Head from "next/head";

import CompaniesSlideShow from "@/components/pagesections/CompaniesSlideShow";
import MistralHeader from "@/components/pagesections/MistralHeader";
import MistralFooter from "@/components/pagesections/MistralFooter";
import WelcomeBlock from "@/components/pagesections/WelcomeBlock";
import DownloadBlock from "@/components/pagesections/DownloadBlock";
import FYIBlock from "@/components/pagesections/FYIBlock";
import MistralSlideShow from "@/components/pagesections/MistralSlideShow";
import DemosBlock from "@/components/pagesections/DemosBlock";
import OutroBlock from "@/components/pagesections/OutroBlock";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Mistral AI | Frontier AI in your hands</title>
      </Head>
      <MistralHeader/>

      <main>
        {/* Home */}
        <WelcomeBlock/>

        {/* Download Options Block */}
        <DownloadBlock/>

        {/* Slideshow */}
        <div className="w-full my-22">
          <CompaniesSlideShow/>
        </div>

        {/* FYI Section */}
        <FYIBlock/>

        {/* Second Slideshow*/}
        <MistralSlideShow/>

        {/* Demo Images */}
        <DemosBlock/>

        {/* Outro */}
        <OutroBlock/>
      </main>

      {/* Footer */}
      <MistralFooter/>
    </div>
  );
}
