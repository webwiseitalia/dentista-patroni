import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'
import siteData from '../siteData'

function PrivacyPolicy() {
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
            <div className="w-12 h-12 bg-[#9B7FD1]/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-[#9B7FD1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-display font-semibold">Privacy Policy</h1>
              <p className="text-white/60 text-sm">Informativa sul trattamento dei dati personali</p>
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

          {/* 1. Titolare del Trattamento */}
          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-[#0D0B10] mb-4">1. Titolare del Trattamento</h2>
            <p className="text-[#6B6B7B] mb-4">Il Titolare del trattamento dei dati personali è:</p>
            <div className="bg-[#F5F3F7] p-6 border-l-4 border-[#9B7FD1]">
              <p className="font-semibold text-[#0D0B10] mb-2">{siteData.titolare.nomeCompleto}</p>
              <div className="space-y-1 text-sm text-[#6B6B7B]">
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#9B7FD1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {siteData.indirizzo.completo}
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#9B7FD1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteData.contatti.telefono}
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#9B7FD1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {siteData.contatti.email}
                </p>
              </div>
            </div>
          </section>

          {/* 2. Dati Raccolti e Finalità */}
          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-[#0D0B10] mb-4">2. Dati Raccolti e Finalità del Trattamento</h2>

            <h3 className="text-lg font-semibold text-[#0D0B10] mb-3">2.1 Dati forniti volontariamente dall'utente</h3>
            <p className="text-[#6B6B7B] mb-4">
              Tramite il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali:
            </p>
            <ul className="list-disc pl-6 text-[#6B6B7B] mb-6 space-y-1">
              <li><strong>Nome e Cognome</strong> - per identificare l'interessato</li>
              <li><strong>Indirizzo Email</strong> - per rispondere alle richieste</li>
              <li><strong>Numero di Telefono</strong> (facoltativo) - per contatti telefonici</li>
              <li><strong>Messaggio/Descrizione</strong> - per comprendere le esigenze</li>
            </ul>

            <div className="bg-[#3DD6E8]/10 p-6 rounded-lg mb-6">
              <p className="font-semibold text-[#0D0B10] mb-2">Finalità</p>
              <p className="text-[#6B6B7B] text-sm">I dati vengono raccolti esclusivamente per:</p>
              <ul className="list-disc pl-6 text-[#6B6B7B] text-sm mt-2 space-y-1">
                <li>Rispondere alle richieste di preventivo</li>
                <li>Fornire informazioni sui nostri servizi</li>
                <li>Organizzare appuntamenti e consultazioni</li>
                <li>Gestire la relazione con il paziente</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-[#0D0B10] mb-3">2.2 Base giuridica del trattamento</h3>
            <p className="text-[#6B6B7B]">
              Il trattamento è basato sul <strong>consenso esplicito</strong> dell'interessato (Art. 6, par. 1, lett. a del GDPR), fornito attraverso
              l'invio del modulo di contatto, e sulla <strong>esecuzione di misure precontrattuali</strong> (Art. 6, par. 1, lett. b del GDPR).
            </p>
          </section>

          {/* 3. Modalità di Trattamento */}
          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-[#0D0B10] mb-4">3. Modalità di Trattamento</h2>
            <p className="text-[#6B6B7B] mb-4">
              I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle
              finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
            </p>
            <p className="text-[#6B6B7B]">
              Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non
              autorizzati, perdita, distruzione o divulgazione.
            </p>
          </section>

          {/* 4. Conservazione dei Dati */}
          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-[#0D0B10] mb-4">4. Conservazione dei Dati</h2>
            <p className="text-[#6B6B7B] mb-4">
              I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le
              relazioni commerciali conseguenti:
            </p>
            <ul className="list-disc pl-6 text-[#6B6B7B] space-y-2">
              <li><strong>Richieste di preventivo:</strong> I dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto contrattuale</li>
              <li><strong>Rapporti contrattuali:</strong> I dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili</li>
              <li><strong>Richieste di informazioni:</strong> I dati vengono conservati per 12 mesi dalla risposta</li>
            </ul>
          </section>

          {/* 5. Comunicazione e Diffusione dei Dati */}
          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-[#0D0B10] mb-4">5. Comunicazione e Diffusione dei Dati</h2>
            <p className="text-[#6B6B7B] mb-4">
              I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:
            </p>
            <ul className="list-disc pl-6 text-[#6B6B7B] mb-6 space-y-1">
              <li>Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
              <li>Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
              <li>Autorità competenti in caso di richieste legittime previste per legge</li>
            </ul>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <p className="font-semibold text-red-800 mb-2">I tuoi dati NON verranno MAI:</p>
              <ul className="list-disc pl-6 text-red-700 text-sm space-y-1">
                <li>Venduti a terze parti</li>
                <li>Condivisi con scopi di marketing</li>
                <li>Utilizzati per invio di newsletter non richieste</li>
                <li>Trasferiti fuori dall'Unione Europea</li>
              </ul>
            </div>
          </section>

          {/* 6. Diritti dell'Interessato */}
          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-[#0D0B10] mb-4">6. Diritti dell'Interessato</h2>
            <p className="text-[#6B6B7B] mb-4">In qualità di interessato, hai il diritto di:</p>
            <ul className="list-disc pl-6 text-[#6B6B7B] mb-6 space-y-2">
              <li><strong>Accesso (Art. 15 GDPR):</strong> Ottenere conferma dell'esistenza dei tuoi dati e riceverne copia</li>
              <li><strong>Rettifica (Art. 16 GDPR):</strong> Richiedere la correzione di dati inesatti o incompleti</li>
              <li><strong>Cancellazione (Art. 17 GDPR):</strong> Richiedere la cancellazione dei dati ("diritto all'oblio")</li>
              <li><strong>Limitazione (Art. 18 GDPR):</strong> Richiedere la limitazione del trattamento</li>
              <li><strong>Portabilità (Art. 20 GDPR):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
              <li><strong>Opposizione (Art. 21 GDPR):</strong> Opporsi al trattamento dei dati personali</li>
              <li><strong>Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento</li>
            </ul>

            <div className="bg-[#9B7FD1]/10 p-6 rounded-lg">
              <p className="font-semibold text-[#0D0B10] mb-2">Come esercitare i tuoi diritti:</p>
              <p className="text-[#6B6B7B] text-sm mb-2">
                Puoi esercitare i tuoi diritti inviando una richiesta via email a{' '}
                <a href={`mailto:${siteData.contatti.email}`} className="text-[#9B7FD1] hover:underline">
                  {siteData.contatti.email}
                </a>{' '}
                o tramite raccomandata A/R all'indirizzo: {siteData.indirizzo.completo}.
              </p>
              <p className="text-[#6B6B7B] text-sm">
                Risponderemo entro <strong>30 giorni</strong> dalla ricezione della richiesta.
              </p>
            </div>
          </section>

          {/* 7. Diritto di Reclamo */}
          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-[#0D0B10] mb-4">7. Diritto di Reclamo</h2>
            <p className="text-[#6B6B7B] mb-4">
              Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali se ritieni che il
              trattamento dei tuoi dati violi il GDPR.
            </p>
            <div className="bg-[#F5F3F7] p-6 rounded-lg">
              <p className="font-semibold text-[#0D0B10] mb-2">Garante per la protezione dei dati personali:</p>
              <p className="text-[#6B6B7B] text-sm">Sito web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#9B7FD1] hover:underline">www.garanteprivacy.it</a></p>
              <p className="text-[#6B6B7B] text-sm">Email: garante@gpdp.it</p>
              <p className="text-[#6B6B7B] text-sm">PEC: protocollo@pec.gpdp.it</p>
            </div>
          </section>

          {/* 8. Cookie e Tecnologie di Tracciamento */}
          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-[#0D0B10] mb-4">8. Cookie e Tecnologie di Tracciamento</h2>
            <p className="text-[#6B6B7B]">
              Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni,
              consulta la nostra <Link to="/cookie-policy" className="text-[#9B7FD1] hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          {/* 9. Modifiche alla Privacy Policy */}
          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-[#0D0B10] mb-4">9. Modifiche alla Privacy Policy</h2>
            <p className="text-[#6B6B7B]">
              Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche
              saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a
              consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.
            </p>
          </section>

          {/* 10. Contatti */}
          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-[#0D0B10] mb-4">10. Contatti</h2>
            <p className="text-[#6B6B7B] mb-4">
              Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${siteData.contatti.email}`}
                className="flex items-center gap-3 text-[#9B7FD1] hover:text-[#7B5FB1] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {siteData.contatti.email}
              </a>
              <a
                href={`tel:${siteData.contatti.telefonoLink}`}
                className="flex items-center gap-3 text-[#9B7FD1] hover:text-[#7B5FB1] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteData.contatti.telefono}
              </a>
            </div>
          </section>

          {/* Footer nota legale */}
          <div className="border-t border-[#0D0B10]/10 pt-8 mt-10">
            <p className="text-xs text-[#6B6B7B] text-center">
              Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.
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
            to="/cookie-policy"
            className="flex-1 py-4 border border-[#9B7FD1] text-center text-[#9B7FD1] hover:bg-[#9B7FD1] hover:text-white transition-colors font-medium"
          >
            Leggi la Cookie Policy
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

export default PrivacyPolicy
