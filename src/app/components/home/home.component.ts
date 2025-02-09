import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {ServicesComponent} from '../services/services.component';
import {FooterComponent} from '../footer/footer.component';
import {ProgrammingLanguageComponent} from '../programming-language/programming-language.component';

@Component({
  selector: 'jjn-home',
  imports: [HeaderComponent, ServicesComponent, FooterComponent, ProgrammingLanguageComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
