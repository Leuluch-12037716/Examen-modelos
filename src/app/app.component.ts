import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { UserInterface } from './user.interface';

@Component({
  selector: 'app-root',
  standalone: false, 
  templateUrl: './app.component.html' ,

  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  authService = inject(AuthService);
  http = inject(HttpClient);
  ngOnInit(): void {
    this.http
      .get<{ user: UserInterface }>('https://api.realworld.io/api/user')
      .subscribe({
        next: (response) => {
          console.log('response', response);
          this.authService.currentUserSig.set(response.user);
        },
        error: () => {
          this.authService.currentUserSig.set(null);
        },
      });
  }

  logout(): void {
    console.log('logout');
    localStorage.setItem('token', '');
    this.authService.currentUserSig.set(null);
  }
}