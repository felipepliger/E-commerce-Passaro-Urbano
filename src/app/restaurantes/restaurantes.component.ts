import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  ofertas;

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurante').subscribe(response => {
      this.ofertas = response.json();
    },(error) => {
      console.log(error);
     });
  }

}
