"use strict";

/* ---------- DATOS OFICIALES DEL FESTIVAL ---------- */
const DIAS = [
  { id: "d1", label: "Día 1", sub: "Jueves 26 Abr" },
  { id: "d2", label: "Día 2", sub: "Viernes 27 Abr" },
  { id: "d3", label: "Día 3", sub: "Sábado 28 Abr" },
  { id: "d4", label: "Día 4", sub: "Domingo 29 Abr" },
];

const TIPOS = {
  rey: "Rey Vallenato",
  final: "Grandes Finales",
  concierto: "Concierto Estelar"
};

const EVENTOS = [
  {
    id: "ev-1",
    dia: "d1",
    hora: "09:00",
    tipo: "rey",
    titulo: "Primera Ronda Acordeoneros Profesionales",
    lugar: "Plaza Alfonso López",
    detalle: "Los maestros del acordeón interpretan los aires de Paseo y Merengue ante el honorable jurado calificador bajo el tradicional palo de mango."
  },
  {
    id: "ev-2",
    dia: "d1",
    hora: "15:00",
    tipo: "final",
    titulo: "Gran Desfile de Piloneras Mayores",
    lugar: "Entrada Av. Simón Bolívar",
    detalle: "Apertura oficial del festival con más de 120 comparsas tradicionales bailando el pilón vallenato en un espectáculo de polleras y flores."
  },
  {
    id: "ev-3",
    dia: "d1",
    hora: "20:00",
    tipo: "concierto",
    titulo: "Ceremonia Inaugural & Homenaje a Juglares",
    lugar: "Parque de la Leyenda Vallenata",
    detalle: "Apertura solemne con sinfónica folclórica, homenaje a los reyes consagrados y concierto de agrupaciones de gala."
  },
  {
    id: "ev-4",
    dia: "d2",
    hora: "10:00",
    tipo: "rey",
    titulo: "Segunda Ronda: Aires de Puya y Son",
    lugar: "Plaza Alfonso López",
    detalle: "La prueba más técnica y exigente: velocidad vertiginosa en la puya y melancolía nostálgica en el son para definir semifinalistas."
  },
  {
    id: "ev-5",
    dia: "d2",
    hora: "16:00",
    tipo: "final",
    titulo: "Semifinal Canción Inédita y Piqueria",
    lugar: "Tarima Francisco el Hombre",
    detalle: "Duelos verbales en verso libre y presentación de composiciones poéticas inéditas buscando cupo a la gran noche final."
  },
  {
    id: "ev-6",
    dia: "d2",
    hora: "21:00",
    tipo: "concierto",
    titulo: "Noche de Oro: Clásicos del Vallenato",
    lugar: "Parque de la Leyenda Vallenata",
    detalle: "Concierto estelar con las leyendas vivas de la Dinastía Zuleta, Hermanos López y voces contemporáneas aclamadas."
  },
  {
    id: "ev-7",
    dia: "d3",
    hora: "11:00",
    tipo: "rey",
    titulo: "Semifinal Rey Vallenato Profesional",
    lugar: "Centro Recreacional La Pedregosa",
    detalle: "Solo 15 acordeoneros se disputan los 5 cupos definitivos para la tarima consagratoria."
  },
  {
    id: "ev-8",
    dia: "d3",
    hora: "17:00",
    tipo: "final",
    titulo: "Gran Final de Piqueria y Versos",
    lugar: "Plaza Alfonso López",
    detalle: "Los cuatro mejores piqueros improvisadores de Colombia compiten por la corona de Rey de la Piqueria con versos de cuatro palabras y décimas."
  },
  {
    id: "ev-9",
    dia: "d3",
    hora: "21:30",
    tipo: "concierto",
    titulo: "Súper Concierto de Estrellas Internacionales",
    lugar: "Parque de la Leyenda Vallenata",
    detalle: "Noche monumental con artistas vallenatos de primer nivel e invitados caribeños de renombre mundial."
  },
  {
    id: "ev-10",
    dia: "d4",
    hora: "14:00",
    tipo: "final",
    titulo: "Gran Final de Canción Inédita",
    lugar: "Parque de la Leyenda Vallenata",
    detalle: "Las 5 canciones seleccionadas se presentan ante 25.000 espectadores para elegir el nuevo himno de la provincia."
  },
  {
    id: "ev-11",
    dia: "d4",
    hora: "19:00",
    tipo: "rey",
    titulo: "La Gran Final: Coronación del Rey Vallenato",
    lugar: "Tarima 'Colacho Mendoza'",
    detalle: "El clímax del festival: los 5 finalistas tocan paseo, merengue, son y puya. Un nuevo Rey es coronado ante el júbilo de toda Colombia."
  },
  {
    id: "ev-12",
    dia: "d4",
    hora: "23:00",
    tipo: "concierto",
    titulo: "Cierre Folclórico & Serenata al Nuevo Rey",
    lugar: "Parque de la Leyenda Vallenata",
    detalle: "Gran fiesta de clausura con fuegos artificiales, acordeones al unísono y celebración popular hasta el amanecer."
  }
];

/* Datos de los 4 Aires Vallenatos */
const AIRES_DATA = {
  paseo: {
    title: "El Paseo: La Voz del Juglar",
    metric: "Compás: 4/4 ó 2/4",
    speed: "Tempo Moderado (100 - 130 BPM)",
    desc: "Es el aire más popular y difundido de la música vallenata. Su cadencia elegante permite narrar crónicas de amor, historias de la provincia y versos sentidos. Con él los viejos juglares llevaban las noticias de pueblo en pueblo a lomo de mula.",
    song: '"La Gota Fría" de Emiliano Zuleta / "La Casa en el Aire" de Rafael Escalona',
    quote: '"El paseo vallenato es como una carta íntima escrita con las notas de un acordeón que jamás se borra."',
    author: "— Tradición Oral de Valledupar",
    bpm: 110,
    rhythm: "paseo"
  },
  merengue: {
    title: "El Merengue: Alegría de Sabana y Campo",
    metric: "Compás: 6/8",
    speed: "Tempo Alegre (135 - 160 BPM)",
    desc: "De ritmo campesino y festivo, el merengue vallenato se caracteriza por su acentuación ternaria y el repique brillante de la caja. En este aire las letras reflejan jocosidad, picardía y las faenas cotidianas del hombre caribeño.",
    song: '"El Muchacho Alegre" / "La Brasilera" de Rafael Escalona',
    quote: '"En el merengue la caja vallenata no sólo suena, sino que conversa con el corazón del bailador."',
    author: "— Decires de la Provincia del Cesar",
    bpm: 145,
    rhythm: "merengue"
  },
  puya: {
    title: "La Puya: Virtuosismo y Fuego del Fuelle",
    metric: "Compás: 2/4 ó 6/8 Rápido",
    speed: "Tempo Muy Rápido (165 - 190 BPM)",
    desc: "El aire más vertiginoso y complejo del certamen. En la puya, el acordeonero demuestra la máxima agilidad en sus dedos, combinada con el repique veloz de la guacharaca y los golpes secos de la caja. Exige resistencia física y maestría pura.",
    song: '"La Puya del Rey" / "Cuando el Tigre está en la Cueva"',
    quote: '"Quien corona la puya en la Plaza Alfonso López con limpieza y brillo, ya tiene media corona en su cabeza."',
    author: "— Sentencia de los Jurados Calificadores",
    bpm: 175,
    rhythm: "puya"
  },
  son: {
    title: "El Son: Nostalgia y Melancolía Honda",
    metric: "Compás: 2/4 Lento",
    speed: "Tempo Lento y Marcado (65 - 85 BPM)",
    desc: "El aire más solemne y emotivo. El son se ejecuta con cadencia pausada, donde los bajos del acordeón son los protagonistas absolutos llevando una marcha solemne que conmueve el alma. Es el llanto del juglar ante la partida o el dolor.",
    song: '"Alicia Adorada" de Juancho Polo Valencia / "Altos del Rosario" de Alejo Durán',
    quote: '"El son es el lamento dulce del sabanero; en cada nota baja parece que el acordeón suspirara de dolor."',
    author: "— Gabriel García Márquez",
    bpm: 75,
    rhythm: "son"
  }
};

/* ---------- UTILIDADES DEL DOM ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ---------- GESTIÓN DE AGENDA / FAVORITOS (localStorage) ---------- */
const AGENDA_KEY = "vallenato_agenda_favs";

function getFavorites() {
  try {
    const raw = localStorage.getItem(AGENDA_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveFavorites(favs) {
  try {
    localStorage.setItem(AGENDA_KEY, JSON.stringify(favs));
  } catch (e) {
    // Silencioso en caso de restricciones de almacenamiento
  }
}

function updateAgendaBadge() {
  const favs = getFavorites();
  const countBadge = $("#agendaCount");
  if (countBadge) {
    countBadge.textContent = favs.length;
  }
}

/* ---------- NAVEGACIÓN Y HEADER ---------- */
function initNav() {
  const header = $("#header");
  const toggle = $("#navToggle");
  const menu = $("#navMenu");
  const links = $$(".nav__menu ul li a");

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    menu.classList.toggle("is-open", open);
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  links.forEach((a) => {
    a.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      setOpen(false);
    }
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 30);
    const backToTop = $("#backToTop");
    if (backToTop) {
      backToTop.classList.toggle("is-visible", window.scrollY > 350);
    }
  }, { passive: true });

  const backToTop = $("#backToTop");
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Active section observer
  const sections = $$("main section[id]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) => {
          const href = l.getAttribute("href");
          l.classList.toggle("is-active", href === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-30% 0px -60% 0px" });

  sections.forEach((sec) => observer.observe(sec));
}

/* ---------- CUENTA REGRESIVA EN VIVO ---------- */
function initCountdown() {
  // Próximo festival: 26 de Abril del año correspondiente
  const now = new Date();
  let targetYear = now.getFullYear();
  let targetDate = new Date(targetYear, 3, 26, 9, 0, 0); // 26 de Abril a las 9 AM

  if (now > targetDate) {
    targetDate = new Date(targetYear + 1, 3, 26, 9, 0, 0);
  }

  const daysEl = $("#cdDays");
  const hoursEl = $("#cdHours");
  const minsEl = $("#cdMinutes");
  const secsEl = $("#cdSeconds");

  function update() {
    const currentTime = new Date();
    const diff = targetDate - currentTime;

    if (diff <= 0) {
      if (daysEl) daysEl.textContent = "00";
      if (hoursEl) hoursEl.textContent = "00";
      if (minsEl) minsEl.textContent = "00";
      if (secsEl) secsEl.textContent = "00";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    if (daysEl) daysEl.textContent = String(d).padStart(2, "0");
    if (hoursEl) hoursEl.textContent = String(h).padStart(2, "0");
    if (minsEl) minsEl.textContent = String(m).padStart(2, "0");
    if (secsEl) secsEl.textContent = String(s).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

/* ---------- SIMULADOR RÍTMICO CON WEB AUDIO API ---------- */
let audioCtx = null;
let audioTimer = null;
let isPlayingAudio = false;

function initAiresSection() {
  const tabs = $$(".aire-tab");
  const titleEl = $("#aireTitle");
  const metricEl = $("#aireMetric");
  const speedEl = $("#aireSpeed");
  const descEl = $("#aireDesc");
  const songEl = $("#aireSong");
  const quoteEl = $("#aireQuote");
  const authorEl = $("#aireAuthor");
  const playBtn = $("#playAireSoundBtn");
  const soundBtnText = $("#soundBtnText");
  const soundBtnIcon = $("#soundBtnIcon");
  const soundWaves = $("#soundWaves");

  let currentAireKey = "paseo";

  function setAire(key) {
    const data = AIRES_DATA[key];
    if (!data) return;

    currentAireKey = key;
    tabs.forEach((t) => {
      const active = t.dataset.aire === key;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
    });

    titleEl.textContent = data.title;
    metricEl.textContent = data.metric;
    speedEl.textContent = data.speed;
    descEl.textContent = data.desc;
    songEl.textContent = data.song;
    quoteEl.textContent = data.quote;
    authorEl.textContent = data.author;

    if (isPlayingAudio) {
      stopRhythm();
      startRhythm(data);
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setAire(tab.dataset.aire);
    });
  });

  // Generador de audio de simulación percusiva con Web Audio
  function startRhythm(data) {
    try {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
      }
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      isPlayingAudio = true;
      soundWaves.classList.add("is-playing");
      soundBtnIcon.textContent = "⏹";
      soundBtnText.textContent = "Detener Simulación";

      const bpm = data.bpm || 110;
      const intervalMs = (60 / bpm) * 1000 / 2;
      let step = 0;

      // Sonido percusivo de caja y fuelle sintetizado
      function playBeat() {
        if (!isPlayingAudio || !audioCtx) return;

        const now = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        // Golpe de caja vallenata (frecuencias cálidas de parche de cuero)
        const isDownbeat = step % 4 === 0;
        const isUpbeat = step % 2 === 1;

        osc.type = isDownbeat ? "triangle" : "sine";
        osc.frequency.setValueAtTime(isDownbeat ? 140 : (isUpbeat ? 280 : 200), now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.12);

        gain.gain.setValueAtTime(isDownbeat ? 0.35 : 0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(now);
        osc.stop(now + 0.15);

        // Armónico simulado de acordeón en cada compás
        if (isDownbeat) {
          const chordOsc = audioCtx.createOscillator();
          const chordGain = audioCtx.createGain();
          chordOsc.type = "sawtooth";
          chordOsc.frequency.setValueAtTime(440, now); // Nota La
          chordGain.gain.setValueAtTime(0.04, now);
          chordGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

          chordOsc.connect(chordGain);
          chordGain.connect(audioCtx.destination);
          chordOsc.start(now);
          chordOsc.stop(now + 0.32);
        }

        step++;
        audioTimer = setTimeout(playBeat, intervalMs);
      }

      playBeat();
    } catch (err) {
      console.warn("Web Audio no disponible", err);
    }
  }

  function stopRhythm() {
    isPlayingAudio = false;
    if (audioTimer) clearTimeout(audioTimer);
    if (soundWaves) soundWaves.classList.remove("is-playing");
    if (soundBtnIcon) soundBtnIcon.textContent = "▶";
    if (soundBtnText) soundBtnText.textContent = "Escuchar Muestra Rítmica";
  }

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      if (isPlayingAudio) {
        stopRhythm();
      } else {
        startRhythm(AIRES_DATA[currentAireKey]);
      }
    });
  }
}

/* ---------- FILTRO DE CATEGORÍAS ---------- */
function initCategoryFilter() {
  const chips = $$("#catFilters .chip");
  const cards = $$("#catGrid .card");

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const filter = chip.dataset.filter;
      chips.forEach((c) => c.classList.toggle("is-active", c === chip));

      cards.forEach((card) => {
        const cats = card.dataset.cat.split(" ");
        const show = filter === "todas" || cats.includes(filter);
        card.classList.toggle("is-hidden", !show);
      });
    });
  });
}

/* ---------- PROGRAMACIÓN: PESTAÑAS, FILTRO, BUSCADOR & FAVORITOS ---------- */
function initSchedule() {
  const tabsWrap = $("#dayTabs");
  const list = $("#eventList");
  const typeChips = $$("#typeFilters .chip");
  const searchInput = $("#eventSearchInput");

  const state = {
    dia: DIAS[0].id,
    tipo: "todos",
    query: ""
  };

  // Crear pestañas de días
  DIAS.forEach((d, i) => {
    const btn = document.createElement("button");
    btn.className = "tab";
    btn.role = "tab";
    btn.id = `tab-${d.id}`;
    btn.setAttribute("aria-selected", String(i === 0));
    btn.dataset.dia = d.id;

    const strong = document.createElement("strong");
    strong.textContent = d.label;
    const span = document.createElement("span");
    span.textContent = d.sub;

    btn.append(strong, span);
    tabsWrap.append(btn);
  });

  function render() {
    list.innerHTML = "";
    const favorites = getFavorites();

    const filtered = EVENTOS.filter((ev) => {
      const matchDay = ev.dia === state.dia;
      const matchTipo = state.tipo === "todos" || ev.tipo === state.tipo;
      const matchQuery = state.query === "" ||
        ev.titulo.toLowerCase().includes(state.query) ||
        ev.lugar.toLowerCase().includes(state.query) ||
        ev.detalle.toLowerCase().includes(state.query);

      return matchDay && matchTipo && matchQuery;
    });

    if (filtered.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty";
      empty.textContent = "No se encontraron eventos con los filtros seleccionados para este día.";
      list.append(empty);
      return;
    }

    filtered.forEach((ev, idx) => {
      const isFav = favorites.includes(ev.id);
      const article = document.createElement("article");
      article.className = "event";
      article.id = `ev-card-${ev.id}`;

      const row = document.createElement("div");
      row.className = "event__row";

      // Hora
      const timeSpan = document.createElement("span");
      timeSpan.className = "event__time";
      timeSpan.textContent = ev.hora;

      // Info
      const infoDiv = document.createElement("div");
      infoDiv.className = "event__info";

      const titleEl = document.createElement("h4");
      titleEl.className = "event__title";
      titleEl.textContent = ev.titulo;

      const metaDiv = document.createElement("div");
      metaDiv.className = "event__meta";

      const tagSpan = document.createElement("span");
      tagSpan.className = "event__meta-tag";
      tagSpan.textContent = TIPOS[ev.tipo] || ev.tipo;

      const placeSpan = document.createElement("span");
      placeSpan.textContent = `📍 ${ev.lugar}`;

      metaDiv.append(tagSpan, placeSpan);
      infoDiv.append(titleEl, metaDiv);

      // Acciones (Favorito + Toggle Acordeón)
      const actionsDiv = document.createElement("div");
      actionsDiv.className = "event__actions";

      // Botón Favorito
      const favBtn = document.createElement("button");
      favBtn.className = `event__fav-btn ${isFav ? "is-fav" : ""}`;
      favBtn.setAttribute("aria-label", isFav ? "Quitar de mi agenda" : "Guardar en mi agenda");
      favBtn.innerHTML = isFav ? "★" : "☆";

      favBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFavorite(ev.id);
        render();
      });

      // Botón Desplegable
      const expandBtn = document.createElement("button");
      expandBtn.className = "event__btn";
      expandBtn.setAttribute("aria-expanded", "false");
      expandBtn.setAttribute("aria-label", "Ver detalles del evento");
      const icon = document.createElement("span");
      icon.className = "event__icon";
      icon.setAttribute("aria-hidden", "true");
      expandBtn.append(icon);

      actionsDiv.append(favBtn, expandBtn);

      row.append(timeSpan, infoDiv, actionsDiv);

      // Panel descriptivo
      const panel = document.createElement("div");
      panel.className = "event__panel";
      const pContent = document.createElement("div");
      pContent.className = "event__panel-content";
      pContent.textContent = ev.detalle;
      panel.append(pContent);

      article.append(row, panel);

      // Toggle click
      const toggleEvent = () => {
        const isOpen = article.classList.contains("is-open");
        $$(".event.is-open", list).forEach((other) => {
          if (other !== article) {
            other.classList.remove("is-open");
            $(".event__btn", other).setAttribute("aria-expanded", "false");
            $(".event__panel", other).style.maxHeight = null;
          }
        });

        if (!isOpen) {
          article.classList.add("is-open");
          expandBtn.setAttribute("aria-expanded", "true");
          panel.style.maxHeight = `${panel.scrollHeight}px`;
        } else {
          article.classList.remove("is-open");
          expandBtn.setAttribute("aria-expanded", "false");
          panel.style.maxHeight = null;
        }
      };

      expandBtn.addEventListener("click", toggleEvent);
      row.addEventListener("click", (e) => {
        if (!e.target.closest(".event__fav-btn")) {
          toggleEvent();
        }
      });

      list.append(article);
    });
  }

  function toggleFavorite(id) {
    let favs = getFavorites();
    if (favs.includes(id)) {
      favs = favs.filter((f) => f !== id);
    } else {
      favs.push(id);
    }
    saveFavorites(favs);
    updateAgendaBadge();
  }

  // Cambio de pestaña de días
  tabsWrap.addEventListener("click", (e) => {
    const tab = e.target.closest(".tab");
    if (!tab) return;
    state.dia = tab.dataset.dia;
    $$(".tab", tabsWrap).forEach((t) => {
      t.setAttribute("aria-selected", String(t === tab));
    });
    render();
  });

  // Filtro por tipo
  typeChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      state.tipo = chip.dataset.type;
      typeChips.forEach((c) => c.classList.toggle("is-active", c === chip));
      render();
    });
  });

  // Búsqueda en vivo
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.query = e.target.value.trim().toLowerCase();
      render();
    });
  }

  render();
}

/* ---------- MODAL: INICIAR SESIÓN ---------- */
function initLoginModal() {
  const modal = $("#loginModal");
  const openBtn = $("#loginBtn");
  const closeBtn = $("#loginClose");
  const overlay = $("#loginOverlay");
  const form = $("#loginForm");
  const emailInput = $("#loginEmail");
  const passInput = $("#loginPassword");
  const togglePassBtn = $("#togglePasswordBtn");
  const loginMsg = $("#loginMsg");
  const loginBtnText = $("#loginBtnText");
  const googleBtn = $("#googleLoginBtn");

  function openLogin() {
    modal.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
    loginMsg.textContent = "";
    if (emailInput) emailInput.focus();
  }

  function closeLogin() {
    modal.setAttribute("hidden", "");
    document.body.style.overflow = "";
  }

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      if (openBtn.classList.contains("is-logged-in")) {
        if (confirm("¿Deseas cerrar tu sesión?")) {
          openBtn.classList.remove("is-logged-in");
          if (loginBtnText) loginBtnText.textContent = "Iniciar Sesión";
          localStorage.removeItem("vallenato_user");
        }
      } else {
        openLogin();
      }
    });
  }

  if (closeBtn) closeBtn.addEventListener("click", closeLogin);
  if (overlay) overlay.addEventListener("click", closeLogin);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hasAttribute("hidden")) {
      closeLogin();
    }
  });

  if (togglePassBtn && passInput) {
    togglePassBtn.addEventListener("click", () => {
      const isPassword = passInput.type === "password";
      passInput.type = isPassword ? "text" : "password";
      togglePassBtn.textContent = isPassword ? "🙈" : "👁";
      togglePassBtn.setAttribute("aria-label", isPassword ? "Ocultar contraseña" : "Mostrar contraseña");
    });
  }

  function setUserLoggedIn(userName) {
    loginMsg.className = "login-msg ok";
    loginMsg.textContent = `¡Bienvenido(a), ${userName}! Has iniciado sesión.`;
    if (openBtn) {
      openBtn.classList.add("is-logged-in");
      if (loginBtnText) loginBtnText.textContent = `Hola, ${userName}`;
    }
    localStorage.setItem("vallenato_user", userName);
    setTimeout(closeLogin, 1200);
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const pass = passInput.value;

      if (!email || !pass) {
        loginMsg.className = "login-msg err";
        loginMsg.textContent = "Por favor ingresa tu correo y contraseña.";
        return;
      }

      if (pass.length < 4) {
        loginMsg.className = "login-msg err";
        loginMsg.textContent = "La contraseña debe tener al menos 4 caracteres.";
        return;
      }

      const name = email.split("@")[0];
      const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
      setUserLoggedIn(capitalized);
    });
  }

  if (googleBtn) {
    googleBtn.addEventListener("click", () => {
      setUserLoggedIn("Visitante Vallenato");
    });
  }

  // Restaurar sesión si existía
  const savedUser = localStorage.getItem("vallenato_user");
  if (savedUser && openBtn && loginBtnText) {
    openBtn.classList.add("is-logged-in");
    loginBtnText.textContent = `Hola, ${savedUser}`;
  }
}


/* ---------- MODAL: LIGHTBOX DE GALERÍA ---------- */
function initGalleryLightbox() {
  const modal = $("#lightboxModal");
  const overlay = $("#lightboxOverlay");
  const closeBtn = $("#lightboxClose");
  const imgEl = $("#lightboxImg");
  const titleEl = $("#lightboxTitle");
  const subEl = $("#lightboxSub");
  const figures = $$("#galleryGrid figure");

  function openLightbox(fig) {
    const img = fig.querySelector("img");
    if (!img) return;

    imgEl.src = img.src;
    imgEl.alt = img.alt;
    titleEl.textContent = fig.dataset.title || "Festival Vallenato";
    subEl.textContent = fig.dataset.sub || "Valledupar, Cesar, Colombia";

    modal.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    modal.setAttribute("hidden", "");
    document.body.style.overflow = "";
  }

  figures.forEach((fig) => {
    fig.addEventListener("click", () => openLightbox(fig));
  });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (overlay) overlay.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hasAttribute("hidden")) {
      closeLightbox();
    }
  });
}

/* ---------- PREGUNTAS FRECUENTES (FAQ) ---------- */
function initFaq() {
  const items = $$(".faq-item");
  items.forEach((item) => {
    const btn = item.querySelector(".faq-btn");
    const panel = item.querySelector(".faq-panel");
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      items.forEach((other) => {
        other.classList.remove("is-open");
        other.querySelector(".faq-btn").setAttribute("aria-expanded", "false");
        other.querySelector(".faq-panel").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });
  });
}

/* ---------- BOLETÍN / NEWSLETTER ---------- */
function initNewsletter() {
  const form = $("#newsletter");
  const input = $("#email");
  const msg = $("#formMsg");
  const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;

  const show = (text, ok) => {
    msg.textContent = text;
    msg.className = `form-msg ${ok ? "ok" : "err"}`;
  };

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = input.value.trim().toLowerCase();
      if (!EMAIL_RE.test(val)) {
        return show("Por favor ingresa un correo electrónico válido.", false);
      }
      show("¡Suscripción exitosa! Recibirás primicias oficiales del festival.", true);
      form.reset();
    });
  }
}

/* ---------- RESPALDO DE IMÁGENES ---------- */
function initImageFallback() {
  const mark = (img) => {
    img.style.background = "linear-gradient(135deg, #f5efe4, #dfd7c7)";
    img.style.minHeight = "220px";
  };

  $$("img").forEach((img) => {
    if (img.complete && img.naturalWidth === 0) mark(img);
    img.addEventListener("error", () => mark(img));
  });
}

/* ---------- INICIALIZACIÓN GENERAL ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initNav();
  initCountdown();
  initAiresSection();
  initCategoryFilter();
  initSchedule();
  initLoginModal();
  initGalleryLightbox();
  initFaq();
  initNewsletter();
  initImageFallback();
});