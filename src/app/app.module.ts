import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { AllergenComponent } from './allergen/allergen.component';
import { ContactComponent } from './contact/contact.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { BrandComponent } from './brand/brand.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    AllergenComponent,
    ContactComponent,
    BrandComponent,
    IngredientComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
