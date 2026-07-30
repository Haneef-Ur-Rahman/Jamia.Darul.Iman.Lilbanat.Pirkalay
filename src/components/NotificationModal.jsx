import { useState, useEffect } from 'react'

// 👇 Apni notification sheet ki ID yahan lagao
const NOTIFICATION_SHEET_ID = '1xkV5AzNedBxJ3I5iIrFVQGGboFyVNFEfrZXz0qaRR74'

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

export default function NotificationModal() {
    const [notifications, setNotifications] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [dontShow, setDontShow] = useState(false)

    useEffect(() => {
        // Check if user already dismissed
        const dismissed = localStorage.getItem('notification_dismissed')
        const dismissedDate = localStorage.getItem('notification_dismissed_date')

        // 24 hours baad phir se dikhao
        if (dismissed === 'true' && dismissedDate) {
            const hoursSinceDismissed = (Date.now() - parseInt(dismissedDate)) / (1000 * 60 * 60)
            if (hoursSinceDismissed < 24) return
        }

        fetchNotifications()
    }, [])

    const fetchNotifications = async () => {
        try {
            const csvUrl = `https://docs.google.com/spreadsheets/d/${NOTIFICATION_SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Sheet1`
            const res = await fetch(csvUrl)
            const csv = await res.text()

            const lines = csv.split('\n')

            if (lines.length < 2) return

            const headers = parseCSVLine(lines[0])
            const activeNotifications = []

            for (let i = 1; i < lines.length; i++) {
                if (!lines[i].trim()) continue

                const values = parseCSVLine(lines[i])
                const row = {}
                headers.forEach((h, idx) => (row[h] = values[idx] || ''))

                if (row.active?.toUpperCase() === 'TRUE') {
                    activeNotifications.push(row)
                }
            }

            if (activeNotifications.length > 0) {
                setNotifications(activeNotifications)
                setIsOpen(true)
            }
        } catch (err) {
            // Silent fail - no console error
        }
    }

    const handleClose = () => {
        setIsOpen(false)
        if (dontShow) {
            localStorage.setItem('notification_dismissed', 'true')
            localStorage.setItem('notification_dismissed_date', Date.now().toString())
        }
    }

    const handleNext = () => {
        if (currentIndex < notifications.length - 1) {
            setCurrentIndex(currentIndex + 1)
        } else {
            handleClose()
        }
    }

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    if (!isOpen || notifications.length === 0) return null

    const current = notifications[currentIndex]

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn p-3 sm:p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] flex flex-col overflow-hidden animate-scaleIn">

                {/* Header */}
                <div className="shrink-0 bg-gradient-to-r from-brand-maroon to-brand-maroon/90 text-white p-4 sm:p-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-brand-gold text-2xl">campaign</span>
                        <div>
                            <h3 className="urdu-text font-bold text-base sm:text-lg">اعلان نامہ</h3>
                           <p className="text-white/60 text-[10px] tracking-wider">
                                جامعہ دارالایمان للبنات پیرکلے پشاور
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleClose}
                        className="text-white/60 hover:text-white transition p-1 rounded-full hover:bg-white/10"
                    >
                        <span className="material-symbols-outlined text-xl">close</span>
                    </button>
                </div>

                {/* Body - Scrollable */}
                <div className="flex-1 overflow-y-auto p-5 sm:p-6" dir="rtl">
                    {/* Title */}
                    <h4 className="text-brand-maroon font-bold text-lg sm:text-xl urdu-text mb-4 text-center leading-relaxed border-b border-brand-maroon/10 pb-3">
                        {current.title}
                    </h4>

                    {/* Message */}
                    <div className="text-gray-700 text-sm sm:text-base urdu-text leading-[2.2] space-y-3 text-justify">
                        {current.message.split('\\n').map((paragraph, i) => (
                            paragraph.trim() && (
                                <p key={i}>{paragraph.trim()}</p>
                            )
                        ))}
                    </div>

                    {/* Footer Text */}
                    {current.footer && (
                        <div className="mt-5 pt-3 border-t border-gray-100 text-center">
                            <p className="text-brand-maroon font-bold text-sm urdu-text leading-[2]">
                                {current.footer.split('\\n').map((line, i) => (
                                    <span key={i}>
                                        {line.trim()}
                                        {i < current.footer.split('\\n').length - 1 && <br />}
                                    </span>
                                ))}
                            </p>
                        </div>
                    )}

                    {/* Pagination dots */}
                    {notifications.length > 1 && (
                        <div className="flex justify-center gap-1.5 mt-5">
                            {notifications.map((_, i) => (
                                <span
                                    key={i}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex
                                            ? 'bg-brand-maroon w-5'
                                            : 'bg-gray-300 w-2'
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="shrink-0 bg-gray-50 px-5 py-3 sm:py-4 flex items-center justify-between border-t border-gray-100">
                    <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-500">
                        <input
                            type="checkbox"
                            checked={dontShow}
                            onChange={(e) => setDontShow(e.target.checked)}
                            className="rounded border-gray-300 text-brand-maroon focus:ring-brand-maroon"
                        />
                        <span className="text-xs">دوبارہ نہ دکھائیں</span>
                    </label>

                    <div className="flex gap-2">
                        {currentIndex > 0 && (
                            <button
                                onClick={handlePrev}
                                className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition text-gray-600"
                            >
                                ⬅️ پچھلا
                            </button>
                        )}
                        <button
                            onClick={handleNext}
                            className="px-4 sm:px-5 py-2 bg-brand-maroon text-white rounded-lg text-sm font-bold hover:bg-brand-maroon/90 transition shadow-md hover:shadow-lg"
                        >
                            {currentIndex < notifications.length - 1 ? 'اگلا ➡️' : 'سمجھ گیا ✅'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
