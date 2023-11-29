import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { User } from '@app/core/auth/models/user.model';
import { AuthService } from '@app/core/auth/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [MatIconModule, MatToolbarModule, BrowserModule, RouterModule],
})
export class NavbarComponent {
  title = 'demo';
  user!: Observable<User|null>

  constructor(private authService: AuthService) {
    this.user = authService.user;
  }

  logout() {
    this.authService.logout()
  }
}
