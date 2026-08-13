# Claude Code Prompt: Inlux GmbH Website Relaunch

Kopiere den folgenden Block direkt in Claude Code.

---

## Projektauftrag

Baue eine neue, schlanke Website für **Inlux GmbH** (Werbetechnik & Leuchtreklame), die die bestehende Seite https://inluxteam.ch ersetzt. Ziel: von 6 Dienstleistungen + Dutzenden Unterseiten auf einen fokussierten Zwei-Themen-Auftritt reduzieren — **Werbetechnik** als Kerngeschäft, **Wanddekoration** als Nebenangebot mit nur 2-3 Produkten. Alles andere (Winter Creation, Werbeartikel, Wartung Leuchtreklame, Inlux Shop, restliche Wanddekoration-Produkte) entfällt.

### Unternehmensdaten (recherchiert von inluxteam.ch)

- **Name:** Inlux Team / Inlux GmbH
- **Gegründet:** 2017, Schweiz
- **Adresse:** Hauptstrasse 130, 5742 Kolliken, Schweiz
- **Telefon:** +41 76 435 46 66
- **Social:** Instagram (instagram.com/inluxteam), Facebook (facebook.com/inluxhomedesign)
- **Produktionsfläche:** 500 m² eigene Produktionsstätte
- **Positionierung:** "Intelligente Dekoration, Professioneller Service" — produziert, importiert und exportiert in 35 Länder. Spezialisiert auf Werbetechnik, Wanddekoration/Konstruktionen und Beleuchtungssysteme.
- **Arbeitsprozess (4 Schritte, kann als Ablauf-Sektion dienen):** Beratung (unverbindliches Erstgespräch vor Ort) → Entwurf (2D-Vektorgrafik & 3D-Visualisierung) → Herstellung (eigene 500m² Produktion) → Montage (termingerecht durch Fachpersonal)
- **Kundenstimmen (Auswahl, echte Testimonials von der Originalseite, zur Wiederverwendung):**
  - Eden Merhawi (Swissbraids): "Sie sind auf alle meine Wünsche und Bedürfnisse eingegangen und haben auch alle Aufträge termingerecht und fachgerecht geliefert und montiert."
  - Esra Ay (Beauty by Esra Ay): fand Inlux über Instagram, lobt schnelle Rückmeldung und Materialqualität.
  - Tajfun Ademi (Buchsiauto): 3D-Logos, unkomplizierter Ablauf von Beratung bis Montage.
  - Marc Berbet (Skullpot): Top Preis-Leistungs-Verhältnis bei Leuchtreklame-Tafeln.
  - Dragana Scheffler (E'la Kosmetik): grosser Spiegel mit Rückbeleuchtung, Chrom-Leuchtbuchstaben.

### Werbetechnik – Produktpalette (Kernangebot, alle behalten)

1. **Leuchtreklame** — Herstellung in Wunschmassen, 30+ Modelloptionen
2. **Wandausleger** — Einseitig/doppelseitig, aus Chrom, Metall, Acrylglas, 50+ Modelle
3. **Inplex** — effektive Werbelösung für hohe Sichtbarkeit
4. **Orientierungsschilder** — Wegweiser für Hotel, Restaurant, Einkaufszentrum, firmenspezifisches Design
5. **Leuchtkasten** — Wunschmasse, hohe Druckqualität, beleuchtet
6. **Lightbox mit Drehmotor** — wirtschaftliche, auffällige Alternative
7. **Metall-Logo** — 2mm Blechzuschnitt, farbige Beleuchtung, mit/ohne Seitenwand
8. **3D-Beschriftungen** — verschiedene Materialien und Farben

### Wanddekoration – nur 2-3 Produkte auswählen und ausbauen, Rest streichen

Verfügbare Kandidaten von der Originalseite (wähle die 2-3 stärksten, z.B. **MDF-Paneele**, **3D-Wand** und **Spiegel mit Beleuchtung** — passen am besten zur Werbetechnik-Ausrichtung mit Beleuchtung/Indirect Lighting):

- MDF-Paneele — hohe Qualität, über 6 Modelle, stossfest
- 3D-Wand (PVC) — einfache Montage, verschiedene Modelle/Farben
- WPC Wandpaneele — wasserresistent, stossfest, 13+ Modelle
- Spiegel — Wunschmasse, mit/ohne Beleuchtung, beleuchtete Logogravur
- Akustikpaneele, Profilkonstruktion, gehärtetes Glas, Moos-/Pflanzenwand (eher streichen)

---

## Anforderungen an die neue Website

### 1. Struktur radikal verschlanken
- Von 6 Hauptdienstleistungen auf 2: **Werbetechnik** (Hauptfokus, alle 8 Produkte) und **Wanddekoration** (Nebenfokus, nur 2-3 Produkte)
- Seiten: Home, Werbetechnik (Übersicht + evtl. Detail-Anker statt eigene Unterseiten pro Produkt), Wanddekoration (2-3 Produkte), Über uns, Kontakt
- Keine separaten Unterseiten pro Einzelprodukt nötig — Produkte als Sektionen/Cards auf der jeweiligen Übersichtsseite, um die Seite schlank zu halten (weniger Klicks, schnellere Ladezeit)
- Klare, flache Navigation — max. 5 Hauptpunkte im Menü

### 2. SEO
- Saubere, semantische H1/H2-Struktur: genau eine H1 pro Seite mit dem wichtigsten Keyword (z.B. "Werbetechnik & Leuchtreklame Schweiz"), H2 für jede Produktkategorie/Sektion
- Meta-Title und Meta-Description pro Seite, fokussiert auf lokale Keywords ("Werbetechnik Schweiz", "Leuchtreklame [Region]", "Wandausleger", "3D Beschriftung", "Wanddekoration")
- Strukturierte Daten (schema.org: LocalBusiness) mit Adresse, Telefon, Öffnungszeiten
- Alt-Texte für alle Bilder, sprechende URLs, Sitemap.xml, robots.txt
- Core Web Vitals im Blick behalten (siehe Performance unten)

### 3. Performance / "Website schmälern"
- Deutlich weniger Seiten, weniger DOM-Gewicht als das alte Elementor/WordPress-Setup
- Bilder optimiert (WebP, lazy loading, responsive srcset)
- Kein Page-Builder-Overhead — schlanker Stack (z.B. Next.js/Astro/statisches HTML+Tailwind), schnelle Ladezeiten auf Mobile

### 4. Design & Beleuchtung
- Vollständig responsive (Mobile-first, da viele Kunden über Instagram/Handy kommen)
- Dunkles/kontrastreiches Grundthema, das zum Werbetechnik-Thema passt, mit **indirekter LED-artiger Beleuchtung** als Gestaltungselement: Buttons, CTAs und Produkt-Cards bekommen einen subtilen Glow/Leuchteffekt (box-shadow mit weichem Blur, evtl. Neon-Akzentfarbe), der die Leuchtreklame-Produkte des Unternehmens visuell widerspiegelt — dezent einsetzen, nicht überladen
- Hochwertige, klare Bildsprache (Platzhalter-Hinweise setzen, falls noch keine neuen Fotos vorhanden sind)

### 5. Klare Struktur & schnelle Kontaktaufnahme
- Kontaktpriorität: 1. WhatsApp, 2. Telefon, 3. Kontaktformular/E-Mail (niedrigste Priorität)
- Sticky/Floating WhatsApp-Button auf allen Seiten (Deep-Link `https://wa.me/41764354666` mit vorausgefüllter Nachricht, z.B. "Hallo Inlux Team, ich interessiere mich für...")
- Telefonnummer als klickbarer `tel:`-Link prominent im Header/Footer
- Kontaktformular nur als letzte Option unten auf der Kontaktseite, kein Pflichtweg
- Klare Call-to-Actions auf jeder Sektion ("Jetzt per WhatsApp anfragen")

### 6. Preise
- Keine festen Preise auf der Seite (Projekte sind stark individuell)
- Stattdessen: Hinweistext wie "Jedes Projekt ist individuell — schreib uns kurz per WhatsApp und erhalte in wenigen Minuten eine erste Einschätzung" mit direktem WhatsApp-CTA an jeder Produktsektion

### 7. Content-Ton
- Deutsch (CH), professionell aber direkt, kurze Absätze
- Wiederverwendung/Weiterentwicklung der bestehenden Texte (Über-uns-Text, Testimonials) statt komplettem Neuschreiben, sofern sie sinnvoll passen

---

## Technischer Rahmen (Vorschlag, anpassbar)

- Framework: Next.js (App Router) mit Tailwind CSS, oder Astro für maximale Performance bei überwiegend statischem Content
- Deployment-fähig als statische/SSG-Seite
- Struktur: `/`, `/werbetechnik`, `/wanddekoration`, `/ueber-uns`, `/kontakt`
- Mehrsprachigkeit (DE/EN/FR/IT wie im Original) ist optional — für den ersten Wurf nur Deutsch, Struktur aber so anlegen, dass i18n später ergänzbar ist

## Aufgabe für Claude Code

Baue diese Website Schritt für Schritt: zuerst Projekt-Setup und Grundstruktur, dann Home, dann Werbetechnik-Seite mit allen 8 Produkten als Sektionen, dann Wanddekoration mit den 2-3 ausgewählten Produkten, dann Über uns und Kontakt inkl. WhatsApp/Tel-Integration, zuletzt SEO-Feinschliff (Meta-Tags, Schema, Sitemap) und Performance-Check.
