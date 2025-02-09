import { Component } from '@angular/core';

export interface TechItem{
  label:string;
  path:string;
}

@Component({
  selector: 'jjn-programming-language',
  imports: [],
  standalone: true,
  template:`
    <div class="w-full flex-wrap content-start flex justify-center bg-white">
      @for (tech of techItems; track tech.label){
        <div class="item-tech min-h-16 max-h-16 text-black flex-none content-start items-center flex m-4 px-3.5 py-6 "
          style="border-radius: 100px; font-size: 16px; font-weight: 700; line-height: 140%;">
          <img src="{{tech.path}}" class="h-9 mr-3.5">
          <div>{{ tech.label }}</div>
        </div>
      }
    </div>
  `
})
export class ProgrammingLanguageComponent {

  techItems: TechItem[] = [
    {label:"Angular",path:"assets/images/tech/angular.svg"},
    {label:"Spring",path:"assets/images/tech/spring.svg"},
    {label:"Flutter",path:"assets/images/tech/Flutter.svg"},
    {label:"GitHub",path:"assets/images/tech/GitHub-icon.svg"},
    {label:"Aws",path:"assets/images/tech/aws.svg"},
    {label:"Docker",path:"assets/images/tech/docker.svg"},
    {label:"Kubernetes",path:"assets/images/tech/k8s.svg"},
    {label:"PostgresSql",path:"assets/images/tech/postgreSql.svg"}
  ]

}
