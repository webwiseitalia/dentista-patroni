import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Controlla se l'utente ha già accettato/rifiutato i cookie
    const cookieConsent = localStorage.getItem('cookie_consent')
    if (!cookieConsent) {
      // Piccolo delay per evitare flash durante il caricamento
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'rejected')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop con blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0D0B10]/60 backdrop-blur-sm z-[9998]"
            onClick={() => {}} // Previene click-through
          />

          {/* Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4 lg:p-6"
          >
            <div className="max-w-4xl mx-auto bg-white shadow-2xl border border-[#0D0B10]/10">
              <div className="p-6 lg:p-8">
                {/* Header con icona */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#9B7FD1]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#9B7FD1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-[#0D0B10] mb-2">
                      Informativa sui Cookie
                    </h3>
                    <p className="text-[#6B6B7B] text-sm leading-relaxed">
                      Questo sito utilizza esclusivamente <strong>cookie tecnici</strong> necessari al funzionamento.
                      Non utilizziamo cookie di profilazione, tracciamento o analisi. La tua privacy è protetta.
                    </p>
                  </div>
                </div>

                {/* Link alle policy */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                  <Link
                    to="/cookie-policy"
                    className="text-[#9B7FD1] hover:text-[#7B5FB1] transition-colors underline underline-offset-2"
                  >
                    Cookie Policy
                  </Link>
                  <Link
                    to="/privacy-policy"
                    className="text-[#9B7FD1] hover:text-[#7B5FB1] transition-colors underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                </div>

                {/* Bottoni - dimensioni identiche */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleReject}
                    className="flex-1 py-4 px-6 border-2 border-[#0D0B10]/20 text-[#0D0B10] font-medium text-sm tracking-wider uppercase hover:bg-[#0D0B10]/5 transition-colors"
                  >
                    Rifiuta
                  </button>
                  <button
                    onClick={handleAccept}
                    className="flex-1 py-4 px-6 border-2 border-[#9B7FD1] bg-[#9B7FD1] text-white font-medium text-sm tracking-wider uppercase hover:bg-[#7B5FB1] hover:border-[#7B5FB1] transition-colors"
                  >
                    Accetta
                  </button>
                </div>

                {/* Nota */}
                <p className="text-xs text-[#6B6B7B] mt-4 text-center">
                  I cookie tecnici non richiedono consenso. Cliccando su entrambi i pulsanti nascondi questo banner.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CookieBanner
