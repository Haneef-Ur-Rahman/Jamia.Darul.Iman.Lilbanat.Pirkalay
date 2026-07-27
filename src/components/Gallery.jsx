import { useState, useEffect } from 'react';
import img0 from '../assets/images/zero.png';
import img1 from '../assets/images/one.jpeg';
import img2 from '../assets/images/two.jpeg';
import img3 from '../assets/images/three.jpeg';
import img4 from '../assets/images/four.jpeg';
import img5 from '../assets/images/five.jpeg';
import img6 from '../assets/images/six.jpeg';
import img7 from '../assets/images/seven.png';
import img8 from '../assets/images/eight.png';
import img9 from '../assets/images/nine.png';

const images = [
  { src: img0 },
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
  { src: img8 },
  { src: img9 },
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const totalImages = images.length;

  // Auto-play: har 4 seconds mein image change hogi
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const nextSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
      setIsFading(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
      setIsFading(false);
    }, 500);
  };

  const goToSlide = (index) => {
    if (index === currentIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsFading(false);
    }, 600);
  };

  return (
    <section id="gallery" className="pt-2 md:pt-5 lg:pt-6 pb-8 md:pb-12 lg:pb-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-56 h-56 bg-brand-maroon/5 rounded-full blur-2xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-brand-gold/5 rounded-full blur-2xl translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 mb-6 md:mb-8 lg:mb-10 flex flex-col lg:flex-row justify-between items-center gap-3">
        <div className="flex flex-col items-center lg:items-start gap-2">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse" />
            <span className="text-brand-maroon font-semibold text-[10px] tracking-[0.15em] uppercase urdu-text">
              ہماری گیلری
            </span>
          </div>
          <h2 className="font-headline text-brand-maroon urdu-text text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center lg:text-right font-bold leading-tight">
            ہمارا تعلیمی ماحول
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-brand-gold/60 via-brand-gold to-brand-gold/60 rounded-full" />
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-brand-maroon/5 aspect-[3/2] max-h-[320px] md:max-h-[400px]">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${currentIndex === idx
                ? isFading
                  ? 'opacity-0'
                  : 'opacity-100'
                : 'opacity-0'
                }`}
            >
              <div className="group relative w-full h-full rounded-xl lg:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-brand-maroon/20 transition-all duration-500">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/60 via-brand-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center text-white text-xs urdu-text font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {img.alt}
                </div>
              </div>
            </div>
          ))}

          {/* Previous Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center text-brand-maroon hover:scale-105 border border-brand-maroon/10"
            aria-label="Previous"
          >
            <span className="material-symbols-outlined text-2xl md:text-3xl">chevron_left</span>
          </button>

          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center text-brand-maroon hover:scale-105 border border-brand-maroon/10"
            aria-label="Next"
          >
            <span className="material-symbols-outlined text-2xl md:text-3xl">chevron_right</span>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-4 md:mt-6">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx
                ? 'bg-brand-gold w-6'
                : 'bg-brand-maroon/20 hover:bg-brand-maroon/40'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;