import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type'

import logo from './assets/logo.webp'
import foto1 from './assets/foto/foto-1.webp'
import foto2 from './assets/foto/foto-2.webp'
import foto3 from './assets/foto/foto-3.webp'
import foto4 from './assets/foto/foto-4.webp'
import foto5 from './assets/foto/foto-5.webp'
import foto6 from './assets/foto/foto-6.webp'
import foto7 from './assets/foto/foto-7.webp'
import foto8 from './assets/foto/foto-8.webp'
import foto9 from './assets/foto/foto-9.webp'
import foto10 from './assets/foto/foto-10.webp'
import foto11 from './assets/foto/foto-11.webp'
import foto12 from './assets/foto/foto-12.webp'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const galleryRef = useRef(null)

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => lenis.destroy()
  }, [])

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero intro
      const heroTl = gsap.timeline({ delay: 0.2 })

      // Split hero title
      const heroTitle = new SplitType('.hero-main-title', { types: 'chars, words, lines' })
      heroTl.fromTo(heroTitle.chars,
        { y: '100%', rotationX: -80, opacity: 0 },
        {
          y: '0%',
          rotationX: 0,
          opacity: 1,
          duration: 1.4,
          ease: 'expo.out',
          stagger: { each: 0.025, from: 'start' }
        }
      )

      // Hero subtitle reveal
      const heroSub = new SplitType('.hero-subtitle', { types: 'words' })
      heroTl.fromTo(heroSub.words,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.03 },
        '-=0.8'
      )

      // Hero images staggered reveal
      heroTl.fromTo('.hero-img-1',
        { clipPath: 'inset(100% 0 0 0)', scale: 1.2 },
        { clipPath: 'inset(0% 0 0 0)', scale: 1, duration: 1.4, ease: 'expo.inOut' },
        '-=1.2'
      )
      heroTl.fromTo('.hero-img-2',
        { clipPath: 'inset(0 100% 0 0)', scale: 1.15 },
        { clipPath: 'inset(0 0% 0 0)', scale: 1, duration: 1.2, ease: 'expo.inOut' },
        '-=0.9'
      )

      // Hero CTA
      heroTl.fromTo('.hero-cta',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )

      // Parallax on hero images
      gsap.to('.hero-img-1 img', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5
        }
      })

      gsap.to('.hero-img-2 img', {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2
        }
      })

      // Section titles with varied animations
      gsap.utils.toArray('.section-heading').forEach((el, i) => {
        const split = new SplitType(el, { types: 'chars, words' })
        const direction = i % 2 === 0 ? 1 : -1

        gsap.fromTo(split.chars,
          {
            y: 60 * direction,
            opacity: 0,
            rotationZ: 5 * direction
          },
          {
            y: 0,
            opacity: 1,
            rotationZ: 0,
            duration: 0.9,
            ease: 'back.out(1.4)',
            stagger: {
              each: 0.02,
              from: i % 2 === 0 ? 'start' : 'end'
            },
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Staggered content reveals with different timing
      gsap.utils.toArray('.content-reveal').forEach((el, i) => {
        const delay = (i % 4) * 0.1
        gsap.fromTo(el,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'expo.out',
            delay,
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Image reveals with clip-path
      gsap.utils.toArray('.img-reveal').forEach((el, i) => {
        const directions = [
          'inset(0 100% 0 0)',
          'inset(100% 0 0 0)',
          'inset(0 0 100% 0)',
          'inset(0 0 0 100%)'
        ]
        gsap.fromTo(el,
          { clipPath: directions[i % 4] },
          {
            clipPath: 'inset(0 0 0 0)',
            duration: 1.4,
            ease: 'expo.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Horizontal gallery scroll
      const galleryPanels = gsap.utils.toArray('.gallery-item')
      if (galleryPanels.length > 0 && galleryRef.current) {
        gsap.to(galleryPanels, {
          xPercent: -100 * (galleryPanels.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: galleryRef.current,
            pin: true,
            scrub: 1.2,
            snap: 1 / (galleryPanels.length - 1),
            end: () => '+=' + galleryRef.current.offsetWidth * 1.5
          }
        })
      }

      // Services - varied entry
      gsap.utils.toArray('.service-card').forEach((card, i) => {
        const xOffset = i % 2 === 0 ? -50 : 50
        const rotation = i % 2 === 0 ? -3 : 3

        gsap.fromTo(card,
          { x: xOffset, y: 60, opacity: 0, rotation },
          {
            x: 0,
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 1.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  const servizi = [
    { title: 'Ortodonzia', desc: 'Correzione dell\'allineamento per un sorriso perfetto' },
    { title: 'Invisalign', desc: 'Allineatori trasparenti e discreti' },
    { title: 'Igiene Dentale', desc: 'Pulizia professionale e prevenzione' },
    { title: 'Visite', desc: 'Controlli completi e diagnosi accurate' },
    { title: 'Cura Carie', desc: 'Trattamenti conservativi e indolore' },
    { title: 'Prevenzione', desc: 'Programmi su misura per ogni età' }
  ]

  const orari = [
    { day: 'Lunedì', time: '14:00 – 19:00' },
    { day: 'Martedì', time: '09:00 – 13:00' },
    { day: 'Mercoledì', time: '14:00 – 19:00' },
    { day: 'Giovedì', time: 'Chiuso' },
    { day: 'Venerdì', time: '09:00 – 19:00' },
    { day: 'Sabato', time: '09:00 – 13:00' }
  ]

  const faqs = [
    { q: 'Come posso prenotare una visita?', a: 'Chiamaci al +39 375 725 0162 o scrivici su Facebook. Ti risponderemo rapidamente.' },
    { q: 'È necessario l\'appuntamento?', a: 'Sì, lavoriamo solo su appuntamento per dedicare il giusto tempo a ogni paziente.' },
    { q: 'Trattate anche i bambini?', a: 'Certamente, accogliamo pazienti di tutte le età con particolare attenzione ai più piccoli.' },
    { q: 'Quanto dura una visita?', a: 'Una visita di controllo standard dura circa 30 minuti.' }
  ]

  return (
    <div ref={containerRef} className="bg-[#0c0c0c] text-[#f8f8f6] min-h-screen">
      <div className="noise" />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 px-5 lg:px-10 py-5 lg:py-6 flex items-center justify-between mix-blend-difference">
        <a href="#" className="block">
          <img src={logo} alt="Studio Patroni" className="h-8 lg:h-10 invert" />
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {['Chi Siamo', 'Servizi', 'Galleria', 'Contatti'].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-xs tracking-[0.2em] uppercase link-underline text-[#f8f8f6] hover:text-[#c9a86c] transition-colors duration-500"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="tel:+393757250162"
          className="hidden lg:flex items-center gap-2 text-xs tracking-wider uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-[#c9a86c] animate-pulse" />
          Prenota
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-8 h-8 flex flex-col justify-center items-center gap-1"
        >
          <span className={`w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
          <span className={`w-5 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[2px]' : ''}`} />
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#0c0c0c] flex flex-col justify-center items-start px-8"
          >
            {['Chi Siamo', 'Servizi', 'Galleria', 'Contatti'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setMenuOpen(false)}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="text-4xl lg:text-5xl font-display py-3 border-b border-white/10 w-full"
                style={{ marginLeft: `${i * 12}px` }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section ref={heroRef} className="min-h-screen relative overflow-hidden">
        {/* Hero background images - asymmetric placement */}
        <div className="absolute inset-0">
          <div className="hero-img-1 absolute top-[12%] right-[3%] w-[42vw] h-[58vh] lg:w-[32vw] lg:h-[65vh] overflow-hidden">
            <img src={foto2} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="hero-img-2 absolute bottom-[8%] left-[5%] w-[28vw] h-[35vh] overflow-hidden hidden lg:block">
            <img src={foto7} alt="" className="w-full h-full object-cover opacity-70" />
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-center px-5 lg:px-16 pt-24 pb-16">
          <div className="max-w-[90vw] lg:max-w-[65vw]">
            <p className="text-[#c9a86c] text-xs lg:text-sm tracking-[0.4em] uppercase mb-6 lg:mb-10">
              Darfo Boario Terme
            </p>

            <h1 className="hero-main-title text-fluid-hero font-display leading-[0.9] tracking-[-0.02em] mb-8 lg:mb-14">
              <span className="block">Studio</span>
              <span className="block italic text-[#c9a86c] ml-[8vw]">Dentistico</span>
              <span className="block">Patroni</span>
            </h1>

            <p className="hero-subtitle text-[#888] text-fluid-base max-w-md lg:max-w-lg leading-relaxed lg:ml-[15vw] mb-10 lg:mb-14">
              Cure odontoiatriche su misura con oltre 15 anni di esperienza.
              Specializzati in ortodonzia e trattamenti Invisalign.
            </p>

            <div className="hero-cta flex flex-wrap items-center gap-6 lg:gap-10">
              <a
                href="tel:+393757250162"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#c9a86c] text-[#0c0c0c] text-sm font-medium tracking-wider uppercase overflow-hidden"
              >
                <span className="relative z-10">Prenota Visita</span>
                <span className="absolute inset-0 bg-[#f8f8f6] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </a>
              <a href="#chi-siamo" className="text-sm tracking-widest uppercase text-[#888] hover:text-[#f8f8f6] transition-colors link-underline">
                Scopri di più
              </a>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute bottom-16 right-8 lg:bottom-24 lg:right-20 text-right">
            <p className="text-6xl lg:text-8xl font-display text-[#c9a86c]">15+</p>
            <p className="text-xs tracking-[0.3em] uppercase text-[#888] mt-2">Anni di esperienza</p>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-6 border-y border-white/5 overflow-hidden">
        <div className="marquee-inner">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 shrink-0">
              {['Ortodonzia', '·', 'Invisalign Provider', '·', 'Igiene Dentale', '·', 'Prevenzione', '·', 'Cura Carie', '·'].map((t, j) => (
                <span key={j} className="text-2xl lg:text-4xl font-display italic text-white/15 whitespace-nowrap">
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CHI SIAMO */}
      <section id="chi-siamo" className="py-golden relative">
        <div className="px-5 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-6">
            {/* Left column - offset up */}
            <div className="lg:col-span-5 lg:col-start-1 lg:-mt-20">
              <p className="content-reveal text-[#c9a86c] text-xs tracking-[0.4em] uppercase mb-4">(Chi Siamo)</p>
              <h2 className="section-heading text-fluid-3xl font-display leading-[0.95] mb-8">
                Dott.ssa<br />
                <span className="italic text-[#c9a86c]">Fausta Patroni</span>
              </h2>
              <div className="content-reveal space-y-5 text-[#888] text-fluid-base leading-relaxed max-w-md">
                <p>
                  Con anni di dedizione all'odontoiatria, la Dottoressa Patroni ha costruito
                  uno studio dove ogni paziente trova un'esperienza su misura.
                </p>
                <p>
                  Professionalità, empatia e tecnologie moderne si incontrano per offrire
                  cure all'avanguardia in un ambiente accogliente.
                </p>
              </div>

              <div className="content-reveal flex flex-wrap gap-4 mt-10">
                {['Professionalità', 'Empatia', 'Tecnologia'].map((v, i) => (
                  <span
                    key={v}
                    className="px-5 py-2 border border-white/10 text-xs tracking-[0.15em] uppercase text-[#888]"
                    style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>

            {/* Right column - image */}
            <div className="lg:col-span-6 lg:col-start-7 relative mt-10 lg:mt-0">
              <div className="img-reveal">
                <img src={foto4} alt="Studio Dentistico" className="w-full aspect-[3/4] object-cover" />
              </div>

              {/* Overlapping stat card */}
              <div className="absolute -bottom-8 -left-4 lg:-left-16 bg-[#0c0c0c] border border-white/10 p-6 lg:p-8 content-reveal">
                <p className="text-4xl lg:text-5xl font-display text-[#c9a86c]">1000+</p>
                <p className="text-xs tracking-[0.2em] uppercase text-[#888] mt-2">Pazienti soddisfatti</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section id="servizi" className="py-golden relative">
        <div className="px-5 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24">
            <div>
              <p className="content-reveal text-[#c9a86c] text-xs tracking-[0.4em] uppercase mb-4">(Servizi)</p>
              <h2 className="section-heading text-fluid-3xl font-display leading-[0.95]">
                I nostri<br />
                <span className="italic text-[#c9a86c]">trattamenti</span>
              </h2>
            </div>
            <p className="content-reveal text-[#888] max-w-sm mt-6 lg:mt-0 lg:text-right text-fluid-base">
              Soluzioni complete per la salute e la bellezza del tuo sorriso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {servizi.map((s, i) => {
              const offsets = ['lg:mt-0', 'lg:mt-12', 'lg:mt-6', 'lg:mt-16', 'lg:mt-3', 'lg:mt-10']
              return (
                <div
                  key={i}
                  className={`service-card group relative p-8 lg:p-10 border border-white/10 hover:border-[#c9a86c]/40 transition-all duration-700 ${offsets[i]}`}
                >
                  <span className="absolute top-4 right-4 text-xs text-white/20 font-mono">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-fluid-xl font-display mb-3 group-hover:text-[#c9a86c] transition-colors duration-500">
                    {s.title}
                  </h3>
                  <p className="text-[#888] text-sm leading-relaxed">{s.desc}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c9a86c] group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* INVISALIGN FEATURE */}
      <section className="relative py-golden overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[80vh]">
          {/* Image - full bleed left */}
          <div className="relative h-[50vh] lg:h-auto order-2 lg:order-1">
            <div className="img-reveal absolute inset-0">
              <img src={foto10} alt="Invisalign" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content - right */}
          <div className="flex items-center px-5 lg:px-16 py-16 lg:py-24 order-1 lg:order-2 bg-[#0c0c0c]">
            <div className="max-w-lg">
              <p className="content-reveal text-[#c9a86c] text-xs tracking-[0.4em] uppercase mb-6">(In Evidenza)</p>

              <h3 className="section-heading text-fluid-2xl font-display leading-[0.95] mb-8">
                Trattamenti<br />
                <span className="italic text-[#c9a86c]">Invisalign</span>
              </h3>

              <p className="content-reveal text-[#888] text-fluid-base leading-relaxed mb-10">
                Raddrizza i tuoi denti in modo completamente discreto. Gli allineatori
                trasparenti Invisalign sono la soluzione moderna, confortevole e
                praticamente invisibile per un sorriso perfetto.
              </p>

              <a
                href="tel:+393757250162"
                className="content-reveal inline-flex items-center gap-4 group"
              >
                <span className="w-14 h-14 border border-[#c9a86c] flex items-center justify-center group-hover:bg-[#c9a86c] transition-all duration-500">
                  <svg className="w-5 h-5 text-[#c9a86c] group-hover:text-[#0c0c0c] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span className="text-sm tracking-[0.2em] uppercase">Richiedi info</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY - Horizontal scroll */}
      <section id="galleria" ref={galleryRef} className="relative bg-[#0a0a0a]">
        <div className="py-16 lg:py-24">
          <div className="px-5 lg:px-16 mb-12">
            <p className="content-reveal text-[#c9a86c] text-xs tracking-[0.4em] uppercase mb-4">(Galleria)</p>
            <h2 className="section-heading text-fluid-3xl font-display">
              Il nostro <span className="italic text-[#c9a86c]">studio</span>
            </h2>
          </div>

          <div className="flex horizontal-section">
            {[foto1, foto3, foto5, foto6, foto8, foto9, foto11, foto12].map((img, i) => {
              const heights = ['h-[55vh]', 'h-[65vh]', 'h-[50vh]', 'h-[60vh]', 'h-[55vh]', 'h-[70vh]', 'h-[52vh]', 'h-[62vh]']
              const widths = ['w-[75vw]', 'w-[55vw]', 'w-[65vw]', 'w-[50vw]', 'w-[60vw]', 'w-[70vw]', 'w-[55vw]', 'w-[65vw]']
              const tops = ['mt-0', 'mt-16', 'mt-6', 'mt-24', 'mt-10', 'mt-4', 'mt-20', 'mt-8']

              return (
                <div key={i} className={`gallery-item flex-shrink-0 px-3 ${tops[i]}`}>
                  <div className={`${widths[i]} ${heights[i]} lg:w-[35vw] img-zoom relative`}>
                    <img src={img} alt={`Galleria ${i + 1}`} className="w-full h-full object-cover" />
                    <span className="absolute bottom-4 left-4 text-xs font-mono text-white/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-golden relative">
        <div className="px-5 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="content-reveal text-[#c9a86c] text-xs tracking-[0.4em] uppercase mb-4">(FAQ)</p>
              <h2 className="section-heading text-fluid-2xl font-display leading-[0.95]">
                Domande<br />
                <span className="italic text-[#c9a86c]">frequenti</span>
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="content-reveal border-b border-white/10"
                  style={{ marginLeft: `${i * 8}px` }}
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full py-7 flex items-center justify-between text-left group"
                  >
                    <span className="text-fluid-lg font-display pr-6 group-hover:text-[#c9a86c] transition-colors">
                      {faq.q}
                    </span>
                    <span className={`text-2xl text-[#c9a86c] transition-transform duration-500 ${activeFaq === i ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 text-[#888] leading-relaxed max-w-lg">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="py-golden relative">
        <div className="px-5 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <p className="content-reveal text-[#c9a86c] text-xs tracking-[0.4em] uppercase mb-6">(Contatti)</p>

              <h2 className="section-heading text-fluid-3xl font-display leading-[0.95] mb-12 lg:mb-16">
                Vieni a<br />
                <span className="italic text-[#c9a86c]">trovarci</span>
              </h2>

              <div className="space-y-10">
                <div className="content-reveal">
                  <p className="text-xs tracking-[0.3em] uppercase text-[#888] mb-3">Indirizzo</p>
                  <p className="text-fluid-lg font-display leading-snug">
                    Viale Alcide De Gasperi, 23<br />
                    25047 Darfo Boario Terme (BS)
                  </p>
                </div>

                <div className="content-reveal">
                  <p className="text-xs tracking-[0.3em] uppercase text-[#888] mb-3">Telefono</p>
                  <a href="tel:+393757250162" className="text-fluid-xl font-display text-[#c9a86c] hover:opacity-70 transition-opacity">
                    +39 375 725 0162
                  </a>
                </div>

                <div className="content-reveal">
                  <p className="text-xs tracking-[0.3em] uppercase text-[#888] mb-3">Social</p>
                  <a
                    href="https://www.facebook.com/studio.patroni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-fluid-base hover:text-[#c9a86c] transition-colors link-underline"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    @studio.patroni
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="content-reveal bg-[#0a0a0a] border border-white/10 p-8 lg:p-10 mb-8">
                <p className="text-xs tracking-[0.3em] uppercase text-[#888] mb-6">Orari di Apertura</p>
                <div className="space-y-4">
                  {orari.map((o, i) => (
                    <div
                      key={i}
                      className={`flex justify-between py-3 border-b border-white/5 ${o.time === 'Chiuso' ? 'text-[#444]' : ''}`}
                      style={{ paddingLeft: `${i * 3}px` }}
                    >
                      <span className="text-sm">{o.day}</span>
                      <span className="text-sm font-mono">{o.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="content-reveal h-[280px] lg:h-[320px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.8892761!2d10.1886451!3d45.8944098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47817e8c5c5c5c5c%3A0x0!2sViale%20Alcide%20De%20Gasperi%2C%2023%2C%2025047%20Darfo%20Boario%20Terme%20BS!5e0!3m2!1sit!2sit!4v1600000000000!5m2!1sit!2sit"
                  className="w-full h-full grayscale brightness-[0.4] hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Mappa"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-golden overflow-hidden bg-[#c9a86c]">
        <div className="relative z-10 px-5 lg:px-16 text-center">
          <h2 className="section-heading text-fluid-3xl lg:text-fluid-4xl font-display text-[#0c0c0c] mb-6">
            Prenota la tua <span className="italic">visita</span>
          </h2>
          <p className="content-reveal text-[#0c0c0c]/60 text-fluid-base mb-12 max-w-md mx-auto">
            Non rimandare la cura del tuo sorriso
          </p>

          <div className="content-reveal flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+393757250162"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#0c0c0c] text-[#f8f8f6] font-medium tracking-wider uppercase overflow-hidden"
            >
              <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="relative z-10">Chiama Ora</span>
              <span className="absolute inset-0 bg-[#f8f8f6] text-[#0c0c0c] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </a>

            <a
              href="https://www.facebook.com/studio.patroni/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#0c0c0c]/80 hover:text-[#0c0c0c] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 lg:py-16 border-t border-white/5">
        <div className="px-5 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div>
              <img src={logo} alt="Studio Patroni" className="h-9 mb-4 invert opacity-50" />
              <p className="text-[#888] text-xs">
                © {new Date().getFullYear()} Studio Dentistico Dott.ssa Patroni
              </p>
            </div>

            <div className="flex flex-wrap gap-6 lg:gap-10">
              {['Chi Siamo', 'Servizi', 'Galleria', 'Contatti'].map((item, i) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-xs text-[#888] hover:text-[#f8f8f6] transition-colors tracking-wider uppercase"
                  style={{ transform: `translateY(${i % 2 === 0 ? 0 : 3}px)` }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
