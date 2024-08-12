import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Classmasterha } from '../app.component';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-tab02-masterha',
  templateUrl: './tab02-masterha.component.html',
  styleUrl: './tab02-masterha.component.css'
})
export class Tab02MasterhaComponent {
  @Input() masterhaS2024!: Classmasterha;
  masterhaForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.masterhaForm = this.fb.group({
      masterhamonth66464: ['August'],
      masterhayear66464: ['2024']
    });
  }

  onSubmit(): void {
    console.log(this.masterhaForm.value);
  }
}
