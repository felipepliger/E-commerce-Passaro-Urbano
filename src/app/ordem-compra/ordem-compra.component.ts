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
  formaPagamentoValido = false;

  constructor() { }

  ngOnInit() {

  }

  atualizaEndereco(endereco) {
    this.endereco = endereco;
    if(this.endereco.length > 3)
      this.enderecoValido = true;
    else
      this.enderecoValido = false;
  }

  atualizaNumero(numero) {
    this.numero = numero;
    if(this.numero.length > 0)
      this.numeroValido = true;
    else
      this.numeroValido = false;
  }

  atualizaComplemento(complemento) {
    this.complemento = complemento;
  }

  atualizaFormaPagamento(formaPagamento) {
    this.formaPagamento = formaPagamento;
    if(this.formaPagamento != null)
      this.formaPagamentoValido = true;
    else
      this.formaPagamentoValido = false;
  }

}
