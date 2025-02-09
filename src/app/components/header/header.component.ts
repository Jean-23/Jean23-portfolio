import {Component, inject} from '@angular/core';
import {ToastService} from '../../service/toast.service';
import {NavbarComponent} from './navbar/navbar.component';
import {NgOptimizedImage} from '@angular/common';
import {HeaderDetailsComponent} from './header-details/header-details.component';

@Component({
  selector: 'jjn-header',
  imports: [
    NavbarComponent,
    HeaderDetailsComponent
  ],
  standalone: true,
  template:`
    <div class="container">

    <!--Navigation part-->
    <jjn-navbar />

    <!--Presentation part-->
    <jjn-header-details />
    </div>

  `
})
export class HeaderComponent {

}
