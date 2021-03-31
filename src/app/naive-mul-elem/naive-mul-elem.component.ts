import { Component, OnInit } from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: "app-naive-mul-elem",
  template: `
    <h1>H1 Header</h1>
    <img
      style="width:100%;"
      alt="My Image"
      src="https://i.pinimg.com/originals/5e/f6/83/5ef68313994aaf68e87d190de943f104.jpg"
    />
    <p>
      Detract yet delight written farther his general. If in so bred at dare
      rose lose good. Feel and make two real miss use easy. Celebrated
      delightful an especially increasing instrument am. Indulgence contrasted
      sufficient to unpleasant in in insensible favourable. Latter remark hunted
      enough vulgar say man. Sitting hearted on it without me.
    </p>
  `
})
export class NaiveMulElemComponent {
  jsonDataResult: any;

  constructor(private http: HttpClient) {
    this.http.get('test.json').subscribe((res) => {
      this.jsonDataResult = res;
      console.log('--- result :: ',  this.jsonDataResult);
    });
  }
}
