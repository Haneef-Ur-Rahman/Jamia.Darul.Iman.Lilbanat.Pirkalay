import { useState, useEffect } from 'react'
import logo from '../assets/images/logo.png'
const navLinks = [
  { label: 'ہوم', href: '#home' },
  { label: 'ہمارے بارے میں', href: '#about' },
  { label: 'تعلیمی نظام', href: '#courses' },
  { label: 'سہولیات', href: '#facilities' },
  { label: 'گیلری', href: '#gallery' },
  { label: 'رابطہ', href: '#contact' },
  {
    label: 'داخلہ فارم',
    href: 'https://drive.google.com/uc?export=download&id=1_aNpVpWs6mWdUtZb18yZdmZ6ma2vgtFe'
  },
  { label: 'نتائج' },   // 👈 href hata diya
]

function Header({ onOpenResults }) {   // 👈 prop add kiya
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false)
  const [toast, setToast] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)

  const getActiveIndex = () => {
    const hash = window.location.hash || '#home'
    const index = navLinks.findIndex(link => link.href === hash)
    return index !== -1 ? index : 0
  }

  useEffect(() => {
    const updateActive = () => setActiveIndex(getActiveIndex())
    updateActive()
    window.addEventListener('hashchange', updateActive)
    return () => window.removeEventListener('hashchange', updateActive)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText('03139812656').then(() => {
      setToast('نمبر کاپی ہوگیا!')
      setTimeout(() => setToast(''), 2500)
    }).catch(() => {
      const textArea = document.createElement('textarea')
      textArea.value = '03139812656'
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setToast('نمبر کاپی ہوگیا!')
      setTimeout(() => setToast(''), 2500)
    })
  }

  return (
    <>
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[999] bg-brand-maroon text-white px-6 py-3 rounded-xl shadow-2xl border border-brand-gold/40 text-sm md:text-base urdu-text font-bold animate-fadeInDown">
          {toast}
        </div>
      )}

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <nav className="flex items-center w-full px-4 md:px-8 lg:px-12 py-1 md:py-1.5">
          {/* Left Side */}
          <div className="flex-1 flex justify-start items-center gap-2">
            <button
              className="lg:hidden text-brand-maroon p-0.5"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
            <button
              onClick={() => setIsDonateModalOpen(true)}
              className="hidden md:inline-flex bg-brand-maroon text-white px-3 lg:px-4 py-1 lg:py-1.5 rounded-full font-bold text-[8px] lg:text-[9px] tracking-[0.15em] hover:bg-brand-maroon/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              DONATE NOW
            </button>
          </div>

          {/* Center: Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 urdu-text font-medium justify-center flex-[3] text-xs">
            {navLinks.map((link, i) => {
              // نتائج کو خصوصی button بنائیں
              if (link.label === 'نتائج') {
                return (
                  <button
                    key={i}
                    onClick={onOpenResults}
                    className="urdu-text font-medium text-xs text-on-surface-variant/70 hover:text-brand-maroon transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </button>
                )
              }

              const isExternal = link.href?.startsWith('http')
              const isActive = !isExternal && activeIndex === i
              return (
                <a
                  key={i}
                  href={link.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  onClick={() => !isExternal && setActiveIndex(i)}
                  className={
                    isActive
                      ? 'text-brand-maroon relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-maroon pb-0.5'
                      : 'text-on-surface-variant/70 hover:text-brand-maroon transition-colors duration-300'
                  }
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* Right Side: Logo */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-2 flex-1 justify-end">
            <div className="hidden sm:flex flex-col leading-tight urdu-text text-right">
              <span className="text-brand-maroon font-bold text-[10px] md:text-xs lg:text-sm tracking-tight">
                جامعہ دارالایمان
              </span>
              <span className="text-brand-maroon/70 text-[7px] md:text-[9px] lg:text-[10px] font-medium uppercase tracking-widest">
                للبنات
              </span>
            </div>

            <div className="w-10 h-7 sm:w-12 sm:h-8 md:w-16 md:h-11 lg:w-20 lg:h-14 overflow-hidden bg-white flex items-center justify-center shrink-0 shadow-md rounded">
              <img
                src={logo}
                alt="جامعہ دارالإیمان للبنات"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </nav>

        {/* ===== Mobile Menu Overlay ===== */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 mobile-menu-enter" onClick={() => setIsMenuOpen(false)}>
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
            <div
              className="absolute inset-y-0 right-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button + Logo */}
              <div className="flex items-center justify-between px-4 py-1 border-b border-gray-100">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-brand-maroon p-0.5"
                  aria-label="Close menu"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
                <div className="flex items-center gap-2">
                  <span className="text-brand-maroon font-bold text-xs urdu-text">جامعہ دارالإیمان</span>
                  <div className="w-7 h-7 rounded-full border border-brand-maroon/20 overflow-hidden">
                    <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center py-35 px-3 scrollbar-none urdu-text overflow-y-scroll bg-gray-200 border-2 border-red-500">
                {navLinks.map((link, i) => {
                  // نتائج ke liye special button
                  if (link.label === 'نتائج') {
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          setIsMenuOpen(false)
                          onOpenResults()
                        }}
                        className="w-full text-right text-xs font-bold py-2 px-3 rounded-lg transition-all duration-200 text-gray-700 hover:text-brand-maroon hover:bg-brand-maroon/5 active:scale-95"
                      >
                        {link.label}
                      </button>
                    )
                  }

                  // External link (داخلہ فارم)
                  if (link.href?.startsWith('http')) {
                    return (
                      <a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full text-right text-xs font-bold py-2 px-3 rounded-lg transition-all duration-200 text-gray-700 hover:text-brand-maroon hover:bg-brand-maroon/5 active:scale-95"
                      >
                        {link.label}
                      </a>
                    )
                  }

                  // Internal links
                  return (
                    <a
                      key={i}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        setIsMenuOpen(false)
                        setActiveIndex(i)
                        const section = document.querySelector(link.href)
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className={`w-full text-right text-sm font-bold py-2 px-3 rounded-lg transition-all duration-200 active:scale-95 ${activeIndex === i
                        ? 'text-brand-maroon bg-brand-gold/10'
                        : 'text-gray-700 hover:text-brand-maroon hover:bg-brand-maroon/5'
                        }`}
                    >
                      {link.label}
                    </a>
                  )
                })}
              </div>

              {/* Donate Button */}
              <div className="px-4 pb-1 pt-1 border-2 border-b border-red-500 bg-gray-200">
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    setIsDonateModalOpen(true)
                  }}
                  className="w-full bg-brand-maroon text-white py-3 rounded-xl font-bold text-sm tracking-[0.15em] shadow-lg active:scale-95 transition-all duration-200 hover:bg-brand-maroon/90"
                >
                  DONATE NOW
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ===== Donate Modal ===== */}
      {isDonateModalOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsDonateModalOpen(false)}
        >
          <div
            className="bg-brand-maroon rounded-3xl max-w-md w-full mx-4 p-6 md:p-8 relative border border-brand-gold/30 shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsDonateModalOpen(false)}
              className="absolute top-3 right-4 text-white/50 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
              aria-label="Close"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>

            <div className="text-center mb-6">
              <span className="inline-block text-brand-gold/60 text-xs font-medium tracking-[0.2em] uppercase">
                عطیہ کریں
              </span>
              <h3 className="urdu-text text-brand-gold text-xl md:text-2xl font-bold mt-1">
                عطیات کی معلومات
              </h3>
            </div>

            <div className="bg-brand-maroon/40 p-5 md:p-6 rounded-2xl border border-brand-gold/30 shadow-inner relative">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

              <div className="flex items-center gap-3 mb-3">
                <span className="text-lg md:text-xl font-bold text-brand-gold tracking-tight">EasyPaisa</span>
                <span className="text-[10px] md:text-xs text-brand-gold/60 font-medium tracking-wider">| فوری منتقلی</span>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-brand-gold/70 text-3xl leading-none">
                  phone_android
                </span>
                <div className="flex items-center gap-2 flex-1">
                  <p className="text-base md:text-lg font-bold text-white tracking-wider font-mono" dir="ltr">
                    +92 3139812656
                  </p>
                  <button
                    onClick={handleCopy}
                    className="text-brand-gold/50 hover:text-brand-gold transition-colors p-1 rounded hover:bg-white/10"
                    title="کاپی کریں"
                  >
                    <span className="material-symbols-outlined text-2xl leading-none">
                      content_copy
                    </span>
                  </button>
                </div>
              </div>

              <p className="text-[10px] md:text-xs text-brand-gold/60 font-medium tracking-wide">
                Account Holder: Syed Nigar Badshah
              </p>

              <div className="mt-3 pt-3 border-t border-brand-gold/10 flex items-center justify-between">
                <span className="text-[8px] md:text-[10px] text-brand-gold/30 tracking-wider">ہر وقت دستیاب</span>
                <span className="text-[8px] md:text-[10px] text-brand-gold/30">آسان و محفوظ</span>
              </div>
            </div>

            <p className="text-white/50 urdu-text text-xs md:text-sm leading-[2.2] text-center mt-4">
              آپ کے عطیات مستحق طالبات کی تعلیم و تربیت میں معاون ثابت ہوتے ہیں۔
            </p>
          </div>
        </div>
      )}

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
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.4s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.35s ease-out forwards;
        }
      `}</style>
    </>
  )
}

export default Header
