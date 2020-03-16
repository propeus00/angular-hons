import { BrowserModule } from "@angular/platform-browser";
import { NgModule, enableProdMode } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./modules/home/pages/home.component";
import { SignUpComponent } from "./modules/sign-up/pages/sign-up.component";
import { AddProjectComponent } from "./modules/add-project/pages/add-project.component";
import { UserProfileComponent } from "./modules/user-profile/pages/user-profile.component";
import { UserSettingsComponent } from "./modules/user-settings/pages/user-settings.component";
import { SearchBarComponent } from "./modules/home/components/search-bar/search-bar.component";
import { ResultsSearchComponent } from "./modules/home/components/results-search/results-search.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "add-project", component: AddProjectComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "user-settings", component: UserSettingsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    AddProjectComponent,
    UserProfileComponent,
    UserSettingsComponent,
    SearchBarComponent,
    ResultsSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
