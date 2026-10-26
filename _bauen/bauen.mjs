// Erzeugt alle HTML-Seiten aus gemeinsamen Bausteinen.
// Aufruf im Projektordner: node _bauen/bauen.mjs
// Ordner mit Unterstrich veröffentlicht GitHub Pages nicht.

import { readFileSync, writeFileSync } from "node:fs";

const V = 11; // bei Änderungen an stil.css oder seite.js hochzählen
const TEL = "tel:+4915236695793";
const TEL_TEXT = "0152 36695793";
const WA = "https://wa.me/4915236695793";
const MAIL = "kameribau@hotmail.com";

// Seitenverhältnis der Fotos (Breite 800)
const FOTOS = {
  "boden-fischgraet": [800, 1200],
  "buero": [800, 534],
  "kueche-dunkel": [800, 874],
  "raum-eichenboden": [800, 1481],
  "reinigung-buero": [800, 533],
  "trockenbau-bogen": [800, 1200],
  "umbau-altbau": [800, 532],
  "wohnkueche": [800, 544],
  "wohnraum": [800, 422]
};

function foto(name, alt, { sizes = "100vw", lazy = true, prio = false, klasse = "" } = {}) {
  const [b, h] = FOTOS[name];
  const p = `bilder/fotos/${name}`;
  return `<img${klasse ? ` class="${klasse}"` : ""} src="${p}-1200.jpg" srcset="${p}-800.jpg 800w, ${p}-1200.jpg 1200w, ${p}-1600.jpg 1600w" sizes="${sizes}" width="1200" height="${Math.round((h / b) * 1200)}"${lazy ? ' loading="lazy"' : ""}${prio ? ' fetchpriority="high"' : ""} alt="${alt}">`;
}

const icon = (id) => `<svg aria-hidden="true"><use href="#i-${id}"/></svg>`;

// ---------- Leistungen ----------

const LEISTUNGEN = [
  {
    datei: "trockenbau.html",
    name: "Trockenbau",
    kurz: "Wände, Decken, Dachgeschoss",
    foto: "trockenbau-bogen",
    alt: "Weißer Raum mit gerundetem Wanddurchgang",
    titel: "Trockenbau in Leimen, Heidelberg und Umgebung – Kameri",
    beschreibung: "Trennwände, abgehängte Decken, Dachgeschossausbau und Wandverkleidungen aus Leimen. Für Privatkunden und Firmen im Umkreis von 40 km. Beratung und Angebot kostenlos.",
    h1: "Trockenbau in Leimen",
    lead: "Neue Wände und Decken aus Metallständern und Gipskarton. Gebaut wird ohne Mörtel, und nichts muss lange trocknen. Deshalb können Sie den Raum schnell wieder nutzen.",
    punkteTitel: "Was zum Trockenbau gehört",
    punkte: [
      ["Trennwände", "Aus einem großen Zimmer werden zwei. Die Wand steht auf einem Metallgerüst und wird mit Gipskarton beplankt, auf Wunsch mit Tür."],
      ["Abgehängte Decken", "Eine neue Decke unter der alten. Darüber verschwinden Leitungen und Rohre, und Einbauleuchten haben Platz."],
      ["Dachgeschossausbau", "Aus dem Dachboden wird ein Raum zum Wohnen oder Arbeiten. Wir verkleiden die Schrägen, stellen Wände und schließen die Decke."],
      ["Wandverkleidungen", "Schiefe oder unschöne Wände bekommen davor eine neue, gerade Fläche aus Gipskarton."],
      ["Wände für Leitungen", "In Bad und Küche verschwinden Rohre und Kabel hinter einer Vorwand."],
      ["Spachteln", "Fugen und Flächen werden gespachtelt und geschliffen, bis die Wand bereit für Farbe oder Tapete ist."]
    ],
    fragen: [
      ["Hält eine Trockenbauwand Regale oder Hängeschränke?", "Ja, wenn wir es vorher wissen. Dann kommen an diese Stellen Verstärkungen in die Wand. Sagen Sie uns beim Termin, was später an der Wand hängen soll."],
      ["Wie lange dauert es?", "Das hängt von der Größe ab. Weil nichts trocknen muss wie beim Mauern, geht es meist schneller. Wie lange es bei Ihnen dauert, sagen wir Ihnen nach der Besichtigung."],
      ["Was kostet Trockenbau?", "Das hängt von Fläche, Material und Aufwand ab. Deshalb sehen wir uns alles vor Ort an. Besichtigung und Angebot sind kostenlos."],
      ["Machen Sie auch Trockenbau in Büros und Praxen?", "Ja. Wir arbeiten für Privatkunden und für Firmen, Praxen und Hausverwaltungen."]
    ]
  },
  {
    datei: "umbau.html",
    name: "Umbau & Renovierung",
    auswahl: "Umbau / Renovierung",
    kurz: "Räume teilen, Wohnungen herrichten",
    beispiel: "Zum Beispiel: Mietwohnung, 3 Zimmer, nach dem Auszug herrichten",
    foto: "umbau-altbau",
    alt: "Altbauwohnung im Umbau mit geöffneter Wand und Stützen",
    titel: "Umbau und Renovierung in Leimen, Heidelberg und Umgebung – Kameri",
    beschreibung: "Räume teilen, Türen versetzen, Wohnungen nach dem Auszug herrichten: Umbau und Renovierung aus Leimen für Privatkunden, Firmen und Hausverwaltungen. Beratung und Angebot kostenlos.",
    h1: "Umbau und Renovierung",
    lead: "Ein Zimmer teilen, eine Tür versetzen, die Wohnung nach dem Auszug wieder herrichten. Wir passen Ihre Räume an das an, was Sie heute brauchen.",
    punkteTitel: "Was wir umbauen und renovieren",
    punkte: [
      ["Räume teilen", "Aus einem Kinderzimmer werden zwei, das Büro bekommt einen Besprechungsraum. Die neue Wand bauen wir in Trockenbau."],
      ["Türen versetzen", "Die Tür soll woanders hin? Wir setzen die neue Öffnung und schließen die alte."],
      ["Öffnungen schließen", "Aus einer alten Tür oder einem Durchgang wird wieder Wand. Danach sieht man nicht mehr, dass dort etwas war."],
      ["Wohnung nach dem Auszug", "Für Vermieter und Hausverwaltungen: Wir richten die Wohnung für den nächsten Mieter her."],
      ["Wände und Decken ausbessern", "Risse, Löcher und alte Dübelstellen werden geschlossen und gespachtelt."],
      ["Büros und Praxen", "Wir passen Büro-, Praxis- und Ladenflächen an neue Mieter oder neue Abläufe an."]
    ],
    fragen: [
      ["Kann jede Wand weg?", "Nein. Tragende Wände dürfen nur nach Prüfung durch einen Statiker verändert werden. Bei der Besichtigung sehen wir uns die Wände an und sagen Ihnen, was möglich ist."],
      ["Arbeiten Sie für Hausverwaltungen?", "Ja. Wir richten Mietwohnungen nach dem Auszug her und stimmen die Termine mit Ihnen ab."],
      ["Lohnt sich ein Anruf auch für kleinere Arbeiten?", "Ja. Rufen Sie an und beschreiben Sie kurz, worum es geht. Dann sagen wir Ihnen, ob wir es übernehmen können."],
      ["Was kostet ein Umbau oder eine Renovierung?", "Das hängt davon ab, was alles gemacht werden soll. Deshalb sehen wir uns die Räume vor Ort an. Besichtigung und Angebot sind kostenlos."]
    ]
  },
  {
    datei: "boeden.html",
    name: "Böden",
    kurz: "Laminat, Vinyl, Parkett",
    beispiel: "Zum Beispiel: Wohnzimmer, ca. 30 m², neuer Vinylboden",
    foto: "boden-fischgraet",
    alt: "Wohnzimmer mit Parkett und hellen Wänden",
    titel: "Boden verlegen in Leimen, Heidelberg und Umgebung – Kameri",
    beschreibung: "Laminat, Vinyl und Parkett verlegen in Leimen und Umgebung: alten Belag entfernen, Untergrund ausgleichen, neuen Boden verlegen. Beratung und Angebot kostenlos.",
    h1: "Böden verlegen in Leimen",
    lead: "Laminat, Vinyl oder Parkett. Wir entfernen den alten Belag, gleichen den Untergrund aus und verlegen den neuen bis zur Sockelleiste.",
    punkteTitel: "Was wir verlegen",
    punkte: [
      ["Laminat", "Robust und günstig. Gut für Wohn- und Schlafräume."],
      ["Vinyl", "Leise und angenehm unter den Füßen. Je nach Ausführung auch für Küche und Flur."],
      ["Parkett", "Echtes Holz mit warmer Oberfläche. Welche Sorte zu Ihrem Raum passt, besprechen wir vor Ort."],
      ["Alten Belag entfernen", "Teppich, alter Boden, Kleberreste: Wir machen den Untergrund frei."],
      ["Untergrund ausgleichen", "Unebenheiten gleichen wir aus, damit der neue Boden eben liegt."],
      ["Sockelleisten und Übergänge", "Zum Schluss kommen Sockelleisten und Übergangsprofile an den Türen. Dann ist der Raum fertig."]
    ],
    fragen: [
      ["Welcher Boden passt zu mir?", "Das hängt vom Raum ab und davon, was Sie ausgeben möchten. Bei der Besichtigung sehen wir uns den Raum an und beraten Sie."],
      ["Muss der alte Boden raus?", "Nicht immer. Manchmal kann der neue Belag darauf liegen. Das prüfen wir vor Ort."],
      ["Was kostet ein neuer Boden?", "Das hängt von Fläche, Belag und Untergrund ab. Besichtigung und Angebot sind kostenlos."]
    ]
  },
  {
    datei: "gebaeudereinigung.html",
    name: "Gebäudereinigung",
    kurz: "Baureinigung, Büros, Treppenhäuser",
    beispiel: "Zum Beispiel: Treppenhaus, 4 Etagen, alle zwei Wochen",
    foto: "reinigung-buero",
    alt: "Reinigungskraft wischt am Abend den Boden einer Bürolobby",
    titel: "Gebäudereinigung in Leimen, Heidelberg und Umgebung – Kameri",
    beschreibung: "Baureinigung, Reinigung von Büros und Praxen, Treppenhäusern und Fenstern aus Leimen. Für Privatkunden, Firmen und Hausverwaltungen. Angebot kostenlos.",
    h1: "Gebäudereinigung in Leimen",
    lead: "Nach dem Umbau, im Büro, im Treppenhaus oder an den Fenstern: Wir machen sauber, einmal oder regelmäßig.",
    punkteTitel: "Was wir reinigen",
    schritt4: ["Wir legen los", "Den Termin legen wir gemeinsam fest. Gearbeitet wird nach Angebot."],
    punkte: [
      ["Baureinigung", "Nach Umbau oder Renovierung entfernen wir Staub und Baureste, damit Sie einziehen können. Wenn wir selbst gebaut haben, machen wir gleich danach sauber."],
      ["Büros und Praxen", "Regelmäßige Reinigung von Büro-, Praxis- und Ladenflächen. Die Zeiten stimmen wir mit Ihnen ab."],
      ["Treppenhäuser", "Regelmäßige Reinigung von Treppenhäusern, zum Beispiel für Hausverwaltungen und Eigentümer."],
      ["Fenster", "Fenster und Glasflächen, einzeln oder zusammen mit der übrigen Reinigung."]
    ],
    fragen: [
      ["Reinigen Sie einmalig oder regelmäßig?", "Beides. Eine Baureinigung ist meist einmalig, Büros und Treppenhäuser reinigen wir regelmäßig."],
      ["Machen Sie nach dem Umbau gleich sauber?", "Ja. Wenn wir bei Ihnen gebaut haben, übernehmen wir auf Wunsch auch die Baureinigung."],
      ["Was kostet die Reinigung?", "Das hängt von Fläche, Art der Reinigung und Häufigkeit ab. Wir sehen uns alles an und machen Ihnen ein kostenloses Angebot."]
    ]
  }
];

// ---------- Gemeinsame Bausteine ----------

const SYMBOLE = `<svg width="0" height="0" class="symbole" aria-hidden="true">
    <symbol id="i-telefon" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M5 3h3.5l1.8 4.6-2.4 1.5a11 11 0 0 0 6 6l1.5-2.4L20 14.5V18a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z"/></symbol>
    <symbol id="i-chat" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M12 3.5a8.5 8.5 0 0 0-7.4 12.7L3.5 20.5l4.4-1.1A8.5 8.5 0 1 0 12 3.5Z"/></symbol>
    <symbol id="i-post" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="m3.5 6.5 8.5 6.5 8.5-6.5"/></symbol>
    <symbol id="i-haken" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="m5 12.5 4.5 4.5L19 7.5"/></symbol>
    <symbol id="i-plus" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M12 5v14M5 12h14"/></symbol>
    <symbol id="i-pfeil" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M9 7h8v8"/></symbol>
  </svg>`;

function kopf({ titel, beschreibung, aktiv = "", start = false, noindex = false, ogBild = "wohnraum", jsonld = "" }) {
  const nav = LEISTUNGEN.map((l) =>
    `<a href="${l.datei}"${aktiv === l.datei ? ' aria-current="page"' : ""}>${l.name}</a>`
  ).join("\n          ");
  return `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${titel}</title>
${noindex ? '  <meta name="robots" content="noindex">\n' : ""}${beschreibung ? `  <meta name="description" content="${beschreibung}">\n` : ""}  <meta name="theme-color" content="#f3f3f1">
  <link rel="icon" type="image/png" href="bilder/favicon.png">
  <link rel="apple-touch-icon" href="bilder/favicon.png">
  <link rel="preload" href="schriften/hanken-grotesk-latin-600-normal.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="schriften/hanken-grotesk-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="stil.css?v=${V}">
  <meta property="og:title" content="${titel}">
${beschreibung ? `  <meta property="og:description" content="${beschreibung}">\n` : ""}  <meta property="og:image" content="bilder/fotos/${ogBild}-1200.jpg">
  <meta property="og:locale" content="de_DE">
${jsonld}  <script>document.documentElement.classList.add("js")</script>
</head>
<body>
  <a class="springen" href="#inhalt">Zum Inhalt springen</a>

  ${SYMBOLE}

  <header class="kopf">
    <div class="kopf-innen">
      <a class="marke" href="index.html" aria-label="Kameri – alles rund ums Haus, zur Startseite">
        <img src="bilder/logo-260.png" width="260" height="159" alt="Kameri – alles rund ums Haus">
      </a>
      <nav class="navi" id="navi" aria-label="Hauptnavigation">
        ${nav}
        <a href="${start ? "" : "index.html"}#gebiet">Einsatzgebiet</a>
        <a href="${noindex ? "index.html" : ""}#kontakt">Kontakt</a>
      </nav>
      <a class="kopf-telefon" href="${TEL}">
        ${icon("telefon")}
        <span>${TEL_TEXT}</span>
      </a>
      <button class="menue-knopf" type="button" aria-expanded="false" aria-controls="navi" aria-label="Menü öffnen"><span></span><span></span></button>
    </div>
  </header>
`;
}

function fuss() {
  const links = LEISTUNGEN.map((l) => `<a href="${l.datei}">${l.name}</a>`).join("");
  return `
  <footer class="fuss">
    <div class="innen fuss-innen">
      <div class="fuss-marke">
        <img class="fuss-logo" src="bilder/logo-260.png" width="260" height="159" alt="Kameri – alles rund ums Haus" loading="lazy">
        <p>Julius-Becker-Straße 14<br>69181 Leimen</p>
      </div>
      <div>
        <p class="fuss-titel">Leistungen</p>
        <p class="fuss-links">${links}</p>
      </div>
      <div>
        <p class="fuss-titel">Kontakt</p>
        <p class="fuss-links"><a href="${TEL}">${TEL_TEXT}</a><a href="${WA}">WhatsApp</a><a href="mailto:${MAIL}">${MAIL}</a></p>
      </div>
      <div>
        <p class="fuss-titel">Rechtliches</p>
        <p class="fuss-links"><a href="impressum.html">Impressum</a><a href="datenschutz.html">Datenschutz</a></p>
      </div>
      <p class="fuss-recht">© <span data-jahr>2026</span> Kameri – alles rund ums Haus. Einsatzgebiet: Leimen, Heidelberg, Mannheim, Wiesloch, Walldorf, Schwetzingen, Hockenheim, Sinsheim, Speyer und Umgebung. Fotos: Unsplash (Beispielbilder).</p>
    </div>
  </footer>

  <div class="leiste" data-leiste>
    <a class="leiste-anruf" href="${TEL}">${icon("telefon")}Anrufen</a>
    <a class="leiste-whatsapp" href="${WA}">${icon("chat")}WhatsApp</a>
  </div>

  <script src="seite.js?v=${V}" defer></script>
</body>
</html>
`;
}

function leistungsAuswahl(id, vorauswahl = "", leer = "Bitte wählen") {
  const optionen = ["Trockenbau", "Umbau / Renovierung", "Boden", "Gebäudereinigung", "Etwas anderes"]
    .map((o) => `<option${o === vorauswahl ? " selected" : ""}>${o}</option>`)
    .join("\n                ");
  return `<select id="${id}" name="Leistung">
                <option value=""${vorauswahl ? "" : " selected"}>${leer}</option>
                ${optionen}
              </select>`;
}

function ablauf(schritt4 = ["Wir bauen", "Den Termin legen wir gemeinsam fest. Gearbeitet wird nach Angebot."]) {
  return `
    <section class="dunkel" id="ablauf" aria-labelledby="ablauf-titel">
      <div class="innen ablauf-innen">
        <div class="ablauf-text" data-zeigen>
          <h2 id="ablauf-titel">So kommen Sie zu Ihrem Angebot</h2>
          <p>Beratung, Ausmessen und Angebot kosten Sie nichts. Danach entscheiden Sie in Ruhe.</p>
          <div class="aktionen">
            <a class="knopf knopf-rot" href="${TEL}">${icon("telefon")}${TEL_TEXT} anrufen</a>
          </div>
          ${foto("kueche-dunkel", "Dunkle, edle Küche mit Holzfronten und Fischgrätboden", { sizes: "(max-width: 860px) 100vw, 40vw", klasse: "ablauf-bild" })}
        </div>
        <ol class="ablauf">
          <li data-zeigen>
            <h3>Sie melden sich</h3>
            <p>Per Telefon, WhatsApp oder über das Formular. Ein paar Sätze zum Vorhaben reichen.</p>
          </li>
          <li data-zeigen>
            <h3>Wir kommen vorbei</h3>
            <p>Wir sehen uns die Räume an, beraten Sie und messen aus.</p>
          </li>
          <li data-zeigen>
            <h3>Sie bekommen ein Angebot</h3>
            <p>Schriftlich und kostenlos. Sie entscheiden in Ruhe.</p>
          </li>
          <li data-zeigen>
            <h3>${schritt4[0]}</h3>
            <p>${schritt4[1]}</p>
          </li>
        </ol>
      </div>
    </section>
`;
}

function fragenAbschnitt(fragen, { titel = "Häufige Fragen", oben = true } = {}) {
  const liste = fragen.map(([f, a]) => `
          <details>
            <summary>${f}${icon("plus")}</summary>
            <p>${a}</p>
          </details>`).join("");
  return `
    <section class="abschnitt${oben ? "" : " abschnitt-oben-frei"}" id="fragen" aria-labelledby="fragen-titel">
      <div class="innen fragen-innen">
        <div class="abschnitt-kopf abschnitt-kopf-schmal" data-zeigen>
          <h2 id="fragen-titel">${titel}</h2>
          <p class="fragen-hinweis">Ihre Frage ist nicht dabei? Rufen Sie an: <a class="textlink" href="${TEL}">${TEL_TEXT}</a></p>
        </div>
        <div class="fragen" data-zeigen>${liste}
        </div>
      </div>
    </section>
`;
}

function kachel(l, { sizes = "(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 25vw" } = {}) {
  return `
          <a class="kachel" href="${l.datei}" data-zeigen>
            ${foto(l.foto, l.alt, { sizes })}
            <span class="kachel-pfeil">${icon("pfeil")}</span>
            <span class="kachel-text">
              <span class="kachel-name">${l.name}</span>
              <span class="kachel-kurz">${l.kurz}</span>
            </span>
          </a>`;
}

function kontakt(vorauswahl = "", beispiel = "Zum Beispiel: Wohnzimmer teilen, mit Tür, ca. 4 m Wand") {
  return `
    <section class="kontakt" id="kontakt" aria-labelledby="kontakt-titel">
      <div class="kontakt-flaeche">
        <div class="innen kontakt-innen">
          <div class="kontakt-text" data-zeigen>
            <h2 id="kontakt-titel">Rufen Sie uns an</h2>
            <a class="kontakt-nummer" href="${TEL}">${TEL_TEXT}</a>
            <p>Am Telefon erreichen Sie direkt den Inhaber, Besim Kameri. Sie können auch per WhatsApp oder E-Mail schreiben.</p>
            <div class="aktionen">
              <a class="knopf knopf-weiss" href="${TEL}">${icon("telefon")}Anrufen</a>
              <a class="knopf knopf-glas" href="${WA}">${icon("chat")}WhatsApp</a>
              <a class="knopf knopf-glas" href="mailto:${MAIL}">${icon("post")}E-Mail</a>
            </div>
            <address>
              Kameri – alles rund ums Haus<br>
              Inhaber Besim Kameri<br>
              Julius-Becker-Straße 14, 69181 Leimen<br>
              <a class="textlink" href="mailto:${MAIL}">${MAIL}</a>
            </address>
          </div>

          <form class="formular" id="anfrage" data-anfrage action="mailto:${MAIL}" method="post" enctype="text/plain" novalidate data-zeigen>
            <h3>Anfrage schreiben</h3>
            <div class="feld">
              <label for="f-name">Name</label>
              <input id="f-name" name="Name" type="text" autocomplete="name" required aria-describedby="f-name-fehler">
              <span class="fehler" id="f-name-fehler"></span>
            </div>
            <div class="feld">
              <label for="f-kontakt">Telefon oder E-Mail</label>
              <input id="f-kontakt" name="Kontakt" type="text" autocapitalize="none" autocorrect="off" spellcheck="false" required aria-describedby="f-kontakt-fehler">
              <span class="fehler" id="f-kontakt-fehler"></span>
            </div>
            <div class="feld-reihe">
              <div class="feld">
                <label for="f-ort">Ort</label>
                <input id="f-ort" name="Ort" type="text" autocomplete="address-level2">
              </div>
              <div class="feld">
                <label for="f-leistung">Worum geht es?</label>
                ${leistungsAuswahl("f-leistung", vorauswahl)}
              </div>
            </div>
            <div class="feld">
              <label for="f-nachricht">Was soll gemacht werden?</label>
              <textarea id="f-nachricht" name="Nachricht" required aria-describedby="f-nachricht-fehler" placeholder="${beispiel}"></textarea>
              <span class="fehler" id="f-nachricht-fehler"></span>
            </div>
            <input class="falle" type="checkbox" name="botcheck" tabindex="-1" autocomplete="off" aria-hidden="true">
            <button class="knopf knopf-rot knopf-breit" type="submit">Anfrage senden</button>
            <p class="formular-hinweis"><span data-hinweis-mail>Öffnet Ihr E-Mail-Programm mit der fertigen Nachricht.</span> Mehr zum <a class="textlink" href="datenschutz.html">Datenschutz</a>.</p>
            <p class="formular-status" role="status" aria-live="polite"></p>
          </form>
        </div>
      </div>
    </section>
`;
}

// ---------- Startseite ----------

const ORTE = [["Heidelberg", 6], ["Wiesloch", 6], ["Walldorf", 6], ["Schwetzingen", 10], ["Hockenheim", 11], ["Sinsheim", 17], ["Speyer", 19], ["Mannheim", 23]];

function gebiet() {
  const orte = ORTE.map(([o, k]) => `<li><span>${o}</span><span>${k} km</span></li>`).join("\n              ");
  return `
    <section class="abschnitt" id="gebiet" aria-labelledby="gebiet-titel">
      <div class="innen">
        <div class="gebiet-karte">
          <div class="gebiet-text" data-zeigen>
            <h2 id="gebiet-titel">Einsatzgebiet</h2>
            <p>Wir arbeiten von Leimen aus im Umkreis von etwa 40&nbsp;km.</p>
            <ul class="orte">
              ${orte}
            </ul>

            <form class="ortcheck" id="ortcheck" novalidate>
              <label for="ort-eingabe">Ort oder Postleitzahl prüfen</label>
              <div class="ortcheck-zeile">
                <input id="ort-eingabe" name="ort" type="text" list="ortliste" autocomplete="address-level2" enterkeyhint="search" placeholder="z. B. Nußloch" autocapitalize="words">
                <button class="knopf knopf-dunkel" type="submit">Prüfen</button>
              </div>
              <datalist id="ortliste"></datalist>
              <p class="ortcheck-antwort" id="ort-antwort" aria-live="polite"></p>
            </form>
          </div>

          <figure class="karte" data-zeigen>
            <svg viewBox="-235 -235 470 470" role="img" aria-labelledby="karte-titel">
              <title id="karte-titel">Karte: Leimen in der Mitte, Kreise im Abstand von 10 Kilometern, mit Heidelberg, Mannheim, Wiesloch, Walldorf, Schwetzingen, Hockenheim, Sinsheim und Speyer.</title>
              <circle r="210" fill="#ececea"/>
              <circle r="140" fill="#f2f2f0"/>
              <circle r="70" fill="#f8f8f7"/>
              <g fill="#71717a" font-size="13" text-anchor="middle" font-family="Hanken Grotesk, sans-serif">
                <text y="84">10 km</text>
                <text y="154">20 km</text>
                <text y="224">30 km</text>
              </g>
              <g fill="#18181b">
                <circle cx="-10.8" cy="-39.8" r="5"/>
                <circle cx="-115.5" cy="-108.4" r="5"/>
                <circle cx="2.5" cy="41.4" r="5"/>
                <circle cx="-25.8" cy="31.8" r="5"/>
                <circle cx="-61.6" cy="-27.7" r="5"/>
                <circle cx="-74.5" cy="19.9" r="5"/>
                <circle cx="94.1" cy="73.1" r="5"/>
                <circle cx="-128.1" cy="23.4" r="5"/>
              </g>
              <g fill="#18181b" font-size="15" font-weight="500" font-family="Hanken Grotesk, sans-serif">
                <text x="-10.8" y="-51" text-anchor="middle">Heidelberg</text>
                <text x="-115.5" y="-121" text-anchor="middle">Mannheim</text>
                <text x="12" y="47">Wiesloch</text>
                <text x="-34" y="51" text-anchor="end">Walldorf</text>
                <text x="-71" y="-22" text-anchor="end">Schwetzingen</text>
                <text x="-74.5" y="8" text-anchor="middle">Hockenheim</text>
                <text x="104" y="78">Sinsheim</text>
                <text x="-137" y="29" text-anchor="end">Speyer</text>
              </g>
              <circle r="10" fill="#c2262b" stroke="#ffffff" stroke-width="3"/>
              <text x="15" y="-11" font-size="19" font-weight="600" fill="#c2262b" font-family="Hanken Grotesk, sans-serif">Leimen</text>
            </svg>
            <figcaption>Luftlinie ab Leimen, Kreise alle 10&nbsp;km. Wir fahren bis etwa 40&nbsp;km.</figcaption>
          </figure>
        </div>
      </div>
    </section>
`;
}

const JSONLD_FIRMA = `  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Kameri – alles rund ums Haus",
    "founder": "Besim Kameri",
    "telephone": "+49 152 36695793",
    "email": "${MAIL}",
    "logo": "bilder/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Julius-Becker-Straße 14",
      "postalCode": "69181",
      "addressLocality": "Leimen",
      "addressCountry": "DE"
    },
    "areaServed": ["Leimen", "Heidelberg", "Mannheim", "Wiesloch", "Walldorf", "Schwetzingen", "Hockenheim", "Sinsheim", "Speyer"],
    "knowsAbout": ["Trockenbau", "Umbau", "Renovierung", "Bodenverlegung", "Gebäudereinigung"]
  }
  </script>
`;

function startseite() {
  const kacheln = LEISTUNGEN.map((l) => kachel(l)).join("");
  return kopf({
    titel: "Kameri – Trockenbau und Innenausbau in Leimen",
    beschreibung: `Kameri aus Leimen: Trockenbau, Umbau und Renovierung, Böden und Gebäudereinigung für Privatkunden und Firmen im Umkreis von 40 km. Beratung und Angebot kostenlos. Tel. ${TEL_TEXT}.`,
    start: true,
    ogBild: "wohnkueche",
    jsonld: JSONLD_FIRMA
  }) + `
  <main id="inhalt">
    <section class="start" aria-labelledby="titel">
      <div class="start-text">
        <h1 id="titel">Trockenbau aus Leimen</h1>
        <p class="start-lead">Wir ziehen Wände und Decken ein, bauen Räume um und verlegen Böden. Rufen Sie an: Wir kommen vorbei, sehen uns alles an und machen Ihnen ein kostenloses Angebot.</p>
        <div class="aktionen">
          <a class="knopf knopf-rot" href="${TEL}">${icon("telefon")}${TEL_TEXT} anrufen</a>
          <a class="knopf knopf-weiss" href="${WA}">${icon("chat")}WhatsApp schreiben</a>
        </div>
      </div>
      <div class="collage">
        ${foto("wohnkueche", "Heller Wohnraum mit offener Küche und Holzboden", { lazy: false, prio: true, sizes: "(max-width: 860px) 60vw, 25vw", klasse: "collage-gross" })}
        ${foto("trockenbau-bogen", "Weißer Raum mit gerundetem Wanddurchgang", { lazy: false, sizes: "(max-width: 860px) 40vw, 22vw" })}
        ${foto("raum-eichenboden", "Frisch renovierter Flur mit Holzboden", { lazy: false, sizes: "(max-width: 860px) 40vw, 22vw" })}
      </div>
    </section>

    <section class="werte" aria-label="Auf einen Blick">
      <div class="wert"><b>0 €</b><span>für Beratung, Ausmessen und Angebot</span></div>
      <div class="wert"><b>40 km</b><span>Einsatzgebiet rund um Leimen</span></div>
      <div class="wert"><b>1 Ansprechpartner</b><span>Besim Kameri, vom Anruf bis zur Übergabe</span></div>
    </section>

    <section class="abschnitt" id="leistungen" aria-labelledby="leistungen-titel">
      <div class="innen">
        <div class="abschnitt-kopf" data-zeigen>
          <h2 id="leistungen-titel">Leistungen</h2>
          <p>Wir bauen, verlegen und machen am Ende sauber. Sie haben für alles einen Ansprechpartner.</p>
        </div>
        <div class="kacheln">${kacheln}
        </div>
      </div>
    </section>

    <section class="abschnitt abschnitt-oben-frei" aria-labelledby="kunden-titel">
      <div class="innen">
        <div class="abschnitt-kopf" data-zeigen>
          <h2 id="kunden-titel">Für Privatkunden und Firmen</h2>
        </div>
        <div class="kunden">
          <article class="kunde" data-zeigen>
            ${foto("wohnraum", "Großer, heller Wohnraum mit Sofa und Holzboden", { sizes: "(max-width: 860px) 100vw, 50vw" })}
            <div class="kunde-text">
              <h3>Privatkunden</h3>
              <p>Das Dachgeschoss ausbauen, ein Kinderzimmer teilen, ein neuer Boden im Wohnzimmer. Wir kommen zu Ihnen nach Hause und sagen Ihnen vorher, was es kostet.</p>
            </div>
          </article>
          <article class="kunde" data-zeigen>
            ${foto("buero", "Bürofläche mit Glastrennwänden und abgehängter Decke", { sizes: "(max-width: 860px) 100vw, 50vw" })}
            <div class="kunde-text">
              <h3>Firmen und Hausverwaltungen</h3>
              <p>Büros umbauen, Praxen einrichten, Mietwohnungen nach dem Auszug herrichten. Wir stimmen die Termine mit Ihnen ab und arbeiten nach Angebot.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
` + ablauf() + gebiet() + fragenAbschnitt([
    ["Was kostet die Besichtigung?", "Nichts. Beratung, Ausmessen und Angebot sind kostenlos und unverbindlich."],
    ["Arbeiten Sie auch für Firmen und Hausverwaltungen?", "Ja. Wir bauen Büros, Praxen und Läden um und richten Mietwohnungen nach dem Auszug wieder her."],
    ["Kommen Sie auch zu mir?", `Wir fahren rund 40&nbsp;km um Leimen, zum Beispiel nach Heidelberg, Mannheim, Wiesloch, Walldorf, Schwetzingen, Sinsheim und Speyer. Ihren Ort können Sie <a class="textlink" href="#gebiet">beim Einsatzgebiet prüfen</a>.`],
    ["Wie komme ich am schnellsten zu einem Angebot?", "Rufen Sie an oder schicken Sie per WhatsApp eine kurze Beschreibung und ein paar Fotos. Dann vereinbaren wir einen Termin vor Ort."]
  ], { oben: false }) + kontakt() + `  </main>
` + fuss();
}

// ---------- Leistungsseiten ----------

function leistungsseite(l) {
  const andere = LEISTUNGEN.filter((x) => x !== l)
    .map((x) => kachel(x, { sizes: "(max-width: 720px) 100vw, 33vw" })).join("");
  const punkte = l.punkte.map(([t, p]) => `
          <li data-zeigen>
            <h3>${t}</h3>
            <p>${p}</p>
          </li>`).join("");
  const auswahl = l.auswahl || { "Böden": "Boden" }[l.name] || l.name;
  const jsonld = `  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "${l.name}",
    "areaServed": ["Leimen", "Heidelberg", "Mannheim", "Wiesloch", "Walldorf", "Schwetzingen", "Hockenheim", "Sinsheim", "Speyer"],
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Kameri – alles rund ums Haus",
      "telephone": "+49 152 36695793",
      "address": { "@type": "PostalAddress", "streetAddress": "Julius-Becker-Straße 14", "postalCode": "69181", "addressLocality": "Leimen", "addressCountry": "DE" }
    }
  }
  </script>
`;
  return kopf({ titel: l.titel, beschreibung: l.beschreibung, aktiv: l.datei, ogBild: l.foto, jsonld }) + `
  <main id="inhalt">
    <section class="seitenkopf" aria-labelledby="titel">
      <div class="seitenkopf-text">
        <nav class="pfad" aria-label="Sie sind hier">
          <a href="index.html">Start</a><span aria-hidden="true">/</span><a href="index.html#leistungen">Leistungen</a><span aria-hidden="true">/</span><span aria-current="page">${l.name}</span>
        </nav>
        <h1 id="titel">${l.h1}</h1>
        <p class="seitenkopf-lead">${l.lead}</p>
        <div class="aktionen">
          <a class="knopf knopf-rot" href="${TEL}">${icon("telefon")}${TEL_TEXT} anrufen</a>
          <a class="knopf knopf-weiss" href="#kontakt">Anfrage schreiben</a>
        </div>
      </div>
      <div class="seitenkopf-bild">
        ${foto(l.foto, l.alt, { lazy: false, prio: true, sizes: "(max-width: 860px) 100vw, 45vw" })}
      </div>
    </section>

    <section class="abschnitt abschnitt-oben-frei" aria-labelledby="punkte-titel">
      <div class="innen">
        <div class="abschnitt-kopf" data-zeigen>
          <h2 id="punkte-titel">${l.punkteTitel}</h2>
          <p>Ihr Vorhaben ist nicht dabei? Fragen Sie einfach. Beratung und Angebot sind kostenlos.</p>
        </div>
        <ul class="punkte${l.punkte.length === 4 ? " punkte-zwei" : ""}">${punkte}
        </ul>
      </div>
    </section>
` + ablauf(l.schritt4) + fragenAbschnitt(l.fragen, { titel: l.fragenTitel || "Häufige Fragen" }) + `
    <section class="abschnitt abschnitt-oben-frei" aria-labelledby="weitere-titel">
      <div class="innen">
        <div class="abschnitt-kopf" data-zeigen>
          <h2 id="weitere-titel">Weitere Leistungen</h2>
        </div>
        <div class="kacheln kacheln-drei">${andere}
        </div>
      </div>
    </section>
` + kontakt(auswahl, l.beispiel) + `  </main>
` + fuss();
}

// ---------- Rechtsseiten ----------

function rechtsseite(titel, datei) {
  const inhalt = readFileSync(new URL(`recht/${datei}`, import.meta.url), "utf8");
  return kopf({ titel: `${titel} – Kameri`, noindex: true }) + `
  <main id="inhalt">
${inhalt}  </main>
` + fuss();
}

// ---------- Schreiben ----------

const ziel = new URL("../", import.meta.url);
const seiten = {
  "index.html": startseite(),
  "impressum.html": rechtsseite("Impressum", "impressum.html"),
  "datenschutz.html": rechtsseite("Datenschutzerklärung", "datenschutz.html")
};
for (const l of LEISTUNGEN) seiten[l.datei] = leistungsseite(l);

for (const [datei, html] of Object.entries(seiten)) {
  writeFileSync(new URL(datei, ziel), html);
  console.log("geschrieben:", datei);
}
