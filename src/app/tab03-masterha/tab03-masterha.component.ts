import { Component } from '@angular/core';
import { Input } from '@angular/core';
// import { Classmasterha } from '../Classmasterha';
import { Classmasterha } from '../app.component';
@Component({
  selector: 'app-tab03-masterha',
  templateUrl: './tab03-masterha.component.html',
  styleUrl: './tab03-masterha.component.css'
})
export class Tab03MasterhaComponent {
  @Input() masterhaS2024!: Classmasterha;

  masterhaArray: string[] = [
    'DOW: Monday',
    'Time: 12-3',
    'Room: M4'
  ];

  
}
