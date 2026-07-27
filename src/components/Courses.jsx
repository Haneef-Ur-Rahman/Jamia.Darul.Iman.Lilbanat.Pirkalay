import { useState } from 'react';

const courses = [
  {
    icon: 'history_edu',
    title: 'درس نظامی',
    desc: 'عالمہ کورس جس میں قرآن، حدیث اور فقہ کی گہری تعلیم دی جاتی ہے۔',
    category: '📚 بنیادی',
    motivational: [
      '💎 "علم کا حصول ہر مسلمان پر فرض ہے" — حدیث نبوی ﷺ',
      '🌟 یہ کورس آپ کو دین کی گہری سمجھ اور عملی زندگی کی راہنمائی فراہم کرتا ہے۔',
    ],
  },
  {
    icon: 'import_contacts',
    title: 'تفسیر القرآن',
    desc: 'قرآن کریم کے معنی و مفہوم کو سمجھنے کے لیے خصوصی کورس۔',
    category: '📖 تفسیر',
    motivational: [
      '📖 "قرآن وہ نور ہے جو دل کو روشن کرتا ہے"',
      '✨ اس کورس میں آپ قرآن کے پیغام کو براہِ راست سمجھیں گے اور اپنی زندگی میں اسے نافذ کریں گے۔',
    ],
  },
  {
    icon: 'auto_stories',
    title: 'تجوید القرآن',
    desc: 'درست تلفظ اور مخارج کے ساتھ قرآن کریم کی بنیادی تلاوت۔',
    category: '🎤 تلاوت',
    motivational: [
      '🎤 "تجوید قرآن کو خوبصورت بناتی ہے اور ثواب میں اضافہ کرتی ہے"',
      '📿 یہ کورس آپ کو قرآن کو اس کے اصل انداز میں پڑھنے کا شرف بخشے گا۔',
    ],
  },
  {
    icon: 'menu_book',
    title: 'حفظِ قرآن',
    desc: 'مکمل قرآن مجید حفظ کرنے کا ایک مربوط اور منظم نظام۔',
    category: '📜 حفظ',
    motivational: [
      '🏆 "حافظ قرآن کا مقام جنت میں بلند ہوگا"',
      '📜 یہ کورس آپ کو ایک منظم طریقے سے قرآن مکمل حفظ کرنے میں مدد دے گا۔',
    ],
  },
  {
    icon: 'edit_document',
    title: 'ناظرہ قرآن',
    desc: 'تجوید و مخارج کے ساتھ دیکھ کر قرآن پڑھنے کی بہترین مشق۔',
    category: '👀 ناظرہ',
    motivational: [
      '👀 ناظرہ قرآن آپ کو قرآن سے محبت اور اس کی تلاوت میں مہارت فراہم کرتا ہے',
      '🌙 یہ کورس آپ کی تلاوت کو بہتر بنائے گا اور آپ کو قرآن کے قریب کرے گا۔',
    ],
  },
];

function Courses() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="courses" className="pt-2 md:pt-4 lg:pt-6 pb-6 md:pb-8 lg:pb-10 bg-white relative overflow-hidden">
      {/* Elegant background waves */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-maroon/[0.03] via-white to-brand-gold/[0.02]"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-maroon/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      {/* Section Header */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 text-center mb-6 md:mb-8 lg:mb-10 relative z-10">
        <div className="inline-flex items-center gap-1.5 bg-brand-maroon/10 px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-2">
          <span className="w-1 h-1 bg-brand-gold rounded-full animate-pulse"></span>
          <span className="text-brand-maroon font-semibold text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
            ہمارا نصاب
          </span>
        </div>
        <h2 className="font-headline text-brand-maroon urdu-text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 leading-tight">
          ہمارے نمایاں کورسز
        </h2>
        <div className="flex justify-center items-center gap-2">
          <div className="w-6 h-0.5 bg-gradient-to-r from-transparent to-brand-gold"></div>
          <div className="w-10 h-0.5 bg-brand-gold rounded-full"></div>
          <div className="w-6 h-0.5 bg-gradient-to-l from-transparent to-brand-gold"></div>
        </div>
        <p className="text-on-surface-variant/70 max-w-2xl mx-auto mt-2 text-[10px] md:text-xs lg:text-sm urdu-text font-light">
          دینی علوم میں مہارت حاصل کریں اور اپنے ایمان کو مضبوط بنائیں
        </p>
      </div>

      {/* Courses Grid */}
      <div
        className="w-full px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4 lg:gap-5 items-start relative z-10"
        dir="rtl"
      >
        {courses.map((course, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <div
              key={i}
              onClick={() => toggleExpand(i)}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 md:p-4 lg:p-5 border transition-all duration-500 cursor-pointer select-none flex flex-col min-h-[240px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px] ${isExpanded
                  ? 'border-brand-gold/60 shadow-2xl shadow-brand-maroon/15 scale-[1.02]'
                  : 'border-white/50 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-brand-maroon/10 hover:-translate-y-1 hover:border-brand-gold/30'
                }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Glassmorphism overlay */}
              <div className={`absolute inset-0 rounded-xl lg:rounded-2xl bg-gradient-to-br from-brand-maroon/5 via-brand-gold/5 to-transparent transition-opacity duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}></div>

              {/* Animated border glow */}
              <div className={`absolute -inset-0.5 rounded-xl lg:rounded-2xl bg-gradient-to-r from-brand-gold/20 via-brand-maroon/20 to-brand-gold/20 opacity-0 blur-sm transition-opacity duration-700 ${isExpanded ? 'opacity-100' : 'group-hover:opacity-100'
                }`}></div>

              {/* Top decorative ribbon */}
              <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent rounded-full transition-all duration-700 group-hover:w-14 group-hover:via-brand-maroon"></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon + Category Badge */}
                <div className="flex items-start justify-between mb-2 md:mb-3">
                  <div className={`relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-xl lg:rounded-[1.5rem] transition-all duration-500 ${isExpanded
                      ? 'bg-brand-maroon text-white shadow-xl shadow-brand-maroon/40 scale-105'
                      : 'bg-gradient-to-br from-brand-maroon/10 to-brand-gold/10 text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white group-hover:shadow-xl group-hover:shadow-brand-maroon/30 group-hover:scale-105'
                    }`}>
                    <span className="material-symbols-outlined text-xl md:text-2xl lg:text-3xl transition-transform duration-700 group-hover:rotate-[-8deg]">
                      {course.icon}
                    </span>
                    <span className={`absolute inset-0 rounded-xl lg:rounded-[1.5rem] blur-2xl transition-opacity duration-700 ${isExpanded ? 'opacity-100 bg-brand-maroon/40' : 'opacity-0 group-hover:opacity-100 bg-brand-maroon/30'
                      }`}></span>
                  </div>
                  <span className="text-[9px] md:text-[10px] font-medium text-brand-maroon/70 bg-white/80 backdrop-blur px-1.5 py-0.5 md:px-2 md:py-1 rounded-full border border-brand-gold/20 shadow-sm">
                    {course.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-base md:text-lg lg:text-xl text-brand-maroon urdu-text mb-1 md:mb-1.5 leading-tight tracking-tight">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-on-surface-variant/80 urdu-text text-[10px] md:text-xs leading-[1.8] flex-1">
                  {course.desc}
                </p>

                {/* Expandable Motivational Section */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-80 opacity-100 mt-2 md:mt-3' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="pt-2 md:pt-3 border-t border-brand-gold/20 space-y-1.5 md:space-y-2">
                    {course.motivational.map((line, idx) => (
                      <div
                        key={idx}
                        className="urdu-text text-[10px] md:text-xs text-brand-maroon/90 font-medium leading-[1.7] bg-gradient-to-r from-brand-gold/10 to-transparent px-2 py-1.5 md:px-3 md:py-2 rounded-xl border-r-2 border-brand-gold/50 shadow-sm"
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Toggle */}
                <div className={`relative z-10 flex items-center gap-1.5 mt-2 md:mt-3 text-brand-gold-deep font-bold urdu-text text-[10px] md:text-xs transition-all duration-300 ${isExpanded ? 'justify-start' : 'justify-start group-hover:gap-2'
                  } mt-auto`}>
                  <span className={`border-b-2 transition-all duration-300 ${isExpanded
                      ? 'border-brand-gold-deep'
                      : 'border-brand-gold/20 group-hover:border-brand-gold-deep'
                    }`}>
                    {isExpanded ? 'مختصر کریں −' : 'مزید پڑھیں +'}
                  </span>
                  <span className={`material-symbols-outlined text-sm transition-all duration-500 ${isExpanded ? 'rotate-180' : 'group-hover:translate-x-1'
                    }`}>
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Courses;