
+++
title = "AccuNeedle"
date = "2023-03-21"
[ author ]
  name = "Albert Bayazidi"
+++

AccuNeedle er en programvare- og maskinvareløsning som bruker gyroskop og akselerometer for å gi sanntids 3D-visualisering av en nål. Verktøyet er designet for å hjelpe med å finne nålen under en ultralydoperasjon.

Verktøyet bruker ESP NOW-protokollen og er programmert i C++ og Processing. ultralyd sensoren sender gyroskop og akselerometer datta  trådløst til en annen ESP32 som er koblet til en datamaskin for sanntidsvisualisering og tilbakemelding.

## Funksjoner
Sanntids rendering av nål i 3D.
Filter for nøyaktig avlesning av vinkel.
Kalibrering.

For å bruke verktøyet kreves følgende komponenter.
- 2 ESP32
- MPU6050
- Ledninger

## Demo

Kan bli funnet [her](https://github.com/albertbayazidi/AccuNeedle/assets/102351774/65a52dd0-e59a-4bb8-9645-4e8064af6613)

## Bruk
1. Koble alt sammen i henhold til diagrammene.
2. Kalibrer enheten ved hjelp av kalibreringskoden.
3. Få MAC-adressen til mottakeren.
4. Last opp mottakerkoden til mottakeren og senderen til senderen.

Husk å installere nødvendige biblioteker.

Prosjektet ble utviklet av Albert Bayazidi og Saim Naveed Iqbal.