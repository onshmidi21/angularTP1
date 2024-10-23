import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-pies',
  standalone: true,
  imports: [FooterComponent,HeaderComponent],
  templateUrl: './pies.component.html',
  styleUrl: './pies.component.css'
})
export class PiesComponent {

}
