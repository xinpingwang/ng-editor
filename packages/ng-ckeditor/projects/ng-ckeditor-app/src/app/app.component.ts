import { Component } from "@angular/core";
import * as BearEditor from "ckeditor-build-bear";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  title = "ng-ckeditor-app";
  editor = BearEditor;
}
