---
name: Kameri – alles rund ums Haus
description: Hell und modern mit dunklen Abschnitten – fette Geist-Überschriften, Bildercollage mit runden Ecken, Pill-Knöpfe, Rot für Handlungen.
colors:
  grund: "#fafaf9"
  weiss: "#ffffff"
  flaeche: "#f4f4f2"
  linie: "#e7e5e4"
  tinte: "#18181b"
  text: "#3f3f46"
  leise: "#71717a"
  akzent-grau: "#84848c"
  rot: "#c2262b"
  rot-tief: "#a51f24"
  feldrand: "#8b8b93"
  platzhalter: "#6b6b73"
  dunkel: "#141416"
  dunkel-karte: "#1e1e22"
  dunkel-linie: "#2f2f35"
  dunkel-text: "#d4d4d8"
  dunkel-leise: "#a1a1aa"
typography:
  h1:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.5rem + 3.9vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  h2:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.4rem + 2.4vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  h3:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  text:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  klein:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  klein: "12px"
  mittel: "18px"
  gross: "24px"
  pill: "999px"
spacing:
  rand: "clamp(20px, 4vw, 56px)"
  breite: "1320px"
  abstand: "clamp(88px, 10vw, 144px)"
  kopf: "88px"
components:
  knopf-rot:
    backgroundColor: "{colors.rot}"
    textColor: "{colors.weiss}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "54px"
  knopf-rot-hover:
    backgroundColor: "{colors.rot-tief}"
    textColor: "{colors.weiss}"
  knopf-weiss:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "54px"
  knopf-dunkel:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.weiss}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "54px"
  karte:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.text}"
    rounded: "{rounded.gross}"
    padding: "26px 28px"
  eingabefeld:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.klein}"
    padding: "12px 16px"
    height: "52px"
---

# Design System: Kameri – alles rund ums Haus

## Overview

**Creative North Star: "Hell, ruhig, hochwertig"**

Vom Inhaber aus drei Entwürfen gewählt: Entwurf B (hell und modern, Bildercollage) als Grundlage, dazu dunkle Abschnitte aus Entwurf A. Die Seite steht auf warm-hellem Grund, trägt fette, eng gesetzte Überschriften in Geist, große Fotos mit runden Ecken und weiche Pill-Knöpfe. Zwei dunkle Abschnitte (Ablauf und Kontakt) geben Gewicht und wirken edel. Rot bleibt für Handlungen.

Abgelehnt und nicht wieder aufnehmen: Gipskarton-Motive mit Punkten und Kästen, der Firmenname als riesige Schrift, die erste schlichte Fassung mit dünner Schrift (vom Inhaber mit 4/10 bewertet).

**Key Characteristics:**
- Start: Hinweis-Pill, große Überschrift mit grauem Zusatz, Pill-Knöpfe, Collage aus drei Fotos
- Drei Kacheln: 0 €, 40 km, 1 Ansprechpartner
- Leistungen als weiße Karten mit runden Ecken; Trockenbau als breite Karte oben
- Dunkle Abschnitte mit dunklen Karten und roten Schrittnummern
- Schwebende Pill-Leiste am Handy

## Colors

### Primary
- **Logorot** (`#c2262b`): Hauptknöpfe, Schrittnummern, Punkt im Hinweis, Leimen auf der Karte. Hover `#a51f24`.

### Neutral
- **Grund** (`#fafaf9`), **Weiß** für Karten, **Linie** (`#e7e5e4`) als 1px-Rand der Karten.
- **Tinte** (`#18181b`), **Text** (`#3f3f46`), **Leise** (`#71717a`).
- **Dunkel** (`#141416`) mit **dunklen Karten** (`#1e1e22`) für Ablauf und Kontakt.

### Named Rules
**The Red Means Act Rule.** Rot nur auf Handlungen und kleinen Orientierungszeichen.

## Typography

**Schrift:** Geist (400/500/600), selbst gehostet in `schriften/`.

### Hierarchy
- **H1** (600, bis 80px, −0.04em), letzter Teil grau (`#84848c`).
- **H2** (600, bis 56px, −0.04em).
- **H3** (600, 22px).
- **Lead** 18–20px, **Text** 17px, **Klein** 15px.

## Layout

Inhalt max. 1320px, Ränder `clamp(20px, 4vw, 56px)`, Abschnittsabstand bis 144px. Karten liegen 14px auseinander. Unter 860px stapeln sich alle Raster; am Handy entfällt die Karte im Einsatzgebiet, und eine schwebende Pill-Leiste bietet Anrufen und WhatsApp. Sie weicht, wenn die Start-Knöpfe oder der Kontaktbereich sichtbar sind oder im Formular getippt wird.

## Elevation & Depth

Karten sind flach mit 1px-Rand. Schatten nur auf schwebenden Dingen: Kopf nach dem Scrollen (über ein Pseudo-Element), Handy-Leiste.

## Shapes

Runde Ecken: Karten und Fotos 24px (Handy 20px), Fragen und Kacheln 18px, Felder 12px, Knöpfe und Hinweise als Pill.

## Components

### Buttons
Pill-Knöpfe, 54px hoch: Rot (Hauptaktion), Weiß mit Rand (WhatsApp), Dunkel (Prüfen), Glas auf dunklem Grund. Drücken `scale(0.97)` in 140ms.

### Navigation
Logo links (60px), Navigation als weiße Pill-Gruppe, dunkler Pill-Knopf mit Telefonnummer rechts.

### Karten
Weiß, 1px Rand, 24px Ecken; Foto oben (4:3) oder links (Trockenbau-Karte), Text darunter. Stichworte als kleine Pills mit Rand.

### Inputs / Fields
52px, 1px Rand `#8b8b93`, 12px Ecken, Fokus in Tinte mit weichem Ring, Fehler rot. Formular sendet über Web3Forms.

### Fragen
Weiße Karten, Plus im grauen Kreis, beim Öffnen rot und gedreht.

## Do's and Don'ts

### Do:
- **Do** eigene Projektfotos in die Collage und die Karten setzen (gleiche Dateinamen in `bilder/fotos/`).
- **Do** kurze, konkrete Sätze im Ton des Inhabers.

### Don't:
- **Don't** Gipskarton-Muster, Riesenschrift-Namen, dünne Schrift-Optik der ersten Fassung.
- **Don't** erfundene Versprechen.
- **Don't** Beispielfotos als eigene Projekte ausgeben.
