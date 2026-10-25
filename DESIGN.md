---
name: Kameri – alles rund ums Haus
description: Modern und hochwertig – weißer Grund, große Fotos, leichte Überschriften, Rot nur für Handlungen.
colors:
  weiss: "#ffffff"
  flaeche: "#f4f4f3"
  flaeche-tief: "#e6e6e4"
  linie: "#d6d6d3"
  tinte: "#1f1f1f"
  text: "#3a3a3a"
  leise: "#676765"
  platzhalter: "#6f6f6d"
  rot: "#c2262b"
  rot-tief: "#a41f24"
  dunkel: "#1f1f1f"
  dunkel-text: "#d9d9d6"
  dunkel-leise: "#a7a7a4"
typography:
  h1:
    fontFamily: "Source Sans 3, Source Sans Pro, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.5rem + 3vw, 4.25rem)"
    fontWeight: 300
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  h2:
    fontFamily: "Source Sans 3, Source Sans Pro, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.2vw, 3.25rem)"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  h3:
    fontFamily: "Source Sans 3, Source Sans Pro, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Source Sans 3, Source Sans Pro, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
  text:
    fontFamily: "Source Sans 3, Source Sans Pro, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  klein:
    fontFamily: "Source Sans 3, Source Sans Pro, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  nummer:
    fontFamily: "Source Sans 3, Source Sans Pro, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 1.6rem + 2.6vw, 3.75rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.02em"
rounded:
  keine: "0px"
spacing:
  rand: "clamp(20px, 4vw, 56px)"
  breite: "1320px"
  abstand: "clamp(80px, 10vw, 140px)"
  kopf: "84px"
components:
  knopf-rot:
    backgroundColor: "{colors.rot}"
    textColor: "{colors.weiss}"
    rounded: "{rounded.keine}"
    padding: "0 26px"
    height: "52px"
  knopf-rot-hover:
    backgroundColor: "{colors.rot-tief}"
    textColor: "{colors.weiss}"
  knopf-rahmen:
    backgroundColor: "transparent"
    textColor: "{colors.tinte}"
    rounded: "{rounded.keine}"
    padding: "0 26px"
    height: "52px"
  knopf-rahmen-hover:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.weiss}"
  knopf-dunkel:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.weiss}"
    rounded: "{rounded.keine}"
    padding: "0 26px"
    height: "52px"
  eingabefeld:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.keine}"
    padding: "12px 14px"
    height: "52px"
  chip:
    backgroundColor: "{colors.flaeche}"
    textColor: "{colors.text}"
    rounded: "{rounded.keine}"
    padding: "5px 12px"
---

# Design System: Kameri – alles rund ums Haus

## Overview

**Creative North Star: "Der fertige Raum"**

Die Seite wirkt wie ein frisch renovierter Raum: viel Weiß, helles Holz in den Fotos, ruhige Linienführung. Die Fotos tragen die Seite, die Typografie bleibt leicht und zurückhaltend, das Logo steht normal groß im Kopf. Rot erscheint nur dort, wo der Besucher handeln soll: Anrufen, Senden, kleine Haken und Nummern.

Der Inhaber hat diesen Stil gewählt („modern und hochwertig“) und zwei frühere, auffällige Richtungen abgelehnt (Gipskarton-Motive mit Punkten und Kästen; der Firmenname als riesige Schrift). Diese Seite bleibt bewusst vertraut und sauber.

**Key Characteristics:**
- Geteilter Start: Text links, hohes Foto rechts bis an den Rand
- Leistungen als 2×2-Raster mit großen Fotos, Text und kleinen Stichwort-Chips
- Flächen in Hellgrau statt Linien, ein dunkler Kontaktbereich
- Telefon überall erreichbar, am Handy als feste Leiste unten

## Colors

### Primary
- **Logorot** (`#c2262b`): Hauptknöpfe, Haken, Schrittnummern, Karte (Leimen). Hover `#a41f24`.

### Neutral
- **Tinte** (`#1f1f1f`): Überschriften, dunkle Knöpfe, Kontaktbereich.
- **Text** (`#3a3a3a`) und **Leise** (`#676765`): Fließtext und Nebeninfos.
- **Fläche** (`#f4f4f3`): Bänder, Chips, Fragen-Felder; **Weiß** als Grund.

### Named Rules
**The Red Means Act Rule.** Rot nur auf Handlungen und kleinen Orientierungszeichen. Keine roten Flächen, keine roten Überschriften.

## Typography

**Schrift:** Source Sans 3 (300/400/600/700), selbst gehostet in `schriften/`, dieselbe Familie wie im Logo.

### Hierarchy
- **H1** (300, `clamp(2.5rem, …, 4.25rem)`): nur „Trockenbau in Leimen“.
- **H2** (300, `clamp(2rem, …, 3.25rem)`): Abschnittsüberschriften, höchstens zwei Zeilen.
- **H3** (600, 1.375rem): Leistungen, Schritte, Gruppen.
- **Lead** (400, 18–21px): einleitende Sätze.
- **Text** (400, 17px, 1.6) und **Klein** (15px).

### Named Rules
**The Light Headline Rule.** Große Überschriften in 300, kleine in 600. Keine Versalien-Labels über Überschriften.

## Layout

Inhalt max. 1320px, Ränder `clamp(20px, 4vw, 56px)`, Abschnittsabstand `clamp(80px, 10vw, 140px)`. Kopf klebt oben (84px, Handy 68px). Ab 860px stapeln sich alle Zweispalter; am Handy kommt erst der Text, dann das Foto, und eine feste Leiste unten bietet Anrufen und WhatsApp.

## Elevation & Depth

Flach. Schatten nur auf Dingen, die wirklich schweben: der Kopf nach dem Scrollen und die Leiste am Handy.

## Shapes

Eckig: Knöpfe, Felder, Fotos und Chips ohne Rundung.

## Components

### Buttons
- **Rot**: Hauptaktion (Anrufen, Anfrage senden). **Rahmen**: Nebenaktion (WhatsApp). **Dunkel**: Formular-Knopf auf heller Fläche. **Hell**: Rahmenknopf auf dunklem Grund.
- Drücken: `scale(0.97)` in 140ms; Hover nur bei Maus.

### Chips
Kleine Stichworte unter jeder Leistung, hellgrau, eckig, 15px.

### Inputs / Fields
52px, 1.5px Rand in Linie-Grau, Fokus in Tinte, Fehler in Rot mit Text darunter, Schrift 17px (kein Zoom auf iOS).

### Navigation
Logo links, fünf Ankerlinks mit roter Unterstreichung beim Hover, Telefon-Knopf rechts. Unter 960px nur Logo und Telefon.

### Fragen
`details`-Felder auf Hellgrau mit Plus, das sich beim Öffnen zum Kreuz dreht.

## Do's and Don'ts

### Do:
- **Do** eigene Projektfotos an die Stelle der Beispielfotos setzen (gleiche Dateinamen in `bilder/fotos/`).
- **Do** kurze, konkrete Sätze im Ton des Inhabers schreiben.
- **Do** Telefon und WhatsApp in jeder Ansicht erreichbar halten.

### Don't:
- **Don't** Gipskarton-Muster, gepunktete Kästen oder den Firmennamen als Riesenschrift.
- **Don't** erfundene Versprechen (Jahre, Garantien, Bewertungen).
- **Don't** Beispielfotos als eigene Projekte ausgeben.
- **Don't** Verläufe, Glas-Effekte, Schatten auf ruhenden Elementen.
