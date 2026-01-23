// Dati centralizzati dello Studio Dentistico
// Modifica questi valori per aggiornare tutte le pagine del sito

export const siteData = {
  // Informazioni generali
  siteName: 'Studio Dentistico Dott.ssa Fausta Patroni',
  siteNameShort: 'Studio Patroni',
  siteUrl: 'https://www.studiopatroni.it',

  // Titolare
  titolare: {
    nome: 'Dott.ssa Fausta Patroni',
    nomeCompleto: 'Studio Dentistico Dott.ssa Fausta Patroni',
  },

  // Contatti
  contatti: {
    telefono: '+39 375 725 0162',
    telefonoLink: '+393757250162',
    email: 'info@studiopatroni.it',
    facebook: 'https://www.facebook.com/studio.patroni/',
    facebookHandle: '@studio.patroni',
  },

  // Indirizzo
  indirizzo: {
    via: 'Viale De Gasperi, 23',
    cap: '25047',
    citta: 'Darfo Boario Terme',
    provincia: 'BS',
    regione: 'Lombardia',
    nazione: 'Italia',
    completo: 'Viale De Gasperi, 23 - 25047 Darfo Boario Terme (BS)',
  },

  // Coordinate geografiche
  geo: {
    latitude: 45.89410,
    longitude: 10.19122,
  },

  // Orari di apertura
  orariApertura: [
    { giorno: 'Lunedì', orario: '14:00–19:00', aperto: true },
    { giorno: 'Martedì', orario: '09:00–13:00', aperto: true },
    { giorno: 'Mercoledì', orario: '14:00–19:00', aperto: true },
    { giorno: 'Giovedì', orario: 'Chiuso', aperto: false },
    { giorno: 'Venerdì', orario: '09:00–19:00', aperto: true },
    { giorno: 'Sabato', orario: '09:00–13:00', aperto: true },
    { giorno: 'Domenica', orario: 'Chiuso', aperto: false },
  ],

  // Schema.org orari formato specifico
  orariSchemaOrg: [
    'Mo 14:00-19:00',
    'Tu 09:00-13:00',
    'We 14:00-19:00',
    'Fr 09:00-19:00',
    'Sa 09:00-13:00',
  ],

  // Servizi offerti
  servizi: [
    'Visite odontoiatriche',
    'Ortodonzia',
    'Igiene dentale',
    'Invisalign',
    'Cura carie',
    'Prevenzione dentale',
  ],

  // P.IVA (da compilare)
  partitaIva: '', // Inserire P.IVA quando disponibile

  // Ultimo aggiornamento policy
  dataAggiornamentoPolicy: '23/01/2026',
}

export default siteData
