import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type'

import logo from '../assets/logo.webp'
import foto1 from '../assets/foto/foto-1.webp'
import foto2 from '../assets/foto/foto-2.webp'
import foto3 from '../assets/foto/foto-3.webp'
import foto4 from '../assets/foto/foto-4.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto8 from '../assets/foto/foto-8.webp'
import foto9 from '../assets/foto/foto-9.webp'
import foto10 from '../assets/foto/foto-10.webp'
import foto11 from '../assets/foto/foto-11.webp'
import foto12 from '../assets/foto/foto-12.webp'

gsap.registerPlugin(ScrollTrigger)

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)
  const mainRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation
      const heroTitle = document.querySelector('.hero-title')
      if (heroTitle) {
        const split = new SplitType(heroTitle, { types: 'chars, words' })
        gsap.fromTo(split.chars,
          { y: 100, opacity: 0, rotateX: -80 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            ease: 'power4.out',
            stagger: { each: 0.02, from: 'start' },
            delay: 0.3
          }
        )
      }

      // Hero subtitle
      const heroSub = document.querySelector('.hero-sub')
      if (heroSub) {
        const splitSub = new SplitType(heroSub, { types: 'words' })
        gsap.fromTo(splitSub.words,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.03,
            delay: 0.8
          }
        )
      }

      // Hero image reveal
      gsap.fromTo('.hero-image',
        { clipPath: 'inset(100% 0 0 0)', scale: 1.2 },
        {
          clipPath: 'inset(0% 0 0 0)',
          scale: 1,
          duration: 1.5,
          ease: 'power3.inOut',
          delay: 0.4
        }
      )

      // Hero floating image
      gsap.fromTo('.hero-float',
        { y: 100, opacity: 0, rotate: 5 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 1.2,
          ease: 'power3.out',
          delay: 1
        }
      )

      // Parallax hero images
      gsap.to('.hero-image img', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5
        }
      })

      // Section titles - each different
      gsap.utils.toArray('.section-title').forEach((el, i) => {
        const split = new SplitType(el, { types: 'chars' })
        const direction = i % 3

        gsap.fromTo(split.chars,
          {
            y: direction === 0 ? 80 : 0,
            x: direction === 1 ? -50 : direction === 2 ? 50 : 0,
            opacity: 0,
            rotate: direction === 0 ? 10 : direction === 1 ? -5 : 5
          },
          {
            y: 0,
            x: 0,
            opacity: 1,
            rotate: 0,
            duration: 1,
            ease: 'power3.out',
            stagger: {
              each: 0.025,
              from: direction === 1 ? 'end' : 'start'
            },
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Image reveals with different directions
      gsap.utils.toArray('.img-anim').forEach((el, i) => {
        const directions = [
          { from: 'inset(100% 0 0 0)', to: 'inset(0% 0 0 0)' },
          { from: 'inset(0 100% 0 0)', to: 'inset(0 0% 0 0)' },
          { from: 'inset(0 0 100% 0)', to: 'inset(0 0 0% 0)' },
          { from: 'inset(0 0 0 100%)', to: 'inset(0 0 0 0%)' }
        ]
        const dir = directions[i % 4]

        gsap.fromTo(el,
          { clipPath: dir.from },
          {
            clipPath: dir.to,
            duration: 1.4,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Service items staggered chaos
      const services = gsap.utils.toArray('.service-item')
      services.forEach((el, i) => {
        const randomY = 60 + Math.random() * 40
        const randomRotate = (Math.random() - 0.5) * 6
        const randomDelay = Math.random() * 0.3

        gsap.fromTo(el,
          { y: randomY, opacity: 0, rotate: randomRotate },
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            duration: 1,
            ease: 'power3.out',
            delay: randomDelay,
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Fade reveals
      gsap.utils.toArray('.fade-reveal').forEach((el) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Horizontal scroll gallery - only on desktop (lg: 1024px+)
      const gallerySection = document.querySelector('.gallery-section')
      const galleryTrack = document.querySelector('.gallery-track-desktop')

      if (gallerySection && galleryTrack && window.innerWidth >= 1024) {
        gsap.to(galleryTrack, {
          x: () => -(galleryTrack.scrollWidth - window.innerWidth + 100),
          ease: 'none',
          scrollTrigger: {
            trigger: gallerySection,
            start: 'top top',
            end: () => '+=' + galleryTrack.scrollWidth,
            scrub: 1,
            pin: true,
            anticipatePin: 1
          }
        })
      }

    }, mainRef)

    return () => ctx.revert()
  }, [])

  const [activeService, setActiveService] = useState(null)

  const servizi = [
    {
      title: 'Visite',
      desc: 'Controlli completi e approfonditi per monitorare la salute della tua bocca. Utilizziamo tecnologie moderne per diagnosi accurate e tempestive.'
    },
    {
      title: 'Ortodonzia',
      desc: 'Trattamenti personalizzati per allineare i denti e correggere la masticazione. Soluzioni per adulti e bambini.'
    },
    {
      title: 'Igiene Dentale',
      desc: 'Pulizia professionale profonda per rimuovere placca e tartaro. Consigli personalizzati per mantenere i denti sani a casa.'
    },
    {
      title: 'Invisalign',
      desc: 'Allineatori trasparenti e rimovibili per un sorriso perfetto senza compromessi estetici. Risultati visibili in pochi mesi.'
    },
    {
      title: 'Cura Carie',
      desc: 'Trattamenti conservativi per riparare i denti danneggiati. Otturazioni estetiche e durature con materiali di alta qualità.'
    },
    {
      title: 'Prevenzione',
      desc: 'Programmi su misura per prevenire problemi dentali. Sigillature, fluoroprofilassi e controlli periodici.'
    }
  ]

  const orari = [
    { day: 'Lun', time: '14–19' },
    { day: 'Mar', time: '9–13' },
    { day: 'Mer', time: '14–19' },
    { day: 'Gio', time: '—' },
    { day: 'Ven', time: '9–19' },
    { day: 'Sab', time: '9–13' }
  ]

  const faqs = [
    { q: 'Come prenoto?', a: 'Chiamaci al +39 375 725 0162 o scrivici su Facebook.' },
    { q: 'Serve appuntamento?', a: 'Sì, lavoriamo solo su appuntamento.' },
    { q: 'Bambini?', a: 'Accogliamo pazienti di tutte le età.' },
    { q: 'Durata visita?', a: 'Circa 30 minuti.' }
  ]

  return (
    <div ref={mainRef} className="bg-[#F5F3F7] text-[#0D0B10] min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F3F7]/90 backdrop-blur-md border-b border-[#0D0B10]/5">
        <div className="flex justify-between items-center px-6 lg:px-12 py-4">
          <a href="#">
            <img src={logo} alt="Studio Dentistico Patroni - Logo" title="Studio Dentistico Dott.ssa Fausta Patroni" className="h-10 lg:h-12" loading="eager" width="48" height="48" />
          </a>

          <div className="hidden lg:flex items-center gap-12">
            {['Servizi', 'Studio', 'Galleria', 'Contatti', 'Prenota'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  item === 'Prenota'
                    ? 'text-[#9B7FD1] font-medium hover:text-[#7B5FB1]'
                    : 'text-[#0D0B10] hover:text-[#9B7FD1]'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="tel:+393757250162"
            className="hidden lg:flex items-center gap-2 px-6 py-3 gradient-bg text-white text-sm tracking-wider font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Contattaci
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#0D0B10]"
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <span className={`h-px bg-[#0D0B10] transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`h-px bg-[#0D0B10] transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at top right)' }}
            animate={{ clipPath: 'circle(150% at top right)' }}
            exit={{ clipPath: 'circle(0% at top right)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#9B7FD1] flex flex-col justify-center items-start px-10"
          >
            {['Servizi', 'Studio', 'Galleria', 'Contatti', 'Prenota'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="text-white text-5xl font-light py-3"
                style={{ marginLeft: `${i * 20}px` }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section ref={heroRef} className="min-h-screen relative">
        {/* Mobile Hero */}
        <div className="lg:hidden flex flex-col min-h-screen">
          {/* Mobile Image */}
          <div className="hero-image relative h-[50vh] mt-20">
            <img
              src={foto2}
              alt="Studio dentistico moderno con attrezzature all'avanguardia"
              title="Interno dello Studio Dentistico Patroni"
              className="w-full h-full object-cover"
              loading="eager"
              width="800"
              height="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F5F3F7] via-transparent to-transparent" />
            {/* Floating badge mobile */}
            <div className="hero-float absolute bottom-4 right-4 bg-white p-4 shadow-2xl">
              <p className="text-3xl font-display text-[#9B7FD1]">15+</p>
              <p className="text-xs tracking-widest uppercase text-[#6B6B7B]">Anni</p>
            </div>
          </div>

          {/* Mobile Content */}
          <div className="flex-1 flex flex-col justify-center px-6 py-10">
            <span className="text-[#3DD6E8] text-xs tracking-[0.3em] uppercase mb-4">
              Darfo Boario Terme
            </span>

            <h1 className="hero-title text-5xl font-display font-semibold leading-tight">
              <span className="block">Studio</span>
              <span className="block text-[#9B7FD1] italic">Patroni</span>
            </h1>

            <p className="hero-sub text-[#6B6B7B] text-lg mt-6 leading-relaxed">
              Cure odontoiatriche su misura. 15 anni di esperienza, un sorriso alla volta.
            </p>

            <div className="flex items-center gap-6 mt-8">
              <a
                href="tel:+393757250162"
                className="px-6 py-4 gradient-bg text-white text-sm font-medium tracking-wider uppercase"
              >
                Prenota
              </a>
              <a
                href="#studio"
                className="text-sm tracking-wider uppercase text-[#6B6B7B] hover:text-[#9B7FD1] transition-colors"
              >
                Scopri →
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Hero */}
        <div className="hidden lg:grid lg:grid-cols-12 min-h-screen">
          {/* Left content */}
          <div className="lg:col-span-5 flex flex-col justify-center px-12 py-0">
            <span className="text-[#3DD6E8] text-xs tracking-[0.3em] uppercase mb-8">
              Darfo Boario Terme
            </span>

            <h1 className="hero-title text-hero font-display font-semibold">
              <span className="block">Studio</span>
              <span className="block text-[#9B7FD1] italic">Patroni</span>
            </h1>

            <p className="hero-sub text-[#6B6B7B] text-large mt-12 max-w-md leading-relaxed">
              Cure odontoiatriche su misura. 15 anni di esperienza, un sorriso alla volta.
            </p>

            <div className="flex items-center gap-8 mt-16">
              <a
                href="tel:+393757250162"
                className="px-8 py-4 gradient-bg text-white text-sm font-medium tracking-wider uppercase"
              >
                Prenota
              </a>
              <a
                href="#studio"
                className="text-sm tracking-wider uppercase text-[#6B6B7B] hover:text-[#9B7FD1] transition-colors"
              >
                Scopri →
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="lg:col-span-7 relative">
            <div className="hero-image absolute inset-0 lg:left-[-10%]">
              <img
                src={foto2}
                alt="Studio dentistico moderno con attrezzature all'avanguardia"
                title="Interno dello Studio Dentistico Patroni"
                className="w-full h-full object-cover"
                loading="eager"
                width="1200"
                height="800"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5F3F7] via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="hero-float absolute bottom-20 left-[-5%] bg-white p-6 shadow-2xl">
              <p className="text-4xl font-display text-[#9B7FD1]">15+</p>
              <p className="text-xs tracking-widest uppercase text-[#6B6B7B] mt-1">Anni</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator - only on desktop */}
        <div className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase text-[#6B6B7B]">Scroll</span>
          <div className="w-px h-12 bg-[#9B7FD1]/30 relative overflow-hidden">
            <motion.div
              className="w-full h-4 bg-[#9B7FD1]"
              animate={{ y: [0, 32, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-8 overflow-hidden border-y border-[#9B7FD1]/10">
        <div className="marquee-track whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex items-center">
              {['Invisalign Provider', 'Ortodonzia', 'Igiene', 'Prevenzione', 'Cura Carie'].map((t, j) => (
                <span key={j} className="inline-flex items-center mx-8">
                  <span className="text-3xl lg:text-5xl font-display text-[#9B7FD1]/20">{t}</span>
                  <span className="w-3 h-3 rounded-full bg-[#3DD6E8]/30 ml-8" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* SERVIZI - Accordion */}
      <section id="servizi" className="py-32 lg:py-48">
        <div className="px-6 lg:px-12">
          <div className="lg:grid lg:grid-cols-12 gap-16">
            {/* Left - Title */}
            <div className="lg:col-span-4 mb-16 lg:mb-0 lg:sticky lg:top-32 lg:self-start">
              <span className="text-[#3DD6E8] text-xs tracking-[0.3em] uppercase">( Servizi )</span>
              <h2 className="section-title text-section font-display font-semibold mt-4">
                Cosa<br/>
                <span className="italic text-[#9B7FD1]">facciamo</span>
              </h2>
              <p className="fade-reveal text-[#6B6B7B] text-lg leading-relaxed mt-8">
                Trattamenti completi per tutta la famiglia, con attenzione e professionalità.
              </p>
            </div>

            {/* Right - Accordion */}
            <div className="lg:col-span-7 lg:col-start-6">
              {servizi.map((s, i) => (
                <div
                  key={i}
                  className="service-item border-b border-[#0D0B10]/10 first:border-t"
                >
                  <button
                    onClick={() => setActiveService(activeService === i ? null : i)}
                    className="w-full py-8 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-xs text-[#9B7FD1] font-mono">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-display group-hover:text-[#9B7FD1] transition-colors">
                        {s.title}
                      </h3>
                    </div>
                    <span
                      className={`w-10 h-10 border border-[#9B7FD1]/30 flex items-center justify-center text-[#9B7FD1] transition-all duration-300 ${
                        activeService === i ? 'bg-[#9B7FD1] text-white rotate-45' : 'group-hover:border-[#9B7FD1]'
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence>
                    {activeService === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 pl-16">
                          <p className="text-[#6B6B7B] text-lg leading-relaxed max-w-lg">
                            {s.desc}
                          </p>
                          <a
                            href="tel:+393757250162"
                            className="inline-flex items-center gap-3 mt-6 text-[#9B7FD1] hover:text-[#3DD6E8] transition-colors text-sm tracking-wider uppercase"
                          >
                            Prenota
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INVISALIGN - Asymmetric */}
      <section className="relative py-32 lg:py-0">
        <div className="lg:grid lg:grid-cols-12 lg:min-h-screen">
          <div className="lg:col-span-7 lg:col-start-1 relative h-[60vh] lg:h-auto">
            <div className="img-anim absolute inset-0">
              <img
                src={foto10}
                alt="Trattamento Invisalign per allineamento dentale trasparente"
                title="Invisalign - Allineatori trasparenti"
                className="w-full h-full object-cover"
                loading="lazy"
                width="1000"
                height="700"
              />
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 flex items-center px-6 lg:px-0 py-16 lg:py-32">
            <div className="lg:-ml-32 relative z-10 bg-[#F5F3F7] lg:p-12">
              <span className="text-[#3DD6E8] text-xs tracking-[0.3em] uppercase">( In evidenza )</span>
              <h2 className="section-title text-section font-display font-semibold mt-4">
                Invisa<span className="italic text-[#9B7FD1]">lign</span>
              </h2>
              <p className="fade-reveal text-[#6B6B7B] text-large mt-8 leading-relaxed">
                Allineatori trasparenti per un sorriso perfetto. Discreti, comodi, efficaci.
              </p>
              <a
                href="tel:+393757250162"
                className="fade-reveal inline-flex items-center gap-4 mt-10 text-[#9B7FD1] hover:text-[#3DD6E8] transition-colors"
              >
                <span className="w-12 h-12 border border-current flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span className="text-sm tracking-wider uppercase">Info</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO */}
      <section id="studio" className="py-32 lg:py-48">
        <div className="px-6 lg:px-12">
          <div className="lg:grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 lg:col-start-2 mb-16 lg:mb-0">
              <span className="text-[#3DD6E8] text-xs tracking-[0.3em] uppercase">( Lo Studio )</span>
              <h2 className="section-title text-section font-display font-semibold mt-4">
                Dott.ssa<br/>
                <span className="italic text-[#9B7FD1]">Fausta Patroni</span>
              </h2>
              <p className="fade-reveal text-[#6B6B7B] text-large mt-8 leading-relaxed">
                Esperienza, empatia, tecnologia. Un approccio su misura per ogni paziente.
              </p>
              <div className="fade-reveal flex flex-wrap gap-4 mt-10">
                {['Professionalità', 'Empatia', 'Tecnologia'].map((v, i) => (
                  <span
                    key={v}
                    className="px-4 py-2 border border-[#9B7FD1]/30 text-xs tracking-wider uppercase text-[#6B6B7B]"
                    style={{ transform: `rotate(${(i - 1) * 2}deg)` }}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 relative">
              <div className="img-anim">
                <img
                  src={foto4}
                  alt="Dott.ssa Fausta Patroni - Dentista esperta"
                  title="Dott.ssa Fausta Patroni - Titolare dello Studio"
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                  width="600"
                  height="800"
                />
              </div>
              <div className="fade-reveal absolute -bottom-8 -left-8 bg-white p-6 shadow-xl">
                <p className="text-4xl font-display text-gradient">1000+</p>
                <p className="text-xs tracking-widest uppercase text-[#6B6B7B] mt-1">Pazienti</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY - Horizontal Scroll */}
      <section id="galleria" className="gallery-section relative bg-[#0D0B10] overflow-hidden">
        {/* Title */}
        <div className="absolute top-8 left-6 lg:top-12 lg:left-12 z-10">
          <span className="text-[#3DD6E8] text-xs tracking-[0.3em] uppercase">( Galleria )</span>
          <h2 className="section-title text-4xl lg:text-section font-display font-semibold mt-4 text-white">
            Il nostro<br/>
            <span className="italic text-[#9B7FD1]">spazio</span>
          </h2>
        </div>

        {/* Mobile Gallery - manual horizontal scroll (swipe) */}
        <div className="lg:hidden overflow-x-auto overflow-y-hidden py-32 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="flex items-center gap-4 pl-6 pr-6" style={{ width: 'max-content' }}>
            {[foto1, foto3, foto5, foto6, foto7, foto8, foto9, foto11, foto12].map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[280px] h-[300px] relative"
              >
                <img
                  src={img}
                  alt={`Studio Dentistico Patroni - Foto galleria ${i + 1}`}
                  title={`Galleria Studio Patroni ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="280"
                  height="300"
                />
                <span className="absolute bottom-4 left-4 text-white/50 text-xs font-mono">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Gallery - scroll-triggered horizontal animation */}
        <div className="hidden lg:block">
          <div className="gallery-track-desktop flex items-center gap-8 py-32 pl-[40vw]">
            {[foto1, foto3, foto5, foto6, foto7, foto8, foto9, foto11, foto12].map((img, i) => {
              const widths = ['w-[400px]', 'w-[350px]', 'w-[450px]', 'w-[380px]', 'w-[420px]', 'w-[360px]', 'w-[400px]', 'w-[380px]', 'w-[450px]']
              const heights = ['h-[50vh]', 'h-[65vh]', 'h-[45vh]', 'h-[55vh]', 'h-[50vh]', 'h-[60vh]', 'h-[48vh]', 'h-[55vh]', 'h-[50vh]']
              const tops = ['mt-0', 'mt-16', '-mt-8', 'mt-24', 'mt-4', '-mt-12', 'mt-20', 'mt-0', 'mt-12']

              return (
                <div
                  key={i}
                  className={`flex-shrink-0 ${widths[i]} ${heights[i]} ${tops[i]} relative group`}
                >
                  <img
                    src={img}
                    alt={`Studio Dentistico Patroni - Foto galleria ${i + 1}`}
                    title={`Galleria Studio Patroni ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width="450"
                    height="500"
                  />
                  <div className="absolute inset-0 bg-[#9B7FD1]/0 group-hover:bg-[#9B7FD1]/20 transition-colors duration-500" />
                  <span className="absolute bottom-4 left-4 text-white/50 text-xs font-mono">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 lg:py-48">
        <div className="px-6 lg:px-12">
          <div className="lg:grid lg:grid-cols-12 gap-16">
            {/* Left - Title */}
            <div className="lg:col-span-4 mb-16 lg:mb-0 lg:sticky lg:top-32 lg:self-start">
              <span className="text-[#3DD6E8] text-xs tracking-[0.3em] uppercase">( FAQ )</span>
              <h2 className="section-title text-section font-display font-semibold mt-4">
                Domande<br/>
                <span className="italic text-[#9B7FD1]">frequenti</span>
              </h2>
              <p className="fade-reveal text-[#6B6B7B] text-lg leading-relaxed mt-8">
                Risposte rapide alle domande più comuni.
              </p>
            </div>

            {/* Right - Accordion */}
            <div className="lg:col-span-7 lg:col-start-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="fade-reveal border-b border-[#0D0B10]/10 first:border-t"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full py-6 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-xs text-[#9B7FD1] font-mono">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xl lg:text-2xl font-display group-hover:text-[#9B7FD1] transition-colors">
                        {faq.q}
                      </span>
                    </div>
                    <span
                      className={`w-10 h-10 border border-[#9B7FD1]/30 flex items-center justify-center text-[#9B7FD1] transition-all duration-300 flex-shrink-0 ${
                        activeFaq === i ? 'bg-[#9B7FD1] text-white rotate-45' : 'group-hover:border-[#9B7FD1]'
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 pl-16 text-[#6B6B7B] text-lg leading-relaxed max-w-lg">{faq.a}</p>
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
      <section id="contatti" className="py-32 lg:py-48 bg-[#0D0B10] text-white">
        <div className="px-6 lg:px-12">
          {/* Header */}
          <div className="mb-20">
            <span className="text-[#3DD6E8] text-xs tracking-[0.3em] uppercase">( Contatti )</span>
            <h2 className="section-title text-section font-display font-semibold mt-4">
              Dove<br/>
              <span className="italic text-[#9B7FD1]">trovarci</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="lg:grid lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Mappa */}
            <div className="lg:col-span-7 mb-12 lg:mb-0">
              <div className="fade-reveal h-[350px] lg:h-[450px] relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.8892761!2d10.1886451!3d45.8944098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDUzJzM5LjkiTiAxMMKwMTEnMjcuMSJF!5e0!3m2!1sit!2sit!4v1600000000000"
                  className="w-full h-full grayscale invert opacity-60 hover:opacity-90 transition-opacity duration-500"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Mappa Studio Dentistico Patroni - Darfo Boario Terme"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 bg-[#9B7FD1] p-5">
                  <p className="text-white text-sm tracking-wider uppercase font-medium">Darfo Boario Terme</p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-5">
              {/* Indirizzo */}
              <div className="fade-reveal border-b border-white/10 pb-8 mb-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-[#9B7FD1]/50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#9B7FD1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-white/40 mb-2">Indirizzo</p>
                    <p className="text-xl font-display leading-relaxed">
                      Viale De Gasperi, 23<br/>
                      25047 Darfo Boario Terme (BS)
                    </p>
                  </div>
                </div>
              </div>

              {/* Telefono */}
              <div className="fade-reveal border-b border-white/10 pb-8 mb-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-[#9B7FD1]/50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#9B7FD1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-white/40 mb-2">Telefono</p>
                    <a
                      href="tel:+393757250162"
                      className="text-2xl font-display text-gradient hover:opacity-80 transition-opacity"
                    >
                      +39 375 725 0162
                    </a>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="fade-reveal border-b border-white/10 pb-8 mb-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-[#9B7FD1]/50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#9B7FD1]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-white/40 mb-2">Facebook</p>
                    <a
                      href="https://www.facebook.com/studio.patroni/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-display hover:text-[#9B7FD1] transition-colors"
                    >
                      @studio.patroni
                    </a>
                  </div>
                </div>
              </div>

              {/* Orari */}
              <div className="fade-reveal bg-white/5 p-6 lg:p-8">
                <p className="text-xs tracking-widest uppercase text-white/40 mb-6">Orari di apertura</p>
                <div className="grid grid-cols-3 gap-4">
                  {orari.map((o, i) => (
                    <div key={i} className="text-center py-3 border border-white/10">
                      <p className="text-xs text-white/50 mb-1 uppercase">{o.day}</p>
                      <p className={`text-sm font-medium ${o.time === '—' ? 'text-white/30' : 'text-white'}`}>
                        {o.time}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Prenota */}
      <section id="prenota" className="py-32 lg:py-48 bg-[#F5F3F7]">
        <div className="px-6 lg:px-12">
          <div className="lg:grid lg:grid-cols-12 gap-16">
            {/* Left - Title */}
            <div className="lg:col-span-5 mb-16 lg:mb-0">
              <span className="text-[#3DD6E8] text-xs tracking-[0.3em] uppercase">( Prenota )</span>
              <h2 className="section-title text-section font-display font-semibold mt-4">
                Prenota la tua<br/>
                <span className="italic text-[#9B7FD1]">visita</span>
              </h2>
              <p className="fade-reveal text-[#6B6B7B] text-lg leading-relaxed mt-8 max-w-md">
                Compila il form e ti ricontatteremo per confermare l'appuntamento. In alternativa, chiamaci direttamente.
              </p>

              <div className="fade-reveal mt-12 space-y-6">
                <a
                  href="tel:+393757250162"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 border border-[#9B7FD1] flex items-center justify-center group-hover:bg-[#9B7FD1] transition-colors">
                    <svg className="w-5 h-5 text-[#9B7FD1] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-[#6B6B7B] mb-1">Chiama ora</p>
                    <p className="text-xl font-display text-[#9B7FD1]">+39 375 725 0162</p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/studio.patroni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 border border-[#9B7FD1] flex items-center justify-center group-hover:bg-[#9B7FD1] transition-colors">
                    <svg className="w-5 h-5 text-[#9B7FD1] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-[#6B6B7B] mb-1">Scrivici su</p>
                    <p className="text-xl font-display">Facebook</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-6 lg:col-start-7">
              <form className="fade-reveal bg-white p-8 lg:p-12 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#6B6B7B] mb-3">
                      Nome *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-4 border border-[#0D0B10]/10 bg-transparent focus:border-[#9B7FD1] focus:outline-none transition-colors text-[#0D0B10]"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#6B6B7B] mb-3">
                      Cognome *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-4 border border-[#0D0B10]/10 bg-transparent focus:border-[#9B7FD1] focus:outline-none transition-colors text-[#0D0B10]"
                      placeholder="Il tuo cognome"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#6B6B7B] mb-3">
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-4 border border-[#0D0B10]/10 bg-transparent focus:border-[#9B7FD1] focus:outline-none transition-colors text-[#0D0B10]"
                      placeholder="+39 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#6B6B7B] mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-4 border border-[#0D0B10]/10 bg-transparent focus:border-[#9B7FD1] focus:outline-none transition-colors text-[#0D0B10]"
                      placeholder="email@esempio.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs tracking-widest uppercase text-[#6B6B7B] mb-3">
                    Servizio richiesto
                  </label>
                  <select
                    className="w-full px-4 py-4 border border-[#0D0B10]/10 bg-transparent focus:border-[#9B7FD1] focus:outline-none transition-colors text-[#0D0B10] appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239B7FD1'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
                  >
                    <option value="">Seleziona un servizio</option>
                    <option value="visita">Prima visita</option>
                    <option value="igiene">Igiene dentale</option>
                    <option value="ortodonzia">Ortodonzia</option>
                    <option value="invisalign">Invisalign</option>
                    <option value="carie">Cura carie</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label className="block text-xs tracking-widest uppercase text-[#6B6B7B] mb-3">
                    Messaggio
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-4 border border-[#0D0B10]/10 bg-transparent focus:border-[#9B7FD1] focus:outline-none transition-colors text-[#0D0B10] resize-none"
                    placeholder="Descrivi brevemente il motivo della visita o eventuali richieste particolari..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 gradient-bg text-white text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity"
                >
                  Richiedi appuntamento
                </button>

                <p className="text-xs text-[#6B6B7B] mt-6 text-center">
                  Ti ricontatteremo entro 24 ore per confermare l'appuntamento.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-[#0D0B10]/10">
        <div className="px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <img src={logo} alt="Studio Dentistico Patroni" title="Studio Dentistico Dott.ssa Fausta Patroni" className="h-10 opacity-50" loading="lazy" width="40" height="40" />
            <div className="flex flex-wrap gap-8">
              {['Servizi', 'Studio', 'Galleria', 'Contatti', 'Prenota'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-[#6B6B7B] hover:text-[#9B7FD1] transition-colors"
                >
                  {item}
                </a>
              ))}
              <Link
                to="/privacy-policy"
                className="text-sm text-[#6B6B7B] hover:text-[#9B7FD1] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookie-policy"
                className="text-sm text-[#6B6B7B] hover:text-[#9B7FD1] transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
            <p className="text-sm text-[#6B6B7B]">
              © {new Date().getFullYear()} Studio Patroni
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
