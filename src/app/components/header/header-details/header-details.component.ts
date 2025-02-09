import { Component } from '@angular/core';

@Component({
  selector: 'jjn-header-details',
  imports: [],
  standalone: true,
  template:`
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <img alt="jjn99" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="assets/profile.jpg">
          <p class="leading-relaxed">
            En tant que développeur passionné par la programmation, mon
            parcours se focalise sur l'univers dynamique du développement
            web, les technologies et la conception de logiciels.
          </p>
          <span class="inline-block h-1 w-10 rounded bg-gray-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-xl">NIENABA Jean Jacques</h2>
          <p class="text-gray-500">DEVELOPER</p>
        </div>
      </div>
    </section>
  `
})
export class HeaderDetailsComponent {

}
