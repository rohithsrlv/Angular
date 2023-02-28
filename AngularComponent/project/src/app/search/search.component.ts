import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchvalue:string='';
changeSearchValue(eventData:Event){
console.log();
this.searchvalue=(<HTMLInputElement>eventData.target).value;
}
}
