+++
title = "IR kamera part 1"
date = "2023-08-28"
[ author ]
  name = "Albert Bayazidi"
+++

Dette prosjektet fokuserer på den innledende testingen og utforskningen av datainterpolasjon. Det endelige målet er å lage et IR-kamera.

---

## Oversikt

Hovedmålet med dette delprosjektet er å undersøke nyttigheten av interpolasjon på dataen fra AMG8833-sensoren. AMG8833-sensoren gir termisk data med oppløsning på 8x8 piksler, og gjennom interpolasjon ønsker vi å forbedre denne oppløsningen.  
  
---

## Innhold

I dette repositoriet vil du finne:

>**Datasett**: Dataene samlet fra min AMG8833-sensor

>**Interpolasjonsskript**: Koden som brukes til å utføre interpolasjonen 

>**Fremtidige planer**: Tanker og ideer om hvordan jeg skal gå videre.

## Demo

En kort demo kan sees [her](https://github.com/albertbayazidi/IR-Interpolation/assets/102351774/d3559252-e7f2-40f6-a795-8a5bb3ff11f0)

## Fremtidige steg

>Implementere lignende kode i C++

>Teste interpolasjon på ESP32 og lage en prototype med innebygd skjerm

---

### Tanker
Hvis ESP32 ikke klarer å håndtere en akseptabel FPS, vil jeg gjøre interpolasjonen på en server og bare rendere resultatet på ESP32. Om det er mulig å unngå denne metoden er det foretrukket. Før dette vil jeg prøve å fordele arbeidet på begge kjernene.