// Fugen verspachteln, sobald sie ins Bild kommen
(function () {
  var fugen = document.querySelectorAll(".fuge");
  if (!("IntersectionObserver" in window)) {
    fugen.forEach(function (f) { f.classList.add("verspachtelt"); });
    return;
  }
  var beobachter = new IntersectionObserver(function (eintraege) {
    eintraege.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("verspachtelt");
        beobachter.unobserve(e.target);
      }
    });
  }, { rootMargin: "0px 0px -15% 0px" });
  fugen.forEach(function (f) { beobachter.observe(f); });
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

  function setzeFehler(input, fehlerId, text) {
    var ziel = feld(fehlerId);
    if (input) input.setAttribute("aria-invalid", text ? "true" : "false");
    ziel.textContent = text;
  }

  function pruefen() {
    var name = feld("f-name");
    var tel = feld("f-telefon");
    var mail = feld("f-email");
    var text = feld("f-nachricht");
    var erstes = null;

    if (!name.value.trim()) {
      setzeFehler(name, "f-name-fehler", "Bitte geben Sie Ihren Namen an.");
      erstes = erstes || name;
    } else {
      setzeFehler(name, "f-name-fehler", "");
    }

    var telOk = tel.value.replace(/[^0-9]/g, "").length >= 6;
    var mailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.value.trim());
    if (!telOk && !mailOk) {
      var hinweis = mail.value.trim() && !mailOk
        ? "Die E-Mail-Adresse sieht unvollständig aus. Bitte prüfen Sie sie oder geben Sie eine Telefonnummer an."
        : "Bitte geben Sie eine Telefonnummer oder E-Mail-Adresse an, damit wir Sie erreichen.";
      setzeFehler(null, "f-kontakt-fehler", hinweis);
      tel.setAttribute("aria-invalid", "true");
      mail.setAttribute("aria-invalid", "true");
      erstes = erstes || tel;
    } else {
      setzeFehler(null, "f-kontakt-fehler", "");
      tel.setAttribute("aria-invalid", "false");
      mail.setAttribute("aria-invalid", "false");
    }

    if (!text.value.trim()) {
      setzeFehler(text, "f-nachricht-fehler", "Bitte beschreiben Sie kurz Ihr Vorhaben.");
      erstes = erstes || text;
    } else {
      setzeFehler(text, "f-nachricht-fehler", "");
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

    var daten = new FormData(form);
    var leistung = daten.get("Leistung");
    var zeilen = [
      "Guten Tag,",
      "",
      daten.get("Nachricht").trim(),
      "",
      "Leistung: " + leistung,
      "Ort: " + (daten.get("Ort").trim() || "–"),
      "Kunde: " + daten.get("Kunde"),
      "",
      daten.get("Name").trim(),
      daten.get("Telefon").trim() ? "Telefon: " + daten.get("Telefon").trim() : "",
      daten.get("E-Mail").trim() ? "E-Mail: " + daten.get("E-Mail").trim() : ""
    ].filter(function (z, i, alle) { return z !== "" || alle[i - 1] !== ""; });

    var link = "mailto:kameribau@hotmail.com"
      + "?subject=" + encodeURIComponent("Anfrage über die Website: " + leistung)
      + "&body=" + encodeURIComponent(zeilen.join("\n"));

    window.location.href = link;
    status.textContent = "Ihr E-Mail-Programm sollte sich jetzt öffnen. Falls nicht, schreiben Sie uns direkt an kameribau@hotmail.com oder rufen Sie an: 0152 36695793.";
  });

  form.addEventListener("input", function (ev) {
    if (ev.target.getAttribute("aria-invalid") === "true") pruefen();
  });
})();
