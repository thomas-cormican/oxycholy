import Navbar from "@/components/Navbar";
import ArrowDown from "@/components/ArrowDown";
import Logo from "@/components/Logo";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white dark:bg-black flex-col items-center text-black dark:text-white justify-between text-lg">
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,grey_1px,transparent_1px),linear-gradient(to_bottom,grey_1px,transparent_1px)] bg-[size:40px_40px] opacity-15"></div>
      <div className="flex flex-col justify-between items-center h-screen md:h-[unset] max-w-7xl w-full p-12 sm:p-4">
        <Navbar />
        <div className="flex bg-indigo-200/40 dark:bg-gradient-to-r from-[#bb1c4b] to-purple-900 rounded-md flex-auto my-16">
          <div className="relative flex md:flex-col place-items-center justify-center my-1 dar:backdrop-blur-sm bg-transparent dark:bg-gray-900/80">
            <div className="basis-1/2">
              <Logo width={500} />
            </div>
            <div className="basis-1/2">
              <h2 className="text-2xl pr-16 md:p-4 text-black dark:text-white sm:text-[16px] sm:leading-7 sm:pt-0 sm:pb-[30px]">
                We help businesses with{" "}
                <span className="text-[#db3969]">hassle-free</span> lead
                generation, allowing you to focus on what's{" "}
                <span className="text-[#db3969]">important</span> in your craft.{" "}
                <span className="text-[#db3969]">No leads, no payment.</span>
              </h2>
            </div>
          </div>
        </div>
        <ArrowDown />
      </div>
      <div
        id="about"
        className="relative text-white w-full py-28 z-10 bg-slate-900"
      >
        <div class="absolute inset-0 h-full w-full bg-[url(/pexels-fauxels.jpg)] opacity-30 bg-cover -z-10"></div>
        <div className="bg-gray-600/70 backdrop-blur-md rounded-md max-w-5xl w-full px-12 py-8 sm:px-4 m-auto">
          <div className="flex flex-col items-center max-w-5xl w-full mb-16">
            <h2 className="text-5xl mb-8 sm:text-4xl">
              Who Are <span className="text-[#db3969]">We</span>
            </h2>
            <p className="text-center">
              We're a Chiswick-based agency that helps home improvement
              companies by delivering top-tier, quote-ready leads through
              strategic advertising on popular social media sites. Our targeted
              approach not only frees you up to concentrate on your work, but
              also ensures your growth is driven by genuinely interested
              clients, making your business growth smooth and efficient.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-5xl w-full m-auto">
            <h2 className="text-5xl mb-8 sm:text-4xl">
              Our <span className="text-[#db3969]">Process</span>
            </h2>
            <div className="flex md:flex-col w-full justify-between">
              <div className="basis-[30%] md:mb-8">
                <div className="flex">
                  <div>
                    <span className="flex w-[50px] h-[50px] justify-center items-center text-center rounded-full bg-blue-500">
                      <span className="text-2xl">1</span>
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-2xl font-bold">Gather Content</h4>
                    <p className="text-[16px]">
                      In the initial step, we collect visuals that highlight
                      your craftsmanship. These form the foundation of our
                      strategy, serving to attract a greater number of potential
                      clients to your business.
                    </p>
                  </div>
                </div>
              </div>
              <div className="basis-[30%] md:mb-8">
                <div className="flex">
                  <div>
                    <span className="flex w-[50px] h-[50px] justify-center items-center text-center rounded-full bg-blue-500">
                      <span className="text-2xl">2</span>
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-2xl font-bold">Launch Ads</h4>
                    <p className="text-[16px]">
                      Next, we launch ads based on the content we've collected.
                      These ads are strategically designed and placed on popular
                      social media platforms to capture clients attention.
                    </p>
                  </div>
                </div>
              </div>
              <div className="basis-[30%] md:mb-8">
                <div className="flex">
                  <div>
                    <span className="flex w-[50px] h-[50px] justify-center items-center text-center rounded-full bg-blue-500">
                      <span className="text-2xl">3</span>
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-2xl font-bold">Generate Leads</h4>
                    <p className="text-[16px]">
                      Finally, we collect information from individuals who are
                      genuinely interested in your services. Prioritising
                      quote-ready leads and eliminating tire kickers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="w-full bg-slate-700 dark:bg-black">
        <div className="flex flex-col items-center max-w-5xl w-full px-12 py-16 m-auto sm:px-4">
          <h2 className="text-5xl mb-8 text-white sm:text-4xl">Contact Us</h2>
          <ContactForm />
        </div>
      </div>
      <footer className="w-full p-4 border-t-[1px] border-t-gray-500 text-center">
        <Logo width={400} />
        <p className="text-sm text-gray-500">
          <a href="https://www.privacypolicies.com/live/8c48d388-85e9-4f33-9e2c-8f8701a286e2">
            Our Privacy Policy
          </a>
        </p>
        <p className="text-sm text-gray-500">
          Oxycholy - @2024 All Rights Reserved
        </p>
      </footer>
    </main>
  );
}
