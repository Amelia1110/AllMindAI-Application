import Head from "next/head";

import CompaniesSlideShow from "@/components/CompaniesSlideShow";
import MistralHeader from "@/components/pagesections/MistralHeader";
import MistralFooter from "@/components/pagesections/MistralFooter";
import WelcomeBlock from "@/components/pagesections/WelcomeBlock";
import DownloadBlock from "@/components/pagesections/DownloadBlock";
import FYIBlock from "@/components/pagesections/FYIBlock";

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

      </main>

      {/* Footer */}
      <MistralFooter/>
    </div>
  );
}
