// src/components/NotFound.jsx
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section dir="rtl" className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 bg-white">
      <span className="material-symbols-outlined text-brand-maroon text-6xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
        error
      </span>
      <h1 className="font-headline text-brand-maroon text-2xl md:text-3xl font-bold mb-2 urdu-text">
        یہ صفحہ موجود نہیں ہے
      </h1>
      <p className="text-on-surface-variant urdu-text mb-6 text-sm md:text-base">
        آپ جس صفحے کی تلاش کر رہے ہیں وہ موجود نہیں یا ہٹا دیا گیا ہے۔
      </p>
      <Link
        to="/"
        className="bg-brand-maroon text-white urdu-text font-bold px-6 py-2.5 rounded-xl hover:bg-brand-maroon/90 transition-colors"
      >
        ہوم پیج پر واپس جائیں
      </Link>
    </section>
  )
}

export default NotFound
