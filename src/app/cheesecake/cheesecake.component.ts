import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-cheesecake',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './cheesecake.component.html',
  styleUrl: './cheesecake.component.css'
})
export class CheesecakeComponent {

}
