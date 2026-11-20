import mainImage from '../assets/images/main.jpeg'
import nigarImage from '../assets/images/nigar.jpeg'

function Hero() {
  return (
    <section id="home" className="relative min-h-[310px] lg:min-h-[440px] flex items-center overflow-hidden bg-gradient-to-b from-white to-surface-container-low pt-3 md:pt-4 pb-6 md:pb-8">
      <div className="w-full px-4 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-7 lg:gap-10 items-center relative z-10">

        {/* Campus Photo Card */}
        <div className="order-2 lg:order-1 relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[440px] lg:max-w-[520px]">
            <div className="absolute -inset-2.5 bg-brand-maroon/10 rounded-[1.4rem] lg:rounded-[1.9rem] blur-2xl -z-10" />
            <div className="rounded-[1.4rem] lg:rounded-[1.9rem] overflow-hidden border-5 lg:border-7 border-white shadow-xl relative group bg-brand-maroon/5">
              <img
                alt="Institute Campus"
                className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                src={mainImage}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-brand-maroon py-2 md:py-2.5 text-center backdrop-blur-sm border-t border-white/20">
                <p className="urdu-text font-bold text-white text-sm md:text-base lg:text-lg drop-shadow-sm">
                  علم کے نور سے روشن مستقبل
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Text Block */}
        <div className="order-1 lg:order-2 text-center lg:text-right space-y-2.5 md:space-y-3.5">
          <div className="inline-flex items-center px-3 py-0.5 md:px-3.5 md:py-1 rounded-full border border-brand-maroon/30 text-brand-maroon bg-white/80 shadow-sm urdu-text font-bold text-xs md:text-sm">
            <span
              className="material-symbols-outlined ml-1.5 text-xs md:text-sm text-brand-maroon"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            اللہ کی رضا
          </div>

          <h1 className="font-headline text-brand-maroon urdu-text leading-[1.25] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.75rem]">
            جامعہ دارالایمان للبنات پیرکلے پشاور
          </h1>

          <div className="space-y-2 lg:space-y-2.5">
            <p className="text-base md:text-lg lg:text-xl font-body text-on-surface-variant urdu-text leading-[2.1]">
              معاشرے کو ایک بہترین بیٹی، بہترین ماں، بہترین بہن اور بہترین بیوی دینا ہے۔
            </p>
            <p className="text-xs md:text-sm lg:text-base font-body text-on-surface-variant/60 italic font-serif leading-relaxed tracking-wide">
              "To provide society with an exemplary daughter, mother, sister, and wife."
            </p>
          </div>

          {/* Muhtamim Info Card - Center Mein (Thora Oper) */}
          <div className="group relative max-w-md mx-auto -mt-1 md:-mt-2">
            {/* Background Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-maroon/20 via-brand-maroon/10 to-brand-maroon/20 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Main Card */}
            <div className="relative flex items-center gap-3 md:gap-4 bg-white/90 backdrop-blur-md border-2 border-brand-maroon/20 rounded-2xl p-3 md:p-4 shadow-lg group-hover:border-brand-maroon/50 group-hover:shadow-2xl group-hover:shadow-brand-maroon/20 transition-all duration-500 group-hover:-translate-y-0.5">
              
              {/* Top Shimmer Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-brand-maroon/60 to-transparent group-hover:w-3/4 transition-all duration-700 rounded-full"></div>

              {/* Muhtamim Image Container */}
              <div className="relative shrink-0">
                {/* Pulsing Ring */}
                <div className="absolute -inset-1 rounded-full border-2 border-brand-maroon/30 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                
                {/* Image - Aur Bara */}
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-brand-maroon/50 shadow-md group-hover:border-brand-maroon/80 group-hover:shadow-lg group-hover:shadow-brand-maroon/30 transition-all duration-400">
                  <img
                    src={nigarImage}
                    alt="مہتمم مولانا سیّد نگار بادشاہ پیرکلے"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Verification Badge - Bara */}
                <div className="absolute -bottom-0.5 -right-0.5 w-6 h-6 md:w-7 md:h-7 bg-brand-maroon rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  <span className="material-symbols-outlined text-white text-xs md:text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified
                  </span>
                </div>
              </div>

              {/* Muhtamim Details */}
              <div className="flex-1 text-right">
                {/* Title Row with Decorative Dots */}
                <div className="flex items-center justify-start gap-2 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-maroon"></span>
                  <p className="urdu-text text-brand-maroon font-bold text-xs md:text-sm">
                    مہتمم
                  </p>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-maroon/50"></span>
                </div>

                {/* Name */}
                <p className="urdu-text text-gray-800 font-semibold text-sm md:text-base lg:text-lg leading-snug group-hover:text-brand-maroon transition-colors duration-300">
                  مولانا سیّد نگار بادشاہ پیرکلے
                </p>

                {/* Phone Number - Modern Pill */}
                <div className="flex items-center justify-start gap-1.5 mt-1.5" dir="ltr">
                  <div className="flex items-center gap-1.5 bg-brand-maroon/5 hover:bg-brand-maroon/10 rounded-full px-2.5 py-1 transition-all duration-300 group-hover:shadow-sm">
                    <span className="material-symbols-outlined text-brand-maroon text-sm md:text-base">
                      call
                    </span>
                    <span className="text-gray-700 text-xs md:text-sm font-mono tracking-wide font-medium">
                      +92  3139812656
                    </span>
                  </div>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-8 h-8 rounded-tr-2xl border-t-2 border-r-2 border-brand-maroon/0 group-hover:border-brand-maroon/40 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 rounded-bl-2xl border-b-2 border-l-2 border-brand-maroon/0 group-hover:border-brand-maroon/40 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
