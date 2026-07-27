import { useState } from 'react'

// 🔴 APNI SHEET IDs YAHAN BHARO
const SHEET_DATABASE = {
    '2025': {
        'A': 'YOUR_SHEET_ID_FOR_2025_اعدادیہ',
        'B': 'YOUR_SHEET_ID_FOR_2025_متوسطہ',
        'C': 'YOUR_SHEET_ID_FOR_2025_اولٰی',
        '1': '1TXAINbgYCsIGwdYUFgBIgm0Fiw9MddhGRuux6FiOiz8', // خاصہ سال اول
        '2': '10lM9ylgEiaZsBRejlkM7nAKzGTMuESoZsdolO1Ix8b0', // خاصہ سال دوم
        '3': '122kK9yPCn2vYOd7I9VHPlWfyZpb2YMP0N2N8B4NnAuA', // عالیہ سال اول
        '4': '1Aj0giQNuTTYYvTLy5uMv9_SpJKIlHEVnaUadgHpwWCg', // عالیہ سال دوم
        '5': '13z-Ba4gLLGxngayH_AQ-GMdflwfdgZI7lBdSelqzROk', // عالمیہ سال اول
        '6': '1IpgtRGl6r4WWsAr9ZCCAdcQU-bjmQlz9M0Sz-rZz3CA', // عالمیہ سال دوم
    },
    '2026': {
        'A': 'YOUR_SHEET_ID_FOR_2026_اعدادیہ',
        'B': 'YOUR_SHEET_ID_FOR_2026_متوسطہ',
        'C': 'YOUR_SHEET_ID_FOR_2026_اولٰی',
        '1': 'YOUR_SHEET_ID_FOR_2026_خاصہ_سال_اول',
        '2': '1JZaSUERPkIqdRlp5qXgJhn6Pn7sTF_aekPFImr3RJ4s', // ✅ خاصہ سال دوم
        '3': 'YOUR_SHEET_ID_FOR_2026_عالیہ_سال_اول',
        '4': 'YOUR_SHEET_ID_FOR_2026_عالیہ_سال_دوم',
        '5': 'YOUR_SHEET_ID_FOR_2026_عالمیہ_سال_اول',
        '6': 'YOUR_SHEET_ID_FOR_2026_عالمیہ_سال_دوم',
    },
}

const gradeNames = {
    'A': 'اعدادیہ',
    'B': 'متوسطہ',
    'C': 'اولٰی',
    '1': 'خاصہ سال اول',
    '2': 'خاصہ سال دوم',
    '3': 'عالیہ سال اول',
    '4': 'عالیہ سال دوم',
    '5': 'عالمیہ سال اول',
    '6': 'عالمیہ سال دوم',
}

const gradeOrder = ['A', 'B', 'C', '1', '2', '3', '4', '5', '6'];

const subjectsByGrade = {
    'A': [
        { key: 'الورقه الاولى', label: 'ترجمه وتفسير' },
        { key: 'الورقه الثانيه', label: 'صرف' },
        { key: 'الورقه الثالثه', label: 'فقه' },
        { key: 'الورقه الرابعه', label: 'اصول فقه' },
        { key: 'الورقه الخامسه', label: 'نحو' },
        { key: 'الورقه السادسه', label: 'نحو ومنطق' },
    ],
    'B': [
        { key: 'الورقه الاولى', label: 'ترجمه وتفسير' },
        { key: 'الورقه الثانيه', label: 'صرف' },
        { key: 'الورقه الثالثه', label: 'فقه' },
        { key: 'الورقه الرابعه', label: 'اصول فقه' },
        { key: 'الورقه الخامسه', label: 'نحو' },
        { key: 'الورقه السادسه', label: 'نحو ومنطق' },
    ],
    'C': [
        { key: 'الورقه الاولى', label: 'ترجمه وتفسير' },
        { key: 'الورقه الثانيه', label: 'صرف' },
        { key: 'الورقه الثالثه', label: 'فقه' },
        { key: 'الورقه الرابعه', label: 'اصول فقه' },
        { key: 'الورقه الخامسه', label: 'نحو' },
        { key: 'الورقه السادسه', label: 'نحو ومنطق' },
    ],
    '1': [ // خاصہ سال اول
        { key: 'الورقه الاولى', label: 'ترجمه وتفسير' },
        { key: 'الورقه الثانيه', label: 'حديث' },
        { key: 'الورقه الثالثه', label: 'فقه وسيرت' },
        { key: 'الورقه الرابعه', label: 'صرف' },
        { key: 'الورقه الخامسه', label: 'نحو' },
        { key: 'الورقه السادسه', label: 'لغہ عربيه' },
    ],
    '2': [
        { key: 'الورقه الاولى', label: 'ترجمه وتفسير' },
        { key: 'الورقه الثانيه', label: 'صرف' },
        { key: 'الورقه الثالثه', label: 'فقه' },
        { key: 'الورقه الرابعه', label: 'اصول فقه' },
        { key: 'الورقه الخامسه', label: 'نحو' },
        { key: 'الورقه السادسه', label: 'نحو ومنطق' },
    ],
    '3': [ // عالیہ سال اول
        { key: 'الورقه الاولى', label: 'ترجمه وتفسير' },
        { key: 'الورقه الثانيه', label: 'حديث' },
        { key: 'الورقه الثالثه', label: 'فقه' },
        { key: 'الورقه الرابعه', label: 'اصول فقه' },
        { key: 'الورقه الخامسه', label: 'بلاغه' },
        { key: 'الورقه السادسه', label: 'ادب عربي وعقائد' },
    ],
    '4': [ // عالیہ سال دوم
        { key: 'الورقه الاولى', label: 'ترجمه وتفسير' },
        { key: 'الورقه الثانيه', label: 'مشكوة ج 1' },
        { key: 'الورقه الثالثه', label: 'مشكوة ج 2 خيرالاصول' },
        { key: 'الورقه الرابعه', label: 'فقه' },
        { key: 'الورقه الخامسه', label: 'اخلاق وتربيت' },
        { key: 'الورقه السادسه', label: 'اصول تفسير وعقائد' },
    ],
    '5': [ // عالمیہ سال اول
        { key: 'الورقه الاولى', label: 'تفسير جلالين' },
        { key: 'الورقه الثانيه', label: 'تيسير مصطلح الحديث' },
        { key: 'الورقه الثالثه', label: 'هدايه ج 2' },
        { key: 'الورقه الرابعه', label: 'طحاوى' },
        { key: 'الورقه الخامسه', label: 'ترمذى ج 2' },
        { key: 'الورقه السادسه', label: 'سنن ابوداؤد ج 1' },
    ],
    '6': [ // عالمیہ سال دوم
        { key: 'الورقه الاولى', label: 'صحيح بخارى ج 2' },
        { key: 'الورقه الثانيه', label: 'صحيح مسلم ج 1' },
        { key: 'الورقه الثالثه', label: 'جامع ترمذى ج 1' },
        { key: 'الورقه الرابعه', label: 'صحيح بخارى ج 1' },
        { key: 'الورقه الخامسه', label: 'ابو داؤد ج 2' },
        { key: 'الورقه السادسه', label: 'صحيح مسلم ج 2' },
    ],
}

// 👇 CSV PARSER
function parseCSVLine(line) {
    const result = []
    let current = ''
    let inQuotes = false

    for (let i = 0; i < line.length; i++) {
        const char = line[i]

        if (char === '"') {
            inQuotes = !inQuotes
        } else if (char === ',' && !inQuotes) {
            result.push(current.replace(/"/g, '').trim())
            current = ''
        } else {
            current += char
        }
    }
    result.push(current.replace(/"/g, '').trim())

    return result
}

// 👇 AUTO-FORMAT ROLL NUMBER (XXXX-XX-XXXXXX)
function formatRollNumber(value) {
    const numbers = value.replace(/[^0-9]/g, '')

    if (numbers.length <= 4) {
        return numbers
    } else if (numbers.length <= 6) {
        return numbers.slice(0, 4) + '-' + numbers.slice(4)
    } else {
        return numbers.slice(0, 4) + '-' + numbers.slice(4, 6) + '-' + numbers.slice(6, 12)
    }
}

export default function Results({ onClose }) {
    const [step, setStep] = useState(1)
    const [selectedYear, setSelectedYear] = useState('')
    const [selectedGrade, setSelectedGrade] = useState('')
    const [rollNo, setRollNo] = useState('')
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(null)
    const [error, setError] = useState('')

    const selectYear = (year) => {
        setSelectedYear(year)
        setStep(2)
        setError('')
    }

    const selectGrade = (grade) => {
        setSelectedGrade(grade)
        setStep(3)
        setError('')
    }

    const goBack = () => {
        if (step === 3) {
            setStep(2)
            setSelectedGrade('')
            setRollNo('')
            setResult(null)
            setError('')
        } else if (step === 2) {
            setStep(1)
            setSelectedYear('')
            setRollNo('')
            setResult(null)
            setError('')
        }
    }

    // 👇 Roll Number Change Handler (Auto-format)
    const handleRollNoChange = (e) => {
        const formatted = formatRollNumber(e.target.value)
        setRollNo(formatted)
    }

    const searchResult = async () => {
        if (!rollNo.trim()) {
            setError('براہ کرم رول نمبر درج کریں')
            return
        }

        if (rollNo.length < 14) {
            setError('براہ کرم مکمل رول نمبر درج کریں (XXXX-XX-XXXXXX)')
            return
        }

        const sheetId = SHEET_DATABASE[selectedYear]?.[selectedGrade]
        if (!sheetId || sheetId.startsWith('YOUR_SHEET_ID')) {
            setError('اس سال/جماعت کا ڈیٹا ابھی دستیاب نہیں')
            return
        }

        setLoading(true)
        setError('')
        setResult(null)

        try {
            const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=Sheet1`
            const res = await fetch(csvUrl)
            const csv = await res.text()

            const lines = csv.split('\n')

            // Hardcoded headers (RTL order — jaise aapki sheet mein P se A tak hain)
            const headers = [
                'رقم الجلوس',
                'رقم التسجيل',
                'اسم الطالب',
                'اسم الاب',
                'مديريه',
                'تاريخ الولاده',
                'الورقه الاولى',
                'الورقه الثانيه',
                'الورقه الثالثه',
                'الورقه الرابعه',
                'الورقه الخامسه',
                'الورقه السادسه',
                'معدل',
                'مجموعه',
                'تقدير',
                'كيفيت'
            ]

            let found = null

            // 👇 i = 1 se start (line 0 = header, line 1 se data)
            for (let i = 1; i < lines.length; i++) {
                if (!lines[i].trim()) continue

                const csvValues = parseCSVLine(lines[i])

                // CSV values reverse karo (kyunki CSV left-to-right, sheet right-to-left)
                const values = [...csvValues].reverse()

                const row = {}
                headers.forEach((h, idx) => {
                    row[h] = values[idx] || ''
                })

                // رقم التسجيل se match karo
                const regNo = row['رقم التسجيل']?.trim() || ''

                if (regNo === rollNo.trim()) {
                    found = row
                    break
                }
            }

            if (found) {
                setResult(found)
            } else {
                setError('❌ کوئی نتیجہ نہیں ملا')
            }
        } catch (err) {
            console.error('Error:', err)
            setError('⚠️ نیٹ ورک کی خرابی')
        } finally {
            setLoading(false)
        }
    }

    // Result calculations
    let totalObtained = 0, totalMarks = 0
    const marksRows = []
    if (result) {
        const subjects = subjectsByGrade[selectedGrade] || []
        subjects.forEach(sub => {
            const val = parseInt(result[sub.key])
            if (!isNaN(val) && val > 0) {
                marksRows.push({ name: sub.label, marks: val })
                totalObtained += val
                totalMarks += 100
            }
        })
    }
    const percentage = totalMarks > 0 ? ((totalObtained / totalMarks) * 100).toFixed(1) : 0
    const isPass = result?.['تقدير']?.includes('راسب') ? false : result?.['تقدير'] ? true : percentage >= 40

    return (
        <div className="results-inner" dir="rtl">
            {/* Header */}
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-brand-maroon urdu-text">نتائج</h2>
                <p className="text-sm text-brand-maroon/70">امتحانِ جائزہ</p>
            </div>

            {/* Step indicator */}
            <div className="flex justify-center gap-2 mb-6">
                {[1, 2, 3].map(s => (
                    <div
                        key={s}
                        className={`w-3 h-3 rounded-full transition ${s <= step ? 'bg-brand-maroon scale-110' : 'bg-gray-300'}`}
                    />
                ))}
            </div>

            {/* Step 1: Year */}
            {step === 1 && (
                <div className="animate-fadeIn">
                    <h3 className="text-center font-bold text-lg mb-4">📅 سال منتخب کریں</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {['2025', '2026'].map(year => (
                            <button
                                key={year}
                                onClick={() => selectYear(year)}
                                className="bg-brand-maroon/5 border-2 border-brand-maroon/20 rounded-xl py-4 text-brand-maroon font-bold hover:bg-brand-maroon hover:text-white transition text-lg"
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 2: Grade */}
            {step === 2 && (
                <div className="animate-fadeIn">
                    <h3 className="text-center font-bold text-lg mb-2">📚 جماعت منتخب کریں</h3>
                    <p className="text-center text-sm text-brand-maroon/70 mb-3">سال: {selectedYear}</p>
                    <div className="grid grid-cols-3 gap-3">
                        {gradeOrder.map((key) => (
                            <button
                                key={key}
                                onClick={() => selectGrade(key)}
                                className="bg-brand-maroon/5 border-2 border-brand-maroon/20 rounded-xl py-3 text-brand-maroon font-bold hover:bg-brand-maroon hover:text-white transition"
                            >
                                <span className="block text-xs">{gradeNames[key]}</span>
                            </button>
                        ))}
                    </div>
                    <button onClick={goBack} className="mt-4 w-full py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50">
                        ⬅️ واپس
                    </button>
                </div>
            )}

            {/* Step 3: Roll No */}
            {step === 3 && (
                <div className="animate-fadeIn">
                    <h3 className="text-center font-bold text-lg mb-2">🔢 رول نمبر درج کریں</h3>
                    <p className="text-center text-sm text-brand-maroon/70 mb-3">
                        سال: {selectedYear} | جماعت: {gradeNames[selectedGrade]}
                    </p>
                    <input
                        type="text"
                        placeholder="XXXX-XX-XXXXXX"
                        value={rollNo}
                        onChange={handleRollNoChange}
                        onKeyDown={e => e.key === 'Enter' && searchResult()}
                        className="w-full border-2 border-brand-maroon/20 rounded-xl px-4 py-3 text-center text-lg focus:border-brand-maroon outline-none mb-3 font-mono tracking-wider"
                        maxLength={14}
                        autoFocus
                        inputMode="numeric"
                    />
                    <button
                        onClick={searchResult}
                        disabled={loading}
                        className="w-full bg-brand-maroon text-white py-3 rounded-xl font-bold hover:bg-brand-maroon/90 disabled:opacity-50 transition"
                    >
                        {loading ? 'تلاش ہو رہی ہے...' : 'نتیجہ دیکھیں'}
                    </button>
                    <button onClick={goBack} className="mt-3 w-full py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50">
                        ⬅️ واپس
                    </button>

                    {error && (
                        <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center text-sm">
                            {error}
                        </div>
                    )}
                </div>
            )}

            {/* Result Display */}
            {result && (
                <div className="mt-6 animate-fadeIn">
                    {/* Student Header Card */}
                    <div className="bg-gradient-to-br from-brand-maroon to-brand-maroon/90 text-white rounded-t-xl p-5 text-center shadow-lg">
                        <h4 className="text-2xl font-bold urdu-text mb-3 tracking-wide">
                            {result['اسم الطالب']}
                        </h4>

                        {/* Divider */}
                        <div className="w-16 h-0.5 bg-brand-gold/60 mx-auto mb-3 rounded-full"></div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-1 gap-y-2 text-sm opacity-90">
                            <p className="leading-relaxed">
                                <span className="opacity-70">بنت:</span> {result['اسم الاب']}
                            </p>
                            <div className="flex justify-center gap-4 pt-3 flex-wrap">
                                <span className="bg-white/10 px-3 py-1 rounded-full text-xs">
                                    رقم الجلوس: <span dir="ltr">{result['رقم الجلوس']}</span>
                                </span>
                                <span className="bg-white/10 px-3 py-1 rounded-full text-xs">
                                    رقم التسجيل: <span dir="ltr">{result['رقم التسجيل']}</span>
                                </span>
                            </div>
                            <div className="flex justify-center gap-4 pt-3 flex-wrap">
                                <span className="text-xs opacity-75">المديرية: {result['مديريه']}</span>
                            </div>
                        </div>
                    </div>

                    {/* Marks Table Card */}
                    <div className="border-x border-b border-gray-200 rounded-b-xl overflow-hidden shadow-md bg-white">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gradient-to-r from-brand-maroon/5 to-brand-maroon/10">
                                    <th className="py-3 px-4 text-right text-brand-maroon font-bold text-sm">المادة</th>
                                    <th className="py-3 px-4 text-center text-brand-maroon font-bold text-sm">المجموع</th>
                                    <th className="py-3 px-4 text-center text-brand-maroon font-bold text-sm">العلامة</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {marksRows.map((row, i) => (
                                    <tr key={i} className={`hover:bg-gray-50 transition ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                                        {/* Subject Name */}
                                        <td className="py-3 px-4 text-right text-gray-700">{row.name}</td>
                                        {/* Total */}
                                        <td className="py-3 px-4 text-center text-gray-500">100</td>
                                        {/* Marks */}
                                        <td className="py-3 px-4 text-center">
                                            <span className="font-bold text-brand-maroon bg-brand-maroon/5 px-3 py-1 rounded-full text-sm">
                                                {row.marks}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                {/* Total Row */}
                                <tr className="bg-brand-maroon/5 font-bold">
                                    <td className="py-4 px-4 text-right text-brand-maroon">المجموع</td>
                                    <td className="py-4 px-4 text-center text-brand-maroon text-lg">{totalMarks}</td>
                                    <td className="py-4 px-4 text-center">
                                        <span className="text-brand-maroon text-lg">
                                            {result['مجموعه'] || totalObtained}
                                        </span>
                                    </td>
                                </tr>
                                {/* Percentage Row */}
                                <tr>
                                    <td colSpan={3} className="py-4 text-center">
                                        <div className="inline-flex items-center gap-2 bg-brand-maroon/5 px-6 py-2 rounded-full">
                                            <span className="text-gray-600 font-medium">المعدل:</span>
                                            <span className="font-bold text-brand-maroon text-xl">
                                                {result['معدل'] || percentage}%
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>

                        {/* Status Bar */}
                        <div className={`px-4 py-4 text-center font-bold text-lg tracking-wide ${isPass
                            ? 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-t border-green-200'
                            : 'bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border-t border-red-200'
                            }`}>
                            <div className="flex items-center justify-center gap-2">
                                <span>{isPass ? '✅' : '❌'}</span>
                                <span>التقدير: {result['تقدير'] || (isPass ? 'ناجح' : 'راسب')}</span>
                                {result['كيفيت'] && (
                                    <>
                                        <span className="opacity-50">|</span>
                                        <span>الكيفية: {result['كيفيت']}</span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="p-4 grid grid-cols-2 gap-3 bg-gray-50">
                            <button
                                onClick={() => window.print()}
                                className="py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm flex items-center justify-center gap-2"
                            >
                                <span>🖨️</span>
                                <span>طباعة</span>
                            </button>
                            <button
                                onClick={() => {
                                    setStep(1)
                                    setSelectedYear('')
                                    setSelectedGrade('')
                                    setRollNo('')
                                    setResult(null)
                                    setError('')
                                }}
                                className="py-3 bg-white border-2 border-brand-maroon text-brand-maroon rounded-xl font-bold hover:bg-brand-maroon/5 hover:-translate-y-0.5 transition-all duration-300 text-sm flex items-center justify-center gap-2 shadow-sm"
                            >
                                <span>🔄</span>
                                <span>بحث جديد</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}