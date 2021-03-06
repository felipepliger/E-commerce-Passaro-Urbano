import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

import {AppComponent} from './app.component';
import {TopoComponent} from './topo/topo.component';
import {HomeComponent} from './home/home.component';
import {RodapeComponent} from './rodape/rodape.component';
import {RestaurantesComponent} from './restaurantes/restaurantes.component';
import {DiversaoComponent} from './diversao/diversao.component';
import {OfertaComponent} from './oferta/oferta.component';
import {OndeFicaComponent} from './oferta/onde-fica/onde-fica.component';
import {ComoUsarComponent} from './oferta/como-usar/como-usar.component';
import {DescricaoReduzida} from './util/descricao-reduzida.pipe';
import {OrdemCompraComponent} from './ordem-compra/ordem-compra.component';
import {OrdemCompraSucessoComponent} from './ordem-compra-sucesso/ordem-compra-sucesso.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        TopoComponent,
        HomeComponent,
        RodapeComponent,
        RestaurantesComponent,
        DiversaoComponent,
        OfertaComponent,
        ComoUsarComponent,
        OndeFicaComponent,
        DescricaoReduzida,
        OrdemCompraComponent,
        OrdemCompraSucessoComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(ROUTES),
        FormsModule
    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'pt'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
