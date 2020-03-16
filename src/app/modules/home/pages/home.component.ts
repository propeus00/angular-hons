import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  loadedUsersJson = [];
  usersArray = [];

  proxyurl = "https://cors-anywhere.herokuapp.com/";

  onChange(input) {
    console.log(input.key);
    console.log("Target value: ", input.target.value);
    console.log(input);
    input.preventDefault();
    if (input.key == "Enter") {
      this.usersArray = [];
      console.log("use array called");
      this.http
        .get(
          this.proxyurl +
            "https://apihons.azurewebsites.net/api/search/" +
            input.target.value
        )
        .subscribe(resp => {
          console.log("Response here: ", resp);
          this.loadedUsersJson = [];
          this.loadedUsersJson.push(resp);
          this.loadedUsersJson[0].map(loadPost => {
            console.log("Load post ", loadPost);
            this.usersArray.push(loadPost);
          });
          console.log("Users array here: ", this.usersArray);
        });
    }
  }

  onCreatePost(postData: {
    name: string;
    description: string;
    username: string;
  }) {
    console.log(postData);
    this.http
      .post(
        this.proxyurl + "https://apihons.azurewebsites.net/api/Projects",
        postData
      )
      .subscribe(resp => {
        console.log(resp);
      });
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {}
}
