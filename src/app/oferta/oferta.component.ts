import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  oferta: any;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe((parametro: any) => {
      this.ofertasService.getOfertaById(parametro.id).subscribe(response => {
        this.oferta = response.json().shift();
      },(error) => {
        console.log(error);
      });
    });
  }

}
