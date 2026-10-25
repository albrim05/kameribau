// Kopf bekommt beim Scrollen einen Schatten
(function () {
  var kopf = document.querySelector(".kopf");
  if (!kopf) return;
  function pruefe() { kopf.classList.toggle("gescrollt", window.scrollY > 8); }
  window.addEventListener("scroll", pruefe, { passive: true });
  pruefe();
})();

// Abschnitte einblenden, sobald sie ins Bild kommen (einmal, Teile nacheinander)
(function () {
  var teile = document.querySelectorAll("[data-zeigen]");
  var zaehler = new Map();
  teile.forEach(function (el) {
    var eltern = el.parentElement;
    var n = zaehler.get(eltern) || 0;
    el.style.setProperty("--verzug", Math.min(n, 4) * 70 + "ms");
    zaehler.set(eltern, n + 1);
  });

  if (!("IntersectionObserver" in window)) {
    teile.forEach(function (el) { el.classList.add("ist-da"); });
    return;
  }
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

// Kommen Sie zu mir? Entfernung ab Leimen (Luftlinie)
(function () {
  var form = document.getElementById("ortcheck");
  if (!form) return;

  var leimen = [49.3475, 8.6936];
  var orte = {
    "Leimen": [49.3475, 8.6936], "St. Ilgen": [49.3240, 8.6680], "Gauangelloch": [49.3600, 8.7600],
    "Nußloch": [49.3236, 8.6958], "Sandhausen": [49.3436, 8.6589], "Walldorf": [49.3064, 8.6428],
    "Wiesloch": [49.2940, 8.6987], "Heidelberg": [49.3988, 8.6724], "Eppelheim": [49.4019, 8.6331],
    "Dossenheim": [49.4500, 8.6500], "Schriesheim": [49.4736, 8.6597], "Neckargemünd": [49.3906, 8.7961],
    "Bammental": [49.3550, 8.7790], "Gaiberg": [49.3650, 8.7450], "Mauer": [49.3400, 8.7980],
    "Meckesheim": [49.3220, 8.8180], "Wiesenbach": [49.3600, 8.8030], "Dielheim": [49.2830, 8.7370],
    "Rauenberg": [49.2690, 8.7040], "Mühlhausen": [49.2470, 8.7280], "Malsch": [49.2460, 8.6830],
    "St. Leon-Rot": [49.2650, 8.6000], "Reilingen": [49.2970, 8.5650], "Hockenheim": [49.3219, 8.5470],
    "Oftersheim": [49.3650, 8.5830], "Plankstadt": [49.3940, 8.5960], "Schwetzingen": [49.3833, 8.5722],
    "Brühl": [49.4000, 8.5330], "Ketsch": [49.3660, 8.5270], "Edingen-Neckarhausen": [49.4560, 8.6070],
    "Ladenburg": [49.4730, 8.6090], "Ilvesheim": [49.4710, 8.5670], "Mannheim": [49.4875, 8.4660],
    "Ludwigshafen": [49.4774, 8.4452], "Speyer": [49.3173, 8.4412], "Weinheim": [49.5450, 8.6650],
    "Hirschberg": [49.5060, 8.6600], "Hemsbach": [49.5900, 8.6530], "Viernheim": [49.5400, 8.5780],
    "Sinsheim": [49.2530, 8.8790], "Waibstadt": [49.2960, 8.9180], "Wilhelmsfeld": [49.4700, 8.7500],
    "Schönau": [49.4360, 8.8090], "Eberbach": [49.4640, 8.9880], "Östringen": [49.2190, 8.7110],
    "Bad Schönborn": [49.2090, 8.6470], "Kraichtal": [49.1400, 8.7400], "Bruchsal": [49.1240, 8.5980],
    "Eppingen": [49.1370, 8.9110], "Bad Rappenau": [49.2380, 9.1020], "Mosbach": [49.3530, 9.1450],
    "Frankenthal": [49.5330, 8.3500], "Lampertheim": [49.5970, 8.4720], "Heppenheim": [49.6420, 8.6380],
    "Haßloch": [49.3630, 8.2580], "Neustadt an der Weinstraße": [49.3500, 8.1390],
    "Karlsruhe": [49.0069, 8.4037], "Heilbronn": [49.1427, 9.2109], "Darmstadt": [49.8728, 8.6512]
  };

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

  function km(a, b) {
    var r = 6371, rad = Math.PI / 180;
    var dLat = (b[0] - a[0]) * rad, dLon = (b[1] - a[1]) * rad;
    var h = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(a[0] * rad) * Math.cos(b[0] * rad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return 2 * r * Math.asin(Math.sqrt(h));
  }

  var antwort = document.getElementById("ort-antwort");
  var anruf = ' <a href="tel:+4915236695793">0152 36695793</a>';

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var eingabe = document.getElementById("ort-eingabe").value;
    if (!eingabe.trim()) {
      antwort.textContent = "Bitte geben Sie einen Ort ein.";
      return;
    }
    var name = index[schluessel(eingabe)];
    if (!name) {
      antwort.innerHTML = "Den Ort haben wir nicht in der Liste. Rufen Sie kurz an, dann sagen wir Ihnen, ob es passt:" + anruf;
      return;
    }
    if (name === "Leimen" || name === "St. Ilgen") {
      antwort.textContent = name + ": Da sind wir zu Hause.";
      return;
    }
    var d = Math.round(km(leimen, orte[name]));
    if (d <= 40) {
      antwort.textContent = name + ": ca. " + d + " km von uns. Da kommen wir hin.";
    } else {
      antwort.innerHTML = name + ": ca. " + d + " km, etwas weiter als sonst. Rufen Sie trotzdem an, dann sprechen wir darüber:" + anruf;
    }
  });
})();

// Jahreszahl im Fuß
document.querySelectorAll("[data-jahr]").forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// Anfrageformular: prüft die Angaben und öffnet eine fertige E-Mail
(function () {
  var form = document.getElementById("anfrage");
  if (!form) return;

  var feld = function (id) { return document.getElementById(id); };
  var status = form.querySelector(".formular-status");

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

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    status.textContent = "";
    var erstes = pruefen();
    if (erstes) {
      erstes.focus();
      return;
    }

    var d = new FormData(form);
    var zeilen = [
      "Hallo Herr Kameri,",
      "",
      d.get("Nachricht").trim(),
      "",
      "Leistung: " + d.get("Leistung"),
      "Ort: " + (d.get("Ort").trim() || "–"),
      "",
      d.get("Name").trim(),
      d.get("Kontakt").trim()
    ];
    window.location.href = "mailto:kameribau@hotmail.com"
      + "?subject=" + encodeURIComponent("Anfrage über die Website: " + d.get("Leistung"))
      + "&body=" + encodeURIComponent(zeilen.join("\n"));
    status.textContent = "Ihr E-Mail-Programm sollte sich jetzt öffnen. Falls nicht: kameribau@hotmail.com oder 0152 36695793.";
  });

  form.addEventListener("input", function (ev) {
    if (ev.target.getAttribute("aria-invalid") === "true") pruefen();
  });
})();
