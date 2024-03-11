import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  title = 'Homes';
  flash = 'Flash Message';
  isActive(url: string): boolean {
    return this.router.url === url;
  }
  logoff() {
    this.authService.logout();
  }
}
