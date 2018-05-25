import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})
export class FormUsuariosComponent implements OnInit {

  usuarios = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar(){
    this.usuarios = this.usuarioService.listar();
  }

  adicionar(form: FormControl) {
    this.usuarioService.adicionar(form.value);
    form.reset(); //limpa os campos do form
    this.consultar();
  }

  deletar(id){
    this.usuarioService.deletar(id);
    this.consultar();
  }


}
