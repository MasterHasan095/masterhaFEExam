import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Classmasterha } from '../app.component';
@Component({
  selector: 'app-tab02-masterha',
  templateUrl: './tab02-masterha.component.html',
  styleUrl: './tab02-masterha.component.css'
})
export class Tab02MasterhaComponent {
  @Input() masterhaS2024!: Classmasterha;  // Receive the Classmasterha instance from the parent

}
