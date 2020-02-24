import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-results-search',
  templateUrl: './results-search.component.html',
  styleUrls: ['./results-search.component.css']
})
export class ResultsSearchComponent implements OnInit, OnChanges {
@Input() users: any ;

ngOnChanges(){
  console.log("Users: " , this.users)
}
  constructor() { }

  ngOnInit() {
  }


  


}
