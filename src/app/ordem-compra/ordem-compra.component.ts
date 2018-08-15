import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  endereco = null;
  numero = null;
  complemento = null;
  formaPagamento = null;

  enderecoValido;
  numeroValido;
  formaPagamentoValido;

  formEstado = true;

  constructor(
    private _ordem_compra: OrdemCompraService
  ) { }

  ngOnInit() {

  }

  atualizaEndereco(endereco) {
    this.endereco = endereco;
    this.enderecoValido = false;
    if (this.endereco.length > 3)
      this.enderecoValido = true;
    else
      this.enderecoValido = false;
    this.habilitaForm();
  }

  atualizaNumero(numero) {
    this.numero = numero;
    this.numeroValido = false;
    if (this.numero.length > 0)
      this.numeroValido = true;
    else
      this.numeroValido = false;
    this.habilitaForm();
  }

  atualizaComplemento(complemento) {
    this.complemento = complemento;
    this.habilitaForm();
  }

  atualizaFormaPagamento(formaPagamento) {
    this.formaPagamento = formaPagamento;
    this.formaPagamentoValido = false;
    if (this.formaPagamento != null && this.formaPagamento != "")
      this.formaPagamentoValido = true;
    else
      this.formaPagamentoValido = false;
    this.habilitaForm();
  }

  habilitaForm() {
    if (this.enderecoValido == true && this.numeroValido == true && this.formaPagamentoValido == true)
      this.formEstado = false;
    else
      this.formEstado = true;
  }

  confirmarCompra() {
    var dados: Pedido = {
      'endereco': this.endereco,
      'numero' : this.numero,
      'complemento' : this.complemento,
      'formaPagamento' : this.formaPagamento
    };
    this._ordem_compra.efetivarCompra(dados).subscribe(response => {
      console.log(response.json());
    },(error) => {
      console.log(error);
    });
  }

}
