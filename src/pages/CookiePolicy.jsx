import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'
import siteData from '../siteData'

function CookiePolicy() {
  return (
    <div className="bg-[#F5F3F7] min-h-screen">
      {/* Header */}
      <header className="bg-[#0D0B10] text-white py-8">
        <div className="px-6 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Torna alla Home
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#3DD6E8]/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-[#3DD6E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-display font-semibold">Cookie Policy</h1>
              <p className="text-white/60 text-sm">Informativa sull'utilizzo dei cookie</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 lg:px-12 py-12 lg:py-16">
        <div className="max-w-3xl mx-auto bg-white p-8 lg:p-12 shadow-sm">
          <p className="text-sm text-[#6B6B7B] mb-8">
            Ultimo aggiornamento: {siteData.dataAggiornamentoPolicy}
          </p>

          {/* Privacy-Friendly Banner */}
          <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-10 flex items-start gap-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-green-800 mb-1">Sito Privacy-Friendly</h3>
              <p className="text-green-700 text-sm">
                Questo sito web utilizza <strong>solo cookie tecnici</strong> necessari al funzionamento. <strong>Non utilizziamo cookie
                di profilazione, tracciamento o analisi</strong>. La tua privacy è protetta e non serve il tuo consenso per
                la navigazione.
              </p>
            </div>
          </div>

          {/* 1. Cosa sono i Cookie */}
          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-[#0D0B10] mb-4">1. Cosa sono i Cookie</h2>
            <p className="text-[#6B6B7B]">
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone)
              quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune
              informazioni sulle tue preferenze o azioni passate.
            </p>
          </section>

          {/* 2. Tipologie di Cookie */}
          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-[#0D0B10] mb-4">2. Tipologie di Cookie</h2>

            <h3 className="text-lg font-semibold text-[#0D0B10] mb-3">2.1 Cookie Tecnici</h3>
            <p className="text-[#6B6B7B] mb-4">
              Sono cookie necessari al funzionamento del sito e permettono di navigare e utilizzare le funzionalità base. Senza
              questi cookie, il sito potrebbe non funzionare correttamente.
            </p>
            <div className="bg-[#3DD6E8]/10 p-6 rounded-lg mb-6">
              <p className="font-semibold text-[#0D0B10] mb-2">Cookie tecnici utilizzati su questo sito:</p>
              <ul className="list-disc pl-6 text-[#6B6B7B] text-sm space-y-1">
                <li>Cookie di navigazione e di sessione</li>
                <li>Cookie per memorizzare le preferenze dell'interfaccia</li>
              </ul>
              <p className="text-[#6B6B7B] text-sm mt-4 italic">
                Secondo la normativa vigente, i cookie tecnici non richiedono il consenso dell'utente.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-[#0D0B10] mb-3">2.2 Cookie Analitici</h3>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">NON UTILIZZATI</span>
            </div>
            <p className="text-[#6B6B7B] mb-6">
              Questo sito NON utilizza cookie analitici come Google Analytics o simili per tracciare il comportamento degli utenti.
            </p>

            <h3 className="text-lg font-semibold text-[#0D0B10] mb-3">2.3 Cookie di Profilazione</h3>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">NON UTILIZZATI</span>
            </div>
            <p className="text-[#6B6B7B] mb-6">
              Questo sito NON utilizza cookie di profilazione per creare profili utente o inviare pubblicità mirata.
            </p>

            <h3 className="text-lg font-semibold text-[#0D0B10] mb-3">2.4 Cookie di Terze Parti</h3>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">NON UTILIZZATI</span>
            </div>
            <p className="text-[#6B6B7B]">
              Questo sito NON utilizza servizi di terze parti che installano cookie (Facebook Pixel, Google Ads, ecc.).
            </p>
          </section>

          {/* 3. Cookie Utilizzati su Questo Sito */}
          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-[#0D0B10] mb-4">3. Cookie Utilizzati su Questo Sito</h2>
            <p className="text-[#6B6B7B] mb-6">
              Il nostro sito utilizza esclusivamente i seguenti cookie tecnici:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#F5F3F7]">
                    <th className="border border-[#0D0B10]/10 px-4 py-3 text-left text-sm font-semibold text-[#0D0B10]">Nome Cookie</th>
                    <th className="border border-[#0D0B10]/10 px-4 py-3 text-left text-sm font-semibold text-[#0D0B10]">Tipologia</th>
                    <th className="border border-[#0D0B10]/10 px-4 py-3 text-left text-sm font-semibold text-[#0D0B10]">Finalità</th>
                    <th className="border border-[#0D0B10]/10 px-4 py-3 text-left text-sm font-semibold text-[#0D0B10]">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#0D0B10]/10 px-4 py-3 text-sm text-[#6B6B7B]">cookie_consent</td>
                    <td className="border border-[#0D0B10]/10 px-4 py-3">
                      <span className="px-2 py-1 bg-[#3DD6E8]/20 text-[#2BB8C8] text-xs rounded">Tecnico</span>
                    </td>
                    <td className="border border-[#0D0B10]/10 px-4 py-3 text-sm text-[#6B6B7B]">
                      Memorizza lo stato di accettazione/chiusura della barra laterale per migliorare l'esperienza di navigazione
                    </td>
                    <td className="border border-[#0D0B10]/10 px-4 py-3 text-sm text-[#6B6B7B]">1 anno</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
              <p className="text-amber-800 text-sm">
                <strong>Nota importante:</strong> I cookie tecnici come "cookie_consent" sono essenziali per il funzionamento del sito e non richiedono il
                consenso dell'utente ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR.
              </p>
            </div>
          </section>

          {/* 4. Come Gestire i Cookie */}
          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-[#0D0B10] mb-4">4. Come Gestire i Cookie</h2>
            <p className="text-[#6B6B7B] mb-4">
              Anche se i cookie tecnici non richiedono consenso, puoi comunque gestirli o eliminarli attraverso le impostazioni
              del tuo browser:
            </p>

            <h3 className="text-lg font-semibold text-[#0D0B10] mb-3">Disabilitare i cookie tramite il browser:</h3>
            <ul className="list-disc pl-6 text-[#6B6B7B] mb-6 space-y-2">
              <li><strong>Google Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
              <li><strong>Mozilla Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie e dati dei siti web</li>
              <li><strong>Safari:</strong> Preferenze → Privacy → Cookie e dati dei siti web</li>
              <li><strong>Microsoft Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito → Gestisci e elimina cookie</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
              <p className="text-amber-800 text-sm">
                <strong>Attenzione:</strong> La disabilitazione completa dei cookie tecnici potrebbe compromettere alcune funzionalità del sito e ridurre la
                qualità dell'esperienza di navigazione.
              </p>
            </div>
          </section>

          {/* 5. Link a Siti Esterni */}
          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-[#0D0B10] mb-4">5. Link a Siti Esterni</h2>
            <p className="text-[#6B6B7B]">
              Il nostro sito potrebbe contenere link a siti web di terze parti. Non siamo responsabili per le pratiche di privacy o
              il contenuto di tali siti esterni. Ti invitiamo a leggere le informative sulla privacy dei siti che visiti.
            </p>
          </section>

          {/* 6. Aggiornamenti della Cookie Policy */}
          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-[#0D0B10] mb-4">6. Aggiornamenti della Cookie Policy</h2>
            <p className="text-[#6B6B7B] mb-4">
              Questa Cookie Policy può essere modificata nel tempo. Eventuali modifiche sostanziali saranno comunicate
              attraverso un avviso pubblicato su questa pagina.
            </p>
            <p className="text-[#6B6B7B]">
              Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato sull'utilizzo dei cookie sul nostro
              sito.
            </p>
          </section>

          {/* 7. Base Normativa */}
          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-[#0D0B10] mb-4">7. Base Normativa</h2>
            <p className="text-[#6B6B7B] mb-4">Questa Cookie Policy è redatta in conformità a:</p>
            <ul className="list-disc pl-6 text-[#6B6B7B] space-y-1">
              <li>Regolamento (UE) 2016/679 del Parlamento Europeo (GDPR)</li>
              <li>Direttiva 2002/58/CE (Direttiva ePrivacy) aggiornata dalla Direttiva 2009/136/CE</li>
              <li>Provvedimento del Garante per la protezione dei dati personali dell'8 maggio 2014, n. 229</li>
              <li>Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021</li>
            </ul>
          </section>

          {/* 8. Contatti */}
          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-[#0D0B10] mb-4">8. Contatti</h2>
            <p className="text-[#6B6B7B] mb-4">
              Per domande o chiarimenti su questa Cookie Policy, puoi contattarci:
            </p>
            <div className="bg-[#F5F3F7] p-6 border-l-4 border-[#3DD6E8]">
              <p className="font-semibold text-[#0D0B10] mb-2">{siteData.titolare.nomeCompleto}</p>
              <div className="space-y-1 text-sm text-[#6B6B7B]">
                <p>{siteData.indirizzo.completo}</p>
                <p>Email: <a href={`mailto:${siteData.contatti.email}`} className="text-[#9B7FD1] hover:underline">{siteData.contatti.email}</a></p>
                <p>Tel: <a href={`tel:${siteData.contatti.telefonoLink}`} className="text-[#9B7FD1] hover:underline">{siteData.contatti.telefono}</a></p>
              </div>
            </div>
          </section>

          {/* Zero Tracciamento Badge */}
          <div className="bg-green-50 border border-green-200 p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-semibold text-green-800 mb-2">Zero Tracciamento</h3>
            <p className="text-green-700 text-sm">
              Naviga tranquillo: questo sito rispetta la tua privacy e non traccia le tue attività online.
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="max-w-3xl mx-auto mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="flex-1 py-4 border border-[#0D0B10]/20 text-center text-[#0D0B10] hover:bg-[#0D0B10]/5 transition-colors font-medium"
          >
            Torna alla Home
          </Link>
          <Link
            to="/privacy-policy"
            className="flex-1 py-4 border border-[#9B7FD1] text-center text-[#9B7FD1] hover:bg-[#9B7FD1] hover:text-white transition-colors font-medium"
          >
            Leggi la Privacy Policy
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0D0B10] text-white py-12 mt-16">
        <div className="px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <img src={logo} alt={siteData.siteNameShort} className="h-10 opacity-50" />
            <div className="flex flex-wrap gap-8">
              <Link to="/" className="text-sm text-white/60 hover:text-white transition-colors">Home</Link>
              <Link to="/privacy-policy" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/cookie-policy" className="text-sm text-white/60 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} {siteData.siteNameShort}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CookiePolicy
