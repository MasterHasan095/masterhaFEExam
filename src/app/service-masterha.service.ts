import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceMasterhaService {

  constructor() { }

  masterhaMessage(data: any): void {
    alert(data);
  }
}
