/* =========================================================
   EDIT YOUR INVITATION DETAILS HERE
   ========================================================= */
const CONFIG = {
  host: "Jaya Sri Uppalapati",
  hostShort: "Jaya Sri",
  hostTelugu: "జయ శ్రీ ఉప్పలపాటి",
  // Muhurtham, in the venue's local time: "YYYY-MM-DDTHH:MM"
  muhurtham: "2026-12-01T07:30",
  firstEvent: "Paalu Pongali",
  venueName: "Jaya Sri's New Home",
  address: "Pohlweg 83, Paderborn",
  // Optional: WhatsApp number for RSVPs with country code, digits only (e.g. "919876543210").
  // Leave empty and guests can pick who to send the reply to.
  whatsapp: "",
  rituals: [
    { time: "7:30 AM", icon: "🥛", en: "Paalu Pongali", te: "పాలు పొంగించడం", desc: "Milk is boiled until it overflows in the new kitchen — a wish for a home overflowing with abundance." },
    { time: "12:30 PM", icon: "🍃", en: "Vindu Bhojanam", te: "విందు భోజనం", desc: "A traditional Telugu feast served on banana leaves." }
  ]
};

/* =========================================================
   MENU
   ========================================================= */
const MENU = [
  {
    id: "welcome", icon: "🥥", en: "Welcome Drinks", te: "స్వాగత పానీయాలు",
    dishes: [
      { en: "Panakam", te: "పానకం", emoji: "🍯", desc: "Jaggery water with cardamom, pepper and dry ginger — the drink of every Telugu festival." },
      { en: "Majjiga", te: "మజ్జిగ", emoji: "🥛", desc: "Spiced buttermilk with curry leaves, ginger and green chilli." },
      { en: "Kobbari Neellu", te: "కొబ్బరి నీళ్ళు", emoji: "🥥", desc: "Fresh tender coconut water, straight from the shell." },
      { en: "Filter Coffee", te: "ఫిల్టర్ కాఫీ", emoji: "☕", desc: "Strong decoction, frothy milk, served in a steel davara-tumbler." }
    ]
  },
  {
    id: "tiffin", icon: "🫓", en: "Morning Tiffins", te: "అల్పాహారం",
    dishes: [
      { en: "Idli & Allam Chutney", te: "ఇడ్లీ, అల్లం పచ్చడి", emoji: "⚪", desc: "Soft steamed idlis with tangy-sweet ginger chutney and karam podi." },
      { en: "Pesarattu Upma", te: "పెసరట్టు ఉప్మా", emoji: "🫓", desc: "Green moong dosa wrapped around rava upma — the Andhra breakfast classic." },
      { en: "Garelu", te: "గారెలు", emoji: "🍩", desc: "Crispy urad dal vadas with coconut chutney." },
      { en: "Punugulu", te: "పునుగులు", emoji: "🟤", desc: "Bite-sized fried fritters from dosa batter, with peanut chutney." },
      { en: "Mysore Bajji", te: "మైసూర్ బజ్జీ", emoji: "🧆", desc: "Fluffy, golden fritters — crisp outside, soft inside." }
    ]
  },
  {
    id: "bhojanam", icon: "🍛", en: "Vindu Bhojanam", te: "మధ్యాహ్న భోజనం",
    dishes: [
      { en: "Pulihora", te: "పులిహోర", emoji: "🍋", desc: "Tamarind rice tempered with peanuts, curry leaves and a hint of jaggery." },
      { en: "Mudda Pappu & Neyyi", te: "ముద్దపప్పు, నెయ్యి", emoji: "🧈", desc: "Plain mashed toor dal with a generous spoon of ghee — first bite of the meal." },
      { en: "Gongura Pachadi", te: "గోంగూర పచ్చడి", emoji: "🌿", desc: "Tangy sorrel-leaf chutney, the pride of Andhra kitchens." },
      { en: "Gutti Vankaya Kura", te: "గుత్తి వంకాయ కూర", emoji: "🍆", desc: "Baby brinjals stuffed with a roasted peanut-sesame masala." },
      { en: "Bendakaya Vepudu", te: "బెండకాయ వేపుడు", emoji: "🥒", desc: "Crisp-fried okra with cashews and coconut." },
      { en: "Sambar", te: "సాంబారు", emoji: "🍲", desc: "Drumstick and vegetable sambar, slow-cooked with fresh powder." },
      { en: "Charu", te: "చారు", emoji: "🍅", desc: "Peppery tomato-tamarind rasam — thin, hot and soothing." },
      { en: "Perugu Annam", te: "పెరుగన్నం", emoji: "🍚", desc: "Cool curd rice to finish, the way every Telugu meal should end." },
      { en: "Avakaya", te: "ఆవకాయ", emoji: "🥭", desc: "Fiery raw-mango pickle in mustard and gingelly oil." },
      { en: "Appadalu & Vadiyalu", te: "అప్పడాలు, వడియాలు", emoji: "🥠", desc: "Crunchy papads and sun-dried fryums." }
    ]
  },
  {
    id: "sweets", icon: "🍬", en: "Sweets", te: "తీపి వంటకాలు",
    dishes: [
      { en: "Bobbatlu", te: "బొబ్బట్లు", emoji: "🫓", desc: "Chana dal and jaggery stuffed flatbread, dripping with ghee." },
      { en: "Pootharekulu", te: "పూతరేకులు", emoji: "📜", desc: "Paper-thin rice sheets folded with sugar, ghee and dry fruits from Atreyapuram." },
      { en: "Sunnundalu", te: "సున్నుండలు", emoji: "🟫", desc: "Roasted urad dal and jaggery laddus, rich with ghee." },
      { en: "Ariselu", te: "అరిసెలు", emoji: "🍪", desc: "Rice-flour and jaggery discs topped with sesame." },
      { en: "Paramannam", te: "పరమాన్నం", emoji: "🍮", desc: "Rice and milk payasam with jaggery, cashews and raisins." },
      { en: "Kakinada Kaja", te: "కాకినాడ కాజా", emoji: "🥐", desc: "Layered, syrup-soaked fried sweet, juicy in every bite." }
    ]
  },
  {
    id: "tamboolam", icon: "🌿", en: "Tamboolam", te: "తాంబూలం",
    dishes: [
      { en: "Meetha Kili", te: "మీఠా కిళ్ళీ", emoji: "🌿", desc: "Sweet betel-leaf paan with gulkand and coconut — the perfect finish." },
      { en: "Arati Pandu", te: "అరటి పండు", emoji: "🍌", desc: "Bananas with betel leaves, offered with the tamboolam." },
      { en: "Pasupu Kumkuma", te: "పసుపు కుంకుమ", emoji: "🔴", desc: "Turmeric and kumkum for the ladies as an auspicious return gift." }
    ]
  }
];

/* Items laid out on the banana leaf: x/y are % of the leaf, w is % of its width */
const LEAF = [
  { key: "Avakaya", shape: "pile", x: 13, y: 24, w: 4.6, color: "radial-gradient(circle at 40% 35%, #e85d2a, #9b1c0c)" },
  { key: "Gongura Pachadi", shape: "pile", x: 20.5, y: 20, w: 5, color: "radial-gradient(circle at 40% 35%, #3f5d24, #1b2d0e)" },
  { key: "Gutti Vankaya Kura", shape: "pile", x: 30, y: 21, w: 7, color: "radial-gradient(circle at 35% 35%, #8b4a6b, #4a1d33 60%, #7a3a12)" },
  { key: "Bendakaya Vepudu", shape: "pile", x: 40.5, y: 19, w: 7, color: "radial-gradient(circle at 40% 35%, #7fae3a, #3e6b16)" },
  { key: "Pulihora", shape: "pile", x: 52.5, y: 22, w: 9.5, color: "radial-gradient(circle at 40% 35%, #ffe066, #e0a800 70%, #b07b00)" },
  { key: "Mudda Pappu & Neyyi", shape: "pile", x: 64.5, y: 20, w: 6.5, color: "radial-gradient(circle at 40% 35%, #ffd84d, #e6a817)", ghee: true },
  { key: "Bobbatlu", shape: "disc", x: 12, y: 58, w: 11, color: "radial-gradient(circle, #f6b93b, #d98a12)" },
  { key: "Pootharekulu", shape: "roll", x: 24, y: 47, w: 6.5, color: "linear-gradient(90deg, #fffdf5, #f1e6c8)" },
  { key: "Sunnundalu", shape: "ball", x: 24, y: 72, w: 4.6, color: "radial-gradient(circle at 35% 30%, #c08a4f, #6b4220)" },
  { key: "Paramannam", shape: "cup", x: 34, y: 76, w: 7.2, color: "radial-gradient(circle, #fff1d0 40%, #e9c78b)" },
  { key: "Perugu Annam", shape: "rice", x: 50, y: 63, w: 18, color: "radial-gradient(circle at 40% 35%, #ffffff, #efe8da)", ghee: true },
  { key: "Garelu", shape: "vada", x: 65.5, y: 80, w: 7, color: "radial-gradient(circle, transparent 18%, #c9822e 20%, #a35f17 70%)" },
  { key: "Sambar", shape: "cup", x: 70, y: 55, w: 8, color: "radial-gradient(circle at 45% 40%, #e08a2c, #a2470f)" },
  { key: "Charu", shape: "cup", x: 78, y: 37, w: 6.8, color: "radial-gradient(circle at 45% 40%, #e2512a, #96210b)" },
  { key: "Majjiga", shape: "cup", x: 80, y: 74, w: 6.5, color: "radial-gradient(circle at 45% 40%, #ffffff, #e6eadf)" },
  { key: "Appadalu & Vadiyalu", shape: "disc", x: 89, y: 30, w: 11.5, color: "#f1dfb0" },
  { key: "Arati Pandu", shape: "banana", x: 89.5, y: 64, w: 11, color: "linear-gradient(180deg, #ffe45c, #e8b923)" }
];

/* =========================================================
   HELPERS
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const muhurtham = new Date(CONFIG.muhurtham);
const allDishes = Object.fromEntries(MENU.flatMap(c => c.dishes).map(d => [d.en, d]));

/* ---------- Bind config into the page ---------- */
function bindConfig() {
  const opts = (o) => muhurtham.toLocaleString("en-IN", o);
  const [hm, ampm] = opts({ hour: "numeric", minute: "2-digit", hour12: true }).split(/\s/);
  const values = {
    ...CONFIG,
    dateDay: opts({ day: "numeric" }),
    dateMonth: opts({ month: "long", year: "numeric" }),
    dateWeekday: opts({ weekday: "long" }),
    dateLong: opts({ weekday: "long", day: "numeric", month: "long", year: "numeric" }),
    timeText: hm,
    timeSuffix: (ampm || "").toUpperCase()
  };
  $$("[data-bind]").forEach(el => {
    const v = values[el.dataset.bind];
    if (v != null) el.textContent = v;
  });
  document.title = `Gruhapravesam · ${CONFIG.hostShort}`;
  $("#mapLink").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(CONFIG.address);
}

/* ---------- Toran of mango leaves and marigolds ---------- */
function buildTorans() {
  $$("[data-toran]").forEach(t => {
    const n = Math.ceil(window.innerWidth / 22) + 4;
    let html = "";
    for (let i = 0; i < n; i++) {
      const delay = (-Math.random() * 3.6).toFixed(2);
      html += i % 3 === 2
        ? `<span class="t-item t-flower" style="animation-delay:${delay}s"><svg><use href="#marigold"/></svg><svg><use href="#marigold"/></svg></span>`
        : `<svg class="t-item t-leaf" style="animation-delay:${delay}s"><use href="#leaf"/></svg>`;
    }
    t.innerHTML = html;
  });
  $$("[data-garland]").forEach(g => {
    const strand = Array.from({ length: 9 }, (_, i) =>
      `<svg style="filter:hue-rotate(${i % 2 ? -18 : 0}deg)"><use href="#marigold"/></svg>`).join("");
    g.innerHTML = `<div class="g-strand">${strand}</div><div class="g-strand">${strand}</div>`;
  });
}

/* ---------- Door opening ---------- */
function setupDoors() {
  const doors = $("#doors");
  const open = () => {
    if (doors.classList.contains("open")) return;
    doors.classList.add("open");
    document.body.classList.remove("locked");
    document.body.classList.add("opened");
    petalBurst(45);
    setTimeout(() => doors.remove(), 2600);
  };
  $("#openDoors").addEventListener("click", open);
  doors.addEventListener("click", (e) => { if (e.target === doors || e.target.closest(".door")) open(); });
}

/* ---------- Falling petals ---------- */
const PETAL_COLORS = ["#f59e0b", "#ffd23f", "#ea580c", "#c4161c", "#fffaf0", "#f97316"];
function petal() {
  const p = document.createElement("span");
  p.className = "petal";
  const size = 10 + Math.random() * 10;
  p.style.left = Math.random() * 100 + "vw";
  p.style.width = size + "px";
  p.style.height = size * 1.3 + "px";
  p.style.background = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
  p.style.animationDuration = 6 + Math.random() * 6 + "s";
  $("#petals").appendChild(p);
  p.addEventListener("animationend", () => p.remove());
}
function petalBurst(n) {
  if (reduceMotion) return;
  for (let i = 0; i < n; i++) setTimeout(petal, Math.random() * 1800);
}
function petalDrizzle() {
  if (reduceMotion) return;
  setInterval(() => { if (!document.hidden && $$(".petal").length < 18) petal(); }, 1400);
}

/* ---------- Countdown ---------- */
function setupCountdown() {
  const el = (k) => $(`[data-cd="${k}"]`);
  const pad = (n) => String(n).padStart(2, "0");
  const tick = () => {
    let diff = Math.max(0, muhurtham - new Date());
    const d = Math.floor(diff / 864e5); diff -= d * 864e5;
    const h = Math.floor(diff / 36e5); diff -= h * 36e5;
    const m = Math.floor(diff / 6e4); diff -= m * 6e4;
    const s = Math.floor(diff / 1e3);
    el("d").textContent = pad(d); el("h").textContent = pad(h);
    el("m").textContent = pad(m); el("s").textContent = pad(s);
  };
  tick();
  setInterval(tick, 1000);
}

/* ---------- Calendar (.ics) ---------- */
function setupCalendar() {
  $("#addCal").addEventListener("click", () => {
    const fmt = (d) => `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}T${String(d.getHours()).padStart(2, "0")}${String(d.getMinutes()).padStart(2, "0")}00`;
    const start = new Date(muhurtham.getTime() - 60 * 6e4);
    const end = new Date(muhurtham.getTime() + 6 * 36e5);
    const ics = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Gruhapravesam//EN",
      "BEGIN:VEVENT",
      `UID:gruhapravesam-${fmt(muhurtham)}@invite`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
      `DTSTART:${fmt(start)}`, `DTEND:${fmt(end)}`,
      `SUMMARY:${CONFIG.hostShort}'s Gruhapravesam`,
      `LOCATION:${CONFIG.address.replace(/,/g, "\\,")}`,
      `DESCRIPTION:House warming ceremony. Paalu pongali at ${muhurtham.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" })}. Followed by vindu bhojanam.`,
      "END:VEVENT", "END:VCALENDAR"
    ].join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    a.download = "gruhapravesam.ics";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });
}

/* ---------- Rituals ---------- */
function buildTimeline() {
  $("#timeline").innerHTML = CONFIG.rituals.map(r => `
    <li class="reveal">
      <span class="tl-icon" aria-hidden="true">${r.icon}</span>
      <div class="tl-time">${r.time}</div>
      <div class="tl-name">${r.en}<span class="te">${r.te}</span></div>
      <p class="tl-desc">${r.desc}</p>
    </li>`).join("");
}

/* ---------- Banana leaf ---------- */
function buildLeaf() {
  const wrap = $("#leafItems"), tip = $("#leafTip");
  wrap.innerHTML = LEAF.map((f, i) => {
    const dish = allDishes[f.key];
    let style = `left:${f.x}%;top:${f.y}%;width:calc(${f.w}% * var(--k, 1));`;
    let shape = f.shape;
    if (shape === "roll") style += "aspect-ratio:1/1.5;border-radius:6px;";
    else if (shape === "banana") style += "aspect-ratio:3/1;border-radius:50% 50% 50% 50% / 100% 100% 30% 30%;transform-origin:center;";
    else style += "aspect-ratio:1;";
    const blobStyle = `background:${f.color};` + (shape === "roll" ? "border-radius:6px;box-shadow:inset 0 0 0 2px #e8dcb8, 0 3px 6px rgba(0,0,0,.2);" : "") +
      (shape === "banana" ? "border-radius:inherit;box-shadow:inset 0 -4px 0 rgba(0,0,0,.12);" : "") +
      (shape === "vada" ? "box-shadow:inset -3px -4px 8px rgba(0,0,0,.25);" : "");
    return `<button type="button" class="food ${shape}" data-i="${i}" style="${style}" aria-label="${dish.en}">
      <span class="blob" style="${blobStyle}"></span>${f.ghee ? '<span class="ghee"></span>' : ""}
    </button>`;
  }).join("");

  const items = $$(".food", wrap);
  let tipTimer;
  items.forEach(btn => btn.addEventListener("click", () => {
    const dish = allDishes[LEAF[btn.dataset.i].key];
    items.forEach(b => b.classList.toggle("active", b === btn));
    tip.innerHTML = `<b>${dish.en}</b> · <span class="te">${dish.te}</span><br>${dish.desc}`;
    tip.classList.add("show");
    clearTimeout(tipTimer);
    tipTimer = setTimeout(() => { tip.classList.remove("show"); btn.classList.remove("active"); }, 4500);
  }));

  // Serve the leaf once it scrolls into view
  new IntersectionObserver((entries, obs) => {
    if (!entries[0].isIntersecting) return;
    items.forEach((b, i) => setTimeout(() => b.classList.add("served"), reduceMotion ? 0 : i * 160));
    obs.disconnect();
  }, { threshold: 0.5 }).observe($("#bananaLeaf"));
}

/* ---------- Menu tabs ---------- */
function buildMenu() {
  const tabs = $("#menuTabs"), panel = $("#menuPanel");
  tabs.innerHTML = MENU.map((c, i) =>
    `<button role="tab" type="button" id="tab-${c.id}" aria-selected="${i === 0}" data-id="${c.id}">
       <span aria-hidden="true">${c.icon}</span> ${c.en}</button>`).join("");
  const show = (id) => {
    const cat = MENU.find(c => c.id === id);
    $$("button", tabs).forEach(b => b.setAttribute("aria-selected", b.dataset.id === id));
    panel.setAttribute("aria-labelledby", `tab-${id}`);
    panel.innerHTML = cat.dishes.map((d, i) => `
      <article class="dish" data-emoji="${d.emoji}" style="animation-delay:${i * 70}ms">
        <h3>${d.en}</h3>
        <div class="te">${d.te}</div>
        <p>${d.desc}</p>
      </article>`).join("");
  };
  tabs.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) show(b.dataset.id); });
  show(MENU[0].id);
}

/* ---------- RSVP via WhatsApp ---------- */
function setupRsvp() {
  $("#rsvpForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const name = f.get("name").trim();
    const coming = f.get("reply") === "coming";
    const msg = coming
      ? `Namaskaram ${CONFIG.hostShort}! 🙏 ${name} here — we (${f.get("count")}) will be there for your Gruhapravesam. Congratulations on the new home! 🏡🪔`
      : `Namaskaram ${CONFIG.hostShort}! 🙏 ${name} here — we can't make it, but sending all our blessings for your new home. 🏡🪔`;
    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener");
    $("#rsvpNote").textContent = coming ? "ధన్యవాదాలు! See you there 🙏" : "ధన్యవాదాలు for your blessings 🙏";
    if (coming) petalBurst(30);
  });
}

/* ---------- Kolam in the footer ---------- */
function buildKolam() {
  const k = $("#kolam");
  let s = "";
  const ring = (count, rx, ry, dist, color, opacity = 1) => {
    for (let i = 0; i < count; i++) {
      const a = (360 / count) * i;
      s += `<ellipse cx="0" cy="${-dist}" rx="${rx}" ry="${ry}" fill="${color}" opacity="${opacity}" transform="rotate(${a})"/>`;
    }
  };
  ring(16, 9, 22, 72, "#0d5c34");
  ring(16, 6, 14, 72, "#7fc96b");
  ring(12, 10, 24, 46, "#c4161c");
  ring(12, 5, 13, 46, "#ffcf33");
  ring(8, 9, 18, 22, "#f59e0b");
  s += `<circle r="12" fill="#c4161c"/><circle r="6" fill="#ffcf33"/>`;
  for (let i = 0; i < 24; i++) {
    const a = (Math.PI * 2 * i) / 24;
    s += `<circle cx="${(96 * Math.cos(a)).toFixed(1)}" cy="${(96 * Math.sin(a)).toFixed(1)}" r="2.6" fill="#b3121b"/>`;
  }
  k.innerHTML = s;
}

/* ---------- Reveal on scroll ---------- */
function setupReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  $$(".reveal").forEach(el => io.observe(el));
}

/* ---------- Init ---------- */
bindConfig();
buildTorans();
buildTimeline();
buildLeaf();
buildMenu();
buildKolam();
setupDoors();
setupCountdown();
setupCalendar();
setupRsvp();
setupReveal();
petalDrizzle();
