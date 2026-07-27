import { useState, useRef } from 'react'
import videoSrc from '../assets/images/video.mp4'

function About() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <section id="about" className="pt-4 md:pt-8 lg:pt-10 pb-6 md:pb-10 lg:pb-12 bg-surface-container-low/30 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-56 h-56 bg-brand-maroon/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-maroon/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-7 items-center relative z-10">

        {/* Video Player */}
        <div
          className="animate-fadeInUp relative group order-1 lg:col-span-7 flex"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="absolute -inset-3 bg-brand-maroon/5 rounded-[2rem] -rotate-1 hidden lg:block" />
          <div className="relative w-full rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-xl border-4 lg:border-[6px] border-white h-full min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[350px]">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src={videoSrc}
              controls={isPlaying}
              playsInline
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              onEnded={() => setIsPlaying(false)}
            />
            {/* Play overlay */}
            {!isPlaying && (
              <div
                className="absolute inset-0 bg-brand-maroon/20 flex items-center justify-center cursor-pointer group-hover:bg-brand-maroon/10 transition-all duration-500"
                onClick={handlePlay}
              >
                <button className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center text-brand-maroon shadow-xl hover:scale-105 active:scale-95 transition-transform duration-300">
                  <span
                    className="material-symbols-outlined text-2xl md:text-3xl lg:text-4xl ml-1"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                </button>
              </div>
            )}
            {/* Label badge */}
            <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 lg:bottom-4 lg:right-4 bg-brand-gold px-2.5 py-1 md:px-4 md:py-1.5 lg:px-5 lg:py-2 rounded-xl lg:rounded-2xl shadow-lg border border-brand-maroon/10">
              <p className="urdu-text font-bold text-brand-maroon text-[10px] md:text-xs lg:text-sm tracking-wide">
                علم کے ساتھ عمل
              </p>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div
          className="animate-fadeInUp text-center lg:text-right space-y-2 md:space-y-3 lg:space-y-4 order-2 lg:col-span-5 flex flex-col justify-center"
          style={{ animationDelay: '0s' }}
        >
          {/* Heading with gold underline */}
          <div className="flex items-center gap-2 lg:gap-3 justify-center lg:justify-start flex-row-reverse">
            <h4 className="text-brand-gold-deep font-semibold tracking-[0.12em] lg:tracking-[0.15em] urdu-text text-[10px] md:text-xs lg:text-sm uppercase">
              ہمارا نصب العین
            </h4>
            <div className="h-px flex-1 bg-gradient-to-l from-brand-gold/40 to-transparent" />
          </div>

          {/* Main card */}
          <div className="p-3 md:p-4 lg:p-6 border border-surface-dim rounded-2xl lg:rounded-[2rem] relative bg-white shadow-xl shadow-brand-maroon/5 flex flex-col justify-center">
            <div className="absolute -top-3 lg:-top-4 right-3 lg:right-5 bg-brand-maroon text-white px-2.5 md:px-3 lg:px-4 py-0.5 md:py-1 lg:py-1.5 rounded-full urdu-text font-bold text-[9px] md:text-[10px] shadow-lg border-2 lg:border-3 border-white">
              اللہ کی رضا
            </div>

            <div className="text-brand-gold mb-2 md:mb-2.5 lg:mb-3 flex justify-center lg:justify-end pt-2">
              <span className="material-symbols-outlined text-2xl md:text-3xl lg:text-4xl opacity-80">
                mosque
              </span>
            </div>

            <h3 className="font-headline text-brand-maroon urdu-text mb-2 md:mb-2.5 lg:mb-3 text-sm md:text-base lg:text-lg">
              قیام اور مقصد
            </h3>

            <p className="text-[10px] md:text-xs lg:text-sm text-on-surface-variant/90 urdu-text leading-[1.7] md:leading-[1.9] lg:leading-[2] mb-3 md:mb-3.5 lg:mb-5">
              جامعہ دارالایمان للبنات کا قیام 2014 میں اس عزم کے ساتھ عمل میں لایا گیا کہ طالبات کو ایسی تعلیم سے آراستہ کیا جائے جو نہ صرف ان کے ایمان کی پختگی کا باعث بنے بلکہ وہ معاشرے میں بہترین کردار کی حامل خواتین بن کر ابھریں۔ ہم ایک ایسا ماحول فراہم کرتے ہیں جہاں روایتی دینی علوم اور جدید تقاضوں کے درمیان ایک خوبصورت توازن موجود ہے۔
            </p>

            {/* Footer badge */}
            <div className="flex items-center gap-2 md:gap-2.5 lg:gap-3 text-brand-maroon font-bold urdu-text justify-center lg:justify-end text-[9px] md:text-[10px] lg:text-xs py-1 md:py-1.5 lg:py-2 px-2 md:px-2.5 lg:px-3 bg-brand-gold/5 rounded-xl lg:rounded-2xl border border-brand-gold/10">
              <span className="tracking-wide">شریعہ کے عین مطابق خواتین کی تعلیم</span>
              <span className="material-symbols-outlined text-brand-gold-deep text-sm md:text-base lg:text-lg">
                check_circle
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About