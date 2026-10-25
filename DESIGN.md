---
name: Kameri – alles rund ums Haus
description: Die Website ist eine Wand aus Gipskartonplatten – Logorot, Weiß und Dunkelgrau auf Plattenflächen mit Fugen und Schraubpunkten.
colors:
  rot: "#c2262b"
  rot-tief: "#a01e22"
  grau: "#333333"
  grau-mittel: "#666666"
  text-leise: "#555a57"
  weiss: "#ffffff"
  platte: "#f3f4f2"
  platte-hell: "#fafbfa"
  fuge: "#d5d8d5"
  fuge-linie: "#c7cbc8"
  schraube: "#a3a8a5"
  spachtel: "#e7e9e6"
typography:
  display:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6.4vw, 5.4rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.2vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  aufdruck:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    letterSpacing: "0.14em"
rounded:
  knopf: "3px"
spacing:
  rand: "clamp(16px, 4vw, 48px)"
  fuge: "22px"
  raster: "40px"
  abschnitt: "clamp(56px, 8vw, 104px)"
components:
  knopf-voll:
    backgroundColor: "{colors.rot}"
    textColor: "{colors.weiss}"
    rounded: "{rounded.knopf}"
    padding: "12px 22px"
    height: "48px"
  knopf-voll-hover:
    backgroundColor: "{colors.rot-tief}"
    textColor: "{colors.weiss}"
  knopf-rand:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.rot}"
    rounded: "{rounded.knopf}"
    padding: "12px 22px"
    height: "48px"
  knopf-rand-hover:
    backgroundColor: "{colors.rot}"
    textColor: "{colors.weiss}"
  eingabefeld:
    backgroundColor: "{colors.platte-hell}"
    textColor: "{colors.grau}"
    rounded: "{rounded.knopf}"
    padding: "11px 13px"
    height: "48px"
  platte:
    backgroundColor: "{colors.platte}"
    textColor: "{colors.grau}"
    padding: "clamp(56px, 8vw, 104px) clamp(28px, 5vw, 72px)"
---

# Design System: Kameri – alles rund ums Haus

## Overview

**Creative North Star: "Die Plattenwand"**

Die Website ist aus dem Material gebaut, das Kameri täglich verbaut: Jeder Abschnitt ist eine Gipskartonplatte mit Schraubpunkten an den Kanten, zwischen den Platten liegt eine Fuge, die beim Scrollen verspachtelt wird. Ganz oben und ganz unten läuft der rote Kantenaufdruck, wie ihn Hersteller auf ihre Platten drucken. Die Farben kommen ausschließlich aus dem Logo: Rot für Handlung und Betonung, Dunkelgrau für Text und eine dunkle Platte, Weiß und helles Plattengrau als Grund.

Die Seite verkauft nichts mit Effekten. Sie zeigt in der ersten Ansicht, was gemacht wird, wo, und wie man anruft. Der Wiedererkennungswert liegt im Material, nicht in Dekoration.

**Key Characteristics:**
- Abschnitte als Platten mit Schraubpunkt-Raster an allen vier Kanten
- Fugen zwischen den Platten statt Abstandsflächen oder Trennlinien
- Rotes Stempelfeld (doppelter Rahmen) als Handlungsblock
- Kontaktbereich als vollflächig rote Platte, „Warum Kameri“ als dunkelgraue Platte
- Schmale, kräftige Groteske für Überschriften, ruhige Groteske für Text

## Colors

Palette aus dem Logo, keine weiteren Buntfarben.

### Primary
- **Logorot** (`#c2262b`): Handlungen (Anrufen, Senden), die Hauptleistung Trockenbau, Kantenaufdruck, Stempelfeld, Kontaktplatte. Hover: `#a01e22`.

### Neutral
- **Dunkelgrau** (`#333333`): Text, Überschriften, dunkle Platte, gewählte Optionen.
- **Leises Grau** (`#555a57`): Fließtext neben Überschriften, Bildunterschriften.
- **Weiß** (`#ffffff`): Stempelfeld, Hauptplatte Trockenbau, Formular.
- **Platte** (`#f3f4f2`) und **Platte hell** (`#fafbfa`): Plattenflächen.
- **Fuge** (`#d5d8d5`) und **Fugenlinie** (`#c7cbc8`): Seitenhintergrund und Fugen.
- **Schraube** (`#a3a8a5`): Schraubpunkte; auf dunkler Platte `#5c5f5d`, auf roter Platte `#9b1b1f`.

### Named Rules
**The Logo Palette Rule.** Nur Rot, Weiß und Grautöne. Rot trägt Handlung und Betonung; es wird nie als bloße Zierfläche verteilt, sondern besetzt ganze Platten (Kontakt) oder klare Handlungselemente.

## Typography

**Display Font:** Barlow Semi Condensed 600/700 (selbst gehostet, `schriften/`)
**Body Font:** Barlow 400/500/600 (selbst gehostet)

Barlow hat die nüchterne Anmutung von Baustellen- und Normschrift und liegt nah an der Schrift im Logo. Schriften werden aus Datenschutzgründen nie von Google-Servern geladen.

### Hierarchy
- **Display** (700, `clamp(2.6rem, 6.4vw, 5.4rem)`, 0.98): nur die Hauptüberschrift; das erste Wort darf rot sein.
- **Headline** (700, `clamp(2rem, 4.2vw, 3.25rem)`, 1.05): Abschnittsüberschriften.
- **Title** (700, `clamp(1.4rem, 2.2vw, 1.75rem)`, 1.15): Leistungen, Ablaufschritte.
- **Body** (400, 1.0625rem, 1.6): Fließtext, max. ca. 36em breit.
- **Aufdruck** (600, 0.78rem, Versalien, 0.14em Laufweite): nur Kantenaufdruck und Stempelkopf.

### Named Rules
**The No Eyebrow Rule.** Versalien-Labels stehen nie über Überschriften. Versalien gibt es nur im Kantenaufdruck, im Stempelkopf und in der Gewerke-Zeile.

## Layout

Inhaltsbreite 1240px, Seitenrand `clamp(16px, 4vw, 48px)`. Jede Platte hat großzügige Innenabstände (`clamp(56px, 8vw, 104px)` oben/unten). Zwischen Platten liegt eine 22px hohe Fuge. Abschnittsköpfe sind zweispaltig: Überschrift links, erklärender Satz rechts, unten bündig. Unter 980px werden alle Raster einspaltig, die Navigation weicht den Knöpfen WhatsApp und Anrufen; unter 720px zeigen diese nur noch ihr Symbol. Am Handy steht die Startplatte hochkant, wie eine echte Platte.

## Elevation & Depth

Flach wie eine Wand. Tiefe gibt es nur dort, wo etwas auf der Platte aufliegt: das Stempelfeld und das Formular tragen einen weichen, nach unten versetzten Schatten.

### Shadow Vocabulary
- **Aufgelegt** (`0 18px 40px -24px rgb(51 51 51 / 0.45)`): Stempelfeld.
- **Formular** (`0 24px 48px -28px rgb(60 8 10 / 0.7)`): weißes Formular auf roter Platte.
- **Knopf-Hover** (`0 6px 16px -6px rgb(160 30 34 / 0.55)`): voller roter Knopf beim Überfahren.

## Shapes

Eckig. Plattenflächen haben keine Rundung; Knöpfe und Eingabefelder 3px. Kreise nur für Schraubpunkte und Kartenpunkte.

## Components

### Buttons
- **Voll** (rot, weiße Schrift, 48px hoch, 3px Ecken): Hauptaktion Anrufen / Senden. Hover dunkler, hebt sich 1px mit weichem Schatten.
- **Rand** (weiß, roter Rand und Text): Nebenaktion WhatsApp / E-Mail. Hover füllt rot.
- Auf der roten Kontaktplatte kehren sich die Farben um (weiß gefüllt bzw. weißer Rand); im Formular gilt wieder Rot.
- Symbole: eigene Linien-SVGs (2px Strich, 24er Raster) für Telefon, Chat, Post.

### Cards / Containers
- **Platte**: Fläche mit Schraubpunkten an den Kanten (Hintergrund aus vier wiederholten radialen Verläufen, Raster 40px).
- **Plattenraster** (Leistungen): Flächen mit 3px Fugenlinie dazwischen; die Hauptleistung ist die große weiße Platte über drei Reihen.

### Inputs / Fields
48px hoch, hellgraue Fläche, 1px grauer Rand, 3px Ecken. Fokus: roter Rand plus 3px roter Schein. Fehler: roter Rand, rosa Grund, Fehlertext darunter, der Problem und Lösung nennt.

### Navigation
Logo links, Ankerlinks mit roter Unterstreichung, die beim Überfahren von links einläuft; rechts WhatsApp und Anrufen. Der Kopf klebt oben mit leicht durchscheinendem Plattengrund.

### Stempelfeld
Weißes Feld mit 3px rotem Rahmen und 1px Außenlinie im Abstand von 5px. Kopfzeile in Aufdruck-Schrift, darunter die Telefonnummer groß in Display-Schrift, dann Anrufen und WhatsApp nebeneinander.

### Fuge
Horizontale Linie zwischen Platten; wenn sie ins Bild kommt, läuft von links ein Spachtelstreifen darüber (1.3s, `cubic-bezier(0.16, 1, 0.3, 1)`). Ohne JavaScript oder bei reduzierter Bewegung ist sie sofort verspachtelt.

## Do's and Don'ts

### Do:
- **Do** jede neue Sektion als Platte mit Schraubpunkten bauen und durch eine Fuge abtrennen.
- **Do** Anrufen und WhatsApp in jeder Ansicht erreichbar halten.
- **Do** echte Projektfotos verwenden, sobald sie da sind, im Plattenraster mit 3px Fugen.
- **Do** Schriften selbst hosten und keine externen Dienste ohne Datenschutzhinweis einbinden.

### Don't:
- **Don't** Stockfotos als Ersatz für eigene Projekte.
- **Don't** Farben außerhalb der Logopalette, keine Verläufe, kein Glas-Effekt als Dekoration.
- **Don't** Versalien-Labels über Überschriften oder Abschnittsnummern ohne Reihenfolge-Bedeutung.
- **Don't** gleich große Icon-Karten als Seitenstruktur.
- **Don't** unbelegte Werbeaussagen (Jahre, Festpreise, Garantien).
