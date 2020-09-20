import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgCkeditorModule } from "projects/ng-ckeditor/src/public-api";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgCkeditorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
