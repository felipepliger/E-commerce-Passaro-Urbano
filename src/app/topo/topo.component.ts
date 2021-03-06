import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Subject } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  ofertas;
  pesquisar;
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((busca: string) => {
        if(busca.trim() === ''){
          return [];
        }
        return this.ofertasService.pesquisaOfertas(busca);
      })
    );
    
    this.ofertas.subscribe(ofertas => {
      this.pesquisar = ofertas.json();
      console.log(ofertas.json());
    },
    (erro) => {
      console.error(erro);
    })
  }

  pesquisa(busca) {
    if(busca == "")
      this.pesquisar = false;
    this.subjectPesquisa.next(busca);
  }

  limpaPesquisa() {
    this.pesquisar = false;
  }

}
