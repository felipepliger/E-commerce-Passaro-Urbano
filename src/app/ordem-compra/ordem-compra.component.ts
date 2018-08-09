import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  endereco = null;
  numero = null;
  complemento = null;
  formaPagamento = null;

  enderecoValido = false;
  numeroValido = false;
  complementoValido = false;
  formaPagamentoValido = false;

  constructor() { }

  ngOnInit() {

  }

  atualizaEndereco(endereco) {
    this.endereco = endereco;
    console.log(this.endereco);
  }

  atualizaNumero(numero) {
    this.numero = numero;
    console.log(this.numero);
  }

  atualizaComplemento(complemento) {
    this.complemento = complemento;
    console.log(this.complemento);
  }

  atualizaFormaPagamento(formaPagamento) {
    this.formaPagamento = formaPagamento;
    console.log(this.formaPagamento);
  }

}
