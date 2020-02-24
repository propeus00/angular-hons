import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-add-project",
  templateUrl: "./add-project.component.html",
  styleUrls: ["./add-project.component.css"]
})
export class AddProjectComponent implements OnInit {
  proxyurl = "https://cors-anywhere.herokuapp.com/";

  onCreatePost(postData: {
    name: string;
    description: string;
    username: string;
  }) {
    
    console.log(postData);
    this.http.post(this.proxyurl + 'https://apihons.azurewebsites.net/api/Projects', postData).subscribe(resp => {
      console.log(resp);
    });
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {}
}
