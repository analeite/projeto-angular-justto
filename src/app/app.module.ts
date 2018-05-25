import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from './services/usuario.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormUsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
