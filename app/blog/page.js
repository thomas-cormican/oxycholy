import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function page() {
  return (
    <div className="flex flex-col items-center text-lg">
      <div className="flex flex-col items-center max-w-7xl w-full p-12 sm:p-4">
        <Navbar />
        <div className="flex items-center">
          <h1 className="text-5xl font-semibold">Blog</h1>
        </div>

        <div className="mt-8">
          <div class="mt-8">
            <h2 className="text-2xl font-bold">
              The Art of Sustainable Living
            </h2>
            <p>John Doe</p>
            <p className="text-sm text-gray-500">April 15, 2024</p>
          </div>

          <div class="mt-8">
            <h2 className="text-2xl font-bold">
              Unlocking Creativity: Tips for Writers
            </h2>
            <p>Jane Smith</p>
            <p className="text-sm text-gray-500">April 18, 2024</p>
          </div>

          <div class="mt-8">
            <h2 className="text-2xl font-bold">
              Exploring the Wonders of Deep Sea Diving
            </h2>
            <p>David Johnson</p>
            <p className="text-sm text-gray-500">April 20, 2024</p>
          </div>

          <div class="mt-8">
            <h2 className="text-2xl font-bold">
              10 Delicious Vegan Recipes for Beginners
            </h2>
            <p>Amy Lee</p>
            <p className="text-sm text-gray-500">April 22, 2024</p>
          </div>

          <div class="mt-8">
            <h2 className="text-2xl font-bold">
              The Power of Mindfulness: Achieving Inner Peace
            </h2>
            <p>Michael Thompson</p>
            <p className="text-sm text-gray-500">April 25, 2024</p>
          </div>

          <div class="mt-8">
            <h2 className="text-2xl font-bold">
              How to Start Your Own Podcast: A Beginner's Guide
            </h2>
            <p>Samantha Green</p>
            <p className="text-sm text-gray-500">April 28, 2024</p>
          </div>

          <div class="mt-8">
            <h2 className="text-2xl font-bold">
              Traveling on a Budget: Tips and Tricks
            </h2>
            <p>Chris Williams</p>
            <p className="text-sm text-gray-500">May 1, 2024</p>
          </div>

          <div class="mt-8">
            <h2 className="text-2xl font-bold">
              The Benefits of Yoga for Mental Health
            </h2>
            <p>Emily Davis</p>
            <p className="text-sm text-gray-500">May 4, 2024</p>
          </div>

          <div class="mt-8">
            <h2 className="text-2xl font-bold">
              Discovering Hidden Gems: Off-the-Beaten-Path Destinations
            </h2>
            <p>Robert Clark</p>
            <p className="text-sm text-gray-500">May 7, 2024</p>
          </div>

          <div class="mt-8">
            <h2 className="text-2xl font-bold">
              Embracing Minimalism: Simplify Your Life
            </h2>
            <p>Laura Adams</p>
            <p className="text-sm text-gray-500">May 10, 2024</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
