import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { url_api } from './api';

@Injectable()
export class OfertasService {

    private url = url_api;

    constructor(
        private http: Http
    ) {

    }

    getOfertas() {
        return this.http.get(this.url + 'ofertas?destaque=true').pipe(
            retry(10)
        );
    }

    getOfertasPorCategoria(categoria) {
        return this.http.get(this.url + `ofertas?categoria=${categoria}`).pipe(
            retry(10)
        );
    }

    getOfertaById(id) {
        return this.http.get(this.url + `ofertas?id=${id}`).pipe(
            retry(10)
        );
    }

    getComoUsarOfertaById(id) {
        return this.http.get(this.url + `como-usar?id=${id}`).pipe(
            retry(10)
        );
    }

    getOndeFicaOfertaById(id) {
        return this.http.get(this.url + `onde-fica?id=${id}`).pipe(
            retry(10)
        );
    }

    pesquisaOfertas(pesquisa){
        return this.http.get(this.url + `ofertas?descricao_oferta_like=${pesquisa}`).pipe(
            retry(10)
        );
    }

}