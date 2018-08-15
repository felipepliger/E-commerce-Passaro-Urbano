import { Pedido } from "./shared/pedido.model";
import { Http, RequestOptions, Headers } from '@angular/http';
import { retry } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { url_api } from "./api";

@Injectable()
export class OrdemCompraService {

    private url = url_api;
    
    constructor(
        private http: Http
    ) {
        
    }

    public efetivarCompra(pedido: Pedido){
        let headers: Headers = new Headers();

        headers.append('Content-type', 'application/json');

        return this.http.post("http://localhost:3000/pedidos", pedido, new RequestOptions({headers: headers})).pipe(
            retry(10)
        );
    }

}