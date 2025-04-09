import { Component } from '@angular/core';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent {
  memberCreate=0;
  memberCreateTab(allTab:any){
    switch (allTab) {
      case 'basic-setting': 
        this.memberCreate=0;
        break;
        case 'product': 
        this.memberCreate=1;
        break;
        case 'currency': 
          this.memberCreate=2;
        break;
        case 'pt-setting': 
          this.memberCreate=3;
        break; 
      default:
        break;
    }
  }
}
