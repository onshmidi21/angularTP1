import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-tousdetails',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './tousdetails.component.html',
  styleUrl: './tousdetails.component.css'
})
export class TousdetailsComponent {

}
