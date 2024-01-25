import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/cards/card.component';
import { MenuComponent } from './components/header/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { CardCircleComponent } from './components/card-circle/card-circle.component';
import { CardAboutComponent } from './components/card-about/card-about.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './pages/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MenuComponent,
    HomeComponent,
    CardCircleComponent,
    CardAboutComponent,
    FooterComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
