import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  livegameTab=0;
  setGameTab(gameTab:any){
    switch (gameTab) {
      case 'tab-BINGO': 
        this.livegameTab=0;
        break;
        case 'tab-EGAME': 
        this.livegameTab=1;
        break;
        case 'tab-ESPORTS': 
          this.livegameTab=2;
        break;
        case 'tab-FH': 
          this.livegameTab=3;
        break;
        case 'tab-LIVE': 
          this.livegameTab=4;
        break;
        case 'tab-LOTTO': 
          this.livegameTab=5;
        break;
        case 'tab-SLOT': 
          this.livegameTab=6;
        break;
        case 'tab-TABLE': 
          this.livegameTab=7;
        break;
        case 'tab-VIRTUAL': 
          this.livegameTab=8;
        break;
      default:
        break;
    }
  }

  isModalOpen = false;
  openUserModal(): void {
    this.isModalOpen = true;
  }

  closeUserModal(): void {
    this.isModalOpen = false;
  }
}
