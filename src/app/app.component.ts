import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  countryList = [
    'Afghanistan',
    'Afghanistan',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla'
  ];
  selecedCountries: Array<any> = [];

  @ViewChildren('countries') countries;

  title = 'view-children';

  getSelectedCountries() {
    if (this.countries) {
      this.selecedCountries = [];
      this.countries._results.forEach(element => {
       if (element.nativeElement.checked){
         this.selecedCountries.push(element.nativeElement.title);
       }
      });
    }
  }
}
