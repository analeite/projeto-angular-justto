import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios = [
    { id: 1, nome: "Ana Beatriz Araujo", idade: "22 anos", data: "19/01/1996"},
    { id: 2, nome: "João Pedro Araujo", idade: "9 anos", data: "02/06/2008"}
  ];

  constructor(private http: HttpClient) { }

  listar(){
    return this.usuarios;
  }

  adicionar(usuario: any){
    let novoUsuario = {
      id: this.usuarios.length + 1,
      nome: usuario.nome,
      idade: usuario.idade,
      data: usuario.data
    };
    this.usuarios.push(novoUsuario);
  }

  deletar(id: any){
    let array_aux = [];

    for (var i = 0; i < this.usuarios.length; i++){
      if(this.usuarios[i].id != id)
        array_aux.push(this.usuarios[i]);
    }
    this.usuarios = array_aux;
  }

}
