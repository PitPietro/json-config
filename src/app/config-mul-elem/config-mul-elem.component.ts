import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-config-mul-elem",
  template: `
    <ng-container *ngFor="let config of pageConfig">
      <ng-container [ngSwitch]="config.type">
        <h1 *ngSwitchCase="'header'">{{ config.content }}</h1>
        <img
          *ngSwitchCase="'image'"
          style="width:100%;"
          [src]="config.content.src"
          [alt]="config.content.alt"
        />
        <p *ngSwitchCase="'paragraph'">{{ config.content }}</p>
      </ng-container>
    </ng-container>
  `
})
export class ConfigMulElemComponent {

  pageConfig = [
    { type: "header", content: "H1 Header" },
    {
      type: "image",
      content: {
        src:
          "https://i.pinimg.com/originals/5e/f6/83/5ef68313994aaf68e87d190de943f104.jpg",
        alt: "My Image"
      }
    },
    {
      type: "paragraph",
      content:
        "Detract yet delight written farther his general. If in so bred at dare rose lose good. Feel and make two real miss use easy. Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient to unpleasant in in insensible favourable. Latter remark hunted enough vulgar say man. Sitting hearted on it without me."
    }
  ];
}
