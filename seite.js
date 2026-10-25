// Schlüssel von Web3Forms (web3forms.com). Solange er leer ist, öffnet das Formular das E-Mail-Programm.
var WEB3FORMS_SCHLUESSEL = "";

var TELEFON_LINK = '<a href="tel:+4915236695793">0152 36695793</a>';
var HAKEN_SVG = '<svg aria-hidden="true"><use href="#i-haken"/></svg>';

// Kopf bekommt beim Scrollen einen Schatten
(function () {
  var kopf = document.querySelector(".kopf");
  if (!kopf) return;
  function pruefe() { kopf.classList.toggle("gescrollt", window.scrollY > 8); }
  window.addEventListener("scroll", pruefe, { passive: true });
  pruefe();
})();

// Abschnitte einblenden, sobald sie ins Bild kommen (einmal, Teile nacheinander).
// Versteckt wird erst hier, damit ohne Skript alles sichtbar bleibt.
(function () {
  var teile = document.querySelectorAll("[data-zeigen]");
  if (!teile.length || !("IntersectionObserver" in window)) return;

  var zaehler = new Map();
  teile.forEach(function (el) {
    var eltern = el.parentElement;
    var n = zaehler.get(eltern) || 0;
    el.style.setProperty("--verzug", Math.min(n, 4) * 70 + "ms");
    zaehler.set(eltern, n + 1);
  });

  document.documentElement.classList.add("bewegung");
  var beobachter = new IntersectionObserver(function (eintraege) {
    eintraege.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("ist-da");
        beobachter.unobserve(e.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
  teile.forEach(function (el) { beobachter.observe(el); });
})();

// Handy-Leiste weicht, wenn dieselben Knöpfe schon zu sehen sind oder im Formular getippt wird
(function () {
  var leiste = document.querySelector("[data-leiste]");
  if (!leiste || !("IntersectionObserver" in window)) return;

  var sichtbar = new Set();
  var tippt = false;
  function aktualisiere() {
    leiste.classList.toggle("weg", tippt || sichtbar.size > 0);
  }

  var beobachter = new IntersectionObserver(function (eintraege) {
    eintraege.forEach(function (e) {
      if (e.isIntersecting) sichtbar.add(e.target); else sichtbar.delete(e.target);
    });
    aktualisiere();
  });
  document.querySelectorAll(".start .aktionen, #kontakt").forEach(function (el) { beobachter.observe(el); });

  var form = document.getElementById("anfrage");
  if (form) {
    form.addEventListener("focusin", function () { tippt = true; aktualisiere(); });
    form.addEventListener("focusout", function () { tippt = false; aktualisiere(); });
  }
})();

// Kommen Sie zu mir? Entfernung ab Leimen (Luftlinie), auch nach Postleitzahl
(function () {
  var form = document.getElementById("ortcheck");
  if (!form) return;

  var leimen = [49.3475, 8.6936];
  var orte = {
    "Leimen": [49.3475, 8.6936], "St. Ilgen": [49.3240, 8.6680], "Gauangelloch": [49.3600, 8.7600],
    "Lingental": [49.3570, 8.7230], "Ochsenbach": [49.3520, 8.7480],
    "Nußloch": [49.3236, 8.6958], "Sandhausen": [49.3436, 8.6589], "Walldorf": [49.3064, 8.6428],
    "Wiesloch": [49.2940, 8.6987], "Heidelberg": [49.3988, 8.6724], "Eppelheim": [49.4019, 8.6331],
    "Dossenheim": [49.4500, 8.6500], "Schriesheim": [49.4736, 8.6597], "Neckargemünd": [49.3906, 8.7961],
    "Neckarsteinach": [49.4066, 8.8400], "Bammental": [49.3550, 8.7790], "Gaiberg": [49.3650, 8.7450],
    "Mauer": [49.3400, 8.7980], "Meckesheim": [49.3220, 8.8180], "Wiesenbach": [49.3600, 8.8030],
    "Dielheim": [49.2830, 8.7370], "Rauenberg": [49.2690, 8.7040], "Mühlhausen": [49.2470, 8.7280],
    "Malsch": [49.2460, 8.6830], "St. Leon-Rot": [49.2650, 8.6000], "Reilingen": [49.2970, 8.5650],
    "Hockenheim": [49.3219, 8.5470], "Oftersheim": [49.3650, 8.5830], "Plankstadt": [49.3940, 8.5960],
    "Schwetzingen": [49.3833, 8.5722], "Brühl": [49.4000, 8.5330], "Ketsch": [49.3660, 8.5270],
    "Edingen-Neckarhausen": [49.4560, 8.6070], "Ladenburg": [49.4730, 8.6090], "Ilvesheim": [49.4710, 8.5670],
    "Mannheim": [49.4875, 8.4660], "Ludwigshafen": [49.4774, 8.4452], "Speyer": [49.3173, 8.4412],
    "Weinheim": [49.5450, 8.6650], "Hirschberg": [49.5060, 8.6600], "Hemsbach": [49.5900, 8.6530],
    "Viernheim": [49.5400, 8.5780], "Bensheim": [49.6810, 8.6170], "Sinsheim": [49.2530, 8.8790],
    "Waibstadt": [49.2960, 8.9180], "Wilhelmsfeld": [49.4700, 8.7500], "Schönau": [49.4360, 8.8090],
    "Eberbach": [49.4640, 8.9880], "Östringen": [49.2190, 8.7110], "Bad Schönborn": [49.2090, 8.6470],
    "Kraichtal": [49.1400, 8.7400], "Bruchsal": [49.1240, 8.5980], "Eppingen": [49.1370, 8.9110],
    "Bad Rappenau": [49.2380, 9.1020], "Mosbach": [49.3530, 9.1450], "Frankenthal": [49.5330, 8.3500],
    "Lampertheim": [49.5970, 8.4720], "Heppenheim": [49.6420, 8.6380], "Haßloch": [49.3630, 8.2580],
    "Neustadt an der Weinstraße": [49.3500, 8.1390], "Karlsruhe": [49.0069, 8.4037],
    "Heilbronn": [49.1427, 9.2109], "Darmstadt": [49.8728, 8.6512]
  };

  var plz = {
    "69181": "Leimen", "69207": "Sandhausen", "69226": "Nußloch", "69190": "Walldorf", "69168": "Wiesloch",
    "69214": "Eppelheim", "69221": "Dossenheim", "69198": "Schriesheim", "69151": "Neckargemünd",
    "69239": "Neckarsteinach", "69245": "Bammental", "69251": "Gaiberg", "69256": "Mauer",
    "74909": "Meckesheim", "69257": "Wiesenbach", "69234": "Dielheim", "69231": "Rauenberg",
    "69242": "Mühlhausen", "69254": "Malsch", "68789": "St. Leon-Rot", "68799": "Reilingen",
    "68766": "Hockenheim", "68723": "Schwetzingen", "68782": "Brühl", "68775": "Ketsch",
    "68535": "Edingen-Neckarhausen", "68526": "Ladenburg", "68549": "Ilvesheim", "67346": "Speyer",
    "69469": "Weinheim", "69493": "Hirschberg", "69502": "Hemsbach", "68519": "Viernheim",
    "64625": "Bensheim", "74889": "Sinsheim", "74915": "Waibstadt", "69259": "Wilhelmsfeld",
    "69250": "Schönau", "69412": "Eberbach", "76684": "Östringen", "76669": "Bad Schönborn",
    "76703": "Kraichtal", "76646": "Bruchsal", "75031": "Eppingen", "74906": "Bad Rappenau",
    "74821": "Mosbach", "67227": "Frankenthal", "68623": "Lampertheim", "64646": "Heppenheim",
    "67454": "Haßloch", "67433": "Neustadt an der Weinstraße", "67434": "Neustadt an der Weinstraße"
  };
  function ortAusPlz(zahl) {
    if (plz[zahl]) return plz[zahl];
    var n = parseInt(zahl, 10);
    if (n >= 69115 && n <= 69126) return "Heidelberg";
    if (n >= 68159 && n <= 68309) return "Mannheim";
    if (n >= 67059 && n <= 67071) return "Ludwigshafen";
    if (n >= 76131 && n <= 76229) return "Karlsruhe";
    if (n >= 74072 && n <= 74081) return "Heilbronn";
    if (n >= 64283 && n <= 64297) return "Darmstadt";
    return null;
  }

  var liste = document.getElementById("ortliste");
  Object.keys(orte).sort(function (a, b) { return a.localeCompare(b, "de"); }).forEach(function (name) {
    var o = document.createElement("option");
    o.value = name;
    liste.appendChild(o);
  });

  function schluessel(s) {
    return s.toLowerCase().trim()
      .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
      .replace(/^st\.?\s*/, "sankt ").replace(/[^a-z ]/g, " ").replace(/\s+/g, " ").trim();
  }
  var index = {};
  Object.keys(orte).forEach(function (name) { index[schluessel(name)] = name; });
  index["ludwigshafen am rhein"] = "Ludwigshafen";
  index["neustadt"] = "Neustadt an der Weinstraße";
  index["hassloch"] = "Haßloch";
  index["bensheim an der bergstrasse"] = "Bensheim";

  // Findet auch Ortsteile wie „Heidelberg-Rohrbach“ oder „69181 Leimen“
  function finde(eingabe) {
    var zahl = eingabe.match(/\b\d{5}\b/);
    if (zahl) {
      var ausPlz = ortAusPlz(zahl[0]);
      if (ausPlz) return ausPlz;
    }
    var k = schluessel(eingabe.replace(/\b\d{5}\b/, ""));
    if (index[k]) return index[k];
    var teile = k.split(" ");
    for (var i = teile.length - 1; i > 0; i--) {
      var vorne = teile.slice(0, i).join(" ");
      if (index[vorne]) return index[vorne];
    }
    return null;
  }

  function km(a, b) {
    var r = 6371, rad = Math.PI / 180;
    var dLat = (b[0] - a[0]) * rad, dLon = (b[1] - a[1]) * rad;
    var h = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(a[0] * rad) * Math.cos(b[0] * rad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return 2 * r * Math.asin(Math.sqrt(h));
  }

  var antwort = document.getElementById("ort-antwort");
  function zeige(art, html) {
    antwort.className = "ortcheck-antwort" + (art ? " " + art : "");
    antwort.innerHTML = html;
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var eingabe = document.getElementById("ort-eingabe").value;
    if (!eingabe.trim()) {
      zeige("weit", "Bitte geben Sie einen Ort oder eine Postleitzahl ein.");
      return;
    }
    var name = finde(eingabe);
    if (!name) {
      zeige("weit", "Diesen Ort kennt unsere Liste nicht. Rufen Sie kurz an, dann sagen wir Ihnen, ob es passt: " + TELEFON_LINK);
      return;
    }
    var d = Math.round(km(leimen, orte[name]));
    if (d <= 3 && (name === "Leimen" || name === "St. Ilgen" || name === "Lingental" || name === "Ochsenbach" || name === "Gauangelloch")) {
      zeige("ja", HAKEN_SVG + "<span>" + name + ": Da sind wir zu Hause.</span>");
    } else if (d <= 40) {
      zeige("ja", HAKEN_SVG + "<span>" + name + ": ca. " + d + " km von uns. Da kommen wir hin.</span>");
    } else {
      zeige("weit", name + ": ca. " + d + " km, etwas weiter als sonst. Rufen Sie trotzdem an, dann sprechen wir darüber: " + TELEFON_LINK);
    }
  });
})();

// Jahreszahl im Fuß
document.querySelectorAll("[data-jahr]").forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// Anfrageformular: prüft die Angaben und sendet über Web3Forms (ohne Schlüssel: fertige E-Mail)
(function () {
  var form = document.getElementById("anfrage");
  if (!form) return;

  var feld = function (id) { return document.getElementById(id); };
  var status = form.querySelector(".formular-status");
  var knopf = form.querySelector('button[type="submit"]');
  var mitDienst = WEB3FORMS_SCHLUESSEL.length > 0;

  var hinweis = form.querySelector("[data-hinweis-mail]");
  if (mitDienst && hinweis) hinweis.textContent = "Ihre Anfrage geht direkt an uns.";

  function setze(input, fehlerId, text) {
    input.setAttribute("aria-invalid", text ? "true" : "false");
    feld(fehlerId).textContent = text;
  }

  function pruefen() {
    var name = feld("f-name");
    var kontakt = feld("f-kontakt");
    var text = feld("f-nachricht");
    var erstes = null;

    if (!name.value.trim()) {
      setze(name, "f-name-fehler", "Bitte geben Sie Ihren Namen an.");
      erstes = erstes || name;
    } else {
      setze(name, "f-name-fehler", "");
    }

    var wert = kontakt.value.trim();
    var istTel = wert.replace(/[^0-9]/g, "").length >= 6;
    var istMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(wert);
    if (!istTel && !istMail) {
      setze(kontakt, "f-kontakt-fehler", wert
        ? "Das sieht weder nach Telefonnummer noch nach E-Mail aus. Bitte prüfen Sie die Angabe."
        : "Wie erreichen wir Sie? Bitte Telefonnummer oder E-Mail angeben.");
      erstes = erstes || kontakt;
    } else {
      setze(kontakt, "f-kontakt-fehler", "");
    }

    if (!text.value.trim()) {
      setze(text, "f-nachricht-fehler", "Bitte schreiben Sie kurz, was gemacht werden soll.");
      erstes = erstes || text;
    } else {
      setze(text, "f-nachricht-fehler", "");
    }
    return erstes;
  }

  function daten() {
    var d = new FormData(form);
    var leistung = d.get("Leistung") || "nicht angegeben";
    return {
      name: d.get("Name").trim(),
      kontakt: d.get("Kontakt").trim(),
      ort: d.get("Ort").trim() || "nicht angegeben",
      leistung: leistung,
      nachricht: d.get("Nachricht").trim(),
      falle: d.get("botcheck")
    };
  }

  function perMail(a) {
    var zeilen = [
      "Hallo Herr Kameri,", "", a.nachricht, "",
      "Leistung: " + a.leistung, "Ort: " + a.ort, "", a.name, a.kontakt
    ];
    window.location.href = "mailto:kameribau@hotmail.com"
      + "?subject=" + encodeURIComponent("Anfrage über die Website: " + a.leistung)
      + "&body=" + encodeURIComponent(zeilen.join("\n"));
    status.className = "formular-status";
    status.textContent = "Ihr E-Mail-Programm sollte sich jetzt öffnen. Bitte senden Sie die Nachricht dort ab. Falls sich nichts öffnet: kameribau@hotmail.com oder 0152 36695793.";
  }

  function danke() {
    var box = document.createElement("div");
    box.className = "formular-danke";
    box.setAttribute("role", "status");
    box.setAttribute("tabindex", "-1");
    box.innerHTML = "<h3>" + HAKEN_SVG + "Danke, Ihre Anfrage ist angekommen.</h3>"
      + "<p>Wir melden uns bei Ihnen. Wenn es eilt, erreichen Sie uns unter " + TELEFON_LINK + ".</p>";
    form.replaceWith(box);
    box.focus();
  }

  function fehlgeschlagen() {
    status.className = "formular-status fehlgeschlagen";
    status.innerHTML = "Das Senden hat nicht geklappt. Ihre Angaben sind noch da. Versuchen Sie es noch einmal oder rufen Sie an: " + TELEFON_LINK + ".";
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    status.textContent = "";
    var erstes = pruefen();
    if (erstes) {
      erstes.focus();
      return;
    }
    var a = daten();
    if (a.falle) return;

    if (!mitDienst) {
      perMail(a);
      return;
    }

    form.setAttribute("aria-busy", "true");
    knopf.disabled = true;
    knopf.textContent = "Wird gesendet …";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_SCHLUESSEL,
        subject: "Anfrage über die Website: " + a.leistung,
        from_name: "Website Kameri",
        Name: a.name,
        Kontakt: a.kontakt,
        Ort: a.ort,
        Leistung: a.leistung,
        Nachricht: a.nachricht,
        botcheck: false
      })
    })
      .then(function (antwort) { return antwort.json(); })
      .then(function (ergebnis) {
        if (ergebnis && ergebnis.success) danke(); else throw new Error("nicht gesendet");
      })
      .catch(function () {
        form.removeAttribute("aria-busy");
        knopf.disabled = false;
        knopf.textContent = "Anfrage senden";
        fehlgeschlagen();
      });
  });

  form.addEventListener("input", function (ev) {
    if (ev.target.getAttribute("aria-invalid") === "true") pruefen();
  });
})();
