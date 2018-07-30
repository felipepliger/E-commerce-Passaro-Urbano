import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {

  }

  pesquisa(busca){
    this.ofertasService.pesquisaOfertas(busca).subscribe(response => {
      console.log(response.json());
      
    },(error) => {
      console.log(error);
     });
  }

}
