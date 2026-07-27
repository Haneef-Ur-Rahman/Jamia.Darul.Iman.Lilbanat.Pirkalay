const stats = [
  { icon: 'group', value: '250+', label: 'طالبات' },
  { icon: 'person_celebrate', value: '12+', label: 'معلمَات' },
  { icon: 'menu_book', value: '6+', label: 'کورسز' },
  { icon: 'workspace_premium', value: '13+', label: 'سالہ خدمات' },
]

function Stats() {
  return (
    <section className="bg-brand-maroon py-6 md:py-8 border-y border-brand-gold/20 relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-32 md:w-40 h-32 md:h-40 bg-brand-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      {/* Gold shimmer line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-brand-gold/30 rounded-full"></div>

      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* ===== Row 1: Number Stats (4 boxes) ===== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 text-center mb-3 md:mb-4" dir="rtl">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center justify-center p-2.5 md:p-3 lg:p-4 rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-500"
            >
              {/* Icon Container */}
              <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg lg:rounded-xl bg-white/10 border border-white/15 group-hover:border-brand-gold/50 transition-all duration-400">
                <span className="material-symbols-outlined text-brand-gold text-lg md:text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-400">
                  {stat.icon}
                </span>
              </div>

              {/* Value */}
              <h4 className="font-headline text-brand-gold text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-none mt-1.5 md:mt-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </h4>

              {/* Label */}
              <p className="urdu-text text-white/80 text-[10px] md:text-xs lg:text-sm font-medium tracking-wide mt-0.5 md:mt-1 group-hover:text-white/95 transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ===== Row 2: Profile Boxes (2 boxes) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4" dir="rtl">
          
          {/* 👇 Box 5: مہتمم */}
          <div className="group relative flex flex-col items-center justify-center p-4 md:p-5 rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 hover:border-brand-gold/40 transition-all duration-500 hover:shadow-xl hover:shadow-brand-gold/10">
            
            {/* Icon Circle */}
            <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center rounded-full bg-gradient-to-br from-brand-gold/15 to-brand-gold/5 border-2 border-brand-gold/40 group-hover:border-brand-gold/70 group-hover:shadow-lg group-hover:shadow-brand-gold/30 transition-all duration-500 mb-2.5">
              <div className="absolute inset-0 rounded-full border border-brand-gold/20 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700"></div>
              <span className="material-symbols-outlined text-brand-gold text-2xl md:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-400">
                person
              </span>
            </div>

            {/* Label Badge */}
            <span className="bg-gradient-to-r from-brand-gold/15 to-brand-gold/5 text-brand-gold text-[10px] md:text-xs px-3 py-1 rounded-full tracking-widest uppercase mb-2 border border-brand-gold/30 group-hover:border-brand-gold/50 transition-all duration-300 font-semibold">
              مہتمم
            </span>

            {/* Name */}
            <h5 className="urdu-text text-brand-gold text-sm md:text-base lg:text-lg font-bold text-center leading-relaxed px-2">
              مولانا سیّد نگار بادشاہ پیرکلے
            </h5>

            {/* Phone Number Pill */}
            <div className="flex items-center gap-2 mt-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 group-hover:border-brand-gold/30 group-hover:bg-white/8 transition-all duration-300">
              <span className="material-symbols-outlined text-brand-gold text-base">call</span>
              <span className="w-px h-3 bg-white/10"></span>
              <p className="text-white/85 text-xs md:text-sm font-mono tracking-wider" dir="ltr">
                +92 313 9812656
              </p>
            </div>
          </div>

          {/* 👇 Box 6: بانیہ */}
          <div className="group relative flex flex-col items-center justify-center p-4 md:p-5 rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 hover:border-brand-gold/40 transition-all duration-500 hover:shadow-xl hover:shadow-brand-gold/10">
            
            {/* Icon Circle */}
            <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center rounded-full bg-gradient-to-br from-brand-gold/15 to-brand-gold/5 border-2 border-brand-gold/40 group-hover:border-brand-gold/70 group-hover:shadow-lg group-hover:shadow-brand-gold/30 transition-all duration-500 mb-2.5">
              <div className="absolute inset-0 rounded-full border border-brand-gold/20 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700"></div>
              <span className="material-symbols-outlined text-brand-gold text-2xl md:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-400">
                face_3
              </span>
            </div>

            {/* Label Badge */}
            <span className="bg-gradient-to-r from-brand-gold/15 to-brand-gold/5 text-brand-gold text-[10px] md:text-xs px-3 py-1 rounded-full tracking-widest uppercase mb-2 border border-brand-gold/30 group-hover:border-brand-gold/50 transition-all duration-300 font-semibold">
              بانیہ
            </span>

            {/* Name */}
            <h5 className="urdu-text text-brand-gold text-sm md:text-base lg:text-lg font-bold text-center leading-relaxed px-2">
              معلمہ محترمہ باجی امّی امامہ صاحبہ
            </h5>

            {/* Decorative dots */}
            <div className="flex items-center gap-1 mt-3 opacity-50 group-hover:opacity-80 transition-opacity duration-300">
              <span className="w-1 h-1 rounded-full bg-brand-gold"></span>
              <span className="w-1 h-1 rounded-full bg-brand-gold/60"></span>
              <span className="w-1 h-1 rounded-full bg-brand-gold/30"></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Stats
