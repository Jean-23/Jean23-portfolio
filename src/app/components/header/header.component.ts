import {Component, inject} from '@angular/core';
import {ToastService} from '../../service/toast.service';
import {NavbarComponent} from './navbar/navbar.component';
import {NgOptimizedImage} from '@angular/common';
import {HeaderDetailsComponent} from './header-details/header-details.component';

@Component({
  selector: 'jjn-header',
  imports: [
    NavbarComponent,
    NgOptimizedImage,
    HeaderDetailsComponent
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  toastService = inject(ToastService);
  myEmail:string = "jjn99@outlook.fr"

  copyEmailAddress() {
    navigator.clipboard.writeText(this.myEmail)
      .then(() => {
        this.toastService.showToast('📋 Email copié avec succès !', 'success');
      })
      .catch(err => {
        this.toastService.showToast('❌ Échec de la copie !', 'error');
        console.error('Could not copy email address: ', err);
      });
  }
}
