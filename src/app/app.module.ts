import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DemoMaterialModule } from "./material-module";
import { AppComponent } from "./app.component";
import { NaiveMulElemComponent } from './naive-mul-elem/naive-mul-elem.component';
import { ConfigMulElemComponent } from './config-mul-elem/config-mul-elem.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NaiveMulElemComponent,
    ConfigMulElemComponent
  ],
  imports: [
    // BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
