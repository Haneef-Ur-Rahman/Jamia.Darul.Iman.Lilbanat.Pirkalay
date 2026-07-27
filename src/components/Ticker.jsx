function Ticker() {
  return (
    <div className="bg-brand-maroon text-white py-1 md:py-1.5 overflow-hidden whitespace-nowrap z-50 relative border-b border-brand-gold/20">
      <div className="ticker-animation urdu-text text-[8px] sm:text-[10px] md:text-xs font-medium tracking-wider">
        {/* Lines */}
        <span className="mx-1 md:mx-2">علم کے نور سے روشن مستقبل</span>
        <span className="mx-1 md:mx-2 text-brand-gold/50">●</span>

        <span className="mx-1 md:mx-2">اللہ کی رضا ہمارا نصب العین</span>
        <span className="mx-1 md:mx-2 text-brand-gold/50">●</span>

        <span className="mx-1 md:mx-2">جامعہ دارالایمان للبنات پیرکلے میں داخلہ جاری ہے۔</span>
        <span className="mx-1 md:mx-2 text-brand-gold/50">●</span>

        <span className="mx-1 md:mx-2">تعلیم وہ روشنی ہے جو اندھیروں کو مٹا دیتی ہے</span>
        <span className="mx-1 md:mx-2 text-brand-gold/50">●</span>

        <span className="mx-1 md:mx-2">کامیابی کی کنجی محنت اور استقامت ہے</span>
      </div>
    </div>
  );
}

export default Ticker;