# Zadanie: Lista uczniów z wyróżnieniami

## Cel zadania

Twoim zadaniem jest stworzenie aplikacji Angular, która wyświetli listę uczniów wraz z ich ocenami. Wykorzystasz do tego dyrektywy `*ngFor`, `*ngIf` oraz dekorator `@Input`.

## Wymagania

1. **Zaimplementuj komponent `StudentListComponent`**, który:

   - Będzie zawierał tablicę uczniów z ich ocenami.
   - Użyje `*ngFor`, aby wyświetlić listę uczniów.
   - Przekaże dane ucznia do komponentu `StudentCardComponent` za pomocą `@Input`.

2. **Zaimplementuj komponent `StudentCardComponent`**, który:
   - Otrzyma dane ucznia poprzez `@Input`.
   - Obliczy średnią ocen ucznia.
   - Użyje `*ngIf`, aby dodać etykietę "🏆 Wyróżniony uczeń!", jeśli średnia ocen przekracza `4.5`.

## Struktura komponentów

### StudentListComponent

- Przechowuje tablicę uczniów.
- Iteruje po uczniach za pomocą `*ngFor` i wyświetla komponent `StudentCardComponent` dla każdego ucznia.

### StudentCardComponent

- Przyjmuje dane ucznia poprzez `@Input`.
- Oblicza i wyświetla średnią ocen.
- Używa `*ngIf`, aby dodać wyróżnienie dla uczniów ze średnią ocen powyżej `4.5`.

## Zadania do wykonania

1. **Dodaj brakujące dyrektywy `*ngFor`, `*ngIf` oraz dekorator `@Input`** w odpowiednich miejscach w kodzie.
2. **Zaimplementuj obliczanie średniej ocen ucznia** w `StudentCardComponent`.
3. **Dostosuj wygląd aplikacji**, np. zmień kolor dla wyróżnionych uczniów.
