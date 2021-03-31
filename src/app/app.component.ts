import { Component } from "@angular/core";

@Component({
  selector: "example-demo",
  template: `
  Naive approach
  <div style="margin-bottom: 50px">
  <app-naive-mul-elem></app-naive-mul-elem>
  </div>



  Config Based:
  <div>
  <app-config-mul-elem></app-config-mul-elem>
  </div>

  
  `
})
export class AppComponent {}
