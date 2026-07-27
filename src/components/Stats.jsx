const stats = [
  { icon: 'group', value: '250+', label: 'طالبات' },
  { icon: 'person_celebrate', value: '12+', label: 'معلمَات' },
  { icon: 'menu_book', value: '6+', label: 'کورسز' },
  { icon: 'workspace_premium', value: '13+', label: 'سالہ خدمات' },
]

function Stats() {
  return (
    <section className="bg-brand-maroon py-8 md:py-10 lg:py-14 border-y border-brand-gold/20 relative overflow-hidden">
      {/* Decorative blurs — chhote */}
      <div className="absolute top-0 right-0 w-40 md:w-56 h-40 md:h-56 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-40 md:w-56 h-40 md:h-56 bg-brand-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      {/* Gold shimmer line — patli */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-brand-gold/30 rounded-full"></div>

      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 text-center" dir="rtl">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center justify-center p-3 md:p-4 lg:p-5 rounded-2xl lg:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-500"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container — chhota */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-xl lg:rounded-2xl bg-white/10 border border-white/15 group-hover:border-brand-gold/50 group-hover:bg-white/15 transition-all duration-400 shadow-lg shadow-black/10 group-hover:shadow-brand-gold/20">
                <span className="material-symbols-outlined text-brand-gold text-xl md:text-2xl lg:text-3xl group-hover:scale-110 transition-transform duration-400">
                  {stat.icon}
                </span>
                <span className="absolute inset-0 rounded-xl lg:rounded-2xl bg-brand-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
              </div>

              {/* Value — chhota */}
              <h4 className="font-headline text-brand-gold text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-none mt-2 md:mt-3 lg:mt-4 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </h4>

              {/* Label — chhota */}
              <p className="urdu-text text-white/80 text-xs md:text-sm lg:text-base font-medium tracking-wide mt-1 md:mt-1.5 lg:mt-2 group-hover:text-white/95 transition-colors duration-300">
                {stat.label}
              </p>

              {/* Decorative bottom line — chhoti */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-brand-gold/20 rounded-full group-hover:w-10 group-hover:bg-brand-gold/60 transition-all duration-500"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats