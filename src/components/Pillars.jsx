const pillars = [
  {
    icon: 'business_center',
    title: 'جدید سہولیات',
    desc: 'عصری تقاضوں کے مطابق جدید ترین تعلیمی سہولیات، اور پرکشش تعلیمی ماحول',
  },
  {
    icon: 'groups',
    title: 'مستند اساتذہ',
    desc: 'دینی و عصری علوم میں مہارت رکھنے والے مجرب اساتذہ کی ٹیم جو کردار سازی پر خصوصی توجہ دیتی ہے',
  },
  {
    icon: 'spa',
    title: 'اخلاقی تربیت',
    desc: 'قرآن و سنت کی روشنی میں کردار سازی، اخلاقی اقدار اور روحانی تزکیہ کا بہترین نظام',
  },
  {
    icon: 'menu_book',
    title: 'جامع نصاب',
    desc: 'درس نظامی، حفظ قرآن، تجوید، تفسیر اور جدید علوم پر مشتمل جامع دینی تعلیمی نظام',
  },
];

function Pillars() {
  return (
    <section id="facilities" className="pt-2 md:pt-4 lg:pt-6 pb-6 md:pb-8 lg:pb-10 bg-white relative overflow-hidden">
      {/* Elegant background blurs */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-brand-maroon/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      {/* Container */}
      <div className="relative z-10 w-full max-w-full px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28">

        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-brand-maroon/10 px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-2">
            <span className="w-1 h-1 bg-brand-gold rounded-full animate-pulse" />
            <span className="text-brand-maroon font-semibold text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
              ہماری سہولیات
            </span>
          </div>
          <h2 className="font-headline text-brand-maroon text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            ہمارے نمایاں وسائل
          </h2>
          <div className="flex justify-center items-center gap-2 mt-2">
            <div className="w-6 h-0.5 bg-gradient-to-r from-transparent to-brand-gold" />
            <div className="w-10 h-0.5 bg-brand-gold rounded-full" />
            <div className="w-6 h-0.5 bg-gradient-to-l from-transparent to-brand-gold" />
          </div>
          <p className="text-on-surface-variant/60 max-w-2xl mx-auto mt-2 text-[10px] md:text-xs lg:text-sm font-light">
            وہ خصوصیات اور وسائل جو ہمارے تعلیمی نظام کو دیگر سے ممتاز بناتے ہیں
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="group relative bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 md:p-4 lg:p-5 border border-white/50 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-brand-maroon/10 hover:-translate-y-1 hover:border-brand-gold/30 transition-all duration-500 flex flex-col items-center text-center min-h-[220px] sm:min-h-[240px] md:min-h-[260px] lg:min-h-[280px]"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 rounded-xl lg:rounded-2xl bg-gradient-to-br from-brand-maroon/5 via-brand-gold/5 to-transparent transition-opacity duration-700 opacity-0 group-hover:opacity-100" />

              {/* Animated border glow */}
              <div className="absolute -inset-0.5 rounded-xl lg:rounded-2xl bg-gradient-to-r from-brand-gold/20 via-brand-maroon/20 to-brand-gold/20 opacity-0 blur-sm transition-opacity duration-700 group-hover:opacity-100" />

              {/* Top decorative ribbon */}
              <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent rounded-full transition-all duration-700 group-hover:w-14 group-hover:via-brand-maroon" />

              {/* Icon Container */}
              <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl lg:rounded-[1.5rem] bg-gradient-to-br from-brand-maroon/10 to-brand-gold/10 text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:shadow-brand-maroon/30 group-hover:scale-105">
                <span
                  className="material-symbols-outlined text-2xl md:text-3xl lg:text-4xl transition-transform duration-700 group-hover:rotate-[-8deg]"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  {pillar.icon}
                </span>
                <span className="absolute inset-0 rounded-xl lg:rounded-[1.5rem] blur-2xl transition-opacity duration-700 opacity-0 group-hover:opacity-100 bg-brand-maroon/40" />
              </div>

              <h3 className="urdu-text font-bold text-base md:text-lg lg:text-xl text-brand-maroon mt-2 md:mt-3 mb-1 md:mb-1.5 tracking-tight group-hover:tracking-normal transition-all duration-300">
                {pillar.title}
              </h3>

              <p className="text-on-surface-variant/70 urdu-text leading-relaxed text-[10px] md:text-xs group-hover:text-on-surface-variant/90 transition-colors duration-300 flex-1">
                {pillar.desc}
              </p>

              {/* Bottom decorative dot */}
              <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-maroon/20 rounded-full group-hover:bg-brand-gold group-hover:w-3 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pillars;