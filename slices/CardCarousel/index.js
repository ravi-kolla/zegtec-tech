import React, {useState} from 'react';
import { Bounded } from "../../components/Bounded";


const Card = ({ item }) => {
  const image = item.image;

  return (
    <div class="grid-cols-1 md:grid-cols-3 lg:grid-cols-4 card-carousel-image flex flex-shrink-0 relative w-full sm:w-auto">
        <img src={item.image.url} alt="black chair and white table" class="object-cover object-center card-carousel-image" />
        <div class="bg-gray-800 bg-opacity-30 absolute bottom-0 p-6">
            <div class="">
                <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">{item.heading}</h2>
                <p class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">{item.description}</p>
            </div>
        </div>
    </div>
  );
};


const CardCarousel = ({ slice }) => {

    let defaultTransform = 0;

    function goNext() {
      console.log("defaultTransform", defaultTransform);
        defaultTransform = defaultTransform - 375;
        console.log("defaultTransform 2", defaultTransform);
        var slider = document.getElementById("slider");
        if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
        console.log("(Math.abs(defaultTransform)", Math.abs(defaultTransform));
          console.log("slider.scrollWidth / 1.7", slider.scrollWidth / 1.7);
        slider.style.transform = "translateX(" + defaultTransform + "px)";
    }

    function goPrev() {
        var slider = document.getElementById("slider");
        if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
        else defaultTransform = defaultTransform + 375;
        slider.style.transform = "translateX(" + defaultTransform + "px)";
    }

  return (
      <Bounded as="section" className="bg-white">
    <div class="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
        <div class="w-full relative flex items-center justify-center">
            <button aria-label="slide backward" class="z-30 left-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev" onClick={goPrev} >
                <svg class="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <div class="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <div id="slider" class="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                  {slice.items.map((item) => (
                    <Card key={item.image.url} item={item} />
                  ))}
                </div>
            </div>
            <button aria-label="slide forward" class="z-30 right-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next" onClick={goNext}>
                <svg class="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </div>
    </Bounded>
  );
};

export default CardCarousel;
