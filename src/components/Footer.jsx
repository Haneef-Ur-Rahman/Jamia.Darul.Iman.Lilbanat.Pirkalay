import { useState } from 'react';
import logo from '../assets/images/logo.png';

function Footer() {
  const [toast, setToast] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText('03139812656').then(() => {
      setToast('نمبر کاپی ہوگیا!');
      setTimeout(() => setToast(''), 2500);
    }).catch(() => {
      const textArea = document.createElement('textarea');
      textArea.value = '03139812656';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setToast('نمبر کاپی ہوگیا!');
      setTimeout(() => setToast(''), 2500);
    });
  };

  return (
    <footer id="contact" className="bg-brand-maroon text-white border-t-4 border-brand-gold/60 relative">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-brand-maroon text-white px-6 py-3 rounded-xl shadow-2xl border border-brand-gold/40 text-sm md:text-base urdu-text font-bold animate-fadeInDown">
          {toast}
        </div>
      )}

      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-4 md:py-6 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8" dir="rtl">

          {/* Column 1: EasyPaisa Details */}
          <div className="space-y-3 md:space-y-4 lg:space-y-5">
            <h3 className="font-bold text-[10px] md:text-xs lg:text-sm text-brand-gold urdu-text border-b border-brand-gold/20 pb-1.5 inline-block">
              عطیات کی معلومات
            </h3>

            {/* EasyPaisa Card */}
            <div className="bg-brand-maroon/40 p-3 md:p-4 lg:p-5 rounded-xl border border-brand-gold/30 shadow-inner relative">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm md:text-base lg:text-lg font-bold text-brand-gold tracking-tight">EasyPaisa</span>
                <span className="text-[8px] md:text-[9px] text-brand-gold/60 font-medium tracking-wider">| فوری منتقلی</span>
              </div>

              {/* Number with Copy Icon */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-brand-gold/70 text-xl leading-none">
                  phone_android
                </span>
                <div className="flex items-center gap-1.5 flex-1">
                  <p className="text-xs md:text-sm lg:text-base font-bold text-white tracking-wider font-mono" dir="ltr">
                    +92 3139812656
                  </p>
                  <button
                    onClick={handleCopy}
                    className="text-brand-gold/50 hover:text-brand-gold transition-colors p-0.5 rounded hover:bg-white/10"
                    title="کاپی کریں"
                  >
                    <span className="material-symbols-outlined text-lg leading-none">
                      content_copy
                    </span>
                  </button>
                </div>
              </div>

              <p className="text-[8px] md:text-[9px] text-brand-gold/60 font-medium tracking-wide">
                Account Holder: Syed Nigar Badshah
              </p>

              <div className="mt-2 pt-2 border-t border-brand-gold/10 flex items-center justify-between">
                <span className="text-[6px] md:text-[8px] text-brand-gold/30 tracking-wider">ہر وقت دستیاب</span>
                <span className="text-[6px] md:text-[8px] text-brand-gold/30">آسان و محفوظ</span>
              </div>
            </div>

            <p className="text-white/50 urdu-text text-[10px] md:text-[11px] leading-[1.8] text-center">
              آپ کے عطیات مستحق طالبات کی تعلیم و تربیت میں معاون ثابت ہوتے ہیں۔
            </p>
          </div>

          {/* Column 3: Office Hours */}
          <div className="space-y-3 md:space-y-4 lg:space-y-5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-brand-gold text-lg">schedule</span>
              <h3 className="font-bold text-[10px] md:text-xs lg:text-sm text-brand-gold urdu-text">
                دفتری اوقات
              </h3>
            </div>

            <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-3 md:p-4 lg:p-5 rounded-xl border border-white/10 hover:border-brand-gold/40 transition-all duration-300 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold/20 via-brand-maroon/20 to-brand-gold/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10"></div>

              <div className="space-y-2">
                {/* Weekdays */}
                <div className="flex justify-between items-center p-1.5 rounded-xl hover:bg-white/5 transition-colors duration-200">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-brand-gold/60 text-[10px]">calendar_today</span>
                    </div>
                    <span className="urdu-text font-bold text-white text-[10px] md:text-xs lg:text-sm">پیر تا ہفتہ</span>
                  </div>
                  <div className="text-left space-y-0">
                    <span className="block text-[10px] md:text-xs lg:text-sm text-white/90 font-mono tracking-wide">
                      <span className="text-brand-gold/70 text-[10px] md:text-xs lg:text-sm ml-1 font-medium">صبح</span> 8:00 — 12:00
                    </span>
                    <span className="block text-[10px] md:text-xs lg:text-sm text-white/80 font-mono tracking-wide">
                      <span className="text-brand-gold/70 text-[10px] md:text-xs lg:text-sm ml-1 font-medium">شام</span> 3:00 — 7:00
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-transparent px-3 text-[6px] text-white/30 tracking-[0.3em]">● ● ●</span>
                  </div>
                </div>

                {/* Sunday */}
                <div className="flex justify-between items-center p-1.5 rounded-xl hover:bg-white/5 transition-colors duration-200">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-red-400/50 text-[10px]">event_busy</span>
                    </div>
                    <span className="urdu-text font-bold text-white/60 text-[10px] md:text-xs lg:text-sm">اتوار</span>
                  </div>
                  <span className="relative px-2.5 py-1 text-[10px] md:text-xs lg:text-sm font-bold tracking-[0.15em] uppercase text-red-400 bg-red-500/15 rounded-full border border-red-500/30 hover:border-red-400/50 transition-all duration-300">
                    <span className="relative z-10">بند</span>
                    <span className="absolute inset-0 bg-red-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-white/25 text-[8px] md:text-[9px] font-medium tracking-wider">
              <span className="w-4 h-px bg-white/10"></span>
              <span>دورۂ اوقات میں خوش آمدید</span>
              <span className="w-4 h-px bg-white/10"></span>
            </div>
          </div>

          {/* Column 2: Logo + Contact Info */}
          <div className="space-y-3 md:space-y-4 lg:space-y-5">
            <div className="flex items-center gap-2 md:gap-3 justify-center md:justify-end">
              <h2 className="font-bold text-[10px] md:text-xs lg:text-sm text-brand-gold urdu-text leading-tight">
                جامعہ دارالایمان للبنات پیرکلے
              </h2>
              <div className="w-16 h-9 sm:w-18 sm:h-10 md:w-20 md:h-11 lg:w-24 lg:h-12 overflow-hidden bg-white/10 flex items-center justify-center shrink-0 shadow-md rounded">
                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
              </div>
            </div>

            <p className="text-white/50 urdu-text text-[10px] md:text-[11px] leading-[1.8] text-center md:text-right border-r-2 border-brand-gold/20 pr-2 md:pr-3">
              تعلیم، تربیت اور اخلاقی اقدار کا گہوارہ
            </p>

            <ul className="space-y-1.5 md:space-y-2 text-[10px] md:text-[11px]">
              <li className="flex items-start gap-2 md:gap-2.5 justify-center md:justify-end group">
                <span className="text-white/60 urdu-text text-right leading-relaxed group-hover:text-white transition-colors text-[10px] md:text-[11px]">
                  جامعہ دارالایمان للبنات پیرکلے ڈاکخانہ چغرمٹی تحصیل و ضلع پشاور
                </span>
                <span className="material-symbols-outlined text-brand-gold text-lg lg:text-xl mt-0.5 opacity-80 shrink-0 leading-none">
                  location_on
                </span>
              </li>
              <li className="flex items-center gap-2 md:gap-2.5 justify-center md:justify-end group">
                <span className="text-white/60 font-mono tracking-wider group-hover:text-white transition-colors text-[10px] md:text-[11px]" dir="ltr">
                  +92-3139812656
                </span>
                <span className="material-symbols-outlined text-brand-gold text-lg lg:text-xl opacity-80 shrink-0 leading-none">
                  call
                </span>
              </li>
              <li className="flex items-center gap-2 md:gap-2.5 justify-center md:justify-end group">
                <span className="text-white/60 font-serif tracking-tight text-[9px] md:text-[10px] group-hover:text-white transition-colors break-all">
                  jamia.darulemman.pirkaly@gmail.com
                </span>
                <span className="material-symbols-outlined text-brand-gold text-lg lg:text-xl opacity-80 shrink-0 leading-none">
                  mail
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black/30 py-2 md:py-3 lg:py-3 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-1.5 text-white/30 text-[8px] md:text-[9px] font-medium">
          <p className="urdu-text text-center md:text-right">
            © 2024 جامعۃ دارالإیمان للبنات پیرکلے پشاور۔ تمام حقوق محفوظ ہیں۔
          </p>
        </div>
      </div>

      {/* Toast animation */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.4s ease-out forwards;
        }
      `}</style>
    </footer>
  );
}

export default Footer;