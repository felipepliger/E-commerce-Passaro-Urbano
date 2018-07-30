import { Http } from '@angular/http'
import { Injectable } from '@angular/core'

@Injectable()
export class OfertasService {

    private url = 'http://localhost:3000/';

    constructor(
        private http: Http
    ) {

    }

    getOfertas() {
        return this.http.get(this.url + 'ofertas?destaque=true');
    }

    getOfertasPorCategoria(categoria) {
        return this.http.get(this.url + `ofertas?categoria=${categoria}`);
    }

    getOfertaById(id) {
        return this.http.get(this.url + `ofertas?id=${id}`);
    }

    getComoUsarOfertaById(id) {
        return this.http.get(this.url + `como-usar?id=${id}`)
    }

    getOndeFicaOfertaById(id) {
        return this.http.get(this.url + `onde-fica?id=${id}`)
    }

    pesquisaOfertas(pesquisa){
        return this.http.get(this.url + `ofertas?descricao_oferta_like=${pesquisa}`);
    }

}