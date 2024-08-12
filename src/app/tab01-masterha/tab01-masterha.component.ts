import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Classmasterha } from '../app.component';
import { ServiceMasterhaService } from '../service-masterha.service';
@Component({
  selector: 'app-tab01-masterha',
  templateUrl: './tab01-masterha.component.html',
  styleUrl: './tab01-masterha.component.css'
})
export class Tab01MasterhaComponent {
  @Input() masterhaS2024!: Classmasterha;  

  constructor( private serviceMasterha : ServiceMasterhaService) {}
  masterhaService(data : any) {
    this.serviceMasterha.masterhaMessage(data); // Replace 'someMethod' with the actual method you want to call
  }
}
