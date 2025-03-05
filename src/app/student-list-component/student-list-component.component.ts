import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list-component.component.html',
  styleUrl: './student-list-component.component.css',
})
export class StudentListComponentComponent {
  students = [
    { name: 'Jan Kowalski', grades: [5, 4, 5, 4, 5] },
    { name: 'Anna Nowak', grades: [3, 3, 4, 4, 3] },
    { name: 'Piotr Zieliński', grades: [5, 5, 5, 5, 5] },
    { name: 'Katarzyna Wiśniewska', grades: [2, 3, 2, 3, 3] },
  ];
}
