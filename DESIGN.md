---
name: Kameri – alles rund ums Haus
description: Der Name als Denkmal – „Kameri“ in Logorot über die ganze Breite, darüber das Bild, danach eine ruhige, kleine Seite.
colors:
  grund: "#ffffff"
  tinte: "#2e2e2e"
  leise: "#66625d"
  rot: "#c2262b"
  rot-tief: "#a01e22"
  feld: "#eeefef"
  feld-tief: "#dfe1e1"
  dunkel: "#2e2e2e"
  auf-dunkel: "#f3f3f2"
  auf-dunkel-leise: "#b8b4ae"
  auf-rot: "#ffffff"
  auf-rot-leise: "#fbe1e2"
typography:
  denkmal:
    fontFamily: "Source Sans 3, Source Sans Pro, system-ui, sans-serif"
    fontSize: "calc((100vw - 2 * var(--rand)) / 2.98)"
    fontWeight: 700
    lineHeight: 0.78
    letterSpacing: "-0.04em"
  plakat:
    fontFamily: "Source Sans 3, Source Sans Pro, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 10vw, 9.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  kopf:
    fontFamily: "Source Sans 3, Source Sans Pro, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.4rem + 3.6vw, 5rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  text:
    fontFamily: "Source Sans 3, Source Sans Pro, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.005em"
  klein:
    fontFamily: "Source Sans 3, Source Sans Pro, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  keine: "0px"
  rund: "50%"
spacing:
  rand: "clamp(16px, 2.2vw, 32px)"
  spalt: "clamp(12px, 1.6vw, 24px)"
  abstand: "clamp(96px, 14vw, 200px)"
components:
  knopf:
    backgroundColor: "{colors.rot}"
    textColor: "{colors.auf-rot}"
    rounded: "{rounded.keine}"
    padding: "14px 24px"
    height: "52px"
  knopf-hover:
    backgroundColor: "{colors.rot-tief}"
    textColor: "{colors.auf-rot}"
  knopf-hell:
    backgroundColor: "{colors.auf-rot}"
    textColor: "{colors.rot}"
    rounded: "{rounded.keine}"
    padding: "14px 24px"
    height: "52px"
  eingabefeld:
    backgroundColor: "{colors.grund}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.keine}"
    padding: "12px 14px"
    height: "52px"
  rundknopf:
    backgroundColor: "{colors.rot}"
    textColor: "{colors.auf-rot}"
    rounded: "{rounded.rund}"
    size: "0.9em"
---

# Design System: Kameri – alles rund ums Haus

## Overview

**Creative North Star: "Der Name als Denkmal"**

Der Familienname des Inhabers ist das Größte auf der Seite: „Kameri“ in Logorot, so breit wie der Bildschirm, direkt unter dem Bild. Alles danach ist bewusst klein und ruhig, damit der Kontrast hält. Der Name kehrt am Ende im dunklen Fuß in heller Schrift zurück. Die Texte sind kurz und reden wie ein Handwerker, nicht wie eine Werbeagentur.

Bilder zeigen die Arbeit selbst. Solange keine eigenen Fotos da sind, stehen flache Zeichnungen aus der Welt des Betriebs an ihrer Stelle (eine Ständerwand im Bau, ein Wandaufbau im Schnitt); sie werden 1:1 durch Projektfotos ersetzt.

**Key Characteristics:**
- Ein Wort, ein Denkmal: „Kameri“ füllt die Breite zwischen den Rändern
- Eine Schrift (Source Sans 3, wie im Logo), fünf Größen
- Flächen statt Linien: Weiß, ein helles Grau, ein rotes Feld, ein dunkler Fuß
- Der Ablauf als Beleg mit Zackenkante und „0,00 €“ bis zur Zusage
- Orte als Plakatzeilen, dazu der Ort-Check als einziges Spielzeug

## Colors

Palette aus dem Logo. Ein Grund, eine Tinte, ein Rot.

### Primary
- **Logorot** (`#c2262b`): das Denkmal, der Hauptknopf, das Feld „Wo wir arbeiten“. Hover: `#a01e22`.

### Neutral
- **Tinte** (`#2e2e2e`): Text, Überschriften, Fuß-Grund.
- **Leise** (`#66625d`): Aufzählungen in den Leistungen, Hinweise.
- **Grund** (`#ffffff`) und **Feld** (`#eeefef`): Flächen; Abschnitte trennen sich durch Tonstufen.

### Named Rules
**The One Red Rule.** Rot steht auf dem Namen, auf der einen Handlung und auf genau einem ganzen Feld. Nicht als Zierfarbe verteilen.

## Typography

**Schrift:** Source Sans 3 (400/600/700), selbst gehostet in `schriften/`. Gewählt, weil das Logo dieselbe Familie nutzt; nie von Google-Servern laden.

### Hierarchy
- **Denkmal** (700, Breite ÷ 2,98, Zeilenhöhe 0,78, −0,04em): nur „Kameri“ im Kopf und im Fuß.
- **Plakat** (700, `clamp(3.25rem, 10vw, 9.5rem)`): die Ortszeilen.
- **Kopf** (600, `clamp(2.25rem, …, 5rem)`, −0,04em): Abschnittsüberschriften und Kontaktzeilen (dort 400).
- **Text** (400, 17–19px, 1,5): alles Lesbare.
- **Klein** (15px): Navigation, Bildunterschriften, Rechtliches.

### Named Rules
**The Two Lines Rule.** Keine Überschrift läuft über zwei Zeilen, auf keiner Breite. Keine Labels über Überschriften, keine Versalien, keine Nummern.

## Layout

12 Spalten, ein Paar gleicher Ränder (`clamp(16px, 2.2vw, 32px)`), große Abstände zwischen Abschnitten (`clamp(96px, 14vw, 200px)`). Jeder Abschnitt hat eine andere Komposition: Textspalten, Beleg neben haftender Überschrift, Plakatliste, Zeilenbänder, Formular. Auf dem Handy steht im Kopf erst das Bild, dann der Name, dann Satz und Knopf.

## Elevation & Depth

Keine Schatten, keine Linien. Tiefe entsteht nur durch Tonstufen zwischen Flächen.

## Shapes

Eckig: Knöpfe, Felder und Bilder ohne Rundung. Einzige runde Form ist der Pfeilknopf in der Kontaktzeile „Hallo“.

## Components

### Buttons
- **Knopf**: rot, weiße Schrift, 52px hoch, eckig; drückt beim Klicken auf 97 %. Hover dunkler.
- **Heller Knopf**: weiß mit roter Schrift, auf dem roten Feld.
- **Rundknopf**: roter Kreis mit Pfeil (WhatsApp) am Ende der Zeile „Hallo“.
- **Textlink**: unterstrichen mit halbtransparenter Linie, beim Hover voll.

### Inputs / Fields
52px hoch, 2px Rand in Feldgrau, eckig; Fokus: Rand in Tinte. Fehler: roter Rand, Fehlertext darunter.

### Navigation
Weiße Leiste über dem Bild: Logo links, vier Links rechts. Unter 860px nur „Anrufen“.

### Beleg (Ablauf)
Weißes Papier auf Feldgrau, unten Zackenkante (clip-path). Zeilen mit Punkt-Führung und Beträgen in Tabellenziffern, letzte Zeile als dunkler Balken „Bis zu Ihrer Zusage 0,00 €“.

### Ortszeilen und Ort-Check
Orte in Plakatgröße links, Entfernung klein rechts; Hover färbt den Ort dunkel. Darunter ein Eingabefeld, das die Luftlinie ab Leimen nennt.

## Do's and Don'ts

### Do:
- **Do** eigene Projektfotos an die Stelle der Zeichnungen setzen, groß und eckig.
- **Do** kurze, konkrete Sätze schreiben, so wie der Inhaber redet.
- **Do** Telefon und WhatsApp auf dem ersten Bildschirm halten.

### Don't:
- **Don't** Werbesprech oder erfundene Versprechen (Jahre, Garantien, Bewertungen).
- **Don't** Kästen mit Rahmen, gepunktete Ränder, Schatten, Verläufe, Linien als Trenner.
- **Don't** Labels über Überschriften, Nummern 01/02/03, Versalien-Zeilen.
- **Don't** Stockfotos, die wie eigene Projekte aussehen.
