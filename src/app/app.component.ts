import { Component } from '@angular/core';
export class Classmasterha{
  masterhaName!: string;
  masterhaID!: number;
  masterhaLogin!: string;
  masterhaEmail!: string;

  constructor(
      masterhaName: string,
      masterhaID: number,
      masterhaLogin: string,
      masterhaEmail: string
  ) {
      this.masterhaName = masterhaName;
      this.masterhaID = masterhaID;
      this.masterhaLogin = masterhaLogin;
      this.masterhaEmail = masterhaEmail;
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'masterhaFEExam';

  masterhaS2024 = new Classmasterha("Hasan Master", 991698598, "masterha", "masterha@sheridancollege.ca");
}
