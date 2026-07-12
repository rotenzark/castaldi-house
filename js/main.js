/* Castaldi House — i18n IT/EN, prenotazione diretta, intro, reveal */
(function () {
  'use strict';

  var WHATSAPP = '393921436077';
  var EMAIL = 'castaldihouse@gmail.com';

  /* ---------- i18n ---------- */

  var translations = {
    it: {
      skip: 'Salta al contenuto',
      menu: 'Menu',
      nav_rooms: 'Le camere',
      nav_house: 'La casa',
      nav_area: 'Porta Venezia',
      nav_where: 'Dove siamo',
      book_short: 'Prenota',
      hero_eyebrow: 'Guest house · Via Panfilo Castaldi 39 — Porta Venezia, Milano',
      hero_lead: 'Tre camere al primo piano di un palazzo dei primi del Novecento, con l’ascensore d’epoca di sotto e Corso Buenos Aires a due passi. Si prenota parlando con la casa: diretto, semplice, senza commissioni.',
      hp1: 'Bagno privato in ogni camera',
      hp2: 'Aria condizionata e Wi-Fi',
      hp3: 'Pulizia giornaliera',
      hero_proof: '277 recensioni su Booking.com — ma il prezzo migliore si fa qui.',
      bk_title: 'Verifica disponibilità',
      bk_sub: 'Richiesta diretta alla casa: risposta rapida, nessuna commissione.',
      bk_in: 'Arrivo',
      bk_out: 'Partenza',
      bk_guests: 'Ospiti',
      bk_guests_more: '4 o più',
      bk_room: 'Camera',
      bk_r0: 'Consigliatemi voi',
      bk_r1: 'Matrimoniale',
      bk_r2: 'Doppia — letti separati',
      bk_r3: 'Tripla',
      bk_err: 'Controlla le date: la partenza deve venire dopo l’arrivo.',
      bk_cta: 'Richiedi su WhatsApp',
      bk_alt: 'oppure richiedi via email',
      bk_notte: 'notte',
      bk_notti: 'notti',
      v1_t: 'Nessuna commissione',
      v1_p: 'Quello che risparmiamo di intermediari diventa il tuo prezzo migliore: chiedi e confronta.',
      v2_t: 'Parli con la casa',
      v2_p: 'Richieste vere a persone vere: culla, orari, consigli sul quartiere — senza call center.',
      v3_t: 'Arrivi concordati',
      v3_p: 'Basta avvisare del tuo orario di arrivo: al check-in ci si mette d’accordo da persone civili.',
      rooms_title: 'Le camere',
      rooms_sub: 'Tre stanze, tutte con bagno privato con doccia, aria condizionata, TV, frigobar e Wi-Fi.',
      c1_t: 'La Matrimoniale',
      c1_p: 'Letto matrimoniale, su richiesta anche uso singola: per chi viaggia in due o per chi vuole spazio.',
      c2_t: 'La Doppia',
      c2_p: 'Due letti separati, comoda per amici o colleghi — anche lei con formula uso singola.',
      c3_t: 'La Tripla',
      c3_p: 'Tre posti letto per famiglie o piccoli gruppi, nel silenzio del primo piano sul cortile.',
      d_bagno: 'Bagno privato',
      d_aria: 'Aria condizionata',
      d_wifi: 'Wi-Fi',
      d_frigo: 'Frigobar',
      d_tv: 'TV',
      d_pulizia: 'Pulizia giornaliera',
      pick: 'Scegli queste date →',
      rooms_note: 'Le fotografie delle camere arrivano col primo servizio fotografico: le targhette, intanto, tengono il posto.',
      house_title: 'Un primo piano dei primi del Novecento.',
      house_p1: 'Castaldi House sta al primo piano di un palazzo costruito agli inizi del ’900, in una delle vie più vive di Porta Venezia. Si sale con l’ascensore, si scende in strada e si è già in mezzo a Milano.',
      house_p2: 'La casa è curata ogni giorno — pulizia giornaliera, non a fine soggiorno — e gli animali di piccola taglia sono i benvenuti. Per l’arrivo basta una cortesia: avvisare del proprio orario, così c’è sempre qualcuno ad aprirvi.',
      hd1: 'Il palazzo, dei primi del Novecento',
      hd2: 'Piano, con ascensore',
      hd3: 'Camere, tutte con bagno privato',
      hd4: 'Animali di piccola taglia benvenuti',
      area_title: 'Fuori dal portone: Porta Venezia',
      area_sub: 'Il quartiere Liberty di Milano: facciate decorate, giardini e la via dello shopping più lunga d’Italia.',
      q1_t: 'Metro M1 Porta Venezia',
      q1_p: 'La linea rossa sotto casa: Duomo in tre fermate, e da lì tutta Milano.',
      q2_t: 'Corso Buenos Aires',
      q2_p: 'Un chilometro e mezzo di negozi: la via commerciale più lunga d’Italia comincia all’angolo.',
      q3_t: 'Giardini Indro Montanelli',
      q3_p: 'Il parco storico coi cedri e il Museo di Storia Naturale: la colazione al verde è servita.',
      q4_t: 'Il Liberty di via Malpighi',
      q4_p: 'Casa Galimberti e le facciate in ceramica: il quartiere è un museo a cielo aperto.',
      where_title: 'Dove siamo',
      metro: 'M1 Porta Venezia, due minuti a piedi',
      wa_cta: 'Scrivici su WhatsApp',
      maps: 'Apri in Google Maps',
      f_contacts: 'Contatti',
      f_where: 'Dove',
      f_book: 'Prenotazione diretta',
      f_line: 'Nessuna commissione: si parla con la casa.',
      aria_top: 'Castaldi House — torna su',
      aria_nav: 'Navigazione principale',
      wa_msg: 'Salve! Vorrei verificare la disponibilità di Castaldi House.',
      wa_arrivo: 'Arrivo',
      wa_partenza: 'Partenza',
      wa_ospiti: 'Ospiti',
      wa_camera: 'Camera',
      wa_fonte: '(richiesta dal sito)'
    },
    en: {
      skip: 'Skip to content',
      menu: 'Menu',
      nav_rooms: 'The rooms',
      nav_house: 'The house',
      nav_area: 'Porta Venezia',
      nav_where: 'Find us',
      book_short: 'Book',
      hero_eyebrow: 'Guest house · Via Panfilo Castaldi 39 — Porta Venezia, Milan',
      hero_lead: 'Three rooms on the first floor of an early-1900s building, with the vintage lift downstairs and Corso Buenos Aires around the corner. You book by talking to the house: direct, simple, commission-free.',
      hp1: 'Private bathroom in every room',
      hp2: 'Air conditioning & Wi-Fi',
      hp3: 'Daily housekeeping',
      hero_proof: '277 reviews on Booking.com — but the best rate lives here.',
      bk_title: 'Check availability',
      bk_sub: 'A direct request to the house: quick reply, no commission.',
      bk_in: 'Check-in',
      bk_out: 'Check-out',
      bk_guests: 'Guests',
      bk_guests_more: '4 or more',
      bk_room: 'Room',
      bk_r0: 'You recommend',
      bk_r1: 'Double bed',
      bk_r2: 'Twin — separate beds',
      bk_r3: 'Triple',
      bk_err: 'Check the dates: check-out must come after check-in.',
      bk_cta: 'Request on WhatsApp',
      bk_alt: 'or request by email',
      bk_notte: 'night',
      bk_notti: 'nights',
      v1_t: 'No commission',
      v1_p: 'What we save on middlemen becomes your best rate: ask and compare.',
      v2_t: 'You talk to the house',
      v2_p: 'Real requests to real people: a cot, arrival times, neighbourhood tips — no call centre.',
      v3_t: 'Arrivals arranged',
      v3_p: 'Just let us know your arrival time: check-in gets sorted between civilised people.',
      rooms_title: 'The rooms',
      rooms_sub: 'Three rooms, each with a private shower bathroom, air conditioning, TV, minibar and Wi-Fi.',
      c1_t: 'The Double',
      c1_p: 'A double bed, also available for single use: for two travellers, or one who likes space.',
      c2_t: 'The Twin',
      c2_p: 'Two separate beds, handy for friends or colleagues — single-use formula available here too.',
      c3_t: 'The Triple',
      c3_p: 'Three beds for families or small groups, in the quiet of the first floor on the courtyard.',
      d_bagno: 'Private bathroom',
      d_aria: 'Air conditioning',
      d_wifi: 'Wi-Fi',
      d_frigo: 'Minibar',
      d_tv: 'TV',
      d_pulizia: 'Daily housekeeping',
      pick: 'Pick these dates →',
      rooms_note: 'Room photographs arrive with the first photo shoot: the brass plates are keeping their seats warm.',
      house_title: 'A first floor from the early 1900s.',
      house_p1: 'Castaldi House sits on the first floor of a building from the early twentieth century, on one of Porta Venezia’s liveliest streets. Take the lift down, step outside, and you’re already in the middle of Milan.',
      house_p2: 'The house is looked after every day — daily housekeeping, not end-of-stay — and small pets are welcome. For your arrival, one courtesy: let us know your time, so someone is always there to open the door.',
      hd1: 'The building, from the early 1900s',
      hd2: 'Floor, with a lift',
      hd3: 'Rooms, all with private bathrooms',
      hd4: 'Small pets welcome',
      area_title: 'Outside the front door: Porta Venezia',
      area_sub: 'Milan’s Liberty district: decorated façades, gardens, and Italy’s longest shopping street.',
      q1_t: 'M1 Porta Venezia metro',
      q1_p: 'The red line at your doorstep: the Duomo in three stops, and all of Milan from there.',
      q2_t: 'Corso Buenos Aires',
      q2_p: 'A mile and a half of shops: Italy’s longest commercial street starts at the corner.',
      q3_t: 'Indro Montanelli Gardens',
      q3_p: 'The historic park with its cedars and the Natural History Museum: breakfast in the green, served.',
      q4_t: 'The Liberty of Via Malpighi',
      q4_p: 'Casa Galimberti and its ceramic façades: the neighbourhood is an open-air museum.',
      where_title: 'Find us',
      metro: 'M1 Porta Venezia, a two-minute walk',
      wa_cta: 'Message us on WhatsApp',
      maps: 'Open in Google Maps',
      f_contacts: 'Contact',
      f_where: 'Where',
      f_book: 'Direct booking',
      f_line: 'No commission: you talk to the house.',
      aria_top: 'Castaldi House — back to top',
      aria_nav: 'Main navigation',
      wa_msg: 'Hello! I would like to check availability at Castaldi House.',
      wa_arrivo: 'Check-in',
      wa_partenza: 'Check-out',
      wa_ospiti: 'Guests',
      wa_camera: 'Room',
      wa_fonte: '(request from the website)'
    }
  };

  var current = 'it';
  try {
    var saved = localStorage.getItem('castaldi-lang');
    if (saved === 'en' || saved === 'it') current = saved;
  } catch (e) { /* storage non disponibile: si resta in IT */ }

  function applyLang(lang) {
    var dict = translations[lang];
    if (!dict) return;
    current = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('castaldi-lang', lang); } catch (e) { /* ok */ }
    aggiornaNotti();
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  /* ---------- prenotazione diretta ---------- */

  var form = document.getElementById('prenota');
  var inEl = document.getElementById('bk-in');
  var outEl = document.getElementById('bk-out');
  var ospitiEl = document.getElementById('bk-ospiti');
  var cameraEl = document.getElementById('bk-camera');
  var nottiEl = document.getElementById('bk-notti');
  var erroreEl = document.getElementById('bk-errore');
  var emailEl = document.getElementById('bk-email');

  function oggiISO() {
    var d = new Date();
    var m = String(d.getMonth() + 1); if (m.length < 2) m = '0' + m;
    var g = String(d.getDate()); if (g.length < 2) g = '0' + g;
    return d.getFullYear() + '-' + m + '-' + g;
  }

  function notti() {
    if (!inEl.value || !outEl.value) return null;
    var a = new Date(inEl.value);
    var b = new Date(outEl.value);
    var n = Math.round((b - a) / 86400000);
    return n > 0 ? n : null;
  }

  function dataLeggibile(iso) {
    var p = iso.split('-');
    return p[2] + '/' + p[1] + '/' + p[0];
  }

  function aggiornaNotti() {
    if (!nottiEl) return;
    var n = notti();
    var dict = translations[current];
    nottiEl.textContent = n ? (n + ' ' + (n === 1 ? dict.bk_notte : dict.bk_notti) + ' · ' + dataLeggibile(inEl.value) + ' → ' + dataLeggibile(outEl.value)) : '';
    if (n) erroreEl.hidden = true;
    aggiornaEmail();
  }

  function testoRichiesta() {
    var dict = translations[current];
    var righe = [dict.wa_msg];
    if (inEl.value) righe.push(dict.wa_arrivo + ': ' + dataLeggibile(inEl.value));
    if (outEl.value) righe.push(dict.wa_partenza + ': ' + dataLeggibile(outEl.value));
    righe.push(dict.wa_ospiti + ': ' + ospitiEl.value);
    var cameraTesto = cameraEl.options[cameraEl.selectedIndex].textContent;
    righe.push(dict.wa_camera + ': ' + cameraTesto);
    righe.push(dict.wa_fonte);
    return righe.join('\n');
  }

  function aggiornaEmail() {
    if (!emailEl) return;
    var oggetto = 'Castaldi House — ' + (inEl.value ? dataLeggibile(inEl.value) : '') + (outEl.value ? ' > ' + dataLeggibile(outEl.value) : '');
    emailEl.href = 'mailto:' + EMAIL +
      '?subject=' + encodeURIComponent(oggetto) +
      '&body=' + encodeURIComponent(testoRichiesta());
  }

  if (form) {
    var minOggi = oggiISO();
    inEl.min = minOggi;
    outEl.min = minOggi;

    inEl.addEventListener('change', function () {
      if (inEl.value) outEl.min = inEl.value;
      aggiornaNotti();
    });
    outEl.addEventListener('change', aggiornaNotti);
    ospitiEl.addEventListener('change', aggiornaEmail);
    cameraEl.addEventListener('change', aggiornaEmail);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!notti()) {
        erroreEl.hidden = false;
        nottiEl.textContent = '';
        return;
      }
      erroreEl.hidden = true;
      var url = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(testoRichiesta());
      window.open(url, '_blank', 'noopener');
    });

    document.querySelectorAll('.camera-scegli').forEach(function (btn) {
      btn.addEventListener('click', function () {
        cameraEl.value = btn.getAttribute('data-camera');
        aggiornaEmail();
        document.getElementById('prenota').scrollIntoView({ block: 'center' });
        inEl.focus();
      });
    });

    aggiornaEmail();
  }

  if (current !== 'it') applyLang(current);

  /* ---------- intro "il check-in" ---------- */

  var intro = document.getElementById('intro');
  if (intro) {
    var introReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (introReduced) {
      intro.remove();
    } else {
      var introDone = false;
      var apreIntro = function () {
        intro.classList.add('intro--apre');
        document.documentElement.classList.add('intro-done');
      };
      var finishIntro = function () {
        if (introDone) return;
        introDone = true;
        clearTimeout(apreTimer);
        clearTimeout(endTimer);
        document.documentElement.classList.add('intro-done');
        document.body.classList.remove('intro-lock');
        intro.remove();
        window.removeEventListener('pointerdown', finishIntro, true);
        window.removeEventListener('keydown', finishIntro, true);
      };
      document.documentElement.classList.add('has-intro');
      document.body.classList.add('intro-lock');
      var apreTimer = setTimeout(apreIntro, 2100);
      var endTimer = setTimeout(finishIntro, 3200);
      window.addEventListener('pointerdown', finishIntro, true);
      window.addEventListener('keydown', finishIntro, true);
    }
  }

  /* ---------- copyright dinamico ---------- */

  var nowYear = new Date().getFullYear();
  document.querySelectorAll('[data-current-year]').forEach(function (el) {
    el.textContent = String(nowYear);
  });

  /* ---------- nav mobile ---------- */

  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav-menu a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- reveal on scroll ---------- */

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll('.vantaggio, .camera, .casa-grid > *, .tappa, .dove-grid > *, .section-head');
    targets.forEach(function (t) { t.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* ---------- rete di sicurezza: se IntersectionObserver non parte, mostra tutto ---------- */
  if ('IntersectionObserver' in window) {
    var ioVivo = false;
    var sentinella = new IntersectionObserver(function () { ioVivo = true; sentinella.disconnect(); });
    sentinella.observe(document.body);
    setTimeout(function () {
      if (!ioVivo) {
        document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
      }
    }, 1500);
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
