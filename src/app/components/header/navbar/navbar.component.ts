import {Component, inject} from '@angular/core';
import {ToastService} from '../../../service/toast.service';

@Component({
  selector: 'jjn-navbar',
  imports: [],
  standalone: true,
  template:`
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div class="flex items-center py-2">
          <div class="bg-gray-100 rounded-full p-1">
            <span class="text-gray-600 ml-4 text-black">{{myEmail}}</span>
            <button class="ml-2 px-5 py-1 bg-white text-black rounded-full cursor-pointer" (click)="copyEmailAddress()">Copy</button>
          </div>
          <div class="bg-gray-100 rounded-full p-1 ml-2">
            <button class="px-5 py-1 bg-white text-black rounded-full cursor-pointer">CV</button>
          </div>
        </div>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900" href="https://github.com/Jean-23" target="_blank" rel="noopener noreferrer">Github</a>
          <a class="mr-5 hover:text-gray-900" href="https://www.linkedin.com/in/jean-jacques-nienaba-281847293/" target="_blank" rel="noopener noreferrer">Linkedin</a>
        </nav>
      </div>
    </header>

  `,
})
export class NavbarComponent {
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
