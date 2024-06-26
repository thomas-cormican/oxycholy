import Navbar from "@/components/Navbar";
import ArrowDown from "@/components/ArrowDown";
import Logo from "@/components/Logo";
import ContactForm from "@/components/ContactForm";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-[#0b0b0f] flex-col items-center text-white justify-between text-lg">
      <div className="flex flex-col relative justify-between items-center w-full">
        {/* <video
          autoPlay
          loop
          muted
          className="absolute top-0  
            min-w-full w-full min-h-full h-full opacity-45 object-cover"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className="flex flex-col relative justify-between items-center min-h-screen max-w-7xl w-full p-12 sm:p-4">
          <Navbar />
          <div className="z-10 flex  from-[#bb1c4b]/60 md:flex-none to-purple-900/60 backdrop-blur-sm rounded-md flex-auto my-16">
            <div className="relative flex md:flex-col place-items-center justify-center my-1 backdrop-blur-sm ">
              <div className="flex flex-col items-center basis-1/2 p-8 md:p-12">
                <Logo width={450} />
              </div>
              <div className="basis-1/2 flex flex-col items-center">
                <Image
                  src="/header-art.svg"
                  width={400}
                  height={300}
                  className="mb-12 md:px-12"
                />
                <h2 className="text-2xl pr-16 md:p-4 text-white sm:text-[16px] sm:leading-7 sm:pt-0 sm:pb-[30px] md:pb-[30px] md:text-center">
                  We help businesses with{" "}
                  <span className="text-[#db3969]">hassle-free</span> lead
                  generation, allowing you to focus on what's{" "}
                  <span className="text-[#db3969]">important</span> in your
                  craft.{" "}
                  <span className="text-[#db3969]">No leads, no payment.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center z-10">
            <p className="text-sm text-gray-300 mb-8 text-center">
              Using the latest methods and aiming for real results, we help
              businesses grow in the fast-changing online world.
            </p>
            <ArrowDown />
          </div>
        </div>
      </div>
      <div
        id="about"
        className="relative text-white w-full py-28 z-10 bg-slate-900"
      >
        <div className="absolute inset-0 h-full w-full bg-[url(/pexels-fauxels.jpg)] opacity-30 bg-cover -z-10"></div>
        <div className="bg-gray-600/70 backdrop-blur-md rounded-md max-w-5xl w-full px-12 py-8 sm:px-4 m-auto">
          <div className="flex flex-col items-center max-w-5xl w-full mb-16">
            <h2 className="text-5xl mb-8 sm:text-4xl">
              Who Are <span className="text-[#db3969]">We</span>
            </h2>
            <p className="text-center">
              We're a Hull-based agency that helps promising businesses with
              top-tier, quote-ready leads through strategic advertising on
              popular social media sites. Our targeted approach doesn't only
              free you up to concentrate on your work, but also ensures that
              your growth is driven by genuinely interested clients, making your
              business growth smooth and efficient.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-5xl w-full m-auto">
            <h2 className="text-5xl mb-8 sm:text-4xl">
              Our <span className="text-[#db3969]">Process</span>
            </h2>
            <div className="flex md:flex-col w-full justify-between">
              <div className="basis-[30%] md:mb-8">
                <Card heading="Gather Content" number={1}>
                  In the initial step, we collect visuals that highlight your
                  craftsmanship. These form the foundation of our strategy,
                  serving to attract a greater number of potential clients to
                  your business.
                </Card>
              </div>
              <div className="basis-[30%] md:mb-8">
                <Card heading="Launch Ads " number={2}>
                  Next, we launch ads based on the content we've collected.
                  These ads are strategically designed and placed on popular
                  social media platforms to capture clients attention.
                </Card>
              </div>
              <div className="basis-[30%] md:mb-8">
                <Card heading="Generate Leads" number={3}>
                  Finally, we collect information from individuals who are
                  genuinely interested in your services. Prioritising
                  quote-ready leads and eliminating tire kickers.
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="w-full bg-gradient-to-r from-[#bb1c4b]/50 md:flex-none to-purple-900/50"
      >
        <div className="flex flex-col items-center max-w-5xl w-full px-12 py-16 m-auto sm:px-4 ">
          <h2 className="text-5xl mb-8 text-white sm:text-4xl">Contact Us</h2>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </main>
  );
}
