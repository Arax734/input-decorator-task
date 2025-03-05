import { Component } from '@angular/core';

@Component({
  selector: 'app-student-card',
  standalone: false,
  templateUrl: './student-card-component.component.html',
  styleUrl: './student-card-component.component.css',
})
export class StudentCardComponentComponent {
  // Użyj @Input(), aby pobrać dane studenta od komponentu nadrzędnego

  get averageGrade(): number {
    // Oblicz średnią ocen studenta
    return 0; // Zamień na poprawne obliczenie
  }

  get isHonored(): boolean {
    // Sprawdź, czy średnia ocen > 4.5 i zwróć true lub false
    return false;
  }
}
