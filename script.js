/* Орбита — магазин планет. Данные планет из галактики scroll94/orbita, цены — демо. */
const PLANETS = [
  { n: "Нокс-7", t: "Газовый гигант", price: 12400000, r: 1.2, ring: 1, c: ["#3d2a6b", "#b9a4d8", "#e9d9c4"], o: [11, .5, .6],
    i: [["Расстояние", "11 000 св. лет"], ["Температура", "−140 °C"], ["Спутники", "23"], ["Сутки", "9 часов"]],
    d: "Исполин с бурями размером с континент. Кольца из ледяных частиц переливаются сиреневым.",
    plate: ["trouvelot-jupiter-1880.jpg", "Похожий мир в телескоп: Юпитер, пастель Э. Трувело, 1880."],
    e: [["Фиолетовые молнии", "Грозы длиной в тысячи километров каждые несколько минут подсвечивают облака изнутри."], ["Полярные сияния", "Частицы колец падают в атмосферу и рисуют над полюсами зелёные ленты."], ["Кольцевой метеопоток", "Ледяные обломки колец сыплются на верхние слои атмосферы."]],
    pl: [["Око Бури", "Центр шторма размером с три Земли. Бушует уже 400 лет."], ["Алмазная Глубина", "Слой, где из-за давления идёт дождь из алмазов."], ["Парящие станции", "Плавучие города, дрейфующие над облаками."]] },
  { n: "Эмбер", t: "Пустынный мир", price: 3900000, r: .8, c: ["#8a3b1e", "#d9894a", "#f2d39b"], o: [16, 2.4, -.8],
    i: [["Расстояние", "16 000 св. лет"], ["Температура", "+78 °C"], ["Спутники", "2"], ["Сутки", "31 час"]],
    d: "Раскалённая планета, где дюны из красного песка движутся быстрее земного ветра. Ночью небо светится розовым.",
    plate: ["mare-humorum-from-the-trouvelot-astronomical-drawings.jpg", "Такие же кратеры, только на Луне: Море Влажности, рисунок Э. Трувело."],
    e: [["Песчаные бури", "Стена песка высотой 10 км идёт по планете неделями."], ["Метеоритный дождь", "Планета пересекает пояс астероидов, и небо расчерчено огненными следами."], ["Огненные смерчи", "Раскалённый воздух закручивается в вихри из искр и пепла."]],
    pl: [["Долина Стекла", "Песок спёкся в зеркальные поля после древнего удара."], ["Красный Каньон", "Расселина глубиной 14 км, на дне которой находят воду."], ["Город-призрак", "Руины базы первых колонистов, занесённые дюнами."]] },
  { n: "Глациа", t: "Ледяной мир", price: 2700000, r: .9, c: ["#3f7d9c", "#a9d3df", "#f1f5f4"], o: [21, 4.1, .9],
    i: [["Расстояние", "21 000 св. лет"], ["Температура", "−95 °C"], ["Спутники", "5"], ["Сутки", "18 часов"]],
    d: "Планета, целиком покрытая голубым льдом. Под километровой коркой прячется тёплый океан.",
    plate: ["trouvelot-aurora-borealis-1872.jpg", "Такие сияния бывают над полюсами Глации: северное сияние, рисунок Э. Трувело, 1872."],
    e: [["Вечная метель", "Снег идёт здесь сотни лет подряд, иногда из ледяных кристаллов."], ["Бирюзовые сияния", "Магнитное поле зажигает над полюсами ленты света."], ["Комета Ориона", "Раз в 300 лет комета проходит рядом и осыпает планету ледяной пылью."]],
    pl: [["Хрустальный Собор", "Пещера с ледяными колоннами высотой 200 м."], ["Тёплое Око", "Единственный разлом, где подлёдный океан виден без бурения."], ["Станция «Полюс»", "Научная база над океаном под километровым льдом."]] },
  { n: "Вирида", t: "Океанический мир", price: 8800000, r: 1, c: ["#14506b", "#3f9a86", "#e2efe6"], o: [26, 5.2, -.5],
    i: [["Расстояние", "26 000 св. лет"], ["Температура", "+19 °C"], ["Спутники", "1"], ["Сутки", "26 часов"]],
    d: "Бирюзовые океаны и плавучие острова-леса. Здесь нашли следы примитивной жизни.",
    plate: ["trouvelot-aurora-borealis-1872.jpg", "Светящиеся приливы Вириды похожи на сияние: рисунок Э. Трувело, 1872."],
    e: [["Кислотные дожди", "Испарения планктона превращаются в зелёные ливни; острова прячутся под куполами из листвы."], ["Светящиеся приливы", "Планктон окрашивает ночное небо в бирюзовый."], ["Тропические грозы", "Короткие, но мощные грозы каждый вечер."]],
    pl: [["Плавучий лес", "Остров из переплетённых деревьев размером с город."], ["Бездна Лиры", "Океанская впадина глубиной 20 км."], ["Коралловые башни", "Живые рифы, выросшие выше гор."]] },
  { n: "Пульсар-Мю", t: "Лавовая планета", price: 1500000, r: .7, c: ["#1c1216", "#a3324a", "#f08a5d"], o: [8, 3.2, .3],
    i: [["Расстояние", "8 000 св. лет"], ["Температура", "+640 °C"], ["Спутники", "0"], ["Сутки", "7 часов"]],
    d: "Тёмный мир с реками лавы. Близость к ядру галактики делает его самым горячим в округе, а заодно и самым дешёвым.",
    plate: ["mare-humorum-from-the-trouvelot-astronomical-drawings.jpg", "Застывшие лавовые моря выглядят так: лунное Море Влажности, рисунок Э. Трувело."],
    e: [["Извержения магмы", "Вулканы выбрасывают лаву прямо в космос."], ["Ионные грозы", "Радиация ядра рождает малиновые разряды."], ["Огненный град", "Раскалённые камни падают из пояса вокруг ядра."]],
    pl: [["Лавовое Море", "Океан магмы шириной 5000 км."], ["Чёрные Шпили", "Базальтовые столбы выше Эвереста."], ["Кратер Феникс", "Лава бьёт из него фонтаном каждые 6 часов."]] },
  { n: "Орфея", t: "Кольцевой гигант", price: 15000000, r: 1.4, ring: 1, c: ["#5b5470", "#c9bfd6", "#efe4d8"], o: [29, 1.2, 1.2],
    i: [["Расстояние", "29 000 св. лет"], ["Температура", "−170 °C"], ["Спутники", "41"], ["Сутки", "12 часов"]],
    d: "Спокойный гигант с тройным кольцом. Его 41 спутник образуют настоящую мини-систему.",
    plate: ["the-planet-saturn-from-the-trouvelot-astronomical.jpg", "Кольца как у Орфеи: Сатурн, пастель Э. Трувело, 1874."],
    e: [["Кольцевые сияния", "Частицы колец вспыхивают в атмосфере полярными огнями."], ["Аммиачные грозы", "Аммиачные облака разряжаются синими молниями."], ["Осколки лун", "Мелкие спутники иногда разрушаются и осыпают орбиту."]],
    pl: [["Тройное Кольцо", "Три кольца разной яркости, видимые из любой точки."], ["Луна Эхо", "Крупнейший спутник, на нём стоит полярная станция."], ["Бездна Аммиака", "Океан жидкого аммиака в глубоких слоях."]] },
  { n: "Кварц", t: "Кристаллический мир", price: 5200000, r: .75, c: ["#6b2d5c", "#d58fc0", "#cfe7ec"], o: [14, .2, -1.2],
    i: [["Расстояние", "14 000 св. лет"], ["Температура", "−20 °C"], ["Спутники", "3"], ["Сутки", "22 часа"]],
    d: "Поверхность усыпана гигантскими кристаллами, которые переливаются под светом звёзд и поют на ветру.",
    plate: ["trouvelot-the-great-nebula-in-orion-1875.jpg", "Свет, в котором блестит Кварц: туманность Ориона, рисунок Э. Трувело, 1875."],
    e: [["Поющие ветры", "Ветер звенит в кристаллах, звук слышен за сотни километров."], ["Кристальная метель", "Осколки взлетают от резонанса и падают обратно."], ["Радужные сияния", "Кристаллы преломляют звёздный свет в небе."]],
    pl: [["Хрустальный Лес", "Кристаллы высотой с небоскрёб."], ["Пещера Резонанса", "Звук здесь усиливается в тысячу раз."], ["Гора Аметист", "Сиреневая гора из цельного кристалла."]] },
  { n: "Тихая Гавань", t: "Обитаемая планета", price: 21000000, r: .95, c: ["#2f6a4a", "#4f95b8", "#efe3c4"], o: [23, 2.9, .2],
    i: [["Расстояние", "23 000 св. лет"], ["Температура", "+22 °C"], ["Спутники", "2"], ["Сутки", "24 часа"]],
    d: "Мягкий климат, зелёные континенты и тёплые моря. Лучшее место для первой колонии и самая дорогая планета Орбиты.",
    plate: ["trouvelot-the-great-nebula-in-orion-1875.jpg", "Ночное небо над Гаванью: туманность Ориона, рисунок Э. Трувело, 1875."],
    e: [["Тёплые ливни", "Мягкие дожди каждый вечер питают леса."], ["Редкие сияния", "Раз в год небо над океаном вспыхивает зелёным."], ["Звездопад", "Каждую осень планета проходит через облако метеоров."]],
    pl: [["Столица Гавань", "Первый город колонистов на берегу залива."], ["Озеро Зеркало", "Идеально гладкое озеро в кратере."], ["Эхо-горы", "Горы со стоячим эхом, которое слышно целую минуту."]] }
];

const $ = s => document.querySelector(s);
const rub = n => n.toLocaleString("ru-RU").replace(/\s/g, " ") + " ₽";
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
let active = -1, owned = -1;

/* ---------- catalogue ---------- */
$("#rows").innerHTML = PLANETS.map((p, i) => `
  <li class="row" data-i="${i}">
    <button type="button" aria-expanded="false" aria-controls="desc${i}">
      <span class="row-name">${p.n}</span><span class="row-price">${rub(p.price)}</span>
    </button>
    <div class="row-desc" id="desc${i}"><p>${p.t}. ${p.d}</p></div>
  </li>`).join("");
const rowEls = [...document.querySelectorAll(".row")];

function setActive(i, fly = true) {
  if (i === active) return;
  active = i;
  rowEls.forEach((r, j) => { r.classList.toggle("on", j === i); r.querySelector("button").setAttribute("aria-expanded", j === i); });
  fillShow(i);
  if (fly) Sky.focus(i);
}
rowEls.forEach((r, i) => r.querySelector("button").addEventListener("click", () => setActive(i)));

// the row nearest the middle of the screen becomes active while scrolling
const rowObs = new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting) setActive(+e.target.dataset.i); });
}, { rootMargin: "-46% 0px -46% 0px" });
rowEls.forEach(r => rowObs.observe(r));

// back over the hero → whole galaxy
new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting && e.intersectionRatio > .6) { active = -1; rowEls.forEach(r => r.classList.remove("on")); Sky.focus(-1); } });
}, { threshold: [.6] }).observe($(".card"));

/* ---------- showcase ---------- */
let tab = 0;
function fillShow(i) {
  if (i < 0) return;
  const p = PLANETS[i];
  $("#pName").textContent = p.n;
  $("#pType").textContent = `${p.t} · ${rub(p.price)}`;
  $("#tab0").innerHTML = `<dl class="specs">${p.i.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl><p class="p-desc">${p.d}</p>`;
  $("#tab1").innerHTML = `<ul class="items">${p.e.map(([h, t]) => `<li><b>${h}</b>${t}</li>`).join("")}</ul>`;
  $("#tab2").innerHTML = `<ul class="items">${p.pl.map(([h, t]) => `<li><b>${h}</b>${t}</li>`).join("")}</ul>`;
  $("#buyBtn").textContent = owned === i ? "В купчей" : `Купить за ${rub(p.price)}`;
  const img = $("#plateImg"), src = "assets/" + p.plate[0];
  $("#plateCap").textContent = p.plate[1];
  img.alt = p.plate[1];
  if (!img.src.endsWith(p.plate[0])) {
    img.classList.add("fade");
    setTimeout(() => { img.src = src; img.onload = () => img.classList.remove("fade"); }, reduced ? 0 : 250);
  }
}
const tabs = [...document.querySelectorAll('[role="tab"]')];
function setTab(n) {
  tab = n;
  tabs.forEach((t, j) => { t.setAttribute("aria-selected", j === n); t.tabIndex = j === n ? 0 : -1; });
  [0, 1, 2].forEach(j => { $("#tab" + j).hidden = j !== n; });
}
tabs.forEach((t, n) => {
  t.addEventListener("click", () => setTab(n));
  t.addEventListener("keydown", e => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      const m = (n + (e.key === "ArrowRight" ? 1 : 2)) % 3; setTab(m); tabs[m].focus();
    }
  });
});
$("#lookBtn").addEventListener("click", () => {
  Sky.focus(active < 0 ? 0 : active);
  if (innerWidth <= 960) scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
});
$("#buyBtn").addEventListener("click", () => {
  const i = active < 0 ? 0 : active;
  owned = i; fillDeed(); fillShow(i);
  $("#deed").scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
});

/* ---------- deed ---------- */
function fillDeed() {
  const p = PLANETS[owned];
  $("#sPlanet").textContent = p.n;
  $("#sType").textContent = p.t;
  $("#sDist").textContent = p.i[0][1];
  $("#sMoons").textContent = p.i[2][1];
  $("#sPrice").textContent = rub(p.price);
  $("#sTotal").textContent = rub(p.price);
  $("#signBtn").disabled = false;
  $("#signMsg").textContent = "Проверьте купчую и подпишите.";
  $("#signMsg").classList.remove("ok");
  $("#barCount").textContent = "Купчая: " + p.n;
}
$("#signBtn").addEventListener("click", () => {
  const p = PLANETS[owned];
  $("#signMsg").textContent = `Готово: ${p.n} записана на вас. Это демо: деньги не списаны, планета осталась на своей орбите.`;
  $("#signMsg").classList.add("ok");
  $("#signBtn").textContent = "Купчая подписана";
  $("#signBtn").disabled = true;
});

/* ---------- entrances ---------- */
const rvObs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); rvObs.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
document.querySelectorAll(".rv").forEach(el => rvObs.observe(el));

/* ---------- the film plays only when seen ---------- */
const film = $("#film");
if (!reduced) new IntersectionObserver(es => es.forEach(e => { e.isIntersecting ? film.play().catch(() => {}) : film.pause(); }), { threshold: .25 }).observe(film);

fillShow(0);

/* ---------- the galaxy stage (three.js) ---------- */
const Sky = (() => {
  const api = { focus() {} };
  if (!window.THREE) return api;
  const cv = $("#sky");
  let R;
  try { R = new THREE.WebGLRenderer({ canvas: cv, antialias: true }); } catch (e) { return api; }
  R.setPixelRatio(Math.min(devicePixelRatio, 2));
  R.setClearColor(0x121013, 1);
  const S = new THREE.Scene(), cam = new THREE.PerspectiveCamera(55, 1, .1, 2000);
  S.add(cam);
  cam.add(new THREE.PointLight(0xfff4e8, 0.95, 0, 0));
  S.add(new THREE.AmbientLight(0x6b5f66, .5));
  const AD = THREE.AdditiveBlending;

  function glowTex(rgb) {
    const k = document.createElement("canvas"); k.width = k.height = 64;
    const x = k.getContext("2d"), g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, `rgba(${rgb},1)`); g.addColorStop(.3, `rgba(${rgb},.35)`); g.addColorStop(1, `rgba(${rgb},0)`);
    x.fillStyle = g; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(k);
  }
  // value noise for planet surfaces
  const hash = (x, y) => { const h = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return h - Math.floor(h); };
  const noise = (x, y) => {
    const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi, u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
    const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  };
  const fbm = (x, y) => { let s = 0, a = .5, f = 1; for (let i = 0; i < 5; i++) { s += a * noise(x * f, y * f); f *= 2; a *= .5; } return s; };
  const hex = h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  function surface(p, seed) {
    const W = 512, H = 256, k = document.createElement("canvas"); k.width = W; k.height = H;
    const x = k.getContext("2d"), img = x.createImageData(W, H), [c0, c1, c2] = p.c.map(hex);
    const banded = /гигант/.test(p.t);
    for (let yy = 0; yy < H; yy++) for (let xx = 0; xx < W; xx++) {
      const u = xx / W * 8 + seed, v = yy / H * 4;
      let t = banded ? .5 + .28 * Math.sin(v * 9 + fbm(u * .6, v * 2) * 3.2) + .2 * (fbm(u * 2, v * 6) - .5) : fbm(u, v * 1.4);
      t = Math.min(1, Math.max(0, t));
      const m = t < .5 ? [c0, c1, t * 2] : [c1, c2, (t - .5) * 2];
      const o = (yy * W + xx) * 4;
      for (let ch = 0; ch < 3; ch++) img.data[o + ch] = m[0][ch] + (m[1][ch] - m[0][ch]) * m[2];
      img.data[o + 3] = 255;
    }
    x.putImageData(img, 0, 0);
    const tex = new THREE.CanvasTexture(k); tex.anisotropy = 4; return tex;
  }

  // galaxy: four arms of dust in the colours of an old pastel plate
  const G = new THREE.Group(); S.add(G);
  const N = 70000, pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
  const A = new THREE.Color("#f4dcc0"), B = new THREE.Color("#d9a7a0"), C = new THREE.Color("#8fb3cf"), tc = new THREE.Color();
  for (let i = 0; i < N; i++) {
    let x, y, z, t;
    if (i % 6 === 0) { const r = Math.pow(Math.random(), 2) * 6, a = Math.random() * 6.283, b = Math.random() * 3.14; x = r * Math.sin(b) * Math.cos(a); z = r * Math.sin(b) * Math.sin(a); y = r * Math.cos(b) * .4; t = 0; }
    else { const r = Math.pow(Math.random(), 1.5) * 34 + .5, a = (i % 4) * 1.5708 + r * .27, q = () => Math.pow(Math.random(), 2.5) * (Math.random() < .5 ? 1 : -1) * (.4 + r * .07); x = Math.cos(a) * r + q(); z = Math.sin(a) * r + q(); y = q() * .45; t = r / 34; }
    tc.copy(t < .5 ? A : B).lerp(t < .5 ? B : C, t < .5 ? t * 2 : (t - .5) * 2).multiplyScalar(.35 + Math.random() * .75);
    pos.set([x, y, z], i * 3); col.set([tc.r, tc.g, tc.b], i * 3);
  }
  const gg = new THREE.BufferGeometry();
  gg.setAttribute("position", new THREE.BufferAttribute(pos, 3)); gg.setAttribute("color", new THREE.BufferAttribute(col, 3));
  G.add(new THREE.Points(gg, new THREE.PointsMaterial({ size: .28, map: glowTex("255,255,255"), vertexColors: true, transparent: true, depthWrite: false, blending: AD })));
  const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex("255,226,196"), blending: AD, transparent: true, depthWrite: false, opacity: .75 }));
  core.scale.set(22, 22, 1); G.add(core);
  const bp = new Float32Array(2500 * 3);
  for (let i = 0; i < 2500; i++) { const a = Math.random() * 6.283, b = Math.acos(2 * Math.random() - 1), r = 500 + Math.random() * 400; bp.set([r * Math.sin(b) * Math.cos(a), r * Math.cos(b), r * Math.sin(b) * Math.sin(a)], i * 3); }
  const bg = new THREE.BufferGeometry(); bg.setAttribute("position", new THREE.BufferAttribute(bp, 3));
  S.add(new THREE.Points(bg, new THREE.PointsMaterial({ size: 1.8, map: glowTex("230,226,240"), transparent: true, depthWrite: false, blending: AD, sizeAttenuation: false })));

  PLANETS.forEach((p, i) => {
    const g = new THREE.Group();
    g.position.set(Math.cos(p.o[1]) * p.o[0], p.o[2], Math.sin(p.o[1]) * p.o[0]);
    p.m = new THREE.Mesh(new THREE.SphereGeometry(p.r, 64, 40), new THREE.MeshStandardMaterial({ map: surface(p, i * 3.7), roughness: .85, metalness: 0 }));
    p.m.rotation.z = .3;
    g.add(p.m);
    g.add(new THREE.Mesh(new THREE.SphereGeometry(p.r * 1.08, 32, 24), new THREE.MeshBasicMaterial({ color: p.c[2], transparent: true, opacity: .12, side: THREE.BackSide, blending: AD, depthWrite: false })));
    if (p.ring) {
      const rg = new THREE.Mesh(new THREE.RingGeometry(p.r * 1.45, p.r * 2.3, 128), new THREE.MeshBasicMaterial({ color: p.c[1], side: 2, transparent: true, opacity: .5, depthWrite: false }));
      rg.rotation.x = 1.25; rg.rotation.y = .25; g.add(rg);
    }
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex(hex(p.c[2]).join(",")), blending: AD, transparent: true, depthWrite: false, opacity: .55 }));
    halo.scale.setScalar(p.r * 5); g.add(halo); p.halo = halo;
    p.g = g; G.add(g);
  });

  // camera rig
  const T = new THREE.Vector3(), gT = new THREE.Vector3(), W = new THREE.Vector3();
  let th = .8, ph = 1.1, d = 120, gd = 58, foc = -1, t0 = performance.now(), drag = null, visible = true;
  api.focus = i => {
    foc = i; gd = i < 0 ? 58 : PLANETS[i].r * 5.2;
    $("#stageName").textContent = i < 0 ? "Галактика Орбита" : PLANETS[i].n;
    $("#stageNote").textContent = i < 0 ? "8 планет на продажу · тяните, чтобы повернуть" : `${PLANETS[i].t} · ${rub(PLANETS[i].price)}`;
    if (i < 0) gT.set(0, 0, 0);
  };
  cv.addEventListener("pointerdown", e => { drag = { x: e.clientX, y: e.clientY }; cv.setPointerCapture(e.pointerId); });
  cv.addEventListener("pointermove", e => {
    if (!drag) return;
    th -= (e.clientX - drag.x) * .006; ph = Math.max(.15, Math.min(2.95, ph - (e.clientY - drag.y) * .004));
    drag = { x: e.clientX, y: e.clientY };
  });
  const end = () => { drag = null; };
  cv.addEventListener("pointerup", end); cv.addEventListener("pointercancel", end);
  function size() { const b = cv.getBoundingClientRect(); R.setSize(b.width, b.height, false); cam.aspect = b.width / b.height; cam.updateProjectionMatrix(); }
  new ResizeObserver(size).observe(cv); size();
  new IntersectionObserver(es => { visible = es[0].isIntersecting; }).observe(cv);

  function loop(now) {
    requestAnimationFrame(loop);
    const dt = Math.min((now - t0) / 1000, .05); t0 = now;
    if (!visible) return;
    const spin = reduced ? 0 : 1;
    G.rotation.y += dt * .01 * spin;
    PLANETS.forEach((p, i) => { p.m.rotation.y += dt * (i === foc ? .08 : .2) * spin; p.halo.material.opacity = foc < 0 ? .4 : (i === foc ? 0 : .25); });
    S.updateMatrixWorld();
    if (foc >= 0) PLANETS[foc].g.getWorldPosition(gT); else if (!drag) th += dt * .025 * spin;
    const k = reduced ? 1 : 1 - Math.exp(-dt * 2.4);
    T.lerp(gT, k); d += (gd - d) * k;
    cam.position.set(T.x + d * Math.sin(ph) * Math.cos(th), T.y + d * Math.cos(ph), T.z + d * Math.sin(ph) * Math.sin(th));
    cam.lookAt(T);
    R.render(S, cam);
  }
  requestAnimationFrame(loop);
  return api;
})();
