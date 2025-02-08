import {Component, inject} from '@angular/core';
import {ToastService} from '../../service/toast.service';

@Component({
  selector: 'jjn-header',
  imports: [],
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
