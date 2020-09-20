import { Component } from "@angular/core";
import * as ClassicEditor from "ckeditor-build-bear";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  title = "ng-ckeditor-app";
  editor = ClassicEditor;
}
