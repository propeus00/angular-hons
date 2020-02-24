import { Component, OnInit, Output, EventEmitter } from "@angular/core";




@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
@Output() userInput = new EventEmitter();

  onChangeInput(input: any){
    this.userInput.emit(input);
  }
  constructor() {
  }

  ngOnInit() {}
}
