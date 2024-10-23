import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [FooterComponent, HeaderComponent]
})
export class HomeComponent {
  favoriteMessage: string = ''; // Message de confirmation

  save(): void {
    localStorage.setItem("liked", "true");
    this.favoriteMessage = "Merci d'avoir aimé nos produits!"; // Met à jour le message
  }
}
