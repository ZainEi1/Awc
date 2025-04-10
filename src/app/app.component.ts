import { Component } from '@angular/core'; 
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'awc';
  isSidebarOpen = true;
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen; 
  }
  constructor(private route:Router){
    
  } 
  hideSidebarHeader(): boolean {
    const currentUrl = this.route.url;
    return currentUrl === '/login' || currentUrl.startsWith('/auth/login');
  }
  
}
