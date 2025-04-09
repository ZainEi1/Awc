import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  operationManual = false;
  toggleMaunal(): void {
    this.operationManual = !this.operationManual;
  }
  languageManual = false;
  togglelanguageManual(): void {
    this.languageManual = !this.languageManual;
  }
  
}
