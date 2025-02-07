import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {ServicesComponent} from '../services/services.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'jjn-home',
  imports: [HeaderComponent,ServicesComponent,FooterComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
