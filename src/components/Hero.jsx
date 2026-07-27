import mainImage from '../assets/images/main.jpeg'

function Hero() {
  return (
    <section id="home" className="relative min-h-[350px] lg:min-h-[480px] flex items-center overflow-hidden bg-gradient-to-b from-white to-surface-container-low pt-4 md:pt-6 pb-8 md:pb-12 lg:pb-16">
      <div className="w-full px-4 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 lg:gap-12 items-center relative z-10">

        {/* Campus Photo Card */}
        <div className="order-2 lg:order-1 relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[400px] lg:max-w-[500px]">
            <div className="absolute -inset-3 bg-brand-gold/10 rounded-[1.5rem] lg:rounded-[2rem] blur-2xl -z-10" />
            <div className="rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden border-[6px] lg:border-[8px] border-white shadow-xl relative group bg-brand-maroon/5">
              <img
                alt="Institute Campus"
                className="w-full h-[200px] sm:h-[250px] md:h-[310px] lg:h-[350px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                src={mainImage}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-brand-gold py-2 md:py-3 lg:py-3.5 text-center backdrop-blur-sm border-t border-white/20">
                <p className="urdu-text font-bold text-brand-maroon text-sm md:text-base lg:text-lg drop-shadow-sm">
                  علم کے نور سے روشن مستقبل
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Text Block */}
        <div className="order-1 lg:order-2 text-center lg:text-right space-y-3 md:space-y-4 lg:space-y-5">
          <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-brand-gold/30 text-brand-maroon bg-white/80 shadow-sm urdu-text font-bold text-xs md:text-sm">
            <span
              className="material-symbols-outlined ml-1.5 text-xs md:text-sm text-brand-gold"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            اللہ کی رضا
          </div>

          <h1 className="font-headline text-brand-maroon urdu-text leading-[1.2] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            جامعہ دارالایمان للبنات پیرکلے پشاور
          </h1>

          <div className="space-y-2 lg:space-y-3">
            <p className="text-base md:text-lg lg:text-xl font-body text-on-surface-variant urdu-text leading-[2.2]">
              معاشرے کو ایک بہترین بیٹی، بہترین ماں، بہترین بہن اور بہترین بیوی دینا ہے۔
            </p>
            <p className="text-xs md:text-sm lg:text-base font-body text-on-surface-variant/60 italic font-serif leading-relaxed tracking-wide">
              "To provide society with an exemplary daughter, mother, sister, and wife."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero