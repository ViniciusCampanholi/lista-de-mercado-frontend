import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CardProdutoComponent } from './components/card-produto/card-produto.component';
import { BtnNomeListaComponent } from './components/home/btn-nome-lista/btn-nome-lista.component';
import { ItemCompraComponent } from './components/item-compra/item-compra.component';
import { BtnNovoItemComponent } from './components/home/btn-novo-item/btn-novo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    CardProdutoComponent,
    BtnNomeListaComponent,
    ItemCompraComponent,
    BtnNovoItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
