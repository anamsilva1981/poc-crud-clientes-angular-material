import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }


  salvar(cliente: Cliente){
    console.log(cliente)
  }
}
