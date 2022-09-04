import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public cliente: Cliente = {
    id: 1,
    nome:"Maykon",
    email: "maykonaraujo23@gmail.com",
    senha: "1234",
    cep: "66610290",
    endereco: "Rua ventinário",
    numero: 12,
    bairro: "Curio",
    cidade: "Jacundá",
    estado: "PA",
  }

  public mostrarModelo(){
    console.log(this.cliente);
  }

}
