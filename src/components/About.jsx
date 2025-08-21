import React, { useState } from 'react';

function About() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: "/assets/gallery1.jpg", alt: "Training Session 1" },
    { src: "/assets/gallery2.jpg", alt: "Training Session 2" },
    { src: "/assets/gallery3.jpg", alt: "Training Session 3" },
    { src: "/assets/gallery4.jpg", alt: "Training Session 4" },
    { src: "/assets/gallery5.jpg", alt: "Training Session 5" },
    { src: "/assets/gallery6.jpg", alt: "Training Session 6" }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentImage(index);
  };

  return (
    <section 
      id="about" 
      className="scroll-mt-24 relative text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6"
      style={{
        backgroundImage: "url('/assets/about-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0.5%, rgba(0,0,0,0.7) 100%)"
        }}
      ></div>
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title - Responsive sizing */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 tracking-wide">
          About the Creator
        </h2>
        
        {/* Main content - Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          
          {/* Text Content - Full width on mobile, comes first */}
          <div className="order-1 lg:order-1 space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I'm Samarth Vats, from Dehradun. And I built Projekt Valhalla because fitness gave me more than anyone or anything else ever could.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              But this isn't some success story bullshit. I still fight doubt every day. 
              I still wrestle with fear, with that voice that says I'm not good enough, that I don't belong. 
              The difference is, now I know how to fight back.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Fitness became my battleground - the place where I learned to push through when everything in me wanted to quit. 
              Where I discovered that the strongest muscle you can build is your mind. Projekt Valhalla exists because I refuse to accept that mediocrity is inevitable. 
              This isn't another fitness program. It's a challenge. Are you tired of being held back by your own limitations? Are you ready to face what breaks others?
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I'm not here to sell you comfort or promise easy results. I'm here to ask one question: Do you have what it takes to become who you're supposed to be?
            </p>
          </div>

          {/* Image Gallery - Full width on mobile, comes second */}
          <div className="order-2 lg:order-2 relative w-full" data-carousel="slide">
            <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg bg-gray-900">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                  data-carousel-item={index === currentImage}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading='lazy'
                    className="absolute block w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/800x600/333/fff?text=Training+Session+${index + 1}`;
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Slider indicators - Responsive sizing */}
            <div className="absolute z-30 flex space-x-2 sm:space-x-3 -translate-x-1/2 bottom-3 sm:bottom-5 left-1/2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentImage 
                      ? 'bg-white scale-110' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-current={index === currentImage}
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            {/* Slider controls - Enhanced for mobile */}
            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-2 sm:px-4 cursor-pointer group focus:outline-none"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white transition-all duration-300">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white rtl:rotate-180" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                </svg>
              </span>
            </button>

            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-2 sm:px-4 cursor-pointer group focus:outline-none"
              onClick={nextImage}
              aria-label="Next image"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white transition-all duration-300">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white rtl:rotate-180" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;